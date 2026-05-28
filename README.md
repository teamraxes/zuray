# ZURAY — Design System

**Variant A · Editorial Production-Craft**

A custom design system for **ООО «ЗУРАЙ»** (zuray.ru), a Russian manufacturer of cat furniture — cat houses (домики), complexes (игровые комплексы), scratching posts (когтеточки) and replaceable elements (сменные элементы).

> ZURAY is **not** an internet shop. It's a workshop that publishes a catalogue. The site should read like an editorial magazine produced by craftspeople — sophisticated, warm, photo-led, type-driven. Visual reference anchor: **mie.ru**.

---

## Brand at a glance

| | |
|---|---|
| **Legal** | ООО «ЗУРАЙ» / Линар Бабаевский |
| **Domain** | zuray.ru |
| **Niche** | Производство кошачьей мебели — домики, комплексы, когтеточки, сменные элементы |
| **Positioning** | Производственная компания с опытом и инновациями — **не «просто интернет-магазин»** |
| **Audience** | B2C (владельцы кошек, primary) · B2B опт (secondary) · Кастом-комплексы под заказ |
| **Geo** | Russia |
| **Year founded** | 2018 |
| **Brand color** | `#1A7425` deep forest green |
| **Voice** | Дружелюбный, тёплый, заботливый, округлый, узнаваемый |
| **Voice — NOT** | Премиально-холодный · Шаблонный WP · Generic SaaS · Кричащий |

---

## Products represented in the uploads

Inspected uploads reveal the following product taxonomy:

1. **Игровые комплексы** — multi-tier "trees" with platforms, scratching columns, houses, hammocks, dangling pom-pom toys. Lines seen: «Алтай» (jute-wrapped, beige/cream), «Светлый» (carpet-style grey), «Лайт» (entry-level: post + house cube), «Комфорт-Сити» (large complex).
2. **Домики (cat houses)** — cube/arch boxes with plush exterior.
3. **Когтеточки (scratching posts)** — single column or column + base.
4. **Сменные элементы** — replaceable jute/carpet column sleeves, platforms, hammocks.
5. **Custom complexes on order** — bespoke configurations.

Materials seen across photography: **jute rope wraps** (signature warm tan), **carpet (ковролин)**, **plush (мех)** in cream / beige / grey. The visual world is **warm neutrals + natural fibre** — this informs the design system palette.

---

## Sources

| Source | Notes |
|---|---|
| **Brief** | Custom DS brief — Variant A (Editorial Production-Craft) — supplied in prompt |
| **Logo** | `assets/logo/zuray-logo.svg` (filled `#1A7425`) and `assets/logo/zuray-logo-currentcolor.svg` (currentColor, recolorable) — wordmark ZURAY, geometric sans with subtle serif-like cuts in Z, R, Y |
| **Product photography** | ~40 uploaded `.png` images of finished products, on neutral backdrops and in-room scenes — copied to `assets/products/` |
| **Marketing infographics** | Two ChatGPT-generated infographic compositions (dimensions + feature callouts) — `assets/products/infographic-*.png` |
| **Product video** | 4 `.mp4` clips of the «2014» complex (not embedded in DS but available in `uploads/`) |
| **Reference** | UX pattern reference: pet.b-mf.ru (sticky footer-menu); mie.ru (editorial tone); apple.com/iphone-* (forward extensibility — product landings) |
| **Tariff** | premium · `multi_page_separate` + custom DS |
| **Pages** | `/`, `/catalog`, `/catalog/[category]`, `/product/[slug]`, `/cart`, `/checkout`, `/about`, `/wholesale`, `/delivery`, `/tour`, `/contacts` |

The .xcf file (`uploads/1.xcf`) is a GIMP source and was not opened — flagged below in **Caveats**.

---

## Index

