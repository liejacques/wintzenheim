// Application d'administration (SPA vanilla, schema-driven).
// Rendu à partir de collections.ts + store.ts. Persistance localStorage (démo),
// prête à être branchée sur Supabase (remplacer store.ts).
import { collections, byKey, PAGES_EDITABLES, type Collection, type Field } from "./collections";
import * as store from "./store";
import { connexion, sessionCourante, deconnexion, peutModifier, ROLES, type Session } from "./auth";
import { STATUT_LABEL } from "./schedule";

let root: HTMLElement;
let session: Session | null = null;

const esc = (s: any) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));
const fmtDate = (iso: string) => { if (!iso) return "—"; const d = new Date(iso); return isNaN(+d) ? esc(iso) : d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" }); };
const fmtDateTime = (iso: string) => { if (!iso) return "—"; const d = new Date(iso); return isNaN(+d) ? esc(iso) : d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }) + " " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }); };
const toDateInput = (iso: string) => { if (!iso) return ""; const d = new Date(iso); return isNaN(+d) ? "" : d.toISOString().slice(0, 10); };

function statutBadge(value: string): string {
  const map: Record<string, string> = {
    publie: "ok", programme: "info", brouillon: "muted", archive: "muted",
    acceptee: "ok", en_attente: "warn", refusee: "ko", annulee: "muted", archivee: "muted",
    true: "ok", false: "muted",
  };
  const labels: Record<string, string> = {
    ...STATUT_LABEL,
    en_attente: "En attente", acceptee: "Acceptée", refusee: "Refusée", annulee: "Annulée", archivee: "Archivée",
    true: "Lu", false: "Non lu",
  };
  const k = String(value);
  return `<span class="badge badge--${map[k] || "muted"}">${esc(labels[k] || k)}</span>`;
}

function go(hash: string) { location.hash = hash; }

// ---------------------------------------------------------------- LOGIN
function renderLogin() {
  root.innerHTML = `
    <div class="login">
      <form class="login__card" id="loginForm">
        <img src="/blason.svg" width="56" height="62" alt="" />
        <p class="login__eyebrow">Espace de gestion</p>
        <h1 class="login__title">Mairie de Wintzenheim</h1>
        <p class="login__hint">Connectez-vous pour gérer le contenu du site.</p>
        <label for="pw">Mot de passe</label>
        <input id="pw" type="password" autocomplete="current-password" placeholder="••••••" />
        <p class="login__err" id="loginErr"></p>
        <button class="ad-btn ad-btn--primary" type="submit">Se connecter</button>
        <p class="login__demo">Démo : mot de passe <strong>mairie</strong></p>
      </form>
    </div>`;
  const form = document.getElementById("loginForm") as HTMLFormElement;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const pw = (document.getElementById("pw") as HTMLInputElement).value;
    const s = connexion(pw);
    if (!s) { document.getElementById("loginErr")!.textContent = "Mot de passe incorrect."; return; }
    session = s; boot();
  });
}

// ---------------------------------------------------------------- SHELL
function navGroups() {
  const groups: Record<string, Collection[]> = {};
  collections.forEach((c) => { (groups[c.group] ||= []).push(c); });
  return groups;
}

