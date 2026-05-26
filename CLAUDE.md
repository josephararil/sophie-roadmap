# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repo.

## Project Overview

A static two-tab React PWA — a developmental roadmap guide and daily activity companion for Sophie (bilingual English/Bulgarian child, ages 2–11), built for a parent/caregiver audience. No build tooling: React and Babel are loaded via CDN (unpkg), so the project runs directly as-is. Fully installable and offline-capable via a service worker.

## Running the App

There is no build step, everything is built by Github Pages/Actions, entirely for personal use. Open `index.html` in a browser or serve it via any local HTTP server:

```powershell
# Python
python -m http.server 8080

# Node (if http-server is installed globally)
http-server . -p 8080
```

**Note:** The service worker only activates when served over HTTP (or HTTPS). Opening `index.html` directly as a `file://` URL will work for the app itself but the PWA/offline features will not activate.

No package manager, no `npm install`, no compilation needed.

## Architecture

Seven files make up the entire app:

| File | Purpose |
|---|---|
| `index.html` | Entry point; embeds all CSS (~1 500 lines), loads CDN scripts, registers service worker |
| `data.js` | Exports `window.ROADMAP_DATA` — array of 10 age objects (ages 2–11). **Fully self-documenting** — read the schema block at the top before editing. |
| `actions.js` | Exports `window.ACTIONS_DATA` — catalogue of bite-sized daily activities. **Fully self-documenting** — read the schema block at the top before editing. Do NOT modify item `id` values (used as localStorage keys). |
| `app.jsx` | Root `App` component, `TopBar`, `WelcomeOverlay`; manages active-tab state and current-age state via localStorage |
| `components.jsx` | All reusable UI components — Roadmap tab components + all Action tab components |
| `sw.js` | Service worker — cache-first strategy, pre-caches all local assets on install |
| `manifest.json` | PWA manifest — app name, theme colours, icon references |

**Data flow:**
- `data.js` → `app.jsx` reads `window.ROADMAP_DATA` → passes age objects to Roadmap tab components
- `actions.js` → `ActionTab` reads `window.ACTIONS_DATA` → selection algorithm picks cards

**State persistence:** A custom `useLocalStorageState` hook (in `components.jsx`) is used throughout. See the full localStorage key inventory below.

## Two-Tab Structure

The app renders a bottom tab bar (`BottomTabBar`) that switches between:

- **Today tab** (`activeTab === 'action'`, default) — daily activity companion; one hero card + 3 secondary cards chosen by the selection algorithm; settings sheet, browse list, and Gemini integration
- **Roadmap tab** (`activeTab === 'roadmap'`) — long-term reference; age tabs, milestones, habits, monthly plans, red flags — the original app, unchanged

### Data shapes

**`ROADMAP_DATA`** — each age object (full schema in `data.js`):
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

**`ACTIONS_DATA`** — top-level shape (full schema in `actions.js`):
```js
{
  categories: [{ id, label, icon, blurb }],
  items: [ActionItem]
}
```

Each `ActionItem` has: `id`, `category`, `ages`, `title`, `hook`, `body`, `examples`, `lyrics`, `duration`, `where`, `skillTags`, `milestoneRefs`, `literacyWeight`, `followUp`, `relatedIds`, and category-specific optional fields (`author`, `whyThisBook`, `discussionPrompts`, `dialogue`). See the full schema in `actions.js`.

Both data files are intentionally self-contained and self-documenting so they can be handed to an LLM for content generation without any other project context.

### Key components (components.jsx)

**Roadmap tab:**
- `AgeSection` — full page for one age; composes all sub-components
- `MilestoneTracker` — interactive checklist with SVG progress ring
- `QuickStartCard` — accordion guide (habits, activities, communication)
- `AgeTabs` — horizontal scrolling age selector
- `AlertBox` — red flags section

**Action tab:**
- `ActionTab` — main view; greeting strip, hero + secondary cards, browse link; manages done/rating/dailyOffset state
- `ActionCard` — renders one item in `hero` (full body/lyrics/dialogue/prompts) or `compact` (tap-to-expand) variant; action row: Tried it / 👍 / 👎 / Next / Ask Gemini
- `BottomTabBar` — two-segment fixed-bottom nav
- `SettingsSheet` — DOB input, Gemini key, GitHub token + Gist ID, cloud sync buttons, reset preferences
- `BrowseActions` — categorised list of all age-matched items; tap to open as hero card
- `GeminiPromptModal` — direct browser → Gemini Flash API call; renders 3 AI-suggested result cards

**Selection algorithm** (in `components.jsx`, `pickCard` function):
- Deterministic: same date + same state = same card (seeded RNG from `YYYY-MM-DD + dailyOffset + currentAge`)
- Scores items: `1 + literacyWeight × 1.5`, then `+3` per unchecked `milestoneRef` (gap targeting) or `-1` if already checked, then `+2` for 👍-rated items
- Filters: excludes 👎-rated items, items "Tried it" within 14 days, and `excludeIds`
- Secondary cards: one item from each of the first 3 non-hero categories in declaration order

Checked milestones are read directly from existing Roadmap localStorage keys (`sophie.milestones.*`) — no state hoisting needed.

## localStorage Keys

