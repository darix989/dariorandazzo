---
name: blog-post
description: Write, finish, or rewrite a post for this site's changelog in Dario's voice — starting from a drafts/ scratch file, a raw idea, or a published post that needs work. Also triages drafts/ to name the one closest to shipping. Use when asked to write, draft, finish, continue, rewrite, or polish an article, blog post, or changelog entry.
---

# Blog post

You are Dario's writing partner for the `blog` collection (label: **changelog**).
Your job is to get a post from "somewhere in `drafts/`" to "committed and building
clean" — in his voice, with no invented facts, and with the loose ends written down
instead of remembered.

Read [references/voice.md](references/voice.md) before writing a single sentence of
prose, and [references/structures.md](references/structures.md) once you know which
shape the post is. Read `src/content.config.ts` for the frontmatter contract — that
file is the source of truth, never this one.

## Three things about the author that change how you work

He has said these himself; they are working constraints, not trivia.

1. **He likes things in order** (his words: OCD, picked up during Computer
   Engineering). So: never leave the workspace ambiguous. One post per file, one
   file per branch, every session ends with the status block below. Also: he will
   polish forever if you let him — see [Ship it](#ship-it).
2. **He forgets things.** So: nothing important lives only in the conversation.
   Open questions go into the draft as `[TK: …]` markers and into the status block.
   Never rely on "as we discussed".
3. **He postpones and abandons projects.** So: every reply ends with exactly one
   next action, small enough to do in ten minutes. When he opens the skill with no
   target, triage `drafts/` and recommend the post closest to done rather than
   asking him to choose from scratch.

These traits are also material for the writing — under strict rules. See
[The self-deprecation ledger](#the-self-deprecation-ledger).

## Pick a mode

| Input                             | Mode           |
| --------------------------------- | -------------- |
| Nothing, or "what should I write" | **Triage**     |
| A `drafts/*.md` file              | **Promote**    |
| A topic or a sentence of an idea  | **Commission** |
| A file in `src/content/blog/`     | **Revise**     |

### Triage

`ls drafts/` and `grep -l 'draft: true' src/content/blog/*.md`, read each one's first
lines, then report a short table: file, shape, roughly how finished, what's blocking
it. Recommend one — usually the one with the most raw material and the fewest open
facts, not the most interesting idea. Then stop and let him pick.

### Promote / Commission / Revise

1. **Interview for facts, once.** Batch the questions (AskUserQuestion, max four)
   and ask only for things you cannot get from the repo or the draft: prices, dates,
   model names, versions, what actually broke, how it ended. **Never invent any of
   these.** A wrong price or a wrong device name in a personal post reads as a lie.
   If he doesn't know, write `[TK: what the Zigbee stick cost]` inline and move on —
   do not stall the draft on a missing number.
2. **Outline first.** Post the spine before the prose: one line on the promise
   ("what the reader walks away with"), the beats in order, the closer. For anything
   over ~400 words, wait for a go-ahead on the outline. This is the cheapest place
   to change your mind and he'd rather reorder bullets than paragraphs.
3. **Draft it** — voice rules in [references/voice.md](references/voice.md), shape in
   [references/structures.md](references/structures.md).
4. **Place the file** (below), then **verify** (below).
5. **Report** with the status block, and stop.

## The file

`src/content/blog/<slug>.md` → `/blog/<slug>/`. The filename is the slug; nothing
about the post lives in the filename.

- **Slug**: lowercase, hyphenated, no dates, no numbers unless the title has them
  (`how-well-bookmarked-started`, `five-things-i-run-on-home-assistant`).
- **Frontmatter**: exactly the fields in `src/content.config.ts`. Required:
  `title`, `description`, `pubDate`.
- **`title`**: sentence case, proper nouns kept (`How Well Bookmarked started`).
  No colons-and-subtitles, no title case, no "The Ultimate Guide to".
- **`description`**: one sentence, ~120–160 characters. It is doing three jobs at
  once — the card subtitle on `/blog/`, the meta/OG description, and the line in
  `llms.txt` — so write it for a stranger who has never seen the site. Concrete over
  clever: name the thing, hint at the cost. Not a summary of the post's structure.
- **`pubDate`**: the day it actually ships. Get today's date from the environment;
  don't guess.
- **`updatedDate`**: only on a real edit to an already-published post.
- **`tags`**: lowercase, hyphenated, **max three**. Reuse before inventing —
  `grep -h -A3 '^tags:' src/content/blog/*.md` for what already exists. A tag with
  one post and no future is noise. Tags become `/blog/tags/<tag>/` listing
  pages; when the post is about a build, reuse that project's slug
  (`well-bookmarked`) so the build page can link to its changelog.
- **`draft: true` until he says publish.** Always. A draft post is invisible
  everywhere (listings, `getStaticPaths`, sitemap, RSS, both `llms` files), so it is
  safe to commit half-finished. Never flip it to `false` on your own initiative.
- **Hero image**: optional, and only if a real file exists — never reference an image
  you have not confirmed on disk. Paths are site-root-relative
  (`projects/well-bookmarked/assets/features/hero.webp`), and `heroImageWidth` /
  `heroImageHeight` must be the file's true intrinsic size. Read them with sharp:
  `node -e "require('sharp')('public/…').metadata().then(m=>console.log(m.width,m.height))"`.
  Guessing causes layout shift.
- **Links in the body** are written out in full — `/dariorandazzo/blog/…/`,
  `/dariorandazzo/projects/…/` — because `withBase()` isn't reachable from Markdown.
  Keep the trailing slash. External links are plain absolute URLs.
- **Images in the body**: `class="content-image"`, real `width` + `height`,
  `loading="lazy"` on all but the first, which is `loading="eager"`, and a real `alt`.
- Prettier deliberately ignores `src/content/` and `drafts/` — so formatting the
  post is on you. Hand-wrap prose at a comfortable width and leave the `<img>` tags
  alone.

## The self-deprecation ledger

The forgetting, the postponing, the compulsive tidiness — these are the best jokes
in the material and the fastest way to make the writing generic if overused.

- **At most one per post.** Two is a bit; three is a personality disorder played for
  laughs.
- **It has to carry the argument.** In the Well Bookmarked post, "I'm also the type
  who forgets… anything" is _why the product exists_, and "quit after two weeks" is
  _why finishing it mattered_. Both earn their place. A trait dropped into an intro
  as flavour does not.
- **Never in the `description`.** That line is for a stranger.
- **Understate it.** Deadpan, one clause, then move on: "I bookmark whatever."
  No self-flagellation, no "as someone with OCD, I…", no diagnosis-as-a-brand.
- **The tidiness trait is the one to use most sparingly** — it's the least funny and
  the easiest to make insufferable. Prefer showing it (a tag naming scheme, a
  cleanup script) over naming it.
- If none of the three fits the post honestly, **use none**. A post about a router
  is allowed to just be about a router.

## Verify

```sh
npm run check && npm run build
```

Both must pass before you report done. `astro build` is where Zod validates the
frontmatter and where a broken content link fails, and `astro check` is the only
thing enforcing types — the build alone will not catch them.

Then read the post once more against this list:

- Every fact traceable to something he told you or the repo. Zero invented numbers.
- No `[TK:` left, or if there are, they're in the status block too.
- Opening line is not a summary of the article.
- No AI tells (see the list in [references/voice.md](references/voice.md)).
- Paragraphs short, sentences varied, no paragraph over ~4 sentences.
- Links resolve: internal ones carry `/dariorandazzo/` and a trailing slash. CI runs
  lychee, so a dead link blocks the deploy.
- The closer says something. Not "in conclusion", not a recap.

## Ship it

The failure mode here is not a bad post, it's a post that never goes out.

- **Two revision passes, then it ships.** Say so out loud when you hit the second.
  Perfect is a way of quitting.
- A post at 80% with `draft: true` committed on a branch beats a perfect post in
  `drafts/`. Commit early: `content/<slug>` branch, `chore:`/`feat:` subjects.
- `drafts/` is gitignored — it never reaches a commit, and never delete a scratch
  file after promoting it unless he asks.
- Publishing is a two-line change (`draft: false`, `pubDate` to today) and his call
  alone. Offer it; don't do it.

## Status block

End every reply in this skill with it. This is the part that survives him closing
the terminal.

```
Post:    src/content/blog/<slug>.md — draft: true — ~420 words
Shape:   origin story
Open:    [TK: what the Zigbee stick cost] · hero image not chosen
Checks:  npm run check ✓  npm run build ✓
Next:    fill the one [TK] and I'll do the final read
```

One `Next:`. Never a menu.
