---
name: logio-design
description: Use this skill to generate well-branded interfaces and assets for Logio (European consulting & technology company — data-led strategy, intelligent automation, and the Veritico software platform for supply chain and retail). Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Logio Design Skill

Read the `README.md` file within this skill, then explore the other available files:

- `colors_and_type.css` — drop-in token sheet (palette, semantic colours, spacing, radii, shadows, motion, full type scale). Import this first.
- `assets/logo/` — `logio-wordmark.svg`, `logio-symbol.svg`, `logio-uplift.svg` (all `currentColor`).
- `assets/photos/` + `assets/brand/` — real photography and the concentric-circles brand background.
- `ui_kits/veritico/` and `ui_kits/marketing/` — interactive React/JSX component recreations of the two Logio product surfaces. Read each kit's `README.md` and `index.html` to see how the components compose.
- `slides/index.html` — 9-slide Timesaver deck with reusable layouts (title, agenda, section divider, statement, stats, product grid, case study, timeline, closing).
- `preview/` — per-token design-system cards.
- `research/` — raw PPTX extracts; reference only.

## When creating visual artefacts (slides, mocks, prototypes)

1. Copy the assets you need out of this skill into the artefact's folder — don't hotlink.
2. Link `colors_and_type.css` and the Phosphor Icons CDN stylesheet:
   ```html
   <link rel="stylesheet" href="colors_and_type.css">
   <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
   ```
3. Use Host Grotesk for every text style (loaded from Google Fonts inside the CSS file). Do not substitute.
4. Phosphor **Regular** weight only, monochrome (brand-green / black / neutral-grey / white). Never duotone, never multi-colour, never emoji.
5. Respect the content rules: we/you voice, sentence case, numbers-backed claims, no AI-slop tropes (gradients, left-border accent cards, rocket emoji, "revolutionary", etc). See `README.md` → CONTENT FUNDAMENTALS for the full list.

## When working on production code

Copy tokens from `colors_and_type.css` (or import wholesale), lift component patterns from `ui_kits/`, and follow the VISUAL FOUNDATIONS section of `README.md` for the motion, border, shadow, and state rules.

## If the user invokes this skill without guidance

Ask what they want to build or design. Good questions to ask:
- Marketing surface (Logio.com-style) or product surface (Veritico app)?
- Audience — prospect, existing client, internal?
- Language — English (market-facing) or Czech (internal)?
- Output format — slide deck, HTML mock, full prototype, production component?
- Variations / tweak axes they want to explore?

Then act as an expert Logio-brand designer and produce either HTML artefacts or production code, depending on the need.
