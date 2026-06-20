// Store CMS — persistance locale (localStorage) côté navigateur.
// Couche d'accès unique : pour brancher Supabase plus tard, il suffit de
// remplacer le corps de ces fonctions par des appels supabase.from(...).
import * as seed from "./seed";
import type { AuditLog, HomeContent } from "./types";
import { sessionCourante } from "./auth";

const NS = "wz-cms:";

const SEEDS: Record<string, any[]> = {
  news: seed.seedNews,
  events: seed.seedEvents,
  directory: seed.seedDirectory,
  documents: seed.seedDocuments,
  room_bookings: seed.seedBookings,
  subscribers: seed.seedSubscribers,
  newsletters: seed.seedNewsletters,
  classifieds: seed.seedClassifieds,
  messages: seed.seedMessages,
  users: seed.seedUsers,
  media: seed.seedMedia,
  audit_logs: [],
};

function read<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(NS + key);
    if (raw) return JSON.parse(raw) as T[];
  } catch (e) { /* */ }
  const s = (SEEDS[key] || []) as T[];
  write(key, s);
  return s;
}

function write<T>(key: string, items: T[]): void {
  try { localStorage.setItem(NS + key, JSON.stringify(items)); } catch (e) { /* quota */ }
}

export function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function list<T>(key: string): T[] {
  return read<T>(key);
}

export function get<T extends { id: string }>(key: string, id: string): T | undefined {
  return read<T>(key).find((x) => x.id === id);
}

export function create<T extends Record<string, any>>(key: string, item: Partial<T>): T {
  const items = read<any>(key);
  const iso = new Date().toISOString();
  const full = { id: uid(), createdAt: iso, updatedAt: iso, ...item };
  items.unshift(full);
  write(key, items);
  audit("Création", key, full.titre || full.nom || full.email || full.id, "", full.statut || "");
  return full as T;
}

export function update<T extends { id: string; statut?: string }>(key: string, id: string, patch: Partial<T>): T | undefined {
  const items = read<any>(key);
  const idx = items.findIndex((x) => x.id === id);
  if (idx === -1) return undefined;
  const before = items[idx];
  const after = { ...before, ...patch, updatedAt: new Date().toISOString() };
  items[idx] = after;
  write(key, items);
  audit("Modification", key, after.titre || after.nom || after.email || id, before.statut || "", after.statut || "");
  return after as T;
}

export function remove(key: string, id: string): void {
  const items = read<any>(key);
  const target = items.find((x) => x.id === id);
  write(key, items.filter((x) => x.id !== id));
  audit("Suppression", key, target?.titre || target?.nom || id, target?.statut || "", "");
}

export function duplicate<T extends { id: string; titre?: string }>(key: string, id: string): T | undefined {
  const src = get<any>(key, id);
  if (!src) return undefined;
  const { id: _i, createdAt: _c, updatedAt: _u, ...rest } = src;
  return create<any>(key, { ...rest, titre: rest.titre ? rest.titre + " (copie)" : rest.titre, statut: "brouillon" });
}

// --- Singleton : contenu de l'accueil ---
export function getHome(): HomeContent {
  try {
    const raw = localStorage.getItem(NS + "home");
    if (raw) return JSON.parse(raw) as HomeContent;
  } catch (e) { /* */ }
  write("home", seed.seedHome as any);
  return seed.seedHome;
}
export function setHome(v: HomeContent): void {
  try { localStorage.setItem(NS + "home", JSON.stringify(v)); } catch (e) { /* */ }
  audit("Modification", "accueil", "Page d'accueil", "", "");
}

// --- Audit ---
function audit(action: string, typeContenu: string, cible: string, ancien: string, nouveau: string): void {
  if (typeContenu === "audit_logs") return;
  const items = read<AuditLog>("audit_logs");
  const u = sessionCourante();
  items.unshift({
    id: uid(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    utilisateur: u?.nom || "—",
    action,
    typeContenu,
    cible: String(cible),
    ancienStatut: ancien,
    nouveauStatut: nouveau,
  });
  write("audit_logs", items.slice(0, 300));
}

/** Réinitialise tout le CMS aux données d'origine. */
export function reinitialiser(): void {
  Object.keys(SEEDS).forEach((k) => { try { localStorage.removeItem(NS + k); } catch (e) {} });
  try { localStorage.removeItem(NS + "home"); } catch (e) {}
}

/** Export JSON (sauvegarde). */
export function exporter(): string {
  const data: Record<string, any> = { home: getHome() };
  Object.keys(SEEDS).forEach((k) => { data[k] = read(k); });
  return JSON.stringify(data, null, 2);
}
