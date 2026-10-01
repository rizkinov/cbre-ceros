# [Template] Quarterly Market Outlook

- **Slug:** `quarterly-market-outlook`
- **Ceros starting point:** Free prompt. Alternative: if a real MarketView PDF is supplied, use the "Create an interactive report from a PDF" chip and then apply the follow-up prompts below to reach the same structure.
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline.
- **Experience name:** `[Template] Quarterly Market Outlook`
- **Primary audience:** Occupiers, landlords, investors and media following the Singapore commercial property market. The CBRE Singapore Research and Marketing teams duplicate it each quarter.
- **Est. build time:** 3–4 hours (about 20 min generation and refinement, 1.5–2 h content and chart checks, 1 h images, alt text and QA)

## Purpose

This is a reusable, scrolling, interactive version of the CBRE Singapore quarterly market update. It covers Office, Industrial & Logistics, Retail and Residential in one experience: key takeaways, sector tabs with animated KPIs and an 8-quarter rent trend, a 12-month outlook, and analyst contacts. Each quarter, the Research team (with Marketing) duplicates the template, swaps in that quarter's verified figures, copy and charts, and links it to the full PDF report.

## Ceros AI prompt

Before you paste:

1. Open the existing **New Joiner Onboarding** experience in the CBRE Singapore folder. Note its tone, section rhythm and how it uses components, so this build feels like part of the same family. If the generated result differs noticeably, adjust it with the follow-up prompts. Do not add any styling instructions.
2. In the "What will you build today?" box, set **Brand Kit = CBRE Test** and **Folder = CBRE Singapore**.
3. Paste the block below verbatim and generate.
4. If the AI offers to update, extend or modify the brand kit at any point, decline. Reply: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`
5. Rename the experience to `[Template] Quarterly Market Outlook`.

```text
Create a responsive single-page interactive research report titled "Singapore Market Outlook Q3 2026" for a commercial real estate research team. Use the selected brand kit's styles as-is. Tone: professional, concise, data-led. Use labelled image placeholders only (no recognisable real buildings or landmarks).

Sections, in order:

1. Hero: eyebrow "CBRE Research | Singapore | Q3 2026"; headline "Singapore Market Outlook Q3 2026"; subhead "Quality space leads a steady quarter across Singapore's commercial property markets."; date line "Published October 2026"; full-width skyline image placeholder; buttons "Explore the sectors" (scrolls to section 3) and "Download full report".

2. Key takeaways: four cards, each with sector label, one large stat and one line:
- Office: S$12.45 psf/mth, Grade A CBD rent, +0.8% QoQ
- Industrial & Logistics: 7.8%, prime logistics vacancy, down 0.4 pp QoQ
- Retail: S$38.40 psf/mth, prime Orchard Road rent, +0.5% QoQ
- Residential: +0.9%, private home prices QoQ

3. Sector deep dive: tabs "Office", "Industrial & Logistics", "Retail", "Residential". Each tab: sector image placeholder; four number counters that count up when scrolled into view (number, unit, label); a simple line chart "Rent trend, last 8 quarters (S$ psf/mth)", Q4 2024 to Q3 2026, with "Source: CBRE Research (sample data)" below; a 2–3 sentence outlook. Office counters: 12.45 S$ psf/mth Grade A CBD rent | 4.6% Core CBD vacancy | 312,000 sq ft net absorption | +0.8% QoQ rent change. Office chart: 12.05, 12.10, 12.10, 12.15, 12.20, 12.25, 12.35, 12.45. Other tabs: same layout with placeholder text; I will send their data next.

4. "Outlook for the next 12 months": accordion, one item open at a time: Office, Industrial & Logistics, Retail, Residential, Key risks to watch, each with a 2-sentence forecast.

5. "Talk to our analysts": three contact cards: circular photo placeholder, "Firstname Lastname", job title, email, phone, "Email" button.

