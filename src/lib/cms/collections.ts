// Configuration déclarative des modules de l'admin.
// L'interface CRUD (listes + formulaires) est générée à partir d'ici :
// ajouter un champ = une ligne, pas de code d'UI à écrire.

export type FieldType =
  | "text" | "textarea" | "richtext" | "select" | "date" | "datetime"
  | "number" | "checkbox" | "tags" | "image" | "gallery" | "file"
  | "email" | "tel" | "url";

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  help?: string;
  section?: string;
}

export type StatutKind = "contenu" | "reservation" | "annonce" | "none";

export interface Collection {
  key: string;
  label: string;       // pluriel (menu)
  singular: string;    // singulier (bouton « Nouveau … »)
  icon: string;        // path SVG (24x24, stroke)
  group: string;       // groupe de menu
  fields: Field[];
  columns: string[];   // colonnes du tableau (noms de champs)
  titleField: string;
  searchable: string[];
  statut: StatutKind;
  readOnly?: boolean;
  scheduled?: boolean; // affiche « publier maintenant / programmer »
}

const I = {
  news: "M4 5h16M4 5v14H4M4 19h16V5M8 9h8M8 13h5",
  event: "M7 3v3M17 3v3M4 8h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z",
  doc: "M7 3h7l5 5v13H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M14 3v5h5",
  booking: "M3 10h18M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z M9 14l2 2 4-4",
  mail: "M3 6h18v12H3Z M3 6l9 7 9-7",
  classified: "M3 7h18v13H3Z M3 7l3-4h12l3 4 M9 12h6",
  directory: "M4 4h7v7H4Z M13 4h7v7h-7Z M4 13h7v7H4Z M13 13h7v7h-7Z",
  media: "M3 5h18v14H3Z M3 16l5-5 4 4 3-3 6 6",
  users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M2 21a7 7 0 0 1 14 0 M17 11a3 3 0 1 0 0-6",
  page: "M6 3h9l5 5v13H6Z M14 3v6h6",
  audit: "M12 8v4l3 2 M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z",
  send: "M22 2 11 13 M22 2l-7 20-4-9-9-4Z",
};

