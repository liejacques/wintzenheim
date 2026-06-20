// Informations pratiques : numéros utiles, services de proximité, transports.

export const urgences = [
  { num: "15", label: "SAMU — urgences médicales" },
  { num: "17", label: "Police / Gendarmerie" },
  { num: "18", label: "Sapeurs-pompiers" },
  { num: "112", label: "Numéro d'urgence européen" },
  { num: "114", label: "Urgences pour personnes sourdes ou malentendantes (SMS)" },
  { num: "115", label: "Samu social — hébergement d'urgence" },
  { num: "116 117", label: "Médecin de garde (permanence des soins)" },
];

export const servicesProximite = [
  {
    nom: "Gendarmerie de Wintzenheim",
    detail: "6 rue Georges-Clemenceau, 68920 Wintzenheim",
    tel: "03 89 27 01 52",
    telE164: "+33389270152",
  },
  {
    nom: "Eau — astreinte (Colmarienne des Eaux)",
    detail: "Urgence fuite, 24h/24",
    tel: "0 800 00 20 68",
    telE164: "+33800002068",
  },
  {
    nom: "La Poste — Wintzenheim",
    detail: "2A rue Clemenceau, 68920 Wintzenheim",
  },
];

export const transports = {
  intro:
    "Wintzenheim est desservie par le réseau de bus TRACE de Colmar Agglomération. La gare la plus proche est celle de Colmar, à environ 5 km.",
  lignes: [
    { nom: "Ligne B", detail: "Wintzenheim ↔ Colmar (Théâtre, Gare) ↔ Houssen. Dessert le quartier Centre." },
    { nom: "Ligne C", detail: "Logelbach ↔ Hôpital Schweitzer (Colmar). Dessert le quartier Logelbach." },
  ],
  contact: "Réservation et transport à la demande : 03 89 20 80 80",
  lien: "https://www.trace-colmar.fr",
};