function renderShell(content: string, activeKey: string) {
  const groups = navGroups();
  const navHtml = Object.entries(groups).map(([g, cols]) => `
    <div class="ad-nav__group"><span class="ad-nav__title">${esc(g)}</span>
      ${cols.map((c) => `<a class="ad-nav__link ${activeKey === c.key ? "is-active" : ""}" href="#/c/${c.key}">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path d="${c.icon}"/></svg>
        ${esc(c.label)}</a>`).join("")}
    </div>`).join("");

  root.innerHTML = `
    <div class="ad">
      <aside class="ad-side" id="adSide">
        <a class="ad-brand" href="#/dashboard">
          <img src="/blason.svg" width="34" height="38" alt="" />
          <span><strong>Wintzenheim</strong><small>Espace de gestion</small></span>
        </a>
        <nav class="ad-nav">
          <div class="ad-nav__group">
            <a class="ad-nav__link ${activeKey === "dashboard" ? "is-active" : ""}" href="#/dashboard">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 13h8V3H3Z M13 21h8V3h-8Z M3 21h8v-6H3Z"/></svg> Tableau de bord</a>
            <a class="ad-nav__link ${activeKey === "accueil" ? "is-active" : ""}" href="#/accueil">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 11l9-8 9 8 M5 9v11h14V9"/></svg> Page d'accueil</a>
          </div>
          ${navHtml}
        </nav>
        <div class="ad-side__foot">
          <span class="ad-user"><strong>${esc(session?.nom)}</strong><small>${esc(ROLES.find(r=>r.value===session?.role)?.label)}</small></span>
          <button class="ad-btn ad-btn--ghost ad-btn--sm" id="logoutBtn">Déconnexion</button>
          <a class="ad-side__view" href="/" target="_blank">Voir le site ↗</a>
        </div>
      </aside>
      <div class="ad-main">
        <header class="ad-top">
          <button class="ad-burger" id="adBurger" aria-label="Menu"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
          <a class="ad-top__brand" href="#/dashboard"><img src="/blason.svg" width="26" height="29" alt=""/> Gestion</a>
          <a class="ad-top__view" href="/" target="_blank">Voir le site ↗</a>
        </header>
        <main class="ad-content" id="adContent">${content}</main>
      </div>
      <div class="ad-scrim" id="adScrim"></div>
    </div>`;

  document.getElementById("logoutBtn")?.addEventListener("click", () => { deconnexion(); session = null; boot(); });
  const side = document.getElementById("adSide")!, scrim = document.getElementById("adScrim")!;
  const closeSide = () => { side.classList.remove("is-open"); scrim.classList.remove("is-open"); };
  document.getElementById("adBurger")?.addEventListener("click", () => { side.classList.add("is-open"); scrim.classList.add("is-open"); });
  scrim.addEventListener("click", closeSide);
  side.querySelectorAll(".ad-nav__link").forEach((l) => l.addEventListener("click", closeSide));
}

// ---------------------------------------------------------------- DASHBOARD
function viewDashboard() {
  const news = store.list<any>("news");
  const events = store.list<any>("events");
  const bookings = store.list<any>("room_bookings");
  const messages = store.list<any>("messages");
  const docs = store.list<any>("documents");
  const classifieds = store.list<any>("classifieds");
  const now = Date.now();
  const stats = [
    { n: news.filter((x) => x.statut === "publie").length, l: "Actualités publiées", h: "#/c/news" },
    { n: news.filter((x) => x.statut === "brouillon").length, l: "Brouillons", h: "#/c/news" },
    { n: news.filter((x) => x.statut === "programme").length, l: "Programmées", h: "#/c/news" },
    { n: events.filter((x) => new Date(x.dateDebut).getTime() >= now).length, l: "Événements à venir", h: "#/c/events" },
    { n: bookings.filter((x) => x.statut === "en_attente").length, l: "Réservations en attente", h: "#/c/room_bookings" },
    { n: messages.filter((x) => !x.lu).length, l: "Messages non lus", h: "#/c/messages" },
    { n: classifieds.filter((x) => x.statut === "en_attente").length, l: "Annonces à modérer", h: "#/c/classifieds" },
    { n: docs.length, l: "Documents", h: "#/c/documents" },
  ];
  const shortcuts = [
    { l: "Nouvelle actualité", h: "#/c/news/new" },
    { l: "Ajouter un document", h: "#/c/documents/new" },
    { l: "Modifier l'accueil", h: "#/accueil" },
    { l: "Voir les réservations", h: "#/c/room_bookings" },
    { l: "Créer une newsletter", h: "#/c/newsletters/new" },
  ];
  const recent = store.list<any>("audit_logs").slice(0, 6);
  renderShell(`
    <div class="ad-head"><h1>Bonjour, ${esc((session?.nom || "").split(" ")[0] || "")}</h1><p>Vue d'ensemble de votre site.</p></div>
    <div class="stat-grid">
      ${stats.map((s) => `<a class="stat" href="${s.h}"><span class="stat__n">${s.n}</span><span class="stat__l">${esc(s.l)}</span></a>`).join("")}
    </div>
    <div class="dash-cols">
      <section class="panel"><h2>Raccourcis</h2><div class="shortcuts">
        ${shortcuts.map((s) => `<a class="shortcut" href="${s.h}">${esc(s.l)} <span>→</span></a>`).join("")}
      </div></section>
      <section class="panel"><h2>Activité récente</h2>
        ${recent.length ? `<ul class="activity">${recent.map((a) => `<li><span class="activity__a">${esc(a.action)}</span> ${esc(a.cible)} <small>${fmtDateTime(a.createdAt)}</small></li>`).join("")}</ul>` : `<p class="muted">Aucune activité pour le moment.</p>`}
      </section>
    </div>`, "dashboard");
}

