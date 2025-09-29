// -------------------- TRANSLATIONS --------------------
const translations = {
  en: {
    navHome: "Home",
    navSchemes: "Schemes",
    navContact: "Contact",
    headline: "Live government schemes",
    subhead: "Real-time updates on Indian government welfare schemes and programs.",
    searchPlaceholder: "Search schemes by name, description, or department...",
    clear: "Clear",
    filterAll: "All",
    filterActive: "Active",
    filterNew: "New",
    filterUpdated: "Updated",
    filterClosing: "Closing soon",
    statTotal: "Total schemes",
    statActive: "Active now",
    statNew: "New this week",
    apply: "Apply now",
  },
  hi: {
    navHome: "होम",
    navSchemes: "योजनाएँ",
    navContact: "संपर्क",
    headline: "सरकारी योजनाएँ लाइव",
    subhead: "भारतीय सरकारी कल्याण योजनाओं और कार्यक्रमों पर वास्तविक समय अपडेट।",
    searchPlaceholder: "नाम, विवरण या विभाग से योजनाएँ खोजें...",
    clear: "साफ करें",
    filterAll: "सभी",
    filterActive: "सक्रिय",
    filterNew: "नई",
    filterUpdated: "अपडेटेड",
    filterClosing: "जल्द बंद",
    statTotal: "कुल योजनाएँ",
    statActive: "सक्रिय योजनाएँ",
    statNew: "इस सप्ताह नई",
    apply: "अभी आवेदन करें",
  },
};

