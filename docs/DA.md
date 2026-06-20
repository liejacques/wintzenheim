# Direction artistique — Site officiel de Wintzenheim

> **Mise en œuvre (20/06/2026).** Le visuel **retenu par la commune** est celui de la maquette « Claude Design » (dossier `/.claude-design/`), **et non** le concept « Ligne de crête » décrit ci-dessous. Le site réellement implémenté (`src/`) suit cette maquette : barre utilitaire vert profond, bandeau-titre crème à filet doré, héros photo en split avec équerres dorées, accès « démarches » sur 5 colonnes, actualités asymétriques, agenda vert foncé à grands quantièmes, patrimoine, infos pratiques. Les **tokens réels** sont dans `src/styles/tokens.css`. Ce document est conservé comme exploration et **charte de discipline** : les principes transverses restent valables et appliqués — couleurs du blason, **polices self-hosted (jamais Google Fonts)**, **contenu uniquement vérifié**, accessibilité RGAA, zéro emoji, crédits photos visibles. Seule la mise en page diffère du concept ci-dessous.

---

> **Ligne de crête.** Le site se gravit comme on gravit le coteau : on part du bourg, en bas, et chaque section monte d'un cran vers le vignoble du Hengst et la crête du Hohlandsbourg. Une seule ligne — un mince filet d'or — figure l'horizon de la plaine d'Alsace et se repose, écran après écran, à une altitude différente, comme les courbes de niveau d'une carte d'état-major. Cette ligne ne décore pas : **elle porte une cote** — un fait réel et chiffré de Wintzenheim.

Ce document pilote directement la création de `tokens.css` et de la page d'accueil. Il est opiniâtre et tenu : tout ce qui suit est une règle, pas une suggestion.

---

## 1. Parti pris

**Le site est une revue d'altitude qui gravit Wintzenheim, du bourg à la crête, structurée par une ligne d'horizon dorée qui change de hauteur à chaque section et affiche, à chaque palier, un repère réel de la commune.**

On ne vend pas Wintzenheim, on la **situe**. La page n'est pas un empilement de cartes mais une **montée** : le bourg à 230 m, le vignoble du Hengst, la forêt (52,7 % du ban), la crête du Hohlandsbourg (château de 1279). Le sinople n'est pas un aplat « chaleureux » : c'est la matière du lieu — la vigne du Grand Cru Hengst et les forêts vosgiennes. L'or n'est jamais un effet de prestige : c'est le collier-et-boucle du lévrier d'argent du blason, transposé en un trait unique qui **informe**. Le lévrier lui-même revient comme sceau, sobre, jamais comme logo posé en coin.

**Pourquoi c'est Wintzenheim et personne d'autre :** la structure même de la page épouse la topographie réelle de la commune adossée aux Vosges. Aucune autre commune ne partage ce relief précis, ce château de 1279, ce vignoble nommé Hengst, ces trois quartiers (Centre / Logelbach / La Forge), ce blason au lévrier. Retirer l'un de ces faits effondre le concept : c'est la preuve qu'il est ancré et non transposable.

---

## 2. Le dispositif signature — la cote sur ligne de crête

Un **filet d'or de 1 px, strictement horizontal** (`#C8A53C`), posé à une **hauteur différente sur chaque section** : bas dans le bourg, de plus en plus haut à mesure qu'on monte. Au-dessus du filet, un **libellé-cote** en Source Sans 3 capitales espacées agissant comme cote de niveau topographique.

Le filet est **toujours interrompu en son centre** (ou flanqué, sur mobile) par un **petit sceau du lévrier** en trait or 1 px — la rotule visuelle du site, reprise du collier-boucle du blason.

**Les cotes réelles, dans l'ordre de la montée :**

| Section | Cote affichée |
|---|---|
| Accueil / bourg | `LE BOURG · 230 m · HAUT-RHIN` |
| Actualités | `LA RÉDACTION · ÉDITION DU JOUR` |
| Quartiers | `TROIS QUARTIERS · CENTRE · LOGELBACH · LA FORGE` |
| Vignoble | `LE VIGNOBLE · HENGST · 53 ha` |
| Forêt / nature | `LA FORÊT · 52,7 % DU BAN` |
| Patrimoine | `LA CRÊTE · HOHLANDSBOURG · 1279` |

