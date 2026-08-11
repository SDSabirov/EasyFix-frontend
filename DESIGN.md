# EasyFix Design System — "Lively Modern Luxury"

Reference for the 2026-08 homepage redesign. Use this to extend the same language
to the rest of the site (see [Rollout TODO](#rollout-todo) at the bottom).

**Direction:** quiet luxury with energy. Bay Area owners of $15k Sub-Zero/Wolf
appliances — the site should feel like the appliance brands' own marketing:
cinematic, editorial, brass-accented. Motion everywhere, but restrained and
purposeful. Never: gradient blob decorations, shine-sweep buttons, rainbow
category colors, emoji checkmarks, fake forms.

---

## 1. Tokens

Defined in `tailwind.config.js` (`theme.extend`):

| Token | Value | Usage |
|---|---|---|
| `ink` | `#0A2333` | Dark sections, solid buttons, dark glass |
| `brass` | `#B08D57` | THE accent. Hairlines, diamonds, CTAs, active states |
| `brass-light` | `#C9AD7F` | Brass on dark backgrounds |
| `brass-dark` | `#8F7040` | Brass on light backgrounds (hover text) |
| `cream` | `#FAF7F1` | Warm light section background (alternates with white) |
| `primary` | `#0c2a3b` | Legacy navy — body headings on light |
| Hairline borders | `border-primary/10` (light) / `border-white/10` (dark) | |

**Fonts** (via `@nuxt/fonts` in `nuxt.config.ts` — metric-matched fallbacks, do NOT
switch back to @nuxtjs/google-fonts, it reintroduces font-swap CLS):

- `font-display` → **Cormorant Garamond** 500/600 (preloaded). Serif accent words, prices, big numerals, pull quotes.
- `font-montserrat` → **Montserrat** 400–700. Headlines, buttons, labels.
- `font-roboto` → **Roboto** 400–700. Body text (site default via `app.vue`).

---

## 2. Typography recipes

**Section headline** — bold tight sans + ONE italic serif accent phrase in brass:

```html
<h2 class="font-montserrat font-bold tracking-[-0.02em] text-3xl sm:text-5xl text-primary leading-[1.05]">
  Fair prices,
  <em class="font-display font-semibold italic text-brass-dark">exceptional service</em>
</h2>
<!-- dark sections: text-white + text-brass-light for the em -->
```

**Eyebrow chip** (above every section headline):

```html
<span class="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white px-4 py-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
  <span class="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true"></span>
  Section Label
</span>
<!-- bg-cream on white sections; dark: border-white/15 bg-white/5 text-brass-light -->
```

**Ghost word** (huge outlined serif word behind section header; section needs
`relative overflow-hidden`, content needs `relative z-10`):

```html
<span class="ghost-word text-[7rem] lg:text-[12rem] -top-6 -right-4" aria-hidden="true">Repairs</span>
<!-- dark sections: add ghost-word--light -->
```

**Small-caps label** (column titles, meta): `font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500` (dark: `text-white/40`).

**Brass diamond bullet** (replaces ✓/•): `<span class="w-1 h-1 rotate-45 bg-brass shrink-0" aria-hidden="true"></span>`

---

## 3. Buttons & links

All pills (`rounded-full`), Montserrat semibold, `hover:scale-[1.03]`:

- **Primary (light bg):** `rounded-full bg-ink text-white hover:bg-brass px-9 py-4 text-sm font-semibold uppercase tracking-[0.12em]`
- **Primary (dark bg):** `bg-white text-ink hover:bg-brass hover:text-white`
- **Brass CTA** (navbar Book Now): `bg-brass text-white hover:bg-brass-dark`
- **Outline:** `border border-white/30 text-white hover:border-brass hover:text-brass-light` (light: `border-ink/20 text-ink hover:border-brass hover:text-brass-dark`)
- **Arrow-circle text link:**

```html
<a class="group inline-flex items-center gap-3 font-montserrat text-[12px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-brass-dark transition-colors">
  Label
  <span class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white" aria-hidden="true">&rarr;</span>
</a>
<!-- Use &#8599; (↗) for external/card links -->
```

- Exception: the homepage HERO buttons are rectangular — user-approved, leave them.

---

## 4. Cards & surfaces

- Radii: cards `rounded-[1.5rem]`–`[1.75rem]`, big panels `rounded-[2rem]`.
- **Light card:** `bg-white border border-primary/5 shadow-sm` + hover `hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10` (500ms).
- **Image cards:** image in `overflow-hidden` container, `group-hover:scale-110 transition-transform duration-700 ease-out`; ↗ button slides up from bottom-right on hover.
- **Tinted category cards:** `#EDF4F7` (ice) / `#F8F0E4` (warm sand) / `#F3F1EC` (stone) with ghost numeral `01` + icon in white circle + pill service chips (`rounded-full bg-white/80 hover:bg-ink hover:text-white`).
- **Dark panel:** `grain glow-brass relative bg-ink rounded-[2rem]` + brass gradient hairline top: `<div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass to-transparent">`. Content needs `relative z-10` (grain is an ::after overlay).
- **Featured price card:** ink bg + grain/glow + brass price + `Most Booked` brass chip.
- **City/tag pills:** `rounded-full border border-primary/15 bg-white hover:bg-ink hover:text-white hover:scale-[1.05]`.

Section rhythm: `py-20 lg:py-28`, alternating `bg-cream` / `bg-white` / `bg-ink`.
Container: `container mx-auto px-4 max-w-screen-xl`.

---

## 5. Motion (global utilities in `app/assets/css/global.css`)

- **`v-reveal` directive** (`app/plugins/reveal.js`) — scroll entrance. `v-reveal` or `v-reveal="150"` (stagger ms; grids use `index * ~100`). Registered on server as no-op (`getSSRProps`) — REQUIRED, removing that causes SSR 500s. Classes `.rv`/`.rv-in`.
- **`.marquee` + `.marquee-track`** — infinite logo/text ticker; duplicate the list (2nd copy `aria-hidden="true"` + `tabindex="-1"`), `--marquee-speed`, pauses on hover, edge fade mask.
- **`.grain`** — film-grain ::after overlay for dark sections. **`.glow-brass`** — brass radial glow.
- **`.ghost-word` / `.ghost-word--light`** — outlined display type.
- **Count-up stats** — IntersectionObserver + rAF in `Landing/Stats.vue` (copy pattern from there).
- Rules: animate **transform/opacity only** (never layout properties); everything respects `prefers-reduced-motion` (handled in global.css + plugins).

---

## 6. Navbar & Footer (done — site-wide)

- **Navbar** (`components/Navbar.vue`): floating capsule `fixed top-3 inset-x-3`, `rounded-full`, backdrop-blur glass — dark (`bg-ink/35 border-white/15`) over home hero, white (`bg-white/85`) scrolled/elsewhere (`onDark` computed). Smart behavior: hides on scroll-down past 140px, reveals on scroll-up (`isHidden` → `-translate-y-[150%]`). Brass diamond `.nav-dot` = active link. Area links use underscore slugs (`/areas/san_mateo`).
- **Footer** (`components/Footer.vue`): ink + grain, brass hairline top, serif tagline, small-caps columns, circular social buttons. `Developed by sdsabirov ↗` → https://sdsabirov.com pinned bottom-right — user-requested, keep it.

---

## 7. Performance guardrails (hard-won — do not regress)

1. **Never animate above-fold content from `opacity: 0`** — content painted invisible is permanently excluded from LCP candidates (this once made the navbar logo the LCP element). Hero reveals start at `opacity: 0.35`.
2. Full-viewport images are excluded from LCP by Chrome — the hero H1 is the LCP element; keep it SSR'd, visible at first paint, in a preloaded font.
3. **Third-party scripts load ONLY on first user interaction** (`app/plugins/deferred-scripts.client.js` — no timer). GTM cascade = ~600KB.
4. Hero video: poster is the LCP surface; video mounts after `load` + idle, respects reduced-motion/save-data. Keep videos ≤ ~500KB (ffmpeg via `ffmpeg-static` devDep, CRF 26, no audio).
5. Below-fold homepage sections: `<LazyXxx hydrate-on-visible />`. Below-fold imgs: `loading="lazy" decoding="async"`; above-fold/LCP imgs: `loading="eager" fetchpriority="high"` + width/height.
6. New raster assets → run `node scripts/optimize-images.mjs` (WebP, max 1600px).
7. Unversioned public media gets cache headers via `routeRules` in nuxt.config — rename the file if content changes.
8. `.npmrc` `legacy-peer-deps=true` is required for Cloudflare Pages `npm clean-install` — do not delete.

## 8. SEO / agentic guardrails

- One `h1` per page; headings must descend sequentially (h2 → h3 → h4, no skips) — audited.
- `aria-label` only on elements that permit it (star ratings need `role="img"`); dropdown/accordion triggers carry `aria-expanded`; multiple `<nav>`s need distinct `aria-label`s; no `role="banner"` on sections.
- Keep keyword-rich h2 text when restyling (reword visually with the serif-accent split, don't delete phrases).
- Content must be SSR'd (fetch with `useAsyncData`, never onMounted-only). Site-wide LocalBusiness schema lives in `nuxt.config.ts` (`schemaOrg.identity`); FAQ page uses `useSchemaOrg` Questions; blogs emit BlogPosting.
- `public/llms.txt` — keep fresh (canonical non-www URLs) when pages/areas change.

---

## Rollout status — COMPLETE (2026-08-11)

All pages are on the new system: services (index/[slug]/all-brands), faq,
contact-us, areas (index/[slug] + GoogleMap chrome), `BrandLanding.vue`
(19 brand pages), the 8 promo pages + `components/Promotions/*` (legacy
`/brands/*` pages), blogs (index/[slug] + ReadingProgress/ShareButtons),
booking, careers (+ confirmation pages), repair-vs-replace (+ calculator),
ContactButton, `Forms/*`, Booking pickers/steps, `Modals/Privacy.vue`.
`Breadcrumb.vue` (restyled, `dark` prop, BreadcrumbList schema with
`schema=false` opt-out) is wired into all main inner pages + BrandLanding.

Known leftovers, deliberately untouched because NO page renders them:
`Landing/Faq.vue`, `Landing/Services_old.vue`, `Landing/ApplianceTypes.vue`,
`Services/{SectionHeader,SectionCTA,ApplianceTypes,CookingAppliance,CoolingAppliance,LaundryAppliance}.vue`
— still old-design; restyle or delete if they ever get used again.
Unused per-brand fields in `app/data/brands_data.js` (`heroGradient`,
`primaryColor`, `accentColor`, `darkBg`) remain in data but are ignored.

Per-page checklist (for future pages): eyebrow chip → serif-accent headline
→ ghost word → hairline/card surfaces → pill CTAs → `v-reveal` staggers →
keep h1/h2 keywords → verify heading order → `npm run build` passes.
