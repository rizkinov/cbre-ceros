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

## Export index

Attach the main image(s) **plus the state images** when prompting Ceros AI; the PDF holds everything in reading order.

| # | Template | Main reference | Interaction states | PDF |
|---|---|---|---|---|
| 01 | [Quarterly Market Outlook](exports/01-market-outlook/) | `01-market-outlook_desktop.jpg` | industrial logistics tab<br>outlook accordion open<br>retail tab<br>residential tab | `01-market-outlook.pdf` |
| 02 | [Property Showcase](exports/02-property-showcase/) | `02-property-showcase_desktop.jpg` | hotspot popup typical office floor<br>gallery lightbox slide 2<br>enquire modal open | `02-property-showcase.pdf` |
| 03 | [Office Space Calculator](exports/03-office-space-calculator/) | `03-office-space-calculator_desktop.jpg` | results updated<br>advisor modal<br>mobile calculator 390 | `03-office-space-calculator.pdf` |
| 04 | [Workplace Strategy Quiz](exports/04-workplace-strategy-quiz/) | `04-workplace-strategy-quiz_desktop.jpg` | question 3 of 7<br>result collaborative hub<br>all four profiles | `04-workplace-strategy-quiz.pdf` |
| 05 | [Client Case Study](exports/05-client-case-study/) | `05-client-case-study_desktop.jpg` | before after slider dragging<br>story tab approach<br>story tab results<br>before after tab after<br>related card hover | `05-client-case-study.pdf` |
| 06 | [Services Explorer](exports/06-services-explorer/) | `06-services-explorer_desktop.jpg` | capital markets modal<br>who we serve investors tab<br>project management modal | `06-services-explorer.pdf` |
| 07 | [Event Microsite](exports/07-event-microsite/) | `07-event-microsite_desktop.jpg` | speaker flip card bio<br>agenda panel 1 expanded<br>add to calendar modal | `07-event-microsite.pdf` |
| 08 | [ESG & Sustainability Snapshot](exports/08-esg-snapshot/) | `08-esg-snapshot_desktop.jpg` | net zero journey 2030 selected<br>approach social tab<br>approach governance tab<br>certification popup<br>methodology footnote 2 open | `08-esg-snapshot.pdf` |
| 09 | [Client Pitch Presentation](exports/09-client-pitch-presentation/) | 9 slides (`…_slide-01-cover.jpg` … `…_slide-09-next-steps.jpg`) | team flip card bio<br>approach negotiation selected<br>track record case study 2 | `09-client-pitch-presentation.pdf` |
| 10 | [Investment Opportunity Teaser](exports/10-investment-teaser/) | `10-investment-teaser_desktop.jpg` | site plan hotspot 1 popup<br>register interest nda modal<br>sale process step 4 expanded | `10-investment-teaser.pdf` |

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

## Design notes and known deviations

- **Spec vs design:** where they differ, the **spec's behaviour wins**. The designs show some states for visual clarity only:
  - The enquiry form in 02 (Enquire modal) and the lead form in 03 (Speak to an advisor) are illustrative. The specs link those buttons to `https://www.cbre.com.sg/contact-us`.
  - 03 shows the first "How we calculate" accordion item open; the live build starts with all items closed.
  - Accordions that the specs say start fully collapsed (07 FAQs, 08 Methodology) are drawn closed; their open state is in a state frame.
- **Image slots inside unopened states** (e.g. other tabs and pop-ups) are listed in each spec's image table even when not drawn. Small circular headshots carry their Adobe Stock query as a caption under the photo, not on the photo.
- 02's Explore placeholder has a faint schematic tower for hotspot positioning. Remove it once the real cutaway image is dropped in.
- 09 uses `NN / 09` slide numbering in the design; the spec allows `1 / 9`. Either is fine.