export const collections: Collection[] = [
  {
    key: "news", label: "Actualités", singular: "Actualité", icon: I.news, group: "Contenu",
    statut: "contenu", scheduled: true, titleField: "titre",
    columns: ["titre", "categorie", "datePublication", "statut"],
    searchable: ["titre", "categorie", "resume"],
    fields: [
      { name: "titre", label: "Titre", type: "text", required: true, section: "Contenu" },
      { name: "categorie", label: "Catégorie", type: "select", options: ["Vie locale", "Cadre de vie", "Solidarité", "Enfance & jeunesse", "Vie municipale", "Culture", "Travaux"], section: "Contenu" },
      { name: "resume", label: "Résumé (chapô)", type: "textarea", required: true, section: "Contenu", help: "1 à 2 phrases affichées en aperçu." },
      { name: "contenu", label: "Contenu", type: "richtext", required: true, section: "Contenu" },
      { name: "image", label: "Image principale", type: "image", section: "Médias" },
      { name: "galerie", label: "Galerie (optionnelle)", type: "gallery", section: "Médias" },
      { name: "miseEnAvant", label: "Mettre à la une", type: "checkbox", section: "Publication" },
      { name: "datePublication", label: "Date de publication", type: "date", section: "Publication", help: "Si programmé, l'actu paraît à cette date à 00:00." },
    ],
  },
  {
    key: "events", label: "Agenda", singular: "Événement", icon: I.event, group: "Contenu",
    statut: "contenu", titleField: "titre",
    columns: ["titre", "dateDebut", "lieu", "statut"],
    searchable: ["titre", "lieu", "categorie"],
    fields: [
      { name: "titre", label: "Titre", type: "text", required: true, section: "Événement" },
      { name: "categorie", label: "Catégorie", type: "select", options: ["Animation", "Marché", "Concert", "Sport", "Réunion", "Exposition"], section: "Événement" },
      { name: "dateDebut", label: "Date de début", type: "date", required: true, section: "Quand & où" },
      { name: "dateFin", label: "Date de fin", type: "date", section: "Quand & où" },
      { name: "lieu", label: "Lieu", type: "text", section: "Quand & où" },
      { name: "description", label: "Description", type: "richtext", section: "Événement" },
      { name: "image", label: "Image", type: "image", section: "Médias" },
      { name: "inscriptionRequise", label: "Inscription requise", type: "checkbox", section: "Options" },
      { name: "miseEnAvant", label: "Mettre en avant", type: "checkbox", section: "Options" },
    ],
  },
  {
    key: "documents", label: "Documents officiels", singular: "Document", icon: I.doc, group: "Contenu",
    statut: "contenu", titleField: "titre",
    columns: ["titre", "type", "date", "statut"],
    searchable: ["titre", "type", "description"],
    fields: [
      { name: "titre", label: "Titre", type: "text", required: true, section: "Document" },
      { name: "type", label: "Type", type: "select", options: ["Arrêté municipal", "Procès-verbal", "Délibération", "DICRIM", "Budget", "Marché public", "Formulaire", "Autre"], section: "Document" },
      { name: "date", label: "Date", type: "date", section: "Document" },
      { name: "description", label: "Description", type: "textarea", section: "Document" },
      { name: "fichier", label: "Fichier PDF", type: "file", section: "Fichier" },
      { name: "tags", label: "Mots-clés", type: "tags", section: "Document" },
    ],
  },
  {
    key: "room_bookings", label: "Réservations de salle", singular: "Réservation", icon: I.booking, group: "Demandes",
    statut: "reservation", titleField: "nom",
    columns: ["salle", "date", "nom", "statut"],
    searchable: ["salle", "nom", "email", "motif"],
    fields: [
      { name: "salle", label: "Salle", type: "select", options: ["Halle des Fêtes", "Salle COSEC", "Espace Arthuss"], section: "Réservation" },
      { name: "date", label: "Date", type: "date", section: "Réservation" },
      { name: "heureDebut", label: "Heure de début", type: "text", section: "Réservation" },
      { name: "heureFin", label: "Heure de fin", type: "text", section: "Réservation" },
      { name: "nombrePersonnes", label: "Nombre de personnes", type: "number", section: "Réservation" },
      { name: "motif", label: "Motif", type: "text", section: "Réservation" },
      { name: "nom", label: "Demandeur", type: "text", required: true, section: "Demandeur" },
      { name: "email", label: "E-mail", type: "email", section: "Demandeur" },
      { name: "telephone", label: "Téléphone", type: "tel", section: "Demandeur" },
      { name: "message", label: "Message", type: "textarea", section: "Demandeur" },
      { name: "commentaireInterne", label: "Commentaire interne (mairie)", type: "textarea", section: "Traitement" },
    ],
  },
  {
    key: "classifieds", label: "Petites annonces", singular: "Annonce", icon: I.classified, group: "Demandes",
    statut: "annonce", titleField: "titre",
    columns: ["titre", "categorie", "statut"],
    searchable: ["titre", "categorie", "description"],
    fields: [
      { name: "titre", label: "Titre", type: "text", required: true, section: "Annonce" },
      { name: "categorie", label: "Catégorie", type: "select", options: ["Dons", "Vente", "Recherche", "Services", "Emploi", "Divers"], section: "Annonce" },
      { name: "description", label: "Description", type: "textarea", required: true, section: "Annonce" },
      { name: "contact", label: "Contact", type: "text", section: "Annonce" },
      { name: "image", label: "Image", type: "image", section: "Annonce" },
      { name: "miseEnAvant", label: "Mettre en avant", type: "checkbox", section: "Modération" },
    ],
  },
  {
    key: "messages", label: "Messages reçus", singular: "Message", icon: I.mail, group: "Demandes",
    statut: "none", titleField: "objet", readOnly: false,
    columns: ["nom", "objet", "createdAt", "lu"],
    searchable: ["nom", "email", "objet", "message"],
    fields: [
      { name: "nom", label: "Nom", type: "text", section: "Message" },
      { name: "email", label: "E-mail", type: "email", section: "Message" },
      { name: "objet", label: "Objet", type: "text", section: "Message" },
      { name: "message", label: "Message", type: "textarea", section: "Message" },
      { name: "lu", label: "Marqué comme lu", type: "checkbox", section: "Traitement" },
    ],
  },
  {
    key: "directory", label: "Annuaire", singular: "Fiche", icon: I.directory, group: "Contenu",
    statut: "contenu", titleField: "nom",
    columns: ["nom", "categorie", "statut"],
    searchable: ["nom", "categorie", "description"],
    fields: [
      { name: "nom", label: "Nom", type: "text", required: true, section: "Identité" },
      { name: "categorie", label: "Catégorie", type: "select", options: ["Commerce", "Artisan", "Santé", "Entreprise", "Association", "Service public", "Contact utile"], section: "Identité" },
      { name: "description", label: "Description", type: "textarea", section: "Identité" },
      { name: "adresse", label: "Adresse", type: "text", section: "Coordonnées" },
      { name: "telephone", label: "Téléphone", type: "tel", section: "Coordonnées" },
      { name: "email", label: "E-mail", type: "email", section: "Coordonnées" },
      { name: "web", label: "Site web", type: "url", section: "Coordonnées" },
      { name: "horaires", label: "Horaires", type: "text", section: "Coordonnées" },
      { name: "logo", label: "Logo / image", type: "image", section: "Médias" },
    ],
  },
  {
    key: "newsletters", label: "Newsletters", singular: "Newsletter", icon: I.send, group: "Communication",
    statut: "contenu", titleField: "sujet",
    columns: ["sujet", "envoyeLe", "statut"],
    searchable: ["sujet", "contenu"],
    fields: [
      { name: "sujet", label: "Sujet", type: "text", required: true, section: "Newsletter" },
      { name: "contenu", label: "Contenu", type: "richtext", section: "Newsletter" },
      { name: "envoyeLe", label: "Envoyée le", type: "date", section: "Envoi" },
    ],
  },
  {
    key: "subscribers", label: "Abonnés newsletter", singular: "Abonné", icon: I.users, group: "Communication",
    statut: "none", titleField: "email",
    columns: ["email", "actif", "createdAt"],
    searchable: ["email"],
    fields: [
      { name: "email", label: "E-mail", type: "email", required: true, section: "Abonné" },
      { name: "consentement", label: "Consentement RGPD", type: "checkbox", section: "Abonné" },
      { name: "actif", label: "Actif", type: "checkbox", section: "Abonné" },
    ],
  },
  {
    key: "directory_pages", label: "Pages du site", singular: "Page", icon: I.page, group: "Contenu",
    statut: "none", titleField: "titre", readOnly: true,
    columns: ["titre"],
    searchable: ["titre"],
    fields: [],
  },
  {
    key: "users", label: "Utilisateurs", singular: "Utilisateur", icon: I.users, group: "Administration",
    statut: "none", titleField: "nom",
    columns: ["nom", "email", "role", "actif"],
    searchable: ["nom", "email"],
    fields: [
      { name: "nom", label: "Nom", type: "text", required: true, section: "Utilisateur" },
      { name: "email", label: "E-mail", type: "email", required: true, section: "Utilisateur" },
      { name: "role", label: "Rôle", type: "select", options: ["super_admin", "mairie_admin", "communication", "technique", "lecture_seule"], section: "Utilisateur" },
      { name: "actif", label: "Compte actif", type: "checkbox", section: "Utilisateur" },
    ],
  },
  {
    key: "audit_logs", label: "Historique", singular: "Entrée", icon: I.audit, group: "Administration",
    statut: "none", titleField: "cible", readOnly: true,
    columns: ["createdAt", "utilisateur", "action", "typeContenu", "cible"],
    searchable: ["utilisateur", "action", "cible", "typeContenu"],
    fields: [],
  },
  {
    key: "media", label: "Médiathèque", singular: "Média", icon: I.media, group: "Contenu",
    statut: "none", titleField: "titre",
    columns: ["titre", "type", "categorie"],
    searchable: ["titre", "alt", "categorie"],
    fields: [
      { name: "titre", label: "Titre", type: "text", required: true, section: "Média" },
      { name: "alt", label: "Texte alternatif (images)", type: "text", section: "Média", help: "Obligatoire pour les images (accessibilité)." },
      { name: "credit", label: "Crédit photo", type: "text", section: "Média" },
      { name: "categorie", label: "Catégorie", type: "text", section: "Média" },
      { name: "url", label: "Fichier", type: "image", section: "Fichier" },
    ],
  },
];

export const byKey = (k: string) => collections.find((c) => c.key === k);

// Pages éditoriales (module « Pages du site »).
export const PAGES_EDITABLES = [
  "Découvrir", "Patrimoine & histoire", "Les trois quartiers", "Tourisme & Hohlandsbourg",
  "Démarches", "Déchets & collecte", "Vie locale", "La Mairie", "Contact",
];
