// Registre central des images : import Astro + crédit obligatoire.
// Toutes les photos sont libres (Wikimedia Commons), créditées et conservées
// localement pour l'optimisation par astro:assets.
import type { ImageMetadata } from "astro";

import chateau from "../assets/chateau-hohlandsbourg.jpg";
import vista from "../assets/hohlandsbourg.jpg";
import rueClemenceau from "../assets/rue-clemenceau.jpg";
import panorama from "../assets/panorama-wintzenheim.jpg";
import egliseSaintLaurent from "../assets/eglise-saint-laurent.jpg";
import synagogue from "../assets/synagogue.jpg";
import mairie from "../assets/mairie.jpg";
import fontaine from "../assets/fontaine-vierge.jpg";

export interface Photo {
  image: ImageMetadata;
  alt: string;
  credit: string;
}

export const photos = {
  chateau: {
    image: chateau,
    alt: "Le château fort du Hohlandsbourg, restauré, sur sa colline boisée au-dessus de Wintzenheim.",
    credit: "Photo : Gzen92 / Wikimedia Commons / CC BY-SA 4.0",
  },
  vista: {
    image: vista,
    alt: "Vue sur Wintzenheim et la plaine d'Alsace depuis les hauteurs du Hohlandsbourg.",
    credit: "Photo : Gzen92 / Wikimedia Commons / CC BY-SA 4.0",
  },
  rueClemenceau: {
    image: rueClemenceau,
    alt: "La rue Clemenceau, axe du centre historique de Wintzenheim.",
    credit: "Photo : Espirat / Wikimedia Commons / CC BY-SA 4.0",
  },
  panorama: {
    image: panorama,
    alt: "Panorama sur Wintzenheim et le vignoble, au pied des Vosges.",
    credit: "Photo : Espirat / Wikimedia Commons / CC BY-SA 4.0",
  },
  egliseSaintLaurent: {
    image: egliseSaintLaurent,
    alt: "L'église Saint-Laurent de Wintzenheim, achevée en 1844.",
    credit: "Photo : Gzen92 / Wikimedia Commons / CC BY-SA 4.0",
  },
  synagogue: {
    image: synagogue,
    alt: "La synagogue néo-romane de Wintzenheim, reconstruite en 1870.",
    credit: "Photo : Gzen92 / Wikimedia Commons / CC BY-SA 4.0",
  },
  mairie: {
    image: mairie,
    alt: "L'hôtel de ville de Wintzenheim, installé dans l'ancien château urbain Thurnburg.",
    credit: "Photo : Gzen92 / Wikimedia Commons / CC BY-SA 4.0",
  },
  fontaine: {
    image: fontaine,
    alt: "La Fontaine de la Vierge, sur la place centrale de Wintzenheim.",
    credit: "Photo : Espirat / Wikimedia Commons / CC BY-SA 4.0",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

// Correspondance « clé éditoriale d'article » → photo (source unique, utilisée
// par la liste des actualités et les pages article).
export const articleImages = {
  "rue-clemenceau": photos.rueClemenceau,
  panorama: photos.panorama,
  chateau: photos.chateau,
} as const;
export type ArticleImage = keyof typeof articleImages;

// Liste pour la page « Crédits photos »
export const creditsListe = [
  { sujet: "Blason de Wintzenheim (lévrier d'argent)", auteur: "d'après gaso.fr", licence: "Domaine public", source: "Wikimedia Commons" },
  { sujet: "Château du Hohlandsbourg", auteur: "Gzen92", licence: "CC BY-SA 4.0", source: "Wikimedia Commons" },
  { sujet: "Vue sur Wintzenheim depuis le Hohlandsbourg", auteur: "Gzen92", licence: "CC BY-SA 4.0", source: "Wikimedia Commons" },
  { sujet: "Rue Clemenceau", auteur: "Espirat", licence: "CC BY-SA 4.0", source: "Wikimedia Commons" },
  { sujet: "Panorama sur Wintzenheim", auteur: "Espirat", licence: "CC BY-SA 4.0", source: "Wikimedia Commons" },
  { sujet: "Église Saint-Laurent", auteur: "Gzen92", licence: "CC BY-SA 4.0", source: "Wikimedia Commons" },
  { sujet: "Synagogue", auteur: "Gzen92", licence: "CC BY-SA 4.0", source: "Wikimedia Commons" },
  { sujet: "Hôtel de ville", auteur: "Gzen92", licence: "CC BY-SA 4.0", source: "Wikimedia Commons" },
  { sujet: "Fontaine de la Vierge", auteur: "Espirat", licence: "CC BY-SA 4.0", source: "Wikimedia Commons" },
];
