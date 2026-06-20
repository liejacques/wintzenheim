// Aide partagée pour les formulaires publics (réserver une salle, newsletter,
// dépôt d'annonce…). Envoi via Web3Forms si configuré, sinon repli mailto.
// En local : mode démo (pas d'envoi réel).

type Etat = "ok" | "mailto" | "erreur";

function construireMailto(form: HTMLFormElement, email: string): string {
  const sujet = form.dataset.sujet || "Message — site de Wintzenheim";
  const lignes: string[] = [];
  new FormData(form).forEach((v, k) => {
    if (typeof v === "string" && v.trim() && !["access_key", "subject", "from_name", "botcheck"].includes(k)) {
      lignes.push(`${k} : ${v}`);
    }
  });
  return "mailto:" + email + "?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(lignes.join("\n"));
}

export function initPublicForm(formId: string, onDone: (etat: Etat) => void): void {
  const form = document.getElementById(formId);
  if (!(form instanceof HTMLFormElement)) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const configured = form.dataset.configured === "true";
    const email = form.dataset.mairieEmail || "";
    if (["localhost", "127.0.0.1"].includes(location.hostname)) { onDone("ok"); return; }
    if (!configured) { window.location.href = construireMailto(form, email); onDone("mailto"); return; }
    try {
      const payload: Record<string, string> = {};
      new FormData(form).forEach((v, k) => { if (typeof v === "string") payload[k] = v; });
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      onDone((await r.json()).success ? "ok" : "erreur");
    } catch (err) { onDone("erreur"); }
  });
}
