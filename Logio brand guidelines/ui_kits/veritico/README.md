# Veritico Product UI Kit

Software product shell for the **Veritico platform** (STOCK · PROMO · PRICE · RANGE). Built on the Logio brand foundations, with denser UI chrome than the marketing kit.

## Layout

- **Sidebar** (240px, white) — Logio wordmark + "Prod" env chip, list of four Veritico products as coloured dots, Operations nav (Dashboard / Forecast / Orders / Stores / Reports), Admin, user footer. Clicking a product switches the active highlight.
- **Topbar** — breadcrumb ("Veritico / STOCK / Dashboard · Albert CZ"), search, bell, help.
- **Dashboard** — greeting + four KPI tiles (stock coverage, service level, forecast accuracy, write-offs), a 14-day demand-forecast chart with actual+forecast bars, a replenishment queue table, and an alerts panel.

## Interactions wired

- Click any product in the sidebar → active dot moves.
- Click any nav item → active item highlight updates.
- Tab switcher on the dashboard (Overview / Forecasting / Replenishment / Reports).
- Hover on chart bars darkens; forecast bars use the dashed-soft-green pattern.

## Caveat

No production Veritico screenshots or codebase were supplied. This is a plausible reconstruction based on the capabilities described in the brand slide deck (*Demand Forecasting, Inventory Management, Replenishment, Promo Planning, Price Optimization, Markdown Management, Assortment Planning, Shelf Optimization, Store Clustering*) and the Albert CZ case study. Cross-check with the real app before treating as a reference.