// -------------------- SCHEMES DATA --------------------
const schemes = {
  en: [
    {
      title: "PM-KISAN",
      dept: "Ministry of Agriculture & Farmers Welfare",
      status: "Active",
      summary: "Direct income support to small and marginal farmers providing ₹6000 per year in three equal installments.",
      benefits: ["₹6000 per year in 3 installments"],
      eligibility: ["Small Farmer", "Marginal Farmer", "Land Owner"],
      deadline: "Open Application",
      updated: "2 hours ago",
      tags: ["Active"],
    },
    {
      title: "Ayushman Bharat",
      dept: "Ministry of Health & Family Welfare",
      status: "Active",
      summary: "Health insurance scheme providing coverage up to ₹5 lakh per family per year for hospitalization.",
      benefits: ["Health coverage up to ₹5 lakh per family"],
      eligibility: ["BPL Family", "Rural Family", "Urban Family"],
      deadline: "Ongoing Enrollment",
      updated: "1 hour ago",
      tags: ["Active"],
    },
    {
      title: "Mudra Yojana",
      dept: "Ministry of Micro, Small & Medium Enterprises",
      status: "New",
      summary: "Collateral-free loans up to ₹10 lakh for micro and small enterprises to promote entrepreneurship.",
      benefits: ["Loans up to ₹10 lakh without collateral"],
      eligibility: ["Micro Enterprise", "Small Business", "Self Employed"],
      deadline: "March 31, 2024",
      updated: "30 minutes ago",
      tags: ["New"],
    },
    {
      title: "Beti Bachao Beti Padhao",
      dept: "Ministry of Women & Child Development",
      status: "Updated",
      summary: "Scheme to address declining child sex ratio and empower girls through education and awareness.",
      benefits: ["Education support and awareness programs"],
      eligibility: ["Girl Child", "Female Student", "Women"],
      deadline: "December 31, 2024",
      updated: "45 minutes ago",
      tags: ["Updated"],
    },
    {
      title: "Digital India Land Records",
      dept: "Ministry of Rural Development",
      status: "Active",
      summary: "Digitization of land records to provide transparent and efficient land administration services.",
      benefits: ["Digital land records and online services"],
      eligibility: ["Land Owner", "Farmer", "Citizen"],
      deadline: "Ongoing Service",
      updated: "3 hours ago",
      tags: ["Active"],
    },
    {
      title: "Skill India Mission",
      dept: "Ministry of Skill Development",
      status: "Closing Soon",
      summary: "Comprehensive skill development program to train 40 crore people in different skills by 2025.",
      benefits: ["Free skill training and certification"],
      eligibility: ["Youth", "Job Seeker", "Student"],
      deadline: "January 15, 2024",
      updated: "1 hour ago",
      tags: ["Closing Soon"],
    },
  ],
  hi: [
    {
      title: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)",
      dept: "कृषि एवं किसान कल्याण मंत्रालय",
      status: "सक्रिय",
      summary: "छोटे और सीमांत किसानों को प्रतिवर्ष ₹6000 की आय सहायता तीन समान किस्तों में दी जाती है।",
      benefits: ["₹6000 प्रतिवर्ष (3 किस्तों में)"],
      eligibility: ["छोटे किसान", "सीमांत किसान", "भूमि स्वामी"],
      deadline: "खुला आवेदन",
      updated: "2 घंटे पहले",
      tags: ["Active"],
    },
    {
      title: "आयुष्मान भारत",
      dept: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय",
      status: "सक्रिय",
      summary: "परिवारों को प्रति वर्ष ₹5 लाख तक का स्वास्थ्य बीमा प्रदान करने वाली योजना।",
      benefits: ["प्रति परिवार ₹5 लाख तक का स्वास्थ्य बीमा"],
      eligibility: ["बीपीएल परिवार", "ग्रामीण परिवार", "शहरी परिवार"],
      deadline: "नामांकन जारी",
      updated: "1 घंटा पहले",
      tags: ["Active"],
    },
    {
      title: "मुद्रा योजना",
      dept: "सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय",
      status: "नई",
      summary: "सूक्ष्म और लघु उद्यमों को उद्यमिता बढ़ाने हेतु ₹10 लाख तक का बिना गारंटी ऋण।",
      benefits: ["₹10 लाख तक का बिना गारंटी ऋण"],
      eligibility: ["सूक्ष्म उद्यम", "लघु व्यवसाय", "स्वरोज़गार"],
      deadline: "31 मार्च 2024",
      updated: "30 मिनट पहले",
      tags: ["New"],
    },
    {
      title: "बेटी बचाओ बेटी पढ़ाओ",
      dept: "महिला एवं बाल विकास मंत्रालय",
      status: "अपडेटेड",
      summary: "बाल लिंगानुपात सुधारने और बेटियों को शिक्षा व सशक्तिकरण देने की योजना।",
      benefits: ["शिक्षा सहायता और जागरूकता कार्यक्रम"],
      eligibility: ["बालिका", "महिला छात्रा", "महिला"],
      deadline: "31 दिसम्बर 2024",
      updated: "45 मिनट पहले",
      tags: ["Updated"],
    },
    {
      title: "डिजिटल इंडिया भूमि अभिलेख",
      dept: "ग्रामीण विकास मंत्रालय",
      status: "सक्रिय",
      summary: "भूमि अभिलेखों का डिजिटलीकरण ताकि पारदर्शी और कुशल सेवाएँ मिल सकें।",
      benefits: ["डिजिटल भूमि अभिलेख और ऑनलाइन सेवाएँ"],
      eligibility: ["भूमि स्वामी", "किसान", "नागरिक"],
      deadline: "सेवा जारी",
      updated: "3 घंटे पहले",
      tags: ["Active"],
    },
    {
      title: "स्किल इंडिया मिशन",
      dept: "कौशल विकास मंत्रालय",
      status: "जल्द बंद",
      summary: "2025 तक 40 करोड़ लोगों को विभिन्न कौशलों में प्रशिक्षित करने का कार्यक्रम।",
      benefits: ["निःशुल्क कौशल प्रशिक्षण और प्रमाणपत्र"],
      eligibility: ["युवा", "नौकरी खोजने वाले", "छात्र"],
      deadline: "15 जनवरी 2024",
      updated: "1 घंटा पहले",
      tags: ["Closing Soon"],
    },
  ],
};

