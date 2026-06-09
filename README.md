# JI&E Technology Services — Corporate Website

Premium, fully bilingual (English / French) corporate website for **JI&E Technology Services**,
a Moroccan technology company specialised in **Defence, Aerospace, Security, Engineering,
industrial maintenance and airport ground-support equipment**.

Based in Rabat, Morocco — jointly owned by **Jilya Holding** and **Eltel Technologistics Ltd.**

## Highlights

- ⚡ 100% static — pure HTML / CSS / JavaScript, **no build step required**
- 🌍 Bilingual EN 🇬🇧 / FR 🇫🇷 with instant in-page language switching (localStorage)
- 🎨 Premium "defence-grade" design system — glassmorphism header, animated hero, scroll reveals, animated counters
- ♿ WCAG AA contrast, keyboard focus states, responsive (mobile / tablet / desktop)

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About Us |
| `capabilities.html` | Capabilities (Maintenance, Engineering, Aircraft Handling, Aerospace) |
| `industries.html` | Industries |
| `projects.html` | Projects |
| `careers.html` | Careers |
| `contact.html` | Contact |

## Run locally

Either open `index.html` directly in a browser, **or** run the bundled static server:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
# → http://localhost:8123/
```

## Deploy

The site deploys as-is on **Netlify** (see `netlify.toml`): publish directory is the repository
root, with no build command.

---

© 2026 JI&E Technology Services. All rights reserved.