```
ZURAY DS/
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest (Claude Code compatible)
├── colors_and_type.css        ← Single source of truth for design tokens
├── assets/
│   ├── logo/                  ← ZURAY wordmark (fixed + currentColor)
│   └── products/              ← Production photography + infographic refs
├── preview/                   ← Cards rendered in the Design System tab
│   ├── colors-*.html          ← Palette swatches
│   ├── type-*.html            ← Typography specimens
│   ├── spacing-*.html         ← Radii / shadow / spacing tokens
│   ├── components-*.html      ← Buttons, chips, inputs, tags, badges
│   └── brand-*.html           ← Logo, photography motifs, iconography
└── ui_kits/
    └── zuray-web/             ← Website UI kit (Next.js-flavoured, JSX/HTML)
        ├── README.md
        ├── index.html         ← Interactive homepage prototype
        └── *.jsx              ← Components: Header, Hero, ProductCard, …
```

---

## CONTENT FUNDAMENTALS

### Voice & tone

ZURAY's voice is the **mastera (master craftsperson)** speaking warmly to a fellow cat-lover. It is:

- **Дружелюбный без панибратства** — friendly, but not over-familiar. Use «вы», never «ты».
- **Тёплый, заботливый** — caring. Speak about cats by name and behaviour, not as units.
- **Производственный, не магазинный** — production-led, not shop-led. We **make**, we don't **sell**.
- **Округлый, узнаваемый** — soft edges in language. Avoid clipped corporate phrasing.

### Avoid

- ❌ Премиально-холодный («эксклюзивно», «премиум-сегмент»)
- ❌ Шаблонный WP («наша компания предлагает широкий ассортимент…»)
- ❌ Generic SaaS («unlock», «discover», «experience the new…»)
- ❌ Кричащий («СУПЕРСКИДКА!!!», all-caps marketing)
- ❌ Emoji (the brand does not use them — emotion comes from photography and type)
- ❌ Lorem ipsum, ever

### Casing & punctuation

- **Sentence case** for headings and buttons: «Смотреть каталог», not «Смотреть Каталог».
- **Eyebrows** above section openers are uppercase Manrope 600 12px with tracking `+0.12em`: `ПРОИЗВОДСТВО · РОССИЯ · 2018`.
- **Russian quotation marks** — «ёлочки» for outer, „лапки" for inner.
- **Em-dash** «—» with non-breaking spaces around it, not a hyphen.
- **Numbers**: thin space as thousands separator (₽12 900). Currency symbol after number with a space.

### Pronoun usage

- We say **«мы»** when referring to the workshop: «мы шьём чехлы», «мы режем фанеру».
- We address the reader as **«вы»**: «выберите высоту», «расскажите про вашу кошку».
- The cat is the protagonist: name behaviours («любит лазать», «прячется») rather than features.

### Examples (real, drawn from brief and product range)

**Hero headline**
> «Кошачья мебель, собранная руками»

**Hero sub**
> «Производим домики, комплексы и когтеточки с 2018 года. Каждое изделие проходит через руки мастера, а не через конвейер.»

**Eyebrow**
> «ПРОИЗВОДСТВО · РОССИЯ · 2018»

**Product name**
> «Комплекс „Алтай", 165 см, обмотка — джут»

**Feature tag (in product card)**
> «Подходит для крупных кошек» · «Не шатается при прыжках» · «Собирается за 10 минут»

**CTAs**
- Primary: «В корзину», «Смотреть каталог», «Подобрать комплекс»
- Secondary: «Экскурсия на производство», «Купить в 1 клик», «Заказать обратный звонок»

**Stock label**
> «В наличии · отправим завтра»

**Error**
> «Что-то пошло не так. Попробуйте ещё раз или напишите нам в Telegram.»

---

## VISUAL FOUNDATIONS

### Color

A warm, low-saturation magazine palette. **No pure white anywhere** — the page background is `#FAF7F0` cream. Brand green and terracotta carry meaning; everything else is neutral.

