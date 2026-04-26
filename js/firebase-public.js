import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const hasFirebaseConfig = !String(firebaseConfig.apiKey || "").includes("PUT_YOUR");
const safe = (v = "") => String(v).replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;","\"":"&quot;"}[ch]));

function modal(title, body) {
  if (typeof window.showModal === "function") window.showModal(title, body);
  else alert(`${title}\n${body.replace(/<[^>]*>/g, "")}`);
}

function renderWorks(items) {
  const grid = document.getElementById("previousWorksGrid");
  if (!grid || !items.length) return;
  const active = document.querySelector("[data-work-filter].active")?.dataset.workFilter || "all";
  const filtered = active === "all" ? items : items.filter(w => (w.category || "other") === active);
  grid.innerHTML = filtered.map((w, i) => `
    <article class="work-card" data-work-category="${safe(w.category || 'other')}">
      <div class="work-num">${String(i + 1).padStart(2, "0")}</div>
      <div class="work-content">
        <span class="work-tag">${safe(w.tag || w.category || "عمل سابق")}</span>
        <h4>${safe(w.title || "عمل سابق")}</h4>
        <p><i class="fa-solid fa-folder-open"></i> ${safe(w.field || "عام")}</p>
        ${w.fileUrl ? `<p><a href="${safe(w.fileUrl)}" target="_blank" rel="noopener">عرض الملف</a></p>` : ""}
      </div>
      <button class="work-btn" onclick="goTo('thesis')">طلب مشابه</button>
    </article>`).join("");
  document.querySelectorAll("[data-work-filter]").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("[data-work-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderWorks(items);
    };
  });
}

function renderCertificates(items) {
  const grid = document.getElementById("certificatesGrid");
  if (!grid || !items.length) return;
  grid.innerHTML = items.map((c, i) => {
    const media = c.imageUrl
      ? `<img src="${safe(c.imageUrl)}" alt="${safe(c.title || 'شهادة')}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      : "";
    return `<article class="cert-card">
      <div class="cert-preview firebase-cert-preview">${media}<i class="fa-solid ${safe(c.icon || 'fa-award')}"></i><span>AH-${String(i + 1).padStart(3, "0")}</span></div>
      <span class="cert-tag">${safe(c.tag || "شهادة")}</span>
      <h4>${safe(c.title || "شهادة")}</h4>
      <p>${safe(c.description || "")}</p>
      <button type="button" data-cert-index="${i}">عرض الشهادة</button>
    </article>`;
  }).join("");
  grid.querySelectorAll("button[data-cert-index]").forEach(btn => {
    btn.onclick = () => {
      const c = items[Number(btn.dataset.certIndex)];
      const body = `${c.imageUrl ? `<img src="${safe(c.imageUrl)}" style="max-width:100%;border-radius:16px;margin-bottom:15px">` : ""}<p>${safe(c.description || "")}</p>${c.fileUrl ? `<p><a href="${safe(c.fileUrl)}" target="_blank" rel="noopener">فتح الملف المرفق</a></p>` : ""}`;
      modal(safe(c.title || "شهادة"), body);
    };
  });
}

function renderFeatures(items) {
  const grid = document.getElementById("featuresProGrid");
  if (!grid || !items.length) return;
  grid.innerHTML = items.map(f => `<div class="feature-pro-card"><i class="fa-solid ${safe(f.icon || 'fa-circle-check')}"></i><h4>${safe(f.title)}</h4><p>${safe(f.description)}</p></div>`).join("");
}

function renderReviews(items) {
  const grid = document.getElementById("reviewsGrid");
  if (!grid || !items.length) return;
  grid.innerHTML = items.map(r => `<div class="review-card"><div class="stars">★★★★★</div><p>${safe(r.text)}</p><b>${safe(r.name || 'عميل')}</b></div>`).join("");
}

function renderServices(items) {
  if (!items.length) return;
  const servicesGrid = document.querySelector(".services-grid");
  if (!servicesGrid) return;
  const custom = items.map(s => `<div class="svc-card firebase-added-service" onclick="goTo('${safe(s.targetPage || 'thesis')}')">
    ${s.imageUrl ? `<img src="${safe(s.imageUrl)}" alt="${safe(s.title)}" loading="lazy">` : `<div class="admin-service-placeholder"><i class="fa-solid ${safe(s.icon || 'fa-plus')}"></i></div>`}
    <div class="svc-info"><i class="fa-solid ${safe(s.icon || 'fa-plus')}"></i><div><h4>${safe(s.title)}</h4><p>${safe(s.description)}</p></div></div>
  </div>`).join("");
  servicesGrid.querySelectorAll(".firebase-added-service").forEach(el => el.remove());
  servicesGrid.insertAdjacentHTML("beforeend", custom);
}

function listen(db, name, renderer) {
  const q = query(collection(db, name), orderBy("createdAt", "desc"));
  onSnapshot(q, snap => renderer(snap.docs.map(d => ({ id: d.id, ...d.data() }))), err => console.warn(`Firebase ${name} error`, err));
}

if (hasFirebaseConfig) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  listen(db, "previousWorks", renderWorks);
  listen(db, "certificates", renderCertificates);
  listen(db, "features", renderFeatures);
  listen(db, "reviews", renderReviews);
  listen(db, "customServices", renderServices);
} else {
  console.info("Firebase is not configured yet. Edit js/firebase-config.js first.");
}
