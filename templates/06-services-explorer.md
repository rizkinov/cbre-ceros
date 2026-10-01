# [Template] Services Explorer

- **Slug:** `services-explorer`
- **Ceros starting point:** Free prompt
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline.
- **Experience name:** `[Template] Services Explorer`
- **Primary audience:** Prospective and existing clients (occupiers, investors, developers and landlords) who know CBRE for one service and need to see the full Singapore offer, plus event, pitch and email follow-ups. CBRE Singapore Marketing duplicates it for campaign or audience-specific versions (e.g. an investor-only edition) and refreshes the figures each year; each business line owns the copy in its own popup.
- **Est. build time:** 3.5–4.5 hours (about 30 min generation and refinement, 1.5 h popup/tab/counter checks across eight services, 1 h images and contact details, 45 min QA)

## Purpose

This is a single-page, interactive overview of CBRE Singapore's eight service lines that replaces a static capabilities brochure. Visitors select a service tile to open a popup with a description, key offerings, two headline stats, a named contact and a "Learn more" link, then see how CBRE helps occupiers, investors and developers, followed by a "Why CBRE" figures strip and a contact CTA. Marketing duplicates the template for campaign or audience variants and swaps in approved descriptions, figures and contacts. All figures, contacts and stats in the template are samples.

## Ceros AI prompt

Before you paste:

1. Open the existing **New Joiner Onboarding** experience in the CBRE Singapore folder. Note its tone, section rhythm and how it uses components, so this build feels like part of the same family. If the generated result differs noticeably, adjust it with the follow-up prompts. Do not add any styling instructions.
2. In the "What will you build today?" box, set **Brand Kit = CBRE Test** and **Folder = CBRE Singapore**.
3. Paste the block below verbatim and generate.
4. If the AI offers to update, extend or modify the brand kit at any point, decline. Reply: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`
5. Rename the experience to `[Template] Services Explorer`.

```text
Create a responsive single-page "Services Explorer" for the Singapore team of a real estate services and investment firm. Use the selected brand kit's styles as-is. Tone: clear, confident, helpful. Use labelled image placeholders only (no recognisable real buildings or landmarks).

Sections, in order:

