// Patrimoine, histoire et tourisme — faits vérifiés (ville-wintzenheim.fr,
// fiches Mérimée, Wikipédia recoupé). Les attributions traditionnelles
// (ex. Lazare de Schwendi & le pinot gris) sont présentées comme telles.

export interface SitePatrimonial {
  nom: string;
  periode: string;
  resume: string;
  detail: string;
}

export const sites: SitePatrimonial[] = [
  {
    nom: "Château du Hohlandsbourg",
    periode: "à partir de 1279",
    resume: "Le plus vaste château fort d'Alsace, sur sa colline à 640 m, avec un panorama à 360°.",
    detail:
      "Sa construction débute en 1279, à l'initiative de Sigfrid de Gundolsheim et avec l'autorisation du roi Rodolphe de Habsbourg. Adapté à l'artillerie au XVIe siècle par Lazare de Schwendi, incendié puis miné en 1637, il est classé Monument Historique et restauré depuis 1986. Son chemin de ronde domine la plaine d'Alsace, la Forêt-Noire et les Vosges. C'est aujourd'hui un site touristique majeur, sur la Route des Cinq Châteaux.",
  },
  {
    nom: "Château du Pflixbourg",
    periode: "vers 1212-1219",
    resume: "Une forteresse impériale en ruines, dont subsiste un beau donjon circulaire.",
    detail:
      "Bâti au début du XIIIe siècle, cité en 1220 sous le nom de « Blickisberc », le Pflixbourg surveillait l'entrée des vallées de Munster et de la Fecht. Inhabité après le XVe siècle, il est inscrit à l'inventaire des Monuments Historiques. Le site est un but de promenade sur la Route des Cinq Châteaux (l'accès aux ruines est interdit pour des raisons de sécurité).",
  },
  {
    nom: "Église Saint-Laurent",
    periode: "1844",
    resume: "L'église paroissiale du centre, et son orgue Merklin-Schütze de 1861.",
    detail:
      "Construite à partir de 1840 et achevée en 1844 sur les plans de l'architecte Caillot, l'église Saint-Laurent abrite un orgue de Joseph Merklin (maison Merklin-Schütze), reçu officiellement en 1861 et resté remarquablement authentique.",
  },
  {
    nom: "Église Notre-Dame-de-l'Assomption (Logelbach)",
    periode: "1925-1927",
    resume: "L'une des premières églises d'Alsace bâties en béton armé.",
    detail:
      "Élevée entre 1925 et 1927 dans le quartier de Logelbach, sur un terrain légué par la famille Herzog, c'est l'une des premières églises d'Alsace construites en béton armé. Elle est inscrite Monument Historique depuis 2022.",
  },
  {
    nom: "Synagogue",
    periode: "1870",
    resume: "Édifice néo-roman, ancien siège du Consistoire israélite du Haut-Rhin.",
    detail:
      "Reconstruite en 1870 dans le style néo-roman par l'architecte Felder, la synagogue de Wintzenheim témoigne d'une communauté juive qui fut la plus importante de Haute-Alsace. Elle accueillit le siège du Consistoire israélite du Haut-Rhin avant son transfert à Colmar. Elle est inscrite Monument Historique depuis 1995.",
  },
  {
    nom: "Hôtel de ville (ancien Thurnburg)",
    periode: "XIIIe siècle",
    resume: "La mairie occupe un ancien château urbain médiéval.",
    detail:
      "L'actuel hôtel de ville occupe le Thurnburg, ancien château urbain du XIIIe siècle, jadis propriété des Hospitaliers de Saint-Jean, acquis par la commune en 1852.",
  },
];

export const chronologie: { annee: string; evt: string }[] = [
  { annee: "786", evt: "Première mention écrite de « Wingisheim » dans une charte de l'abbaye de Murbach." },
  { annee: "1279", evt: "Début de la construction du château du Hohlandsbourg." },
  { annee: "1563", evt: "Lazare de Schwendi acquiert le Hohlandsbourg (la tradition lui attribue l'introduction du pinot gris en Alsace)." },
  { annee: "1637", evt: "Le château du Hohlandsbourg est incendié et miné pendant la guerre de Trente Ans." },
  { annee: "1775", evt: "Fondation de la manufacture d'indiennes des frères Haussmann, à Logelbach." },
  { annee: "1840", evt: "Création du hameau de La Forge sur une dérivation de la Fecht." },
  { annee: "1844", evt: "Achèvement de l'église Saint-Laurent." },
  { annee: "1862", evt: "Creusement des caves à bière « Bierkeller » à flanc de coteau." },
  { annee: "1870", evt: "Reconstruction de la synagogue en style néo-roman." },
  { annee: "1871-1918", evt: "Wintzenheim est annexée à l'Empire allemand (Reichsland Elsass-Lothringen)." },
  { annee: "1925-1927", evt: "Construction de l'église Notre-Dame-de-l'Assomption en béton armé, à Logelbach." },
  { annee: "1945", evt: "Libération de la commune le 2 février." },
  { annee: "1986", evt: "Début de la restauration du château du Hohlandsbourg." },
];

export const personnalites: { nom: string; role: string }[] = [
  { nom: "Tomi Ungerer (1931-2019)", role: "Illustrateur et auteur, il a passé son enfance à Logelbach, 12 rue Haussmann." },
  { nom: "Auguste Haussmann (1815-1874)", role: "Négociant et diplomate né à Wintzenheim, envoyé en mission en Chine puis consul de France." },
  { nom: "Joseph Joos (1878-1965)", role: "Homme politique né à Wintzenheim, figure du Zentrum et opposant au nazisme." },
];

export interface Tourisme {
  nom: string;
  desc: string;
  lien?: string;
}

export const tourisme: Tourisme[] = [
  {
    nom: "Le château du Hohlandsbourg",
    desc: "Le plus vaste château fort d'Alsace ouvre ses portes d'avril à novembre : panorama, animations médiévales et événements.",
    lien: "https://www.chateau-hohlandsbourg.com/",
  },
  {
    nom: "La Route des Cinq Châteaux",
    desc: "Une route panoramique d'environ 10 km reliant le Hohlandsbourg, le Pflixbourg et les châteaux de Haut-Eguisheim.",
  },
  {
    nom: "Le Grand Cru Hengst",
    desc: "53 hectares de vignoble en AOC Alsace Grand Cru, sur un sol marno-calcaire : riesling, pinot gris, gewurztraminer et muscat.",
  },
  {
    nom: "La Route des Vins d'Alsace",
    desc: "Wintzenheim est une étape de la plus ancienne route des vins de France, entre Colmar et l'entrée de la vallée de Munster.",
  },
  {
    nom: "Sentiers & nature",
    desc: "Au cœur du Parc naturel régional des Ballons des Vosges, la commune est couverte à plus de 52 % de forêt : sentiers, vallon d'Aspach, bords de la Fecht.",
  },
];

// Blasonnement officiel (pour la page patrimoine et l'easter egg)
export const blason = {
  blasonnement: "De sinople à un lévrier rampant d'argent, accolé et bouclé d'or.",
  explication:
    "Ce sont des armes « parlantes » : le lévrier (Windhund, abrégé « Wint ») fait écho, par un jeu de mots, au nom de Wintzenheim. Le vert (sinople), le blanc (argent) et l'or du blason donnent au site ses couleurs.",
};
