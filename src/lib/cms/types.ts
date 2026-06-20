// Types du CMS — partagés par l'espace /admin et (pour le seed) le site public.
// Conçus pour être repris tels quels par Supabase (1 interface = 1 table).

export type Statut = "brouillon" | "programme" | "publie" | "archive";

export interface BaseItem {
  id: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

/** Actualités (table: news) */
export interface News extends BaseItem {
  titre: string;
  slug: string;
  categorie: string;
  resume: string;
  contenu: string; // markdown léger
  image: string; // URL média
  galerie: string[];
  datePublication: string; // ISO — date d'effet (publication programmée à 00:00)
  statut: Statut;
  miseEnAvant: boolean;
}

/** Agenda (table: events) */
export interface EventItem extends BaseItem {
  titre: string;
  slug: string;
  categorie: string;
  dateDebut: string; // ISO
  dateFin: string; // ISO
  lieu: string;
  description: string;
  image: string;
  inscriptionRequise: boolean;
  miseEnAvant: boolean;
  statut: Statut;
}

/** Pages éditoriales (table: pages) */
export interface PageContent extends BaseItem {
  cle: string; // identifiant de la page publique (ex. "decouvrir")
  titre: string;
  introduction: string;
  blocs: string; // contenu structuré (markdown)
  statut: Statut;
}

/** Médiathèque (table: media) */
export interface MediaItem extends BaseItem {
  url: string;
  type: "image" | "pdf" | "fichier";
  titre: string;
  alt: string; // obligatoire pour les images
  credit: string;
  categorie: string;
}

/** Documents officiels (table: documents) */
export interface DocItem extends BaseItem {
  titre: string;
  type: string; // arrêté, PV, DICRIM, budget…
  fichier: string; // URL PDF
  date: string; // ISO
  description: string;
  tags: string[];
  statut: Statut;
}

/** Réservations de salle (table: room_bookings) */
export type ReservationStatut = "en_attente" | "acceptee" | "refusee" | "annulee";
export interface RoomBooking extends BaseItem {
  salle: string;
  date: string; // ISO (jour)
  heureDebut: string;
  heureFin: string;
  nom: string;
  email: string;
  telephone: string;
  motif: string;
  nombrePersonnes: number;
  message: string;
  statut: ReservationStatut;
  commentaireInterne: string;
}

/** Abonnés newsletter (table: newsletter_subscribers) */
export interface Subscriber extends BaseItem {
  email: string;
  consentement: boolean;
  actif: boolean;
}

/** Campagnes newsletter (table: newsletters) */
export interface Newsletter extends BaseItem {
  sujet: string;
  contenu: string;
  actualitesIncluses: string[]; // ids News
  statut: Statut;
  envoyeLe: string; // ISO ou ""
}

/** Petites annonces (table: classifieds) */
export type AnnonceStatut = "en_attente" | "acceptee" | "refusee" | "archivee";
export interface Classified extends BaseItem {
  titre: string;
  categorie: string;
  description: string;
  contact: string;
  image: string;
  miseEnAvant: boolean;
  statut: AnnonceStatut;
}

/** Annuaire (table: directory_items) */
export interface DirectoryItem extends BaseItem {
  nom: string;
  categorie: string;
  adresse: string;
  telephone: string;
  email: string;
  web: string;
  horaires: string;
  description: string;
  logo: string;
  statut: Statut;
}

/** Messages reçus (contact) (table: messages) */
export interface MessageItem extends BaseItem {
  nom: string;
  email: string;
  objet: string;
  message: string;
  lu: boolean;
}

/** Utilisateurs & rôles (table: users) */
export type Role =
  | "super_admin"
  | "mairie_admin"
  | "communication"
  | "technique"
  | "lecture_seule";
export interface User extends BaseItem {
  nom: string;
  email: string;
  role: Role;
  actif: boolean;
}

/** Journal d'audit (table: audit_logs) */
export interface AuditLog extends BaseItem {
  utilisateur: string;
  action: string; // créé, modifié, publié, supprimé…
  typeContenu: string;
  cible: string;
  ancienStatut: string;
  nouveauStatut: string;
}

/** Contenu éditable de la page d'accueil (table: pages, clé "accueil") */
export interface HomeContent {
  heroEyebrow: string;
  heroTitre: string;
  heroTitreEm: string;
  heroLede: string;
  ctaResident: string;
  ctaVisiteur: string;
  heroImage: string;
  imageSecondaire: string;
}
