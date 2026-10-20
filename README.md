# MVIP project page

Project page for _Meta Inverse Prompting for Video Generative Models_ (NeurIPS 2026).
Built with [Roman Hauksson's academic project page template](https://github.com/RomanHauksson/academic-project-astro-template) (Astro, Tailwind, MDX).

## Where things live

- `src/paper.mdx`: all page text, the header (title, authors, links), tables, and BibTeX.
- `src/data/results.ts`: per-example labels, folders, and prompts.
- `src/data/grids.ts`: which examples and columns each video grid shows.
- `src/data/references.ts`: the numbered reference list ([n] next to baseline labels and the References section).
- `src/components/VideoGrid.astro`: side-by-side video grid (reconstruction); `EditCarousel.astro`: one slide per edit instruction (editing). Rows load lazily and play in sync.
- `src/components/ConceptFigure.astro`: the video → prompt → reconstruction figure.
- `public/assets/{reconstruction,transfer,editing}/example_XX/*.mp4`: the videos.

## Local preview

Requires Node.js 24 or later.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/astro.yml`, which builds the site and deploys it to GitHub Pages. The deploy step only succeeds once the repository is public and Pages is enabled (Settings → Pages → Source: GitHub Actions).
