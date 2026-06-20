// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine officiel de la commune (sert aux URLs canoniques, sitemap, Open Graph).
const SITE = 'https://www.ville-wintzenheim.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Sortie 100 % statique : aucun serveur à maintenir, le HTML généré ne rouille pas.
  output: 'static',
  trailingSlash: 'always',
  build: {
    // URLs propres : /demarches/ -> /demarches/index.html
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: undefined,
      changefreq: 'monthly',
    }),
  ],
  image: {
    // Optimisation des images au build (AVIF/WebP) via sharp.
    responsiveStyles: true,
  },
  // Aucune dépendance JS de framework : zéro JS client par défaut.
});