- **Brand** `#1A7425` deep forest green — CTAs, active states, logo, "в наличии"
- **Brand-ink** `#0F4419` — hover, dense headings
- **Surface** `#FAF7F0` — page background (warm magazine cream)
- **Surface-2** `#F2EDDF` — cards, raised panels
- **Text** `#1A1410` — warm near-black
- **Text-mute** `#756E60` — captions, metadata
- **Accent** `#C77F3F` — terracotta · production warmth, tags, decorative numerals
- **Sale** `#EB0000` — functional ONLY: discounted price, errors, "low stock"
- **Border** `#E8E1D2` — 1px hairlines

**Forbidden:** gradient backgrounds (except hairline functional ones in form-field focus), pure `#FFFFFF` surfaces, dark mode by default.

### Type

Two families, two roles:

- **Display: Playfair Display** (variable, wght axis 400–900, Roman + Italic). **Substituted for Fraunces** — Fraunces has **no Cyrillic glyphs**, which is a non-starter for a Russian brand (headlines would silently fall back to Times). Playfair Display is the canonical editorial-magazine serif, ships with full Cyrillic, and is self-hosted in `fonts/`. Use `font-weight` (or `font-variation-settings: 'wght' …`) — 400 for hero/display, 500–600 for headings, 700+ for emphasis. Italic is used for accent words in headlines.
- **Body: Manrope** weights 400/500/600/700 — UI, body copy, navigation, buttons. Manrope is the warmer geometric grotesque (not Inter), with full Cyrillic. Self-hosted in `fonts/`.

> ⚠️ **Font substitution flag:** the original brief specified **Fraunces**. Fraunces does not support Cyrillic, so it cannot set Russian display type. We substituted **Playfair Display** (Cyrillic editorial serif). If the client insists on Fraunces' specific soft-wedge character, alternatives that DO carry Cyrillic and read warmer than Playfair include **Lora**, **Cormorant**, and **PT Serif** — say the word and we'll swap. The `opsz` (optical-size) axis from the original spec is not available in Playfair; we drive everything from `wght`.

Scale tokens live in `colors_and_type.css`. Tracking: hero `-0.03em`, display `-0.02em`, body `0`, caption/eyebrow `+0.02em`/`+0.12em`. Line-height: display `0.95`, body `1.55`.

### Spacing & rhythm

- 4px base. Vertical section rhythm `clamp(4rem, 3rem + 5vw, 10rem)`.
- 12-col grid, max-width **1440px**, gutter 24px desktop / 16px mobile.
- **Asymmetric layouts are the norm** — hero `7+5` or `8+4`, never centered. Centered hero is a forbidden trope.

### Backgrounds

- Page background is cream `#FAF7F0` — never white.
- Raised surfaces (cards, header blur, modal sheets) shift to `#F2EDDF`.
- **Imagery** carries the brand emotion, not gradients or illustrations. Photography is the texture.
- **No** repeating patterns, no decorative SVG illustration, no gradient hero. Editorial cleanliness.

### Imagery direction

Looking at the supplied photography, our imagery vocabulary is:

- **Warm, natural light** — soft daylight, no harsh studio.
- **Neutral interior context** — beige walls, oak floors, ribbed curtains, ceramic vases. Hint of styled home, not catalogue void.
- **Cats are subjects, not props** — they sit, scratch, peek out of houses. Use cats with expression: golden British, tabby, black, grey.
- **Product on white cutout** acceptable for catalogue grid (small, secondary). Hero and editorial use lifestyle.
- **Material close-ups** — jute weave, plush nap, carpet pile — make excellent texture fills for callout strips.
- Subtle **4px brand-green accent bar** at bottom-left of hero photo is the one decorative liberty.

### Animation

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for reveals; `cubic-bezier(0.4, 0, 0.2, 1)` for interactive.
- Durations: micro `150ms`, normal `300ms`, reveal `600ms`.
- **Scroll reveals**: text fades up 12px + opacity 0→1; images scale `1.02 → 1.0`. **No parallax**.
- **Floating CTA cluster**: top button has a subtle pulse — scale `1.0 → 1.05` on a 2s loop.
- Respect `prefers-reduced-motion` everywhere — kill all transitions.

### States

