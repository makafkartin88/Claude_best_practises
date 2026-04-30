# Logio Design System

> European consulting & technology company — data-led strategy, intelligent automation, and integrated software for supply chain and retail operations.

---

## About Logio

Logio is a European consulting and technology company that goes beyond traditional consulting by taking full responsibility for outcomes. Instead of handing over a strategic report, the team stays engaged to implement the necessary software and process changes directly in operations. They combine analytical precision with practical business sense to ensure every recommendation is backed by data and delivers measurable ROI.

**By the numbers**
- On the market since **2004** (two decades)
- **180+ supply chain experts**
- **1,000+** successfully completed projects
- Trusted by Microsoft (Veritico STOCK and Veritico PRICE listed in Microsoft Azure Marketplace)
- Listed by Gartner as a Representative Vendor in the Market Guide for Retail Forecasting and Replenishment Solutions (since 2020)
- 80+ software implementation clients (incl. Albert Czech Republic / Ahold Delhaize group)

**Address:** Evropská 2588, 160 00 Praha 6-Dejvice · sales@logio.com

### Products & sub-brands

Logio's services split into two main pillars:

1. **Consulting & Technology** — data-led strategy and transformation:
   - Strategy & Transformation
   - Process & Systems Optimization
   - Logistics, Warehousing & Distribution
   - Manufacturing & Maintenance
   - Data & Operations
   - Delivery & Execution
   - Product Development
   - Inventory, Pricing & Promotion Optimization

2. **Software — the Veritico platform** (end-to-end software combining advanced mathematical models and AI):
   - **Veritico STOCK** (blue `#0F8DAE`) — Demand Forecasting, Inventory Management, Replenishment
   - **Veritico PROMO** (amber `#FFA503`) — Promo Planning, Promo Management, Promo Forecasting & Optimization
   - **Veritico PRICE** (red `#D1190D`) — Price Management, Price Optimization, Markdown Management
   - **Veritico RANGE** (jade `#009687`) — Assortment Planning, Shelf Optimization, Store Clustering

Products can be used standalone or combined for greater added value and synergies.

---

## Sources

This design system was built from the following source materials (retain these — they are the ground truth):

- **Figma — "🟢 Logio _ Brand Base.fig"** — 34 pages covering Foundations, Tokens (Spacing, Typography, Colors, Styles), Assets (Logos, Icons, Visuals), and a General-components library (Buttons, Badges, Tab-navigation, Segmented-Picker, Toggle, Carousel-control, Checkbox, Input, Radio-button, Date-picker, Avatar, Divider, Tooltip). Authored by Symbio (@symbio.agency — Tomáš Klíma).
- **Timesaver.pptx** — the official Logio slide template & brand guidelines, 20/3/2026 (Marketing team). Source of colour CMYK/HEX pairings, Phosphor Icons guidance, case study copy (Albert / Ahold Delhaize), and the 30+ slide layouts. See `research/pptx-slide-texts.md` and `research/pptx-media/` for raw extracted content.
- **Host_Grotesk.zip** — bundle of the primary typeface (see Typography notes below).

> This project ships the system as self-contained HTML/CSS/JSX. The Figma file and source PPTX were explored read-only.

---

## Index (what lives where)

| Path | What |
|---|---|
| `README.md` | This file — context, fundamentals, iconography |
| `SKILL.md` | Agent-skill entry point (Claude Code compatible) |
| `colors_and_type.css` | All CSS custom properties: colour palette, semantic tokens, spacing, radii, shadows, motion, type scale |
| `fonts/` | Local font files — currently empty; system loads Host Grotesk from Google Fonts |
| `assets/logo/` | Logio wordmark, symbol, and "uplift" mark (SVG, `currentColor`) |
| `assets/photos/` | Office & team photography extracted from the brand guidelines |
| `assets/brand/` | Brand backgrounds & graphic elements |
| `preview/` | Design-system cards shown in the Design System tab |
| `ui_kits/veritico/` | Veritico software UI kit — interactive click-thru with components |
| `ui_kits/marketing/` | Logio marketing / corporate site UI kit |
| `slides/` | Slide templates derived from Timesaver.pptx — `index.html` is a 9-slide deck (title, agenda, section divider, statement, stats, Veritico product grid, case study, timeline, thank-you) |
| `research/` | Raw extracts (PPTX media, slide text, embedded fonts) — reference only |

---

## CONTENT FUNDAMENTALS

**Tone.** Confident, factual, measured. Business-to-business for supply-chain and retail leaders. The voice is the voice of a partner who has done this before — not a hype-driven startup. There's quiet pride in two decades of track record ("On the market for two decades", "More than 1,000 successfully completed projects") but the language stays concrete.

**Voice — "we" / "you".** Logio speaks in the first person plural ("We deliver complex solutions", "Our projects and recommendations are based on data, not assumptions") and addresses the client directly as "you" / "your" ("We tailor our solutions to your processes", "your supply chain into a competitive advantage"). Never "I", never "the customer"/"the client" in third person.

