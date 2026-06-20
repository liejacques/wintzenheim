// Bandeau d'alerte affiché en haut du site (infos urgentes : route coupée,
// alerte météo, coupure d'eau, etc.).
//
// Pour AFFICHER une alerte : passez `active` à true et renseignez le message.
// Pour la RETIRER : repassez `active` à false (rien ne s'affiche).
// `niveau` adapte la couleur : "info" (vert), "attention" (or), "urgent" (rouge).

export interface Alerte {
  active: boolean;
  niveau: "info" | "attention" | "urgent";
  message: string;
  lien?: string;
  libelleLien?: string;
}

export const alerte: Alerte = {
  active: false,
  niveau: "attention",
  message: "",
  lien: undefined,
  libelleLien: undefined,
};
