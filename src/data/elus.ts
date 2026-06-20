// Élus municipaux (mandat issu des élections de mars 2026).
// Source : ville-wintzenheim.fr/maire-et-adjoints/

export const maire = {
  nom: "Luca Basso",
  fonction: "Maire de Wintzenheim",
  detail: "Également vice-président de Colmar Agglomération.",
};

export const adjoints = [
  {
    rang: "1er adjoint",
    nom: "Alexis Struss",
    delegation: "Communication, vie citoyenne, commerce et tourisme",
  },
  {
    rang: "2e adjointe",
    nom: "Clara Beaufrand",
    delegation: "Finances, commande publique, culture et vie associative",
  },
  {
    rang: "3e adjoint",
    nom: "Sébastien Ligibell",
    delegation: "Urbanisme, action foncière et manifestations communales",
  },
  {
    rang: "4e adjointe",
    nom: "Estelle Baudelet",
    delegation: "Enfance et jeunesse (éducation, périscolaire, petite enfance)",
  },
  {
    rang: "5e adjoint",
    nom: "Ludovic Campitelli",
    delegation: "Transition écologique et espaces naturels (forêt, chasse)",
  },
  {
    rang: "6e adjointe",
    nom: "Mireille Weiss",
    delegation: "Action sociale, logement et solidarité",
  },
  {
    rang: "7e adjoint",
    nom: "Benoît Freyburger",
    delegation: "Patrimoine bâti et voirie",
  },
];

export const conseillersDelegues = [
  { nom: "Giovanni Agosta", delegation: "Sports" },
  { nom: "Carine Nägl", delegation: "Organisation des manifestations" },
  { nom: "Daniel Ougier", delegation: "Sécurité" },
];

export const conseil = {
  sieges: 29,
  majorite: { liste: "Vive Wintzenheim", sieges: 25 },
  opposition: { liste: "Wintzen'aime pour vous, avec vous", sieges: 4 },
  pvUrl: "https://www.ville-wintzenheim.fr/conseil-municipal-pv/",
  lieu: "Salle du Conseil, Mairie de Wintzenheim, 28 rue Clemenceau",
  note: "Le conseil municipal compte 29 élus. Comptes-rendus, procès-verbaux et délibérations sont publiés en ligne.",
};

// Instances complémentaires de démocratie locale
export const instances = [
  "Conseil Municipal des Aînés (CMA)",
  "Conseil Municipal des Jeunes (CMJ)",
];