// ---------------------------------------------------------------- LIST
const listState: Record<string, { q: string; statut: string }> = {};
function viewList(key: string) {
  const col = byKey(key); if (!col) return viewDashboard();
  if (key === "directory_pages") return viewPages();
  const st = (listState[key] ||= { q: "", statut: "" });
  const canEdit = peutModifier(session!.role, key) && !col.readOnly;
  let items = store.list<any>(key);
  if (st.q) { const q = st.q.toLowerCase(); items = items.filter((it) => col.searchable.some((f) => String(it[f] ?? "").toLowerCase().includes(q))); }
  if (st.statut) items = items.filter((it) => String(it.statut) === st.statut);

  const statutOptions = col.statut === "contenu" ? ["publie", "programme", "brouillon", "archive"]
    : col.statut === "reservation" ? ["en_attente", "acceptee", "refusee", "annulee"]
    : col.statut === "annonce" ? ["en_attente", "acceptee", "refusee", "archivee"] : [];

  const cell = (it: any, f: string) => {
    if (f === "statut") return statutBadge(it.statut);
    if (f === "lu") return statutBadge(String(!!it.lu));
    if (f === "actif") return statutBadge(String(!!it.actif));
    if (/date|createdAt|envoyeLe/i.test(f)) return f === "createdAt" ? fmtDateTime(it[f]) : fmtDate(it[f]);
    if (f === "role") return esc(ROLES.find((r) => r.value === it[f])?.label || it[f]);
    return esc(it[f]);
  };

  renderShell(`
    <div class="ad-head ad-head--row">
      <div><h1>${esc(col.label)}</h1><p>${items.length} élément(s)</p></div>
      ${canEdit ? `<a class="ad-btn ad-btn--primary" href="#/c/${key}/new">+ ${esc(col.singular)}</a>` : ""}
    </div>
    <div class="toolbar">
      <input class="ad-search" id="listQ" type="search" placeholder="Rechercher…" value="${esc(st.q)}" />
      ${statutOptions.length ? `<select class="ad-select" id="listStatut"><option value="">Tous les statuts</option>${statutOptions.map((s) => `<option value="${s}" ${st.statut === s ? "selected" : ""}>${esc(STATUT_LABEL[s as keyof typeof STATUT_LABEL] || s)}</option>`).join("")}</select>` : ""}
    </div>
    ${items.length === 0 ? `<div class="empty">Aucun résultat.</div>` : `
    <div class="table-wrap"><table class="ad-table">
      <thead><tr>${col.columns.map((c) => `<th>${esc(fieldLabel(col, c))}</th>`).join("")}<th></th></tr></thead>
      <tbody>${items.map((it) => `<tr data-id="${it.id}">
        ${col.columns.map((c, i) => `<td data-label="${esc(fieldLabel(col, c))}">${i === 0 ? `<strong>${cell(it, c)}</strong>` : cell(it, c)}</td>`).join("")}
        <td class="row-actions">
          <a class="ad-link" href="#/c/${key}/edit/${it.id}">${canEdit ? "Modifier" : "Voir"}</a>
        </td></tr>`).join("")}</tbody>
    </table></div>`}
  `, key);

  const q = document.getElementById("listQ") as HTMLInputElement;
  q?.addEventListener("input", () => { st.q = q.value; const items2 = renderRoute; viewList(key); (document.getElementById("listQ") as HTMLInputElement)?.focus(); });
  const sel = document.getElementById("listStatut") as HTMLSelectElement;
  sel?.addEventListener("change", () => { st.statut = sel.value; viewList(key); });
}