1. Hero: image placeholder; eyebrow "CBRE Singapore | Our services"; headline "One partner for every real estate decision"; subhead "From finding space to investing in, valuing, managing and decarbonising it, our Singapore team supports every stage of the property lifecycle."; buttons "Explore our services" (scrolls to section 3) and "Talk to us" (https://www.cbre.com.sg/contact-us).

2. Intro: heading "Integrated expertise, one point of contact" and a two-sentence paragraph.

3. Explore our services: line "Select a service to see what we do, sample results and who to talk to.", then a grid of eight clickable tiles (icon, title, one-line teaser). Each tile opens a popup (modal) with: title; paragraph; "Key offerings" with three bullets; two stats (number + label); a contact (photo placeholder, "Firstname Lastname", title, email, phone); a "Learn more" button (https://www.cbre.com.sg/services); a close button. Tiles: Advisory & Transaction Services; Project Management; Facilities & Workplace Management; Capital Markets; Valuation & Advisory; Research; Property Management; ESG & Sustainability Consulting. All eight popups share this layout; I will send the copy next.

4. Who we serve: tabs "Occupiers", "Investors", "Developers". Each tab: image placeholder, heading, short paragraph, three "How we help" bullets, a "Relevant services" line and a button.

5. Why CBRE: four counters that count up on scroll: 100+ countries and territories | 140,000+ employees worldwide | 1,200+ professionals in Singapore | 8 service lines in Singapore. Below: "Sample figures – replace with the latest approved CBRE figures."

6. Contact CTA: heading "Not sure where to start?", one line, buttons "Contact CBRE Singapore" (https://www.cbre.com.sg/contact-us) and "Read our research" (https://www.cbre.com.sg/insights). External links open in a new tab.

7. Footer: "[Disclaimer placeholder: insert the approved CBRE Singapore disclaimer.]" and the visible note "Sample content for template purposes only — replace before publishing."

On mobile, use one or two tile columns, stack tab content and counters, and make popups fit the screen and scroll inside.
```

## Expected structure

After generation, check each section against this list. Use the follow-up prompts to fix anything missing.

1. **Hero**: full-width image placeholder, eyebrow, H1 headline and subhead. "Explore our services" scrolls (anchor link) to section 3; "Talk to us" links to https://www.cbre.com.sg/contact-us in a new tab.
2. **Intro**: H2 heading and a two-sentence paragraph. Static.
3. **Explore our services**: an instruction line and a grid of eight tiles (4×2 on desktop, 2 columns or one column on mobile). Each tile has an icon, title and teaser, and the whole tile is clickable. Clicking or tapping a tile opens its own popup (modal) containing:
   - title
   - one paragraph
   - "Key offerings" with three bullets
   - two stat blocks (number + label) and a "Sample figures" line
   - a contact block (photo placeholder, name, title, `mailto:` email, phone)
   - a "Learn more" button that links out in a new tab
   - a close button; the popup also closes on an outside click or Esc if supported

   **Fallback:** if popups are not possible, an accordion with one item per service (same content), or tiles that scroll (anchor link) to a matching content block further down the page, each with a "Back to services" link.
4. **Who we serve**: a tabs component with three tabs (Occupiers open by default). Clicking a tab switches the panel. Each panel has an image placeholder, heading, paragraph, three "How we help" bullets, a "Relevant services" line (links that open the matching popup or scroll to the grid) and a button that links out in a new tab. **Fallback:** an accordion with Occupiers open.
5. **Why CBRE**: four animated number counters that count up once when scrolled into view (fallback: static numbers with a fade-in), each with a label, plus the visible "Sample figures" line.
6. **Contact CTA band**: heading, one line of copy, and two buttons ("Contact CBRE Singapore", "Read our research"), both in a new tab.
7. **Footer**: disclaimer placeholder, agency licence placeholder (added by follow-up 9 if missing) and the visible sample-content note.
8. *(Optional, from follow-up 10)* **Navigation**: a top or sticky bar with anchor links, or "Back to top" links.

## Follow-up refinement prompts

Paste these one at a time in the AI chat after the first generation. Skip any that the first pass already handled. None of them contain styling requests; if the AI offers brand kit changes, decline. Each block is under 2,000 characters.

**1. Intro copy and service tiles**

```text
Set the Intro paragraph to: "Our specialists work as one team across eight service lines, so you get joined-up advice whether you are leasing a single floor, investing in a portfolio or decarbonising a building. Tell us what you are planning and we will bring the right experts to the table."

Under the heading "Explore our services", keep the line "Select a service to see what we do, sample results and who to talk to." Set the eight tiles, in this order, to these titles and teasers, each with a simple relevant icon:
1. Advisory & Transaction Services – "Find, secure and optimise the right space."
2. Project Management – "Workplaces delivered on time and on budget."
3. Facilities & Workplace Management – "Buildings and workplaces that run smoothly every day."
4. Capital Markets – "Buy, sell and finance property with confidence."
5. Valuation & Advisory – "Independent values you can rely on."
6. Research – "Data and insight behind every decision."
7. Property Management – "Assets managed for performance and tenant satisfaction."
8. ESG & Sustainability Consulting – "Lower carbon, stronger asset value."
Make each whole tile clickable and add a small "Explore" label with an arrow at the bottom of each tile.
```

**2. Popups: Advisory & Transaction Services, Project Management**

```text
Set the popup content for these two services exactly, keeping the shared popup layout:

Advisory & Transaction Services
Paragraph: "Whether you are expanding, consolidating or renewing, our advisory and transaction specialists help occupiers and landlords make better leasing and sales decisions. We combine live market data with deep relationships across Singapore's office, industrial and retail markets to secure the right terms on the right timeline."
Key offerings:
- Tenant representation for relocations, expansions and renewals
- Landlord leasing and agency for office, industrial and retail assets
- Lease restructuring and portfolio strategy
Stats: "2.1M sq ft" – "Space leased and sold for clients in Singapore, 2025" | "310" – "Transactions completed, 2025"
Contact: Firstname Lastname | Executive Director, Advisory & Transaction Services | firstname.lastname@cbre.com | +65 6XXX XXXX

Project Management
Paragraph: "From the first space brief to the last box unpacked, our project managers plan, design and deliver fit-outs, refurbishments and relocations. We manage cost, programme, risk and authority approvals so you can stay focused on running your business."
Key offerings:
- Workplace strategy and change management
- Fit-out and design-and-build delivery
- Cost management and relocation management
Stats: "1.4M sq ft" – "Fit-out and refurbishment delivered in Singapore, 2025" | "96%" – "Projects delivered on or ahead of schedule"
Contact: Firstname Lastname | Managing Director, Project Management | firstname.lastname@cbre.com | +65 6XXX XXXX

Both "Learn more" buttons link to https://www.cbre.com.sg/services in a new tab. The contact email opens a mailto link.
```

**3. Popups: Facilities & Workplace Management, Capital Markets**

```text
Set the popup content for these two services exactly, keeping the shared popup layout:

Facilities & Workplace Management
Paragraph: "We keep buildings and workplaces safe, efficient and inspiring for the people who use them. Our teams combine on-site service delivery with data from smart building systems to reduce downtime, control costs and improve the employee experience across single sites and multi-site portfolios."
Key offerings:
- Integrated facilities management (hard and soft services)
- Workplace experience and hospitality services
- Energy, engineering and smart-building operations
Stats: "18M sq ft" – "Space under facilities management in Singapore" | "98.5%" – "Planned maintenance completed on schedule"
Contact: Firstname Lastname | Senior Director, Facilities & Workplace Management | firstname.lastname@cbre.com | +65 6XXX XXXX

Capital Markets
Paragraph: "Our capital markets team advises investors, owners and developers on acquisitions, disposals and financing across every major property sector. With access to local, regional and global capital, we help clients price assets accurately, reach the right buyers and close transactions with certainty."
Key offerings:
- Investment sales and acquisitions
- Debt and structured finance advisory
- Collective (en bloc) sales and land advisory
Stats: "S$4.8B" – "Investment sales transacted in Singapore, 2025" | "35" – "Investment transactions closed, 2025"
Contact: Firstname Lastname | Executive Director, Capital Markets | firstname.lastname@cbre.com | +65 6XXX XXXX

Both "Learn more" buttons link to https://www.cbre.com.sg/services in a new tab. The contact email opens a mailto link.
```

**4. Popups: Valuation & Advisory, Research**

```text
Set the popup content for these two services exactly, keeping the shared popup layout:

Valuation & Advisory
Paragraph: "Our qualified valuers provide independent, well-supported opinions of value for financial reporting, lending, acquisitions, REIT reporting and statutory purposes. We cover office, industrial, retail, hospitality and residential assets, backed by our transaction and research data."
Key offerings:
- Valuations for financial reporting, lending and REITs
- Feasibility and highest-and-best-use studies
- Statutory, insurance and dispute valuations
Stats: "S$85B" – "Value of assets valued in Singapore, 2025" | "2,000+" – "Valuation and advisory reports issued a year"
Contact: Firstname Lastname | Executive Director, Valuation & Advisory | firstname.lastname@cbre.com | +65 6XXX XXXX

Research
Paragraph: "Our research team tracks Singapore's office, industrial and logistics, retail and residential markets every quarter. Our analysts turn proprietary data into clear forecasts and insights that help clients time decisions, benchmark performance and understand what is driving demand."
Key offerings:
- Quarterly market reports and forecasts
- Bespoke market studies and demand analysis
- Briefings and data for occupiers, investors and media
Stats: "120+" – "Reports, updates and briefings published a year" | "4" – "Core sectors tracked every quarter"
Contact: Firstname Lastname | Head of Research, Singapore & Southeast Asia | firstname.lastname@cbre.com | +65 6XXX XXXX

Set the Valuation & Advisory "Learn more" button to https://www.cbre.com.sg/services and the Research "Learn more" button to https://www.cbre.com.sg/insights, both in a new tab. The contact email opens a mailto link.
```

**5. Popups: Property Management, ESG & Sustainability Consulting**

```text
Set the popup content for these two services exactly, keeping the shared popup layout:

Property Management
Paragraph: "We manage commercial, industrial and mixed-use properties on behalf of owners, protecting asset value while keeping tenants satisfied. Our property managers handle everything from budgets and service charges to building operations, compliance and tenant relations."
Key offerings:
- Property and lease administration
- Building operations, maintenance and compliance
- Tenant engagement and financial reporting
Stats: "45" – "Commercial properties managed in Singapore" | "9M sq ft" – "Net lettable area under management"
Contact: Firstname Lastname | Senior Director, Property Management | firstname.lastname@cbre.com | +65 6XXX XXXX

ESG & Sustainability Consulting
Paragraph: "We help owners and occupiers set credible sustainability targets and turn them into action. From building audits and green certifications to net-zero roadmaps and ESG reporting, our consultants link sustainability performance to cost, risk and asset value."
Key offerings:
- Net-zero roadmaps and decarbonisation plans
- Green building certification support, including BCA Green Mark
- ESG data, reporting and benchmarking
Stats: "60+" – "Green certifications and audits supported" | "18%" – "Average energy savings identified in building audits"
Contact: Firstname Lastname | Director, ESG & Sustainability Consulting | firstname.lastname@cbre.com | +65 6XXX XXXX

Both "Learn more" buttons link to https://www.cbre.com.sg/services in a new tab. The contact email opens a mailto link.
```

**6. Popup behaviour, sample label and fallback**

```text
For all eight service popups:
- Under the two stats, add the small line "Sample figures – replace before publishing."
- Label the contact block "Your contact".
- Each popup closes with its close button, by clicking outside it, and with the Esc key if supported.
- On mobile, the popup fits the screen width and its content scrolls inside the popup; the close button always stays visible.
- Opening a popup must not move the page scroll position.

If popups are not available, replace the tile grid with an accordion that has one item per service (same content, one item open at a time). If that is not possible either, make each tile an anchor link that scrolls to a content block for that service further down the page, each block ending with a "Back to services" link.
```

**7. Who we serve tabs**

```text
Set "Who we serve" to the intro line "Whatever your role in real estate, we tailor our team to your goals." and these three tabs, with Occupiers open by default:

Occupiers
Heading: "Space that works as hard as your people"
Paragraph: "Corporates, SMEs and public-sector organisations work with us to plan, find, fit out and run their workplaces in Singapore and across Asia Pacific."
How we help: "Plan: workplace strategy and portfolio planning" | "Find: market search, negotiation and lease renewals" | "Run: fit-out, facilities management and workplace services"
Relevant services: Advisory & Transaction Services · Project Management · Facilities & Workplace Management · ESG & Sustainability Consulting
Button: "Talk to an occupier specialist"

Investors
Heading: "Insight-led decisions across the investment cycle"
Paragraph: "REITs, funds, insurers, family offices and private investors rely on us to source deals, value assets, manage properties and exit at the right time."
How we help: "Source and execute acquisitions and disposals" | "Independent valuations and market research" | "Property management that protects income and asset value"
Relevant services: Capital Markets · Valuation & Advisory · Property Management · Research
Button: "Talk to our investment team"

Developers
Heading: "From site to stabilised asset"
Paragraph: "Developers and landlords work with us from land acquisition and feasibility through construction to leasing, sales and long-term management."
How we help: "Site sourcing, feasibility and highest-and-best-use studies" | "Project and cost management through construction" | "Pre-leasing, marketing and sales strategy"
Relevant services: Capital Markets · Valuation & Advisory · Project Management · Advisory & Transaction Services
Button: "Discuss your project"

All three buttons link to https://www.cbre.com.sg/contact-us in a new tab. If possible, each "Relevant services" name opens that service's popup; otherwise it links to "Explore our services".
```

**8. Why CBRE counters**

```text
In "Why CBRE", add the intro line "Global reach, local expertise." under the heading. Set the four counters to exactly:
1. 100 with suffix "+" – "Countries and territories"
2. 140,000 with suffix "+" – "Employees worldwide"
3. 1,200 with suffix "+" – "Professionals in Singapore"
4. 8 – "Integrated service lines in Singapore"
Each counter animates once from zero to its final value when it scrolls into view, keeping the thousands separators. If animated counters are not available, show static numbers with a simple fade-in. Keep the visible line "Sample figures – replace with the latest approved CBRE figures." directly under the counters.
```

**9. Contact CTA and footer**

```text
Update the contact call to action body copy to: "Tell us what you're planning and we'll connect you with the right specialist in our Singapore team." Keep the buttons "Contact CBRE Singapore" → https://www.cbre.com.sg/contact-us and "Read our research" → https://www.cbre.com.sg/insights, both opening in a new tab.

Set the footer to, in this order:
1. "[Disclaimer placeholder — insert the approved CBRE Singapore disclaimer before publishing.] Sample wording: This content is provided for general information only and does not constitute investment, financial, valuation, legal or tax advice, or an offer or solicitation to buy, sell or lease any property. Statistics are indicative and may not reflect current figures. Readers should seek independent professional advice before acting on any information herein."
2. "[Agency licence number placeholder – include if required by Compliance.]"
3. "Sample content for template purposes only — replace before publishing."
Make sure all three lines are visible on desktop and mobile.
```

**10. Navigation (optional)**

```text
Add a slim navigation bar at the top with anchor links "Services", "Who we serve", "Why CBRE" and a "Contact us" button linking to https://www.cbre.com.sg/contact-us in a new tab. Keep it visible while scrolling if that is supported. On mobile, collapse the links into a menu but keep "Contact us" visible. If a persistent bar is not possible, add a "Back to top" link at the end of sections 3, 4 and 5.
```

**11. Accessibility and mobile pass**

```text
Do an accessibility and mobile pass: use one H1 (the hero headline) and an H2 for each section heading; give each tile an accessible label such as "Open Capital Markets details"; make sure tiles, popups, the close button, tabs and links all work with a keyboard, that focus moves into a popup when it opens and back to its tile when it closes, and that Esc closes it if supported; give every image placeholder descriptive alt text; make button and link text descriptive (no "Click here"); and check that on mobile the tiles, popups, tab content and counters display cleanly with no overlapping, cut-off text or page-level horizontal scrolling.
```

**12. Reset styling drift (use only if needed)**

```text
Remove any custom styling you applied to individual elements and apply the selected brand kit's default styles consistently to all headings, body text, buttons, tiles, popups and tabs. Do not create, change or update the brand kit itself.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | `[Template] Services Explorer` | Settings | When you duplicate it, rename to e.g. `CBRE Singapore – Our Services` or `Services for Investors – Singapore` and remove `[Template]`. |
| SEO / share title | Our services – CBRE Singapore | Settings | Set in experience settings if available. |
| SEO / share description | Explore CBRE Singapore's eight service lines, from leasing and project management to capital markets, valuation and ESG. | Settings | Keep under about 160 characters. |
| Hero eyebrow | CBRE Singapore \| Our services | Hero | |
| Hero headline (H1) | One partner for every real estate decision | Hero | |
| Hero subhead | From finding space to investing in, valuing, managing and decarbonising it, our Singapore team supports every stage of the property lifecycle. | Hero | One sentence. Mention the audience for audience-specific versions. |
| Hero image | Diverse professionals meeting in a modern office | Hero | Image slot H1. |
| Hero buttons | "Explore our services" → anchor to section 3; "Talk to us" → https://www.cbre.com.sg/contact-us | Hero | Replace the contact URL with a campaign form if one exists. |
| Intro heading + paragraph | Integrated expertise, one point of contact / Our specialists work as one team across eight service lines… | Intro | Update "eight" if you add or remove service lines. |
| Explorer heading + instruction | Explore our services / Select a service to see what we do, sample results and who to talk to. | Explore our services | Drop "sample" from the instruction once the stats are real. |
| Tile 1 – Advisory & Transaction Services | Title, teaser "Find, secure and optimise the right space.", icon | Explore our services | Tile title must match the popup title and the case-study service cards. |
| Popup 1 – copy | Paragraph "Whether you are expanding, consolidating or renewing…" + 3 key offerings | Popup 1 | Approved by the business line head. Paragraph 40–60 words. |
| Popup 1 – stats | 2.1M sq ft – Space leased and sold for clients in Singapore, 2025; 310 – Transactions completed, 2025 | Popup 1 | **Sample.** Use only verified, approved figures with a year. |
| Popup 1 – contact + link | Firstname Lastname, Executive Director, Advisory & Transaction Services, firstname.lastname@cbre.com, +65 6XXX XXXX; Learn more → https://www.cbre.com.sg/services | Popup 1 | Real staff details and headshot only with consent. Replace the URL with the service page. |
| Tile 2 – Project Management | Title, teaser "Workplaces delivered on time and on budget.", icon | Explore our services | |
| Popup 2 – copy | Paragraph "From the first space brief to the last box unpacked…" + 3 key offerings | Popup 2 | |
| Popup 2 – stats | 1.4M sq ft – Fit-out and refurbishment delivered in Singapore, 2025; 96% – Projects delivered on or ahead of schedule | Popup 2 | **Sample.** |
| Popup 2 – contact + link | Firstname Lastname, Managing Director, Project Management; Learn more → https://www.cbre.com.sg/services | Popup 2 | As popup 1. |
| Tile 3 – Facilities & Workplace Management | Title, teaser "Buildings and workplaces that run smoothly every day.", icon | Explore our services | |
| Popup 3 – copy | Paragraph "We keep buildings and workplaces safe, efficient and inspiring…" + 3 key offerings | Popup 3 | |
| Popup 3 – stats | 18M sq ft – Space under facilities management in Singapore; 98.5% – Planned maintenance completed on schedule | Popup 3 | **Sample.** |
| Popup 3 – contact + link | Firstname Lastname, Senior Director, Facilities & Workplace Management; Learn more → https://www.cbre.com.sg/services | Popup 3 | As popup 1. |
| Tile 4 – Capital Markets | Title, teaser "Buy, sell and finance property with confidence.", icon | Explore our services | |
| Popup 4 – copy | Paragraph "Our capital markets team advises investors, owners and developers…" + 3 key offerings | Popup 4 | Investment content: the footer disclaimer is **mandatory**. Compliance should review the wording. |
| Popup 4 – stats | S$4.8B – Investment sales transacted in Singapore, 2025; 35 – Investment transactions closed, 2025 | Popup 4 | **Sample.** Transaction volumes need Compliance sign-off. |
| Popup 4 – contact + link | Firstname Lastname, Executive Director, Capital Markets; Learn more → https://www.cbre.com.sg/services | Popup 4 | As popup 1. |
| Tile 5 – Valuation & Advisory | Title, teaser "Independent values you can rely on.", icon | Explore our services | |
| Popup 5 – copy | Paragraph "Our qualified valuers provide independent, well-supported opinions of value…" + 3 key offerings | Popup 5 | Confirm how valuer qualifications or licensing should be described. |
| Popup 5 – stats | S$85B – Value of assets valued in Singapore, 2025; 2,000+ – Valuation and advisory reports issued a year | Popup 5 | **Sample.** |
| Popup 5 – contact + link | Firstname Lastname, Executive Director, Valuation & Advisory; Learn more → https://www.cbre.com.sg/services | Popup 5 | As popup 1. |
| Tile 6 – Research | Title, teaser "Data and insight behind every decision.", icon | Explore our services | |
| Popup 6 – copy | Paragraph "Our research team tracks Singapore's office, industrial and logistics, retail and residential markets…" + 3 key offerings | Popup 6 | |
| Popup 6 – stats | 120+ – Reports, updates and briefings published a year; 4 – Core sectors tracked every quarter | Popup 6 | **Sample.** |
| Popup 6 – contact + link | Firstname Lastname, Head of Research, Singapore & Southeast Asia; Learn more → https://www.cbre.com.sg/insights | Popup 6 | Same contact as `[Template] Quarterly Market Outlook`. Link to the latest Market Outlook once published. |
| Tile 7 – Property Management | Title, teaser "Assets managed for performance and tenant satisfaction.", icon | Explore our services | |
| Popup 7 – copy | Paragraph "We manage commercial, industrial and mixed-use properties on behalf of owners…" + 3 key offerings | Popup 7 | |
| Popup 7 – stats | 45 – Commercial properties managed in Singapore; 9M sq ft – Net lettable area under management | Popup 7 | **Sample.** Don't name managed properties without the owner's consent. |
| Popup 7 – contact + link | Firstname Lastname, Senior Director, Property Management; Learn more → https://www.cbre.com.sg/services | Popup 7 | As popup 1. |
| Tile 8 – ESG & Sustainability Consulting | Title, teaser "Lower carbon, stronger asset value.", icon | Explore our services | |
| Popup 8 – copy | Paragraph "We help owners and occupiers set credible sustainability targets…" + 3 key offerings | Popup 8 | Avoid unqualified environmental claims; ESG wording needs Compliance review. |
| Popup 8 – stats | 60+ – Green certifications and audits supported; 18% – Average energy savings identified in building audits | Popup 8 | **Sample.** |
| Popup 8 – contact + link | Firstname Lastname, Director, ESG & Sustainability Consulting; Learn more → https://www.cbre.com.sg/services | Popup 8 | As popup 1. |
| Popup sample-figures line | Sample figures – replace before publishing. | All popups | Delete from every popup once all stats are verified. |
| Who we serve intro | Whatever your role in real estate, we tailor our team to your goals. | Who we serve | |
| Tab – Occupiers | Heading "Space that works as hard as your people", paragraph, 3 bullets, relevant services, button "Talk to an occupier specialist" | Who we serve | Image slot W1. Relevant services must match tile names exactly. |
| Tab – Investors | Heading "Insight-led decisions across the investment cycle", paragraph, 3 bullets, relevant services, button "Talk to our investment team" | Who we serve | Image slot W2. |
| Tab – Developers | Heading "From site to stabilised asset", paragraph, 3 bullets, relevant services, button "Discuss your project" | Who we serve | Image slot W3. |
| Tab button URLs | https://www.cbre.com.sg/contact-us | Who we serve | **Placeholder.** Point each one to the relevant team's enquiry form if available. |
| Why CBRE intro | Global reach, local expertise. | Why CBRE | |
| Counter 1 | 100+ – Countries and territories | Why CBRE | **Sample.** Use the current CBRE corporate fact sheet / approved boilerplate. |
| Counter 2 | 140,000+ – Employees worldwide | Why CBRE | **Sample.** As above. |
| Counter 3 | 1,200+ – Professionals in Singapore | Why CBRE | **Sample.** Confirm with CBRE Singapore HR/Marketing. |
| Counter 4 | 8 – Integrated service lines in Singapore | Why CBRE | Must equal the number of tiles. |
| Counters sample line | Sample figures – replace with the latest approved CBRE figures. | Why CBRE | Replace with a source line, e.g. "Source: CBRE, as at <date>", once real. |
| CTA heading + body | Not sure where to start? / Tell us what you're planning and we'll connect you with the right specialist… | Contact CTA | |
| Contact URL | https://www.cbre.com.sg/contact-us | Hero, tabs, CTA, Nav | **Placeholder.** Replace in every location (up to 6). |
| Research URL | https://www.cbre.com.sg/insights | Popup 6, CTA | **Placeholder.** |
| Service "Learn more" URL | https://www.cbre.com.sg/services | Popups 1–5, 7–8 | **Placeholder.** Replace with each service line's own page. Check that every URL loads. |
| Disclaimer | [Disclaimer placeholder — insert the approved CBRE Singapore disclaimer…] | Footer | **Mandatory** (the page covers investment, valuation and transaction services). Get approved wording from Legal/Compliance. Never publish with the placeholder. |
| Agency licence line | [Agency licence number placeholder – include if required by Compliance.] | Footer | Ask Compliance whether the estate agency licence number must be shown. Delete the line if not required. |
| Sample-content footer note | Sample content for template purposes only — replace before publishing. | Footer | Keep it in the template. **Delete it in the published copy** only after all content is replaced and verified. |

## Sample content

Everything below is fictional sample content for template purposes. All stats, contacts and figures are invented samples and must be replaced with verified, approved information.

### 1. Hero

- **Eyebrow:** CBRE Singapore | Our services
- **Headline (H1):** One partner for every real estate decision
- **Subhead:** From finding space to investing in, valuing, managing and decarbonising it, our Singapore team supports every stage of the property lifecycle.
- **Primary button:** Explore our services → anchor to Explore our services
- **Secondary button:** Talk to us → https://www.cbre.com.sg/contact-us (new tab)

### 2. Intro

- **Heading:** Integrated expertise, one point of contact
- **Paragraph:** Our specialists work as one team across eight service lines, so you get joined-up advice whether you are leasing a single floor, investing in a portfolio or decarbonising a building. Tell us what you are planning and we will bring the right experts to the table.

### 3. Explore our services

- **Heading:** Explore our services
- **Instruction:** Select a service to see what we do, sample results and who to talk to.
- **Tile affordance:** small "Explore →" label on every tile; the whole tile is clickable.

| # | Tile title | Teaser | Suggested icon |
|---|---|---|---|
| 1 | Advisory & Transaction Services | Find, secure and optimise the right space. | handshake or key |
| 2 | Project Management | Workplaces delivered on time and on budget. | clipboard or hard hat |
| 3 | Facilities & Workplace Management | Buildings and workplaces that run smoothly every day. | gear or building with spanner |
| 4 | Capital Markets | Buy, sell and finance property with confidence. | upward chart or coins |
| 5 | Valuation & Advisory | Independent values you can rely on. | calculator or balance scale |
| 6 | Research | Data and insight behind every decision. | magnifier over bar chart |
| 7 | Property Management | Assets managed for performance and tenant satisfaction. | building with key or checklist |
| 8 | ESG & Sustainability Consulting | Lower carbon, stronger asset value. | leaf |

Use the icons available in Ceros; don't license icons from Stock.

**Shared popup layout (all eight):** title → paragraph → "Key offerings" (three bullets) → two stats (number + label) → "Sample figures – replace before publishing." → "Your contact" (photo, name, title, email as `mailto:`, phone) → "Learn more" button (new tab) → close button.

**Popup 1 – Advisory & Transaction Services**

- **Paragraph:** Whether you are expanding, consolidating or renewing, our advisory and transaction specialists help occupiers and landlords make better leasing and sales decisions. We combine live market data with deep relationships across Singapore's office, industrial and retail markets to secure the right terms on the right timeline.
- **Key offerings:** Tenant representation for relocations, expansions and renewals · Landlord leasing and agency for office, industrial and retail assets · Lease restructuring and portfolio strategy
- **Stats:** **2.1M sq ft** – Space leased and sold for clients in Singapore, 2025 · **310** – Transactions completed, 2025
- **Your contact:** Firstname Lastname, Executive Director, Advisory & Transaction Services · firstname.lastname@cbre.com · +65 6XXX XXXX
- **Learn more:** https://www.cbre.com.sg/services (new tab)

**Popup 2 – Project Management**

- **Paragraph:** From the first space brief to the last box unpacked, our project managers plan, design and deliver fit-outs, refurbishments and relocations. We manage cost, programme, risk and authority approvals so you can stay focused on running your business.
- **Key offerings:** Workplace strategy and change management · Fit-out and design-and-build delivery · Cost management and relocation management
- **Stats:** **1.4M sq ft** – Fit-out and refurbishment delivered in Singapore, 2025 · **96%** – Projects delivered on or ahead of schedule
- **Your contact:** Firstname Lastname, Managing Director, Project Management · firstname.lastname@cbre.com · +65 6XXX XXXX
- **Learn more:** https://www.cbre.com.sg/services (new tab)

**Popup 3 – Facilities & Workplace Management**

- **Paragraph:** We keep buildings and workplaces safe, efficient and inspiring for the people who use them. Our teams combine on-site service delivery with data from smart building systems to reduce downtime, control costs and improve the employee experience across single sites and multi-site portfolios.
- **Key offerings:** Integrated facilities management (hard and soft services) · Workplace experience and hospitality services · Energy, engineering and smart-building operations
- **Stats:** **18M sq ft** – Space under facilities management in Singapore · **98.5%** – Planned maintenance completed on schedule
- **Your contact:** Firstname Lastname, Senior Director, Facilities & Workplace Management · firstname.lastname@cbre.com · +65 6XXX XXXX
- **Learn more:** https://www.cbre.com.sg/services (new tab)

**Popup 4 – Capital Markets**

- **Paragraph:** Our capital markets team advises investors, owners and developers on acquisitions, disposals and financing across every major property sector. With access to local, regional and global capital, we help clients price assets accurately, reach the right buyers and close transactions with certainty.
- **Key offerings:** Investment sales and acquisitions · Debt and structured finance advisory · Collective (en bloc) sales and land advisory
- **Stats:** **S$4.8B** – Investment sales transacted in Singapore, 2025 · **35** – Investment transactions closed, 2025
- **Your contact:** Firstname Lastname, Executive Director, Capital Markets · firstname.lastname@cbre.com · +65 6XXX XXXX
- **Learn more:** https://www.cbre.com.sg/services (new tab)

**Popup 5 – Valuation & Advisory**

- **Paragraph:** Our qualified valuers provide independent, well-supported opinions of value for financial reporting, lending, acquisitions, REIT reporting and statutory purposes. We cover office, industrial, retail, hospitality and residential assets, backed by our transaction and research data.
- **Key offerings:** Valuations for financial reporting, lending and REITs · Feasibility and highest-and-best-use studies · Statutory, insurance and dispute valuations
- **Stats:** **S$85B** – Value of assets valued in Singapore, 2025 · **2,000+** – Valuation and advisory reports issued a year
- **Your contact:** Firstname Lastname, Executive Director, Valuation & Advisory · firstname.lastname@cbre.com · +65 6XXX XXXX
- **Learn more:** https://www.cbre.com.sg/services (new tab)

**Popup 6 – Research**

- **Paragraph:** Our research team tracks Singapore's office, industrial and logistics, retail and residential markets every quarter. Our analysts turn proprietary data into clear forecasts and insights that help clients time decisions, benchmark performance and understand what is driving demand.
- **Key offerings:** Quarterly market reports and forecasts · Bespoke market studies and demand analysis · Briefings and data for occupiers, investors and media
- **Stats:** **120+** – Reports, updates and briefings published a year · **4** – Core sectors tracked every quarter
- **Your contact:** Firstname Lastname, Head of Research, Singapore & Southeast Asia · firstname.lastname@cbre.com · +65 6XXX XXXX
- **Learn more:** https://www.cbre.com.sg/insights (new tab)

**Popup 7 – Property Management**

- **Paragraph:** We manage commercial, industrial and mixed-use properties on behalf of owners, protecting asset value while keeping tenants satisfied. Our property managers handle everything from budgets and service charges to building operations, compliance and tenant relations.
- **Key offerings:** Property and lease administration · Building operations, maintenance and compliance · Tenant engagement and financial reporting
- **Stats:** **45** – Commercial properties managed in Singapore · **9M sq ft** – Net lettable area under management
- **Your contact:** Firstname Lastname, Senior Director, Property Management · firstname.lastname@cbre.com · +65 6XXX XXXX
- **Learn more:** https://www.cbre.com.sg/services (new tab)

**Popup 8 – ESG & Sustainability Consulting**

- **Paragraph:** We help owners and occupiers set credible sustainability targets and turn them into action. From building audits and green certifications to net-zero roadmaps and ESG reporting, our consultants link sustainability performance to cost, risk and asset value.
- **Key offerings:** Net-zero roadmaps and decarbonisation plans · Green building certification support, including BCA Green Mark · ESG data, reporting and benchmarking
- **Stats:** **60+** – Green certifications and audits supported · **18%** – Average energy savings identified in building audits
- **Your contact:** Firstname Lastname, Director, ESG & Sustainability Consulting · firstname.lastname@cbre.com · +65 6XXX XXXX
- **Learn more:** https://www.cbre.com.sg/services (new tab)

### 4. Who we serve

- **Heading:** Who we serve
- **Intro:** Whatever your role in real estate, we tailor our team to your goals.

**Tab: Occupiers** (open by default; image slot W1)

- **Heading:** Space that works as hard as your people
- **Paragraph:** Corporates, SMEs and public-sector organisations work with us to plan, find, fit out and run their workplaces in Singapore and across Asia Pacific.
- **How we help:**
  - Plan: workplace strategy and portfolio planning
  - Find: market search, negotiation and lease renewals
  - Run: fit-out, facilities management and workplace services
- **Relevant services:** Advisory & Transaction Services · Project Management · Facilities & Workplace Management · ESG & Sustainability Consulting
- **Button:** Talk to an occupier specialist → https://www.cbre.com.sg/contact-us (new tab)

**Tab: Investors** (image slot W2)

- **Heading:** Insight-led decisions across the investment cycle
- **Paragraph:** REITs, funds, insurers, family offices and private investors rely on us to source deals, value assets, manage properties and exit at the right time.
- **How we help:**
  - Source and execute acquisitions and disposals
  - Independent valuations and market research
  - Property management that protects income and asset value
- **Relevant services:** Capital Markets · Valuation & Advisory · Property Management · Research
- **Button:** Talk to our investment team → https://www.cbre.com.sg/contact-us (new tab)

**Tab: Developers** (image slot W3)

- **Heading:** From site to stabilised asset
- **Paragraph:** Developers and landlords work with us from land acquisition and feasibility through construction to leasing, sales and long-term management.
- **How we help:**
  - Site sourcing, feasibility and highest-and-best-use studies
  - Project and cost management through construction
  - Pre-leasing, marketing and sales strategy
- **Relevant services:** Capital Markets · Valuation & Advisory · Project Management · Advisory & Transaction Services
- **Button:** Discuss your project → https://www.cbre.com.sg/contact-us (new tab)

"Relevant services" names open the matching popup if possible; otherwise they link to the Explore our services section.

### 5. Why CBRE

- **Heading:** Why CBRE
- **Intro:** Global reach, local expertise.

| Counter | End value | Suffix | Label |
|---|---|---|---|
| 1 | 100 | + | Countries and territories |
| 2 | 140,000 | + | Employees worldwide |
| 3 | 1,200 | + | Professionals in Singapore |
| 4 | 8 | | Integrated service lines in Singapore |

- **Sample line (visible):** Sample figures – replace with the latest approved CBRE figures.

### 6. Contact call to action

- **Heading:** Not sure where to start?
- **Body:** Tell us what you're planning and we'll connect you with the right specialist in our Singapore team.
- **Primary button:** Contact CBRE Singapore → https://www.cbre.com.sg/contact-us (new tab)
- **Secondary button:** Read our research → https://www.cbre.com.sg/insights (new tab)

### 7. Footer

1. **Disclaimer (placeholder, mandatory):** "[Disclaimer placeholder — insert the approved CBRE Singapore disclaimer before publishing.] Sample wording: This content is provided for general information only and does not constitute investment, financial, valuation, legal or tax advice, or an offer or solicitation to buy, sell or lease any property. Statistics are indicative and may not reflect current figures. Readers should seek independent professional advice before acting on any information herein."
2. **Agency licence line:** [Agency licence number placeholder – include if required by Compliance.]
3. **Sample note (visible):** Sample content for template purposes only — replace before publishing.

### Optional navigation labels

Services · Who we serve · Why CBRE · [Contact us]

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** Whether to license images (this spends Adobe Stock credits on the CBRE account) or to use watermarked comp/preview images for the template is still to be decided by the user. **The executing session must ask before licensing any image.** Until then, use comps or the Ceros placeholders.

Search at https://stock.adobe.com/sg. Selection rules for this template (it covers investment, valuation and property services, so the property rules apply):

- Singapore/Asia context; diverse people (Chinese, Malay, Indian and other backgrounds; mixed genders and ages).
- **No identifiable real buildings, towers or landmarks** that could be mistaken for a CBRE-managed, valued or marketed asset. Blurred or generic skylines only.
- No visible third-party brands, logos, signage or legible screens.
- Exclude assets marked "Editorial use only".
- If CBRE policy disallows AI-generated stock, turn on the "Exclude generative AI" filter.

Tile icons come from Ceros's icon set, not Stock.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| H1 – Hero | Diverse professionals meeting in a bright, modern office, generic blurred city view behind; space for text | `diverse asian business team meeting modern office city view` (alt: `business professionals discussion bright office asia wide`) | Landscape 16:9, ≥ 2400 px wide | Professionals in discussion in a bright, modern office |
| W1 – Occupiers tab | Employees working together in a flexible, modern workplace | `diverse colleagues hybrid workplace modern office asia` | Landscape 3:2, ≥ 1600 px wide | Colleagues working together in a flexible, modern workplace |
| W2 – Investors tab | Small investment team reviewing printed charts or documents in a meeting room | `asian investment team reviewing financial documents meeting room` | Landscape 3:2, ≥ 1600 px wide | Investment team reviewing financial documents in a meeting room |
| W3 – Developers tab | Construction site with tower cranes and a generic high-rise under construction; workers in safety gear | `high rise construction site tower cranes workers safety asia` | Landscape 3:2, ≥ 1600 px wide | High-rise building under construction with tower cranes |
| C1 – Contact, Advisory & Transaction Services | **Placeholder only.** Professional headshot, neutral background | `asian businessman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Executive Director, Advisory & Transaction Services |
| C2 – Contact, Project Management | **Placeholder only.** Professional headshot | `malay businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Managing Director, Project Management |
| C3 – Contact, Facilities & Workplace Management | **Placeholder only.** Professional headshot | `indian businessman professional headshot studio neutral` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Senior Director, Facilities & Workplace Management |
| C4 – Contact, Capital Markets | **Placeholder only.** Professional headshot | `asian businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Executive Director, Capital Markets |
| C5 – Contact, Valuation & Advisory | **Placeholder only.** Professional headshot | `mature asian businessman headshot grey background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Executive Director, Valuation & Advisory |
| C6 – Contact, Research | **Placeholder only.** Professional headshot | `indian businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Head of Research, Singapore & Southeast Asia |
| C7 – Contact, Property Management | **Placeholder only.** Professional headshot | `malay businessman professional headshot studio neutral` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Senior Director, Property Management |
| C8 – Contact, ESG & Sustainability Consulting | **Placeholder only.** Professional headshot | `young asian professional woman headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Director, ESG & Sustainability Consulting |

**Contact photos:** never publish stock faces next to real staff names. In any live copy, C1–C8 must be the named person's own approved headshot. For the template, keep a neutral avatar placeholder rather than licensing eight headshots; the queries above are only for comps if the user wants realistic previews.

## QA checklist

- [ ] Brand kit is still **CBRE Test** and **unmodified**. No AI offer to change the brand kit was accepted, and no new brand kit was created.
- [ ] No colour, font or logo overrides were added to any element. If there was drift, follow-up 12 was applied.
- [ ] The experience is in the **CBRE Singapore** folder.
- [ ] The experience is named exactly `[Template] Services Explorer`.
- [ ] Tone and structure are consistent with the New Joiner Onboarding reference experience.
- [ ] All seven sections are present in order (eight with the optional navigation).
- [ ] Hero "Explore our services" scrolls to the service grid.
- [ ] All eight tiles show the right title, teaser and icon in the right order, and the whole tile is clickable.
- [ ] Each of the eight tiles opens **its own** popup (not another service's) with the paragraph, three key offerings, two stats, the "Sample figures" line, the contact and the "Learn more" button. If the fallback was used, every accordion item or anchor works.
- [ ] Every popup closes (close button, outside click, Esc if supported); the page doesn't jump when a popup opens or closes.
- [ ] Popups fit the mobile screen, scroll inside, and keep the close button visible.
- [ ] Contact emails open `mailto:` links.
- [ ] Who we serve: three tabs switch correctly, Occupiers is open by default, and each has an image, heading, paragraph, three bullets, relevant services and a working button.
- [ ] Why CBRE counters animate (or fade in) once and end on exactly 100+, 140,000+, 1,200+ and 8; the "Sample figures" line is visible.
- [ ] All interactions were tested in preview on **desktop and mobile**: tiles and popups, tabs, relevant-service links, counters, anchor links, buttons, and nav if added.
- [ ] Mobile: tiles in one or two columns; no overlapping or cut-off text and no page-level horizontal scroll.
- [ ] The **disclaimer placeholder** (with investment/valuation wording) and the agency licence placeholder are present and visible in the footer.
- [ ] The **"Sample content for template purposes only — replace before publishing."** footer note is visible on desktop and mobile.
- [ ] CTAs and links point to placeholders: Contact → https://www.cbre.com.sg/contact-us; Learn more → https://www.cbre.com.sg/services (Research → https://www.cbre.com.sg/insights); Read our research → https://www.cbre.com.sg/insights. External links open in a new tab.
- [ ] Image placeholders have been replaced with the agreed images (licensed or comp, **per the user's decision**). No stock image was licensed without asking.
- [ ] No identifiable real building or landmark, no third-party logos or brands, and no "Editorial use only" assets.
- [ ] Alt text is set on every image, including popup contact photos, matching the image slots table.
- [ ] No real client names, real people, or real property names/addresses appear anywhere.
- [ ] Heading structure is one H1 (hero headline) and an H2 per section. Tile, button and link labels are descriptive.
