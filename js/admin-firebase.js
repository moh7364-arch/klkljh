import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { firebaseConfig, ADMIN_EMAIL } from "./firebase-config.js";

const configured = !String(firebaseConfig.apiKey || "").includes("PUT_YOUR");
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const safe = (v = "") => String(v).replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;","\"":"&quot;"}[ch]));

if (!configured) {
  $("#loginMsg").innerHTML = "لم يتم ربط Firebase بعد. عدّل ملف js/firebase-config.js أولاً.";
}

const app = configured ? initializeApp(firebaseConfig) : null;
const auth = configured ? getAuth(app) : null;
const db = configured ? getFirestore(app) : null;
const storage = configured ? getStorage(app) : null;

$("#adminEmail").value = ADMIN_EMAIL !== "admin@example.com" ? ADMIN_EMAIL : "";

function setPanel(show) {
  $("#loginBox").classList.toggle("hidden", show);
  $("#adminPanel").classList.toggle("hidden", !show);
}

$("#adminLoginForm").addEventListener("submit", async e => {
  e.preventDefault();
  if (!configured) return;
  const email = $("#adminEmail").value.trim();
  const password = $("#adminPassword").value;
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    if (ADMIN_EMAIL && ADMIN_EMAIL !== "admin@example.com" && cred.user.email !== ADMIN_EMAIL) {
      await signOut(auth);
      throw new Error("هذا الحساب ليس حساب المشرف المسموح به.");
    }
    $("#loginMsg").textContent = "";
  } catch (err) {
    $("#loginMsg").textContent = "تعذر الدخول: " + err.message;
  }
});

if (configured) {
  onAuthStateChanged(auth, user => {
    const allowed = user && (ADMIN_EMAIL === "admin@example.com" || user.email === ADMIN_EMAIL);
    setPanel(Boolean(allowed));
    if (allowed) startListeners();
  });
}

$("#logoutBtn").addEventListener("click", () => signOut(auth));

$$("[data-admin-tab]").forEach(btn => btn.addEventListener("click", () => {
  $$("[data-admin-tab]").forEach(b => b.classList.remove("active"));
  $$(".admin-section").forEach(s => s.classList.remove("active"));
  btn.classList.add("active");
  $("#tab-" + btn.dataset.adminTab).classList.add("active");
}));

async function uploadOptional(file, folder) {
  if (!file || !file.name) return "";
  const path = `${folder}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

$$("form[data-collection]").forEach(form => {
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const col = form.dataset.collection;
    const btn = form.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.textContent = "جارٍ الحفظ...";
    try {
      const fd = new FormData(form);
      const data = {};
      for (const [k, v] of fd.entries()) {
        if (v instanceof File) continue;
        if (String(v).trim()) data[k] = String(v).trim();
      }
      const image = form.querySelector("input[name='image']")?.files?.[0];
      const file = form.querySelector("input[name='file']")?.files?.[0];
      if (image) data.imageUrl = await uploadOptional(image, `${col}/images`);
      if (file) data.fileUrl = await uploadOptional(file, `${col}/files`);
      data.createdAt = serverTimestamp();
      await addDoc(collection(db, col), data);
      form.reset();
      alert("تم الحفظ بنجاح");
    } catch (err) {
      alert("حدث خطأ أثناء الحفظ: " + err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = btn.textContent.replace("جارٍ الحفظ...", "حفظ");
      if (!btn.textContent.includes("حفظ")) btn.textContent = "حفظ";
    }
  });
});

let listenersStarted = false;
function startListeners() {
  if (listenersStarted) return;
  listenersStarted = true;
  ["previousWorks", "certificates", "customServices", "features", "reviews"].forEach(col => {
    const list = document.querySelector(`[data-list='${col}']`);
    if (!list) return;
    const q = query(collection(db, col), orderBy("createdAt", "desc"));
    onSnapshot(q, snap => {
      if (snap.empty) {
        list.innerHTML = '<div class="admin-empty">لا توجد عناصر بعد.</div>';
        return;
      }
      list.innerHTML = snap.docs.map(d => {
        const item = d.data();
        const title = item.title || item.name || "عنصر";
        const desc = item.description || item.text || item.field || item.category || "";
        return `<div class="admin-list-item">
          <div>${item.imageUrl ? `<img src="${safe(item.imageUrl)}" alt="">` : `<i class="fa-solid ${safe(item.icon || 'fa-file')}"></i>`}</div>
          <section><h3>${safe(title)}</h3><p>${safe(desc)}</p>${item.fileUrl ? `<a href="${safe(item.fileUrl)}" target="_blank">فتح الملف</a>` : ""}</section>
          <button data-delete="${safe(d.id)}" data-col="${safe(col)}"><i class="fa-solid fa-trash"></i></button>
        </div>`;
      }).join("");
      list.querySelectorAll("[data-delete]").forEach(btn => btn.onclick = async () => {
        if (confirm("هل تريد حذف هذا العنصر؟")) await deleteDoc(doc(db, btn.dataset.col, btn.dataset.delete));
      });
    });
  });
}
