# Agentisaac256 Website

Professional multi-page static website for **Agentisaac256**, supported by **Developers Hyperbotics**.

## Pages
| File | Description |
|------|-------------|
| `index.html` | Home – hero, stats, why us, services, courses teaser |
| `about.html` | About, mission, vision, timeline |
| `skills.html` | Services + full tech stack |
| `courses.html` | Free + Premium courses |
| `contact.html` | WhatsApp, Email, Buy-Tea support |

## Features
- Dark modern UI with purple / pink accents
- Scroll-reveal animations + animated counters
- Fully responsive + animated mobile hamburger menu
- Floating WhatsApp button
- Free & paid course cards with direct WhatsApp links
- Support link: https://wallet.wearemarz.com/pay/agenttea
- Favicon, security headers configs for common hosts

## Contact
- WhatsApp: **+256 779 019 391**
- Email: **agentisaac256@gmail.com**

---

## Deploy (ready for production)

This is a **pure static site** (HTML + CSS + JS). No build step required.

### 1. Render.com (recommended)
1. Push this folder to a GitHub/GitLab repo.
2. On [Render](https://render.com) → **New** → **Static Site**.
3. Connect the repo.
4. Settings:
   - **Build Command**: leave empty
   - **Publish Directory**: `.` (or leave default)
5. Or use the included `render.yaml` Blueprint for one-click deploy.

### 2. Netlify
- Drag & drop the folder on [netlify.com/drop](https://app.netlify.com/drop), **or**
- Connect the repo. `netlify.toml` is already configured.
- Publish directory: `.`

### 3. Vercel
- Import the repo on [vercel.com](https://vercel.com).
- Framework Preset: **Other**.
- `vercel.json` is included for clean URLs + headers.

### 4. GitHub Pages
1. Push to a repo.
2. Settings → Pages → Source: Deploy from a branch (`main` / root).
3. Site will be available at `https://<user>.github.io/<repo>/`.

### 5. Cloudflare Pages
- Connect repo → Build command empty → Output directory `.`

### Local preview
```bash
# Any of these:
npx serve .
# or
python -m http.server 3000
# or open index.html directly in the browser
```

---

## Project structure
```
agentisaac256/
├── index.html
├── about.html
├── skills.html
├── courses.html
├── contact.html
├── favicon.svg
├── css/styles.css
├── js/main.js
├── render.yaml      # Render Blueprint
├── netlify.toml
├── vercel.json
├── _redirects
└── README.md
```

Built for easy deployment on Render and every major static host.