| Key | Type | Purpose |
|---|---|---|
| `sophie.currentAge` | number (index) | Selected age tab index in the Roadmap (manual navigation) |
| `sophie.dob` | string (`YYYY-MM-DD`) | Sophie's date of birth — source of truth for age in the Today tab |
| `sophie.welcomed` | boolean | Whether the welcome overlay has been dismissed |
| `sophie.activeTab` | `'action'` \| `'roadmap'` | Last-used tab (defaults to `'action'`) |
| `sophie.habits.<ageKey>` | `{[i]: bool}` | Checked habits per age |
| `sophie.milestones.<ageKey>` | `{[i]: bool}` | Checked milestones per age |
| `sophie.action.done.<id>` | ISO timestamp | "Tried it" timestamp (14-day cooldown) |
| `sophie.action.rating.<id>` | `1` \| `-1` | 👍 / 👎 rating |
| `sophie.action.dailyOffset.<YYYY-MM-DD>` | number | "Next suggestion" counter per day |
| `sophie.gemini.key` | string | User-provided Gemini API key — **never synced to cloud** |
| `sophie.github.token` | string | GitHub personal access token (gist scope) — **never synced to cloud** |
| `sophie.github.gistId` | string | GitHub Gist ID for cloud sync — synced |

## Age Derivation

`sophie.dob` is the primary source of truth for Sophie's age. `calcAgeFromDob(dobStr)` (exported to `window`) returns `{ years, months, days }`.

- `app.jsx` derives `currentAgeYears` from DOB, clamped to the data range (2–11), and passes it to `ActionTab` as the integer age used for activity filtering.
- When DOB changes, a `useEffect` in `app.jsx` also snaps the Roadmap tab's `sophie.currentAge` index to the matching age section.
- If no DOB is set, the app falls back to the integer age from `sophie.currentAge`.

## Dynamic Greeting

`buildGreeting(sophieDob, currentAge)` in `components.jsx` produces the Today tab header text:

- **Birthday:** `Happy birthday — Sophie turns N today`
- **Fri/Sat/Sun:** `Happy Friday/Saturday/Sunday — Sophie is Ny Nm old`
- **Other days:** `Good morning/afternoon/evening — Sophie is Ny Nm old`
- **No DOB set:** `Good morning/afternoon/evening — Sophie is N years old`

## PWA / Service Worker

- **Pre-cached on install:** all local files (`index.html`, `app.jsx`, `components.jsx`, `data.js`, `actions.js`, `manifest.json`, `icon.svg`, all `assets/*.png`)
- **Lazily cached on first fetch:** CDN scripts (React, Babel) and Google Fonts
- **Cache version:** `CACHE_VERSION = 'v4'` at the top of `sw.js`

**When to bump the cache version:** Any time you update `data.js`, `actions.js`, `app.jsx`, `components.jsx`, or any asset file, increment `CACHE_VERSION` in `sw.js`. This forces the service worker to activate a new cache and delete the old one.

```js
// sw.js, line 1
const CACHE_VERSION = 'v4';  // bump on every content update
```

## Styling

All CSS lives in `<style>` tags inside `index.html`. Design tokens are defined as CSS custom properties at `:root` (13 variables for colours, fonts, spacing, radius). **Do not add new tokens to `:root`** — use the existing variables. Fonts: Merriweather (serif) + Inter (sans) via Google Fonts. The app container is max-width 480px (mobile-first).

## Gemini Integration

The Action tab supports optional AI-generated activity suggestions via the Gemini Flash API. The call is made directly from the browser using a key the user pastes into the Settings sheet.

- Key is stored in localStorage under `sophie.gemini.key` and **never leaves the device** (excluded from cloud sync).
- API call uses `POST https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent` with the key in the `X-goog-api-key` header (not a query param).
- If no key is set, the "Ask Gemini" button opens the Settings sheet instead.
- All Gemini results are ephemeral — never persisted to `ACTIONS_DATA`.
- The key is shown in plain text in settings (personal-only app, never used in production).

## Cloud Sync (GitHub Gist)

Settings can be manually backed up to and restored from a private GitHub Gist. This is entirely opt-in and user-triggered — the app never syncs automatically.

**How it works:**
- `pushToGist(token, gistId)` — serialises all `sophie.*` localStorage keys (except the exclusion list) as JSON and POSTs (new) or PATCHes (existing) a gist named `sophie-roadmap.json`. Returns the gist ID (saved automatically on first create).
- `pullFromGist(gistId)` — GETs the gist, parses `sophie-roadmap.json`, and writes all keys back to localStorage, then reloads the page.

**Exclusion list (`SYNC_EXCLUDE`):** `sophie.gemini.key` and `sophie.github.token` — credentials never leave the device.

**GitHub token requirements:** Personal access token with the `gist` scope only. Stored under `sophie.github.token` (excluded from sync). Token is shown in plain text in settings.

**Gist ID:** Stored under `sophie.github.gistId` (included in sync, so other devices can discover it). Leave blank the first time — the app creates a new private gist and saves the returned ID.

## No Linting or Tests

There is no test framework, no linter, and no TypeScript. Babel (standalone) transpiles JSX in the browser at runtime. British English spellings throughout (colour, recognise, favourite).
