// Déchets & collecte — compétence de Colmar Agglomération.
// Source : agglo-colmar.fr / ville-wintzenheim.fr.

export const dechetsContact = {
  autorite: "Colmar Agglomération",
  tel: "03 89 24 66 99",
  telE164: "+33389246699",
  email: "contact.dechet@agglo-colmar.fr",
  carteUrl: "https://geo.agglo-colmar.fr/dechets/",
  memotriUrl: "https://www.memotri.com",
};

export const collecte = {
  intro:
    "La collecte se fait en porte-à-porte du lundi au vendredi, selon un calendrier propre à votre rue. Consultez la carte interactive de Colmar Agglomération pour connaître vos jours de passage.",
  regles: [
    "Sortez vos bacs la veille au soir, sans gêner le passage.",
    "Lors d'une semaine avec jour férié, la collecte est décalée d'un jour.",
    "Utilisez des sacs biodégradables pour les biodéchets.",
  ],
};

export const tri = [
  {
    flux: "Bac jaune — emballages & papiers",
    consigne: "Tous les emballages se trient : bouteilles et flacons, briques et cartons, métal, films et barquettes plastique, ainsi que tous les papiers. Inutile de les laver, il suffit de bien les vider.",
  },
  {
    flux: "Conteneur vert — verre",
    consigne: "Bouteilles, pots et bocaux en verre, sans bouchon ni couvercle. Ni vaisselle ni verre à boire.",
  },
  {
    flux: "Biodéchets",
    consigne: "Collectés en porte-à-porte dans des sacs biodégradables. Le compostage individuel est encouragé.",
  },
];

export const decheterie = {
  nom: "Déchèterie Europe (Wintzenheim)",
  adresse: "9 rue des Champs, 68124 Wintzenheim",
  tel: "03 89 24 66 99",
  acces: "Accès réservé aux particuliers, sur présentation d'un laissez-passer.",
  horaires: [
    { saison: "Avril à septembre", h: "Semaine 9 h-19 h · samedi 8 h-18 h · dimanche 9 h-12 h 30" },
    { saison: "Octobre à mars", h: "Semaine 9 h-18 h · samedi 8 h-17 h · dimanche 9 h-12 h 30" },
  ],
};
