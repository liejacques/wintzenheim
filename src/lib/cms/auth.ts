// Authentification & rôles (mock côté navigateur).
// ⚠️ Démo : l'authentification réelle se fera via Supabase Auth (voir docs).
// Ici, une simple session locale + une matrice de permissions par rôle.
import type { Role } from "./types";

export interface Session {
  nom: string;
  email: string;
  role: Role;
}

export const ROLES: { value: Role; label: string; desc: string }[] = [
  { value: "super_admin", label: "Super administrateur", desc: "Accès total" },
  { value: "mairie_admin", label: "Administration mairie", desc: "Contenu, documents, réservations" },
  { value: "communication", label: "Communication", desc: "Actualités, agenda, newsletter" },
  { value: "technique", label: "Service technique", desc: "Signalements, documents techniques" },
  { value: "lecture_seule", label: "Lecture seule", desc: "Consultation uniquement" },
];

// Quelles collections chaque rôle peut MODIFIER. "*" = tout.
const ACCES: Record<Role, string[]> = {
  super_admin: ["*"],
  mairie_admin: ["accueil", "news", "events", "pages", "documents", "room_bookings", "directory", "classifieds", "media", "messages"],
  communication: ["news", "events", "newsletters", "subscribers", "media", "accueil"],
  technique: ["documents", "media"],
  lecture_seule: [],
};

export function peutModifier(role: Role, collection: string): boolean {
  const a = ACCES[role] || [];
  return a.includes("*") || a.includes(collection);
}

const KEY = "wz-cms-session";

// Comptes de démonstration (à remplacer par Supabase Auth).
const COMPTES_DEMO: { motDePasse: string; session: Session }[] = [
  { motDePasse: "mairie", session: { nom: "Administrateur", email: "mairie@mairie-wintzenheim.fr", role: "super_admin" } },
];

export function connexion(motDePasse: string): Session | null {
  const c = COMPTES_DEMO.find((x) => x.motDePasse === motDePasse);
  if (!c) return null;
  try { localStorage.setItem(KEY, JSON.stringify(c.session)); } catch (e) { /* */ }
  return c.session;
}

export function sessionCourante(): Session | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch (e) { return null; }
}

export function deconnexion(): void {
  try { localStorage.removeItem(KEY); } catch (e) { /* */ }
}
