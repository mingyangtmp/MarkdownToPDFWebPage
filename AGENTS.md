# Repository Notes

## App Store Promo Asset Workflow

Promo source files live in `app-store-assets/`. Keep the editable HTML artboard
and the rendered PNG together so future updates can be made from source instead
of editing screenshots.

1. Create one standalone HTML artboard per promo concept in `app-store-assets/`.
   Use inline CSS, fixed `html`/`body`/`.artboard` dimensions of `2880px` by
   `1800px`, `overflow: hidden`, and local assets only.
2. Use the existing visual system: `../pictures/app-icon.png` for the brand,
   existing app screenshots from `pictures/`, soft light backgrounds, restrained
   blue/teal/warm accents, and large readable copy sized for Mac App Store
   preview images.
3. Render the HTML at exactly `2880x1800` and save the output as
   `app-store-assets/mac-app-store-<feature>-promo-2880x1800.png`. Browser
   automation or Playwright screenshot capture is preferred; use a viewport of
   `2880,1800` and device scale factor `1`.
4. For code-block promos, keep the extra source crop
   `pictures/python_code_block.png` because `app-store-assets/code-block-promo.html`
   references it directly.
5. For table-corner-radius promos, keep the Markdown sample, PDF exports,
   full-page PNGs, and crop PNGs together in `app-store-assets/`. The promo HTML
   references the rectangle and rounded crop files to show the before/after.
6. Before committing, verify that every `mac-app-store-*-promo-2880x1800.png`
   is `2880 x 1800`, that every HTML image reference resolves locally, and that
   the generated PNG still matches the HTML source.

For localized promo screenshots, run:

```sh
node app-store-assets/render-localized-promos.mjs
```

The script uses its configured English HTML artboards as layout sources, injects
localized copy at render time, and captures PNGs with headless Chrome. By
default it renders Simplified Chinese, Traditional Chinese, Japanese, Korean,
German, French, Italian, Portuguese, Spanish (Spain), and Spanish (Mexico).
Localized outputs are grouped by Chinese language directory names using the path
pattern
`app-store-assets/localized/<Chinese language directory>/mac-app-store-<feature>-promo-2880x1800.png`,
while the existing English outputs keep the unsuffixed root-level names.

Useful variants:

- `node app-store-assets/render-localized-promos.mjs --lang=ja,ko`
- `node app-store-assets/render-localized-promos.mjs --lang=es-ES,es-MX`
- `node app-store-assets/render-localized-promos.mjs --promo=code-block`
- `node app-store-assets/render-localized-promos.mjs --include-en`

Current promo set:

- `auto-toc-promo.html` ->
  `mac-app-store-auto-toc-promo-2880x1800.png`
- `batch-history-promo.html` ->
  `mac-app-store-batch-history-promo-2880x1800.png`
- `code-block-promo.html` ->
  `mac-app-store-code-block-promo-2880x1800.png`
- `data-formula-promo.html` ->
  `mac-app-store-data-formula-promo-2880x1800.png`
- `export-profiles-promo.html` ->
  `mac-app-store-export-profiles-promo-2880x1800.png`
- `header-footer-promo.html` ->
  `mac-app-store-header-footer-promo-2880x1800.png`
- `mermaid-diagram-promo.html` ->
  `mac-app-store-mermaid-diagram-promo-2880x1800.png`
- `table-corner-radius-promo.html` ->
  `mac-app-store-table-corner-radius-promo-2880x1800.png`