function fieldLabel(col: Collection, name: string): string {
  if (name === "statut") return "Statut";
  if (name === "createdAt") return "Date";
  if (name === "lu") return "État";
  if (name === "actif") return "Actif";
  const f = col.fields.find((x) => x.name === name);
  return f ? f.label : name;
}

// ---------------------------------------------------------------- FORM
function viewForm(key: string, id?: string) {
  const col = byKey(key); if (!col) return viewDashboard();
  const canEdit = peutModifier(session!.role, key) && !col.readOnly;
  const existing = id ? store.get<any>(key, id) : null;
  const data: any = existing ? { ...existing } : defaults(col);

  const sections: Record<string, Field[]> = {};
  col.fields.forEach((f) => { (sections[f.section || "Informations"] ||= []).push(f); });

  const sectionsHtml = Object.entries(sections).map(([s, fields]) => `
    <fieldset class="form-sec"><legend>${esc(s)}</legend>
      ${fields.map((f) => renderField(f, data[f.name])).join("")}
    </fieldset>`).join("");

  let statusBar = "";
  if (col.statut === "contenu") {
    statusBar = `<div class="form-status">Statut actuel : ${statutBadge(data.statut || "brouillon")}</div>`;
  } else if (col.statut !== "none") {
    statusBar = `<div class="form-status">Statut : ${statutBadge(data.statut)}</div>`;
  }

  renderShell(`
    <div class="ad-head ad-head--row">
      <div><a class="back" href="#/c/${key}">← ${esc(col.label)}</a><h1>${existing ? "Modifier" : "Nouveau"} ${esc(col.singular.toLowerCase())}</h1></div>
      ${col.statut === "contenu" && existing ? `<button class="ad-btn ad-btn--ghost ad-btn--sm" id="previewBtn">Aperçu</button>` : ""}
    </div>
    <form id="itemForm" class="ad-form" ${canEdit ? "" : "data-readonly"}>
      ${statusBar}
      ${sectionsHtml}
      <div class="form-actions">
        ${canEdit ? actionButtons(col, !!existing) : `<p class="muted">Vous êtes en lecture seule.</p>`}
        ${canEdit && existing ? `<button type="button" class="ad-btn ad-btn--danger ad-btn--ghost" id="deleteBtn">Supprimer</button>` : ""}
      </div>
      <p class="form-msg" id="formMsg"></p>
    </form>`, key);

  if (!canEdit) { root.querySelectorAll("#itemForm input,#itemForm textarea,#itemForm select,#itemForm button:not(#previewBtn)").forEach((e) => (e as HTMLInputElement).disabled = true); }

  wireMediaButtons();
  const form = document.getElementById("itemForm") as HTMLFormElement;

  const collect = () => {
    const out: any = { ...data };
    col.fields.forEach((f) => {
      const node = form.querySelector(`[name="${f.name}"]`) as HTMLInputElement | null;
      if (!node && f.type !== "gallery") return;
      if (f.type === "checkbox") out[f.name] = (node as HTMLInputElement).checked;
      else if (f.type === "number") out[f.name] = Number(node!.value) || 0;
      else if (f.type === "tags") out[f.name] = node!.value.split(",").map((s) => s.trim()).filter(Boolean);
      else if (f.type === "gallery") out[f.name] = (form.querySelector(`[name="${f.name}"]`) as HTMLInputElement)?.value.split("\n").map((s)=>s.trim()).filter(Boolean) || [];
      else if (f.type === "date") out[f.name] = node!.value ? new Date(node!.value).toISOString() : "";
      else out[f.name] = node!.value;
    });
    return out;
  };

  const validate = (out: any) => {
    for (const f of col.fields) {
      if (f.required && !String(out[f.name] ?? "").trim()) { return `Le champ « ${f.label} » est obligatoire.`; }
    }
    return "";
  };

  const save = (patch: any) => {
    const out = { ...collect(), ...patch };
    const err = validate(out);
    if (err) { const m = document.getElementById("formMsg")!; m.textContent = err; m.className = "form-msg ko"; return; }
    if (existing) store.update(key, existing.id, out); else store.create(key, out);
    go(`#/c/${key}`);
  };

  form.querySelectorAll("[data-action]").forEach((b) => b.addEventListener("click", (e) => {
    e.preventDefault();
    const a = (b as HTMLElement).dataset.action;
    if (a === "draft") save({ statut: "brouillon" });
    else if (a === "publish") save({ statut: "publie", datePublication: data.datePublication || new Date().toISOString() });
    else if (a === "schedule") {
      const di = form.querySelector('[name="datePublication"]') as HTMLInputElement;
      if (!di?.value) { const m = document.getElementById("formMsg")!; m.textContent = "Choisissez une date de publication pour programmer."; m.className = "form-msg ko"; return; }
      save({ statut: "programme", datePublication: new Date(di.value).toISOString() });
    }
    else if (a === "save") save({});
    else if (a === "accept") save({ statut: "acceptee" });
    else if (a === "refuse") save({ statut: "refusee" });
    else if (a === "archive") save({ statut: col.statut === "annonce" ? "archivee" : "archive" });
  }));

  document.getElementById("deleteBtn")?.addEventListener("click", () => { if (confirm("Supprimer définitivement ?")) { store.remove(key, existing.id); go(`#/c/${key}`); } });
  document.getElementById("previewBtn")?.addEventListener("click", () => previewModal(collect()));
}

