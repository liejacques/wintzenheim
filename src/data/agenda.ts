// Agenda 2026 — événements vérifiés (ville-wintzenheim.fr).
// Les horaires incertains sont volontairement présentés de façon prudente.

export interface Evenement {
  slug: string;
  jour: string;
  mois: string;
  iso: string; // pour l'attribut datetime
  dateLisible: string;
  titre: string;
  lieu: string;
  resume: string;
  detail?: string[];
  pratique?: { label: string; valeur: string }[];
  detailPage?: boolean;
}

export const evenements: Evenement[] = [
  {
    slug: "fete-de-la-musique-2026",
    jour: "21",
    mois: "Juin",
    iso: "2026-06-21",
    dateLisible: "Dimanche 21 juin 2026",
    titre: "Fête de la Musique",
    lieu: "Wintzenheim & Logelbach",
    resume: "Dès 19 h sur deux sites, entrée libre. Restauration sur place.",
    detail: [
      "La Fête de la Musique se tient sur deux places du village : la place des Fêtes à Wintzenheim et le parvis de l'église à Logelbach.",
      "Concerts en accès libre à partir de 19 h, restauration sur les deux sites.",
    ],
    pratique: [
      { label: "Date", valeur: "Dimanche 21 juin 2026, dès 19 h" },
      { label: "Lieux", valeur: "Place des Fêtes (Wintzenheim) · parvis de l'église (Logelbach)" },
      { label: "Tarif", valeur: "Entrée libre" },
    ],
  },
  {
    slug: "fete-revolutionnaire-2026",
    jour: "12",
    mois: "Juil.",
    iso: "2026-07-12",
    dateLisible: "Dimanche 12 juillet 2026",
    titre: "La Fête Révolutionnaire",
    lieu: "Centre-ville",
    resume: "Déambulation, orchestres, défilé costumé et feu d'artifice à 23 h.",
    detail: [
      "La Fête Révolutionnaire fait son grand retour dans le centre-ville de Wintzenheim, sur le thème de la Révolution française.",
      "La soirée s'ouvre dès 18 h 30 par la déambulation de Bal'us'trad, suivie des orchestres place de la Mairie, puis d'un grand défilé costumé qui descend la rue Clemenceau jusqu'au parvis de l'école Dame-Blanche. Le feu d'artifice est tiré à 23 h.",
      "La municipalité prête gratuitement les costumes : retrait le mardi 7 juillet de 13 h à 16 h à l'école primaire La Dame-Blanche, restitution entre le 17 et le 31 août en Mairie.",
    ],
    pratique: [
      { label: "Date", valeur: "Dimanche 12 juillet 2026, à partir de 18 h 30" },
      { label: "Lieu", valeur: "Centre-ville de Wintzenheim" },
      { label: "Feu d'artifice", valeur: "23 h" },
      { label: "Prêt de costumes", valeur: "Inscription auprès du Service Vie associative — cbuhler@mairie-wintzenheim.fr" },
    ],
    detailPage: true,
  },
  {
    slug: "maisons-fleuries-2026",
    jour: "15",
    mois: "Juil.",
    iso: "2026-07-15",
    dateLisible: "Jusqu'au 15 juillet 2026",
    titre: "Concours des Maisons Fleuries",
    lieu: "Toute la commune",
    resume: "Inscription gratuite en Mairie jusqu'au 15 juillet. Passage du jury fin juillet.",
    detail: [
      "Le concours des Maisons Fleuries récompense l'embellissement du cadre de vie en trois catégories : maisons individuelles, immeubles collectifs, commerces et structures artisanales.",
      "Inscription gratuite jusqu'au 15 juillet (bulletin à retirer au Service Technique). Le jury passe fin juillet.",
    ],
    pratique: [
      { label: "Clôture des inscriptions", valeur: "15 juillet 2026" },
      { label: "Contact", valeur: "Service Technique — 03 89 27 94 92" },
    ],
  },
  {
    slug: "marche-de-noel-2026",
    jour: "04",
    mois: "Déc.",
    iso: "2026-12-04",
    dateLisible: "Du 4 au 6 décembre 2026",
    titre: "Marché de Noël",
    lieu: "Halle & place des Fêtes",
    resume: "Vendredi 4 (14 h-19 h), samedi 5 et dimanche 6 décembre (10 h-19 h).",
    detail: [
      "Le marché de Noël de Wintzenheim réunit ses exposants à la Halle des Fêtes et sur la place des Fêtes.",
      "Vendredi 4 décembre de 14 h à 19 h, samedi 5 et dimanche 6 décembre de 10 h à 19 h.",
    ],
    pratique: [
      { label: "Dates", valeur: "Vendredi 4 au dimanche 6 décembre 2026" },
      { label: "Lieu", valeur: "Halle des Fêtes & place des Fêtes" },
    ],
  },
];

// Marchés hebdomadaires (récurrents)
export const marches = [
  {
    jour: "Vendredi",
    horaire: "8 h – 12 h",
    lieu: "Halle des Fêtes, Wintzenheim",
    produits: "Fruits, légumes, charcuterie et produits locaux.",
  },
  {
    jour: "Mercredi",
    horaire: "8 h – 12 h",
    lieu: "Parvis de l'église Notre-Dame-de-l'Assomption, Logelbach",
    produits: "Fruits, légumes, charcuterie et produits locaux.",
  },
];

export const billetterieUrl = "https://wintzenheim.notre-billetterie.fr";
