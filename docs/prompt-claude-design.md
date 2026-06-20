# Brief de design — Site officiel de la commune de **Wintzenheim** (Haut-Rhin)

> **À coller tel quel dans Claude Design.** Ce document contient tout : le mandat, l'identité visuelle imposée (tirée du vrai blason), les photos réelles libres de droit disponibles, et le contenu authentique de la commune. Objectif : une direction artistique **reconnaissablement celle de Wintzenheim**, jamais un template générique.

---

## 0. Ton rôle

Tu es directeur·rice artistique. Conçois la **direction visuelle complète** et des **maquettes responsive haute-fidélité** pour le nouveau site officiel de la commune de Wintzenheim.

**Livrable attendu :** un **système de design** (tokens couleurs/typo/espacement, composants, états) + des **maquettes en HTML + CSS sémantique, sans framework** (mobile-first), pour les gabarits listés en §6. Ce code sera ensuite porté dans **Astro 5** (statique, zéro JS superflu) par un autre intervenant — produis donc un HTML propre, accessible et structuré, pas une image.

**Contraintes dures, non négociables** (détaillées plus bas) : identité ancrée dans le blason · palette et typo imposées · **vraies photos uniquement** (zéro stock, zéro illustration générique, **zéro image générée par IA**) · accessibilité **RGAA AA** · **mobile-first** · contenu réel de Wintzenheim.

---

## 1. La règle d'or

> Si une page pouvait appartenir à **n'importe quelle** commune sans changer un mot ni une photo, c'est **raté**. Chaque écran doit être immédiatement identifiable comme celui de **Wintzenheim** : son blason, son vert, son château, son vignoble, ses rues, ses événements réels.

---

## 2. Identité visuelle imposée

### 2.1 Le blason (point de départ de toute la DA)

- **Blasonnement officiel :** « *De sinople à un lévrier rampant d'argent, accolé et bouclé d'or* » — un **lévrier blanc dressé**, au collier et à la boucle **dorés**, sur **fond vert**.
- **Sens :** ce sont des **armes parlantes** (calembour héraldique : *Windhund* / « Wint » → Wintzenheim). À utiliser comme anecdote identitaire, **pas** comme étymologie réelle du nom.
- **Fichier vectoriel (domaine public, réutilisable sans restriction)** : `https://upload.wikimedia.org/wikipedia/commons/b/b5/Blason_de_la_ville_de_Wintzenheim_%2868%29.svg`
- **Usages :** le blason doit apparaître proprement dans l'**en-tête**, en **favicon**, et dans le **pied de page**. Il sert aussi de **source à la palette**.

### 2.2 Palette — tirée des trois émaux du blason (sinople / argent / or)

Palette restreinte et intentionnelle (1 primaire + 1 accent + neutres + 1 secondaire patrimoine optionnel). **Interdiction des dégradés bleu/violet génériques.**

