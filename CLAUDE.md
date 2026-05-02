# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the JavaScript layer for the Scaler marketing site. The HTML/CSS lives in Webflow; this repo bundles per-page JS that is loaded into the Webflow site (typically via `<script>` tags pointing at the built files in `dist/`). Markup, classes, and `data-*` attributes are authored in Webflow — this code reads them and drives the animation/interaction.

## Commands

```bash
npm start      # Parcel dev server with HMR on port 50619 (clears .parcel-cache first)
npm run build  # Production build of every src/*.js entry into dist/
```

There are no tests, lints, or typecheck steps configured.

## Build System

Parcel multi-entry build: every top-level file matching `src/*.js` becomes its own bundle in `dist/` with the same filename. Subdirectories (`src/home/`, `src/services/`, `src/modules/`) are not entry points — they are imported by the top-level files.

`package.json` declares `gsap`, `split-type`, and `lenis` as `global` aliases. This means **`import` statements for these libraries do not bundle the library** — they resolve to the global `window.gsap`, `window.SplitType`, `window.lenis` provided by external `<script>` tags on the Webflow page. The same applies to other libraries used without imports: `ScrollTrigger`, `SplitText` (the GSAP plugin, not `split-type`), `Swiper`, and Finsweet's `window.fsAttributes` are all assumed to be loaded globally before our bundles run.

Practical consequence: when adding a new library, decide whether to bundle it (regular npm install + import) or to expect it as a global (add to the `alias` map in `package.json` and load via Webflow). Don't add `import { gsap } from "gsap"` and expect it to work — `gsap` is referenced bare, as a global.

## Entry Points and Page Mapping

Each page in Webflow loads exactly one of these per-page bundles plus any always-on globals:

- `src/home.js` → home page (composes modules from `src/home/`)
- `src/services.js` → services page (uses `src/services/heroSlider.js` plus shared modules)
- `src/about.js`, `src/whyWebflow.js`, `src/caseStudies.js` → page-specific bundles, mostly self-contained IIFE-style code
- `src/globals.js` → shared across all pages (menu, loading transitions, stagger animations, image masks, video-on-scroll, contact form UI)
- `src/accordions.js`, `src/testimonials.js`, `src/newsSlider.js`, `src/scrubImageSequence.js` → optional per-section bundles included only on pages that use them
- `src/cf-form-handler0.0.4.js` → standalone Cloudflare Worker form-handler script (intercepts `form[cf-form]`, posts to `https://scaler-marketing-forms.revolv3.workers.dev/`). Versioned in the filename — bump the version on changes (don't overwrite the previous file in `dist/`) so cached older pages keep working.
- `src/cf-traffic-gating-0.0.1.js` → standalone Turnstile bot-gating script that fires a `turnstile_passed` GTM dataLayer event after verification via `verify.scalermarketing.com`. Same versioning convention.

When adding a new page bundle, just drop a new `src/foo.js`; Parcel will pick it up automatically.

## Module System

`src/modules/` holds reusable, DOM-attribute-driven utilities that page entries compose:

- `staggerText.js` — splits `[stagger-text]` elements into lines via GSAP `SplitText`, animates them on scroll. Reads `data-start-pos`, `data-end-pos`, `data-stagger`, `data-delay`, `data-with-scroll`. Special-cases `.w-richtext` (Webflow rich text) by splitting `p, li, h2, h3` instead of the wrapper.
- `staggerElements.js` — same idea but for arbitrary children (`[stagger-list]` containers + `[stagger-el]` items).
- `setImageMasks.js` — clip-path reveal on `[image-mask]` images, value selects direction (`top`/`bottom`/`left`/`right`/`center`). Uses an IntersectionObserver and waits for `img.complete`/`load`.
- `setLoadingStates.js` — runs the `.loading` overlay in/out animation, and intercepts same-origin `<a>` clicks to play the out-transition before navigating. Also re-triggers on `pageshow` (bfcache) and `popstate`.
- `menu.js` — full-screen menu open/close, with hover-driven image swapping keyed on `data-item`.
- `formSubmit.js` — `initFormSubmit` proxies a custom `.button.is-submit` click to Webflow's hidden `.form_submit` and swaps the label text to `data-wait`. `initContactFormUi` runs the modal-style contact form open/close animation.
- `playVideoOnScroll.js` — plays/pauses `video.bg-video` based on ScrollTrigger; reads `data-start`, `data-pause-outside`, `data-rewind`, `data-loop`.
- `bulletLists.js` — wraps `<li>` text and adds a `.list-item-line` decoration, animates them in.
- `wrapWithElement.js`, `setLinesWrapper.js` — small DOM helpers used by the above.

`src/home/` and `src/services/` contain page-specific composites (e.g. `heroSequence.js` is the home hero intro timeline; `caseStudiesSlider.js` is the home case-study carousel with mask/clip-path transitions).

## Conventions

- **Animation library is GSAP**, used everywhere via the global. Common plugins: `ScrollTrigger`, `SplitText`, `gsap.matchMedia()`, `gsap.timeline()`. There's no Lenis init in this repo even though it's aliased — assume Webflow includes it.
- **Mobile breakpoint is 768px**, applied via `gsap.matchMedia()` with `(min-width: 768px)` / `(max-width: 767px)` queries (see `scrubImageSequence.js`, `caseStudiesSlider.js`, `testimonials.js` (in `dist/`)). Keep that breakpoint when adding responsive logic.
- **Initialization timing varies by need:** DOM-ready (`DOMContentLoaded`) for layout-only setup, `document.fonts.ready.then(...)` whenever `SplitText` is involved (text measurements depend on fonts), and IIFE-at-bottom-of-file for self-contained per-page scripts.
- **Functions that target optional sections must early-return on missing elements.** Most entries here run on every page they're loaded on, even pages that don't have the relevant markup, so guard with `if (!el) return;`.
- **Element selection is attribute-driven.** Animations key off `data-*` attributes and bracket-notation classes (`[stagger-text]`, `[scrub-wrapper]`, `[image-mask]`, `[count-number]`, `[data-hero-headline]`, `[data-slider-stagger]`, `data-project`, `data-item`, etc.) rather than tag/class names. When changing an animation, check what attributes it expects — those attributes are set in Webflow.
- **Finsweet CMS pagination integration:** `caseStudies.js` pushes a `cmsload` callback onto `window.fsAttributes` to re-run animation init on dynamically rendered items.
- **Heavy commented-out code is normal** in this repo — animation prototypes are kept as reference. Don't bulk-delete them unless that's the explicit task.

## Versioned Standalone Scripts

`cf-form-handler0.0.X.js` and `cf-traffic-gating-0.0.X.js` are deployed as separate URLs and referenced from Webflow by version. When changing them:

1. Copy to a new filename with a bumped version (`0.0.4` → `0.0.5`).
2. Edit the new file.
3. Build, then update the Webflow `<script>` src to point at the new version.

This is why both old and new versions coexist in `dist/`. Don't rename the existing file in place.
