# KiCad Workshop Website

This is a plain HTML/CSS/JavaScript workshop site designed to run directly on GitHub Pages.

## Structure

- `index.html` — homepage
- `styles.css` — shared styling for every page
- `script.js` — shared light/dark mode and active navigation logic
- `pages/` — one numbered HTML file per workshop lesson, matching the order and titles in `index.html`
- `assets/images/` — screenshots, diagrams and board renders
- `assets/downloads/` — KiCad starter files, PDFs, ZIPs, etc.

## Run locally

You can open `index.html` directly in a browser.

For more reliable iframe behaviour, run a simple local web server:

```bash
python3 -m http.server 8000
```

Then visit:

`http://localhost:8000`

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files and folders from this project.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select **main** and **/root**.
6. Save.

## YouTube embeds

Use an embed URL:

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Workshop video"
  allowfullscreen>
</iframe>
```

For a normal URL like:

`https://www.youtube.com/watch?v=abc123`

use:

`https://www.youtube.com/embed/abc123`

## Falstad embeds

Paste a Falstad share URL into the iframe's `src`.

```html
<iframe
  src="YOUR_FALSTAD_SHARE_LINK"
  title="Interactive Falstad circuit simulation">
</iframe>
```

It is also a good idea to include an ordinary link underneath as a fallback.

## Editing

Each workshop lesson is independent. For example:

- `pages/04-schematic.html` controls only the schematic page.
- `pages/05-symbols.html` controls the symbols and custom symbols lesson.
- `pages/08-board-outline-layers-routing.html` controls the board outlines, layers, and routing lesson.

Styling remains shared through `styles.css`.