| Rôle | Nom | HEX | Usage |
|---|---|---|---|
| **Primaire** | Sinople (vert Hengst) | `#1F6B3A` | Couleur de marque : en-têtes, boutons principaux, aplats. Vert profond et noble (vignoble + forêts vosgiennes). Texte blanc accessible dessus. |
| **Accent** | Or héraldique | `#C8A53C` | Filets, liens, soulignés, pictos, emphase. Doré **mat**, jamais jaune criard. En touches, pas en aplats de texte. |
| **Neutre clair** | Argent | `#E9ECEA` | Fonds de sections, séparateurs. Blanc cassé très légèrement froid/verdi (le lévrier d'argent, la pierre claire). |
| **Neutre texte** | Pierre des Vosges | `#2E332F` | Corps de texte et titres sur fond clair. Gris-vert très sombre (≈ ardoise), plutôt qu'un noir pur. |
| **Fond de page** | Blanc Fecht | `#FBFCFB` | Fond principal. Blanc adouci (pas `#FFFFFF` pur). |
| **Secondaire (option patrimoine)** | Grès rose des Vosges | `#9C5A48` | Touches « patrimoine bâti » (le grès rose des châteaux). À utiliser avec parcimonie, p. ex. rubrique histoire. |

> Tous les contrastes texte/fond doivent atteindre **WCAG AA**. Vérifie notamment le doré `#C8A53C` : réservé aux éléments non-textuels ou au texte large, pas au petit texte sur fond clair.

### 2.3 Typographie imposée

- **Titres :** **Cormorant Garamond** (Google Fonts, OFL) — serif élégante à fort contraste, caractère patrimonial, distinctive (≠ Inter/Roboto). *Alternatives acceptables si besoin : EB Garamond, Marcellus.*
- **Texte courant :** **Source Sans 3** (Google Fonts, OFL) — sans-serif humaniste très lisible pour les contenus administratifs (horaires, démarches).
- Un **seul couple** titre/texte sur tout le site. Échelle typographique cohérente (idéalement fluide, `clamp()`).
- **Ne pas** utiliser Inter ni Roboto comme police de titres.

### 2.4 Caractère du lieu (ambiance à évoquer)

Commune **viticole au pied des Vosges**, à l'entrée de la vallée de Munster, **52,7 % de forêt**, **18,3 % de vignes**. Imaginaire : **château fort de pierre** (Hohlandsbourg), **vignoble Grand Cru Hengst**, **grès rose**, **rivière la Fecht**, lumière dorée de la plaine d'Alsace. La DA doit respirer cet ancrage : vert vigne/forêt, gris-pierre, or du raisin — registre patrimonial **sobre et noble**, pas folklorique-cliché.

---

## 3. À bannir absolument (marqueurs de design « IA générique »)

- ❌ Hero avec gros **dégradé coloré** + bouton centré + sous-titre vague.
- ❌ Sections « Nos valeurs / Nos atouts » en **3 colonnes d'icônes rondes**.
- ❌ **Emojis** dans les titres ou le contenu.
- ❌ Tout en **cartes à ombre portée** avec le même `border-radius` partout.
- ❌ Tout **centré et symétrique**, sans grille éditoriale.
- ❌ Textes creux interchangeables (« une commune dynamique tournée vers l'avenir »).
- ❌ Icônes décoratives **hors-sujet**.
- ❌ Espacements aléatoires. → Utilise une **échelle d'espacement cohérente**, une vraie grille, de l'**asymétrie maîtrisée**.

À privilégier : **mise en page éditoriale** (à la manière d'un beau magazine/journal local), grille typographique forte, hiérarchie nette, photos en grand, filets dorés discrets, blancs généreux.

---

## 4. Photographies réelles disponibles (libres de droit)

**Règle :** uniquement de vraies photos de Wintzenheim. Les fichiers ci-dessous sont sur **Wikimedia Commons** ; la plupart sont en **CC BY-SA** (réutilisables **avec crédit visible** « Photo : Auteur / Wikimedia Commons / CC BY-SA » et conservation de licence). **Vérifier la licence exacte fichier par fichier** avant publication. Prévoir une **page Crédits photos**.

**Patrimoine / paysages (cœur visuel du site) :**
- Château du Hohlandsbourg, vue d'ensemble — *Gzen92, CC BY-SA 4.0* — `File:Vue_du_château_du_Hohlandsbourg_(Wintzenheim).jpg`
- Château du Hohlandsbourg, vue rapprochée — *Gzen92, CC BY-SA 4.0*
- Château du Hohlandsbourg, panorama — *francois schnell, CC BY 2.0*
- Église Saint-Laurent (façade) — *Gzen92, CC BY-SA 4.0* — `File:Église_Saint-Laurent_(Wintzenheim).jpg`
- Hôtel de ville (mairie) — *Gzen92, CC BY-SA 4.0* — `File:Hôtel_de_ville_(Wintzenheim).jpg`
- Synagogue (1870) — *Gzen92, CC BY-SA 4.0*
- Rue Clemenceau (scène de rue, centre) — *Espirat, CC BY-SA 4.0*
- Fontaine de la Vierge, place centrale — *Espirat, CC BY-SA 4.0*
- Panorama sur Wintzenheim depuis le gîte Romain — *Espirat, CC BY-SA 4.0*
- Église Notre-Dame-de-l'Assomption (Logelbach, béton armé, MH) — *Gzen92, CC BY-SA 4.0*
- Quartier de Logelbach (série 2013) — *Lionel Allorge, CC BY-SA 3.0*
- Prieuré Saint-Gilles — *CC BY-SA, à vérifier*
- Carte postale ancienne synagogue (1909, **domaine public**) — pour la rubrique histoire
- Catégorie complète (≈78 fichiers) : `https://commons.wikimedia.org/wiki/Category:Wintzenheim` · Château (97 fichiers) : `Category:Château_de_Haut-Landsbourg`

**Lacunes connues (pas de photo libre) → à gérer par une mise en page éditoriale forte (typo + couleur), sans visuel bidon, en attendant des photos fournies par la commune :**
- le **vignoble Grand Cru Hengst** (aucune photo libre) ;
- le **quartier La Forge** ;
- la **vie locale** (marchés, fêtes, écoles, associations, équipements).

---

## 5. Contenu réel à mettre en scène (pour que rien ne soit générique)

### 5.1 La commune
- **Wintzenheim**, Haut-Rhin (68), Collectivité européenne d'Alsace, **Colmar Agglomération**. ~**8 059 habitants** (2023). 18,97 km². CP 68920 / 68124.
- **Trois quartiers :** **Centre** (bourg historique), **Logelbach** (ancienne cité industrielle textile, le long du canal du Muhlbach), **La Forge** (hameau créé en 1840 sur la Fecht).
- Une des **201 communes** du **Parc naturel régional des Ballons des Vosges**.
- **Maire :** Luca Basso (liste « Vive Wintzenheim », élu le 22 mars 2026, 67,47 %, 25 sièges/29), entouré de 7 adjoints.

### 5.2 Le cœur du site = le **parcours habitant** (accès en ≤ 2 clics depuis l'accueil)

L'habitant arrive avec **une tâche**. Mets en avant, dès l'accueil, des accès directs et larges (pensés mobile) vers :
1. **Horaires + contact mairie** — 28 rue Clemenceau, 68920 · **03 89 27 94 94** · mairie@mairie-wintzenheim.fr. Horaires : **lun 8h-16h, mar 8h-14h30, mer 8h-16h, jeu 8h-16h30, ven 8h-12h** (fermé week-end). Mairie annexe Logelbach : jeudi 13h-16h30.
2. **Démarches** — état civil / CNI-passeport (RDV en ligne) / urbanisme (guichet numérique) / listes électorales / nouveaux arrivants.
3. **Déchets & collecte** — calendrier par adresse, consignes de tri, déchèterie (9 rue des Champs, Wintzenheim).
4. **Écoles / périscolaire / cantine** — périscolaire **repris en gestion municipale à la rentrée 2026**, restauration « Pomme et Chou ».
5. **Conseil municipal** — comptes-rendus & délibérations en PDF (dernière séance documentée : 21 mai 2026).
6. **Numéros utiles & urgences** — 15 / 17 / 18 / 112 / 114 / 115, gendarmerie 03 89 27 01 52, médecin de garde 116 117.
7. **Agenda** des événements (voir 5.3).
8. Recherche **plein-texte qui marche** sur tout le site.

> Vocabulaire d'**habitant**, pas de jargon administratif. Pas plus de 2 clics pour l'info la plus demandée.

### 5.3 Agenda réel (été 2026) — à utiliser dans les maquettes (pas de faux événements)
- **Fête de la Musique** — dimanche **21 juin 2026**, dès 19h, sur **deux sites** (place des fêtes à Wintzenheim + parvis de l'église à Logelbach), entrée libre.
- **Fête Révolutionnaire** — dimanche **12 juillet 2026**, centre-ville (déambulation, orchestres, défilé costumé, **feu d'artifice à 23h**). Prêt de costumes gratuit par la mairie.
- **Concours des Maisons Fleuries 2026** — inscriptions jusqu'au 15 juillet.
- **Marchés hebdomadaires** — **vendredi 8h-12h** (Halle des Fêtes, Wintzenheim) · **mercredi 8h-12h** (parvis de l'église, Logelbach).
- **Espace culturel Arthuss** (2 av. de Lattre de Tassigny) — saison de spectacles, billetterie en ligne.
- **Marché de Noël** — **vendredi 4, samedi 5 et dimanche 6 décembre 2026**.

### 5.4 Patrimoine & histoire (ce qui personnalise le site)
- **Château du Hohlandsbourg** — construction débutée en **1279** par Sigfrid de Gundolsheim (avec l'autorisation du roi Rodolphe de Habsbourg) ; plus vaste château fort d'Alsace, panorama 360°, restauré, site touristique majeur.
- **Château du Pflixbourg** (ruine, vers 1212-1219), sur la **Route des Cinq Châteaux**.
- **Grand Cru Hengst** — **53 ha** de vignoble AOC sur le ban communal (riesling, pinot gris, gewurztraminer).
- **Église Saint-Laurent** (1844) et son **orgue Merklin-Schütze** (1861) ; **synagogue** néo-romane (1870, ancien siège du Consistoire israélite du Haut-Rhin, MH) ; **église N.-D.-de-l'Assomption** de Logelbach (béton armé, 1925-1927, MH).
- Mentionnée dès **786** (« Wingisheim », charte de l'abbaye de Murbach).
- **Tomi Ungerer** (illustrateur) a passé son enfance à Wintzenheim (Logelbach, 12 rue Haussmann).
- **Jumelages :** Möhnesee (Allemagne) et Pont-du-Casse (France).

### 5.5 Vie associative (un vrai atout — montrer la richesse, pas une liste creuse)
~50 associations en 5 catégories (sportives, culturelles, loisirs, sociales, autres). Exemples réels : **AS Wintzenheim** (football, 1925), **New Basket Club**, **Handball Club**, **Club Vosgien** (1873), **Harmonie Municipale Hohlandsbourg**, **École de Musique et de Danse** (EMDW, **45 ans** en 2025-2026), **Société d'Histoire**, **COWI** (commerçants), **Syndicat viticole**. *(Utiliser les noms réels ; ne pas inventer de visuels d'associations.)*

### 5.6 Sujets sensibles — à traiter avec tact (ne pas effacer, ne pas mettre maladroitement en avant)
- **Incendie du 9 août 2023** : 11 personnes en situation de handicap décédées dans un gîte — drame national.
- **Pollution historique au lindane** (secteur Logelbach) — relève d'une rubrique environnement/transparence.

---

## 6. Gabarits à concevoir (livrables)

1. **Page d'accueil** *(prioritaire)* — sans hero générique : une ouverture éditoriale forte (nom de la commune lisible à la première seconde, une vraie photo, le vert/or, l'accès rapide aux tâches habitant), puis actualités, agenda réel, accès patrimoine/découverte, et bandeau pratique (horaires/contact).
2. **Modèle « rubrique »** (ex. *Démarches* ou *Déchets*) — liste de tâches claires, contenus longs lisibles, encadrés d'aide.
3. **Modèle « article / actualité »** — fiche datée (titre serif, photo, corps lisible, mesure ~65 caractères).
4. **Modèle « événement »** (fiche agenda : date, lieu, infos pratiques, partage).
5. **Page « Contact / infos pratiques »** — mairie + annexe, horaires, plan, numéros utiles.
6. **Page 404 personnalisée** (avec retour accueil clair, ton humain, identité visuelle).
7. **En-tête + pied de page + navigation mobile + champ de recherche** (composants partagés). Pied de page complet : adresse, horaires, contact, plan du site, mentions, accessibilité, **blason**.

Pour chaque gabarit, fournis les **états** : survols discrets, **focus clavier visibles**, liens visités, boutons (primaire/secondaire), formulaires, et le rendu **mobile** (priorité) **et** desktop.

---

## 7. Exigences techniques & accessibilité (RGAA — obligation légale pour une commune)

- **HTML sémantique** (landmarks `header/nav/main/footer`, hiérarchie de titres correcte, `skip link`).
- **Contrastes AA**, **navigation clavier** complète, **focus visibles**, labels de formulaires, `alt` réels et descriptifs sur chaque image.
- **Mobile-first**, responsive impeccable, **boutons larges**.
- **Performance** : peu/pas de JS, images optimisées, pensé réseau faible.
- Prévoir **Open Graph** soigné (aperçu de partage = la commune, pas un placeholder) et une **404**.
- **Respect du `prefers-reduced-motion`** si animations.

---

## 8. Ton éditorial

Humain, accueillant, **qui parle aux habitants** de Wintzenheim — pas un copier-coller de site préfectoral. Concret et local.
- ✅ « La mairie est ouverte ce matin jusqu'à 12h » · « Sortez vos bacs la veille au soir »
- ❌ « Une commune dynamique tournée vers l'avenir » · « Bienvenue sur notre site »

---

### En résumé pour Claude Design
Vert **sinople** + or héraldique, **Cormorant Garamond** sur **Source Sans 3**, **vraies photos** du château et des rues de Wintzenheim, mise en page **éditoriale** et **asymétrique**, **parcours habitant** en première ligne, **RGAA AA**, **mobile-first**. Le tout doit crier « Wintzenheim », jamais « template de mairie ».
