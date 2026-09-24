# Jeevan Chauhan — Developer Portfolio

A fast, responsive, single-page portfolio for a **Java Full Stack Developer**, built with plain **HTML, CSS and JavaScript**. No frameworks, no build step, no dependencies to install.

**🔗 Live site:** [jeevan9741.github.io/portfolio_webside_system](https://jeevan9741.github.io/portfolio_webside_system/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?logo=github)

---

## 👤 About me

I'm a Computer Science Engineering graduate (City Engineering College, Bengaluru, 2026 · CGPA 7.88/10) with hands-on experience building backend systems in **Java, Spring Boot and MySQL**. As a Java Full Stack Developer Intern at **Festiva Moments** (Dec 2025 – May 2026) I designed REST APIs for user management and authentication, optimized SQL queries and shipped features in an Agile team.

I'm open to **Software Developer, Backend Developer and Full Stack Developer** roles.

---

## 🚀 Featured projects

| Project | What it is | Stack | Code |
| --- | --- | --- | --- |
| **CareerHub** | Job alert & career guidance platform: job search with filters, resume management, application tracking, admin analytics, role-based access, HttpOnly JWT auth | React, Vite, Tailwind, Node.js, Express, MongoDB Atlas, Cloudinary, Playwright | [Repo](https://github.com/jeevan9741/CareerHub) |
| **E-Commerce Training Academy** | E-learning & digital commerce platform: email OTP, Razorpay course purchases, premium video access, referral earnings, admin dashboard | Next.js 16, TypeScript, Express, PostgreSQL (Neon), Prisma, Razorpay, Resend | [Repo](https://github.com/jeevan9741/Ecommerce_webside) |
| **AI-Powered Farmer Advisory System** | Crop management and AI disease detection from crop photos | Spring Boot, React.js, MySQL, Gemini AI | [Repo](https://github.com/jeevan9741/AI-powered-farmer-advisor-system) |
| **Logistics Tracking System** | Shipment console + public parcel tracking, JWT roles, 69 API tests | React, TypeScript, Express, SQLite | [Repo](https://github.com/jeevan9741/Logistics-Tracking-System) |
| **Voice Morphing Detection System** | Detects spoofed voice commands for smart-home security | Python, ML, MFCC, IoT | — |

---

## ✨ Website features

**Design**
- Clean, professional layout with Inter / Plus Jakarta Sans / JetBrains Mono typography
- **Light & dark themes**: follows the system setting and remembers the visitor's choice
- Java "code window" hero, animated stats, scrolling tech-logo strip
- Featured project cards with banner mockups, tech badges and GitHub buttons
- Fully responsive for desktop, tablet and mobile (with a mobile menu)

**Interaction**
- Scroll-reveal animations and animated counters
- Navbar highlights the section you're reading, plus a scroll progress bar
- Back-to-top button
- Contact form opens the visitor's email app with the message pre-filled
- One-click "copy email" button
- Downloadable resume (`resume.pdf`)

**Quality**
- Accessible: skip link, labelled form fields, keyboard focus styles, ARIA states on menu/theme buttons
- Respects `prefers-reduced-motion` (all animation off)
- SEO and Open Graph meta tags for good link previews on LinkedIn and WhatsApp
- Lightweight: inline SVG icon sprite, tech logos bundled locally (~30 KB)
- Works without JavaScript (content never depends on animations)

---

## 📂 Project structure

```
portfolio_webside_system/
├── index.html        # The whole page: hero, about, experience, projects, skills, education, contact
├── style.css         # Design tokens, light/dark themes, components, responsive breakpoints
├── script.js         # Theme toggle, navigation, scroll effects, animations, contact form
├── resume.pdf        # Downloadable resume
└── assets/
    └── icons/        # Tech logo SVGs (from Devicon)
```

---

## 🛠️ Run locally

No installation needed. Just open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8000

# or Node.js
npx serve .
```

Then visit <http://localhost:8000>.

---

## ✏️ Customising

| To change… | Edit |
| --- | --- |
| Text, projects, links | `index.html` (each section is marked with a comment like `<!-- 03 PROJECTS -->`) |
| Colours, fonts, spacing | The CSS variables at the top of `style.css` (`:root` for dark, `[data-theme="light"]` for light) |
| Resume | Replace `resume.pdf` (keep the same file name) |
| Project banner images | Save a screenshot to `assets/` and replace the `.mock` block in the project card with `<img src="assets/your-image.png" alt="…" />`. The comment above each banner shows exactly where |
| Contact email | `MY_EMAIL` in `script.js` and the `mailto:` links in `index.html` |

---

## 🌐 Deployment

The site is hosted on **GitHub Pages**:

1. Push changes to the `main` branch.
2. In the repo, go to **Settings → Pages** and set the source to *Deploy from a branch* → `main` / `root`.
3. The site updates at `https://jeevan9741.github.io/portfolio_webside_system/` within a minute or two.

---

## 📫 Contact

- **Email:** [chavanjeevan01@gmail.com](mailto:chavanjeevan01@gmail.com)
- **LinkedIn:** [in/jeevan-480468335](https://www.linkedin.com/in/jeevan-480468335)
- **GitHub:** [@jeevan9741](https://github.com/jeevan9741)
- **Phone:** +91 97412 14239

---

## 🙏 Credits

- Tech logos: [Devicon](https://devicon.dev/) (MIT)
- Fonts: [Inter](https://rsms.me/inter/), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via Google Fonts
- UI icons: based on [Lucide](https://lucide.dev/) (ISC) and GitHub Octicons (MIT)

© 2026 Jeevan Chauhan. Designed & built in Bengaluru 🇮🇳
