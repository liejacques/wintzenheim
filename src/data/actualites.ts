// Actualités municipales (reformulées à partir des publications officielles
// de juin 2026 — ne pas recopier l'ancien site mot pour mot).
import { estVisible, type Schedulable } from "../lib/cms/schedule";

export interface Article {
  slug: string;
  rubrique: string;
  titre: string;
  dateLisible: string;
  iso: string; // sert aussi de date de publication (programmation à 00:00)
  chapo: string;
  corps: string[];
  pratique?: { label: string; valeur: string }[];
  image?: "rue-clemenceau" | "panorama" | "chateau";
  /** Publication programmée : "publie" (défaut), "programme", "brouillon", "archive". */
  statut?: "publie" | "programme" | "brouillon" | "archive";
}

export const articles: Article[] = [
  {
    slug: "maisons-fleuries-2026",
    rubrique: "Cadre de vie",
    titre: "Maisons Fleuries 2026 : inscrivez-vous avant le 15 juillet",
    dateLisible: "16 juin 2026",
    iso: "2026-06-16",
    chapo:
      "Le concours communal des Maisons Fleuries récompense celles et ceux qui embellissent Wintzenheim. Inscription gratuite jusqu'au 15 juillet.",
    corps: [
      "Comme chaque année, la commune organise son concours des Maisons Fleuries pour valoriser l'embellissement du cadre de vie. La participation est gratuite et ouverte à tous les habitants.",
      "Trois catégories sont proposées : les maisons individuelles (avec ou sans jardin), les immeubles collectifs (balcons, fenêtres, espaces communs) et les commerces et structures artisanales.",
      "Les bulletins d'inscription sont à retirer au Service Technique ou à télécharger. Le jury passera fin juillet pour apprécier les réalisations.",
    ],
    pratique: [
      { label: "Clôture des inscriptions", valeur: "15 juillet 2026" },
      { label: "Renseignements", valeur: "Service Technique — 03 89 27 94 92" },
    ],
    image: "rue-clemenceau",
  },
  {
    slug: "plan-canicule-2026",
    rubrique: "Solidarité",
    titre: "Plan canicule : pensez à vous inscrire sur le registre communal",
    dateLisible: "16 juin 2026",
    iso: "2026-06-16",
    chapo:
      "Pour mieux protéger les personnes les plus fragiles pendant les fortes chaleurs, la commune tient un registre nominatif et confidentiel.",
    corps: [
      "Dans le cadre du plan canicule, la Mairie tient à jour un registre des personnes vulnérables : personnes âgées, isolées ou en situation de handicap qui le souhaitent.",
      "L'inscription, volontaire et confidentielle, permet aux services communaux de prendre régulièrement des nouvelles et d'intervenir en cas d'épisode de forte chaleur.",
      "Vous pouvez inscrire un proche ou vous-même en contactant la Mairie. L'inscription peut aussi être faite par un tiers (famille, voisin, médecin).",
    ],
    pratique: [
      { label: "Inscription", valeur: "Mairie de Wintzenheim — 03 89 27 94 94" },
    ],
  },
  {
    slug: "periscolaire-gestion-municipale-2026",
    rubrique: "Enfance & jeunesse",
    titre: "Périscolaire : la Ville reprend la gestion directe à la rentrée 2026",
    dateLisible: "4 juin 2026",
    iso: "2026-06-04",
    chapo:
      "À la rentrée 2026, l'accueil périscolaire et de loisirs passe en gestion municipale directe, avec une nouvelle restauration scolaire.",
    corps: [
      "À compter de la rentrée 2026, la Ville de Wintzenheim assure directement la gestion de l'accueil périscolaire et de l'accueil de loisirs, auparavant délégués (service « La Récréation »).",
      "La restauration scolaire évolue également, avec des repas en liaison chaude assurés par un nouveau prestataire et une attention portée aux circuits courts.",
      "Les inscriptions et le dépôt des dossiers se font auprès du Service Enfance Jeunesse, en Mairie. Les familles précédemment inscrites doivent récupérer leur dossier auprès de l'ancien gestionnaire (la Mairie n'y a pas accès, pour des raisons de protection des données).",
    ],
    pratique: [
      { label: "Inscriptions", valeur: "Service Enfance Jeunesse — Mairie, 03 89 27 94 94" },
    ],
  },
  {
    slug: "recrutement-police-municipale",
    rubrique: "Vie municipale",
    titre: "La commune recrute un·e policier·e municipal·e",
    dateLisible: "2 juin 2026",
    iso: "2026-06-02",
    chapo:
      "Wintzenheim renforce sa police municipale et recherche un·e agent·e pour assurer la tranquillité et la sécurité au quotidien.",
    corps: [
      "La Ville de Wintzenheim recrute un·e policier·e municipal·e. Les missions couvrent la surveillance de la voie publique, la prévention et le bon déroulement des manifestations communales.",
      "Les candidatures (lettre de motivation et CV) sont à adresser à Monsieur le Maire.",
    ],
    pratique: [
      { label: "Candidatures", valeur: "Mairie de Wintzenheim — mairie@mairie-wintzenheim.fr" },
    ],
  },
  {
    slug: "programme-ete-arthuss-2026",
    rubrique: "Jeunesse & culture",
    titre: "Le programme d'été de l'Arthuss est disponible",
    dateLisible: "29 avril 2026",
    iso: "2026-04-29",
    chapo:
      "L'Espace d'Animations Arthuss dévoile son programme d'activités pour les jeunes cet été.",
    corps: [
      "L'Espace d'Animations Arthuss (EAA) propose tout l'été un programme d'activités pour les jeunes : sorties, ateliers et animations.",
      "Le programme complet et les modalités d'inscription sont disponibles auprès de l'Arthuss et de la Mairie.",
    ],
    pratique: [
      { label: "Renseignements", valeur: "Espace Arthuss — 03 89 79 60 17" },
    ],
  },
];

/**
 * Actualités réellement visibles côté public : publiées, ou programmées dont la
 * date est atteinte. Les brouillons/archivées ne sortent jamais. Combiné à une
 * reconstruction quotidienne (00:00), une actu « programmée » paraît le jour dit.
 */
export function actualitesVisibles(now: Date = new Date()): Article[] {
  return articles.filter((a) =>
    estVisible({ statut: a.statut ?? "publie", datePublication: a.iso }, now)
  );
}
