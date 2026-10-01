# [Template] ESG & Sustainability Snapshot

- **Slug:** `esg-sustainability-snapshot`
- **Ceros starting point:** Free prompt
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline.
- **Experience name:** `[Template] ESG & Sustainability Snapshot`
- **Primary audience:** Asset owners, investors, fund managers, boards and ESG leads reviewing a property portfolio's sustainability performance, plus the portfolio's occupiers. CBRE Singapore's ESG/sustainability consulting, property management and Marketing teams duplicate it, with the client's written approval when client data is used.
- **Est. build time:** 3.5–4.5 hours (about 25 min generation and refinement, 1.5 h content and figure cross-checks, 45 min images and alt text, 45 min QA). ESG-team and Legal review of claims is extra.

## Purpose

This is a reusable, scrolling ESG story for a property portfolio or client. It combines headline KPI counters, a clickable net-zero journey (2020 baseline, 2030 interim target, net zero in 2050), Environmental/Social/Governance tabs of initiatives, text-only certification badges, a case highlight and a transparent methodology section. CBRE Singapore's ESG/sustainability consulting, property management and Marketing teams duplicate it, replace the sample data (an anonymised, fictional six-building Singapore office portfolio) with verified figures, and use it for client reporting, investor updates and ESG business development. To avoid greenwashing, every figure carries a footnote, targets are labelled as targets, and the methodology is always visible.

## Ceros AI prompt

Before you paste:

1. Open the existing **New Joiner Onboarding** experience in the CBRE Singapore folder. Note its tone, section rhythm and how it uses components, so this build feels like part of the same family. If the generated result differs noticeably, adjust it with the follow-up prompts. Do not add any styling instructions.
2. In the "What will you build today?" box, set **Brand Kit = CBRE Test** and **Folder = CBRE Singapore**. Do not use a quick-start chip; this is a free prompt.
3. Paste the block below verbatim and generate. It is 2,465 characters (2,487 if the box counts each line break as two characters), under the assumed limit of about 2,500. If you edit it, re-count: the disclaimer and footer note are at the end, so a truncated paste would lose them.
4. If the AI offers to update, extend or modify the brand kit at any point, decline. Reply: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`
5. Watch the certification badges. Rating names such as "Gold" or "Platinum" can tempt the AI into styling badges individually. If that happens, use follow-up 12 and don't add any colour instructions.
6. Rename the experience to `[Template] ESG & Sustainability Snapshot`.

```text
Create a responsive single-page ESG report, "ESG & Sustainability Snapshot FY2025", for an anonymised Singapore office portfolio. Use the selected brand kit's styles as-is. Tone: factual, measured, no hype. Use labelled image placeholders only (no real buildings, landmarks or brands).

Sections, in order:

1. Hero: eyebrow "ESG & Sustainability Snapshot | FY2025 | Sample data"; headline "On the path to net zero"; subhead "How a six-building Singapore office portfolio is cutting energy use and emissions, and what comes next."; image placeholder: office facade with vertical planting; buttons "See our progress" (scrolls to section 2) and "Talk to our ESG team" (scrolls to section 8).

2. "FY2025 at a glance": four count-up counters, each with a label and footnote marker: 18% lower energy use intensity vs 2020 [1] | 4,370 tCO2e lower annual Scope 1 & 2 emissions vs 2020 [2] | 86% of floor area Green Mark certified [3] | 12% of landlord electricity from renewables [4]. Below: "Sample figures for template purposes. See Methodology."

3. "Our net-zero journey": timeline with five clickable milestones, each opening a detail panel: 2020 Baseline set | 2023 Retrofit programme | 2025 Where we are today | 2030 Interim target (-42%) | 2050 Net zero. Fallback: year tabs.

4. "Our approach": tabs "Environmental", "Social", "Governance"; each with an image placeholder and four initiative cards (title, 1–2 sentences, key figure).

5. "Certifications and ratings": identical text-only badges (no images): Green Mark Platinum | Green Mark GoldPLUS | Green Mark Gold | LEED Gold, Operations + Maintenance | WELL Health-Safety Rated. Each badge opens a popup describing the scheme.

6. "Case highlight": one card, "Retrofitting a 25-year-old office tower", with image placeholder, short story, four stats (-20% energy use intensity; 2.3 GWh/yr saved; ~S$620,000/yr saved; 5.5-year payback) and a quote placeholder.

7. "Methodology and footnotes": accordion: boundary, footnotes [1]–[5], targets, data assurance, trademarks.

