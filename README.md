# Offline Soil Analyzer Prototype

This repository contains a simple offline soil sample analyzer web prototype, running a small language model entirely in-browser.

## Files
- `index.html`: Main HTML page with manual entry and file upload UI.
- `app.js`: JS code for loading the SLM, parsing uploaded reports (TXT/CSV/PDF), and running inference.
- `.nojekyll`: Prevents GitHub Pages from using Jekyll, which can break JS projects.

## How to Deploy with GitHub Pages

1. Push this project to a new GitHub repository.
2. Go to the repository settings → Pages section.
3. Set the source to the `main` branch and root folder (`/`).
4. Access your site at `https://<username>.github.io/<repo-name>/`.

The site supports offline mode and allows analyzing soil data via file upload or manual entry.
