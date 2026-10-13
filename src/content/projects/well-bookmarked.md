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
- [Library Analyzer](#library-analyzer) · [Duplicates](#find-and-merge-duplicates)
- [New Tab mode](#new-tab-mode) · [Keyboard](#keyboard-first) · [Learning your way around](#learning-your-way-around) ·
  [Settings](#everything-is-configurable) · [Backup](#backup-and-restore) ·
  [Privacy](#privacy-and-permissions) · [Browser support](#browser-support)
- [changelog](/dariorandazzo/blog/tags/well-bookmarked/)

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

The title field normally shows the title with its tags filtered out. **Actions → Raw title**
switches it to the title exactly as stored, tags included, so you can fix or rearrange tags in
place; **Filtered title** switches back.

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

The report that tells you what you have actually been saving, as its own screen next to Search,
Edit Bookmark and Settings. Every **site**, **folder** and **tag** in your library, counted,
sorted and searchable.

It surfaces the things you cannot see in a bookmark tree: the empty folders, the folder that
quietly grew to 300 items, the domain you have bookmarked forty times.

The tabs (Sites, Folders, Tags, plus a visible but inert **Bulk edit** destination icon), a
**Back** button and a **report** button sit in the header strip under the title. The
report is a modal — library totals plus anything that needs attention — reachable from Actions at
any time; the warning button only appears when there is actually something to fix, so the screen
stays about the list you are reading. Every list shows 25 rows and ends with **Show all**, and
every tag list is capped the same way — 10 pills beside a site or folder, then **Show all**. The
Tags tab is a row list like Sites and Folders (25 rows, then **Show all**). Search, select mode, and the Tags tab all open bulk edit as that subsection.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/library-analyzer.webp" alt="Library Analyzer grouping bookmarks by site" width="880" height="523" loading="lazy" decoding="async">

Every row says what it is: bookmarks carry their site's favicon, folders carry a folder icon. In
the folder detail — the one list that mixes the two — that is the difference between reading it and
guessing.

The Folders tab counts nested bookmarks per folder, flags empty folders, can keep folders with
fewer or more than N children (direct or total), and can **merge** a folder's contents into
another and delete the empty original.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/library-analyzer-folders.webp" alt="Library Analyzer folders tab with nested counts" width="880" height="523" loading="lazy" decoding="async">

### Select mode — fixing what the analyzer finds

Finding forty empty folders is only half the job. **Actions → Select** turns the site detail, the
Folders tab and the folder detail into a multi-select list: rows toggle instead of opening, the
Actions button counts what you have picked, and the menu offers everything that makes sense for
that selection. Browser roots (Bookmarks bar, Other bookmarks) stay unselectable — they cannot be
moved or deleted — and keep opening as usual.

For bookmarks: **Open selected**, **Move to…**, **Delete**, and **Bulk edit** to rewrite titles,
tags or URLs together. Bulk edit is a Library Analyzer subsection (not a modal): the action
opens that panel with the selection already loaded, with a live preview before anything changes.
With a selection, the Bulk edit header icon lights up and is a shortcut into that same panel.

For folders, on top of those:

| Action               | What it does                                                                                                         |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Delete**           | The folder and everything inside it.                                                                                 |
| **Delete content**   | Empties the folder, keeps the folder.                                                                                |
| **Move content to…** | Moves what it holds elsewhere; the source folder stays behind, empty.                                                |
| **Flatten**          | Lifts the content up into the parent and removes the folder — the one-click fix for the "Redundant nesting" warning. |

**Select all**, **Select all bookmarks**, **Select all folders** and **Unselect all** work across
the whole filtered list, not just the first 25 rows — so `Show: Empty` followed by Select all
folders and Delete clears them all in one pass. Move to… and Move content to… ask for a
destination in the same in-screen folder list that Merge into… uses, and a folder can never be
moved into itself or one of its own descendants.

The Tags tab lists every tag you actually use as the same two-line rows Sites and Folders use,
sorted by most used, least used, name, or most recently visited, and can **Show** only tags used
once. Click a row to see the bookmarks and folders that carry it — Search stays as a hand-off.
**Select** a few and search them together, **Rename** them across the library, or **Bulk edit**
the items that carry them (the same panel Search and Folders use). From Tags, that panel opens on
**Replace (title)** as tag with the selected names already in the field — the **Rename** and
**Bulk edit** buttons and the header icon all do this. Switch to **Remove (title)** as tag to
strip them. **Delete items** removes the bookmarks themselves, not the tag.

**Actions → Tags Report** lists names that look like the same tag — plurals (`sport` / `sports`),
hyphens (`web-dev` / `webdev`), or a one-letter difference (`color` / `colour`). Merge a group,
pick the name to keep, and the others are renamed onto it (a title that already had both keeps
one). Hide a group if it is not a real duplicate — it moves to **Dismissed similar tags**
(collapsed until you expand it) and is remembered in Settings backup. Each name has a Search icon
so you can review its items first. With more than two similar names, select which ones the merge
includes — unselected names stay as they are. Tags used on a
single item are a button in that report that opens Show: Used once.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/tags-analyzer.webp" alt="Library Analyzer Tags tab showing tag usage" width="880" height="523" loading="lazy" decoding="async">

## Find and merge duplicates

**Find Duplicates** lists every copy of every repeated URL, treating `http`/`https`, a leading
`www.`, a trailing slash, a `#fragment` and campaign tracking parameters (`utm_*`, `fbclid`, `gclid`
and friends) as the same page — so an article saved from a newsletter and again from the site is
found. Parameters that select content, such as `?q=`, `?v=` and `?t=`, are kept.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/find-duplicates.webp" alt="Duplicate bookmarks grouped together in the results" width="880" height="523" loading="lazy" decoding="async">

**Compare Duplicates** is the part that makes a cleanup safe. Choose which copy survives, or keep
the oldest or the newest in one click. Tags from the copies you delete are **inherited** by the
survivor, so consolidating three half-tagged copies leaves you with one fully-tagged bookmark
instead of losing two thirds of your work.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/compare-duplicates.webp" alt="Comparing three copies of the same URL before merging" width="880" height="523" loading="lazy" decoding="async">

You also get told without asking. When the page you are on is already saved, the popup's
**Edit Bookmark** entry turns amber if that page (or any tag on it) has duplicates, and the count
is on the Edit Bookmark screen's **Actions › Duplicates** entry — so a second copy is visible
before you go looking for one.

## New Tab mode

The same search, edit and analysis screens, full-page, on the tab you open all day. Everything
above works identically here — the popup and the new tab are the same app in two shells.

New Tab mode is **on by default** and can be turned off in Settings → New Tab Mode → **Use as
New Tab Page**. With it off, the toolbar popup is unchanged; Chrome shows its own new tab again,
and Firefox shows Firefox Home (the browser does not let an extension restore its original new
tab while the override is registered). To open a page of your own instead — your homepage, or a
search page like `https://search.brave.com/` — set **New Tab URL** (Settings → New Tab
Mode). While the extension holds the override, the browser's own "new tab shows homepage" option
(Brave, Edge) has no effect, so this field is how to get it back. It only applies while Use as
New Tab Page is off, and it accepts http(s) addresses only (a bare host gets `https://`). Leave it
empty for the browser's own new tab. An optional **Loading background** color (Settings → New
Tab Mode) covers the brief moment before the app or the browser's own new tab appears; the
toolbar popup has its own matching control under Settings → Extension Mode. Leave either empty
to follow the browser theme. On Firefox both color swatches are shown only in New Tab mode —
opening a native color picker dismisses the toolbar popup — but the hex field next to them stays
editable in either shell.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/new-tab.webp" alt="Well Bookmarked as the new tab page" width="880" height="523" loading="lazy" decoding="async">

The toolbar popup stays compact and fast: **Search**, **Add Page** (or **Edit Bookmark** when the
page you are on is already saved), **Library Analyzer** and **Settings**. Settings → Quick Mode
can hide the last two, so the popup is just the two things you do most. On a saved page, hold
**Shift** and Edit Bookmark becomes **Delete Bookmark** — `Shift+Enter` or `Shift+click`, with a
confirmation first.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/quick-popup.webp" alt="The compact toolbar popup" width="320" height="246" loading="lazy" decoding="async">

## Keyboard-first

Open the popup with **Ctrl+B** (**Cmd+B** on Mac; **Ctrl+Shift+F** on Firefox) and never touch the
mouse. Arrow keys move through results, `Enter` opens, `Shift+Enter` opens in a new tab,
`Ctrl+Enter` opens everything, and `ArrowRight` reveals a row's actions — which stay out of the tab
order until you ask for them, so tabbing through a long list stays short.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/shortcuts.webp" alt="The built-in keyboard shortcut legend" width="800" height="475" loading="lazy" decoding="async">

## Learning your way around

A short welcome tour opens the first time you open the extension — what tags are, where the four
screens live, and what the toolbar popup is for. After that, every screen's own **Actions** menu
carries a **Help** entry for what you are looking at right now — Search and Pinned Searches share
a screen but get their own tutorials, since they are different tasks. An unread one colors the
Actions menu itself, so there is something to notice before you even open it; nothing ever opens
on its own after the welcome.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/tutorial.webp" alt="The Library Analyzer tutorial, opened from Actions → Help" width="880" height="523" loading="lazy" decoding="async">

Turn tutorials off entirely, or reset every screen back to unread, from Settings → Help &
Tutorials.

## Everything is configurable

The interface language (English or Italian), the tag symbol, the theme, your default tags and
folder, whether links open in the current tab, which of the 59 built-in site shortcuts are active,
the filters every new search starts with — all of it is a setting, and all of it travels in a
backup.

Switching language takes effect immediately, with no reload. Your bookmarks, folders and tags are
never translated — only the extension's own screens.

<img class="content-image" src="/dariorandazzo/projects/well-bookmarked/assets/features/settings.webp" alt="The settings screen" width="800" height="475" loading="lazy" decoding="async">

## Backup and restore

Export your configuration as JSON and pick exactly which of the 24 categories to include — or to
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