8. CTA: heading "Ready to plan your path to net zero?"; buttons "Talk to our ESG consultants" (https://www.cbre.com.sg/contact-us) and "Read our ESG insights" (https://www.cbre.com.sg/insights), new tab.

9. Footer: "[Disclaimer placeholder: insert the approved CBRE disclaimer before publishing.]" and the visible note "Sample content for template purposes only — replace before publishing."

On mobile, stack everything in one column.
```

## Expected structure

After generation, check each section against this list. Use the follow-up prompts to fix anything missing.

1. **Hero**: full-width section with an image placeholder (office facade with planting), eyebrow including "Sample data", H1 headline, subhead and (after follow-up 1) a meta line covering portfolio, buildings, NLA, reporting period and publish date. It has two anchor buttons: "See our progress" scrolls to section 2 and "Talk to our ESG team" scrolls to section 8.
2. **FY2025 at a glance**: four animated number counters (4-across or 2×2 on desktop, one column on mobile). Each counter:
   - counts up once when scrolled into view
   - shows the value, a label, a context line (e.g. "228 → 187 kWh/m² a year") and a footnote marker [1]–[4] that links or scrolls to the Methodology accordion

   A visible "Sample figures…" note sits under the counters. **Fallback:** static numbers with a fade-in.
3. **Our net-zero journey**: a horizontal timeline (vertical on mobile) with five clickable milestones: 2020, 2023, 2025, 2030 and 2050.
   - **Interaction**: clicking or tapping a milestone shows its detail panel (status label and body). 2025 is selected by default and labelled "We are here".
   - **Progress line**: a "Progress to the 2030 target" line, with a bar if available, sits under the timeline.
   - **Fallback**: tabs labelled by year, or an accordion.
4. **Our approach**: a tabs component with three tabs: Environmental, Social, Governance. Each panel has an intro line, an image placeholder and four initiative cards (title, 1–2 sentences, key figure).
5. **Certifications and ratings**: five **text-only** badges, all styled the same from the brand kit (no scheme logos, no per-badge colours). Each badge shows the scheme, rating and number of buildings, and clicking it opens a popup with a scheme description and a close button. An "In progress" line about Building F sits below. **Fallback:** description shown as small text under each badge.
6. **Case highlight**: one card with a label, title, context line, image placeholder and 3-sentence story. It also has four stats (counters or static) with footnote [5], and a placeholder tenant quote with attribution.
7. **Methodology and footnotes**: an accordion with nine items, all collapsed by default, one open at a time. Footnote markers elsewhere on the page link or scroll to their matching item. **Fallback:** every marker links to the start of this section.
8. **Closing CTA band**: heading, one line of body copy, and two buttons ("Talk to our ESG consultants" and "Read our ESG insights"). Both open in a new tab. *(Optional, from follow-up 10)* A decorative background image placeholder (slot CTA).
9. **Footer**: disclaimer placeholder paragraph (with sample wording) and the visible sample-content note.
10. *(Optional, from follow-up 9)* **Navigation**: a slim top bar with anchor links to sections 2–8, or "Back to top" links.

## Follow-up refinement prompts

Paste these one at a time in the AI chat after the first generation, and preview after each one. Skip any that the first pass already handled. None of them contain styling requests; if the AI offers brand kit changes, decline with: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`

**1. Hero meta line and KPI counters**

```text
Update the hero and the "FY2025 at a glance" section.

Hero: under the subhead add the meta line "Singapore office portfolio (anonymised) · 6 buildings · 2.4 million sq ft NLA · Reporting period: 1 January–31 December 2025 · Published October 2026". "See our progress" scrolls to "FY2025 at a glance"; "Talk to our ESG team" scrolls to the closing call to action.

At a glance: add the intro "Progress against our 2020 baseline on the four measures our tenants and investors ask about most." Four counters that count up once from zero when scrolled into view. For each, show the number, then the label, then a small context line, then the footnote marker, linked to the matching Methodology item:
1. 18% | "lower energy use intensity (EUI) than the 2020 baseline" | "228 → 187 kWh/m² a year" | [1]
2. 4,370 tCO2e | "lower annual Scope 1 & 2 emissions than 2020 (-26%, market-based)" | "16,800 → 12,430 tCO2e" | [2]
3. 86% | "of portfolio gross floor area certified under BCA Green Mark" | "5 of 6 buildings" | [3]
4. 12% | "of landlord-controlled electricity from renewable sources" | "4% on-site solar + 8% renewable energy certificates" | [4]
Keep the thousands separator in 4,370 and write the unit as "tCO2e". Set the note under the counters to: "Sample figures for template purposes. See Methodology and footnotes." If animated counters are not available, show static numbers with a simple fade-in.
```

**2. Net-zero journey milestones**

```text
Set the "Our net-zero journey" timeline to these five milestones. Show the year and title on the timeline; clicking or tapping a milestone opens its detail panel (status label, then body). Select 2025 by default and label it "We are here". Intro under the heading: "Select a milestone to see what has been done and what we have committed to."

2020 | Baseline set | Status: Complete | "We measured energy, water, waste and emissions across all six buildings to set our baseline: 16,800 tCO2e of Scope 1 & 2 emissions (market-based) and an energy use intensity of 228 kWh/m² a year, normalised for the impact of COVID-19 on 2020 building use."
2023 | Retrofit programme launched | Status: Complete | "Chiller replacements began at three buildings, LED lighting was rolled out across all landlord areas, and a smart building analytics platform was connected in all six buildings. Green lease clauses became standard for new leases."
2025 | Where we are today | Status: In progress | "Energy use intensity is 18% lower and Scope 1 & 2 emissions are 26% lower than in 2020 (market-based). 1,150 kWp of rooftop solar now operates on four buildings, and five of six buildings hold BCA Green Mark certification."
2030 | Interim target | Status: Target | "Cut absolute Scope 1 & 2 emissions by 42% vs 2020, to about 9,740 tCO2e; certify 100% of floor area under BCA Green Mark; source 30% of landlord electricity from renewables. Next steps: Building F upgrade (2027), solar on the remaining two rooftops, low-GWP refrigerants in all chiller replacements."
2050 | Net zero | Status: Target | "Reach net zero Scope 1 & 2 emissions: reduce them by at least 90% vs 2020 and neutralise the remainder with permanent carbon removals. This supports Singapore's national goal of net zero emissions by 2050."

Under the timeline add: "Progress to the 2030 target: 26 of 42 percentage points achieved (about 62%)." with a simple progress bar if available, otherwise text only. On mobile, show the timeline vertically. If a clickable timeline is not possible, use tabs labelled 2020, 2023, 2025, 2030, 2050, or an accordion.
```

**3. Environmental tab**

```text
Set the "Environmental" tab. Intro: "Cutting energy and carbon in the buildings we operate." Image placeholder: rooftop solar panels on an office building. Four initiative cards (title | text | key figure):

1. Chiller plant upgrades | "Replaced end-of-life chillers at three buildings and re-tuned the plant controls." | "Plant efficiency improved from 0.78 to 0.60 kW/RT; about 2.1 GWh saved a year"
2. Smart analytics and LED lighting | "Fault detection and diagnostics across all six buildings, plus LED lighting with occupancy sensors in all landlord areas." | "About 3.5 GWh saved a year"
3. Rooftop solar | "Solar panels on four rooftops supply part of each building's common-area electricity." | "1,150 kWp installed; about 1.2 GWh generated in 2025"
4. Water and waste | "Smart water meters, leak detection and separate recycling streams for tenants." | "Water use intensity 12% lower than 2020; recycling rate 28% (2020: 17%)"
```

**4. Social and Governance tabs**

```text
Set the "Social" and "Governance" tabs, each with an intro, an image placeholder and four initiative cards (title | text | key figure).

Social. Intro: "Healthy, safe and inclusive places for the people who use our buildings." Image placeholder: colleagues in a bright office lounge with indoor plants.
1. Healthy indoor environments | "Real-time indoor air quality sensors in every lobby and common area, with readings shared with tenants." | "100% of common areas monitored; 2 buildings WELL Health-Safety Rated"
2. Safety first | "Permit-to-work systems, contractor safety briefings and quarterly safety audits at every building." | "Zero fatalities; lost-time injury rate of 0.4 per million hours worked"
3. Active and inclusive buildings | "End-of-trip facilities, nursing rooms and barrier-free access across the portfolio." | "420 bicycle bays; end-of-trip facilities in 6 of 6 buildings"
4. Tenants and community | "A tenant sustainability programme with quarterly energy dashboards, plus volunteering with local charities." | "140 tenants receive energy dashboards; 1,250 volunteer hours in 2025"

Governance. Intro: "Clear oversight, transparent reporting and responsible partners." Image placeholder: executives reviewing a report in a meeting room.
1. ESG oversight | "A portfolio ESG committee meets monthly and reports to the board every quarter." | "ESG targets make up 15% of senior management scorecards"
2. Transparent reporting | "Climate-related disclosures prepared with reference to IFRS S2, and annual participation in the GRESB Real Estate Assessment." | "GRESB score 82/100 (sample)"
3. Green leases | "Lease clauses covering energy data sharing, fit-out standards and joint efficiency targets." | "64% of leased floor area on green leases"
4. Responsible supply chain | "A supplier code of conduct and ESG criteria in all major tenders." | "100% of key contractors have signed the code; ESG criteria in all tenders above S$500,000"
```

**5. Certification badges and popups**

```text
Set the "Certifications and ratings" section. Intro: "Independent certifications held across the portfolio as at 31 December 2025. Scheme names are shown as text only."

Five text badges, no images, all using the same badge style from the brand kit. Each badge shows the scheme and rating and the number of buildings, and opens a popup (with a close button) containing the description:
1. BCA Green Mark Platinum | 2 buildings (A, B) | "BCA Green Mark is the Building and Construction Authority's green building certification scheme for Singapore. It assesses energy and water efficiency, indoor environmental quality and other sustainability criteria. Rating levels include Gold, GoldPLUS and Platinum."
2. BCA Green Mark GoldPLUS | 2 buildings (C, D) | same description as badge 1.
3. BCA Green Mark Gold | 1 building (E) | same description as badge 1.
4. LEED Gold, Operations + Maintenance | 1 building (A) | "LEED is the U.S. Green Building Council's green building rating system. The Operations + Maintenance rating assesses how an existing building performs in use. Ratings include Certified, Silver, Gold and Platinum."
5. WELL Health-Safety Rated | 2 buildings (A, B) | "The WELL Health-Safety Rating from the International WELL Building Institute assesses operational policies, maintenance protocols and emergency plans that support occupant health and safety."

Below the badges: "In progress: Building F is targeting BCA Green Mark Platinum after asset enhancement works due for completion in 2027." If popups are not available, show each description as small text under its badge.
```

**6. Case highlight card**

```text
Set the "Case highlight" card:
Label: "Case highlight | Building C (anonymised)"
Title: "Retrofitting a 25-year-old office tower"
Context line: "Grade A office · 420,000 sq ft NLA · completed 1999 · works carried out 2023–2024"
Story: "Building C's original chiller plant and building controls were reaching the end of their life. The owner replaced the chillers, upgraded the building management system with smart analytics and switched all landlord areas to LED lighting, phasing the works around tenants' business hours. The building's BCA Green Mark rating moved from Gold to GoldPLUS in 2025."
Four stats as number counters (or static text), each with a label:
-20% | energy use intensity (245 → 196 kWh/m² a year)
2.3 GWh | electricity saved a year
S$620,000 | approximate energy cost savings a year
5.5 years | simple payback on S$3.4 million capital cost
Add footnote marker [5] after the stats, linked to the Methodology item.
Quote: "[Tenant quote placeholder] The upgrade works were planned around our business hours, and the building is noticeably more comfortable." — Firstname Lastname, Head of Workplace, a regional financial services firm (tenant)
Keep the image placeholder: engineer checking equipment in a chiller plant room.
```

**7. Methodology accordion, items 1–5**

```text
Set the "Methodology and footnotes" accordion: all items collapsed by default, one open at a time. Intro: "How the figures in this snapshot are defined and calculated." Items 1–5:

1. Reporting boundary and period: "Six office buildings in Singapore (Buildings A–F; 2.4 million sq ft NLA; about 270,000 m² gross floor area) held throughout 1 January–31 December 2025. Unless stated, data covers landlord-controlled areas and central building services under the GHG Protocol operational control approach. The 2020 baseline covers the same six buildings."
2. [1] Energy use intensity: "Whole-building electricity use (landlord and tenant meters) divided by gross floor area, in kWh/m² a year: 228 in 2020, 187 in FY2025. Because COVID-19 measures reduced building use in 2020, the baseline was normalised to typical (2019) operating hours and occupancy. Figures are not weather-normalised."
3. [2] Greenhouse gas emissions: "Scope 1 (refrigerant leakage and standby diesel) and Scope 2 (purchased electricity) for landlord-controlled operations. Market-based Scope 2 assigns zero emissions to electricity matched by retired renewable energy certificates and applies the Singapore grid emission factor published by the Energy Market Authority to the rest. 2020: 16,800 tCO2e; FY2025: 12,430 tCO2e (-26%). Location-based reduction: 20%. Tenant-controlled emissions (Scope 3) are not included."
4. [3] Green building certification: "Share of portfolio gross floor area in buildings holding a valid BCA Green Mark certification on 31 December 2025 (5 of 6 buildings). Building F (14% of floor area) is not yet certified."
5. [4] Renewable electricity: "Share of landlord-controlled electricity from on-site rooftop solar (4%; about 1.2 GWh) and unbundled renewable energy certificates retired for FY2025 (8%). Certificates support renewable generation but do not by themselves add new renewable capacity in Singapore."
```

**8. Methodology accordion, items 6–9**

```text
Add these items to the end of the "Methodology and footnotes" accordion:

6. [5] Case highlight: "Building C savings compare 12 months of metered data before (2022) and after (2025) the works, adjusted for operating hours. Cost savings assume an average tariff of S$0.27 per kWh. Simple payback = capital cost ÷ annual cost savings (S$3.4 million ÷ S$620,000 ≈ 5.5 years), excluding grants, maintenance savings and financing costs."
7. Targets: "The 2030 target (-42% absolute Scope 1 & 2 emissions vs 2020, to about 9,740 tCO2e) follows a 1.5°C-aligned linear reduction rate of 4.2% a year. It has not been externally validated. Net zero by 2050 means reducing Scope 1 & 2 emissions by at least 90% vs 2020 and neutralising the remainder (no more than 1,680 tCO2e) with permanent carbon removals. Carbon offsets are not counted towards reduction targets."
8. Data quality and assurance: "All figures in this template are illustrative sample data and have not been independently assured. Live versions must state whether data has been assured, by whom and to what level (limited or reasonable), and note any restatements."
9. Trademarks: "BCA Green Mark is a certification scheme of the Building and Construction Authority, Singapore. LEED is a trademark of the U.S. Green Building Council. WELL and WELL Health-Safety Rating are trademarks of the International WELL Building Institute. Scheme names are shown as text only."

Make each footnote marker [1]–[5] elsewhere on the page link or scroll to its matching item here. If a link can't open or target a specific accordion item, link every marker to the start of the "Methodology and footnotes" section instead.
```

**9. Navigation (optional)**

```text
Add a slim navigation bar at the top with anchor links: "At a glance", "Journey", "Approach", "Certifications", "Case highlight", "Methodology", "Contact". Keep it visible while scrolling if that is supported. If a persistent bar is not possible, add a small "Back to top" link at the end of the Journey, Approach and Methodology sections instead. On mobile, collapse the links into a menu or hide the bar and keep the "Back to top" links.
```

**10. Closing CTA, disclaimer and footer**

```text
Update the closing call to action and footer.

CTA heading "Ready to plan your path to net zero?"; body "CBRE's ESG and sustainability consultants help owners and occupiers in Singapore set targets, cut energy and carbon in their buildings, and report progress transparently."; buttons "Talk to our ESG consultants" → https://www.cbre.com.sg/contact-us and "Read our ESG insights" → https://www.cbre.com.sg/insights, both opening in a new tab. If the band supports a background image, add a decorative image placeholder of an office interior with indoor plants and daylight; otherwise skip it.

Footer, in this order:
1. "[Disclaimer placeholder — insert the approved CBRE disclaimer before publishing.] Sample wording: This snapshot is provided for general information only and does not constitute investment, financial, legal, tax or technical advice. Figures are illustrative sample data, have not been independently verified or assured and should not be relied on. Targets and other forward-looking statements are subject to risks and uncertainties, and actual results may differ. Readers should seek independent professional advice before acting on any information herein."
2. "Sample content for template purposes only — replace before publishing."
Make sure both lines are visible on desktop and mobile and are not hidden behind any element.
```

**11. Claims wording and accessibility pass**

```text
Do a wording and accessibility pass. Wording: do not add any environmental claims beyond the copy I supplied; do not use phrases such as "carbon neutral", "zero carbon", "eco-friendly", "100% green" or "sustainable building" as absolute claims; keep 2030 and 2050 described as targets, not achievements; keep every KPI's footnote marker and the "Sample data" labels. Accessibility: use one H1 (the hero headline) and an H2 for each section heading; give every image placeholder descriptive alt text; make sure tabs, timeline milestones, badges, popups and accordion items work with a keyboard; give each footnote marker an accessible label such as "Footnote 1: energy use intensity"; and check that on mobile counters, initiative cards, badges and the timeline stack in a single column with no text overlapping or cut off.
```

**12. Reset styling drift (use only if needed)**

```text
Remove any custom styling you applied to individual elements, including any per-badge styling in the Certifications section, and apply the selected brand kit's default styles consistently to all headings, body text, buttons, badges, cards, tabs, popups and accordions. Do not create, change or update the brand kit itself.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | `[Template] ESG & Sustainability Snapshot` | Settings | When you duplicate it, rename to e.g. `<Portfolio/Client> ESG Snapshot FY2026` and remove `[Template]`. |
| SEO / share title | ESG & Sustainability Snapshot FY2025 – Singapore office portfolio | Settings | Set in experience settings if available. |
| SEO / share description | How a six-building Singapore office portfolio is cutting energy use and emissions on its path to net zero by 2050. | Settings | Keep under about 160 characters. |
| Share image | Crop of hero image H1 | Settings | 1200 × 630 px. |
| Portfolio / client descriptor | Singapore office portfolio (anonymised) | Prompt intro, hero meta | Name a client or portfolio only with the client's **written approval** to publish its data. Otherwise keep it anonymised (e.g. "a regional real estate investment manager's Singapore office portfolio"). |
| Reporting year label | FY2025 | Eyebrow, KPI heading, methodology | Find and replace every instance. |
| Reporting period | 1 January–31 December 2025 | Hero meta, methodology 1 | Match the client's financial/reporting year. |
| Publish date | Published October 2026 | Hero meta | |
| Portfolio facts | 6 buildings · 2.4 million sq ft NLA · about 270,000 m² GFA | Hero meta, methodology 1 | Must be the same everywhere. |
| Hero eyebrow | ESG & Sustainability Snapshot \| FY2025 \| Sample data | Hero | Remove "Sample data" only once real, approved data is in. |
| Hero headline (H1) | On the path to net zero | Hero | Avoid absolute claims (e.g. "Net zero achieved") unless verified. |
| Hero subhead | How a six-building Singapore office portfolio is cutting energy use and emissions, and what comes next. | Hero | |
| Hero buttons | See our progress (→ section 2); Talk to our ESG team (→ section 8) | Hero | Anchor links. |
| Section headings | FY2025 at a glance · Our net-zero journey · Our approach · Certifications and ratings · Case highlight · Methodology and footnotes · Ready to plan your path to net zero? | Sections 2–8 | Keep in sync with the navigation labels. |
| Hero image | Office facade with vertical planting | Hero | Image slot H1. Must not show an identifiable real building. |
| KPI intro | Progress against our 2020 baseline on the four measures our tenants and investors ask about most. | At a glance | |
| KPI 1 – EUI reduction | 18% / 228 → 187 kWh/m² a year / [1] | At a glance | % = (baseline − current) ÷ baseline. Must match methodology 2 and the 2025 milestone. |
| KPI 2 – Emissions reduction | 4,370 tCO2e (−26%, market-based) / 16,800 → 12,430 / [2] | At a glance | Always state the basis (market- or location-based) and disclose the other basis in the methodology. Must match methodology 3 and the timeline. |
| KPI 3 – Green Mark coverage | 86% of GFA / 5 of 6 buildings / [3] | At a glance | By floor area, not building count. Must match the badges and methodology 4. |
| KPI 4 – Renewable electricity | 12% / 4% on-site solar + 8% RECs / [4] | At a glance | Split on-site vs certificates. Must match methodology 5 and the Environmental tab (about 1.2 GWh of solar), and keep the energy and emissions balance in the arithmetic check true. |
| KPI sample note | Sample figures for template purposes. See Methodology and footnotes. | At a glance | Replace with "Data verified by [team/assurance provider]. See Methodology." when live. |
| Timeline intro | Select a milestone to see what has been done and what we have committed to. | Journey | |
| Milestones (×5) | 2020 Baseline set; 2023 Retrofit programme launched; 2025 Where we are today; 2030 Interim target; 2050 Net zero | Journey | Each has a year, title, status (Complete / In progress / Target) and body. Keep future items worded as targets. |
| "We are here" marker | 2025 | Journey | Move to the current reporting year. |
| Progress-to-target line | 26 of 42 percentage points achieved (about 62%) | Journey | = current % reduction ÷ target % reduction. |
| 2030 interim target | −42% absolute Scope 1 & 2 vs 2020 (about 9,740 tCO2e); 100% Green Mark by GFA; 30% renewable electricity | Journey, methodology 7 | Use the client's **approved, published** targets only. State whether they are externally validated. |
| 2050 net-zero definition | ≥ 90% reduction vs 2020; residual neutralised by permanent removals | Journey, methodology 7 | |
| Pillar tab labels | Environmental; Social; Governance | Approach | |
| Pillar intros (×3) | See Sample content | Approach | |
| Initiative cards (×12) | 4 per pillar: title, text, key figure | Approach | Every key figure needs a source. Remove an initiative rather than keep an unverifiable figure. |
| Pillar images (×3) | Solar rooftop; office lounge; meeting room | Approach | Image slots P1–P3. |
| Certifications intro | Independent certifications held across the portfolio as at 31 December 2025… | Certifications | Update the "as at" date. |
| Badges (×5) | Green Mark Platinum (2), GoldPLUS (2), Gold (1); LEED Gold O+M (1); WELL Health-Safety Rated (2) | Certifications | Text only. Use scheme logos only if licensed and approved under each scheme's mark-usage rules. Check that every certification is current (not expired) on the "as at" date. |
| Badge popup descriptions | See Sample content | Certifications | Check against each scheme's current official description. |
| In-progress note | Building F is targeting BCA Green Mark Platinum after… 2027 | Certifications | Delete if not applicable. Never present a target rating as achieved. |
| Case highlight label/title/context | Case highlight \| Building C (anonymised) / Retrofitting a 25-year-old office tower / Grade A · 420,000 sq ft NLA · 1999 · 2023–2024 | Case highlight | Use a real building name only with the owner's written consent. |
| Case story | 3 sentences | Case highlight | |
| Case stats (×4) | −20% EUI; 2.3 GWh/yr; S$620,000/yr; 5.5-year payback | Case highlight | Financial figures need the tariff and payback basis in methodology 6, plus the disclaimer. |
| Case quote + attribution | [Tenant quote placeholder]… — Firstname Lastname, Head of Workplace, a regional financial services firm (tenant) | Case highlight | **Placeholder.** Use a real quote only with written approval of the person and their organisation; otherwise delete. |
| Case image | Engineer in a chiller plant room | Case highlight | Image slot C1. |
| Methodology intro | How the figures in this snapshot are defined and calculated. | Methodology | |
| Case cost assumptions | Average tariff S$0.27/kWh; capital cost S$3.4 million | Case highlight, methodology 6 | Use the building's actual blended tariff and the final project cost. Recompute savings and payback (see arithmetic check). |
| Methodology items (×9) | See Sample content | Methodology | **Mandatory.** Must be reviewed by the CBRE ESG team. Keep the footnote numbers in sync with the markers. |
| CTA heading/body | Ready to plan your path to net zero? / CBRE's ESG and sustainability consultants help… | CTA | |
| CTA URLs | https://www.cbre.com.sg/contact-us; https://www.cbre.com.sg/insights | CTA | **Placeholders.** Replace with the ESG service page or campaign contact URL. |
| CTA background image (optional) | Office interior with indoor plants and daylight | CTA | Image slot CTA. Decorative. |
| Disclaimer | [Disclaimer placeholder — insert the approved CBRE disclaimer…] + sample wording | Footer | **Mandatory.** Get approved wording from Legal/Compliance. Never publish with the placeholder. |
| Sample-content footer note | Sample content for template purposes only — replace before publishing. | Footer | Keep it in the template. **Delete it in the published copy** only after all content is replaced and verified. |
| Navigation labels (optional) | At a glance · Journey · Approach · Certifications · Case highlight · Methodology · Contact | Nav | |

## Sample content

All figures below are illustrative sample data for an anonymised, fictional portfolio. They are internally consistent, so check them as a set when you edit. Live versions must use verified data approved by the CBRE ESG team and the client.

### 1. Hero

- **Eyebrow:** ESG & Sustainability Snapshot | FY2025 | Sample data
- **Headline (H1):** On the path to net zero
- **Subhead:** How a six-building Singapore office portfolio is cutting energy use and emissions, and what comes next.
- **Meta line:** Singapore office portfolio (anonymised) · 6 buildings · 2.4 million sq ft NLA · Reporting period: 1 January–31 December 2025 · Published October 2026
- **Primary button:** See our progress → anchor to "FY2025 at a glance"
- **Secondary button:** Talk to our ESG team → anchor to the closing CTA

### 2. FY2025 at a glance

- **Heading:** FY2025 at a glance
- **Intro:** Progress against our 2020 baseline on the four measures our tenants and investors ask about most.

| Counter | End value | Prefix / suffix | Label | Context line | Footnote |
|---|---|---|---|---|---|
| 1 | 18 | suffix % | lower energy use intensity (EUI) than the 2020 baseline | 228 → 187 kWh/m² a year | [1] |
| 2 | 4,370 | suffix tCO2e | lower annual Scope 1 & 2 emissions than 2020 (-26%, market-based) | 16,800 → 12,430 tCO2e | [2] |
| 3 | 86 | suffix % | of portfolio gross floor area certified under BCA Green Mark | 5 of 6 buildings | [3] |
| 4 | 12 | suffix % | of landlord-controlled electricity from renewable sources | 4% on-site solar + 8% renewable energy certificates | [4] |

- **Note under counters:** Sample figures for template purposes. See Methodology and footnotes.

**Arithmetic check:**

- 228 × (1 − 0.18) ≈ 187.
- 16,800 − 12,430 = 4,370, and 4,370 ÷ 16,800 = 26%.
- 4% + 8% = 12%.
- Landlord-controlled electricity in FY2025 is about 30.6 GWh. So 4% ≈ 1.2 GWh of on-site solar (1,150 kWp at about 1,070 kWh per kWp a year) and 8% ≈ 2.4 GWh matched by certificates.
- At a Singapore grid emission factor of about 0.41 kgCO2/kWh, those certificates account for about 1,010 tCO2e. That is the gap between FY2025 market-based emissions (12,430 tCO2e, −26%) and location-based emissions (about 13,440 tCO2e, −20%). If you change the solar, certificate or emissions figures, recheck this balance.

### 3. Our net-zero journey

- **Heading:** Our net-zero journey
- **Intro:** Select a milestone to see what has been done and what we have committed to.
- **Default selected:** 2025, labelled "We are here"

| Year | Title | Status | Detail panel body |
|---|---|---|---|
| 2020 | Baseline set | Complete | We measured energy, water, waste and emissions across all six buildings to set our baseline: 16,800 tCO2e of Scope 1 & 2 emissions (market-based) and an energy use intensity of 228 kWh/m² a year, normalised for the impact of COVID-19 on 2020 building use. |
| 2023 | Retrofit programme launched | Complete | Chiller replacements began at three buildings, LED lighting was rolled out across all landlord areas, and a smart building analytics platform was connected in all six buildings. Green lease clauses became standard for new leases. |
| 2025 | Where we are today | In progress | Energy use intensity is 18% lower and Scope 1 & 2 emissions are 26% lower than in 2020 (market-based). 1,150 kWp of rooftop solar now operates on four buildings, and five of six buildings hold BCA Green Mark certification. |
| 2030 | Interim target | Target | Cut absolute Scope 1 & 2 emissions by 42% vs 2020, to about 9,740 tCO2e; certify 100% of floor area under BCA Green Mark; source 30% of landlord electricity from renewables. Next steps: Building F upgrade (2027), solar on the remaining two rooftops, low-GWP refrigerants in all chiller replacements. |
| 2050 | Net zero | Target | Reach net zero Scope 1 & 2 emissions: reduce them by at least 90% vs 2020 and neutralise the remainder with permanent carbon removals. This supports Singapore's national goal of net zero emissions by 2050. |

- **Progress line:** Progress to the 2030 target: 26 of 42 percentage points achieved (about 62%).
- **Progress bar value (if used):** 62%

**Arithmetic check:**

- 16,800 × (1 − 0.42) = 9,744, shown as "about 9,740".
- 10% of 16,800 = 1,680 tCO2e maximum residual in 2050.
- 26 ÷ 42 = 0.62.

### 4. Our approach

- **Heading:** Our approach
- **Tabs:** Environmental · Social · Governance

**Tab: Environmental**

- **Intro:** Cutting energy and carbon in the buildings we operate.
- **Image:** slot P1 (rooftop solar)

| Card | Title | Text | Key figure |
|---|---|---|---|
| 1 | Chiller plant upgrades | Replaced end-of-life chillers at three buildings and re-tuned the plant controls. | Plant efficiency improved from 0.78 to 0.60 kW/RT; about 2.1 GWh saved a year |
| 2 | Smart analytics and LED lighting | Fault detection and diagnostics across all six buildings, plus LED lighting with occupancy sensors in all landlord areas. | About 3.5 GWh saved a year |
| 3 | Rooftop solar | Solar panels on four rooftops supply part of each building's common-area electricity. | 1,150 kWp installed; about 1.2 GWh generated in 2025 |
| 4 | Water and waste | Smart water meters, leak detection and separate recycling streams for tenants. | Water use intensity 12% lower than 2020; recycling rate 28% (2020: 17%) |

**Tab: Social**

- **Intro:** Healthy, safe and inclusive places for the people who use our buildings.
- **Image:** slot P2 (office lounge)

| Card | Title | Text | Key figure |
|---|---|---|---|
| 1 | Healthy indoor environments | Real-time indoor air quality sensors in every lobby and common area, with readings shared with tenants. | 100% of common areas monitored; 2 buildings WELL Health-Safety Rated |
| 2 | Safety first | Permit-to-work systems, contractor safety briefings and quarterly safety audits at every building. | Zero fatalities; lost-time injury rate of 0.4 per million hours worked |
| 3 | Active and inclusive buildings | End-of-trip facilities, nursing rooms and barrier-free access across the portfolio. | 420 bicycle bays; end-of-trip facilities in 6 of 6 buildings |
| 4 | Tenants and community | A tenant sustainability programme with quarterly energy dashboards, plus volunteering with local charities. | 140 tenants receive energy dashboards; 1,250 volunteer hours in 2025 |

**Tab: Governance**

- **Intro:** Clear oversight, transparent reporting and responsible partners.
- **Image:** slot P3 (meeting room)

| Card | Title | Text | Key figure |
|---|---|---|---|
| 1 | ESG oversight | A portfolio ESG committee meets monthly and reports to the board every quarter. | ESG targets make up 15% of senior management scorecards |
| 2 | Transparent reporting | Climate-related disclosures prepared with reference to IFRS S2, and annual participation in the GRESB Real Estate Assessment. | GRESB score 82/100 (sample) |
| 3 | Green leases | Lease clauses covering energy data sharing, fit-out standards and joint efficiency targets. | 64% of leased floor area on green leases |
| 4 | Responsible supply chain | A supplier code of conduct and ESG criteria in all major tenders. | 100% of key contractors have signed the code; ESG criteria in all tenders above S$500,000 |

### 5. Certifications and ratings

- **Heading:** Certifications and ratings
- **Intro:** Independent certifications held across the portfolio as at 31 December 2025. Scheme names are shown as text only.

| Badge | Scheme and rating | Buildings | Popup description |
|---|---|---|---|
| 1 | BCA Green Mark Platinum | 2 buildings (A, B) | BCA Green Mark is the Building and Construction Authority's green building certification scheme for Singapore. It assesses energy and water efficiency, indoor environmental quality and other sustainability criteria. Rating levels include Gold, GoldPLUS and Platinum. |
| 2 | BCA Green Mark GoldPLUS | 2 buildings (C, D) | Same as badge 1. |
| 3 | BCA Green Mark Gold | 1 building (E) | Same as badge 1. |
| 4 | LEED Gold, Operations + Maintenance | 1 building (A) | LEED is the U.S. Green Building Council's green building rating system. The Operations + Maintenance rating assesses how an existing building performs in use. Ratings include Certified, Silver, Gold and Platinum. |
| 5 | WELL Health-Safety Rated | 2 buildings (A, B) | The WELL Health-Safety Rating from the International WELL Building Institute assesses operational policies, maintenance protocols and emergency plans that support occupant health and safety. |

- **In-progress line:** In progress: Building F is targeting BCA Green Mark Platinum after asset enhancement works due for completion in 2027.
- **Consistency check:** Green Mark badges cover 2 + 2 + 1 = 5 of 6 buildings, matching KPI 3. Building F (14% of GFA) is uncertified, so 86% of GFA is certified. LEED and WELL are additional certifications on buildings that already hold Green Mark.

### 6. Case highlight

- **Label:** Case highlight | Building C (anonymised)
- **Title:** Retrofitting a 25-year-old office tower
- **Context line:** Grade A office · 420,000 sq ft NLA · completed 1999 · works carried out 2023–2024
- **Story:** Building C's original chiller plant and building controls were reaching the end of their life. The owner replaced the chillers, upgraded the building management system with smart analytics and switched all landlord areas to LED lighting, phasing the works around tenants' business hours. The building's BCA Green Mark rating moved from Gold to GoldPLUS in 2025.

| Stat | Value | Label |
|---|---|---|
| 1 | -20% | energy use intensity (245 → 196 kWh/m² a year) |
| 2 | 2.3 GWh | electricity saved a year |
| 3 | S$620,000 | approximate energy cost savings a year |
| 4 | 5.5 years | simple payback on S$3.4 million capital cost |

- **Footnote marker:** [5]
- **Quote (placeholder):** "[Tenant quote placeholder] The upgrade works were planned around our business hours, and the building is noticeably more comfortable." — Firstname Lastname, Head of Workplace, a regional financial services firm (tenant)

**Arithmetic check:**

- Building C GFA is about 46,900 m².
- (245 − 196) × 46,900 ≈ 2.3 GWh.
- 2.3 GWh × S$0.27/kWh ≈ S$621,000, shown as "S$620,000".
- S$3.4 million ÷ S$620,000 ≈ 5.5 years.

### 7. Methodology and footnotes

- **Heading:** Methodology and footnotes
- **Intro:** How the figures in this snapshot are defined and calculated.
- **Behaviour:** all items collapsed by default, one open at a time; footnote markers [1]–[5] link or scroll here.

| # | Accordion header | Body |
|---|---|---|
| 1 | Reporting boundary and period | Six office buildings in Singapore (Buildings A–F; 2.4 million sq ft NLA; about 270,000 m² gross floor area) held throughout 1 January–31 December 2025. Unless stated, data covers landlord-controlled areas and central building services under the GHG Protocol operational control approach. The 2020 baseline covers the same six buildings. |
| 2 | [1] Energy use intensity | Whole-building electricity use (landlord and tenant meters) divided by gross floor area, in kWh/m² a year: 228 in 2020, 187 in FY2025. Because COVID-19 measures reduced building use in 2020, the baseline was normalised to typical (2019) operating hours and occupancy. Figures are not weather-normalised. |
| 3 | [2] Greenhouse gas emissions | Scope 1 (refrigerant leakage and standby diesel) and Scope 2 (purchased electricity) for landlord-controlled operations. Market-based Scope 2 assigns zero emissions to electricity matched by retired renewable energy certificates and applies the Singapore grid emission factor published by the Energy Market Authority to the rest. 2020: 16,800 tCO2e; FY2025: 12,430 tCO2e (-26%). Location-based reduction: 20%. Tenant-controlled emissions (Scope 3) are not included. |
| 4 | [3] Green building certification | Share of portfolio gross floor area in buildings holding a valid BCA Green Mark certification on 31 December 2025 (5 of 6 buildings). Building F (14% of floor area) is not yet certified. |
| 5 | [4] Renewable electricity | Share of landlord-controlled electricity from on-site rooftop solar (4%; about 1.2 GWh) and unbundled renewable energy certificates retired for FY2025 (8%). Certificates support renewable generation but do not by themselves add new renewable capacity in Singapore. |
| 6 | [5] Case highlight | Building C savings compare 12 months of metered data before (2022) and after (2025) the works, adjusted for operating hours. Cost savings assume an average tariff of S$0.27 per kWh. Simple payback = capital cost ÷ annual cost savings (S$3.4 million ÷ S$620,000 ≈ 5.5 years), excluding grants, maintenance savings and financing costs. |
| 7 | Targets | The 2030 target (-42% absolute Scope 1 & 2 emissions vs 2020, to about 9,740 tCO2e) follows a 1.5°C-aligned linear reduction rate of 4.2% a year. It has not been externally validated. Net zero by 2050 means reducing Scope 1 & 2 emissions by at least 90% vs 2020 and neutralising the remainder (no more than 1,680 tCO2e) with permanent carbon removals. Carbon offsets are not counted towards reduction targets. |
| 8 | Data quality and assurance | All figures in this template are illustrative sample data and have not been independently assured. Live versions must state whether data has been assured, by whom and to what level (limited or reasonable), and note any restatements. |
| 9 | Trademarks | BCA Green Mark is a certification scheme of the Building and Construction Authority, Singapore. LEED is a trademark of the U.S. Green Building Council. WELL and WELL Health-Safety Rating are trademarks of the International WELL Building Institute. Scheme names are shown as text only. |

**Formulas used:**

- EUI reduction % = (EUI₂₀₂₀ − EUI_current) ÷ EUI₂₀₂₀
- Emissions reduction (tCO2e) = Emissions₂₀₂₀ − Emissions_current; % = reduction ÷ Emissions₂₀₂₀
- Green Mark coverage % = GFA of certified buildings ÷ total portfolio GFA
- Renewable share % = (on-site renewable kWh + kWh covered by retired certificates) ÷ total landlord-controlled kWh
- Progress to 2030 target % = current % reduction ÷ target % reduction
- Simple payback (years) = capital cost ÷ annual energy cost savings
- Annual cost savings = kWh saved × average tariff

### 8. Closing call to action

- **Heading:** Ready to plan your path to net zero?
- **Body:** CBRE's ESG and sustainability consultants help owners and occupiers in Singapore set targets, cut energy and carbon in their buildings, and report progress transparently.
- **Primary button:** Talk to our ESG consultants → https://www.cbre.com.sg/contact-us (new tab)
- **Secondary button:** Read our ESG insights → https://www.cbre.com.sg/insights (new tab)
- **Background (optional):** slot CTA (decorative; office interior with indoor plants and daylight)

### 9. Footer

- **Disclaimer (placeholder, mandatory):** "[Disclaimer placeholder — insert the approved CBRE disclaimer before publishing.] Sample wording: This snapshot is provided for general information only and does not constitute investment, financial, legal, tax or technical advice. Figures are illustrative sample data, have not been independently verified or assured and should not be relied on. Targets and other forward-looking statements are subject to risks and uncertainties, and actual results may differ. Readers should seek independent professional advice before acting on any information herein."
- **Sample note (visible):** Sample content for template purposes only — replace before publishing.

### Optional navigation labels

At a glance · Journey · Approach · Certifications · Case highlight · Methodology · Contact

### Wording guardrails (anti-greenwashing)

- Every number has a footnote or a methodology entry. Remove a figure rather than publish it unsourced.
- Say "lower than", "reduced by" and "target" rather than "eliminated", "carbon neutral", "zero carbon", "eco-friendly" or "100% green".
- Always state the emissions basis (market- or location-based) and disclose both.
- Label renewable energy certificates as certificates. Don't imply they are on-site generation.
- Don't count carbon offsets toward reduction figures.
- Describe certifications with their exact rating and scope (which buildings), and check that each is current.
- Imagery should reflect the actual initiatives (solar, plant rooms, indoor environments). Avoid generic nature imagery that implies benefits not claimed, such as forests, wind turbines or "leaf in hand" shots.
- Before publishing, get review by the CBRE ESG team, Legal/Compliance and (for client data) the client.

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** The user hasn't yet decided whether to license images, which spends Adobe Stock credits on the CBRE account, or to use watermarked comp/preview images for the template. **The executing session must ask before licensing any image.** Until then, use comps or the Ceros placeholders.

Search at https://stock.adobe.com/sg. Selection rules:

- Singapore/Asia context; diverse people (Chinese, Malay, Indian and other backgrounds; mixed genders and ages).
- No visible third-party brands, logos or signage.
- **No identifiable real buildings or landmarks.** This is a property-portfolio template, so a recognisable tower (including well-known green or planted buildings in Singapore) could be mistaken for a CBRE-managed or client asset. Use close-ups, abstract crops and generic interiors.
- Exclude assets marked "Editorial use only".
- If CBRE policy disallows AI-generated stock, turn on the "Exclude generative AI" filter.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| H1 – Hero | Close-up or abstract crop of vertical planting on a modern office facade; no identifiable building, no signage; space for text | `vertical garden facade modern office building close up` (alt: `green wall building facade detail tropical`) | Landscape 16:9, ≥ 2400 px wide | Plants growing on the facade of a modern office building |
| P1 – Environmental tab | Rooftop solar panels on a commercial building, city softly in background, no identifiable skyline or landmark | `rooftop solar panels commercial building city asia` | Landscape 3:2, ≥ 1600 px wide | Solar panels on the roof of an office building |
| P2 – Social tab | Diverse colleagues in a bright office lounge with indoor plants and daylight | `diverse asian colleagues office lounge indoor plants natural light` | Landscape 3:2, ≥ 1600 px wide | Colleagues talking in a bright office lounge with indoor plants |
| P3 – Governance tab | Diverse executives reviewing a printed report in a meeting room; no legible documents or screens | `diverse asian executives meeting room reviewing report` | Landscape 3:2, ≥ 1600 px wide | Executives reviewing a report together in a meeting room |
| C1 – Case highlight | Facilities engineer with a tablet in a chiller plant or mechanical room; no equipment brand names visible | `engineer tablet chiller plant room hvac inspection asia` | Landscape 3:2, ≥ 1600 px wide | Engineer checking equipment in a building's chiller plant room |
| CTA – Closing band background (optional) | Office interior with indoor plants and daylight, no people or with people out of focus | `office interior tropical plants daylight biophilic design` | Landscape 16:9, ≥ 2400 px wide | Decorative (empty alt) |
| B1–B5 – Certification badges | **Not stock.** Text-only badges built in Ceros. Use scheme logos only if licensed and approved under each scheme's mark-usage rules. | — | — | Badge text is the accessible name |
| T1 – Timeline | **No image needed.** Optional icons from the Ceros icon library (flag, wrench, pin, target, globe) | — | Icon | Decorative (empty alt) |
| S1 – Social share image | Crop of H1 | — | 1200 × 630 px | — |

## QA checklist

- [ ] The brand kit is still **CBRE Test** and **unmodified**. No AI offer to change the brand kit was accepted, and no new brand kit was created.
- [ ] No colour, font or logo overrides were added to any element, including per-badge styling in Certifications. If there was drift, follow-up 12 was applied.
- [ ] The experience is in the **CBRE Singapore** folder.
- [ ] The experience is named exactly `[Template] ESG & Sustainability Snapshot`.
- [ ] Tone and structure are consistent with the New Joiner Onboarding reference experience.
- [ ] All nine sections are present in order (ten with the optional navigation).
- [ ] Hero buttons scroll to "FY2025 at a glance" and to the closing CTA.
- [ ] Counters animate (or fade in) and end on exactly 18%, 4,370 tCO2e, 86% and 12%, with thousands separators and units correct. Context lines and footnote markers [1]–[4] are present and link or scroll to Methodology.
- [ ] **Figures are consistent everywhere:** the KPIs, the 2020/2025/2030 milestones, the Environmental tab, the badges and the methodology all match the arithmetic checks in Sample content.
- [ ] Timeline: five milestones are clickable or tappable and each shows the correct status and body. 2025 is selected by default and labelled "We are here". The progress line reads 62%. The timeline is vertical on mobile (or the fallback tabs/accordion work).
- [ ] Tabs: Environmental, Social and Governance each switch correctly and show an intro, image and four initiative cards.
- [ ] Certifications: five text-only badges, all styled the same; each popup opens and closes (or the fallback text shows). Building counts match, and the Building F "In progress" line is present.
- [ ] Case highlight: four stats, footnote [5] and the quote placeholder with attribution are present.
- [ ] Methodology accordion: nine items, collapsed by default, one open at a time, with numbering that matches the markers. Each footnote marker [1]–[5] goes to its matching item, or (fallback) to the start of the Methodology section.
- [ ] No absolute or unqualified environmental claims ("carbon neutral", "zero carbon", "eco-friendly", "100% green"). 2030 and 2050 are described as targets. Renewable energy certificates are described as certificates.
- [ ] "Sample data" appears in the hero eyebrow and the sample note appears under the counters.
- [ ] All interactions were tested in preview on **desktop and mobile**: counters, timeline, tabs, badge popups, accordion, footnote links, anchor links, buttons and the nav if added.
- [ ] Mobile: counters, cards, badges and the timeline stack in one column; nothing is overlapping, cut off or scrolling horizontally.
- [ ] The **disclaimer placeholder** paragraph (investment/financial and forward-looking wording) is present and visible in the footer.
- [ ] The **"Sample content for template purposes only — replace before publishing."** footer note is visible on desktop and mobile.
- [ ] CTAs point to placeholders: Talk to our ESG consultants → https://www.cbre.com.sg/contact-us; Read our ESG insights → https://www.cbre.com.sg/insights. Both open in a new tab.
- [ ] Image placeholders have been replaced with the agreed images (licensed or comp, **per the user's decision**). No stock image was licensed without asking.
- [ ] No third-party logos or brands, no identifiable real building or landmark, and no "Editorial use only" assets.
- [ ] Alt text is set on every image, matching the image slots table. Decorative images have empty alt text.
- [ ] If the optional CTA background image is used, the text over it is readable on desktop and mobile. If it isn't, remove the background image; don't change colours.
- [ ] No real client names, real people or real property names/addresses appear anywhere (Buildings A–F and the quote attribution are anonymised placeholders).
- [ ] Heading structure is one H1 and an H2 per section. Button labels are descriptive.
