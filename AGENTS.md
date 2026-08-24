# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this is

The personal site of Dario Randazzo — a static [Astro](https://astro.build) 7 site
published to GitHub Pages at `https://darix989.github.io/dariorandazzo/`.

It is content-first: three Markdown collections rendered through a handful of
`.astro` pages, plus machine-readable endpoints (`rss.xml`, `llms.txt`,
`llms-full.txt`, `robots.txt`, sitemap). There is no client-side framework, no
JavaScript shipped to the browser, and no database.

## Commands

```sh
npm install
npm run dev      # dev server at http://localhost:4321/dariorandazzo/
npm run build    # static output to dist/
npm run preview  # serve the built dist/
```

Node `>=22.12.0` (see `engines` in [package.json](package.json)).

**Verification:** `npm run build` is the only check available. There is no test
suite, no linter, no formatter config, and `astro check` is *not* installed
(`@astrojs/check` is not a dependency — don't invoke it). The build does run
Zod validation on every content file's frontmatter, so a schema violation or a
broken content reference fails the build. Run it after any change.

## Layout

```
src/
  content.config.ts        collection definitions + Zod frontmatter schemas
  content/
    about.md               the `pages` collection (single entry)
    blog/*.md              the `blog` collection
    projects/*.md          the `projects` collection
  pages/                   routes (file-based)
  layouts/BaseLayout.astro the only layout; wraps Seo + Header + Footer
  components/              Seo, Header, Footer, PostCard, ProjectCard
  lib/
    site.ts                SITE constants, withBase(), absoluteUrl()
    content.ts             collection queries (draft filtering + sorting)
    jsonld.ts              schema.org builders
    llms.ts                llms.txt / llms-full.txt generators
  styles/global.css        all styling, single file
public/                    copied verbatim to the site root (favicons, images)
drafts/                    scratch Markdown, untracked, NOT part of the build
dist/, .astro/             generated, gitignored — never edit or commit
```

## The vocabulary split (read this before touching nav or copy)

Code identifiers and user-facing labels deliberately disagree. Don't "fix" the
mismatch.

| Collection | Route | Nav label | Page kicker |
| --- | --- | --- | --- |
| `pages` (`src/content/about.md`) | `/about/` | `readme` | — |
| `projects` (`src/content/projects/`) | `/projects/` | `builds` | `build` (singular) |
| `blog` (`src/content/blog/`) | `/blog/` | `changelog` | `changelog` |

Collections and routes always agree; only the labels differ. In code, paths, and
`getCollection` calls use the collection name; in anything a human reads use the
label. `builds` are the things that were made, the `changelog` is what was
written about them — keep them distinct.

The word "extension" is retired as a code identifier. It survives only in prose
where it's the correct English noun (Well Bookmarked genuinely is a browser
extension) — don't sweep those.

## URL handling

The site is served from a GitHub Pages project subpath, so `base` is
`/dariorandazzo` and `trailingSlash` is `'always'`.

- In `.astro` / `.ts` files, **always** build paths with `withBase()` (relative)
  or `absoluteUrl()` (canonical/feed/JSON-LD) from [src/lib/site.ts](src/lib/site.ts).
  Never hardcode `/dariorandazzo/` there, and always keep the trailing slash.
- In **content Markdown**, `withBase()` isn't reachable, so asset paths are
  written out in full: `/dariorandazzo/projects/well-bookmarked/assets/...`.
  That's the established pattern — match it, and remember these break if `base`
  ever changes.
- `heroImage` in blog frontmatter is the exception: absolute `http(s)` URLs pass
  through, anything else goes through `withBase()` in
  [src/pages/blog/[slug].astro](src/pages/blog/[slug].astro).

## Adding content

The filename is the slug; all metadata lives in frontmatter, never in the
filename. Schemas are in [src/content.config.ts](src/content.config.ts) — that
file is the source of truth for required vs. optional fields.

- **Blog post** → `src/content/blog/my-slug.md` → `/blog/my-slug/`
  Required: `title`, `description`, `pubDate`. Optional: `updatedDate`, `tags`,
  `draft`, `heroImage`, `heroImageAlt`.
- **Project** → `src/content/projects/my-slug.md` → `/projects/my-slug/`
  Required: `title`, `description`, `status` (`live` | `wip` | `archived`).
  Optional: `storeUrl`, `repoUrl`, `websiteUrl`, `platforms` (`chrome` |
  `firefox` | `safari` | `edge`), `featured`, `draft`.

`draft: true` removes an entry from listings, `getStaticPaths` (so no page is
built at all), the sitemap, RSS, and both `llms` files — all of that flows from
the `getPublished*` filters in [src/lib/content.ts](src/lib/content.ts). Each
collection keeps a `_placeholder.md` with `draft: true` to exercise the
pipeline; leave those in place.

`getFeaturedProjects()` falls back to *all* published projects when nothing
is marked `featured`, so the homepage never renders empty.

## Conventions

- **Content queries** go through [src/lib/content.ts](src/lib/content.ts). Don't
  call `getCollection` directly from a page — draft filtering and sort order live
  in those helpers, and bypassing them leaks drafts.
- **SEO/metadata** is passed as props to `BaseLayout` (`title`, `description`,
  `path`, `ogType`, `jsonLd`); `Seo.astro` handles canonical URLs, OG, Twitter,
  and JSON-LD. Build structured data with the helpers in
  [src/lib/jsonld.ts](src/lib/jsonld.ts) rather than inline objects.
- **New collection or route?** Also update [src/lib/llms.ts](src/lib/llms.ts) —
  the agent-facing indexes are hand-assembled there and won't pick it up on
  their own.
- **Styling** is one global stylesheet, [src/styles/global.css](src/styles/global.css).
  No scoped `<style>` blocks, no utility classes, no CSS framework. Colors,
  fonts, and widths are CSS custom properties on `:root`, redefined under
  `@media (prefers-color-scheme: dark)` — add a token there rather than a literal
  color. Class names are semantic (`.paper-card`, `.journal-item`, `.kicker`,
  `.prose`, `.lede`, `.section-label`).
- **Accessibility** is already wired: skip link, `aria-labelledby` on sections,
  `aria-current="page"` in the nav, `alt` on every image, `<time datetime>` for
  dates. Keep it that way.
- **Formatting**: tabs in `src/`, 2 spaces in JSON and `astro.config.mjs`; single
  quotes, semicolons, `interface Props` for component props. TypeScript runs in
  Astro's `strict` preset.

## Git

- Branch off `main` with a prefixed name: `chore/…`, `content/…`, `feature/…`.
- Conventional-ish commit subjects: `chore:`, `feat:`.
- PRs target `main` and follow [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md)
  (`# Summary`, `# Solution`).
- Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
  (`withastro/action@v6`), which builds and deploys to GitHub Pages. A broken
  build on `main` is a broken deploy.
- Never commit `dist/` or `.astro/`. `drafts/` is untracked but *not* gitignored
  — don't add it to a commit unless asked.

## If the site moves to a custom domain

Set `site` to the new hostname, change `base` to `'/'`, add `public/CNAME`, and
sweep the content Markdown for hardcoded `/dariorandazzo/` asset paths.
