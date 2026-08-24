---
title: "Well Bookmarked"
description: "A bookmark manager with tags: search by tag or keyword, find duplicates, and tidy your library from your new tab."
status: live
storeUrl: "https://chromewebstore.google.com/detail/well-bookmarked/ickglfbpinekdkphoppfigdnccgnnajh"
platforms:
  - chrome
  - firefox
featured: true
draft: false
---

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/hero.webp" alt="Well Bookmarked — find any bookmark by tag, instantly" width="960" height="600" loading="eager" decoding="async">

**Bookmarks are easy to save and impossible to find again.**

Well Bookmarked adds tags, real search, and cleanup tools to the bookmarks you already have.
There is no account, no server, and no import step — it works on your existing browser bookmarks,
in Chrome and in Firefox.

Tags live _inside_ the bookmark title, so they sync with your browser and travel with your
bookmarks anywhere you sign in. Nothing is stored in a database only this extension can read.

> **Install** —
> [Add to Chrome](https://chromewebstore.google.com/detail/well-bookmarked/ickglfbpinekdkphoppfigdnccgnnajh) ·
> [Add to Firefox](https://addons.mozilla.org/firefox/addon/well-bookmarked/)

---

## Contents

- [Search by tag](#search-by-tag) · [Browse folders](#browse-folders) ·
  [Filters and sorting](#filters-and-sorting) · [Site shortcuts](#site-shortcuts)
- [Tag, preset and edit](#tag-preset-and-edit) · [Pinned searches](#pinned-searches-and-links)
- [Library Analyzer](#library-analyzer) · [Duplicates](#find-and-merge-duplicates) ·
  [Tags Analyzer](#tags-analyzer)
- [New Tab mode](#new-tab-mode) · [Keyboard](#keyboard-first) · [Settings](#everything-is-configurable) ·
  [Backup](#backup-and-restore) · [Privacy](#privacy-and-permissions) · [Browser support](#browser-support)

---

## Search by tag

Type your tag symbol and a word — `#reading` — and every bookmark carrying that tag comes back
instantly. Tags render as pills on each result; click one to add it to the search or remove it.

The tag symbol is yours to choose: if `#` collides with how you already name things, change it in
Settings and every hint in the UI follows.

Keyword search runs against your real bookmark tree and matches **titles, URLs and folder names**,
so searching `github.com` finds a page whose title never mentions GitHub.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/tag-search.webp" alt="Searching for the #reading tag in the popup" width="460" height="603" loading="lazy" decoding="async">

## Browse folders

Explorer mode walks your folder tree the way the bookmark manager does, but with counts, tags and
one-click search-inside-this-folder. The `..` row takes you back up.

Scoping a search to a folder is a first-class part of a query, not a mode you have to leave.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/explorer.webp" alt="Explorer mode showing the folder tree" width="800" height="475" loading="lazy" decoding="async">

## Filters and sorting

Hide folders or hide links, keep only items with a minimum number of tags, show only duplicated
URLs, or sort by most recently added or most visited. Set the combination you always want as your
default and every new search starts there.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/filters.webp" alt="The filters and sorters dialog" width="800" height="475" loading="lazy" decoding="async">

## Site shortcuts

Type `!w einstein` to search Wikipedia, or `!npm react` to search npm — **59 shortcuts are built
in**, each can be switched off, and you can add your own with a URL template.

`Ctrl+Enter` runs the same query through every matching shortcut at once.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/bang-shortcuts.webp" alt="Typing a custom !mdn shortcut in the search bar" width="800" height="475" loading="lazy" decoding="async">

---

## Tag, preset and edit

The edit screen is where a bookmark gets its title, URL, folder and tags. Suggestions come from
the tags you used **most recently**, then your defaults, then the tags most common among related
bookmarks.

**Presets** apply a named set of tags — and optionally a destination folder — in a single click.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/edit-bookmark.webp" alt="Editing a bookmark with tags, presets and suggestions" width="800" height="475" loading="lazy" decoding="async">

## Pinned searches and links

Pin the searches you actually repeat, and the links you open every morning. Each pin can carry a
**weekday schedule**, so your work shortlist shows up Monday to Friday and your weekend one does
not.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/pinned-searches.webp" alt="The pinned searches list" width="460" height="603" loading="lazy" decoding="async">

Schedules are set per pin in Settings, one chip per weekday:

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/pinned-modal.webp" alt="Setting a weekday schedule for each pinned entry" width="800" height="475" loading="lazy" decoding="async">

---

## Library Analyzer

The report that tells you what you have actually been saving. Every **site** and every **folder**
in your library, counted, sorted and searchable — with the tags used on each.

It surfaces the things you cannot see in a bookmark tree: the empty folders, the folder that
quietly grew to 300 items, the domain you have bookmarked forty times.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/library-analyzer.webp" alt="Library Analyzer grouping bookmarks by site" width="880" height="523" loading="lazy" decoding="async">

The Folders tab counts nested bookmarks per folder, flags empty folders, and can **merge** a
folder's contents into another and delete the empty original.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/library-analyzer-folders.webp" alt="Library Analyzer folders tab with nested counts" width="880" height="523" loading="lazy" decoding="async">

## Find and merge duplicates

**Find Duplicates** lists every copy of every repeated URL, treating `http`/`https`, a leading
`www.`, a trailing slash and a `#fragment` as the same page.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/find-duplicates.webp" alt="Duplicate bookmarks grouped together in the results" width="880" height="523" loading="lazy" decoding="async">

**Compare Duplicates** is the part that makes a cleanup safe. Choose which copy survives, or keep
the oldest or the newest in one click. Tags from the copies you delete are **inherited** by the
survivor, so consolidating three half-tagged copies leaves you with one fully-tagged bookmark
instead of losing two thirds of your work.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/compare-duplicates.webp" alt="Comparing three copies of the same URL before merging" width="880" height="523" loading="lazy" decoding="async">

## Tags Analyzer

See which tags you actually use, sorted by most used, least used, or most recently visited. Select
a few and search them together — or select one and **rename it across every bookmark and folder
that carries it**, with a full preview before anything is written.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/tags-analyzer.webp" alt="Tags Analyzer showing tag usage" width="880" height="523" loading="lazy" decoding="async">

---

## New Tab mode

The same search, edit and analysis screens, full-page, on the tab you open all day. Everything
above works identically here — the popup and the new tab are the same app in two shells.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/new-tab.webp" alt="Well Bookmarked as the new tab page" width="880" height="523" loading="lazy" decoding="async">

The toolbar popup stays compact and fast for the two things you do most: search, and bookmark the
page you are on.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/quick-popup.webp" alt="The compact toolbar popup" width="320" height="102" loading="lazy" decoding="async">

## Keyboard-first

Open the popup with **Ctrl+B** (**Cmd+B** on Mac; **Ctrl+Shift+F** on Firefox) and never touch the
mouse. Arrow keys move through results, `Enter` opens, `Shift+Enter` opens in a new tab,
`Ctrl+Enter` opens everything, and `ArrowRight` reveals a row's actions — which stay out of the tab
order until you ask for them, so tabbing through a long list stays short.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/shortcuts.webp" alt="The built-in keyboard shortcut legend" width="800" height="475" loading="lazy" decoding="async">

## Everything is configurable

The tag symbol, the theme, your default tags and folder, whether links open in the current tab,
which of the 59 built-in site shortcuts are active, the filters every new search starts with —
all of it is a setting, and all of it travels in a backup.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/settings.webp" alt="The settings screen" width="800" height="475" loading="lazy" decoding="async">

## Backup and restore

Export your configuration as JSON and pick exactly which of the 14 categories to include — or to
restore. Backups are versioned, so an older export still imports.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/backup-restore.webp" alt="Choosing which settings categories to export" width="800" height="475" loading="lazy" decoding="async">

---

## Privacy and permissions

Well Bookmarked has **no account, no server and no analytics.** It makes no network request except
the searches you explicitly run. Site icons are resolved by your own browser, so the addresses of
the pages you bookmark are never sent to a third party.

| Permission  | Why it is needed                                               |
| ----------- | -------------------------------------------------------------- |
| `bookmarks` | Search your bookmarks, and edit them when you ask              |
| `history`   | Read-only — powers the "most visited" sort orders              |
| `storage`   | Save your settings                                             |
| `tabs`      | Open bookmarks, and read the current tab so you can save it    |
| `favicon`   | Chrome only — render site icons locally, not via a third party |

There is no `host_permissions` entry and no content script: the extension never reads or modifies
the pages you visit.

---

## Browser support

|                  | Chrome               | Firefox                                        |
| ---------------- | -------------------- | ---------------------------------------------- |
| Manifest         | MV3                  | MV2                                            |
| Open the popup   | `Ctrl+B` / `Cmd+B`   | `Ctrl+Shift+F`                                 |
| New Tab override | Yes                  | Yes                                            |
| Site icons       | Local `_favicon` API | `{origin}/favicon.ico`                         |
| Import a backup  | File picker          | Paste (a file picker closes the Firefox popup) |
