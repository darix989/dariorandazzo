---
name: pr-description
description: Write the PR description for the current branch (or a given branch/PR/diff range), following .github/PULL_REQUEST_TEMPLATE.md, and print it as raw copy-pasteable Markdown. Use when the user asks for a PR description, PR body, or "describe this PR".
---

# PR description

Produce a **brief** pull-request description for a set of changes and print it as
raw Markdown inside a fenced block, ready to paste into GitHub.

## Steps

1. **Pick the target.**
   - No argument → the current branch against `main`.
   - Argument is a branch name → that branch against `main`.
   - Argument is a number → `gh pr diff <number>`.
   - Argument is a range (`a..b`) → use it verbatim.

   For a branch, always diff from the merge base, never the tip of `main`:

   ```sh
   git diff --stat $(git merge-base main HEAD)...HEAD
   git log --oneline $(git merge-base main HEAD)..HEAD
   git diff $(git merge-base main HEAD)...HEAD
   ```

   If the range is empty, say so and stop — do not invent a description.

2. **Read the template.** `cat .github/PULL_REQUEST_TEMPLATE.md`. Its headings are
   the contract: reproduce them exactly, in order, and add none of your own. Do
   not hardcode the headings from memory — the template is the source of truth.

3. **Read the actual diff**, not just the commit subjects. Commit messages say
   what the author intended; the diff says what shipped. Where they disagree,
   describe the diff.

4. **Write it**, then print it.

## Content rules

- **Summary** — 1–2 sentences: what this change is and why it exists. Lead with
  the user-visible or behavioural effect, not the file list.
- **Solution** — up to 5 bullets on what actually changed. One bullet per
  meaningful change; group trivia (formatting, renames, lockfile) into a single
  bullet or drop it.
- Reference files as inline links when they help: `[global.css](src/styles/global.css)`.
- Present tense, plain language, no filler ("This PR aims to…", "Additionally,…").
- No emoji, no marketing tone, no test-plan / checklist / screenshot sections
  unless the template has them, no generated-by footer.
- Omit nothing important: a behaviour change, a migration step, or anything a
  reviewer must do by hand always earns a bullet, even at the cost of brevity.
- If a section of the template genuinely has nothing to say, leave it empty
  rather than padding it.

## Output

The whole answer is **one copy-pasteable snippet and nothing else**.

- Emit exactly one fenced code block, opened and closed with **four** backticks
  and tagged `markdown`, so the description stays raw and unrendered — headings
  as `# Summary`, links as `[text](path)` — and the reader can select the block
  and paste it straight into the GitHub PR body.
- Four backticks, not three: the description may itself contain fenced code, and
  a three-backtick wrapper would be closed early by it.
- Nothing outside the fence: no preamble, no "here's the description", no notes,
  no follow-up commentary, no summary of what you did.
- Nothing inside the fence but the description itself: no wrapper headings, no
  file name, no diff stats, no attribution.

Shape of the entire reply (headings copied from the template, content from the diff):

````markdown
# Summary

Restores the top margin on the post header, which collapsed after the layout
refactor.

# Solution

- Move the `.journal-item` margin onto the block in [global.css](src/styles/global.css)
  instead of the wrapper.
````

Only write the description to a file, or push it with `gh pr create` / `gh pr edit`,
if the user explicitly asks.
