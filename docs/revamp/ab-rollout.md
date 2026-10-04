# Portfolio A/B rollout

The deployment includes both homepages. Visitors to `/` receive a random 50/50 assignment saved under `portfolio-design-v1` in localStorage. This identifies a browser, not a person. Existing project routes remain shared. Returning home renders the assigned design.

Preview either version without changing a visitor's saved assignment:

- `https://jasmineishere.github.io/?variant=old#/`
- `https://jasmineishere.github.io/?variant=sky#/`

Preview overrides persist through internal navigation and disappear when the query parameter is removed. Without browser storage, assignment remains stable during SPA navigation but may change after reloading.

Set `REACT_APP_SKY_PERCENT` when building to change the share of newly assigned visitors. Default: 50. Valid range: 0–100. Invalid values use 50. Existing assignments remain unchanged at intermediate percentages. Setting 0 forces all ordinary visitors to the original design; setting 100 forces all to the sky. Explicit preview overrides still take precedence. A rebuild and redeployment are required when changing the percentage. For example, `REACT_APP_SKY_PERCENT=0 npm run build` creates a rollback build.

Both endpoints preserve saved assignments, so switching back to 50 resumes the original groups. Change the experiment storage key if a new independent experiment is needed.

No analytics or third-party tracking added. This is a split rollout; comparison of engagement would require separately configured measurements.

The existing GitHub Actions workflow deploys main. Review the preview and approve publication before merging this branch to main. No production deployment is performed by implementing the split.
