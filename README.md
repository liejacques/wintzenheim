# Site de la commune de Wintzenheim

Site web statique de la ville de **Wintzenheim** (Haut-Rhin, Alsace), construit avec
[Astro](https://astro.build/). Objectif : un site **rapide, accessible et sans
maintenance** (HTML statique, aucune base de données, aucun serveur applicatif).

## Caractéristiques

- **25 pages** : accueil, découvrir (patrimoine, quartiers), démarches, déchets,
  vie locale, agenda + fiches événements, actualités + articles, la mairie, contact,
  pages légales et plan du site.
- **Contenu vérifié** et liens directs vers les téléservices officiels
  (service-public.fr, ANTS, guichet unique de Colmar Agglomération…).
- **Accessibilité RGAA** : structure sémantique, contrastes AA, navigation clavier,
  cibles tactiles ≥ 44 px, fil d'Ariane, lien d'évitement.
- **Respect du RGPD** : polices auto-hébergées (pas de Google Fonts), aucun cookie de
  mesure d'audience, aucun traceur tiers.
- **Responsive** : adapté de 320 px à 2560 px, avec une version mobile dédiée.
- **Images** issues de Wikimedia Commons, créditées (page « Crédits photos »).
- **Zéro JS de framework** : un seul script client léger (date du jour, état
  d'ouverture de la mairie calculé côté navigateur, recherche d'accès rapides).

## Stack technique

- [Astro](https://astro.build/) (sortie 100 % statique, `output: 'static'`)
- [@fontsource](https://fontsource.org/) — polices Cormorant Garamond & Source Sans 3
- [Sharp](https://sharp.pixelplumbing.com/) — optimisation des images (AVIF/WebP)
- [Pagefind](https://pagefind.app/) — index de recherche statique au build

## Développement

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production dans dist/ (+ index Pagefind)
npm run preview    # prévisualiser le build
```

## Structure

```
src/
  pages/        routes du site (.astro)
  components/   en-tête, pied de page, fil d'Ariane, hero de page…
  layouts/      gabarit de base (<head>, polices, en-tête/pied)
  data/         contenu vérifié (élus, agenda, démarches, patrimoine…)
  styles/       reset, design tokens, styles globaux
  assets/       photographies (optimisées au build)
public/         fichiers servis tels quels (blason, favicon)
```

## Licence & crédits

Le code de ce dépôt est mis à disposition à titre d'exemple. Les **textes
institutionnels** appartiennent à la commune de Wintzenheim ; les **photographies**
sont sous licence Creative Commons / domaine public via Wikimedia Commons (voir la
page « Crédits photos » du site).
