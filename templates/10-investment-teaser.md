# [Template] Investment Opportunity Teaser

- **Slug:** `investment-opportunity-teaser`
- **Ceros starting point:** Free prompt
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline.
- **Experience name:** `[Template] Investment Opportunity Teaser`
- **Primary audience:** Institutional and private investors screening Singapore acquisitions: REIT and fund managers, family offices, developers, owner-occupiers and their advisers. CBRE Singapore Capital Markets (with Marketing) duplicates it for each sale mandate, whether Expression of Interest, tender or private treaty.
- **Est. build time:** 4–5 hours (about 25 min generation and refinement, 1.5 h chart/hotspot/accordion checks, 1 h images, site plan and map, 1 h QA including reconciling every figure)

## Purpose

This is an interactive Capital Markets deal teaser that replaces the usual two-page PDF teaser. It leads with the asset name and an Expression of Interest call to action, then covers investment highlights, a key metrics grid, tenancy and lease expiry charts, location and connectivity, an explorable site plan, the sale process and timeline, the deal team, and a prominent important notice. Its job is to gauge interest and move qualified parties to sign an NDA; detailed information stays in the information memorandum. Capital Markets duplicates it for each mandate and swaps in vendor-approved facts, figures, images and contacts; the sample asset "Example Business Park, 18 Sample Road" and all its figures are entirely fictional.

## Ceros AI prompt

Before you paste:

1. Open the existing **New Joiner Onboarding** experience in the CBRE Singapore folder. Note its tone, section rhythm and how it uses components, so this build feels like part of the same family. If the generated result differs noticeably, adjust it with the follow-up prompts. Do not add any styling instructions.
2. In the "What will you build today?" box, set **Brand Kit = CBRE Test** and **Folder = CBRE Singapore**.
3. Paste the block below verbatim and generate. It is 2,466 characters (the limit is assumed to be about 2,500).
4. If the AI offers to update, extend or modify the brand kit at any point, decline. Reply: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`
5. Rename the experience to `[Template] Investment Opportunity Teaser`.

```text
Create a responsive single-page investment teaser for the sale of a Singapore business park, "Example Business Park", 18 Sample Road. Use the selected brand kit's styles as-is. Tone: factual, institutional. All figures are samples. Use labelled image placeholders (no recognisable real buildings or landmarks).

