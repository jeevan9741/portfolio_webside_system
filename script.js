// ===== MARQUEE (duplicate track so the loop is seamless) =====
const track = document.getElementById("marqueeTrack");
if (track) track.innerHTML += track.innerHTML;

// ===== MOBILE MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));
navLinks.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("active"))
);

// ===== CONTACT FORM (front-end demo) =====
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  formNote.textContent = `Thanks, ${name}! I'll get back to you soon. (Connect this form to Formspree to receive real emails.)`;
  contactForm.reset();
});
