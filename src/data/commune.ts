// Données institutionnelles vérifiées (source : ville-wintzenheim.fr, INSEE,
// recoupées le 20/06/2026). Ne pas inventer : toute valeur ici est sourcée.

// Construit un lien Google Maps pour une adresse (ouvre l'app Maps sur mobile).
export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const commune = {
  nom: "Wintzenheim",
  gentile: "Wintzenheimois",
  departement: "Haut-Rhin",
  codeDepartement: "68",
  region: "Grand Est",
  cp: "68920",
  cpLogelbach: "68124",
  codeInsee: "68374",
  population: "8 059",
  populationAnnee: "2023",
  superficieKm2: "18,97",
  partForet: "52,7 %",
  intercommunalite: "Colmar Agglomération",
  parc: "Parc naturel régional des Ballons des Vosges",
  maire: "Luca Basso",
  maireDetail: "Maire de Wintzenheim, vice-président de Colmar Agglomération (élu en mars 2026).",
};

export const mairie = {
  nom: "Mairie de Wintzenheim",
  adresse: "28 rue Clemenceau",
  cp: "68920",
  ville: "Wintzenheim",
  tel: "03 89 27 94 94",
  telE164: "+33389279494",
  email: "mairie@mairie-wintzenheim.fr",
  // Horaires d'ouverture au public (vérifiés)
  horaires: [
    { jour: "Lundi", h: "8 h – 16 h" },
    { jour: "Mardi", h: "8 h – 14 h 30" },
    { jour: "Mercredi", h: "8 h – 16 h" },
    { jour: "Jeudi", h: "8 h – 16 h 30" },
    { jour: "Vendredi", h: "8 h – 12 h" },
    { jour: "Samedi – Dimanche", h: "Fermé" },
  ],
  noteHoraires: "Service technique fermé le jeudi matin (ouverture à 12 h).",
};

export const annexe = {
  nom: "Mairie annexe de Logelbach",
  tel: "03 89 30 22 15",
  telE164: "+33389302215",
  email: "mairie.annexe.logelbach@mairie-wintzenheim.fr",
  horaires: "Ouverte le jeudi de 13 h à 16 h 30",
};

export const quartiers = [
  {
    nom: "Centre",
    cp: "68920",
    resume: "Le bourg historique et viticole, autour de la rue Clemenceau, de l'église Saint-Laurent et de la Fontaine de la Vierge.",
    detail:
      "Cœur ancien de la commune, mentionné dès 786 sous le nom de « Wingisheim ». On y trouve l'hôtel de ville (ancien château urbain Thurnburg), les domaines viticoles et le marché du vendredi à la Halle des Fêtes.",
  },
  {
    nom: "Logelbach",
    cp: "68124",
    resume: "L'ancienne cité industrielle textile, née le long du canal du Muhlbach. Tomi Ungerer y a passé son enfance.",
    detail:
      "Quartier façonné par l'industrie textile : manufacture d'indiennes des frères Haussmann (1775), établissements Herzog (1818). L'illustrateur Tomi Ungerer y a grandi, 12 rue Haussmann. Église Notre-Dame-de-l'Assomption (1925-1927), l'une des premières d'Alsace en béton armé.",
  },
  {
    nom: "La Forge",
    cp: "68920",
    resume: "Un hameau créé en 1840 sur une dérivation de la Fecht, à l'ouest du territoire.",
    detail:
      "Troisième quartier de la commune, le plus discret, né d'une dérivation de la rivière la Fecht. Cadre rural et naturel, à l'entrée de la vallée de Munster.",
  },
];

export const jumelages = [
  {
    ville: "Möhnesee",
    pays: "Allemagne",
    detail: "Jumelage avec Möhnesee (Rhénanie-du-Nord-Westphalie).",
  },
  {
    ville: "Pont-du-Casse",
    pays: "France",
    detail: "Pacte d'amitié avec Pont-du-Casse (Lot-et-Garonne).",
  },
];