// -------------------- STATE --------------------
let currentLang = "en";
let filter = "All";
let query = "";

// -------------------- ELEMENTS --------------------
const grid = document.getElementById("grid");
const countEl = document.getElementById("count");
const totalEl = document.getElementById("total");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearSearch");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// -------------------- RENDER SCHEMES --------------------
function renderSchemes() {
  const data = schemes[currentLang];
  const filtered = data.filter((s) => {
    const byTag = filter === "All" ? true : s.tags.includes(filter);
    const q = query.trim().toLowerCase();
    const byQuery = !q
      ? true
      : [s.title, s.dept, s.summary].some((t) =>
          t.toLowerCase().includes(q)
        );
    return byTag && byQuery;
  });

  totalEl.textContent = data.length;
  countEl.textContent = filtered;
    countEl.textContent = filtered.length;
  grid.innerHTML = filtered.map((s) => schemeCard(s)).join("");

  // Stats
  document.getElementById("statTotal").textContent = data.length;
  document.getElementById("statActive").textContent = data.filter(
    (s) => s.status === "Active" || s.status === "सक्रिय"
  ).length;
  document.getElementById("statNew").textContent =
    data.filter((s) => s.status === "New" || s.status === "नई").length +
    (currentLang === "en" ? " New" : " नई");
}

function schemeCard(s) {
  return `
    <article class="scheme">
      <div class="scheme-head">
        <div>
          <h3 class="scheme-title">${escapeHtml(s.title)}</h3>
          <div class="scheme-meta">${escapeHtml(s.dept)}</div>
        </div>
        <span class="badge">${escapeHtml(s.status)}</span>
      </div>
      <p>${escapeHtml(s.summary)}</p>
      <div class="kv">
        <div class="kv-row">
          <div class="kv-key">${currentLang === "en" ? "Benefits" : "लाभ"}</div>
          <div>${s.benefits
            .map((b) => `<div class="chip">${escapeHtml(b)}</div>`)
            .join("")}</div>
        </div>
        <div class="kv-row">
          <div class="kv-key">${currentLang === "en" ? "Eligibility" : "पात्रता"}</div>
          <div class="tags sm">${s.eligibility
            .map((e) => `<span class="chip">${escapeHtml(e)}</span>`)
            .join("")}</div>
        </div>
      </div>
      <div class="actions-row">
        <button class="apply">${translations[currentLang].apply}</button>
        <div class="deadline"> 
          ${currentLang === "en" ? "Deadline" : "अंतिम तिथि"}: ${escapeHtml(s.deadline)} • 
          ${currentLang === "en" ? "Updated" : "अपडेट"}: ${escapeHtml(s.updated)}
        </div>
      </div>
    </article>
  `;
}

// -------------------- FILTERS --------------------
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    document.querySelectorAll(".filter").forEach((el) =>
      el.classList.toggle("active", el.dataset.filter === filter)
    );
    renderSchemes();
  });
});

// -------------------- SEARCH --------------------
searchInput.addEventListener("input", (e) => {
  query = e.target.value;
  renderSchemes();
});
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  query = "";
  renderSchemes();
});

// -------------------- THEME TOGGLE --------------------
themeToggle.addEventListener("click", () => {
  const root = document.documentElement;
  const next =
    root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

// -------------------- LANGUAGE TOGGLE --------------------
function renderLanguage() {
  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (el.tagName === "INPUT") {
      el.placeholder = t[key];
    } else {
      el.textContent = t[key];
    }
  });
  document.getElementById("headline").textContent = t.headline;
  document.getElementById("subhead").textContent = t.subhead;
  langToggle.textContent = currentLang === "en" ? "हिन्दी" : "English";
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "hi" : "en";
  renderLanguage();
  renderSchemes();
});

// -------------------- MOBILE MENU TOGGLE --------------------
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// -------------------- ESCAPE UTILITY --------------------
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// -------------------- INIT APP --------------------
renderLanguage();
renderSchemes();