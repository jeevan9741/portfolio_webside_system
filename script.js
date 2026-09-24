const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== TECH STRIP (duplicate track so the loop is seamless) =====
const track = document.getElementById("marqueeTrack");
if (track) track.insertAdjacentHTML("beforeend", track.innerHTML);

// ===== THEME TOGGLE (initial theme is set inline in <head>) =====
const root = document.documentElement;
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themeToggle = document.getElementById("themeToggle");
const applyThemeMeta = () => {
  const dark = root.dataset.theme !== "light";
  themeMeta?.setAttribute("content", dark ? "#0b0d12" : "#fafbfc");
  themeToggle.setAttribute("aria-pressed", String(dark));
};
applyThemeMeta();
themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  applyThemeMeta();
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = hamburger.querySelector("use");
const navLinks = document.getElementById("navLinks");
const setMenu = (open) => {
  navLinks.classList.toggle("active", open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  hamburgerIcon.setAttribute("href", open ? "#i-close" : "#i-menu");
};
hamburger.addEventListener("click", () => setMenu(!navLinks.classList.contains("active")));
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
window.addEventListener("resize", () => { if (window.innerWidth > 880) setMenu(false); });
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("active") && !navLinks.contains(e.target) && !hamburger.contains(e.target)) setMenu(false);
});

// ===== SCROLL: navbar border, progress bar, back-to-top =====
const navbar = document.querySelector(".navbar");
const progress = document.getElementById("progress");
const toTop = document.getElementById("toTop");
const onScroll = () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  navbar.classList.toggle("scrolled", y > 10);
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  toTop.classList.toggle("show", y > window.innerHeight * 0.8);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

// ===== ACTIVE NAV LINK =====
const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]`);
const sectionObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll("a.active").forEach((a) => a.classList.remove("active"));
      linkFor(entry.target.id)?.classList.add("active"); // #home has no link, so it just clears
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("#home, section[id]").forEach((s) => sectionObserver.observe(s));

// ===== REVEAL ON SCROLL =====
if (!reduceMotion) {
  const revealTargets = document.querySelectorAll(
    ".section-head, .about-text, .facts li, .exp-card, .group-head, .feat-card, .proj-card, .more-head, .repo-card, .skill-card, .edu-card, .cert-card, .contact-panel",
  );
  const revealObserver = new IntersectionObserver(
    (entries, obs) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  revealTargets.forEach((el) => {
    // stagger siblings within the same grid
    const index = [...el.parentElement.children].indexOf(el);
    el.style.setProperty("--d", `${(index % 6) * 70}ms`);
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}

// ===== STAT COUNTERS =====
const runCounter = (el) => {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const start = performance.now();
  const duration = 1400;
  const step = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
if (!reduceMotion) {
  const counterObserver = new IntersectionObserver((entries, obs) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      runCounter(entry.target);
      obs.unobserve(entry.target);
    }),
  );
  document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));
}

// ===== CONTACT FORM (opens the visitor's mail app with the message pre-filled) =====
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const MY_EMAIL = "chavanjeevan01@gmail.com";
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name: nameInput, email: emailInput, message: messageInput } = contactForm.elements;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const subject = `Portfolio enquiry from ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  window.location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent = `Thanks, ${name}! Your email app should open with the message ready to send.`;
  contactForm.reset();
});

// ===== COPY EMAIL =====
const copyBtn = document.getElementById("copyEmail");
if (copyBtn) {
  const copyLabel = copyBtn.querySelector("span");
  const copyIcon = copyBtn.querySelector("use");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      copyLabel.textContent = "Copied";
      copyIcon.setAttribute("href", "#i-check");
    } catch {
      copyLabel.textContent = "Failed";
    }
    setTimeout(() => {
      copyLabel.textContent = "Copy";
      copyIcon.setAttribute("href", "#i-copy");
    }, 1800);
  });
}

// ===== FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();
