# Portfolio reference

Observed from repository main on 2026-09-25, commit `e100289f52ac1ffa3a721e9a79b30327afab0ef5`. This is a starting map, not a frozen specification; re-read current sources before making additions.

## Voice

Personal cards use a single direct sentence explaining what the project does or what inspired it. Examples from `src/pages/Work/index.jsx` include “A simple web page that tells you if it's the weekend yet” and “An interactive portfolio styled like a Pokemon info menu”. Keep new card copy similarly brief and concrete, with no inflated marketing claims.

Longer pages use a friendly first-person voice, simple explanations, and candid limits. The Shigaraki page explains the inspiration, basic mechanics in Version 1, visual and scoring improvements in Version 2, and modest future plans. The Pokemon page describes a just-for-fun motivation and gives brief interaction instructions. Preserve that personal tone without inventing Jasmine's experiences or reproducing accidental grammar mistakes.

For a new non-deployed project, use readable sections such as Background, Tech Stack, Process, and Screenshots. Adapt labels to the story while retaining all four required topics. Describe a tool's actual role, not a generic list of fashionable technologies.

## Implementation map

- `src/pages/Work/index.jsx`: project data grouped into Personal and Ninja Van; card image, alt text, color, description, and onClick handler. Existing CTA is “View More”. New personal projects belong in Personal unless their provenance indicates otherwise.
- `src/pages/Work/styles.js`: styled-components flip cards, 25rem square desktop and 15rem mobile, 20px corners, a 0.3s Y-axis hover rotation, centered reverse-side copy. Reuse styling while ensuring added interactions work without hover.
- `src/pages/ShiggyProject/index.jsx`: longer process narrative with images/videos and shared components.
- `src/pages/PokemonProject/index.jsx`: short personal introduction and interactive example.
- `src/components/ProjectContainer`, `HeadingText`, `BodyText`, `PrimaryButton`: reusable page and text/button primitives.
- `src/Router/index.js`: HashRouter; project routes under `/projects/<slug>`. Share browser URLs as `/#/projects/<slug>`; keep Github Pages hash routing intact.
- `public/project_faces/`: card images. Existing case-study media also live in public. Follow current conventions for new assets and ensure route-safe URLs.
- `src/index.css`: Dokdo headings and Open Sans paragraphs. `src/utils/colors.js`: off-white `#FCFDFF`, dark `#252821`, gray `#D9D9D9`, colored tech badges, Ninja Van red `#ee464a`. Theme context supports light/dark presentation.
- `package.json`: React 18, react-scripts, styled-components, React Router; `npm start` for development, `npm run build` for build. Inspect current scripts before running them.
- `.github/workflows/main.yml`: pushes to main build and deploy to GitHub Pages. A merge is therefore also a production publishing action. `npm run deploy` is a separate publishing script and must also remain behind approval.

Older entries are not precedents for bypassing the user's new requirements: the YouTube downloader currently points to a repository, some professional cards have no button, and Shigaraki has both a case study and a deployed game. Apply the new destination rules to new additions without silently rewriting these existing entries.
