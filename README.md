# Chameleon — Project Page

Static project page for **Chameleon: Style-Content Disentangled Framework for
Cross-Domain Object Compositing**, built with Astro 5.

Live at: https://cmlab-korea.github.io/Chameleon/

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with
`npm run build` and publishes `dist/` to GitHub Pages.

## Layout

- `src/components/Hero.astro` — title, authors, resource buttons
- `src/components/Motivation.astro` — motivation cards
- `src/components/Algorithm.astro` — method (Dataset Pipeline / Stage 1 / Stage 2)
- `src/components/Experiments.astro` — Q1–Q5 accordion
- `src/components/AuthorsCitation.astro` — citation block
- `src/components/Header.astro` / `Footer.astro` — chrome
- `src/pages/index.astro` — page composition