Sections, in order:
1. Hero: full-width image placeholder captioned "Illustrative image only"; eyebrow "Investment Opportunity | Expression of Interest"; headline "Example Business Park"; subhead "18 Sample Road, Singapore | 452,100 sq ft NLA business park with diversified income"; line "EOI closes 3:00 pm, Thursday 12 November 2026"; buttons "Register interest" (https://www.cbre.com.sg/contact-us) and "Request NDA" (mailto:firstname.lastname@cbre.com).
2. Investment highlights: six icon cards (title, one line), copy to follow.
3. Key metrics: eight tiles (value + label): Leasehold 60 yrs from 1 Jan 2008 – Tenure | approx. 215,280 sq ft – Land area | approx. 538,200 sq ft – GFA | approx. 452,100 sq ft – NLA | 93.8% – Committed occupancy | 3.2 yrs – WALE by gross rental income (GRI) | S$17.1M – NPI (12 months to 30 Jun 2026) | Business Park, plot ratio 2.5 – Zoning. Note: "As at 30 September 2026. Indicative, unaudited sample figures."
4. Tenancy profile: pie chart "Tenancy by trade sector (% of GRI)": Technology, media & telecoms 34; Biomedical & life sciences 20; Financial services 16; Engineering & electronics 14; Professional services 9; Others 7. Bar chart "Lease expiry profile (% of GRI)": 2026 5; 2027 18; 2028 22; 2029 17; 2030 14; 2031+ 24.
5. Location & connectivity: travel-time and nearby-amenity lists beside a map embed placeholder.
6. Site plan: image placeholder with five numbered hotspots, each opening a popup (title, two lines, close): Block A; Block B; Central courtyard & amenities; Basement car park & loading; Rooftop solar.
7. Sale process & timeline: accordion of six dated steps, copy to follow.
8. Deal team: four contact cards (photo placeholder, "Firstname Lastname", title, phone, email button).
9. Important notice: a prominent boxed disclaimer (no offer; information memorandum only under NDA; figures indicative), text to follow.
10. Footer: "[Disclaimer placeholder: insert the approved CBRE Capital Markets disclaimer.]" and the visible note "Sample content for template purposes only — replace before publishing."

External links open in a new tab. On mobile, stack columns and keep charts readable.
```

## Expected structure

After generation, check each section against this list. Use the follow-up prompts to fix anything missing.

1. **Hero**: full-width image placeholder with an "Illustrative image only" caption, eyebrow, H1 (asset name), subhead (address and headline fact), EOI closing line, and two buttons: "Register interest" links out in a new tab; "Request NDA" opens a `mailto:` with a pre-filled subject. A short intro paragraph (sole marketing agent, sale method) sits directly below the hero (added by follow-up 1 if missing).
2. **Investment highlights**: six icon cards (icon, title, one line) in a 3×2 grid on desktop and one or two columns on mobile. Cards are static (optional entrance animation).
3. **Key metrics**: an 8-tile grid (4×2 on desktop, 2×4 on mobile). Each tile has a label, a value and an optional sub-line. Numeric values may count up on scroll (93.8%, 3.2 years, S$17.1M); otherwise they are static. An "as at" note sits under the grid.
4. **Tenancy profile**: intro line plus two charts, side by side on desktop and stacked on mobile. (a) A pie or donut chart of six trade sectors with a legend or value labels that add up to 100%. (b) A vertical bar chart of six expiry years with a value label on each bar, also adding up to 100%. Each chart has a data table, ideally inside a collapsible "View chart data" accordion, and a source/basis note. **Fallback:** a horizontal bar chart instead of the pie; if there is no chart component, image placeholders labelled "Chart image – replace with exported chart" with the data tables beneath.
5. **Location & connectivity**: two columns (stacked on mobile). One column holds the "Getting there" and "Nearby amenities" lists; the other holds an embed block (iframe) with a map placeholder. **Fallback:** a static map image plus a "View on map" button linking out.
6. **Site plan**: a large site plan image with five numbered hotspot markers. Clicking or tapping a marker opens a popup (modal) with a title, two lines, an optional image and a close button; it also closes on an outside click or Esc if supported. A "not to scale" note sits below. **Fallback:** five numbered buttons below the image that open the same popups, or an accordion with the five items.
7. **Sale process & timeline**: intro line and an accordion with six dated steps, the first open by default, plus a "vendor reserves the right" note. **Fallback:** a vertical numbered timeline with the same content.
8. **Deal team**: four contact cards (photo placeholder, name, title, phone, registration line, "Email" `mailto:` button) and a "Register interest" button beneath.
9. **Important notice**: a full-width, visually separated boxed section with an H2 and the full disclaimer text. It is always visible, never in a popup or collapsed item.
10. **Footer**: disclaimer placeholder, agency licence placeholder, image disclaimer and the visible sample-content note.
11. *(Optional, from follow-up 10)* **Navigation**: a top or sticky bar with anchor links and a persistent "Register interest" button, or "Back to top" links.

## Follow-up refinement prompts

Paste these one at a time in the AI chat after the first generation. Skip any that the first pass already handled. None of them contain styling requests; if the AI offers brand kit changes, decline.

**1. Hero details and intro**

```text
Update the hero: keep the eyebrow "Investment Opportunity | Expression of Interest", the headline "Example Business Park" and the subhead "18 Sample Road, Singapore | 452,100 sq ft NLA business park with diversified income". Under the subhead, show the line "Expressions of Interest close at 3:00 pm (Singapore time), Thursday, 12 November 2026". Buttons: "Register interest" → https://www.cbre.com.sg/contact-us (new tab) and "Request NDA" → mailto:firstname.lastname@cbre.com?subject=Example%20Business%20Park%20-%20NDA%20request. Keep the caption "Illustrative image only" on the hero image.

Directly below the hero, add this short intro paragraph: "CBRE has been appointed by the vendor as sole marketing agent for the sale of Example Business Park, a 60-year leasehold business park campus of two eight-storey blocks in an established business park cluster in the East region of Singapore. The property is offered for sale by Expression of Interest."
```

**2. Investment highlights**

```text
Set "Investment highlights" to the intro line "Six reasons to take a closer look." and these six cards, in order (icon | title | line). Use simple icons from the available icon set.
1. building | "Scale and scarcity" | "A 452,100 sq ft NLA business park campus in an established cluster, rarely offered for sale."
2. pie chart | "Diversified income" | "38 tenants across six trade sectors; no sector contributes more than 34% of gross rental income."
3. people or tick | "Resilient occupancy" | "93.8% committed occupancy and a WALE of 3.2 years by gross rental income."
4. upward trend | "Rental upside" | "Average passing rent of S$4.35 psf/mth, below the indicative S$4.60–4.90 psf/mth for comparable business park space."
5. train | "Excellent connectivity" | "A 5-minute sheltered walk to Example Park MRT, 3 minutes' drive to the expressway and about 15 minutes to the airport."
6. leaf | "Green credentials" | "BCA Green Mark GoldPLUS with 0.8 MWp of rooftop solar, and scope for further asset enhancement, subject to approvals."
Show three cards per row on desktop and one or two per row on mobile.
```

**3. Key metrics grid**

```text
Set "Key metrics" to eight tiles in this order (label | value | small sub-line):
1. Tenure | Leasehold 60 years | From 1 January 2008 (approx. 41 years remaining)
2. Land area | Approx. 215,280 sq ft | 20,000 sqm
3. Gross floor area (GFA) | Approx. 538,200 sq ft | Plot ratio 2.5
4. Net lettable area (NLA) | Approx. 452,100 sq ft | Two eight-storey blocks
5. Committed occupancy | 93.8% | 38 tenants
6. WALE | 3.2 years | By gross rental income
7. Net property income (NPI) | S$17.1M | 12 months to 30 June 2026
8. Zoning | Business Park | Completed 2010; asset enhancement 2022
Below the grid keep this note: "All figures as at 30 September 2026 unless stated. Approximate, unaudited and subject to verification in the information memorandum. Sample figures."
Use four tiles per row on desktop and two per row on mobile. If supported, make 93.8, 3.2 and 17.1 count up once when they scroll into view, keeping the decimals; otherwise show static values.
```

**4. Tenancy and lease expiry charts**

```text
In "Tenancy profile", add the intro "38 tenants across six trade sectors. The top 10 tenants contribute 58% of gross rental income." Place the two charts side by side on desktop and stacked on mobile.

Chart 1: pie (or donut) chart titled "Tenancy by trade sector (% of gross rental income)", with a legend or labels showing each percentage:
Technology, media & telecoms 34% | Biomedical & life sciences 20% | Financial services 16% | Engineering & electronics 14% | Professional services 9% | Others 7%

Chart 2: vertical bar chart titled "Lease expiry profile (% of gross rental income)", x-axis years, y-axis "% of GRI", a value label above each bar:
2026 (Oct–Dec) 5% | 2027 18% | 2028 22% | 2029 17% | 2030 14% | 2031 and beyond 24%

Under the charts add: "Based on committed leases as at 30 September 2026. WALE 3.2 years by gross rental income. Sample data."
Under each chart add a collapsible "View chart data" item containing a small table with the same values (Sector | % of GRI, and Year | % of GRI). If collapsible items are not available, show the tables directly. If a pie chart is not available, use a horizontal bar chart for chart 1. If no chart component is available, use image placeholders labelled "Chart image – replace with exported chart" with the data tables beneath.
```

**5. Location and connectivity**

```text
Update "Location & connectivity". Intro: "Set in an established business park cluster in the East region of Singapore, with rail, expressway and airport access close by."

Getting there (list with a simple icon per line):
- Example Park MRT station – 5 min sheltered walk
- Sample Junction MRT interchange – 2 stops
- Bus stops (8 services) – 1 min walk
- Expressway access – 3 min drive
- Airport – approx. 15 min drive
- CBD – approx. 25 min drive

Nearby amenities (list):
- Food court, café, gym and childcare centre on site
- Shopping mall with 150+ stores – 8 min walk
- Two hotels and serviced apartments – 10 min walk
- Park connector and cycling network – 3 min walk
- Universities and research institutes – 10 min drive

For the map, use an embed block with a placeholder labelled "Map embed – replace with location map". If an embed block is not available, use an image placeholder with a "View on map" button linking to https://maps.google.com, opening in a new tab. Add the small note "Travel times are approximate."
```

**6. Site plan hotspots**

```text
Set "Site plan" to the intro "Select a numbered marker to explore the property." Use one large site plan image placeholder with five numbered hotspot markers. Each marker opens a popup with the title, this text, an optional image placeholder and a close button; the popup also closes on an outside click.
1. Block A – "Eight storeys of business park space, approx. 229,400 sq ft NLA. Typical floor plates of about 30,000 sq ft suit R&D, technology and operations users."
2. Block B – "Eight storeys, approx. 222,700 sq ft NLA, with a double-volume lobby refurbished in the 2022 asset enhancement."
3. Central courtyard & amenities – "A landscaped courtyard links both blocks, with a food court, café, gym and childcare centre at ground level."
4. Basement car park & loading – "Two basement levels with 420 car park lots, including 40 EV charging points, plus six loading bays."
5. Rooftop solar – "A 0.8 MWp rooftop solar installation across both blocks, generating about 1.0 GWh of renewable electricity a year."
Below the image add the small note "Site plan not to scale. For illustration only." If hotspots on the image are not possible, place five numbered buttons below the image that open the same popups, or use an accordion with the same five items.
```

**7. Sale process and timeline**

```text
Set "Sale process & timeline" to the intro "The property is offered for sale by Expression of Interest (EOI)." and an accordion with six items, the first open by default (title | date | text):
1. Launch | Tuesday, 15 September 2026 | "Sale launched by Expression of Interest and this teaser released to the market."
2. NDA and information memorandum | From 15 September 2026 | "Parties who sign the non-disclosure agreement receive the information memorandum and access to the virtual data room."
3. Site inspections | 29 September to 30 October 2026 | "Guided inspections by appointment only. Contact the deal team to book."
4. EOI closing | 3:00 pm (Singapore time), Thursday, 12 November 2026 | "Submit non-binding EOIs in the prescribed form to the deal team. Late submissions may not be considered."
5. Shortlisting and second round | Late November to December 2026 | "Shortlisted parties will be invited to complete due diligence and submit binding offers."
6. Completion | Targeted for Q1 2027 | "Subject to contract, vendor approval and any required landlord and authority consents."
Show the date in each accordion title row. Under the accordion add: "The vendor reserves the right to amend the sale process and timetable, or to withdraw the property, at any time without notice." If an accordion is not available, show a vertical numbered timeline with the same content.
```

**8. Deal team cards**

```text
Set "Deal team" to the intro "For NDA requests, inspections and enquiries, contact the deal team." and four contact cards, in order. Each card has a circular photo placeholder, name, title, phone, the line "Registration No. [placeholder – include only if required]" and an "Email" button that opens a mailto link.
1. Firstname Lastname | Executive Director, Capital Markets | +65 6XXX XXXX | firstname.lastname@cbre.com
2. Firstname Lastname | Senior Director, Industrial & Logistics Capital Markets | +65 6XXX XXXX | firstname.lastname@cbre.com
3. Firstname Lastname | Associate Director, Capital Markets | +65 9XXX XXXX | firstname.lastname@cbre.com
4. Firstname Lastname | Senior Manager, Capital Markets (NDA and data room enquiries) | +65 9XXX XXXX | firstname.lastname@cbre.com
Four cards per row on desktop, one or two per row on mobile. Below the cards add a "Register interest" button linking to https://www.cbre.com.sg/contact-us in a new tab.
```

**9. Important notice and footer**

```text
Make "Important notice" a clearly separated, full-width boxed section with the heading "Important notice" and this text:

"[Disclaimer placeholder — replace with the approved CBRE Capital Markets disclaimer from Legal/Compliance before publishing.] Sample wording: This teaser has been prepared by CBRE solely to gauge preliminary interest in the property described. It does not constitute an offer, invitation or solicitation to buy or sell any property or securities, and it does not form part of any contract. Detailed information will be provided only in an information memorandum to parties who have signed a non-disclosure agreement. All figures, areas, dates and other information are indicative, approximate, unaudited and subject to change and verification; in this template they are sample figures. Interested parties must make their own enquiries and seek independent legal, financial, tax and other professional advice. Neither CBRE nor the vendor makes any representation or warranty as to the accuracy or completeness of this information, and they accept no liability for any loss arising from reliance on it."

Set the footer to, in this order:
1. "[Disclaimer placeholder: insert the approved CBRE Capital Markets disclaimer.]"
2. "[Agency licence number placeholder – include if required by Compliance.]"
3. "Images and site plan are for illustration only."
4. "Sample content for template purposes only — replace before publishing."
Make sure the notice and all footer lines are visible on desktop and mobile. Do not put the notice in a popup or a collapsed section.
```

**10. Navigation (optional)**

```text
Add a slim navigation bar at the top with anchor links "Highlights", "Key metrics", "Tenancy", "Location", "Site plan", "Process", "Deal team" and a "Register interest" button linking to https://www.cbre.com.sg/contact-us in a new tab. Keep it visible while scrolling if that is supported. On mobile, collapse the links into a menu but keep "Register interest" visible. If a persistent bar is not possible, add a "Back to top" link at the end of sections 3 to 8.
```

**11. Accessibility and mobile pass**

```text
Do an accessibility and mobile pass: use one H1 (the asset name) and an H2 for each section heading; give every image placeholder descriptive alt text, including the site plan; give each chart a text alternative that lists its data (for example "Pie chart of tenancy by trade sector: Technology, media & telecoms 34%, Biomedical & life sciences 20%, …"); give each hotspot an accessible label such as "Open details: Block A"; make sure hotspots, popups, the close button, accordion items, chart data toggles and all links work with a keyboard, and that focus moves into a popup when it opens and back to its marker when it closes; make button and link text descriptive (no "Click here"); and check on mobile that the metric tiles, charts, hotspots, popups, accordion and contact cards display cleanly with no overlapping, cut-off text or page-level horizontal scrolling.
```

**12. Reset styling drift (use only if needed)**

```text
Remove any custom styling you applied to individual elements and apply the selected brand kit's default styles consistently to all headings, body text, buttons, cards, tiles, charts, popups, accordion items and the notice box. Do not create, change or update the brand kit itself.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | `[Template] Investment Opportunity Teaser` | Settings | When you duplicate it, rename to e.g. `Teaser – <Asset or project name> – <Mon YYYY>` and remove `[Template]`. |
| Sharing / visibility | Not published (template) | Settings | Agree the distribution with the vendor. For an off-market or targeted sale, share the direct link only with qualified parties, turn off search indexing and use password or private-link options if Ceros offers them. Unpublish when the campaign closes. |
| SEO / share title | Investment Opportunity: Example Business Park, Singapore – CBRE | Settings | For an off-market sale, use the project code name, not the asset name. |
| SEO / share description | A 452,100 sq ft NLA business park in Singapore, offered for sale by Expression of Interest. | Settings | Keep under about 160 characters. No income figures in share metadata. |
| Vendor and Compliance approval | Not applicable (sample) | Internal | **Mandatory before publishing:** written vendor approval of every fact, figure and image, plus CBRE Legal/Compliance sign-off of the notice. Record the approvers and date in the experience notes. If the sale is a share sale of a holding company rather than a direct property sale, Compliance must review it, as securities marketing rules may apply. |
| Vendor name | Not shown ("the vendor") | Intro, Notice | Name the vendor only with written consent. |
| Asset name (H1) | Example Business Park | Hero | Use the vendor-approved marketing name. For a confidential sale, use a code name such as "Project Example" and remove the address. |
| Address | 18 Sample Road, Singapore | Hero | Include the postal code if the vendor agrees. Remove it for confidential sales. |
| Hero eyebrow | Investment Opportunity \| Expression of Interest | Hero | Change the sale method: "Tender", "Private treaty", "Expression of Interest". |
| Hero subhead | 18 Sample Road, Singapore \| 452,100 sq ft NLA business park with diversified income | Hero | Address \| size + asset type + one differentiator. The NLA must match the metrics tile. |
| EOI closing line | Expressions of Interest close at 3:00 pm (Singapore time), Thursday, 12 November 2026 | Hero | Must match process step 4 exactly. Check the weekday. |
| Hero image + caption | Generic modern business park campus (CGI) / "Illustrative image only" | Hero | Image slot H1. Use vendor-supplied photography or CGI (with usage rights) when live; change the caption to "Artist's impression" for CGI or delete it for actual photos of the property. |
| Register interest URL | https://www.cbre.com.sg/contact-us | Hero, Deal team, Nav | **Placeholder.** Replace it with the campaign enquiry form. If you add a Ceros form instead, include a PDPA consent statement and route data per CBRE's privacy policy. |
| Request NDA link | mailto:firstname.lastname@cbre.com?subject=Example%20Business%20Park%20-%20NDA%20request | Hero | Use the deal team's inbox (deal team card 4 in the sample). Keep the subject URL-encoded and update the asset name. |
| Intro paragraph | CBRE has been appointed by the vendor as sole marketing agent… offered for sale by Expression of Interest. | Below hero | Confirm the mandate wording (sole / exclusive / joint marketing agent) against the signed mandate. |
| Highlights intro | Six reasons to take a closer look. | Highlights | Change the number if you use 4 or 5 cards. |
| Highlight 1 – Scale and scarcity | A 452,100 sq ft NLA business park campus in an established cluster, rarely offered for sale. | Highlights | Make scarcity claims only if they are backed by CBRE Research. |
| Highlight 2 – Diversified income | 38 tenants across six trade sectors; no sector contributes more than 34% of GRI. | Highlights | Must match the tenancy chart and metrics tile 5. |
| Highlight 3 – Resilient occupancy | 93.8% committed occupancy and a WALE of 3.2 years by GRI. | Highlights | Must match tiles 5 and 6. |
| Highlight 4 – Rental upside | Average passing rent of S$4.35 psf/mth, below the indicative S$4.60–4.90 psf/mth for comparable business park space. | Highlights | **The market range must come from CBRE Research or Valuation and be approved.** Remove the card rather than publish an unsupported reversion claim. |
| Highlight 5 – Connectivity | 5-minute sheltered walk to Example Park MRT; 3 min to the expressway; ~15 min to the airport | Highlights | Must match the location list. |
| Highlight 6 – Green credentials | BCA Green Mark GoldPLUS with 0.8 MWp of rooftop solar; scope for asset enhancement, subject to approvals | Highlights | Use the certification level exactly as certified and still valid. Any AEI potential must say "subject to approvals". |
| Highlight icons | Building; pie chart; people or tick; upward trend; train; leaf | Highlights | Use the Ceros icon set; don't license icons from Stock. Change an icon whenever its card's theme changes. |
| Metric 1 – Tenure | Leasehold 60 years from 1 January 2008 (approx. 41 years remaining) | Key metrics | Remaining tenure as at the "as at" date (sample: lease ends 31 December 2067; 41.25 years from 30 September 2026). Freehold assets: "Freehold". |
| Metric 2 – Land area | Approx. 215,280 sq ft (20,000 sqm) | Key metrics | 1 sqm = 10.7639 sq ft. Show both units. |
| Metric 3 – GFA | Approx. 538,200 sq ft (plot ratio 2.5) | Key metrics | GFA = land area × plot ratio (20,000 sqm × 2.5 = 50,000 sqm). Use the approved GFA, not the maximum permissible, unless stated. |
| Metric 4 – NLA | Approx. 452,100 sq ft, two eight-storey blocks | Key metrics | Must equal Block A + Block B in the site plan popups (229,400 + 222,700). |
| Metric 5 – Committed occupancy | 93.8%, 38 tenants | Key metrics | State committed vs actual occupancy clearly. |
| Metric 6 – WALE | 3.2 years by gross rental income | Key metrics | State the basis (by GRI or by NLA) and the date. Must match the lease expiry chart note. |
| Metric 7 – NPI | S$17.1M, 12 months to 30 June 2026 | Key metrics | State the period. Many vendors don't disclose NPI in a teaser; delete the tile if it isn't approved. |
| Metric 8 – Zoning | Business Park; completed 2010; AEI 2022 | Key metrics | Use the current Master Plan zoning. |
| Metrics note | All figures as at 30 September 2026 unless stated. Approximate, unaudited… Sample figures. | Key metrics | Keep the note. Remove "Sample figures." only when every figure is verified. |
| Tenancy intro | 38 tenants across six trade sectors. The top 10 tenants contribute 58% of GRI. | Tenancy profile | Don't name tenants in a public teaser unless the vendor and tenants agree. |
| Pie chart data | TMT 34; Biomedical & life sciences 20; Financial services 16; Engineering & electronics 14; Professional services 9; Others 7 | Tenancy profile | Must add up to 100. Keep it to 6–7 slices and group the rest into "Others". |
| Bar chart data | 2026 (Oct–Dec) 5; 2027 18; 2028 22; 2029 17; 2030 14; 2031 and beyond 24 | Tenancy profile | Must add up to 100. Recompute the WALE from the real expiry schedule (see Sample content). |
| Chart note | Based on committed leases as at 30 September 2026. WALE 3.2 years by GRI. Sample data. | Tenancy profile | |
| Chart titles, data toggle and chart alt text | "Tenancy by trade sector (% of gross rental income)"; "Lease expiry profile (% of gross rental income)"; toggle "View chart data"; alt text listing every value (see Sample content) | Tenancy profile | Update the alt text and the "View chart data" tables whenever the chart data changes. They must list the same values as the charts. |
| Location intro | Set in an established business park cluster in the East region of Singapore… | Location | Use a region or planning area. |
| Travel times (×6) | Example Park MRT – 5 min sheltered walk; Sample Junction MRT interchange – 2 stops; bus 1 min; expressway 3 min; airport ~15 min; CBD ~25 min | Location | Use real station and expressway names for the live asset. Check the times with a mapping tool. |
| Amenities (×5) | On-site food court, café, gym, childcare; mall 8 min; hotels 10 min; park connector 3 min; universities 10 min | Location | Don't name other privately owned buildings without checking. |
| Map embed | Placeholder "Map embed – replace with location map" | Location | Embed a map centred on the asset (e.g. OneMap or Google Maps embed). Check the pin is on the right site. |
| Location note and map fallback | "Travel times are approximate."; fallback image M1 + "View on map" → https://maps.google.com (new tab) | Location | **Placeholder URL.** Replace it with a map link pinned on the asset. Delete the fallback once a working embed is in place. |
| Site plan image | Illustrative site plan, two blocks around a courtyard | Site plan | Image slot S1. Best redrawn by Marketing from the vendor's approved plans. Re-place all five hotspots after swapping the image. |
| Site plan intro | Select a numbered marker to explore the property. | Site plan | If you use the buttons/accordion fallback, change it to e.g. "Select a numbered item to explore the property." |
| Hotspot 1 – Block A | Eight storeys, approx. 229,400 sq ft NLA, ~30,000 sq ft typical floor plates | Site plan | Optional popup image slot E1. |
| Hotspot 2 – Block B | Eight storeys, approx. 222,700 sq ft NLA, lobby refurbished 2022 | Site plan | Slot E2. |
| Hotspot 3 – Courtyard & amenities | Landscaped courtyard; food court, café, gym, childcare | Site plan | Slot E3. |
| Hotspot 4 – Car park & loading | 420 lots incl. 40 EV charging points; six loading bays | Site plan | Slot E4. |
| Hotspot 5 – Rooftop solar | 0.8 MWp; about 1.0 GWh a year | Site plan | Slot E5. Sample yield assumes about 1,300 kWh per kWp a year (0.8 MWp × 1,300 ≈ 1.04 GWh). The sample capacity is sized to two roofs of about 3,100 sqm each, less plant space. Use the actual meter data when live. |
| Site plan note | Site plan not to scale. For illustration only. | Site plan | |
| Process intro | The property is offered for sale by Expression of Interest (EOI). | Process | Match the hero eyebrow. |
| Process steps (×6) | Launch 15 Sep 2026; NDA & IM from 15 Sep; inspections 29 Sep – 30 Oct; EOI closes 3:00 pm Thu 12 Nov 2026; shortlisting late Nov – Dec; completion Q1 2027 | Process | Check the weekdays and avoid Singapore public holidays for the closing date. Step 4 must match the hero line. |
| Vendor-reserves note | The vendor reserves the right to amend the sale process and timetable… | Process | Keep it. |
| Deal team intro | For NDA requests, inspections and enquiries, contact the deal team. | Deal team | |
| Deal team cards (×4) | Firstname Lastname; Executive Director / Senior Director / Associate Director / Senior Manager, Capital Markets; +65 6XXX XXXX / +65 9XXX XXXX; firstname.lastname@cbre.com | Deal team | Use real names, titles and photos only with each person's agreement and their approved CBRE headshots (slots D1–D4), never stock faces. Replace every `mailto:`. |
| Registration line | Registration No. [placeholder – include only if required] | Deal team | Compliance confirms whether CEA registration numbers must be shown. |
| Important notice | [Disclaimer placeholder — replace with the approved CBRE Capital Markets disclaimer…] Sample wording… | Important notice | **Mandatory.** Get the approved wording from Legal/Compliance. Never publish with the placeholder or the sample wording. It must stay always visible (never in a popup or collapsed item). |
| Footer disclaimer line | [Disclaimer placeholder: insert the approved CBRE Capital Markets disclaimer.] | Footer | Replace it, or delete it if the notice section already carries the full approved text. |
| Optional navigation labels | Highlights · Key metrics · Tenancy · Location · Site plan · Process · Deal team · [Register interest] | Navigation (follow-up 10) | Only if the nav bar was added. Keep the labels in step with the section headings, and remove the link for any section you delete. |
| Agency licence line | [Agency licence number placeholder – include if required by Compliance.] | Footer | |
| Image disclaimer | Images and site plan are for illustration only. | Footer | Keep it while any stock or CGI image is used. |
| Sample-content footer note | Sample content for template purposes only — replace before publishing. | Footer | Keep it in the template. **Delete it in the published copy** only after all content is replaced and verified. |

## Sample content

Everything below is fictional sample content for template purposes. "Example Business Park", "18 Sample Road", "Example Park MRT" and "Sample Junction MRT" are invented. The vendor, tenants, deal team and every figure are samples. No price or guide price is stated, as is typical for an Expression of Interest campaign.

### 1. Hero

- **Eyebrow:** Investment Opportunity | Expression of Interest
- **Headline (H1):** Example Business Park
- **Subhead:** 18 Sample Road, Singapore | 452,100 sq ft NLA business park with diversified income
- **Closing line:** Expressions of Interest close at 3:00 pm (Singapore time), Thursday, 12 November 2026
- **Primary button:** Register interest → https://www.cbre.com.sg/contact-us (new tab)
- **Secondary button:** Request NDA → `mailto:firstname.lastname@cbre.com?subject=Example%20Business%20Park%20-%20NDA%20request`
- **Image caption:** Illustrative image only (slot H1)
- **Intro paragraph (below hero):** CBRE has been appointed by the vendor as sole marketing agent for the sale of Example Business Park, a 60-year leasehold business park campus of two eight-storey blocks in an established business park cluster in the East region of Singapore. The property is offered for sale by Expression of Interest.

### 2. Investment highlights

- **Heading:** Investment highlights
- **Intro:** Six reasons to take a closer look.

| Card | Icon | Title | Line |
|---|---|---|---|
| 1 | Building | Scale and scarcity | A 452,100 sq ft NLA business park campus in an established cluster, rarely offered for sale. |
| 2 | Pie chart | Diversified income | 38 tenants across six trade sectors; no sector contributes more than 34% of gross rental income. |
| 3 | People or tick | Resilient occupancy | 93.8% committed occupancy and a WALE of 3.2 years by gross rental income. |
| 4 | Upward trend | Rental upside | Average passing rent of S$4.35 psf/mth, below the indicative S$4.60–4.90 psf/mth for comparable business park space. |
| 5 | Train | Excellent connectivity | A 5-minute sheltered walk to Example Park MRT, 3 minutes' drive to the expressway and about 15 minutes to the airport. |
| 6 | Leaf | Green credentials | BCA Green Mark GoldPLUS with 0.8 MWp of rooftop solar, and scope for further asset enhancement, subject to approvals. |

Use icons from the Ceros icon set; don't license icons from Stock.

### 3. Key metrics

- **Heading:** Key metrics

| Tile | Label | Value | Sub-line |
|---|---|---|---|
| 1 | Tenure | Leasehold 60 years | From 1 January 2008 (approx. 41 years remaining) |
| 2 | Land area | Approx. 215,280 sq ft | 20,000 sqm |
| 3 | Gross floor area (GFA) | Approx. 538,200 sq ft | Plot ratio 2.5 |
| 4 | Net lettable area (NLA) | Approx. 452,100 sq ft | Two eight-storey blocks |
| 5 | Committed occupancy | 93.8% | 38 tenants |
| 6 | WALE | 3.2 years | By gross rental income |
| 7 | Net property income (NPI) | S$17.1M | 12 months to 30 June 2026 |
| 8 | Zoning | Business Park | Completed 2010; asset enhancement 2022 |

- **Note:** All figures as at 30 September 2026 unless stated. Approximate, unaudited and subject to verification in the information memorandum. Sample figures.

**How the sample figures fit together** (for whoever replaces them):

| Item | Calculation | Result |
|---|---|---|
| Land area | 20,000 sqm × 10.7639 | 215,278 ≈ 215,280 sq ft |
| GFA | 20,000 sqm × plot ratio 2.5 = 50,000 sqm × 10.7639 | 538,195 ≈ 538,200 sq ft |
| NLA | Block A 229,400 + Block B 222,700 | 452,100 sq ft (efficiency 84% of GFA) |
| Remaining tenure | Lease 1 Jan 2008 – 31 Dec 2067, from 30 Sep 2026 | ≈ 41.25 years |
| Occupied NLA | 452,100 × 93.8% | ≈ 424,070 sq ft |
| Gross rental income (GRI) | 424,070 × S$4.35 psf/mth × 12 | ≈ S$22.14M |
| Other income (car park, licences) | Sample | S$1.30M |
| Gross revenue | 22.14 + 1.30 | ≈ S$23.44M |
| Property expenses | Sample (about 27% of revenue) | S$6.30M |
| **NPI** | 23.44 − 6.30 | **≈ S$17.1M** (NPI margin ≈ 73%) |

### 4. Tenancy profile

- **Heading:** Tenancy profile
- **Intro:** 38 tenants across six trade sectors. The top 10 tenants contribute 58% of gross rental income.

**Chart 1: Tenancy by trade sector (% of gross rental income)** (pie or donut)

| Sector | % of GRI |
|---|---|
| Technology, media & telecoms | 34 |
| Biomedical & life sciences | 20 |
| Financial services | 16 |
| Engineering & electronics | 14 |
| Professional services | 9 |
| Others | 7 |
| **Total** | **100** |

**Chart 2: Lease expiry profile (% of gross rental income)** (vertical bar; y-axis "% of GRI")

| Year | % of GRI |
|---|---|
| 2026 (Oct–Dec) | 5 |
| 2027 | 18 |
| 2028 | 22 |
| 2029 | 17 |
| 2030 | 14 |
| 2031 and beyond | 24 |
| **Total** | **100** |

- **Chart note:** Based on committed leases as at 30 September 2026. WALE 3.2 years by gross rental income. Sample data.
- **Data toggle label:** View chart data

WALE check, measured from 30 September 2026 to the average expiry point in each bucket: 5% × 0.125 + 18% × 0.75 + 22% × 1.75 + 17% × 2.75 + 14% × 3.75 + 24% × 7.0 = 0.006 + 0.135 + 0.385 + 0.468 + 0.525 + 1.680 = **3.20 years**. The "2031 and beyond" bucket assumes an average remaining term of about 7 years (e.g. a long anchor lease to 2035).

Chart alt text (sample): "Pie chart of tenancy by trade sector as a share of gross rental income: Technology, media and telecoms 34%, Biomedical and life sciences 20%, Financial services 16%, Engineering and electronics 14%, Professional services 9%, Others 7%." and "Bar chart of lease expiries as a share of gross rental income: 2026 5%, 2027 18%, 2028 22%, 2029 17%, 2030 14%, 2031 and beyond 24%."

### 5. Location & connectivity

- **Heading:** Location & connectivity
- **Intro:** Set in an established business park cluster in the East region of Singapore, with rail, expressway and airport access close by.

**Getting there**

- Example Park MRT station – 5 min sheltered walk
- Sample Junction MRT interchange – 2 stops
- Bus stops (8 services) – 1 min walk
- Expressway access – 3 min drive
- Airport – approx. 15 min drive
- CBD – approx. 25 min drive

**Nearby amenities**

- Food court, café, gym and childcare centre on site
- Shopping mall with 150+ stores – 8 min walk
- Two hotels and serviced apartments – 10 min walk
- Park connector and cycling network – 3 min walk
- Universities and research institutes – 10 min drive

- **Map:** embed placeholder "Map embed – replace with location map" (fallback: slot M1 plus a "View on map" button → https://maps.google.com, new tab)
- **Note:** Travel times are approximate.

### 6. Site plan

- **Heading:** Site plan
- **Intro:** Select a numbered marker to explore the property.
- **Image:** slot S1

| Hotspot | Title | Popup text | Optional image |
|---|---|---|---|
| 1 | Block A | Eight storeys of business park space, approx. 229,400 sq ft NLA. Typical floor plates of about 30,000 sq ft suit R&D, technology and operations users. | E1 |
| 2 | Block B | Eight storeys, approx. 222,700 sq ft NLA, with a double-volume lobby refurbished in the 2022 asset enhancement. | E2 |
| 3 | Central courtyard & amenities | A landscaped courtyard links both blocks, with a food court, café, gym and childcare centre at ground level. | E3 |
| 4 | Basement car park & loading | Two basement levels with 420 car park lots, including 40 EV charging points, plus six loading bays. | E4 |
| 5 | Rooftop solar | A 0.8 MWp rooftop solar installation across both blocks, generating about 1.0 GWh of renewable electricity a year. | E5 |

- **Note:** Site plan not to scale. For illustration only.
- **Suggested hotspot positions** (on a plan with the courtyard in the centre): 1 on the left block, 2 on the right block, 3 in the centre, 4 at the car park ramp near the site entrance, 5 on a roof.

### 7. Sale process & timeline

- **Heading:** Sale process & timeline
- **Intro:** The property is offered for sale by Expression of Interest (EOI).

| Step | Title | Date | Text |
|---|---|---|---|
| 1 (open by default) | Launch | Tuesday, 15 September 2026 | Sale launched by Expression of Interest and this teaser released to the market. |
| 2 | NDA and information memorandum | From 15 September 2026 | Parties who sign the non-disclosure agreement receive the information memorandum and access to the virtual data room. |
| 3 | Site inspections | 29 September to 30 October 2026 | Guided inspections by appointment only. Contact the deal team to book. |
| 4 | EOI closing | 3:00 pm (Singapore time), Thursday, 12 November 2026 | Submit non-binding EOIs in the prescribed form to the deal team. Late submissions may not be considered. |
| 5 | Shortlisting and second round | Late November to December 2026 | Shortlisted parties will be invited to complete due diligence and submit binding offers. |
| 6 | Completion | Targeted for Q1 2027 | Subject to contract, vendor approval and any required landlord and authority consents. |

- **Note:** The vendor reserves the right to amend the sale process and timetable, or to withdraw the property, at any time without notice.

### 8. Deal team

- **Heading:** Deal team
- **Intro:** For NDA requests, inspections and enquiries, contact the deal team.

| Card | Photo slot | Name | Title | Phone | Email | Registration line | Button |
|---|---|---|---|---|---|---|---|
| 1 | D1 | Firstname Lastname | Executive Director, Capital Markets | +65 6XXX XXXX | firstname.lastname@cbre.com | Registration No. [placeholder – include only if required] | Email → `mailto:firstname.lastname@cbre.com` |
| 2 | D2 | Firstname Lastname | Senior Director, Industrial & Logistics Capital Markets | +65 6XXX XXXX | firstname.lastname@cbre.com | Registration No. [placeholder – include only if required] | Email → `mailto:firstname.lastname@cbre.com` |
| 3 | D3 | Firstname Lastname | Associate Director, Capital Markets | +65 9XXX XXXX | firstname.lastname@cbre.com | Registration No. [placeholder – include only if required] | Email → `mailto:firstname.lastname@cbre.com` |
| 4 | D4 | Firstname Lastname | Senior Manager, Capital Markets (NDA and data room enquiries) | +65 9XXX XXXX | firstname.lastname@cbre.com | Registration No. [placeholder – include only if required] | Email → `mailto:firstname.lastname@cbre.com` |

- **Button below cards:** Register interest → https://www.cbre.com.sg/contact-us (new tab)

### 9. Important notice

- **Heading:** Important notice
- **Text:** "[Disclaimer placeholder — replace with the approved CBRE Capital Markets disclaimer from Legal/Compliance before publishing.] Sample wording: This teaser has been prepared by CBRE solely to gauge preliminary interest in the property described. It does not constitute an offer, invitation or solicitation to buy or sell any property or securities, and it does not form part of any contract. Detailed information will be provided only in an information memorandum to parties who have signed a non-disclosure agreement. All figures, areas, dates and other information are indicative, approximate, unaudited and subject to change and verification; in this template they are sample figures. Interested parties must make their own enquiries and seek independent legal, financial, tax and other professional advice. Neither CBRE nor the vendor makes any representation or warranty as to the accuracy or completeness of this information, and they accept no liability for any loss arising from reliance on it."

### 10. Footer

1. **Disclaimer line (placeholder, mandatory):** [Disclaimer placeholder: insert the approved CBRE Capital Markets disclaimer.]
2. **Agency licence line:** [Agency licence number placeholder – include if required by Compliance.]
3. **Image disclaimer:** Images and site plan are for illustration only.
4. **Sample note (visible):** Sample content for template purposes only — replace before publishing.

### Optional navigation labels

Highlights · Key metrics · Tenancy · Location · Site plan · Process · Deal team · [Register interest]

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** Whether to license images (this spends Adobe Stock credits on the CBRE account) or to use watermarked comp/preview images for the template is still to be decided by the user. **The executing session must ask before licensing any image.** Until then, use comps or the Ceros placeholders.

Search at https://stock.adobe.com/sg. Selection rules for this template (it presents a specific asset for sale, so the strictest property rules apply):

- **No identifiable real buildings, business parks, towers, estates or landmarks** that could be mistaken for the asset on offer or any CBRE-managed, valued or marketed property. Prefer CGI/3D renders or tightly cropped, generic views. No aerial photos of recognisable Singapore estates.
- No visible third-party brands, logos, building signage, tenant names or legible screens.
- Singapore/Asia context where people appear; diverse people.
- Exclude assets marked "Editorial use only".
- If CBRE policy disallows AI-generated stock, turn on the "Exclude generative AI" filter. If that rules out CGI-style results, use generic close-up architecture instead.
- Highlight icons come from the Ceros icon set, not Stock. Charts are built natively (or exported from Excel), not from Stock.
- To save credits, the popup images E1–E5 are optional: the popups work with text only.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| H1 – Hero | Generic modern low- or mid-rise business park campus with landscaping, daytime, no signage; ideally a CGI/3D render; calm area for the headline | `modern business park office buildings landscaping 3d render` (alt: `low rise office campus exterior greenery daylight`) | Landscape 16:9, ≥ 2400 px wide | Illustrative image of a modern business park campus with landscaped grounds |
| S1 – Site plan | Top-down site plan of two blocks around a central courtyard with a driveway and car park ramp. Best redrawn in-house from the vendor's plans; stock only as a template stand-in | `architectural site plan top view buildings courtyard illustration` (alt: `site plan drawing landscape top view vector`) | Landscape 16:9, ≥ 2000 px wide | Illustrative site plan showing Block A, Block B, the central courtyard, car park entrance and rooftop solar |
| E1 – Popup: Block A (optional) | Generic façade of a mid-rise office block with greenery, cropped so it is not identifiable | `mid rise office building facade greenery modern close up` | Landscape 3:2, ≥ 1200 px wide | Façade of an eight-storey business park block with planting |
| E2 – Popup: Block B lobby (optional) | Empty, double-height modern office lobby, no signage | `double height office lobby interior modern empty` | Landscape 3:2, ≥ 1200 px wide | Double-volume office lobby with seating |
| E3 – Popup: Courtyard & amenities (optional) | Landscaped courtyard between office buildings with outdoor seating and tropical planting | `landscaped courtyard between office buildings outdoor seating tropical` | Landscape 3:2, ≥ 1200 px wide | Landscaped courtyard with outdoor seating between two office blocks |
| E4 – Popup: Car park (optional) | Clean basement car park with EV charging points; no charger brand visible | `underground car park electric vehicle charging station` | Landscape 3:2, ≥ 1200 px wide | Basement car park bays with electric vehicle charging points |
| E5 – Popup: Rooftop solar (optional) | Rows of solar panels on a flat commercial rooftop, no identifiable skyline | `rooftop solar panels commercial building aerial` | Landscape 3:2, ≥ 1200 px wide | Solar panels across a commercial building rooftop |
| M1 – Map fallback (only if no embed) | Simple, generic map illustration with a single location pin; no real street names | `abstract city map illustration single location pin` | Landscape 16:9, ≥ 1600 px wide | Map showing the location of Example Business Park and nearby transport links |
| D1 – Deal team card 1 | **Placeholder only.** Professional headshot, neutral background | `asian businessman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Executive Director, Capital Markets |
| D2 – Deal team card 2 | **Placeholder only.** Professional headshot | `indian businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Senior Director, Industrial & Logistics Capital Markets |
| D3 – Deal team card 3 | **Placeholder only.** Professional headshot | `malay businessman professional headshot studio neutral` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Associate Director, Capital Markets |
| D4 – Deal team card 4 | **Placeholder only.** Professional headshot | `young asian professional woman headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Senior Manager, Capital Markets |

**Live teasers:** replace H1, S1 and E1–E5 with vendor-supplied photography, CGI and plans (with written usage rights), and update the captions ("Artist's impression" for CGI). Never publish stock images as if they show the actual asset.

**Deal team photos:** never publish stock faces next to real staff names. In every live copy, D1–D4 must be the named person's own approved CBRE headshot. For the template, keep neutral avatar placeholders rather than licensing four headshots; the queries above are only for comps if the user wants realistic previews.

## QA checklist

- [ ] Brand kit is still **CBRE Test** and **unmodified**. No AI offer to change the brand kit was accepted, and no new brand kit was created.
- [ ] No colour, font or logo overrides were added to any element (including chart colours). If there was drift, follow-up 12 was applied.
- [ ] The experience is in the **CBRE Singapore** folder.
- [ ] The experience is named exactly `[Template] Investment Opportunity Teaser`.
- [ ] Tone and structure are consistent with the New Joiner Onboarding reference experience.
- [ ] All ten sections are present in order (eleven with the optional navigation), plus the intro paragraph below the hero.
- [ ] Hero: "Register interest" opens the placeholder URL in a new tab; "Request NDA" opens a `mailto:` with the pre-filled subject; the "Illustrative image only" caption is present.
- [ ] Highlights: six cards with the right icon, title and line, in order.
- [ ] Key metrics: eight tiles with the exact labels, values and sub-lines; any counters end on exactly 93.8%, 3.2 years and S$17.1M; the "as at" note is present.
- [ ] Charts: pie slices add up to 100% and bars add up to 100%, labels and values match the sample tables, and the "View chart data" tables (or the visible tables) are present and correct.
- [ ] Figures agree everywhere: NLA 452,100 sq ft (hero, highlight 1, tile 4, Block A + Block B popups); 38 tenants (highlight 2, tile 5, tenancy intro); 93.8% and WALE 3.2 years (highlight 3, tiles 5–6, chart note); EOI close 3:00 pm Thursday 12 November 2026 (hero, process step 4).
- [ ] Location: both lists are present; the map embed placeholder is labelled (or the static map + "View on map" fallback works); the "approximate" note is present.
- [ ] Site plan: all five hotspots open the correct popup, popups close (close button, outside click, Esc if supported), and they fit the mobile screen (or the buttons/accordion fallback works).
- [ ] Sale process accordion: six items in order, the first open by default, every item opens and closes, and the "vendor reserves the right" note is present.
- [ ] Deal team: four cards; every "Email" opens a `mailto:`; the registration placeholders are present; "Register interest" works.
- [ ] **Important notice** is a prominent, always-visible boxed section (not a popup or collapsed item) containing the disclaimer placeholder and the "no offer / IM only under NDA / indicative figures" wording.
- [ ] Footer shows the disclaimer placeholder, agency licence placeholder, image disclaimer and the **"Sample content for template purposes only — replace before publishing."** note, visible on desktop and mobile.
- [ ] No price or guide price is shown anywhere.
- [ ] All interactions were tested in preview on **desktop and mobile**: buttons, counters, charts and data toggles, map embed, hotspots and popups, accordion, mailto links, and nav if added.
- [ ] Mobile: tiles, charts, lists, popups, accordion and cards stack cleanly and charts are readable, with no overlapping or cut-off text and no page-level horizontal scroll.
- [ ] CTAs and links point to placeholders: Register interest → https://www.cbre.com.sg/contact-us; Request NDA and Email → `mailto:firstname.lastname@cbre.com`; map fallback → https://maps.google.com. External links open in a new tab.
- [ ] Image placeholders have been replaced with the agreed images (licensed or comp, **per the user's decision**). No stock image was licensed without asking.
- [ ] No identifiable real building, business park, estate or landmark appears in any image, and nothing could be mistaken for a CBRE-managed or marketed asset. No third-party logos, signage or "Editorial use only" assets.
- [ ] Alt text is set on every image, including the site plan, and each chart has a text alternative listing its data.
- [ ] No real client, vendor, tenant or people names, and no real property names or addresses, appear anywhere.
- [ ] Heading structure is one H1 (asset name) and an H2 per section. Hotspots have accessible labels, and button/link labels are descriptive.
