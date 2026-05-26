# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static single-page React app — a developmental roadmap guide for children ages 2–11, built for a parent/caregiver audience. No build tooling: React and Babel are loaded via CDN (unpkg), so the project runs directly as-is. The app is also a PWA: installable and fully offline-capable via a service worker.

## Running the App

There is no build step. Open `index.html` in a browser or serve it via any local HTTP server:

```powershell
# Python
python -m http.server 8080

# Node (if http-server is installed globally)
http-server . -p 8080
```

**Note:** The service worker only activates when served over HTTP (or HTTPS). Opening `index.html` directly as a `file://` URL will work for the app itself but the PWA/offline features will not activate.

No package manager, no `npm install`, no compilation needed.

## Architecture

Six files make up the entire app:

| File | Purpose |
|---|---|
| `index.html` | Entry point; embeds all CSS (~930 lines), loads CDN scripts, registers service worker |
| `data.js` | Exports `window.ROADMAP_DATA` — array of 10 age objects (ages 2–11). **Fully self-documenting** — read the schema block at the top before editing. |
| `app.jsx` | Root `App` component, `TopBar`, `WelcomeOverlay`; manages current-age state via localStorage |
| `components.jsx` | All reusable UI components |
| `sw.js` | Service worker — cache-first strategy, pre-caches all local assets on install |
| `manifest.json` | PWA manifest — app name, theme colours, icon references |

**Data flow:** `data.js` → `app.jsx` reads `window.ROADMAP_DATA` → passes age objects down to components in `components.jsx`.

**State persistence:** A custom `useLocalStorageState` hook (in `components.jsx`) persists checked habits and milestones per age under the key `sophie.currentAge` (and per-item keys).

### Data shape

Each age object in `ROADMAP_DATA` (full schema documented inside `data.js`):
```js
{
  age, months, part, partNumber, image,
  overview,
  sections: { habits, activities, communication },
  monthlyPlans: [{ range, title, intro, items }],
  milestonesBy, milestones: [],
  redFlags: []
}
```

`data.js` is intentionally self-contained and self-documenting so it can be handed to any LLM for content generation without providing any other project context. The top of the file contains a full schema block and Sophie's context (bilingual English/Bulgarian child, Bulgarian-only schooling, English literacy goals).

### Key components (components.jsx)

- `AgeSection` — full page for one age; composes all sub-components
- `MilestoneTracker` — interactive checklist with SVG progress ring
- `QuickStartCard` — accordion guide (habits, activities, communication)
- `AgeTabs` — horizontal scrolling age selector
- `AlertBox` — red flags section (rendered when `age.redFlags` is non-null)

## PWA / Service Worker

- **Pre-cached on install:** all local files (`index.html`, `app.jsx`, `components.jsx`, `data.js`, `manifest.json`, `icon.svg`, all `assets/*.png`)
- **Lazily cached on first fetch:** CDN scripts (React, Babel) and Google Fonts — cached on first network access, served from cache on subsequent visits and offline
- **Cache version:** defined at the top of `sw.js` as `CACHE_VERSION = 'v1'`

**When to bump the cache version:** Any time you update `data.js`, `app.jsx`, `components.jsx`, or any asset file, increment `CACHE_VERSION` in `sw.js` (e.g., `'v2'`). This causes the service worker to activate a new cache and delete the old one, ensuring users get the updated content.

```js
// sw.js, line 1
const CACHE_VERSION = 'v2';  // bump this on every content update
```

## Styling

All CSS lives in `<style>` tags inside `index.html`. Design tokens are defined as CSS custom properties at `:root` (13 variables for colors, fonts, spacing, radius). Fonts: Merriweather (serif) + Inter (sans) via Google Fonts. The app container is max-width 480px (mobile-first).

## No Linting or Tests

There is no test framework, no linter, and no TypeScript. Babel (standalone) transpiles JSX in the browser at runtime.
