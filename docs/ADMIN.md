# Espace de gestion — guide

Le site est administrable depuis **`/admin`** (ex. `https://wintzenheim.vercel.app/admin`).
Cette page n'est pas indexée par les moteurs de recherche.

## 1. Se connecter

- Aller sur `/admin`.
- Mot de passe de démonstration : **`mairie`**.
- (En production, l'authentification passera par Supabase Auth — voir §5.)

## 2. Ce que l'on peut gérer

L'admin est organisé par modules (barre latérale) :

| Module | Permet de… |
|---|---|
| **Tableau de bord** | Vue d'ensemble : actus publiées/brouillons/programmées, événements à venir, réservations en attente, messages, documents + raccourcis. |
| **Page d'accueil** | Modifier les **textes** (titre, sous-titre, boutons) et les **images** (héros, secondaire). La mise en page ne change pas. |
| **Actualités** | Créer/modifier/dupliquer/archiver. Statuts brouillon / programmé / publié / archivé, image, **publication programmée** et **publier maintenant**, aperçu. |
| **Agenda** | Événements (dates, lieu, catégorie, mise en avant). |
| **Documents officiels** | Arrêtés, PV, DICRIM, budgets… (type, PDF, tags, statut). |
| **Annuaire** | Commerces, artisans, santé, associations, services. |
| **Réservations de salle** | Demandes reçues : accepter / refuser, commentaire interne. |
| **Petites annonces** | Modération : accepter / refuser / archiver. |
| **Messages reçus** | Messages du formulaire de contact. |
| **Newsletters / Abonnés** | Rédiger une lettre, gérer les abonnés. |
| **Médiathèque** | Téléverser images/PDF (alt obligatoire pour les images), réutiliser dans les contenus. |
| **Pages du site** | Modifier le contenu éditorial des pages (titre, intro, blocs). |
| **Utilisateurs** | Rôles : super_admin, mairie_admin, communication, technique, lecture seule. |
| **Historique** | Journal des modifications (qui, quoi, quand). |

> L'admin modifie **le contenu**, jamais la mise en page : l'apparence du site reste protégée.

## 3. Publication programmée

- Dans une actualité : choisir une **date de publication** puis **« Programmer »** (statut *programmé*).
- L'actu devient publique **à 00:00 le jour choisi**, grâce à une **reconstruction quotidienne** du site (GitHub Actions, fichier `.github/workflows/rebuild.yml`).
- **« Publier maintenant »** publie immédiatement.
- Les brouillons et archives ne sont **jamais** visibles côté public.

Pour activer la reconstruction quotidienne :
1. Vercel → projet → **Settings → Git → Deploy Hooks** : créer un hook (branche `main`), copier l'URL.
2. GitHub → dépôt → **Settings → Secrets and variables → Actions** : créer le secret **`VERCEL_DEPLOY_HOOK`** avec cette URL.

## 4. Formulaires publics (signalement, contact, réservation, newsletter, annonces)

Envoi par e-mail via **Web3Forms** (gratuit). Tant qu'aucune clé n'est configurée,
les formulaires basculent sur un lien e-mail (**mailto**) — rien n'est cassé.

Pour activer l'envoi direct : créer une clé sur web3forms.com (liée à
`mairie@mairie-wintzenheim.fr`), puis Vercel → **Environment Variables** →
`PUBLIC_WEB3FORMS_KEY`. (Photo de signalement : `PUBLIC_IMGBB_KEY`, optionnel.)

## 5. État actuel des données & branchement Supabase

**Aujourd'hui (démo) :** l'admin enregistre les modifications dans le **navigateur**
(localStorage) — idéal pour tester l'expérience complète. Les modifications ne sont
donc pas encore partagées entre appareils ni reflétées automatiquement sur le site
public (qui est généré à partir du contenu du dépôt).

**Pour un back-office réel, brancher Supabase :**
1. Créer un projet Supabase, exécuter `supabase/schema.sql` (SQL Editor).
2. Activer **Supabase Auth** (e-mail/mot de passe) et créer les comptes ; remplir la
   table `users` (rôles).
3. Créer un **bucket Storage** (`media`) pour les images/PDF.
4. Remplacer l'implémentation de **`src/lib/cms/store.ts`** (et `auth.ts`) par des
   appels `supabase.from('<table>')` / `supabase.auth` / `supabase.storage`. Les
   **types** (`src/lib/cms/types.ts`) et la **config des modules**
   (`src/lib/cms/collections.ts`) restent inchangés.
5. Côté public, lire les contenus publiés depuis Supabase au build (ou via une
   reconstruction sur webhook lors d'une publication).

## Architecture (repères)

```
src/lib/cms/
  types.ts        types TS = tables Supabase
  collections.ts  config des modules (champs, colonnes) → génère l'UI
  store.ts        CRUD (localStorage aujourd'hui → Supabase demain)
  auth.ts         session + rôles (mock → Supabase Auth)
  schedule.ts     logique de publication programmée
  seed.ts         données initiales (dérivées du contenu réel)
  app.ts          application /admin (rendu, routeur, formulaires)
src/pages/admin/index.astro   point d'entrée /admin
src/styles/admin.css          style de l'admin
supabase/schema.sql           schéma de base de données
```
