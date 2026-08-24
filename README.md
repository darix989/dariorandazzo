# dariorandazzo

Personal site for Dario Randazzo, Computer Engineer. Built with [Astro](https://astro.build) and published to GitHub Pages at https://darix989.github.io/dariorandazzo/.

## Navigation labels

The nav uses repo-file names, not section names. The label is the only thing that changes; routes keep their real paths.

| Label | Route | Content |
| --- | --- | --- |
| `readme` | `/about/` | About |
| `builds` | `/projects/` | Extensions |
| `changelog` | `/blog/` | Blog posts |

Keep `builds` distinct from `changelog`: builds are the things that were made, the changelog is what was written about them. A single entry's kicker is `build` (singular).

## Authoring

Content is Markdown. Add a file, fill in frontmatter, and rebuild. Set `draft: true` to keep an entry out of listings, the sitemap, RSS, and `llms.txt`.

| Content | Path | Route |
| --- | --- | --- |
| About | `src/content/about.md` | `/about/` (also rendered on the homepage) |
| Blog post | `src/content/blog/my-slug.md` | `/blog/my-slug/` |
| Extension | `src/content/extensions/my-slug.md` | `/projects/my-slug/` |

The filename is the slug. Dates and other metadata live in frontmatter, not the filename.

**Blog frontmatter:** `title`, `description`, `pubDate`, optional `updatedDate`, `tags`, `draft`, `heroImage`, `heroImageAlt`.

**Extension frontmatter:** `title`, `description`, `status` (`live` / `wip` / `archived`), optional `storeUrl`, `repoUrl`, `websiteUrl`, `platforms` (`chrome`, `firefox`, `safari`, `edge`), `featured`, `draft`.

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

## GitHub Pages

1. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/`.

To use a custom domain later: set `site` to that hostname, change `base` to `/`, and add `public/CNAME`.