function actionButtons(col: Collection, existing: boolean): string {
  if (col.statut === "contenu") {
    return `
      <button class="ad-btn ad-btn--ghost" data-action="draft" type="button">Enregistrer le brouillon</button>
      ${col.scheduled ? `<button class="ad-btn ad-btn--ghost" data-action="schedule" type="button">Programmer</button>` : ""}
      <button class="ad-btn ad-btn--primary" data-action="publish" type="button">Publier maintenant</button>
      ${existing ? `<button class="ad-btn ad-btn--ghost" data-action="archive" type="button">Archiver</button>` : ""}`;
  }
  if (col.statut === "reservation") {
    return `<button class="ad-btn ad-btn--ghost" data-action="save" type="button">Enregistrer</button>
      <button class="ad-btn ad-btn--primary" data-action="accept" type="button">Accepter</button>
      <button class="ad-btn ad-btn--danger ad-btn--ghost" data-action="refuse" type="button">Refuser</button>`;
  }
  if (col.statut === "annonce") {
    return `<button class="ad-btn ad-btn--primary" data-action="accept" type="button">Accepter</button>
      <button class="ad-btn ad-btn--danger ad-btn--ghost" data-action="refuse" type="button">Refuser</button>
      <button class="ad-btn ad-btn--ghost" data-action="archive" type="button">Archiver</button>`;
  }
  return `<button class="ad-btn ad-btn--primary" data-action="save" type="button">Enregistrer</button>`;
}

function defaults(col: Collection): any {
  const d: any = {};
  col.fields.forEach((f) => {
    d[f.name] = f.type === "checkbox" ? false : f.type === "number" ? 0 : f.type === "tags" || f.type === "gallery" ? [] : "";
  });
  if (col.statut === "contenu") d.statut = "brouillon";
  if (col.statut === "reservation") d.statut = "en_attente";
  if (col.statut === "annonce") d.statut = "en_attente";
  return d;
}

