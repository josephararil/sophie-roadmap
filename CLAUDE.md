# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static single-page React app — a developmental roadmap guide for children ages 2–11, built for a parent/caregiver audience. No build tooling: React and Babel are loaded via CDN (unpkg), so the project runs directly as-is.

## Running the App

There is no build step. Open `index.html` in a browser or serve it via any local HTTP server:

```powershell
# Python
python -m http.server 8080

# Node (if http-server is installed globally)
http-server . -p 8080
```

No package manager, no `npm install`, no compilation needed.

## Architecture

Four files make up the entire app:

| File | Purpose |
|---|---|
| `index.html` | Entry point; embeds all CSS (~930 lines), loads CDN scripts, mounts `<div id="root">` |
| `data.js` | Exports `window.ROADMAP_DATA` — array of 10 age objects (ages 2–11) |
| `app.jsx` | Root `App` component, `TopBar`, `WelcomeOverlay`; manages current-age state via localStorage |
| `components.jsx` | All reusable UI components |

**Data flow:** `data.js` → `app.jsx` reads `window.ROADMAP_DATA` → passes age objects down to components in `components.jsx`.

**State persistence:** A custom `useLocalStorageState` hook (in `components.jsx`) persists checked habits and milestones per age under the key `sophie.currentAge` (and per-item keys).

### Data shape

Each age object in `ROADMAP_DATA`:
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

### Key components (components.jsx)

- `AgeSection` — full page for one age; composes all sub-components
- `MilestoneTracker` — interactive checklist with SVG progress ring
- `QuickStartCard` — accordion guide (habits, activities, communication)
- `AgeTabs` — horizontal scrolling age selector
- `AlertBox` — red flags section

## Styling

All CSS lives in `<style>` tags inside `index.html`. Design tokens are defined as CSS custom properties at `:root` (13 variables for colors, fonts, spacing, radius). Fonts: Merriweather (serif) + Inter (sans) via Google Fonts. The app container is max-width 480px (mobile-first).

## No Linting or Tests

There is no test framework, no linter, and no TypeScript. Babel (standalone) transpiles JSX in the browser at runtime.
