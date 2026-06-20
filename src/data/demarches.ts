// Démarches administratives → renvoient vers les téléservices officiels.
// Toutes les URL externes sont vérifiées (RDV360, ANTS, service-public,
// guichet unique de Colmar Agglomération).

export interface Demarche {
  titre: string;
  desc: string;
  lien?: string;
  libelleLien?: string;
}

export interface CategorieDemarche {
  id: string;
  titre: string;
  intro: string;
  demarches: Demarche[];
}

export const categoriesDemarches: CategorieDemarche[] = [
  {
    id: "papiers",
    titre: "Carte d'identité & passeport",
    intro:
      "La mairie de Wintzenheim est équipée d'un dispositif de recueil biométrique. Le dépôt du dossier se fait uniquement sur rendez-vous.",
    demarches: [
      {
        titre: "Prendre rendez-vous (CNI / passeport)",
        desc: "Rendez-vous obligatoire en ligne pour déposer votre dossier.",
        lien: "https://www.rdv360.com/mairie-wintzenheim",
        libelleLien: "Prendre rendez-vous",
      },
      {
        titre: "Faire la pré-demande en ligne",
        desc: "Étape 1 : créez votre pré-demande sur le site de l'ANTS, à imprimer et à joindre au dossier.",
        lien: "https://ants.gouv.fr",
        libelleLien: "Pré-demande ANTS",
      },
      {
        titre: "Acheter un timbre fiscal",
        desc: "Pour un passeport (ou une CNI perdue/volée), achetez votre timbre fiscal dématérialisé.",
        lien: "https://timbres.impots.gouv.fr/",
        libelleLien: "Acheter un timbre",
      },
    ],
  },
  {
    id: "etat-civil",
    titre: "État civil",
    intro:
      "Actes de naissance, de mariage, de décès, PACS et livret de famille. Demande en ligne, sur place (avec pièce d'identité) ou par courrier à la mairie.",
    demarches: [
      {
        titre: "Demander un acte (naissance, mariage, décès)",
        desc: "Copie intégrale ou extrait, via le téléservice national gratuit.",
        lien: "https://www.service-public.fr/particuliers/vosdroits/F1427",
        libelleLien: "Demander un acte",
      },
      {
        titre: "Conclure un PACS",
        desc: "Le pacte civil de solidarité est enregistré en mairie.",
        lien: "https://www.service-public.fr/particuliers/vosdroits/F1618",
        libelleLien: "En savoir plus",
      },
    ],
  },
  {
    id: "urbanisme",
    titre: "Urbanisme",
    intro:
      "Dépôt dématérialisé des autorisations d'urbanisme (certificat, déclaration préalable, permis de construire, de démolir ou d'aménager) via le guichet unique de Colmar Agglomération. Le dépôt papier en mairie reste possible.",
    demarches: [
      {
        titre: "Déposer une demande d'urbanisme",
        desc: "Guichet numérique des autorisations d'urbanisme (GNAU) de Colmar Agglomération.",
        lien: "https://ca-colmar.geosphere.fr/guichet-unique/Login/Particulier",
        libelleLien: "Accéder au guichet unique",
      },
    ],
  },
  {
    id: "citoyennete",
    titre: "Citoyenneté & élections",
    intro:
      "Inscription sur les listes électorales, vote par procuration, recensement citoyen à 16 ans et naturalisation.",
    demarches: [
      {
        titre: "S'inscrire sur les listes électorales",
        desc: "En ligne ou en mairie, avec pièce d'identité et justificatif de domicile.",
        lien: "https://www.service-public.fr/particuliers/vosdroits/R16396",
        libelleLien: "S'inscrire",
      },
      {
        titre: "Faire une procuration",
        desc: "Démarche dématérialisée via Maprocuration, validée en gendarmerie.",
        lien: "https://www.maprocuration.gouv.fr/",
        libelleLien: "Maprocuration",
      },
      {
        titre: "Se faire recenser à 16 ans",
        desc: "Obligatoire dans les 3 mois suivant le 16e anniversaire (Journée Défense et Citoyenneté).",
        lien: "https://www.service-public.fr/particuliers/vosdroits/R2054",
        libelleLien: "Recensement citoyen",
      },
    ],
  },
  {
    id: "emmenagement",
    titre: "Emménagement & véhicule",
    intro:
      "Vous arrivez à Wintzenheim ? Pensez à signaler votre changement d'adresse et à mettre à jour vos papiers.",
    demarches: [
      {
        titre: "Signaler un changement d'adresse",
        desc: "Un seul formulaire pour prévenir plusieurs organismes (CAF, CPAM, impôts, La Poste…).",
        lien: "https://www.service-public.fr/particuliers/vosdroits/R11193",
        libelleLien: "Changer d'adresse",
      },
      {
        titre: "Carte grise & permis de conduire",
        desc: "Démarches liées au véhicule sur le site de l'ANTS.",
        lien: "https://immatriculation.ants.gouv.fr/",
        libelleLien: "Démarches véhicule",
      },
    ],
  },
  {
    id: "social",
    titre: "Logement & social",
    intro:
      "Demande de logement social et accompagnement par le service action sociale de la commune.",
    demarches: [
      {
        titre: "Demander un logement social",
        desc: "Enregistrez votre demande sur le portail national.",
        lien: "https://www.demande-logement-social.gouv.fr/",
        libelleLien: "Faire une demande",
      },
    ],
  },
];
