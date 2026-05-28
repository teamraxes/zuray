# ZURAY Web — UI Kit

Click-through HTML prototype of the ZURAY public-facing website homepage. Built on top of `colors_and_type.css` from the project root.

## Files

| File | What it is |
|---|---|
| `index.html` | Главная — Header, Hero, Categories, Bestsellers, Production Story, Footer |
| `catalog.html` · `catalog-mobile.html` | Каталог · desktop + iPhone 16 Pro mobile (bottom-sheet фильтры) |
| `product.html` · `product-mobile.html` | Карточка товара · desktop + mobile (sticky buy-bar) |
| `about.html` · `about-mobile.html` | О компании · desktop + mobile |
| `styles.css` | Базовый CSS компонентов (Header, Hero, Card, Footer, FAB и&nbsp;т.д.) |
| `pages.css` | Доп. CSS для страниц catalog / product / about (сайдбар, галерея, табы, таймлайн) |
| `mobile.css` | Mobile-only overrides — активируются `.zr-mobile-shell` wrapper'ом |
| `ios-frame.jsx` | Стартер `IOSDevice` — рамка iPhone 16 Pro (status bar + dynamic island + home indicator) |
| `Header.jsx` · `Footer.jsx` · `FloatingCTA.jsx` · `MobileTabBar.jsx` | Сквозные элементы хрома |
| `Hero.jsx` · `CategoryStrip.jsx` · `BestsellersGrid.jsx` · `ProductionStory.jsx` | Секции главной |
| `ProductCard.jsx` | Универсальная карточка товара (с поддержкой скидки и&nbsp;«осталось N») |
| `CatalogPage.jsx` | Сайдбар фильтров + bottom-sheet (mobile). Экспортирует `Breadcrumbs`. |
| `ProductPage.jsx` | Галерея, info-колонка, табы, рекомендации, sticky buy-bar (mobile) |
| `AboutPage.jsx` | Манифест, таймлайн, цитата, команда, CTA-плашка |

## Pages represented

The homepage compresses 4 page-system zones into one prototype:

- `/` — hero · featured categories · production story · bestsellers grid · footer
- `/catalog` — filter-chip pattern visible in the bestsellers section
- `/product/[slug]` — the card pattern is identical to a product-page recommended block

The remaining 6 pages (`/about`, `/wholesale`, `/delivery`, `/tour`, `/contacts`, `/cart`, `/checkout`) reuse the same Header/Footer/FloatingCTA/MobileTabBar primitives.

## Not implemented (intentional)

- Real cart state, search, account, Robokassa flow — this is a visual kit, not production.
- Full filter sidebar — represented as horizontal filter chips in this prototype. The brief's left-sidebar pattern (Ozon-style) is documented in `README.md` and ready to be added when needed.
- Product page tabs (Описание / Характеристики / Отзывы / Доставка) — out of scope for v1 kit.
- Forms (wholesale, checkout) — input styling is in `preview/components-inputs.html`.
