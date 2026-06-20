// Source unique de la navigation : en-tête, pied de page, plan du site.
// Toute route du site est déclarée ici → aucun lien mort.

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Découvrir",
    href: "/decouvrir/",
    children: [
      { label: "Patrimoine & histoire", href: "/decouvrir/patrimoine/" },
      { label: "Les trois quartiers", href: "/decouvrir/quartiers/" },
      { label: "Tourisme & Hohlandsbourg", href: "/decouvrir/#tourisme" },
    ],
  },
  {
    label: "Démarches",
    href: "/demarches/",
    children: [
      { label: "État civil & papiers", href: "/demarches/#etat-civil" },
      { label: "Urbanisme", href: "/demarches/#urbanisme" },
      { label: "Déchets & collecte", href: "/dechets/" },
    ],
  },
  {
    label: "Vie locale",
    href: "/vie-locale/",
    children: [
      { label: "Écoles & périscolaire", href: "/vie-locale/#ecoles" },
      { label: "Culture & associations", href: "/vie-locale/#culture" },
      { label: "Sport & solidarité", href: "/vie-locale/#sport" },
    ],
  },
  { label: "Agenda", href: "/agenda/" },
  {
    label: "La Mairie",
    href: "/la-mairie/",
    children: [
      { label: "Le maire & les adjoints", href: "/la-mairie/#elus" },
      { label: "Conseil municipal", href: "/la-mairie/#conseil" },
      { label: "Recrutement & marchés publics", href: "/la-mairie/#recrutement" },
    ],
  },
];

// Liens « utilitaires » (barre supérieure)
export const utilityNav: NavItem[] = [
  { label: "Signaler un problème", href: "/signalement/" },
  { label: "Annuaire", href: "/annuaire/" },
  { label: "Contact", href: "/contact/" },
];

// Pied de page (3 colonnes)
export const footerNav: { titre: string; liens: NavItem[] }[] = [
  {
    titre: "Au quotidien",
    liens: [
      { label: "Vos démarches", href: "/demarches/" },
      { label: "Signaler un problème", href: "/signalement/" },
      { label: "Réserver une salle", href: "/reserver-une-salle/" },
      { label: "Déchets & collecte", href: "/dechets/" },
      { label: "Petites annonces", href: "/petites-annonces/" },
      { label: "Annuaire", href: "/annuaire/" },
      { label: "Newsletter", href: "/newsletter/" },
    ],
  },
  {
    titre: "Découvrir",
    liens: [
      { label: "Patrimoine & histoire", href: "/decouvrir/patrimoine/" },
      { label: "Les trois quartiers", href: "/decouvrir/quartiers/" },
      { label: "Le château du Hohlandsbourg", href: "/decouvrir/#tourisme" },
      { label: "Vie locale", href: "/vie-locale/" },
    ],
  },
  {
    titre: "La Mairie",
    liens: [
      { label: "Horaires & contact", href: "/contact/" },
      { label: "Documents officiels", href: "/documents/" },
      { label: "Le maire & les adjoints", href: "/la-mairie/#elus" },
      { label: "Conseil municipal", href: "/la-mairie/#conseil" },
      { label: "Recrutement", href: "/la-mairie/#recrutement" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Mentions légales", href: "/mentions-legales/" },
  { label: "Accessibilité : non conforme", href: "/accessibilite/" },
  { label: "Données personnelles", href: "/confidentialite/" },
  { label: "Crédits photos", href: "/credits-photos/" },
  { label: "Plan du site", href: "/plan-du-site/" },
];