**Headlines.** Short, declarative, often punctuated as a list of three ideas. Example from the hero: *"Data-led strategy. Intelligent automation. Integrated software."* Section titles use sentence case with simple conjunctions: *"Smart solution for any challenge"*, *"Trusted by Microsoft"*, *"Why Logio"*.

**Claims.** Back everything with numbers: *2004*, *180*, *1.000+*, *∞*. Numbers are set huge (see `.t-number-l` / `.t-number-m`) and pair with a single supporting sentence. The infinity symbol is used once, intentionally, paired with "Countless ideas with added value".

**Casing.** Sentence case for headlines and buttons. Title Case only for proper nouns and product names (**Veritico STOCK**, **Veritico PRICE** — product suffix is all-caps). Brand name is **Logio** (capital L, no stylisation).

**Bilingual.** Internal/brand-guideline slides are Czech ("Brandové barvy", "Odsazení textu", "Práce s tabulkou"). Client/market-facing slides are English. Keep this split — don't mix within a single artefact.

**Emoji.** No emoji in brand comms, decks, or product UI. (The Figma file name uses 🟢 but that's a working marker for the editor, not part of the brand.)

**Punctuation.** Ampersands appear in section headers ("Strategy & Transformation", "Process & Systems Optimization"). Decimal-comma for Czech numeric ("1.000+"). Em-dashes used sparingly.

**Forbidden tropes.** Avoid: "revolutionary", "AI-powered" as a decoration, "empower", "journey", "unleash", "game-changing", sparkle/rocket emoji, gradient "AI" badges, cards with a coloured left border accent.

---

## VISUAL FOUNDATIONS

### Palette
The brand runs on a **10-step green scale** anchored on `#7FBA06` (zelená 60 — the primary green), extended with supporting hues:

- **Greens 10 → 95** — the hero palette. Use the darker end (70–95) for body text on cream surfaces; use 40–60 for interactive; use 10–20 as tinted surfaces.
- **Veritico module colours** — four distinct hues, one per software module. Each module has a 3-step scale (dark / base / light) plus a `soft` surface tint, exposed as `--veritico-{module}-{dark|base|light|soft}`.
  - **STOCK** `#0F8DAE` — ocean blue (demand, forecast, inventory).
  - **PROMO** `#FFA503` — amber (promotion windows, campaigns).
  - **PRICE** `#D1190D` — signal red (pricing, markdown — not a generic danger colour; see below).
  - **RANGE** `#009687` — jade (assortment, shelf, clusters). Previously called "FLOW".
- **Secondary teal** `#28B195` — available as a neutral-tech accent; **do not** use to represent Veritico STOCK — that's now blue.
- **Orange** `#EF9155` / `#EEE2CB` — warm highlight, avatar fills, warm surfaces. Decorative only.
- **Violet** `#6A4478` / `#BDABC4` — used in Figma documentation surfaces only. Not a product accent.
- **Warm neutrals** — `#EEEBE4` cream hero surface, `#E5E2DC` panel, `#DDD9D1` darker panel, `#C8C4BC` divider. These replace cold greys on marketing surfaces.
- **Cool neutrals** — standard grey scale for data-dense product UI.

**Semantic `--danger`** is a red reserved for destructive UI states (delete, error). It is *visually similar* to Veritico PRICE but semantically different — never use PRICE colour for error states and vice-versa.

Pure black `#000000` is used for primary text. White for primary surfaces.

### Type
- **Host Grotesk** (Google Fonts) — the only face for headlines, body, and numbers. Weights in use: Light, Regular, Medium, SemiBold, Bold, Black.
- **Instrument Sans** — used in the Figma docs for labels/overlines; kept here as `--font-label`.
- **Roboto Mono** — token/code specimens in the documentation only.
- Heading rule: SemiBold/Bold for H1–H2, Medium/Regular for H3–H5, Regular for body, Regular/Medium for captions.
- Tracking: tight (negative letter-spacing) on display sizes; normal on body; +0.08em uppercase on overlines.

### Layout & Grid
- **8-point grid** (`--s-1` … `--s-32`). Every spacing value is a multiple of 4.
- Container radii: `12 / 16` for cards, `10` for interior content, `999` for pills and buttons.
- Marketing sections breathe — 80–128px vertical rhythm. Product UI is tighter — 16/24/32.
- Full-bleed hero photography with white wordmark overlay is a recurring motif.

### Imagery
Warm-toned, slightly desaturated photography — real offices, real people at desks, neutral warehouses, laptops on wooden surfaces. Teal/green wash treatment is used for hero imagery (see `assets/photos/logio-hq-teal.png`). No stock-AI imagery, no hand-drawn illustrations.

### Graphic elements
The Figma "Visuals" page describes graphic elements as "visual metaphors for processes, movement, relationships and transformation of data." These appear as concentric green circles / ring patterns (see `assets/brand/bg-circles-green.png`) — subtle, organic, never geometric-gradient.

### Motion
Quiet. Fades (180–240ms) and small vertical translations (8–12px) with `--ease-out`. No bounce, no parallax, no page-load animation choreography. Hover on buttons = slight colour darken (one step on the scale). Press = no scale; the pressed colour is the `brand-pressed` token.

### Hover / press states
- Hover on brand buttons: background moves from `green-60` → `green-70`.
- Hover on neutral buttons: background moves from `white` → `bg-10` (or border strengthens from `border` → `border-strong`).
- Press: one more step darker; no transform scale.
- Focus: 3px ring at `--focus-ring` (green-60 at 32% alpha), offset 2px.
- Disabled: opacity 0.4, no pointer events.

### Borders & dividers
- 1px solid `--border` (warm beige) on cream surfaces, `--grey-10` on cool surfaces.
- Strong borders `--border-strong` only for emphasis (selected state, active input).
- No double borders, no dashed borders anywhere in the system.

### Shadows
Five-step shadow scale (`--shadow-xs` → `--shadow-xl`). All cool-tinted (rgba of `#101828`). Used sparingly: marketing cards take `--shadow-sm`, floating menus take `--shadow-lg`. No coloured shadows.

### Transparency & blur
- Surfaces are opaque. Overlays use flat colour with alpha on scrim (e.g. `rgba(0,0,0,0.48)` on image overlays).
- Backdrop blur reserved for image-over-image headers (`backdrop-filter: blur(24px) saturate(1.1)`).
- Chip/tag fills use solid pale tokens, not translucency.

### Cards
- Marketing: cream/white fill, `--radius-xl` (16px), `--shadow-sm`, 24–32px padding, no border.
- Product: white fill, 1px `--border`, `--radius-lg` (12px), 16–24px padding, optional `--shadow-xs`.
- No left-border accent; no colour-coded card variants. Product differentiation happens through the small coloured status dot (teal/orange/red/purple for Veritico modules).

### Buttons
Three shapes × four tones. Shape: filled / outlined / ghost. Tone: Primary (green), Secondary (black/white outline), Brand-on-dark, Inverted.
- Pill shape (`--radius-pill`) is the default. Rectangular (`--radius-md`) only for in-table actions.
- Height: 48px (large) / 40px (medium) / 32px (small).
- Label weight: Medium 500.
- Icon size = button label line-height; 8px gap.

### Iconography see below ↓
### Cards see above ↑

---

## ICONOGRAPHY

Primary icon library: **Phosphor Icons** (https://phosphoricons.com). The brand guidelines are explicit — *"Pro ikonografii značky Logio používáme knihovnu Phosphor Icons"*.

**Rules** (from the brand slide 10):
- **Consistency** — one style across an entire output, never mix with older pictograms.
- **Simplicity** — icons support the content, never visually overwhelm.
- **Clarity** — pick icons with a clear, universally readable meaning.

**Style.** Phosphor ships Thin / Light / Regular / Bold / Fill. Logio default is **Regular**, monochrome, at brand-green / neutral-grey / black / white. Never multi-colour. Never duotone.

**Sizes.** 16 / 20 / 24 / 32. Use 20 inline with body text (line-height 1.5), 24 as a default standalone, 32 for feature icons in large cards.

**Delivery.** Phosphor is served from CDN (`https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css`). No local icon font is included in this repo — use the CDN.

**Logos vs icons.** The logio symbol (`assets/logo/logio-symbol.svg`), wordmark (`assets/logo/logio-wordmark.svg`) and the three-circle "uplift" mark (`assets/logo/logio-uplift.svg`) are **logo assets**, not icons. They use `currentColor` so you can tint them. Veritico sub-product marks are rendered as coloured status dots (teal / orange / red / purple), not separate icons.

**Emoji.** Not used. Unicode symbols appear only when genuinely typographic (∞, ×, –, →).

---

## Usage

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">

<h1 class="t-h1">Data‑led strategy.</h1>
<p class="t-lead">Intelligent automation. Integrated software.</p>
<button class="btn btn--brand">Get in touch</button>
```

See `ui_kits/` for component examples.

---

## Caveats & flagged substitutions

- **Host Grotesk is now served locally** from `fonts/HostGrotesk-*.ttf` (Light 300 → ExtraBold 800, plus matching italics). The `@import` for Google Fonts is gone; only Instrument Sans and Roboto Mono still load from Google Fonts.
- **Phosphor Icons** are linked from CDN, not vendored locally.
- **Veritico product UI** is reconstructed from brand guidelines + slide deck descriptions — no direct application screenshots or codebase were provided, so the UI kit demonstrates *how a Veritico screen would look given the brand foundations*, not a 1:1 replica of the real app. Flag for iteration.
