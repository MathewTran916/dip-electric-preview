# Dip Electric mockup — build source

Throwaway KC-Blinds-style discovery mockup. ON HOLD pending real assets
(Mike & Si hero photo, real panel before/after pairs, finished-work photos,
real logo + brand colors). See CLAUDE.md section 11 in the private `dipelectric` repo.

## Rebuild
    cd src
    node build.js
Produces:
- `dip-electric-mockup.html` (Artifact/standalone-body version)
- `site/index.html` (full standalone doc, noindex) -> copy to repo root `index.html` and push to redeploy Pages.

Assets are CC0 StockSnap (images) and OFL Google Fonts Inter + Playfair Display (embedded as base64).
Palette/type/structure copied from kcblinds.com. Do NOT swap to a generic template.
