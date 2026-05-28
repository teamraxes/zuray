---
name: zuray-design
description: Use this skill to generate well-branded interfaces and assets for ZURAY (ООО «ЗУРАЙ», zuray.ru) — a Russian manufacturer of cat furniture (домики, комплексы, когтеточки, сменные элементы). Either production code or throwaway prototypes / mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. The system is editorial-magazine in spirit: warm cream surfaces, deep forest-green brand color, terracotta accents, Playfair Display variable display + Manrope body (both self-hosted, Cyrillic), asymmetric layouts, photography-led — never premium-cold, never generic SaaS.
user-invocable: true
---

# ZURAY Design System — Skill

Read the **README.md** file within this skill first — it contains the full brand context, voice & tone, visual foundations, iconography, and forbidden patterns. Then explore the other available files:

- `colors_and_type.css` — single source of truth for tokens (colors, type, spacing, radii, shadows, motion). Import in any HTML/JSX file you build.
- `assets/logo/` — ZURAY wordmark in two flavours (filled green + currentColor).
- `assets/products/` — ~25 real production photographs and infographic references.
- `preview/` — the rendered design-system cards (color swatches, type specimens, components). Useful examples of how tokens compose.
- `ui_kits/zuray-web/` — Full UI kit recreating the homepage, catalogue and product page as a click-through HTML/JSX prototype. Look here for component patterns (Header, Hero, ProductCard, FilterSidebar, FloatingCTA, etc).

## Rules of the road

1. **Always import `colors_and_type.css` first.** Never invent new colors or font stacks.
2. **Background is `var(--surface)` `#FAF7F0`**, never pure white. Cards on `var(--surface-2)` `#F2EDDF`.
3. **Display type is Playfair Display** (substituted for Fraunces — Fraunces has no Cyrillic), body is **Manrope**. Both self-hosted in `fonts/`. Drive weight via `font-weight` / `font-variation-settings: 'wght' …` — 400 hero, 500–600 headings, 700 emphasis. Italic for accent words.
4. **Asymmetric layouts** — hero is `7+5` or `8+4`, never centered. Centered hero is a forbidden trope.
5. **Photography carries the brand**, not gradients or illustrations. No gradient backgrounds anywhere.
6. **Sale price `#EB0000` is functional only** — never decorative.
7. **Russian copy with «ёлочки», em-dash with thin spaces, vy not ty, sentence case, no emoji.**
8. **Lucide icons** via CDN, `data-lucide="..."`. 1.75 stroke at UI sizes.
9. **Focus rings non-negotiable** — every interactive gets `outline: 2px solid var(--brand)`.

## How to act when invoked

- **If working on production code** — copy `colors_and_type.css` and `assets/` out and read the rules above to become an expert in designing with this brand. Reference `ui_kits/zuray-web/` for component shape.
- **If creating visual artifacts** (slides, mocks, throwaway prototypes) — copy assets out and create static HTML files for the user to view. Wire `colors_and_type.css` in via `<link>` or inline.
- **If the user invokes this skill without any other guidance**, ask them what they want to build or design (catalogue page? product landing? wholesale form? presentation deck?), ask a few clarifying questions (target audience: B2C / B2B / both? specific products? variations wanted?), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Things to refuse / push back on

- "Make it premium" → ZURAY is **craft, not premium**. Push back with editorial / workshop framing instead.
- "Add a gradient hero" → forbidden. Suggest a 7+5 asymmetric photo hero instead.
- "Use Inter / Roboto" → forbidden. Use Manrope.
- "Add emoji icons" → forbidden. Use Lucide or photography.
