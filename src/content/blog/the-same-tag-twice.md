---
title: "The same tag, twice"
description: "Well Bookmarked can now merge similar tags, flatten empty folders from a real screen, and switch to Italian without touching a single bookmark."
pubDate: 2026-08-30
tags:
  - well-bookmarked
draft: false
heroImage: blog/the-same-tag-twice/tags-analyzer.webp
heroImageAlt: "Library Analyzer Tags tab as a two-line row list, with a Duplicates action"
heroImageWidth: 1440
heroImageHeight: 855
---

`sport`. And `sports`.

Two names. Same idea. The old Tags tab was a wrapping cloud of pills, and the only way to notice the pair was to stare until they lined up.

[Well Bookmarked](/dariorandazzo/projects/well-bookmarked/) 2.6 and 2.7 were about that kind of mess: the one a bookmark tree never shows, and that used to mean leaving the screen that found it.

## cleanup

The Library Analyzer used to live under Search, in a menu. Open the report, close it, go back to hunting.

Now it is a screen, next to Search, Edit, and Settings. Sites, Folders, Tags. Jump into a bookmark and the tab, the filter, and the detail are still there on the way back. The totals and the warnings sit in a report that opens on purpose, not as chips stacked on the list.

<img class="content-image" src="/dariorandazzo/blog/the-same-tag-twice/library-analyzer.webp" alt="Library Analyzer Sites tab, hosts with bookmark counts and tag pills" width="1440" height="855" loading="lazy" decoding="async">

Select mode is where it stopped being read-only. Show the empty folders, select all of them, delete. Flatten the folder that only existed to hold one other folder. Bulk edit is a panel on that same screen, not a dialog floating over it. From Tags, Rename already fills in the names that were picked.

Site detail looks like Search: title, a dimmed URL, tags packed to the lower right. A host's bookmarks can group by the folder they live in, so a long list on one domain stops reading as a flat pile. The library report ranks host suffixes the same way, and clicking one jumps to that filter on Sites.

<img class="content-image" src="/dariorandazzo/blog/the-same-tag-twice/library-analyzer-folders.webp" alt="Library Analyzer Folders tab, a one-item folder counted in warning colour" width="1440" height="855" loading="lazy" decoding="async">

Duplicates show up without a special trip. Edit Bookmark and the small popup both flag a page that is already saved somewhere else.

The compare view used to hide the one field the decision turns on. `/wiki/CSS_Grid` and `/wiki/css_grid` grouped as the same page, and the modal never said the URLs differed. They still group — the match still ignores case — but the difference is visible before a survivor is picked.

What it still will not do: warn about bookmarks with no tags. That one fired on too much of a normal library to be useful. And the Bookmarks bar stays unselectable. It still opens. It cannot be deleted.

## similar tags

The Tags tab is a list now, the same two-line rows as Sites and Folders. Click a name, see what carries it. Delete one from Edit and it comes off every bookmark that had it.

The new part is the Tags Report. It clusters names that look like the same tag: plurals, a hyphen that came and went, a one-letter drift like `color` and `colour`. Pick the name to keep. The others get renamed onto it. A title that already had both keeps one.

It will be wrong sometimes. `color` and `colour` might be a split worth keeping. A group can be dismissed, and it stays dismissed, including in a backup. Groups of more than two start with a selection, so two names can merge and a third can stay. Each name has a Search icon, so the items can be reviewed before anything is renamed.

## Italian

Settings → General → Language. Italian, live, no reload. The bookmarks, the folders, the tags stay exactly as they were written. Only the chrome around them switches.

<img class="content-image" src="/dariorandazzo/blog/the-same-tag-twice/settings.webp" alt="Settings, General section, with the language control at the top" width="1440" height="855" loading="lazy" decoding="async">

That was the point, and also the first thing that broke. A progress line that was supposed to read "Checking #news…" came out as "Checking #…". The tag name had been eaten by the same placeholder that inserts the tag symbol.

The store listing is still English. So is the toolbar tooltip, if the browser itself is in English. Switching the screens does not switch the Chrome Web Store, or Firefox Add-ons, or the little label under the icon.

If the Tags tab still looks like a pile of pills, start there.

The tool is free, and it will likely stay that way. If it helps, consider leaving a rating on the [Chrome Web Store](https://chromewebstore.google.com/detail/well-bookmarked/ickglfbpinekdkphoppfigdnccgnnajh) or [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/well-bookmarked/).

Happy bookmarking!