- **Hover (links)** — colour shifts to `--brand-ink`. On nav links, an underline draws **left-to-right in 250ms** (transform-origin left).
- **Hover (cards)** — `transform: translateY(-2px)` + shadow `0 8px 24px -8px rgba(26,20,16,.12)`. Image inside scales `1.0 → 1.03`.
- **Hover (buttons)** — primary green darkens to `--brand-ink`; ghost outline buttons fill brand-green with surface text.
- **Active / pressed** — buttons shrink to `scale(0.98)` for 100ms, no colour change.
- **Selected** — filter chips: `--brand-soft` fill + `--brand` 1px border + green checkmark glyph. Radio/color swatch: 2px `--brand` ring with 2px gap.
- **Focus-visible** — `outline: 2px solid var(--brand); outline-offset: 2px;` on every interactive element. Non-negotiable.
- **Disabled** — 40% opacity, no pointer events.

### Borders

- 1px hairline `--border` `#E8E1D2` is the workhorse — dividers, card edges, table rules.
- Input borders use `--border-strong` `#C9BFA6` for a slightly more pronounced edge.
- No double borders, no inset borders.

### Shadows / elevation

- Cards rest **flat by default** (`0 1px 0 var(--border)` hairline at most). They lift only on hover.
- Hover lift: `0 8px 24px -8px rgba(26,20,16,0.12)`.
- Popovers/dropdowns: `0 12px 32px -12px rgba(26,20,16,0.18), 0 0 0 1px var(--border)`.
- Floating CTA cluster: `0 6px 18px -6px rgba(15,68,25,0.30)` (green-tinted).
- **No inner shadows. No multi-stop drop shadows. Never on text.**

### Transparency & blur

- Sticky header uses `backdrop-filter: blur(12px)` with `background: color-mix(in srgb, var(--surface) 80%, transparent)`. This is the **only** place blur appears in v1.
- Modals and drawers use a solid `--surface-2` panel with a 60%-opacity `--text` scrim behind — no blur.

### Corner radii

| Token | Value | Used on |
|---|---|---|
| `--radius-button` | 8px | Buttons, ghost buttons |
| `--radius-input` | 8px | Inputs, selects, textareas |
| `--radius-card` | 12px | Product cards, panels, modals |
| `--radius-sm` | 6px | Tooltips, small badges |
| `--radius-pill` | 999px | Tag chips, filter chips, count badges |

**No heavy rounding** — this is editorial, not playful. The pill is reserved for chips, where it's meaningful.

### Card anatomy

A product card is:
- `--surface-2` fill, `--radius-card` 12px, 1px `--border` outline (no shadow at rest).
- 4:5 photo, full-bleed top.
- Padding 16px, name in Manrope 600 16px, price in Playfair Display 20px below.
- Full-width brand-green primary CTA at the bottom of the card body, 44px tall.
- On hover: lift 2px, shadow appears, image scales 1.03.

### Layout rules — fixed elements

- **Header**: sticky top, height 72px, blur background.
- **Floating CTA cluster** (bottom-right): 4 round 56px buttons stacked vertically, 12px gap — Max chat, Telegram, phone, callback. Hide on `/checkout` and `/cart`.
- **Mobile tab bar** (bottom): height 64px, 5 icons (Главная / Каталог / Поиск / Корзина / Профиль). Active: brand-green icon + 2px green dot.

### Forbidden patterns (do not generate these)

- Gradient backgrounds, gradient text, gradient buttons
- Generic SaaS hero (centered headline + two CTAs)
- 6 identical thin-outline icons in a feature grid
- Cards with rounded corners + colored left-border accent
- Dark mode default
- Inter / Roboto / Poppins / Open Sans (we use Manrope)
- Lorem ipsum
- Emoji as iconography

---

## ICONOGRAPHY

### Approach

