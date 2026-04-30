# Logio Marketing UI Kit

Corporate / landing page recreation for **logio.com** based on the Timesaver slide deck ("Základní Logio slides" section — the brand's approved marketing layouts).

## Screens & components

- **Nav** — sticky white, logo left, 6 links centre, ghost + brand CTA right. Adds a hairline border on scroll.
- **Hero** — big three-line declarative headline in Host Grotesk Bold at up to 104px. Cream (`bg-20`) surface with a green concentric-rings watermark.
- **StatsStrip** — the four brand stats (2004 / 180 / 1.000+ / ∞) sized at 88px.
- **HowWeWork** — the "Consulting & Technology × Software" block, two-column with a team photo.
- **Services** — eight service cards in a 4-column grid; Phosphor icons, hover raises the card and tints the border green.
- **Veritico** — four product cards with the sub-brand coloured dot (teal / orange / red / purple). Cards are clickable — clicking toggles "Opened demo ✓".
- **Trust** — "Trusted by Microsoft" + "Listed by Gartner" strip.
- **WhyLogio** — eight reasons in a 4-column grid with a hairline top border for each.
- **CaseStudy** — dark section, Albert CZ + Jesper Lauridsen quote.
- **Footer** — dark, four-column, wordmark inverted.

## Tweaks already wired

- Click a Veritico card → state toggles and the footer of the card updates.

## Files

- `index.html` — the page
- `kit.css` — layout & component styles (imports `colors_and_type.css`)
- `Components.jsx` — `Nav`, `Logo`, `Eyebrow`, `SectionHead`, `Stat`, `ServiceCard`, `VeriticoCard`, `WhyCard`, `Footer`
- `Sections.jsx` — `Hero`, `StatsStrip`, `HowWeWork`, `Services`, `Veritico`, `Trust`, `WhyLogio`, `CaseStudy`

## Caveat

No Logio marketing codebase or production screenshots were provided. This is a **recreation derived from the official slide template copy + the Figma brand system** — the layout is opinionated but each piece of copy, every stat, and every product name is lifted verbatim from the brand guidelines. Cross-check against the live logio.com before shipping.
