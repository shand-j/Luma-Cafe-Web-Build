# Luma Cafe — website

A one-page editorial site for **Luma Cafe**, 48a Station Road, Cheadle Hulme, Stockport SK8 7AB.
Coffee. Conversation. Community. — since 2026.

- Single static page, no backend, no tracking. All CTAs funnel to
  [instagram.com/luma.cafe.manchester](https://www.instagram.com/luma.cafe.manchester/).
- React + TypeScript + Vite + Tailwind. Design system in `tokens.css`
  (warm-sand paper, antique-gold accent, OKLCH palette sampled from the brand's Instagram assets).
  All photography is duotoned into the same espresso-to-cream ramp.
- Typography: Cormorant Garamond (display), EB Garamond (body), Bonheur Royale (script accents).
- Verified at 320 / 390 / 768 / 1280 / 1440 px — no horizontal scroll, WCAG-checked contrast,
  reduced-motion fallbacks.

## Publish to GitHub Pages

The site is pre-built — **no Node or build step needed**. Pick either option:

### Option A — deploy from the `/docs` folder (simplest)

1. Create a **new private repository** on GitHub (e.g. `luma-cafe`). Do not initialise with a README.
2. From this folder:

   ```bash
   git init
   git add -A
   git commit -m "Luma Cafe site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/luma-cafe.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Source: "Deploy from a branch" → Branch: `main` / folder: `/docs` → Save.**
4. Wait ~1 minute. Live at `https://<your-username>.github.io/luma-cafe/`.

### Option B — GitHub Actions (already wired up)

A ready-made workflow ships in `.github/workflows/pages.yml`.
Push as above, then: **Settings → Pages → Source: "GitHub Actions" → Save.**
The workflow deploys `docs/` on every push to `main`.

Either way, the repo stays private — only the Pages output is public.
To use a custom domain later, add it under **Settings → Pages → Custom domain**.

## Editing the site

```bash
npm install
npm run dev        # local dev server
npm run build      # outputs to dist/
```

After any change, copy the fresh build over `docs/` and push:

```bash
rm -rf docs && cp -r dist docs
git add -A && git commit -m "Update site" && git push
```

## Layout

```
index.html          entry (dev + built copy at root)
tokens.css          design tokens (colours, type scale, spacing, motion)
src/luma.css        all page styles
src/pages/Home.tsx  the page (menu, address, links, image list)
public/             images (duotoned photography, medallion logo, favicon)
docs/               pre-built site — this is what GitHub Pages serves
```
