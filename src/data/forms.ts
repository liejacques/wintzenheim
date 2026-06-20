// Configuration des formulaires (contact, signalement, rendez-vous).
//
// Le site est statique : pour qu'un formulaire arrive par e-mail à la mairie,
// on utilise Web3Forms (gratuit). La clé est PUBLIQUE (présente dans le HTML),
// ce n'est PAS un secret. Pour l'activer :
//   1. Créer une clé sur https://web3forms.com en la liant à
//      mairie@mairie-wintzenheim.fr (réception des messages).
//   2. La renseigner dans Vercel : Project → Settings → Environment Variables →
//      PUBLIC_WEB3FORMS_KEY = votre-clé. (ou remplacer la valeur ci-dessous).
//
// Tant qu'aucune vraie clé n'est configurée, les formulaires basculent
// automatiquement sur un lien e-mail (mailto) pré-rempli : ils restent donc
// utilisables, sans rien casser.

const PLACEHOLDER = "REMPLACER-PAR-VOTRE-CLE-WEB3FORMS";

/** Clé publique Web3Forms (réception e-mail des formulaires). */
export const web3formsKey = import.meta.env.PUBLIC_WEB3FORMS_KEY || PLACEHOLDER;

/** Clé publique ImgBB (héberge la photo d'un signalement ; facultatif). */
export const imgbbKey = import.meta.env.PUBLIC_IMGBB_KEY || "";

/** Vrai uniquement si une vraie clé Web3Forms est en place (sinon repli mailto). */
export const formsConfigured = web3formsKey !== PLACEHOLDER;