function renderField(f: Field, val: any): string {
  const id = "f_" + f.name;
  const lab = `<label for="${id}">${esc(f.label)}${f.required ? " *" : ""}</label>`;
  const help = f.help ? `<small class="field-help">${esc(f.help)}</small>` : "";
  let input = "";
  if (f.type === "textarea" || f.type === "richtext") input = `<textarea id="${id}" name="${f.name}" rows="${f.type === "richtext" ? 8 : 3}">${esc(val)}</textarea>`;
  else if (f.type === "select") input = `<select id="${id}" name="${f.name}">${(f.options || []).map((o) => `<option ${String(val) === o ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
  else if (f.type === "checkbox") return `<div class="field field--check"><label class="switch"><input id="${id}" name="${f.name}" type="checkbox" ${val ? "checked" : ""}/><span></span></label> <span>${esc(f.label)}</span>${help}</div>`;
  else if (f.type === "date") input = `<input id="${id}" name="${f.name}" type="date" value="${toDateInput(val)}"/>`;
  else if (f.type === "number") input = `<input id="${id}" name="${f.name}" type="number" value="${esc(val)}"/>`;
  else if (f.type === "tags") input = `<input id="${id}" name="${f.name}" type="text" value="${esc(Array.isArray(val) ? val.join(", ") : val)}" placeholder="séparés par des virgules"/>`;
  else if (f.type === "image" || f.type === "file") input = `<div class="media-field"><input id="${id}" name="${f.name}" type="text" value="${esc(val)}" placeholder="URL ou choisir un média"/><button type="button" class="ad-btn ad-btn--ghost ad-btn--sm" data-media="${f.name}" data-media-type="${f.type}">Médiathèque</button></div>${val && /^data:image|\.(png|jpe?g|webp|svg)/i.test(val) ? `<img class="media-prev" src="${esc(val)}" alt=""/>` : ""}`;
  else if (f.type === "gallery") input = `<textarea id="${id}" name="${f.name}" rows="3" placeholder="une URL par ligne">${esc(Array.isArray(val) ? val.join("\n") : val)}</textarea>`;
  else input = `<input id="${id}" name="${f.name}" type="${f.type === "email" ? "email" : f.type === "tel" ? "tel" : f.type === "url" ? "url" : "text"}" value="${esc(val)}"/>`;
  return `<div class="field">${lab}${input}${help}</div>`;
}

// ---------------------------------------------------------------- MEDIA picker
function wireMediaButtons() {
  root.querySelectorAll("[data-media]").forEach((b) => b.addEventListener("click", () => {
    const target = (b as HTMLElement).dataset.media!;
    mediaPicker((url) => {
      const input = root.querySelector(`[name="${target}"]`) as HTMLInputElement;
      if (input) input.value = url;
    });
  }));
}

function mediaPicker(onPick: (url: string) => void) {
  const media = store.list<any>("media");
  const body = `
    <div class="picker">
      <label class="upload">
        <input type="file" id="upFile" accept="image/*,application/pdf" hidden/>
        <span>+ Téléverser un fichier</span>
      </label>
      <div class="picker-grid">
        ${media.length ? media.map((m) => `<button class="pick" data-url="${esc(m.url)}" title="${esc(m.titre)}">${/^data:image|\.(png|jpe?g|webp|svg)/i.test(m.url) ? `<img src="${esc(m.url)}" alt="${esc(m.alt)}"/>` : `<span class="pick__file">PDF</span>`}<small>${esc(m.titre)}</small></button>`).join("") : `<p class="muted">Médiathèque vide. Téléversez un fichier.</p>`}
      </div>
    </div>`;
  const close = modal("Médiathèque", body);
  document.getElementById("upFile")?.addEventListener("change", (e) => {
    const file = (e.target as HTMLInputElement).files?.[0]; if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert("Fichier trop lourd pour la démo (2 Mo max en localStorage)."); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      store.create("media", { url, type: file.type.includes("pdf") ? "pdf" : "image", titre: file.name, alt: file.name, credit: "", categorie: "" });
      onPick(url); close();
    };
    reader.readAsDataURL(file);
  });
  root.querySelectorAll(".pick").forEach((p) => p.addEventListener("click", () => { onPick((p as HTMLElement).dataset.url!); close(); }));
}

