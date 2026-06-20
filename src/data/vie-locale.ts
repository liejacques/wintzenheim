// Vie locale — écoles, petite enfance, culture, sport, associations, solidarité.
// Coordonnées vérifiées ; les noms d'associations proviennent de l'annuaire
// officiel de la commune (on renvoie à l'annuaire pour le détail à jour).

export const ecoles = [
  { nom: "École maternelle Arc-en-Ciel", quartier: "Centre", adresse: "1-3 rue Aloyse Meyer", tel: "03 89 27 34 11" },
  { nom: "École maternelle Les Nénuphars", quartier: "Logelbach", adresse: "9 rue Herzog", tel: "03 89 27 30 11" },
  { nom: "École élémentaire La Dame-Blanche", quartier: "Centre", adresse: "rue des Près", tel: "03 89 27 49 02" },
  { nom: "Groupe scolaire Les Cèdres", quartier: "Logelbach", adresse: "9 rue Herzog", tel: "03 89 27 03 17" },
  { nom: "Collège Jacques-Prévert", quartier: "Centre", adresse: "15 rue de la Vallée", tel: "03 89 27 02 03" },
  { nom: "Lycée agricole du Pflixbourg", quartier: "Saint-Gilles", adresse: "2 lieu-dit Saint-Gilles", tel: "03 89 27 06 40" },
];

export const ecolePrivee = {
  nom: "École Steiner-Waldorf Mathias-Grunewald",
  quartier: "Logelbach",
  adresse: "4 rue Herzog",
  detail: "Pédagogie Steiner-Waldorf, du jardin d'enfants au lycée. L'une des plus grandes écoles Waldorf de France.",
};

export const enfanceJeunesse = {
  intro:
    "À la rentrée 2026, la Ville assure en gestion directe l'accueil périscolaire et de loisirs, avec une nouvelle restauration scolaire. Inscriptions au Service Enfance Jeunesse, en Mairie.",
  structures: [
    { nom: "Accueil périscolaire & de loisirs", detail: "Géré par la Ville à partir de la rentrée 2026 (midi, soir, mercredis et vacances). Inscriptions en Mairie." },
    { nom: "Crèche « Pom' de Reinette »", detail: "Structure multi-accueil pour la petite enfance." },
    { nom: "Espace d'Animations Arthuss (EAA)", detail: "Activités et programmes de vacances pour les jeunes (03 89 79 60 17)." },
  ],
};

export const culture = [
  {
    nom: "Espace culturel Arthuss",
    detail: "Pôle culturel et associatif : saison de spectacles, expositions et conférences, avec un auditorium.",
    contact: "12 rue du Hohlandsbourg, Logelbach · 03 89 79 60 17",
    lien: "https://wintzenheim.notre-billetterie.fr",
    libelleLien: "Billetterie en ligne",
  },
  {
    nom: "École de Musique et de Danse (EMDW)",
    detail: "L'école municipale de musique et de danse, qui fête ses 45 ans en 2025-2026.",
    lien: "https://www.emdwintz.fr/",
    libelleLien: "Site de l'EMDW",
  },
  {
    nom: "Relais lecture « Le Livrier »",
    detail: "L'offre de lecture publique de la commune.",
  },
];

// Associations : noms réels classés par famille (annuaire officiel).
export const associations = {
  annuaireUrl: "https://www.ville-wintzenheim.fr/liste-des-associations/",
  familles: [
    {
      famille: "Sport",
      exemples: [
        "AS Wintzenheim (football, depuis 1925)",
        "New Basket Club Wintzenheim",
        "Handball Club Wintzenheim",
        "Judo Club, Karaté Club, Tanko-Kan (kendo)",
        "Gymnastique Volontaire, Ski Club Hohlandsbourg",
      ],
    },
    {
      famille: "Culture & musique",
      exemples: [
        "Harmonie Municipale Hohlandsbourg",
        "Chorales Laurentia, Sainte-Cécile, Saint-Joseph",
        "Société d'Histoire de Wintzenheim",
        "Théâtre de la Citerne, Compagnie Les Vrilles",
      ],
    },
    {
      famille: "Loisirs & nature",
      exemples: [
        "Club Vosgien de Wintzenheim (depuis 1873)",
        "MJC – Espace de Vie Sociale du Cheval Blanc",
        "Cercle d'Échecs, Tarot Club",
        "Société d'Aviculture, A.P.P. (pêche)",
      ],
    },
    {
      famille: "Solidarité & citoyenneté",
      exemples: [
        "Croix-Rouge française (antenne locale)",
        "Association des Donneurs de Sang",
        "Conférence Saint-Vincent-de-Paul",
        "Conseil Municipal des Aînés",
      ],
    },
  ],
};

export const sportEquipements = [
  { nom: "COSEC", detail: "Salle multisports", contact: "3 rue Aloyse Meyer · 03 89 27 25 40" },
  { nom: "Halle des Fêtes", detail: "Expositions, marché du vendredi, manifestations" },
  { nom: "Stade Saint-Gilles", detail: "Football (AS Wintzenheim)" },
];

export const solidarite = {
  intro:
    "L'action sociale, le logement et la solidarité sont portés par la commune (6e adjointe : Mireille Weiss). Des permanences sont assurées le vendredi matin de 8 h à 12 h.",
  dispositifs: [
    "Registre canicule / personnes vulnérables",
    "Demande de logement social",
    "Conseil Municipal des Aînés (seniors)",
    "Accompagnement par le service action sociale",
  ],
};
