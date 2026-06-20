-- =========================================================================
-- Schéma Supabase — site de Wintzenheim
-- À exécuter dans Supabase (SQL Editor). Chaque table correspond à une
-- interface de src/lib/cms/types.ts. Le store localStorage (démo) est ensuite
-- remplacé par des requêtes supabase.from('<table>').
-- =========================================================================

-- Statuts réutilisables
create type statut_contenu as enum ('brouillon', 'programme', 'publie', 'archive');
create type statut_reservation as enum ('en_attente', 'acceptee', 'refusee', 'annulee');
create type statut_annonce as enum ('en_attente', 'acceptee', 'refusee', 'archivee');
create type role_utilisateur as enum ('super_admin', 'mairie_admin', 'communication', 'technique', 'lecture_seule');

-- Actualités
create table news (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  slug text unique not null,
  categorie text,
  resume text,
  contenu text,
  image text,
  galerie text[] default '{}',
  date_publication timestamptz,
  statut statut_contenu default 'brouillon',
  mise_en_avant boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Agenda
create table events (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  slug text unique not null,
  categorie text,
  date_debut timestamptz,
  date_fin timestamptz,
  lieu text,
  description text,
  image text,
  inscription_requise boolean default false,
  mise_en_avant boolean default false,
  statut statut_contenu default 'brouillon',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Pages éditoriales
create table pages (
  id uuid primary key default gen_random_uuid(),
  cle text unique not null,
  titre text,
  introduction text,
  blocs text,
  statut statut_contenu default 'publie',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Médiathèque
create table media (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  type text check (type in ('image','pdf','fichier')),
  titre text,
  alt text,
  credit text,
  categorie text,
  created_at timestamptz default now()
);

-- Documents officiels
create table documents (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  type text,
  fichier text,
  date timestamptz,
  description text,
  tags text[] default '{}',
  statut statut_contenu default 'brouillon',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Réservations de salle
create table room_bookings (
  id uuid primary key default gen_random_uuid(),
  salle text,
  date timestamptz,
  heure_debut text,
  heure_fin text,
  nom text,
  email text,
  telephone text,
  motif text,
  nombre_personnes int,
  message text,
  statut statut_reservation default 'en_attente',
  commentaire_interne text,
  created_at timestamptz default now()
);

-- Abonnés newsletter
create table newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  consentement boolean default false,
  actif boolean default true,
  created_at timestamptz default now()
);

-- Campagnes newsletter
create table newsletters (
  id uuid primary key default gen_random_uuid(),
  sujet text not null,
  contenu text,
  actualites_incluses uuid[] default '{}',
  statut statut_contenu default 'brouillon',
  envoye_le timestamptz,
  created_at timestamptz default now()
);

-- Petites annonces
create table classifieds (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  categorie text,
  description text,
  contact text,
  image text,
  mise_en_avant boolean default false,
  statut statut_annonce default 'en_attente',
  created_at timestamptz default now()
);

-- Annuaire
create table directory_items (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  categorie text,
  adresse text,
  telephone text,
  email text,
  web text,
  horaires text,
  description text,
  logo text,
  statut statut_contenu default 'publie',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Messages (contact)
create table messages (
  id uuid primary key default gen_random_uuid(),
  nom text,
  email text,
  objet text,
  message text,
  lu boolean default false,
  created_at timestamptz default now()
);

-- Utilisateurs (lié à auth.users de Supabase)
create table users (
  id uuid primary key references auth.users (id) on delete cascade,
  nom text,
  email text,
  role role_utilisateur default 'lecture_seule',
  actif boolean default true,
  created_at timestamptz default now()
);

-- Journal d'audit
create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  utilisateur text,
  action text,
  type_contenu text,
  cible text,
  ancien_statut text,
  nouveau_statut text,
  created_at timestamptz default now()
);

-- =========================================================================
-- Row Level Security (RLS) — exemple à adapter
-- Lecture publique des seuls contenus publiés ; écriture réservée aux
-- utilisateurs authentifiés (rôles gérés dans la table users).
-- =========================================================================
alter table news enable row level security;
create policy "news lecture publique" on news for select using (statut = 'publie' or (statut = 'programme' and date_publication <= now()));
create policy "news écriture authentifiée" on news for all to authenticated using (true) with check (true);

-- Répéter le même principe (lecture publique des publiés + écriture authentifiée)
-- pour events, documents, directory_items, classifieds (statut 'acceptee'), pages.
-- room_bookings / messages / subscribers / users / audit_logs : pas de lecture
-- publique (insert public possible pour bookings/subscribers/messages via une
-- policy d'INSERT dédiée).
