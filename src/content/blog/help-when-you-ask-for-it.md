---
title: "Help, when you ask for it"
description: "Well Bookmarked now has a short tour and a Help entry on every screen, a toolbar popup that reaches the Library Analyzer, and a New Tab URL setting."
pubDate: 2026-10-13
tags:
  - well-bookmarked
draft: true
heroImage: blog/help-when-you-ask-for-it/tutorial.webp
heroImageAlt: "The Library Analyzer tutorial card, step one of two, open over the Sites list"
heroImageWidth: 1440
heroImageHeight: 855
---

A question mark, in the corner of every dialog.

For a while, it opened itself.

[Well Bookmarked](/dariorandazzo/projects/well-bookmarked/) 2.8 to 2.10.1 were about the extension explaining itself, without getting in the way of the thing it was explaining. Most of that went fine. The question mark did not.

## help

The first time the extension opens, a short tour runs: what tags are, where the four screens live, what the toolbar popup is for. After that, nothing opens on its own. Every screen's Actions menu has a Help entry for what is on screen right now. Search and Pinned share a screen but get separate tutorials, because they are different jobs.

An unread tutorial colours the Actions menu itself, so there is something to notice before the menu is even open. Settings → Help & Tutorials turns them all off, or resets every screen back to unread.

The first draft of the Search tutorial taught tags wrong. It said searching by tag meant typing the tag symbol, when clicking a tag pill on a result needs no typing at all. That one was caught before it shipped.

The question mark was not. In 2.8 its tooltip started opening on keyboard focus, so tabbing to it stopped being a dead end. But a dialog puts focus on its first control when it opens, and in many dialogs that control is the question mark. So they opened with their help text already spread across them. Compare Duplicates opened with the help sitting on top of the very copies it was asking me to choose between.

2.10.1 keeps it shut until it is hovered, or tabbed back to.

## the small popup

The toolbar popup was Search, Add Page, and Settings. The Library Analyzer sits in it now too, and Add Page still turns into Edit Bookmark when the page is already saved.

<img class="content-image" src="/dariorandazzo/blog/help-when-you-ask-for-it/quick-popup.webp" alt="The compact toolbar popup with Search, Add Page, Library Analyzer and Settings" width="520" height="400" loading="lazy" decoding="async">

Settings → Quick Mode hides Library Analyzer and Settings, for anyone who wants the popup back to two rows. On a saved page, holding Shift turns Edit Bookmark into Delete Bookmark: `Shift+Enter` or `Shift+click`, with a confirmation first.

Hiding rows exposed something ugly. A Chrome popup cannot shrink once it has painted. It opened at four rows, so hiding two left a strip of empty chrome under the entries. It now opens at two and grows as the other rows show up.

## the new tab

Not everyone wants their bookmarks on every new tab, and turning off Use as New Tab Page always worked. What came back, though, was the browser's own new tab, or Firefox Home on Firefox. Not the homepage.

Brave and Edge can show the homepage on a new tab. While an extension holds the new tab, that option does nothing. And the extension cannot let go at runtime: the override is fixed in the manifest. So its page still loads on every new tab and hands the tab straight over.

New Tab URL is where that hand-off goes. A homepage, or a search page like `https://search.brave.com/`. Plain http(s) only, and a bare host gets `https://` in front. Leave it empty for the browser's own new tab. With the override still on, a warning icon beside the field says the URL is being ignored.

If the popup is the only part you use, hide those two rows and see whether you miss them.

The tool is free, and it will likely stay that way. If it helps, consider leaving a rating on the [Chrome Web Store](https://chromewebstore.google.com/detail/well-bookmarked/ickglfbpinekdkphoppfigdnccgnnajh) or [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/well-bookmarked/).

Happy bookmarking!
