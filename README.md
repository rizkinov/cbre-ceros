# CBRE Singapore — Ceros interactive templates

Ten reusable interactive templates for the **CBRE Singapore** folder in Ceros, designed in Figma with CBRE's Emerald brand assets and exported as visual references for the Ceros AI builder.

- **Figma (source designs):** [CBRE Ceros Templates](https://www.figma.com/design/GwdiVcQBWzckrc1ohVxYCQ/CBRE-Ceros-Templates?node-id=2014-2) → page **── Ceros Templates ──**. Each template is a column: the full desktop page on the left, interaction-state frames on the right. The **00 — Emerald Kit** board at the far left shows the shared building blocks.
- **Ceros (target):** `admin.ceros.com` → account `cbre` → folder **CBRE Singapore** → Brand Kit **CBRE Test**.

## The ten templates

| # | Template | Ceros starting point | What's interactive |
|---|---|---|---|
| 01 | Quarterly Market Outlook | Free prompt (or *Create an interactive report from a PDF*) | Sector tabs, animated KPIs, rent-trend charts, outlook accordion |
| 02 | Property Showcase | Free prompt | Floor-plan hotspots, gallery carousel/lightbox, availability table, enquiry |
| 03 | Office Space Calculator | *Create a calculator* | Headcount / work-style / attendance / growth inputs → space & rent estimate |
| 04 | Workplace Strategy Quiz | *Create a quiz* | 7-question profile quiz → one of four workplace profiles |
| 05 | Client Case Study | Free prompt | Challenge/Approach/Results tabs, before/after slider, counters, timeline |
| 06 | Services Explorer | Free prompt | Service tiles → pop-up modals, "Who we serve" tabs |
| 07 | Event Microsite | Free prompt | Countdown, agenda accordion, speaker flip cards, RSVP |
| 08 | ESG & Sustainability Snapshot | Free prompt | Net-zero timeline milestones, E/S/G pillar tabs, methodology accordion |
| 09 | Client Pitch Presentation | Free prompt for a paged deck (or *Create a presentation from a PDF*) | 9 slides with prev/next, team flip cards, approach timeline, case-study carousel |
| 10 | Investment Opportunity Teaser | Free prompt | Highlights, metrics, tenancy charts, site-plan hotspots, NDA/register-interest |

## What's in this repo

```
templates/NN-<slug>.md   Build spec per template: Ceros AI prompt (paste verbatim), expected structure,
                         follow-up prompts, template fields, full sample copy, Adobe Stock queries, QA checklist
exports/NN-<slug>/       Ceros-ready references exported from Figma at 1x (1440 px wide)
  NN-<slug>_desktop.png/.jpg        full desktop page (or _slide-NN-… for template 09)
  NN-<slug>_state-K-….png/.jpg      interaction states (tab switched, modal open, result screen…)
  sections/                         the desktop page sliced per section (sharper input for the AI)
  NN-<slug>.pdf                     paginated: sections (or slides), then states
figma/emerald-helpers.js  Figma Plugin API helpers bound to the Emerald brand file (type scale, $social colour
                          tokens, logo, Line of Sight, Color Glaze placeholders, icons, buttons, tabs, accordions…)
figma/export_tools.py     Builds the PNG/JPG/section/PDF exports from Figma screenshots
```

## How to build a template in Ceros

1. Open **admin.ceros.com → CBRE Singapore**. In the "What will you build today?" box set **Brand Kit = CBRE Test** and the folder to **CBRE Singapore**.
2. For calculator/quiz templates click the matching chip first (*Create a calculator* / *Create a quiz*); clear any pre-filled text.
3. **Attach the visual references** (paperclip or drag-and-drop) from `exports/NN-<slug>/`:
   - the desktop JPG (or the `sections/` PNGs if the AI needs more detail), and
   - the state images, so the AI sees how tabs, pop-ups, results etc. should look when active.
   For 01 and 09 you can instead use the PDF with *Create an interactive report / presentation from a PDF*.
4. Paste the **Ceros AI prompt** from `templates/NN-<slug>.md` verbatim, add one line — *"Match the attached design references for layout and components; keep the selected brand kit's styles."* — and generate.
5. Run the **follow-up refinement prompts** from the spec for anything missed, then rename to `[Template] <Name>`.
6. **Never accept an AI offer to change the CBRE Test brand kit** — always decline. The prompts contain no colour or font instructions for this reason.
7. Work through the spec's **QA checklist** (desktop + mobile preview, sample-content footer, disclaimers, alt text).

## Images (Adobe Stock)

Every photo in the designs is a **Color Glaze placeholder with a chip naming the Adobe Stock search** (e.g. *"singapore city skyline wide aerial dusk"*). The full list per template — query, orientation, minimum size and alt text — is in each spec's **Image slots & Adobe Stock searches** table. Search at [stock.adobe.com/sg](https://stock.adobe.com/sg).

> **Licensing is still a decision for you:** licensing spends CBRE's Adobe Stock credits. Use watermarked comps for template building and license only the images you keep. Never publish stock faces next to real staff names — use each person's approved headshot.

## Content rules baked into every template

- All copy and figures are **sample content** (Singapore, Q3 2026) and every template shows the footer note *"Sample content for template purposes only — replace before publishing."*
- No real clients, people or property names (invented: *One Marina Gateway, 8 Example Street*; *Firstname Lastname*).
- Financial/investment templates carry disclaimer placeholders for Compliance to replace.
- Each spec's **Template fields** table lists everything a duplicator must swap.

## Brand system used in Figma (Emerald)

Financier Display for editorial headlines, Calibre for UI/body and Calibre Light for statistics; colours bound to the file's `$social` variables (CBRE Green `#003F2D`, Accent Green `#17E88F` as the single highlight, Sage/Celadon tints, Wheat for events only); the instanced CBRE logo; Line of Sight rules; Color Glaze as photo placeholders; square corners and an 8-pt spacing grid.
