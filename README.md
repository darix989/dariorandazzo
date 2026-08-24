# dariorandazzo

Personal site for Dario Randazzo, Computer Engineer. Built with [Astro](https://astro.build) and published to GitHub Pages at https://darix989.github.io/dariorandazzo/.

## Navigation labels

The nav uses repo-file names, not section names. The label is the only thing that changes; routes keep their real paths.

| Label | Route | Content |
| --- | --- | --- |
| `readme` | `/about/` | About |
| `builds` | `/projects/` | Projects |
| `changelog` | `/blog/` | Blog posts |

Keep `builds` distinct from `changelog`: builds are the things that were made, the changelog is what was written about them. A single entry's kicker is `build` (singular).

## Authoring

Content is Markdown. Add a file, fill in frontmatter, and rebuild. Set `draft: true` to keep an entry out of listings, the sitemap, RSS, and `llms.txt`.

| Content | Path | Route |
| --- | --- | --- |
| About | `src/content/about.md` | `/about/` (the homepage shows its `intro` only) |
| Blog post | `src/content/blog/my-slug.md` | `/blog/my-slug/` |
| Project | `src/content/projects/my-slug.md` | `/projects/my-slug/` |

The filename is the slug. Dates and other metadata live in frontmatter, not the filename.

**About frontmatter:** `title`, `description`, optional `intro` — the short teaser the
homepage shows in place of the full text, so `/` and `/about/` aren't the same page.

**Blog frontmatter:** `title`, `description`, `pubDate`, optional `updatedDate`, `tags`, `draft`, `heroImage`, `heroImageAlt`, `heroImageWidth`, `heroImageHeight`.

Set both `heroImageWidth` and `heroImageHeight` to the image's real pixel size so
the browser reserves space and the page doesn't shift as it loads.

**Project frontmatter:** `title`, `description`, `status` (`live` / `wip` / `archived`), optional `storeUrl`, `repoUrl`, `websiteUrl`, `platforms` (`chrome`, `firefox`, `safari`, `edge`), `featured`, `draft`.

## Local development

```sh
npm install
npm run dev
```

The site is configured with `base: /dariorandazzo`, so local URLs look like `http://localhost:4321/dariorandazzo/`.

```sh
npm run build
npm run preview
```

## Social card

`public/og.png` is the card every page shares. Regenerate it after changing the
name, role, or palette:

```sh
npm run og
```

The source lives in [scripts/generate-og.mjs](scripts/generate-og.mjs) and renders
through sharp, which arrives with Astro's image pipeline — no extra dependency.

## GitHub Pages

1. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/`.

### robots.txt

Crawlers only read `robots.txt` at the origin root, so while the site lives at the
`/dariorandazzo/` subpath, the generated `/dariorandazzo/robots.txt` is never
fetched — `https://darix989.github.io/robots.txt` belongs to the
`darix989.github.io` repo. Submit the sitemap URL in Search Console directly; the
site also advertises it with `<link rel="sitemap">` in every page head. The
endpoint becomes correct on its own once `base` is `/`.

To use a custom domain later: set `site` to that hostname, change `base` to `/`, and add `public/CNAME`.
