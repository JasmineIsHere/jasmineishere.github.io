---
name: jasmine-portfolio-project
description: Add projects from supplied links to JasmineIsHere's GitHub Pages portfolio, matching its existing design and copy, with flip cards, conditional case-study pages, and review before merging or publishing.
---

# Add a portfolio project

Target repository: https://github.com/JasmineIsHere/jasmineishere.github.io
Production site: https://jasmineishere.github.io

Use this workflow when the user supplies a project link to showcase in this portfolio. Read [references/portfolio-conventions.md](references/portfolio-conventions.md) for the observed style and implementation map, then refresh those observations against current repository files. This skill does not authorize changes to the showcased project's own repository.

## Learn and gather

- Inspect repository instructions, the current project listing, representative cards, internal project pages, shared styles, routing, package scripts, and publishing workflow. Use the GitHub connection when available. Inspect the rendered portfolio when browser access is available to understand spacing, imagery, interaction, and themes.
- Read the supplied project link and relevant README, source, documentation, and available screenshots. Establish its purpose, intended users, actual tech stack, implementation process, status, and whether it has a working public deployment.
- A repository URL is not a deployed app. Check an actual deployment before choosing the card destination. If deployment status or essential facts remain ambiguous, ask a focused question while continuing independent work.
- Match the portfolio's current voice, sentence length, section labels, typography, colors, card sizing, spacing, and image treatment. Use existing components and tokens. Do not copy old factual claims into a new project or invent outcomes, metrics, personal motivations, or development history.

## Branch and implement

Before editing portfolio files, create a fresh temporary branch from the latest main for each new project, for example `portfolio/add-<project-slug>-<date>` with a suffix if needed. Preserve unrelated local changes and avoid reusing another project's branch. Continue revisions to that project on its review branch.

Every added project must have a card with:

- A recognizable project image on the front.
- A hover flip revealing a short, plain-language description and a visible action button on the back.
- A usable keyboard and touch path to the description and action, visible focus, and reduced-motion handling. Keep the established visual style.

Choose the destination by project status:

- **Working deployed website:** Link the card's button directly to the verified deployed site so visitors can try it. An internal case study is optional only if requested.
- **Not deployed:** Create a static informational page within the existing portfolio application, register its route, and link the button to it. Cover the problem or background, actual tech stack, process and meaningful decisions, and real project screenshots with descriptive alt text and useful captions. Explain current limitations or next steps when supported by evidence. Do not use a repository link as a substitute for this page.

Use genuine screenshots from supplied assets or the running project. Request missing assets if the project cannot be accessed or run; do not fabricate screenshots or present mockups as evidence. Any temporary placeholder must be clearly identified in review and resolved before publication. Keep additions focused; do not redesign or migrate existing entries unless requested.

## Verify and return for review

Run the current build and relevant checks. Inspect the rendered listing and any new internal page at desktop and mobile sizes and in supported themes. Check the hover flip, keyboard/touch access, button destination, image loading, text fit, route navigation and direct hash URL loading. Report any checks that could not run.

Prepare a concrete reviewable result before asking for approval:

- Provide a working local or non-production preview URL for the updated listing and, where applicable, the new case-study page. Open it when supported. Include screenshots when helpful; a diff alone is not a page preview.
- Provide the branch and a draft PR or comparison link when available, a concise summary of copy and changes, and validation results. Attach any created PR to the task when the tool exists.
- If preview execution is blocked, deliver the available rendered artifacts and explain the blocker rather than claiming the page was previewed.

**Stop before merging to main or publishing. The user must review and explicitly approve the concrete project addition.** Creating this skill, supplying a project URL, or requesting revisions is not publication approval. Do not push directly to main, enable auto-merge, run deployment scripts, trigger a production workflow, or otherwise bypass this gate. Check workflow triggers before pushing a review branch so it cannot publish production inadvertently.

After approval, ensure the reviewed changes are still the ones being merged and required checks pass. Material changes after review require renewed approval. Merge using the repository's existing process and let its established GitHub Pages workflow publish. Verify the deployment and live card/page before reporting success. If deployment fails, report it accurately and investigate without bypassing the approval boundary or changing unrelated hosting settings.
