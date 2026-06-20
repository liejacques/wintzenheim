// Données initiales (seed) du CMS — dérivées du contenu réel du site pour que
// l'espace /admin démarre avec de vraies actualités, événements, etc.
// Remplaçable par Supabase : ces tableaux deviendront des SELECT.
import { articles } from "../../data/actualites";
import { evenements } from "../../data/agenda";
import { associations } from "../../data/vie-locale";
import type {
  News, EventItem, DirectoryItem, DocItem, RoomBooking, Subscriber,
  Newsletter, Classified, MessageItem, User, MediaItem, HomeContent,
} from "./types";

const now = "2026-06-21T08:00:00.000Z";
const stamp = (i: number) => ({ createdAt: now, updatedAt: now, id: String(i) });

export const seedNews: News[] = articles.map((a, i) => ({
  ...stamp(i + 1),
  titre: a.titre,
  slug: a.slug,
  categorie: a.rubrique,
  resume: a.chapo,
  contenu: a.corps.join("\n\n"),
  image: a.image ? `(image : ${a.image})` : "",
  galerie: [],
  datePublication: a.iso + "T00:00:00.000Z",
  statut: "publie",
  miseEnAvant: i === 0,
}));

export const seedEvents: EventItem[] = evenements.map((e, i) => ({
  ...stamp(i + 1),
  titre: e.titre,
  slug: e.slug,
  categorie: "Animation",
  dateDebut: e.iso + "T00:00:00.000Z",
  dateFin: e.iso + "T00:00:00.000Z",
  lieu: e.lieu,
  description: (e.detail || [e.resume]).join("\n\n"),
  image: "",
  inscriptionRequise: false,
  miseEnAvant: i < 2,
  statut: "publie",
}));

export const seedDirectory: DirectoryItem[] = associations.familles
  .flatMap((f) => f.exemples.map((nom) => ({ nom, categorie: "Association · " + f.famille })))
  .map((x, i) => ({
    ...stamp(i + 1),
    nom: x.nom,
    categorie: x.categorie,
    adresse: "",
    telephone: "",
    email: "",
    web: "",
    horaires: "",
    description: "",
    logo: "",
    statut: "publie" as const,
  }));

export const seedDocuments: DocItem[] = [
  { titre: "Compte rendu du conseil municipal", type: "Procès-verbal", date: "2026-05-22T00:00:00.000Z", description: "Séance du 22 mai 2026.", tags: ["conseil"], statut: "publie" },
  { titre: "Budget primitif 2026", type: "Budget", date: "2026-04-10T00:00:00.000Z", description: "Budget voté pour l'exercice 2026.", tags: ["finances"], statut: "publie" },
  { titre: "DICRIM — risques majeurs", type: "DICRIM", date: "2026-01-15T00:00:00.000Z", description: "Document d'information communal sur les risques majeurs.", tags: ["sécurité"], statut: "brouillon" },
].map((d, i) => ({ ...stamp(i + 1), fichier: "", ...d }));

const salleOpts = ["Halle des Fêtes", "Salle COSEC", "Espace Arthuss"];
export const seedBookings: RoomBooking[] = [
  { salle: salleOpts[0], date: "2026-07-05T00:00:00.000Z", heureDebut: "14:00", heureFin: "23:00", nom: "Association AS Wintzenheim", email: "contact@example.com", telephone: "06 00 00 00 00", motif: "Repas associatif", nombrePersonnes: 120, message: "", statut: "en_attente", commentaireInterne: "" },
  { salle: salleOpts[2], date: "2026-06-28T00:00:00.000Z", heureDebut: "09:00", heureFin: "12:00", nom: "Marie Dupont", email: "marie@example.com", telephone: "06 11 11 11 11", motif: "Réunion de quartier", nombrePersonnes: 25, message: "Besoin d'un vidéoprojecteur.", statut: "acceptee", commentaireInterne: "Salle libre, OK." },
].map((b, i) => ({ ...stamp(i + 1), ...b }));

export const seedSubscribers: Subscriber[] = [
  "habitant1@example.com", "habitant2@example.com", "asso@example.com",
].map((email, i) => ({ ...stamp(i + 1), email, consentement: true, actif: true }));

export const seedNewsletters: Newsletter[] = [
  { ...stamp(1), sujet: "Lettre de juin 2026", contenu: "Les temps forts de l'été à Wintzenheim.", actualitesIncluses: [], statut: "brouillon", envoyeLe: "" },
];

export const seedClassifieds: Classified[] = [
  { ...stamp(1), titre: "Vélo enfant à donner", categorie: "Dons", description: "Vélo 20 pouces, bon état.", contact: "06 22 22 22 22", image: "", miseEnAvant: false, statut: "en_attente" },
];

export const seedMessages: MessageItem[] = [
  { ...stamp(1), nom: "Paul Martin", email: "paul@example.com", objet: "Question état civil", message: "Comment obtenir un acte de naissance ?", lu: false },
];

export const seedUsers: User[] = [
  { ...stamp(1), nom: "Administrateur", email: "mairie@mairie-wintzenheim.fr", role: "super_admin", actif: true },
  { ...stamp(2), nom: "Service communication", email: "communication@mairie-wintzenheim.fr", role: "communication", actif: true },
];

export const seedMedia: MediaItem[] = [];

export const seedHome: HomeContent = {
  heroEyebrow: "Au pied du Hohlandsbourg · Route des Vins",
  heroTitre: "Wintzenheim,",
  heroTitreEm: "à vivre et à découvrir.",
  heroLede: "Une ville alsacienne entre vignoble, patrimoine et vie locale. Choisissez votre parcours pour aller directement à l'essentiel.",
  ctaResident: "Mes services au quotidien",
  ctaVisiteur: "Préparer ma visite",
  heroImage: "(hôtel de ville)",
  imageSecondaire: "(panorama)",
};

export const SALLES = salleOpts;