**Déclinaisons strictes (4 usages, pas davantage) :**
1. **Cote de section** — filet + libellé chiffré en tête de chaque bande pleine largeur.
2. **Micro-filet d'en-tête** — sous la barre de navigation, sans libellé.
3. **Séparateur** — entre deux blocs d'une même section, filet seul, sceau centré.
4. **Souligné de lien** — le filet d'or devient la sous-ligne des liens (décorative ; voir §4 la règle de l'or).

> **Règle d'or du dispositif :** l'altitude des filets ne doit jamais être appliquée mécaniquement (1, 2, 3…). Elle suit la **logique du lieu** — on monte réellement du bourg à la crête. La cote n'est pas un compteur, c'est un fait.

---

## 3. Références éditoriales

Cinq revues et sites culturels — **aucune mairie**. Ce qu'on en retient précisément :

1. **The Alpinist (Alpinist Magazine)** — le registre d'altitude noble : titre serif posé sur une crête, légendes discrètes, hiérarchie verticale qui suit la montée. **On retient** le rapport au relief et à l'horizon comme principe de composition, jamais comme décor.
2. **Kinfolk / Kinfolk Travel** — la mesure éditoriale : photo plein cadre, marges immenses, un seul filet, sérénité. **On retient** le calme de revue et le luxe du vide, qui interdit toute surcharge d'interface.
3. **Atlas of Places / MUBI** — le filet fin comme seul ornement, la typo serif à fort contraste sur fond clair-froid. **On retient** la discipline graphique : laisser la photo et le blanc parler, ne jamais ajouter un deuxième geste.
4. **The Public Domain Review** — la rigueur de la légende-crédit, le serif érudit sans austérité, le respect total de la source documentaire. **On retient** la manière de créditer chaque image comme une rédaction (« Photo : Gzen92 / Wikimedia Commons / CC BY-SA 4.0 ») et de faire vivre l'archive sans pastiche.
5. **Le Monde diplomatique (maquette imprimée et web)** — la manchette austère, la colonne de texte longue très lisible, les filets gris qui structurent sans décorer. **On retient** qu'un site dense d'information de service peut rester noble par la seule typographie, sans cartes ni ombres.

---

## 4. Palette — rôles et règles d'usage

**Une seule ambiance neutre est choisie et tenue : l'argent froid verdi.** Pas de crème chaud, jamais. L'altitude, le lévrier d'argent et la pierre claire imposent un neutre **froid**. C'est une décision opiniâtre : tout crème, tout beige « chaleureux » est banni du projet.

| Rôle | Nom | HEX | Usage |
|---|---|---|---|
| **Primaire / marque** | Sinople | `#1F6B3A` | Couleur structurante : bandes de section pleine largeur, en-tête, pied de page, boutons primaires, bandeaux inversés. Texte `#FBFCFB` dessus (contraste ≈ 5,9:1, AA tenu). |
| **Accent** | Or héraldique | `#C8A53C` | Ligne de crête, cotes, soulignés de liens, sceau du lévrier, puces, anneau de focus. **Mat, jamais brillant. Jamais en aplat. Jamais porteur de texte courant.** |
| **Neutre clair (page)** | Blanc Fecht | `#FBFCFB` | Fond de page par défaut, texte sur sinople. |
| **Neutre froid (bandes)** | Argent | `#E9ECEA` | Fond d'une section sur deux pour scander la montée, fonds d'encadrés de service, séparateurs. Légèrement verdi, **froid** — l'unique ambiance neutre du site. |
| **Texte** | Pierre des Vosges | `#2E332F` | Tout le corps de texte et les titres sur clair (≈ 12:1). **Jamais de noir pur.** |
| **Secondaire patrimoine** | Grès rose des Vosges | `#9C5A48` | **Strictement cantonné** à la rubrique Histoire / Patrimoine (Hohlandsbourg, Pflixbourg, synagogue, Saint-Laurent) : cote, sceau et lettrine de cette section uniquement. Ne fuit **nulle part** ailleurs. |

### Le piège de l'or — règle absolue (RGAA)

> **L'or `#C8A53C` n'atteint pas le ratio AA en texte sur fond clair (≈ 2,3:1). Il est donc INTERDIT en texte courant et en libellé de lien.**