function previewModal(d: any) {
  const body = `<article class="preview">
    ${d.image && /^data:image|\.(png|jpe?g|webp|svg)/i.test(d.image) ? `<img src="${esc(d.image)}" alt=""/>` : ""}
    <span class="preview__cat">${esc(d.categorie || "")}</span>
    <h2>${esc(d.titre)}</h2>
    <p class="preview__resume">${esc(d.resume || "")}</p>
    <div class="preview__body">${esc(d.contenu || d.description || "").split("\n\n").map((p: string) => `<p>${esc(p)}</p>`).join("")}</div>
  </article>`;
  modal("Aperçu", body);
}

function modal(title: string, body: string): () => void {
  const wrap = document.createElement("div");
  wrap.className = "ad-modal";
  wrap.innerHTML = `<div class="ad-modal__box"><header><h3>${esc(title)}</h3><button class="ad-modal__x" aria-label="Fermer">×</button></header><div class="ad-modal__body">${body}</div></div>`;
  document.body.appendChild(wrap);
  const close = () => wrap.remove();
  wrap.addEventListener("click", (e) => { if (e.target === wrap) close(); });
  wrap.querySelector(".ad-modal__x")?.addEventListener("click", close);
  return close;
}

// ---------------------------------------------------------------- ACCUEIL
function viewAccueil() {
  const canEdit = peutModifier(session!.role, "accueil");
  const h = store.getHome();
  const f = (name: string, label: string, val: string, ta = false) => `<div class="field"><label for="h_${name}">${esc(label)}</label>${ta ? `<textarea id="h_${name}" data-h="${name}" rows="3">${esc(val)}</textarea>` : `<input id="h_${name}" data-h="${name}" value="${esc(val)}"/>`}</div>`;
  renderShell(`
    <div class="ad-head"><h1>Page d'accueil</h1><p>Modifiez les textes et images de l'accueil. La mise en page ne change pas.</p></div>
    <form class="ad-form" id="homeForm">
      <fieldset class="form-sec"><legend>Bandeau d'accueil (héros)</legend>
        ${f("heroEyebrow", "Surtitre", h.heroEyebrow)}
        ${f("heroTitre", "Titre", h.heroTitre)}
        ${f("heroTitreEm", "Titre (suite, en doré italique)", h.heroTitreEm)}
        ${f("heroLede", "Texte d'introduction", h.heroLede, true)}
      </fieldset>
      <fieldset class="form-sec"><legend>Boutons d'accès</legend>
        ${f("ctaResident", "Bouton « habitant »", h.ctaResident)}
        ${f("ctaVisiteur", "Bouton « visiteur »", h.ctaVisiteur)}
      </fieldset>
      <fieldset class="form-sec"><legend>Images</legend>
        <div class="field"><label for="h_heroImage">Image principale (héros)</label><div class="media-field"><input id="h_heroImage" data-h="heroImage" value="${esc(h.heroImage)}"/><button type="button" class="ad-btn ad-btn--ghost ad-btn--sm" data-media="heroImage" data-media-type="image">Médiathèque</button></div></div>
        <div class="field"><label for="h_imageSecondaire">Image secondaire</label><div class="media-field"><input id="h_imageSecondaire" data-h="imageSecondaire" value="${esc(h.imageSecondaire)}"/><button type="button" class="ad-btn ad-btn--ghost ad-btn--sm" data-media="imageSecondaire" data-media-type="image">Médiathèque</button></div></div>
      </fieldset>
      <div class="form-actions">${canEdit ? `<button class="ad-btn ad-btn--primary" type="submit">Enregistrer</button>` : `<p class="muted">Lecture seule.</p>`}</div>
      <p class="form-msg" id="homeMsg"></p>
    </form>`, "accueil");
  wireMediaButtons();
  document.getElementById("homeForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!canEdit) return;
    const out: any = {};
    root.querySelectorAll("[data-h]").forEach((n) => { out[(n as HTMLElement).dataset.h!] = (n as HTMLInputElement).value; });
    store.setHome(out);
    const m = document.getElementById("homeMsg")!; m.textContent = "Enregistré ✓"; m.className = "form-msg ok";
  });
}

