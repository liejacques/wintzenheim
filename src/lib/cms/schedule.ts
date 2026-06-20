// Logique de publication programmée (partagée admin + public).
import type { Statut } from "./types";

export interface Schedulable {
  statut: Statut;
  datePublication?: string;
}

/** Un contenu est visible publiquement si publié, ou programmé dont la date est passée. */
export function estVisible(item: Schedulable, now: Date = new Date()): boolean {
  if (item.statut === "publie") return true;
  if (item.statut === "programme" && item.datePublication) {
    return new Date(item.datePublication).getTime() <= now.getTime();
  }
  return false; // brouillon / archive → jamais public
}

/** Statut « effectif » affiché (un programmé échu compte comme publié). */
export function statutEffectif(item: Schedulable, now: Date = new Date()): Statut {
  if (item.statut === "programme" && item.datePublication &&
      new Date(item.datePublication).getTime() <= now.getTime()) {
    return "publie";
  }
  return item.statut;
}

export const STATUT_LABEL: Record<Statut, string> = {
  brouillon: "Brouillon",
  programme: "Programmé",
  publie: "Publié",
  archive: "Archivé",
};