6. Closing CTA: heading "Get the full Q3 2026 report"; buttons "Download full report" (https://www.cbre.com.sg/insights) and "Contact our team" (https://www.cbre.com.sg/contact-us). External links open in a new tab.

7. Footer: "[Disclaimer placeholder: insert the approved CBRE Research disclaimer before publishing.]" and the visible note "Sample content for template purposes only — replace before publishing."

On mobile, stack cards, counters and contact cards in one column.
```

## Expected structure

After generation, check each section against this list. Use the follow-up prompts to fix anything missing.

1. **Hero**: full-width section with an image placeholder, eyebrow, H1 headline, subhead and publish date. It has two buttons: "Explore the sectors" scrolls (anchor link) to section 3; "Download full report" links out in a new tab.
2. **Key takeaways**: a four-card grid (2×2 or 4-across on desktop, one column on mobile). Each card has a sector label, a prominent stat and a one-line summary. Card content is static, with an optional entrance animation. After follow-up 4, each sector label links to its tab in section 3 (fallback: to the top of section 3).
3. **Sector deep dive**: a tabs component with four tabs. Clicking a tab switches the panel. Each panel has:
   - a sector image placeholder
   - four animated number counters that count up once when scrolled into view or when the tab opens
   - a simple 8-point line chart (fallback: shape-built bar chart or a chart image placeholder)
   - a source line
   - an outlook paragraph
4. **Outlook for the next 12 months**: heading, intro line and an accordion with five items. Clicking a header expands or collapses it. The first item is open by default, and only one item is open at a time. **Fallback:** if the accordion can't enforce one-open-at-a-time, independent expand/collapse is acceptable.
5. **Talk to our analysts**: three contact cards (photo placeholder, name, title, email, phone). Each card's "Email" button opens a `mailto:` link.
6. **Closing CTA band**: heading, one line of body copy, and two buttons ("Download full report" and "Contact our team"). Both open in a new tab.
7. **Footer**: disclaimer placeholder paragraph and the visible sample-content note.
8. *(Optional, from follow-up 8)* **Navigation**: a top or sticky bar with anchor links to sections 2–6, or "Back to top" links.

## Follow-up refinement prompts

Paste these one at a time in the AI chat after the first generation. Skip any that the first pass already handled. None of them contain styling requests; if the AI offers brand kit changes, decline.

**1. Fill the other three sector tabs**

```text
Fill the remaining sector tabs with this content, using exactly the same layout as the Office tab.

Industrial & Logistics
Counters: S$1.95 psf/mth Prime logistics rent | 7.8% Prime logistics vacancy | 640,000 sq ft Net absorption | +1.0% QoQ rent change
Chart (Q4 2024 to Q3 2026): 1.86, 1.88, 1.89, 1.90, 1.91, 1.92, 1.93, 1.95
Outlook: "Demand from third-party logistics operators, e-commerce fulfilment and high-value manufacturing kept prime logistics space in short supply. Vacancy tightened to 7.8% as most new completions were pre-committed. We expect rents for modern ramp-up facilities to rise 1–2% over the next 12 months."

Retail
Counters: S$38.40 psf/mth Prime Orchard Road rent | 5.8% Orchard Road vacancy | 85,000 sq ft Net absorption | +0.5% QoQ rent change
Chart: 37.60, 37.75, 37.85, 37.95, 38.05, 38.10, 38.20, 38.40
Outlook: "Prime retail rents edged up again on resilient tourist spending and a steady pipeline of food and beverage and experiential concepts. Retailers remain selective, favouring well-located, high-footfall units. We expect prime rents to grow 0.5–1.5% over the next 12 months."

Residential
Counters: S$5.10 psf/mth Average private rent | 6.1% Private residential vacancy | 2,150 units New private home sales | +0.9% QoQ private home prices
Chart: 4.95, 4.97, 4.98, 5.00, 5.02, 5.04, 5.06, 5.10
Outlook: "Private home prices rose 0.9% quarter-on-quarter, supported by well-received new launches and stable interest rates. New home sales reached 2,150 units in the quarter. With a healthy supply pipeline, we expect price growth to moderate to 2–4% over the next 12 months, while rents stay broadly stable."
```

**2. Sector intro, Office tab copy and chart details (all tabs)**

```text
Under the "Sector deep dive" heading, add the intro line "Select a sector to see this quarter's key indicators, rent trend and outlook."

In the Office tab, set the outlook paragraph to: "Flight-to-quality demand continued to drive leasing in the CBD, led by financial services, technology and professional services occupiers moving into newer, more sustainable buildings. With limited new Core CBD supply until 2028, we expect Grade A rents to grow 1–3% over the next 12 months, while older stock may need larger incentives to compete."

For the chart in every tab: x-axis labels "Q4 24, Q1 25, Q2 25, Q3 25, Q4 25, Q1 26, Q2 26, Q3 26"; y-axis label "S$ psf/mth"; show the value label on the latest point; keep the line "Source: CBRE Research (sample data)" directly under the chart. If a native chart component is not available, build a simple bar chart from shapes with the value above each bar and the quarter below it. If that is not possible either, insert an image placeholder labelled "Chart image – replace with exported chart".
```

**3. Counter behaviour**

```text
Make every number counter in the sector tabs animate once from zero to its final value when it scrolls into view or when its tab is opened. Keep the decimals (12.45, 1.95), thousands separators (312,000), prefixes (S$, +) and suffixes (%, sq ft, units) exactly as written, and put the unit and label under each number. If animated counters are not available, show the numbers as static text with a simple fade-in.
```

**4. Key takeaways copy**

```text
Update the four Key takeaways cards to this exact copy, and add the intro line "What moved Singapore's commercial property markets this quarter." under the section heading.

Office | S$12.45 psf/mth | "Grade A CBD rents rose 0.8% QoQ as occupiers continued to upgrade into quality space."
Industrial & Logistics | 7.8% | "Prime logistics vacancy fell 0.4 pp QoQ on firm demand from logistics operators."
Retail | S$38.40 psf/mth | "Prime Orchard Road rents rose 0.5% QoQ, supported by tourist spending."
Residential | +0.9% | "Private home prices rose 0.9% QoQ; new home sales reached 2,150 units."

Make each card's sector label link to the matching tab in the Sector deep dive if possible; otherwise link to the top of that section.
```

**5. Outlook accordion copy**

```text
Under the "Outlook for the next 12 months" heading, add the intro line "CBRE Research's view of where Singapore's markets are heading." Set the accordion items to this exact copy, with the first item open by default and only one item open at a time if supported:

Office – Rents forecast +1% to +3%: "Limited new Core CBD completions until 2028 should keep Grade A vacancy below 5%. Expect continued consolidation into newer, high-specification buildings."
Industrial & Logistics – Rents forecast +1% to +2%: "Around 3.5 million sq ft of new warehouse supply is due over the period, much of it pre-committed. Demand will be led by logistics operators and high-value manufacturing."
Retail – Prime rents forecast +0.5% to +1.5%: "A busy events calendar and recovering tourist arrivals support footfall. Rising operating costs will keep retailers disciplined on expansion."
Residential – Prices forecast +2% to +4%: "A steady launch pipeline and land supply should keep price growth measured. Rents are expected to be flat to +2%."
Key risks to watch: "Slower global growth and trade policy uncertainty; the pace of interest rate cuts; rising fit-out and operating costs; and geopolitical events that weigh on business sentiment."
```

**6. Analyst contact cards**

```text
Set the three analyst cards to this content. Each "Email" button opens a mailto link to the card's email address.

1. Firstname Lastname | Head of Research, Singapore & Southeast Asia | firstname.lastname@cbre.com | +65 6XXX XXXX
2. Firstname Lastname | Associate Director, Research (Office & Retail) | firstname.lastname@cbre.com | +65 6XXX XXXX
3. Firstname Lastname | Senior Manager, Research (Industrial & Residential) | firstname.lastname@cbre.com | +65 6XXX XXXX

Add the intro line "Our research team is here to help you interpret the numbers." under the section heading. Keep the photos as circular image placeholders.
```

**7. Closing CTA, disclaimer and footer**

```text
Update the closing call to action and footer:

Closing section body copy: "Download the full Singapore Market Outlook for detailed submarket data, supply pipelines and forecasts, or speak to our research team." Both buttons open in a new tab: "Download full report" → https://www.cbre.com.sg/insights and "Contact our team" → https://www.cbre.com.sg/contact-us. Also link the hero "Download full report" button to https://www.cbre.com.sg/insights.

Footer, in this order:
1. "[Disclaimer placeholder — insert the approved CBRE Research disclaimer before publishing.] Sample wording: This content is provided for general information only and does not constitute investment, financial, legal or tax advice. Forecasts and opinions are subject to change without notice. Readers should seek independent professional advice before acting on any information herein."
2. "Sample content for template purposes only — replace before publishing."
Make sure both lines are visible on desktop and mobile and are not hidden behind any element.
```

**8. Navigation (optional)**

```text
Add a slim navigation bar at the top with anchor links: "Takeaways", "Sectors", "Outlook", "Analysts", "Full report". Keep it visible while scrolling if that is supported. If a persistent bar is not possible, add a small "Back to top" link at the end of the Sector deep dive, Outlook and Analysts sections instead. On mobile, collapse the links into a menu or hide the bar and keep the "Back to top" links.
```

**9. Accessibility and mobile pass**

```text
Do an accessibility and mobile pass: use one H1 (the hero headline) and H2s for each section heading; give every image placeholder descriptive alt text; make button text descriptive (no "Click here"); ensure tabs and accordion items can be operated with a keyboard; and check that on mobile the four takeaway cards, four counters per tab and three analyst cards stack in a single column with no text overlapping or cut off.
```

**10. Reset styling drift (use only if needed)**

```text
Remove any custom styling you applied to individual elements and apply the selected brand kit's default styles consistently to all headings, body text and buttons. Do not create, change or update the brand kit itself.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | `[Template] Quarterly Market Outlook` | Settings | When you duplicate it, rename to e.g. `Singapore Market Outlook Q4 2026` and remove `[Template]`. |
| SEO / share title | Singapore Market Outlook Q3 2026 – CBRE Research | Settings | Set in experience settings if available. Update the quarter. |
| SEO / share description | Key takeaways, sector KPIs and 12-month outlook for Singapore office, industrial & logistics, retail and residential markets. | Settings | Keep under about 160 characters. |
| Quarter label | Q3 2026 | Settings, Hero, Sector deep dive, Closing CTA | Appears in the SEO title, eyebrow, headline, the "(Q3 2026)" counter labels in every tab, and the CTA heading. Find and replace every instance. |
| Hero eyebrow | CBRE Research \| Singapore \| Q3 2026 | Hero | |
| Hero headline (H1) | Singapore Market Outlook Q3 2026 | Hero | |
| Hero subhead | Quality space leads a steady quarter across Singapore's commercial property markets. | Hero | One sentence that sums up the quarter. |
| Publish date | Published October 2026 | Hero | Month of release. |
| Hero image | Singapore CBD skyline, wide, dusk | Hero | See image slot H1. |
| Hero buttons | "Explore the sectors" (anchor to Sector deep dive); "Download full report" → https://www.cbre.com.sg/insights | Hero | Replace the report URL with the actual PDF or landing page. |
| Takeaways intro | What moved Singapore's commercial property markets this quarter. | Key takeaways | |
| Takeaway card – Office | S$12.45 psf/mth / Grade A CBD rents rose 0.8% QoQ… | Key takeaways | The stat must match the Office tab counter. |
| Takeaway card – Industrial & Logistics | 7.8% / Prime logistics vacancy fell 0.4 pp QoQ… | Key takeaways | Must match the I&L tab counter. |
| Takeaway card – Retail | S$38.40 psf/mth / Prime Orchard Road rents rose 0.5% QoQ… | Key takeaways | Must match the Retail tab counter. |
| Takeaway card – Residential | +0.9% / Private home prices rose 0.9% QoQ… | Key takeaways | Must match the Residential tab counter. |
| Sector section heading and intro | Sector deep dive / Select a sector to see this quarter's key indicators, rent trend and outlook. | Sector deep dive | |
| Tab labels | Office; Industrial & Logistics; Retail; Residential | Sector deep dive | Keep the order consistent with the takeaways and accordion. |
| Office image | Office interior, team collaborating | Sector – Office | Image slot S1. |
| Office counters (×4) | 12.45 S$ psf/mth Grade A CBD rent; 4.6% Core CBD vacancy; 312,000 sq ft net absorption; +0.8% QoQ rent change | Sector – Office | Re-check the counter end values, prefixes and suffixes after editing. |
| Office chart data | 12.05, 12.10, 12.10, 12.15, 12.20, 12.25, 12.35, 12.45 | Sector – Office | Roll forward one quarter each release (drop the oldest, add the newest). |
| Office outlook paragraph | Flight-to-quality demand continued… | Sector – Office | 2–3 sentences. |
| I&L image | Modern logistics warehouse interior | Sector – I&L | Image slot S2. |
| I&L counters (×4) | S$1.95 psf/mth prime logistics rent; 7.8% vacancy; 640,000 sq ft net absorption; +1.0% QoQ | Sector – I&L | |
| I&L chart data | 1.86, 1.88, 1.89, 1.90, 1.91, 1.92, 1.93, 1.95 | Sector – I&L | |
| I&L outlook paragraph | Demand from third-party logistics operators… | Sector – I&L | |
| Retail image | Shoppers in a mall concourse (no brands) | Sector – Retail | Image slot S3. |
| Retail counters (×4) | S$38.40 psf/mth prime Orchard Road rent; 5.8% vacancy; 85,000 sq ft net absorption; +0.5% QoQ | Sector – Retail | |
| Retail chart data | 37.60, 37.75, 37.85, 37.95, 38.05, 38.10, 38.20, 38.40 | Sector – Retail | |
| Retail outlook paragraph | Prime retail rents edged up again… | Sector – Retail | |
| Residential image | Condominium balcony with tropical greenery | Sector – Residential | Image slot S4. |
| Residential counters (×4) | S$5.10 psf/mth average private rent; 6.1% vacancy; 2,150 units new sales; +0.9% QoQ prices | Sector – Residential | The 4th counter is the price change, not the rent change. Keep the label explicit. |
| Residential chart data | 4.95, 4.97, 4.98, 5.00, 5.02, 5.04, 5.06, 5.10 | Sector – Residential | |
| Residential outlook paragraph | Private home prices rose 0.9%… | Sector – Residential | |
| Chart title and axes | Rent trend, last 8 quarters (S$ psf/mth); x: Q4 24 … Q3 26 | Sector – all tabs | If a sector uses a different metric (e.g. price index), change the title and the y-axis label together. |
| Chart source line | Source: CBRE Research (sample data) | Sector – all tabs | Remove "(sample data)" only once real data is in. Add a date, e.g. "Q3 2026". |
| Outlook heading and intro | Outlook for the next 12 months / CBRE Research's view of where Singapore's markets are heading. | Outlook | |
| Accordion – Office | Rents forecast +1% to +3%… | Outlook | Forecast ranges must be signed off by Research. |
| Accordion – Industrial & Logistics | Rents forecast +1% to +2%… | Outlook | |
| Accordion – Retail | Prime rents forecast +0.5% to +1.5%… | Outlook | |
| Accordion – Residential | Prices forecast +2% to +4%… | Outlook | |
| Accordion – Key risks to watch | Slower global growth and trade policy uncertainty… | Outlook | |
| Analysts heading and intro | Talk to our analysts / Our research team is here to help you interpret the numbers. | Analysts | |
| Analyst card 1 | Firstname Lastname, Head of Research, Singapore & Southeast Asia, firstname.lastname@cbre.com, +65 6XXX XXXX | Analysts | Use real, approved staff details and headshots only. Get each person's consent to be featured. |
| Analyst card 2 | Firstname Lastname, Associate Director, Research (Office & Retail) | Analysts | As above. |
| Analyst card 3 | Firstname Lastname, Senior Manager, Research (Industrial & Residential) | Analysts | As above. Delete the card if there are only two contacts. |
| Analyst photos (×3) | Circular headshot placeholders | Analysts | Image slots A1–A3. Use each named person's own approved headshot; never a stock face next to a real name. Update the alt text with the real name and title. |
| Closing CTA heading and body | Get the full Q3 2026 report / Download the full Singapore Market Outlook… | Closing CTA | |
| Download report URL | https://www.cbre.com.sg/insights | Hero, Closing CTA | Placeholder. Replace with the actual report URL in both places. |
| Contact URL | https://www.cbre.com.sg/contact-us | Closing CTA | Placeholder. Replace with a campaign or contact form URL if one exists. |
| Navigation labels (optional) | Takeaways · Sectors · Outlook · Analysts · Full report | Navigation | Only if follow-up 8 was applied. Keep the labels in step with the section headings; "Full report" anchors to the Closing CTA. |
| Disclaimer | [Disclaimer placeholder — insert the approved CBRE Research disclaimer…] | Footer | **Mandatory.** Get approved wording from Legal/Compliance. Never publish with the placeholder. |
| Sample-content footer note | Sample content for template purposes only — replace before publishing. | Footer | Keep it in the template. **Delete it in the published copy** only after all content is replaced and verified. |

## Sample content

All figures below are fictional sample values for template purposes. Real releases must use CBRE Research–verified data.

### 1. Hero

- **Eyebrow:** CBRE Research | Singapore | Q3 2026
- **Headline (H1):** Singapore Market Outlook Q3 2026
- **Subhead:** Quality space leads a steady quarter across Singapore's commercial property markets.
- **Meta line:** Published October 2026
- **Primary button:** Explore the sectors → anchor to Sector deep dive
- **Secondary button:** Download full report → https://www.cbre.com.sg/insights (new tab)

### 2. Key takeaways

- **Heading:** Key takeaways
- **Intro:** What moved Singapore's commercial property markets this quarter.

| Card | Sector label | Stat | Line |
|---|---|---|---|
| 1 | Office | S$12.45 psf/mth | Grade A CBD rents rose 0.8% QoQ as occupiers continued to upgrade into quality space. |
| 2 | Industrial & Logistics | 7.8% | Prime logistics vacancy fell 0.4 pp QoQ on firm demand from logistics operators. |
| 3 | Retail | S$38.40 psf/mth | Prime Orchard Road rents rose 0.5% QoQ, supported by tourist spending. |
| 4 | Residential | +0.9% | Private home prices rose 0.9% QoQ; new home sales reached 2,150 units. |

### 3. Sector deep dive

- **Heading:** Sector deep dive
- **Intro:** Select a sector to see this quarter's key indicators, rent trend and outlook.
- **Chart title (all tabs):** Rent trend, last 8 quarters (S$ psf/mth)
- **Chart x-axis labels:** Q4 24 · Q1 25 · Q2 25 · Q3 25 · Q4 25 · Q1 26 · Q2 26 · Q3 26
- **Source line (all tabs):** Source: CBRE Research (sample data)

**Tab: Office**

| Counter | End value | Prefix | Suffix / unit | Label |
|---|---|---|---|---|
| 1 | 12.45 | S$ | psf/mth | Grade A CBD rent |
| 2 | 4.6 | | % | Core CBD vacancy |
| 3 | 312,000 | | sq ft | Net absorption (Q3 2026) |
| 4 | 0.8 | + | % | QoQ rent change |

Chart data (S$ psf/mth): Q4 24 = 12.05 · Q1 25 = 12.10 · Q2 25 = 12.10 · Q3 25 = 12.15 · Q4 25 = 12.20 · Q1 26 = 12.25 · Q2 26 = 12.35 · Q3 26 = 12.45

Outlook: "Flight-to-quality demand continued to drive leasing in the CBD, led by financial services, technology and professional services occupiers moving into newer, more sustainable buildings. With limited new Core CBD supply until 2028, we expect Grade A rents to grow 1–3% over the next 12 months, while older stock may need larger incentives to compete."

**Tab: Industrial & Logistics**

| Counter | End value | Prefix | Suffix / unit | Label |
|---|---|---|---|---|
| 1 | 1.95 | S$ | psf/mth | Prime logistics rent |
| 2 | 7.8 | | % | Prime logistics vacancy |
| 3 | 640,000 | | sq ft | Net absorption (Q3 2026) |
| 4 | 1.0 | + | % | QoQ rent change |

Chart data (S$ psf/mth): 1.86 · 1.88 · 1.89 · 1.90 · 1.91 · 1.92 · 1.93 · 1.95

Outlook: "Demand from third-party logistics operators, e-commerce fulfilment and high-value manufacturing kept prime logistics space in short supply. Vacancy tightened to 7.8% as most new completions were pre-committed. We expect rents for modern ramp-up facilities to rise 1–2% over the next 12 months."

**Tab: Retail**

| Counter | End value | Prefix | Suffix / unit | Label |
|---|---|---|---|---|
| 1 | 38.40 | S$ | psf/mth | Prime Orchard Road rent |
| 2 | 5.8 | | % | Orchard Road vacancy |
| 3 | 85,000 | | sq ft | Net absorption (Q3 2026) |
| 4 | 0.5 | + | % | QoQ rent change |

Chart data (S$ psf/mth): 37.60 · 37.75 · 37.85 · 37.95 · 38.05 · 38.10 · 38.20 · 38.40

Outlook: "Prime retail rents edged up again on resilient tourist spending and a steady pipeline of food and beverage and experiential concepts. Retailers remain selective, favouring well-located, high-footfall units. We expect prime rents to grow 0.5–1.5% over the next 12 months."

**Tab: Residential**

| Counter | End value | Prefix | Suffix / unit | Label |
|---|---|---|---|---|
| 1 | 5.10 | S$ | psf/mth | Average private rent |
| 2 | 6.1 | | % | Private residential vacancy |
| 3 | 2,150 | | units | New private home sales (Q3 2026) |
| 4 | 0.9 | + | % | QoQ private home prices |

Chart data (S$ psf/mth, average private rent): 4.95 · 4.97 · 4.98 · 5.00 · 5.02 · 5.04 · 5.06 · 5.10

Outlook: "Private home prices rose 0.9% quarter-on-quarter, supported by well-received new launches and stable interest rates. New home sales reached 2,150 units in the quarter. With a healthy supply pipeline, we expect price growth to moderate to 2–4% over the next 12 months, while rents stay broadly stable."

**Chart fallback.** If the Ceros AI can't produce a native chart, use one of these, in order of preference:

1. A shape-built bar chart: 8 rectangles, value above, quarter below.
2. A chart image exported from the CBRE chart template in Excel or PowerPoint at 1600×900 px, inserted in the chart slot with alt text that lists the values.
3. An embed of an approved charting tool, if Marketing already uses one.

### 4. Outlook for the next 12 months

- **Heading:** Outlook for the next 12 months
- **Intro:** CBRE Research's view of where Singapore's markets are heading.

| # | Accordion header | Body |
|---|---|---|
| 1 (open by default) | Office – Rents forecast +1% to +3% | Limited new Core CBD completions until 2028 should keep Grade A vacancy below 5%. Expect continued consolidation into newer, high-specification buildings. |
| 2 | Industrial & Logistics – Rents forecast +1% to +2% | Around 3.5 million sq ft of new warehouse supply is due over the period, much of it pre-committed. Demand will be led by logistics operators and high-value manufacturing. |
| 3 | Retail – Prime rents forecast +0.5% to +1.5% | A busy events calendar and recovering tourist arrivals support footfall. Rising operating costs will keep retailers disciplined on expansion. |
| 4 | Residential – Prices forecast +2% to +4% | A steady launch pipeline and land supply should keep price growth measured. Rents are expected to be flat to +2%. |
| 5 | Key risks to watch | Slower global growth and trade policy uncertainty; the pace of interest rate cuts; rising fit-out and operating costs; and geopolitical events that weigh on business sentiment. |

### 5. Talk to our analysts

- **Heading:** Talk to our analysts
- **Intro:** Our research team is here to help you interpret the numbers.

| Card | Name | Title | Email | Phone | Button |
|---|---|---|---|---|---|
| 1 | Firstname Lastname | Head of Research, Singapore & Southeast Asia | firstname.lastname@cbre.com | +65 6XXX XXXX | Email → `mailto:firstname.lastname@cbre.com` |
| 2 | Firstname Lastname | Associate Director, Research (Office & Retail) | firstname.lastname@cbre.com | +65 6XXX XXXX | Email → `mailto:firstname.lastname@cbre.com` |
| 3 | Firstname Lastname | Senior Manager, Research (Industrial & Residential) | firstname.lastname@cbre.com | +65 6XXX XXXX | Email → `mailto:firstname.lastname@cbre.com` |

### 6. Closing call to action

- **Heading:** Get the full Q3 2026 report
- **Body:** Download the full Singapore Market Outlook for detailed submarket data, supply pipelines and forecasts, or speak to our research team.
- **Primary button:** Download full report → https://www.cbre.com.sg/insights (new tab)
- **Secondary button:** Contact our team → https://www.cbre.com.sg/contact-us (new tab)

### 7. Footer

- **Disclaimer (placeholder, mandatory):** "[Disclaimer placeholder — insert the approved CBRE Research disclaimer before publishing.] Sample wording: This content is provided for general information only and does not constitute investment, financial, legal or tax advice. Forecasts and opinions are subject to change without notice. Readers should seek independent professional advice before acting on any information herein."
- **Sample note (visible):** Sample content for template purposes only — replace before publishing.

### Optional navigation labels

Takeaways · Sectors · Outlook · Analysts · Full report

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** Whether to license images (this spends Adobe Stock credits on the CBRE account) or to use watermarked comp/preview images for the template is still to be decided by the user. **The executing session must ask before licensing any image.** Until then, use comps or the Ceros placeholders.

Search at https://stock.adobe.com/sg. Selection rules:

- Singapore/Asia context; diverse people (Chinese, Malay, Indian and other backgrounds; mixed genders and ages).
- No visible third-party brands, logos or shop signage.
- Avoid frames where a single identifiable real tower or iconic landmark dominates.
- Exclude assets marked "Editorial use only".
- If CBRE policy disallows AI-generated stock, turn on the "Exclude generative AI" filter.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| H1 – Hero | Wide Singapore CBD skyline at dusk, no single dominant landmark, space for text | `singapore city skyline wide aerial dusk` (alt: `asia modern city skyline blurred dusk`) | Landscape 16:9, ≥ 2400 px wide | Singapore city skyline at dusk |
| S1 – Office tab | Diverse professionals collaborating in a bright, modern Grade A office | `asian professionals collaborating modern office interior` | Landscape 3:2, ≥ 1600 px wide | Colleagues collaborating in a modern office |
| S2 – Industrial & Logistics tab | Modern warehouse interior with racking; worker or forklift; no branded packaging | `modern logistics warehouse interior racking asia` | Landscape 3:2, ≥ 1600 px wide | Interior of a modern logistics warehouse with high racking |
| S3 – Retail tab | Shoppers in a bright mall concourse, motion blur, no legible store names | `shoppers walking mall interior asia motion blur` | Landscape 3:2, ≥ 1600 px wide | Shoppers walking through a bright retail mall |
| S4 – Residential tab | Condominium balcony or façade with tropical greenery, generic (not an identifiable development) | `modern condominium balcony tropical greenery asia` | Landscape 3:2, ≥ 1600 px wide | Balconies of a modern residential tower with tropical planting |
| A1 – Analyst photo 1 | **Placeholder only.** Professional headshot, neutral background | `asian businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Head of Research |
| A2 – Analyst photo 2 | **Placeholder only.** Professional headshot, neutral background | `indian businessman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Associate Director, Research |
| A3 – Analyst photo 3 | **Placeholder only.** Professional headshot, neutral background | `malay professional woman headshot studio neutral` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Senior Manager, Research |

**Analyst photos:** never publish stock faces next to real staff names. In any published copy, A1–A3 must be the named person's own approved headshot. For the template, consider keeping a neutral avatar placeholder instead of licensing headshots.

**Charts** are not stock images. If you use the image fallback, export them from the CBRE chart template.

## QA checklist

- [ ] Brand kit is still **CBRE Test** and **unmodified**. No AI offer to change the brand kit was accepted, and no new brand kit was created.
- [ ] No colour, font or logo overrides were added to any element. If there was drift, follow-up 10 was applied.
- [ ] The experience is in the **CBRE Singapore** folder.
- [ ] The experience is named exactly `[Template] Quarterly Market Outlook`.
- [ ] Tone and structure are consistent with the New Joiner Onboarding reference experience.
- [ ] All seven sections are present in order (eight with the optional navigation).
- [ ] Hero "Explore the sectors" scrolls to the Sector deep dive.
- [ ] All four tabs switch correctly. Each has an image, four counters, a chart (or its fallback), a source line and an outlook paragraph.
- [ ] Counters animate (or fade in) and end on the exact values, with the correct S$, +, %, sq ft and units formatting.
- [ ] Chart values match the sample content table for every tab, and the latest value equals counter 1 (Office, I&L, Retail, Residential).
- [ ] The takeaway card stats match the tab counters.
- [ ] Accordion: intro line present; five items, first open by default, only one open at a time (or independent toggles if single-open isn't supported).
- [ ] If follow-up 4 was applied, each takeaway card's sector label opens its tab (or scrolls to the Sector deep dive).
- [ ] Analyst "Email" buttons open `mailto:` links.
- [ ] All interactions were tested in preview on **desktop and mobile**: tabs, counters, accordion, anchor links, buttons, and nav if added.
- [ ] Mobile: cards, counters and contact cards stack in one column; nothing is overlapping, cut off or scrolling horizontally.
- [ ] The **disclaimer placeholder** paragraph is present and visible in the footer.
- [ ] The **"Sample content for template purposes only — replace before publishing."** footer note is visible on desktop and mobile.
- [ ] CTAs point to placeholders: Download → https://www.cbre.com.sg/insights; Contact → https://www.cbre.com.sg/contact-us. External links open in a new tab.
- [ ] Image placeholders have been replaced with the agreed images (licensed or comp, **per the user's decision**). No stock image was licensed without asking.
- [ ] No third-party logos or brands, no dominant identifiable real landmark, and no "Editorial use only" assets.
- [ ] Alt text is set on every image, matching the image slots table.
- [ ] No real client names, real people or real property names/addresses appear anywhere.
- [ ] Heading structure is one H1 and an H2 per section. Button labels are descriptive.
