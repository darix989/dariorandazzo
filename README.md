# dariorandazzo

Personal site for Dario Randazzo, Computer Engineer. Built with [Astro](https://astro.build) and published to GitHub Pages at https://darix989.github.io/dariorandazzo/.

## Navigation labels

The nav uses repo-file names, not section names. The label is the only thing that changes; routes keep their real paths.

| Label       | Route        | Content    |
| ----------- | ------------ | ---------- |
| `readme`    | `/about/`    | About      |
| `builds`    | `/projects/` | Projects   |
| `changelog` | `/blog/`     | Blog posts |

Keep `builds` distinct from `changelog`: builds are the things that were made, the changelog is what was written about them. A single entry's kicker is `build` (singular).

## Authoring

Content is Markdown. Add a file, fill in frontmatter, and rebuild. Set `draft: true` to keep an entry out of listings, the sitemap, RSS, and `llms.txt`.

| Content   | Path                              | Route                                           |
| --------- | --------------------------------- | ----------------------------------------------- |
| About     | `src/content/about.md`            | `/about/` (the homepage shows its `intro` only) |
| Blog post | `src/content/blog/my-slug.md`     | `/blog/my-slug/`                                |
| Tag       | post `tags` frontmatter           | `/blog/tags/<tag>/`                             |
| Project   | `src/content/projects/my-slug.md` | `/projects/my-slug/`                            |

The filename is the slug. Dates and other metadata live in frontmatter, not the filename.

**About frontmatter:** `title`, `description`, optional `intro` — the short teaser the
homepage shows in place of the full text, so `/` and `/about/` aren't the same page.

**Blog frontmatter:** `title`, `description`, `pubDate`, optional `updatedDate`, `tags` (lowercase hyphenated slugs, max three; each becomes `/blog/tags/<tag>/`), `draft`, `heroImage`, `heroImageAlt`, `heroImageWidth`, `heroImageHeight`. Reuse a project's slug as a tag when the post is about that build.

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

## Checks

```sh
npm run check         # types, props, and content schemas (astro check)
npm run format        # apply formatting
npm run format:check  # verify formatting, as CI does
```

`astro build` transpiles but never runs `tsc`, so `npm run check` is the only
thing that enforces the `strict` tsconfig. [.github/workflows/ci.yml](.github/workflows/ci.yml)
runs formatting, checks, the build, and a link check on every pull request and
every push to `main`.

Deployment is chained to those checks, so a red run cannot publish. Optionally
also turn on **Settings → Branches → require the `verify` check** to stop a
failing PR from being merged in the first place.

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
2. Push to `main`. [.github/workflows/ci.yml](.github/workflows/ci.yml) verifies the
   commit and then deploys `dist/`.

One workflow holds both halves: a `verify` job (formatting, types, build, links)
and a `deploy` job with `needs: verify`. The site is built once and that exact
`dist/` becomes the Pages artifact, so nothing unverified ever ships. Pull
requests run `verify` only. `workflow_dispatch` re-runs both, which is how you
force a redeploy.

### robots.txt

Crawlers only read `robots.txt` at the origin root, so while the site lives at the
`/dariorandazzo/` subpath, the generated `/dariorandazzo/robots.txt` is never
fetched — `https://darix989.github.io/robots.txt` belongs to the
`darix989.github.io` repo. Submit the sitemap URL in Search Console directly; the
site also advertises it with `<link rel="sitemap">` in every page head. The
endpoint becomes correct on its own once `base` is `/`.

To use a custom domain later: set `site` to that hostname, change `base` to `/`, and add `public/CNAME`.
