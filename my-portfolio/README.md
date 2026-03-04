# Gabriel Winasta Sinisuka Portfolio Website

Personal portfolio website built as a single-page React application to showcase:
- Professional experience with visual proof
- Skills and technical toolchain
- Achievements and certifications
- Technical project highlights (including EyeAI)
- Thesis overview and document access

The UI is designed with a dark, high-contrast visual style, motion-based transitions, and responsive layouts for desktop and mobile.

## Live Purpose

This repository is intended to serve as:
- A public professional portfolio
- A documented reference for technical background
- A deployable frontend project using modern React tooling

## Tech Stack

- React 19
- Vite 8
- Framer Motion (animations and transitions)
- Lucide React (icon system)
- Tailwind CSS 4 (styling via PostCSS)

## Key Features

- Section-based navigation (`About`, `Skills`, `Experience`, `Achievements`, `Projects`, `Thesis`)
- Animated skill logo marquee and interactive skill cards
- Professional experience timeline with proof-image panel
- Achievement/certificate preview modal (overlay + focus view)
- Project showcase cards with technology tags and external links
- Thesis section with PDF access and summary modal
- Contact dropdown with LinkedIn, GitHub, and WhatsApp links

## Project Structure

```text
my-portfolio/
├─ src/
│  ├─ App.jsx          # Main page logic, data model, sections, interactions
│  ├─ main.jsx         # React app entry point
│  └─ index.css        # Global styles
├─ Pictures/           # Portfolio images, logos, certificates, project screenshots
├─ PDF/                # Thesis and supporting PDF documents
├─ public/             # Static public assets (favicon/logo)
├─ index.html          # HTML template + tab title + favicon
├─ vite.config.js      # Vite configuration
└─ package.json        # Scripts and dependencies
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Build and Preview

Build production assets:

```bash
npm run build
```

Preview the built result locally:

```bash
npm run preview
```

## Deployment Notes

- This project is frontend-only and can be deployed to static hosts:
  - Vercel
  - Netlify
  - GitHub Pages
  - Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`

## Content Maintenance

Portfolio content (experience, achievements, projects, links, thesis metadata) is currently maintained directly in:

- `src/App.jsx`

To update content:
- Edit the relevant data objects in `App.jsx`
- Replace/add image assets inside `Pictures/`
- Replace/add PDF assets inside `PDF/`

## Branding

- Browser tab title is configured in `index.html`
- Favicon/logo uses `public/mainLogo.png`

## License

This repository is intended for personal portfolio use. Reuse of assets (images/certificates/documents) should be authorized by the owner.
