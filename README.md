# Iron Flow Wellness

Marketing website for Iron Flow Wellness, a yoga and mobility program based at Metroflex Gym in Ardmore, Oklahoma.

**Live site:** [ironflowwellness.com](https://ironflowwellness.com)

## About the project

Iron Flow blends bodybuilding and yoga, offering classes that support strength athletes, everyday gym members, and beginners alike. This site introduces the program, its instructor, class offerings, and contact information.

## Tech stack

- [Astro](https://astro.build) - static site generator
- [Tailwind CSS](https://tailwindcss.com) - utility-first styling
- [TypeScript](https://www.typescriptlang.org) - type safety
- [Cloudflare Pages](https://pages.cloudflare.com) - hosting with automatic deploys from GitHub

## Structure

src/

├── assets/ Images (logo, instructor photo)

├── components/ Reusable pieces (Header, Footer, PageHeader)

├── layouts/ Shared page frame (Layout.astro)

├── pages/ One file per URL: index, classes, about, contact

└── styles/ Global CSS and Tailwind theme


Every page shares the same Header and Footer via the Layout component. Class schedule and About page pillars are stored as data arrays and rendered through templates, making content updates a matter of editing one array rather than duplicating HTML.

## Running locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321) and hot-reloads on save.

## Deployment

Pushing to the `main` branch triggers an automatic build and deploy on Cloudflare Pages. Build command is `npm run build`, output directory is `dist`.

## Built by

[Dax Price](https://github.com/deeayex) for Brandi Kelty of Iron Flow Wellness.