ZURAY does not yet have a proprietary icon set. We adopt **Lucide** (https://lucide.dev) as the system icon family because:

- **Soft stroke geometry** (1.5px stroke, rounded caps) matches "тёплый, округлый" tone.
- **CDN-available** — drop-in `<script src="https://unpkg.com/lucide@latest"></script>` and `data-lucide="..."`.
- **CurrentColor stroke** — recolors via CSS just like the logo.
- **Open-licence**, no attribution required.

> 🚩 **Substitution flag**: Lucide is a substitution, not a client-supplied set. If the client has a custom illustrator-drawn icon family, replace this with their assets in `assets/icons/`.

### Conventions

- **Stroke width** `1.75` for UI icons at 20–24px; `1.25` for large decorative icons at 48px+.
- **Color** matches surrounding text by default (`currentColor`). The only icons that get brand-green fill are: cart count badge, "in stock" check, active mobile-tab indicator.
- **Sizes** — 16 (inline with caption), 20 (default UI), 24 (toolbar / mobile tab), 56 (floating CTA glyph).
- **No emoji** anywhere — emotion comes from photography.
- **Unicode characters** used sparingly: `→` for inline link arrows, `·` middot for eyebrow separators, `«»` for quotes, `₽` for currency.

### Brand mark

The ZURAY wordmark (geometric sans with cut Z, R, Y) is provided in two SVGs:

- `assets/logo/zuray-logo.svg` — filled `#1A7425`, use on light surface.
- `assets/logo/zuray-logo-currentcolor.svg` — `fill: currentColor`, recolor via CSS `color`. Use for footer (cream on dark), inverted contexts, or wherever the brand color is contextually replaced.

Lockup height: **24px in header**, **40px on hero**, **20px in mobile footer**. Keep at least 1× wordmark-height clear-space on all sides.

---

## Forward extensibility

The DS is built to absorb:

1. **5 product landings** in `apple.com/iphone-17-pro` style — animated scroll sections. Tokens already include reveal-easing + image-scale guidelines.
2. **A second store in a different niche on the same DS** — palette is semantically named (`--brand`, `--accent`, `--surface`) so a sister brand can re-map values without touching components.

---

## Accessibility (non-negotiable)

- `:focus-visible` ring: `outline: 2px solid var(--brand); outline-offset: 2px;`
- Body text contrast on `--surface` ≥ 7:1 (AAA).
- Touch targets ≥ 44 × 44 px.
- Honor `prefers-reduced-motion`.

---

## Caveats & open questions for the client

1. **Photography rights** — the uploaded photos include the «PET BMF» watermark on some compositions. These appear to be reference / inspiration rather than ZURAY-owned shots. Before launch, please supply photography ZURAY has rights to use, or commission new shoots.
2. **`uploads/1.xcf`** — GIMP source file, not opened by this DS. Flag for review if it contains layered logo / pattern artwork worth extracting.
3. **Fonts** — **Playfair Display** (display) + **Manrope** (body) are now **self-hosted** in `fonts/` as variable `.woff2` with Cyrillic + Latin subsets — no network dependency, PageSpeed-friendly. **Note:** the brief asked for Fraunces, but Fraunces has no Cyrillic, so it was substituted with Playfair Display. Confirm the substitution, or ask us to swap to Lora / Cormorant / PT Serif (all carry Cyrillic).
4. **Icon set** — Lucide is a substitution. Confirm or replace with a custom illustrated set.
5. **Russian copy** — all sample copy is drafted by the DS. Please review with the client (Линар) before pushing to staging.
6. **Sticky-footer reference** — pet.b-mf.ru pattern is implemented in `ui_kits/zuray-web` but the exact icon glyphs / order should be confirmed with the client.
7. **Robokassa integration** — out of scope for the DS; the `/checkout` mock shows minimal-fields layout only.

---

## How to use this system

- For **production work** (Next.js app), copy `colors_and_type.css` into the codebase as the token source of truth. Import once at app root.
- For **prototypes / pitches / decks**, link `colors_and_type.css` directly and build static HTML — the tokens cascade.
- For **agent-driven design** (Claude / Cursor), see `SKILL.md` — it loads this system as an invocable skill.
