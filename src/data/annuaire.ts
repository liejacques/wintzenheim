// Annuaire local — commerces, artisans, santé, entreprises.
//
// IMPORTANT : on ne publie que des informations vérifiées. Les rubriques
// ci-dessous sont prêtes à recevoir les fiches réelles ; tant qu'elles sont
// vides, la page affiche un état « liste en cours de constitution » avec un
// appel à se référencer. Les ASSOCIATIONS, elles, sont déjà renseignées et
// proviennent de src/data/vie-locale.ts (annuaire officiel de la commune).

export interface AnnuaireEntree {
  nom: string;
  activite?: string;
  adresse?: string;
  tel?: string;
  telE164?: string;
  web?: string;
}

export interface AnnuaireRubrique {
  id: string;
  titre: string;
  intro: string;
  entrees: AnnuaireEntree[];
}

export const annuaireRubriques: AnnuaireRubrique[] = [
  {
    id: "commerces",
    titre: "Commerces & services",
    intro: "Alimentation, boulangerie, restaurants, services de proximité.",
    entrees: [],
  },
  {
    id: "artisans",
    titre: "Artisans & bâtiment",
    intro: "Entreprises du bâtiment, métiers de l'artisanat.",
    entrees: [],
  },
  {
    id: "sante",
    titre: "Santé",
    intro: "Médecins, pharmacie, infirmiers et autres professionnels de santé.",
    entrees: [],
  },
  {
    id: "entreprises",
    titre: "Entreprises",
    intro: "Entreprises et employeurs implantés sur la commune.",
    entrees: [],
  },
];