// ---------------------------------------------------------------- PAGES éditoriales
function viewPages() {
  renderShell(`
    <div class="ad-head"><h1>Pages du site</h1><p>Modifiez le contenu des pages (titre, introduction, blocs). La structure reste protégée.</p></div>
    <div class="pages-grid">
      ${PAGES_EDITABLES.map((p, i) => `<a class="page-card" href="#/page/${i}"><strong>${esc(p)}</strong><span>Modifier →</span></a>`).join("")}
    </div>`, "directory_pages");
}

function viewPageEdit(idx: number) {
  const name = PAGES_EDITABLES[idx]; if (!name) return viewPages();
  const all = store.list<any>("editable_pages");
  const existing = all.find((x) => x.cle === name);
  const data = existing || { cle: name, titre: name, introduction: "", blocs: "" };
  renderShell(`
    <div class="ad-head"><a class="back" href="#/c/directory_pages">← Pages du site</a><h1>${esc(name)}</h1></div>
    <form class="ad-form" id="pageForm">
      <fieldset class="form-sec"><legend>Contenu</legend>
        <div class="field"><label>Titre affiché</label><input id="p_titre" value="${esc(data.titre)}"/></div>
        <div class="field"><label>Introduction</label><textarea id="p_intro" rows="3">${esc(data.introduction)}</textarea></div>
        <div class="field"><label>Blocs de contenu</label><textarea id="p_blocs" rows="10">${esc(data.blocs)}</textarea><small class="field-help">Texte libre (markdown léger). N'affecte pas la mise en page.</small></div>
      </fieldset>
      <div class="form-actions"><button class="ad-btn ad-btn--primary" type="submit">Enregistrer</button></div>
      <p class="form-msg" id="pageMsg"></p>
    </form>`, "directory_pages");
  document.getElementById("pageForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const patch = { cle: name, titre: (document.getElementById("p_titre") as HTMLInputElement).value, introduction: (document.getElementById("p_intro") as HTMLTextAreaElement).value, blocs: (document.getElementById("p_blocs") as HTMLTextAreaElement).value, statut: "publie" };
    if (existing) store.update("editable_pages", existing.id, patch); else store.create("editable_pages", patch);
    const m = document.getElementById("pageMsg")!; m.textContent = "Enregistré ✓"; m.className = "form-msg ok";
  });
}

// ---------------------------------------------------------------- ROUTER
function renderRoute() {
  const hash = location.hash.replace(/^#/, "") || "/dashboard";
  const parts = hash.split("/").filter(Boolean); // e.g. ["c","news","edit","id"]
  if (parts[0] === "dashboard") return viewDashboard();
  if (parts[0] === "accueil") return viewAccueil();
  if (parts[0] === "page") return viewPageEdit(Number(parts[1]));
  if (parts[0] === "c") {
    const key = parts[1];
    if (parts[2] === "new") return viewForm(key);
    if (parts[2] === "edit") return viewForm(key, parts[3]);
    return viewList(key);
  }
  return viewDashboard();
}

function boot() {
  session = sessionCourante();
  if (!session) return renderLogin();
  renderRoute();
}

export function mountAdmin(el: HTMLElement) {
  root = el;
  window.addEventListener("hashchange", () => { if (session) renderRoute(); });
  boot();
}