Conséquences opérationnelles, non négociables :
- **Liens dans le corps** : couleur du texte = Pierre des Vosges `#2E332F`, **souligné or 1 px** (décoratif) qui passe à **2 px** au survol/focus. La distinction d'état repose sur le texte + l'épaisseur du souligné, **jamais sur l'or seul**.
- L'or ne sert qu'à des éléments **non textuels** : filets, cotes en **grand format** (≥ 24 px et large, où le 3:1 large s'applique uniquement sur fond sombre — voir §7), sceau, puces, anneau de focus.
- **Aucun dégradé**, aucune brillance, aucun jaune criard.
- Sinople et or ne se touchent directement **qu'en bandeau inversé** (en-tête, pied de page) : là, l'or en filet/sceau ressort sur le vert, façon reliure dorée sur cuir vert.

---

## 5. Typographie

**Un seul couple, deux rôles francs. Self-hosting obligatoire (fichiers `.woff2` en OFL, `font-display: swap`). Jamais Google Fonts, jamais Inter ni Roboto.**

- **Cormorant Garamond** — titres, manchettes, lettrines, chiffres-repères. Fort contraste, exploité en grand. Italique réservé aux intertitres patrimoniaux et chapôs.
- **Source Sans 3** — corps, légendes-crédits, cotes en capitales, libellés UI, horaires, démarches.

### Échelle fluide en `clamp()`

```
--fs-display : clamp(2.5rem, 8vw, 6rem);     /* H1 d'accueil : WINTZENHEIM */
--fs-h1      : clamp(2rem, 5vw, 3.5rem);      /* titres de section */
--fs-h2      : clamp(1.5rem, 3.5vw, 2.4rem);  /* titres d'article */
--fs-h3      : clamp(1.2rem, 2.5vw, 1.6rem);
--fs-chapo   : clamp(1.15rem, 2vw, 1.35rem);  /* chapô, Cormorant italique */
--fs-corps   : 1.0625rem;                      /* corps Source Sans, lh 1.65 */
--fs-cote    : 0.78rem;                         /* cote, caps, letter-spacing 0.16em */
--fs-legende : 0.8rem;                          /* légende-crédit, italique */
```

**Règles de rythme :**
- Le nom **WINTZENHEIM** doit se lire en première seconde, posé bas, en Cormorant `--fs-display`, poids 600, interlettrage légèrement resserré (`-0.01em`).
- **Contraste de tailles assumé** : énormes serifs Cormorant / petit sans-serif fonctionnel discret. C'est ce contraste, pas l'ornement, qui crée la noblesse.
- **Interlignage qui rejoue la pente** : serré sur les grands titres (`line-height: 1.05`), généreux sur le corps (`1.65`).
- **Mesure de lecture verrouillée à ~62–66 caractères** (`max-width: 34rem`) pour tout texte long. Jamais de pleine largeur en corps.
- Les **chiffres réels** (1279, 1873, 53 ha, 8 059 hab., 52,7 %) sont traités en **grand Cormorant** comme des altitudes. Dans les horaires et l'agenda : `font-variant-numeric: tabular-nums`.
- **Cote** : Source Sans 3, capitales, `letter-spacing: 0.16em`, couleur or — uniquement sur le filet, jamais en paragraphe.
- **Lettrine** Cormorant sinople (`::first-letter` CSS pur, jamais une image) sur le premier paragraphe des pages éditoriales longues.

---

## 6. Grille & rythme

- **Grille éditoriale 12 colonnes**, gouttière 24 px, marge fluide `clamp(1.25rem, 5vw, 6rem)`.
- **Asymétrie maîtrisée** : le corps de texte tient sur les **colonnes 1–7, calé à GAUCHE**, jamais centré. Les légendes, cotes et filets occupent la **colonne droite (8–12)** comme une marge de revue.
- **La verticalité prime** : les sections sont des **bandes pleine largeur empilées**, séparées par la ligne de crête. Blocs paysage : hauteur minimale 60–80 vh (jamais 100 vh imposé — pas de hero plein écran obligatoire).
- **Fonds alternés** Blanc Fecht / Argent pour scander la montée.
- **Échelle d'espacement modulaire base 4**, exposée en tokens : `4 / 8 / 12 / 16 / 24 / 40 / 64 / 96 px` → `--space-1` … `--space-8`. Aucun espacement arbitraire.
- **Triptyque des quartiers** (greffe de « feuille de quartier ») : trois rubriques fixes **Centre / Logelbach / La Forge**, chacune avec sa cote et son sceau. Pour éviter le réflexe « 3 colonnes » : hauteurs **inégales**, oreille colorée distincte, contenu réel et nommé. Sur le papier comme à l'écran, ces trois colonnes ne s'alignent pas en bas.
- **Profondeur sans ombre** : la hiérarchie vient des filets et des aplats sinople/argent. **Zéro `box-shadow`, `border-radius` nul ou quasi nul** (angles vifs).
- **Mobile-first** : une seule colonne ; le filet d'or + sa cote restent en tête de chaque bande ; les accès habitant deviennent une pile de larges blocs tactiles (≥ 56 px de haut).

---

## 7. Photographie

**Vraies photos uniquement, créditées. Zéro stock, zéro illustration générique, zéro image générée par IA.**

- **Grand format, plein bord, sans cadre ni ombre portée.** Le texte vient se poser dessus comme une légende de revue de paysage.
- **Crédit visible** sous chaque image, en Source Sans 0.8 rem italique : `Photo : Gzen92 / Wikimedia Commons / CC BY-SA 4.0`.
- **Lisibilité du texte sur photo** : si du texte or ou blanc est posé sur l'image, appliquer un **voile sinople plein et constant** (pas un dégradé qui glisse vers le clair) sous la zone de texte, pour garantir un fond **sombre et constant** — condition nécessaire au 3:1 de l'or grand format. **Ne jamais poser de texte or sur un ciel pâle.** Hors zone de texte, le voile reste sous le seuil « hero assombri ».
- **Astro** : `astro:assets` (`<Image />` / `<Picture />`) pour formats responsives, `loading="lazy"` hors premier écran, `alt` réel et descriptif obligatoire.

### Tenir une page FORTE là où les photos manquent

Le brief signale qu'il **n'existe aucune photo libre** du Hengst, de La Forge, ni de la vie locale des quartiers. C'est la faiblesse historique du concept : **on la neutralise en faisant de la cote typographique, et non de la photo, le moteur de la page.**

- La **seule photo garantie** (Hohlandsbourg, Gzen92, CC BY-SA 4.0, réellement sur Commons) ouvre l'accueil et la page Patrimoine. Elle n'est **jamais répétée**.
- Les sections **sans photo** (Hengst, La Forge, vie locale) sont tenues par un **bloc typographique d'altitude** : grande cote Cormorant chiffrée (`HENGST · 53 ha`, `LA FORGE · HAMEAU DE 1840`, `LA FORÊT · 52,7 %`), filet d'or, chapô concret, aplat sinople ou argent. Le **chiffre réel devient l'image**.
- Le **blason** (SVG domaine public) et le **sceau du lévrier** sont des actifs vectoriels légers qui meublent noblement n'importe quelle section sans dépendre de Commons.
- Résultat : la page entière tient **sans aucune photo de quartier**, exactement comme l'exigeait le juge technique.

---

## 8. Ton éditorial

On écrit pour l'habitant qui cherche un horaire au pouce, pas pour vanter la commune. Daté, localisé, concret.

| Bon (à écrire) | Mauvais (banni) |
|---|---|
| « La mairie est ouverte ce matin jusqu'à 12h. » | « Votre mairie à votre service. » |
| « Sortez vos bacs la veille au soir. » | « Une gestion des déchets responsable. » |
| « Fête de la Musique le 21 juin, sur deux places du village. » | « Une vie culturelle riche et dynamique. » |
| « Le château du Hohlandsbourg domine la commune depuis 1279. » | « Un patrimoine d'exception à découvrir. » |
| « Marché place de la Halle, les vendredis de 8h à 12h. » | « Des produits du terroir près de chez vous. » |
| « 28 rue Clemenceau · 03 89 27 94 94 » | « Contactez-nous, nous sommes à l'écoute. » |

**Règles :** chaque brève s'ouvre sur une **ligne de date** réelle. On cite des faits vérifiables du lieu (1279, Hengst 53 ha, orgue Merklin-Schütze de 1861, 52,7 % de forêt, 230 m). Anecdote héraldique du lévrier (*Windhund* / « Wint ») présentée **comme calembour**, jamais comme étymologie. **Zéro emoji.** Zéro jargon administratif. Zéro superlatif creux.

---

## 9. Mouvement & interaction

Sobriété de revue. **CSS only, zéro JS superflu.** Tout mouvement est décoratif et entièrement réductible.

- **Ligne de crête** : au repos, le filet est **posé statiquement** (état final par défaut). Le tracé de gauche à droite est une **amélioration progressive purement décorative** déclenchée par `IntersectionObserver` léger **ou** rien du tout — **interdiction de dépendre de `animation-timeline: view()`** (non supporté par Firefox) pour l'apparition du filet. La cote et le filet sont lisibles et complets **sans aucun script**.
- **Liens** : souligné or déployé de gauche à droite, 1 px → 2 px, transition 150 ms `ease-out`.
- **Boutons primaires sinople** : assombrissement de 8 % au survol, **sans déplacement**.
- **Entrées de titres/photos** (optionnel) : léger fondu + translation verticale de 12 px (montée), une seule fois.
- **Focus clavier (renforcé, greffe de « Le Filet d'argent ») :** cadre **2 px Pierre des Vosges + liseré or 1 px en décalage** (`outline` + `outline-offset: 3px`), **toujours visible, jamais supprimé**. Sur fond sinople, le contour passe en **or/argent** pour rester perceptible. Conforme RGAA 10.7.
- **`prefers-reduced-motion: reduce`** : toutes les durées ramenées à `0.01ms`, tous les filets rendus d'emblée à l'état final. **Aucune animation ne porte d'information.** Rien ne clignote, rien ne défile seul, aucune parallaxe.

---

## 10. Accessibilité & technique (RGAA AA)

Rappels opérationnels, à vérifier en intégration :

- **Un seul `<h1>` par page** (le nom / le titre de la page). Hiérarchie `h2`/`h3` continue, sans saut.
- **Skip-link** « Aller au contenu » en première position, masqué hors focus, **visible au `:focus`** (CSS pur, pas de JS).
- **Landmarks** sémantiques : `header`, `nav`, `main`, `aside`, `footer`. Pas de `div` à la place d'un point de repère.
- **Cibles tactiles ≥ 44 px** (48 px visé sur les accès habitant ; 56 px sur mobile).
- **Contrastes AA vérifiés** : sinople/blanc ≈ 5,9:1, texte pierre/clair ≈ 12:1, **or jamais en petit texte sur clair**.
- **Sceau du lévrier et filigrane décoratifs** : `aria-hidden="true"`, `alt=""`. Le filigrane (grès rose à faible opacité sur la page Patrimoine) ne doit **jamais** réduire le contraste du texte superposé — à valider.
- **Lettrine** en `::first-letter`, jamais en image (pas d'initiale sans équivalent texte).
- **Images** via `astro:assets`, `alt` réels et descriptifs, crédits visibles.
- **Zéro JS superflu** : Astro 5 statique. Le seul JS toléré est un `IntersectionObserver` facultatif et non bloquant pour le tracé décoratif des filets. Le site est **intégralement fonctionnel et lisible JS désactivé** (pensé réseau faible).
- **Self-hosting des polices** (`.woff2`, OFL), `font-display: swap`, pas de requête vers des CDN tiers.

---

## 11. Garde-fous anti-patterns

Banni, reformulé pour ce projet :

- ❌ **Pas de hero à dégradé + bouton centré.** L'accueil ouvre sur une bande paysage plein bord, texte calé bas-gauche, accès habitant en barre tactile juste dessous.
- ❌ **Pas de « Nos valeurs » en 3 colonnes d'icônes rondes.** Le seul tripartite autorisé est le **triptyque des trois quartiers réels** (hauteurs inégales, contenu nommé), jamais des pictos décoratifs.
- ❌ **Zéro emoji**, nulle part.
- ❌ **Pas de cartes uniformes à ombre portée et `border-radius` partout.** Bandes pleine largeur, filets, **zéro `box-shadow`**, angles vifs. Et pas de substitut : pas de « cadre doré identique partout » qui reproduit le défaut sous une autre forme.
- ❌ **Rien de centré-symétrique.** Grille 12 colonnes, corps à gauche, marge droite éditoriale.
- ❌ **Pas de texte creux.** Copies datées, chiffrées, localisées (§8).
- ❌ **Aucune icône hors-sujet.** Le seul motif est le lévrier/sceau du blason ; les seuls signes graphiques sont le filet et la cote.
- ❌ **Pas de crème ni de beige.** L'unique neutre est l'argent froid verdi.
- ❌ **L'or jamais en texte/lien sur clair** (§4).
- ❌ **Pas de dépendance à `animation-timeline: view()`** pour un élément signature (§9).
- ❌ **Aucune photo IA, stock ou générique.** Photos Wikimedia créditées uniquement (§7).

---

## 12. Comment s'ouvre la page d'accueil

**Pas de hero générique.** L'accueil se gravit :

1. **En-tête sinople** pleine largeur : blason propre (lévrier d'argent) à gauche, navigation, **micro-filet d'or** sous la nav.
2. **Bande paysage d'ouverture** : la photo panoramique du **Hohlandsbourg sur sa crête** (Gzen92, CC BY-SA 4.0), plein bord, **voile sinople constant** sur la zone de texte en bas. Calé **bas-gauche** sur la grille : la première cote — `[filet or] LE BOURG · 230 m · HAUT-RHIN` — surmontant **WINTZENHEIM** en Cormorant énorme, puis une légende d'une ligne, concrète : « Au pied du Hohlandsbourg, entre le vignoble du Hengst et la forêt. » Crédit photo visible en coin.
3. **Parcours habitant**, immédiatement sous la photo, **sans transition décorative** (primauté du service, greffe de « feuille de quartier ») : 4 à 6 larges blocs sinople/argent plats, séparés par filets or, chacun avec libellé Source Sans + micro-ligne concrète + flèche or — **Horaires & contact mairie** (« CNI, urbanisme, état civil ») · **Démarches** · **Déchets & collecte** (« Sortez vos bacs la veille ») · **Écoles & périscolaire** · **Conseil municipal** · **Agenda**. Cibles ≥ 48 px, pensées pouce.
4. **On commence à monter.** Actualités datées (foliotage léger), puis l'agenda réel (Fête de la Musique 21 juin sur deux sites ; Fête Révolutionnaire 12 juillet, feu d'artifice à 23h ; marché du vendredi à la Halle), puis le **triptyque des trois quartiers**, puis le vignoble (`HENGST · 53 ha`), la forêt (`52,7 %`), enfin le **cahier Patrimoine** en grès rose (`LA CRÊTE · HOHLANDSBOURG · 1279`). Chaque section gagne en altitude, marquée par sa ligne de crête et sa cote.
5. **Bandeau pratique en pied** (fond argent) : horaires complets en `tabular-nums`, **28 rue Clemenceau · 03 89 27 94 94**, puis **pied de page sinople** avec le sceau du lévrier en or.

À la première seconde, l'habitant sait : **c'est Wintzenheim, c'est aujourd'hui, et voilà ce dont j'ai besoin.**

---

## 13. Test final — écran par écran, ce ne pourrait être aucune autre commune

- **Ouverture** : la photo est le **Hohlandsbourg réel de 1279** sur sa crête, créditée. La cote `230 m` est l'altitude réelle du bourg. Aucune autre commune ne porte ce château ni ce relief.
- **Parcours habitant** : adresse et téléphone réels (**28 rue Clemenceau · 03 89 27 94 94**), horaires réels (lun. 8h–16h … ven. 8h–12h). Irremplaçables.
- **Agenda** : Fête de la Musique du 21 juin sur deux places, Fête Révolutionnaire du 12 juillet avec feu d'artifice à 23h, marché du vendredi à la Halle — événements datés propres à 2026 à Wintzenheim.
- **Triptyque** : Centre viticole / Logelbach (textile + Tomi Ungerer, 12 rue Haussmann) / La Forge sur la Fecht (hameau de 1840) — trois quartiers **réels et nommés**, pas trois colonnes interchangeables.
- **Vignoble & forêt** : `HENGST · 53 ha`, `52,7 % de forêt` — chiffres du ban communal, transposables nulle part.
- **Patrimoine** : Hohlandsbourg (1279), Pflixbourg sur la Route des Cinq Châteaux, orgue Merklin-Schütze de 1861 à Saint-Laurent, grès rose des Vosges des châteaux bâtis.
- **Système entier** : sinople, or et lévrier dérivent du blasonnement officiel — « *de sinople à un lévrier rampant d'argent, accolé et bouclé d'or* ». La ligne de crête **est** la boucle d'or transposée en système ; le sceau **est** le lévrier. Ces signes n'appartiennent qu'à Wintzenheim.

> Retirez un seul de ces éléments — le château de 1279, le vert du Hengst, le sceau au lévrier, les trois quartiers, l'altitude de 230 m — et le concept s'effondre. La règle d'or est tenue.
