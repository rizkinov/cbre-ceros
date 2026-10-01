# [Template] Client Case Study

- **Slug:** `client-case-study`
- **Ceros starting point:** Free prompt
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline.
- **Experience name:** `[Template] Client Case Study`
- **Primary audience:** Prospective clients weighing up CBRE for a similar mandate: corporate real estate, workplace, HR, finance and procurement leaders, plus pitch and bid teams who send it as a follow-up. Each CBRE Singapore business line (with Marketing) duplicates it for every approved client success story.
- **Est. build time:** 3.5–4.5 hours (about 25 min generation and refinement, 1.5 h tabs/counters/comparison/timeline checks, 1 h images and alt text, 45 min QA)

## Purpose

This is a reusable, scrolling client success story that replaces a static case-study PDF. It leads with the headline result, summarises the project at a glance, tells the Challenge / Approach / Results story in tabs, and shows the results with animated counters, a before/after comparison and a phase-by-phase timeline, a client quote, the services used, related stories and a contact CTA. Business-line and Marketing teams duplicate it for each approved case study and swap in the project's verified facts, images and quote. The sample project (a workplace consolidation and fit-out for an anonymised "global technology company" in Singapore) is entirely fictional.

## Ceros AI prompt

Before you paste:

1. Open the existing **New Joiner Onboarding** experience in the CBRE Singapore folder. Note its tone, section rhythm and how it uses components, so this build feels like part of the same family. If the generated result differs noticeably, adjust it with the follow-up prompts. Do not add any styling instructions.
2. In the "What will you build today?" box, set **Brand Kit = CBRE Test** and **Folder = CBRE Singapore**.
3. Paste the block below verbatim and generate.
4. If the AI offers to update, extend or modify the brand kit at any point, decline. Reply: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`
5. Rename the experience to `[Template] Client Case Study`.

```text
Create a responsive single-page client case study for a real estate services firm. Use the selected brand kit's styles as-is. Tone: confident, factual, client-first. Keep the client anonymous as "a global technology company". Use labelled image placeholders only (no recognisable real buildings or landmarks).

Sections, in order:

1. Hero: office image placeholder; eyebrow "Client case study | Workplace consolidation"; client line "A global technology company | Singapore"; headline "Three offices into one: 22% less space, S$2.4M saved a year"; subhead "How CBRE brought 1,150 people into one hybrid-ready headquarters, with the fit-out delivered in 14 weeks."; buttons "See the results" (scrolls to section 4) and "Contact our team" (https://www.cbre.com.sg/contact-us).

2. At a glance: five-item strip (label above value): Sector – Technology | Location – Singapore CBD | Size – 96,700 sq ft (from 124,000 sq ft) | Services – Tenant representation, project management, ESG, facilities management | Timeline – 11 months to move-in.

3. The story: tabs "Challenge", "Approach", "Results"; each with a heading, paragraph, three bullets and an image placeholder. I will send the copy next.

4. Results in numbers: four counters that count up on scroll: 22% less office space | S$2.4M annual occupancy cost savings | 14 weeks fit-out | 89% staff satisfaction; plus a methodology note.

5. Before and after: image comparison slider with a draggable divider, labels and captions. Fallback: two tabs "Before"/"After".

6. Project timeline: six steps (dates, title, one line): Discover; Search & negotiate; Design & approvals; Build; Move; Settle & measure.

7. Testimonial: large quote attributed to "Firstname Lastname, Head of Real Estate & Workplace, Asia Pacific, a global technology company". No photo.

8. Services we provided: four cards (title, one line, "Learn more" link to https://www.cbre.com.sg/services).

9. More client stories: three cards (image, descriptor, title, line, "Read case study" link to https://www.cbre.com.sg/insights).

10. Contact CTA: heading "Planning your next workplace move?", one line, button "Contact our team" (https://www.cbre.com.sg/contact-us). External links open in a new tab.

11. Footer: "[Disclaimer placeholder: insert the approved CBRE Singapore disclaimer.]" and the visible note "Sample content for template purposes only — replace before publishing."

On mobile, use one column and a vertical timeline.
```

## Expected structure

After generation, check each section against this list. Use the follow-up prompts to fix anything missing.

1. **Hero**: full-width image placeholder, eyebrow, client line, H1 headline (the headline result) and subhead. "See the results" scrolls (anchor link) to section 4; "Contact our team" links to https://www.cbre.com.sg/contact-us in a new tab.
2. **At a glance**: a five-item strip (5 across on desktop; 2 columns or one column on mobile). Each item has a small label above a value. Items are static (optional entrance animation).
3. **The story**: a tabs component with three tabs: Challenge, Approach, Results. Clicking a tab switches the panel; Challenge is open by default. Each panel has a heading, a paragraph, three bullets and an image placeholder. **Fallback:** three stacked scroll sections with the same headings, or an accordion with Challenge open.
4. **Results in numbers**: four animated number counters that count up once when scrolled into view (fallback: static numbers with a fade-in), each with a label, plus a small methodology note underneath.
5. **Before and after**: an image comparison slider with a draggable divider and "Before"/"After" labels, a one-line instruction and a caption for each state. **Fallback:** two tabs ("Before" / "After") toggling between the two images and captions. **Second fallback:** two images side by side (stacked on mobile), each with its label and caption.
6. **Project timeline**: six numbered steps in order, each with a date range, title and one line. Horizontal on desktop, vertical on mobile. **Fallback:** a carousel with one step per slide (arrows, dots, swipe), or an accordion with one item per phase.
7. **Testimonial**: a large pull quote with an attribution line (placeholder name, title, client descriptor) and no photo.
8. **Services we provided**: four cards (title, one line, "Learn more" link out in a new tab).
9. **More client stories**: three cards (image, client descriptor, title, one line, "Read case study" link out in a new tab). **Fallback on mobile:** a swipeable carousel instead of a stack.
10. **Contact CTA band**: heading, one line of copy, and two buttons ("Contact our team", plus "Explore our services" added by follow-up 8), both in a new tab.
11. **Footer**: disclaimer placeholder, image disclaimer (added by follow-up 8 if missing) and the visible sample-content note.
12. *(Optional, from follow-up 9)* **Navigation**: a top or sticky bar with anchor links, or "Back to top" links.

## Follow-up refinement prompts

Paste these one at a time in the AI chat after the first generation. Skip any that the first pass already handled. None of them contain styling requests; if the AI offers brand kit changes, decline.

**1. Story tabs copy**

```text
Set "The story" section to this exact copy. Add the intro line "From three ageing offices to one workplace built around how people really work." under the heading. Keep Challenge open by default.

Challenge
Heading: "Three offices, one ageing footprint"
Paragraph: "The company's 1,150 Singapore employees were split across three offices in the CBD and city fringe, with leases expiring between September 2026 and March 2027. Hybrid working had pushed average desk utilisation down to 48%, yet teams struggled to find meeting space and cross-team collaboration was suffering."
Bullets:
- Three leases expiring within seven months of each other
- 48% average desk utilisation, but meeting rooms over 90% booked at peak times
- A global commitment to cut occupancy costs and operational carbon

Approach
Heading: "One integrated team, one plan"
Paragraph: "CBRE brought workplace strategy, tenant representation, project management, sustainability and facilities specialists together under a single account lead. A six-week utilisation study shaped the brief, the search and the design, so every decision traced back to how people actually worked."
Bullets:
- Occupancy sensors and a staff survey (780 responses) set a 0.7 desk-to-employee ratio
- A search of 14 options, ending in a six-year lease with a four-month rent-free fit-out period
- Design-and-build fit-out across four floors, plus reinstatement of the three vacated offices

Results
Heading: "A headquarters people want to come to"
Paragraph: "The company moved into its new 96,700 sq ft headquarters in August 2026, ahead of its first lease expiry. The new workplace offers 112 collaboration spaces, up from 38, and average desk utilisation has risen to 71%."
Bullets:
- 22% less space and S$2.4M lower annual occupancy costs
- Fit-out delivered in 14 weeks, on time and 3% under budget
- 68% of existing furniture reused, donated or recycled

If tabs are not available, use three stacked sections with these headings.
```

**2. Results counters and methodology note**

```text
In "Results in numbers", add the intro line "The outcomes, measured against the client's original brief." under the heading. Set the four counters to exactly:
1. 22 with suffix "%" – "Less office space (124,000 to 96,700 sq ft)"
2. 2.4 with prefix "S$" and suffix "M" – "Annual occupancy cost savings"
3. 14 with suffix " weeks" – "Fit-out delivery, on time and 3% under budget"
4. 89 with suffix "%" – "Of employees rate the new workplace good or excellent"
Each counter animates once from zero to its final value when it scrolls into view, keeping the decimal in 2.4. If animated counters are not available, show static numbers with a simple fade-in.

Under the counters add this small note: "Savings compare annual gross occupancy costs (rent, service charge, utilities and facilities services) of the three previous offices with the new headquarters' projected first full year. Satisfaction from a post-occupancy survey, September 2026 (612 responses). Sample figures."
```

**3. Before and after comparison**

```text
In "Before and after", add the heading "The workplace, transformed" and the instruction line "Drag the divider to compare." Use two image placeholders of the same size and framing. Labels and captions:
Before – "Before: assigned desks in ageing offices, with too few places to meet."
After – "After: an activity-based floor with 12 types of work setting, from focus booths to project rooms."
The divider starts in the middle and works with mouse drag and touch drag on mobile.

If an image comparison slider is not available, use two tabs "Before" and "After" that switch between the two images and their captions, with "Before" selected first, and change the instruction line to "Select Before or After to compare." If tabs are not possible either, place the two images side by side (stacked on mobile), each with its label and caption.
```

**4. Project timeline**

```text
Set "Project timeline" to the heading "From brief to move-in in 11 months" and these six steps, numbered, in this order (dates | title | line):

1. Oct – Nov 2025 | Discover | "A six-week utilisation study and staff survey defined a 0.7 desk ratio and the space brief."
2. Dec 2025 – Feb 2026 | Search & negotiate | "14 options reviewed, four shortlisted, and a six-year lease signed in February 2026."
3. Mar – Apr 2026 | Design & approvals | "Design-and-build tender, detailed design and authority submissions completed in eight weeks."
4. May – Aug 2026 | Build | "A 14-week fit-out across four floors, completed on 7 August 2026, on time and 3% under budget."
5. Aug 2026 | Move | "1,150 people moved over three weekends with zero business days lost."
6. Sep 2026 | Settle & measure | "A post-occupancy survey found 89% of employees rate the new workplace good or excellent."

Show the steps as a horizontal timeline on desktop and a vertical timeline on mobile, with an entrance animation as each step scrolls into view if supported. If a timeline layout is not possible, use a carousel with one step per slide (arrows, dots, swipe, no autoplay), or an accordion with one item per step.
```

**5. Testimonial**

```text
Set the testimonial to this quote: "CBRE gave us one team, one plan and one point of accountability. We brought 1,150 people together in a workplace they genuinely want to come to, without losing a single business day."
Attribution, on two lines: "Firstname Lastname" and "Head of Real Estate & Workplace, Asia Pacific, a global technology company". Do not add a photo or a company name. Add a decorative quotation mark icon if the layout supports it.
```

**6. Services we provided**

```text
Set "Services we provided" to the intro line "One integrated team across four service lines." and these four cards, in order (title – line). Each card has a "Learn more" link to https://www.cbre.com.sg/services, opening in a new tab:

1. Advisory & Transaction Services – "Tenant representation: market search, financial analysis and lease negotiation."
2. Project Management – "Workplace strategy, design-and-build fit-out, cost control and move management."
3. ESG & Sustainability Consulting – "Building sustainability due diligence and a circular plan for furniture and fit-out materials."
4. Facilities & Workplace Management – "Day-one facilities set-up and ongoing workplace services for the new headquarters."

Give each card a simple, relevant icon.
```

**7. More client stories**

```text
Set "More client stories" to these three cards, in order (client descriptor | title | line). Each has an image placeholder and a "Read case study" link to https://www.cbre.com.sg/insights, opening in a new tab:

1. A regional bank | "Restacking a CBD headquarters to free up 30,000 sq ft" | "Workplace strategy and a phased fit-out across eight floors while 900 staff stayed in place."
2. A global logistics provider | "A 420,000 sq ft distribution hub secured in 10 weeks" | "An off-market search and negotiation for a ramp-up logistics facility in western Singapore."
3. A life sciences company | "Five sites, one facilities partner, 12% lower operating costs" | "Integrated facilities management across manufacturing, laboratory and office sites."

On mobile, stack the cards or show them as a swipeable carousel.
```

**8. Contact CTA and footer**

```text
Update the contact call to action body copy to: "Whether you're consolidating, expanding or rethinking how your space supports hybrid work, our Singapore team can help you plan the next step." Buttons, both opening in a new tab: "Contact our team" → https://www.cbre.com.sg/contact-us and "Explore our services" → https://www.cbre.com.sg/services. Also link the hero "Contact our team" button to https://www.cbre.com.sg/contact-us.

Set the footer to, in this order:
1. "[Disclaimer placeholder — insert the approved CBRE Singapore disclaimer before publishing.] Sample wording: This case study is provided for general information only. Results are specific to this client and project, are approximate and are not a guarantee of future outcomes. Cost figures do not constitute financial or investment advice. The client is not named for confidentiality reasons."
2. "Images are for illustration only."
3. "Sample content for template purposes only — replace before publishing."
Make sure all three lines are visible on desktop and mobile.
```

**9. Navigation (optional)**

```text
Add a slim navigation bar at the top with anchor links "Overview", "The story", "Results", "Before & after", "Timeline", "Services" and a "Contact our team" button linking to https://www.cbre.com.sg/contact-us in a new tab. Keep it visible while scrolling if that is supported. On mobile, collapse the links into a menu but keep the contact button visible. If a persistent bar is not possible, add a "Back to top" link at the end of sections 3 to 9.
```

**10. Accessibility and mobile pass**

```text
Do an accessibility and mobile pass: use one H1 (the hero headline) and an H2 for each section heading; give every image placeholder descriptive alt text, including both comparison images; give the comparison divider an accessible label such as "Drag to compare before and after"; make sure tabs, the comparison control, timeline navigation and all links work with a keyboard; make button and link text descriptive (no "Click here"); and check that on mobile the at-a-glance strip, counters, timeline and all cards stack cleanly with no overlapping, cut-off text or page-level horizontal scrolling.
```

**11. Reset styling drift (use only if needed)**

```text
Remove any custom styling you applied to individual elements and apply the selected brand kit's default styles consistently to all headings, body text, buttons, tabs, cards and quotes. Do not create, change or update the brand kit itself.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | `[Template] Client Case Study` | Settings | When you duplicate it, rename to e.g. `Case Study – <Client descriptor> <Project type>` and remove `[Template]`. |
| SEO / share title | Case study: Three offices into one for a global technology company – CBRE Singapore | Settings | Set in experience settings if available. |
| SEO / share description | How CBRE consolidated three Singapore offices into one hybrid-ready headquarters: 22% less space and S$2.4M saved a year. | Settings | Keep under about 160 characters. |
| Client approval status | Not applicable (sample) | Internal | **Mandatory before publishing:** written client approval of the story, every figure, the quote and any images. Record the approver and date in the experience notes. |
| Client descriptor | A global technology company | Hero, Testimonial | Anonymised by default. Name the client only with written consent. Make sure the combination of sector, size, headcount and location doesn't make an anonymised client identifiable. |
| Hero eyebrow | Client case study \| Workplace consolidation | Hero | Change the project type, e.g. "Lease renewal", "Investment sale", "Facilities management". |
| Hero client line | A global technology company \| Singapore | Hero | Descriptor \| market. |
| Hero headline (H1) | Three offices into one: 22% less space, S$2.4M saved a year | Hero | Lead with the strongest verified result. The numbers must match the counters. |
| Hero subhead | How CBRE brought 1,150 people into one hybrid-ready headquarters, with the fit-out delivered in 14 weeks. | Hero | One sentence: what CBRE did and the second-best result. |
| Hero image | Diverse team in a bright, modern open-plan office | Hero | Image slot H1. Use the project's own photography when live. |
| Hero buttons | "See the results" → anchor to section 4; "Contact our team" → https://www.cbre.com.sg/contact-us | Hero | Replace the contact URL with the business line's enquiry form or a campaign URL if one exists. |
| At a glance – Sector | Technology | At a glance | |
| At a glance – Location | Singapore CBD | At a glance | Use a district or region, never a building name or address, unless the client approves. |
| At a glance – Size | 96,700 sq ft (from 124,000 sq ft) | At a glance | Use NLA in sq ft. Must match the Results tab and counter 1 label. |
| At a glance – Services | Tenant representation, project management, ESG, facilities management | At a glance | One item per Services we provided card, in the same order (workplace strategy sits under the Project Management card). Must also match the service lines named in the Approach tab. |
| At a glance – Timeline | 11 months to move-in | At a glance | Must match the timeline heading and dates (Oct 2025 – Aug 2026). |
| Story intro | From three ageing offices to one workplace built around how people really work. | The story | |
| Challenge tab | Heading "Three offices, one ageing footprint", paragraph, 3 bullets | The story | Describe the client's situation, not CBRE. Avoid details that identify an anonymised client. |
| Challenge image | Dated office with rows of assigned desks | The story | Image slot T1. |
| Approach tab | Heading "One integrated team, one plan", paragraph, 3 bullets | The story | Name the CBRE service lines involved. Lease terms (length, rent-free) need client approval to publish. |
| Approach image | Workshop with a floor plan on the table | The story | Image slot T2. |
| Results tab | Heading "A headquarters people want to come to", paragraph, 3 bullets | The story | Every figure must match the counters and timeline. |
| Results image | Employees in a collaboration area | The story | Image slot T3. |
| Results intro | The outcomes, measured against the client's original brief. | Results in numbers | |
| Counter 1 | 22 % – Less office space (124,000 to 96,700 sq ft) | Results in numbers | Sample calc: (124,000 − 96,700) ÷ 124,000 = 22.0%. Recalculate from the real areas. |
| Counter 2 | S$2.4M – Annual occupancy cost savings | Results in numbers | Sample calc: before 124,000 sq ft × S$11.50 psf/mth gross × 12 = S$17.1M; after 96,700 × S$12.65 × 12 = S$14.7M; difference ≈ S$2.4M (14%). Use client-approved figures only. |
| Counter 3 | 14 weeks – Fit-out delivery, on time and 3% under budget | Results in numbers | Must match timeline step 4. |
| Counter 4 | 89 % – Of employees rate the new workplace good or excellent | Results in numbers | State the survey date and sample size in the methodology note. |
| Methodology note | Savings compare annual gross occupancy costs… Sample figures. | Results in numbers | **Keep a methodology note for any cost or savings figure.** Remove "Sample figures." only once the data is verified. |
| Comparison heading + instruction | The workplace, transformed / Drag the divider to compare. | Before and after | Change the instruction to "Select Before or After to compare." if the tab fallback is used. |
| Before image + caption | Before: assigned desks in ageing offices, with too few places to meet. | Before and after | Image slot B1. For live case studies, use the project's own "before" photo taken from the same position as the "after" photo. |
| After image + caption | After: an activity-based floor with 12 types of work setting, from focus booths to project rooms. | Before and after | Image slot B2. Same size and framing as B1. |
| Timeline heading | From brief to move-in in 11 months | Project timeline | |
| Timeline step 1 | Oct – Nov 2025 \| Discover \| A six-week utilisation study… | Project timeline | Keep 4–6 steps. Delete or merge steps for shorter projects. |
| Timeline step 2 | Dec 2025 – Feb 2026 \| Search & negotiate \| 14 options reviewed… | Project timeline | |
| Timeline step 3 | Mar – Apr 2026 \| Design & approvals \| Design-and-build tender… | Project timeline | |
| Timeline step 4 | May – Aug 2026 \| Build \| A 14-week fit-out across four floors… | Project timeline | Sample dates: 4 May – 7 August 2026 (14 working weeks). |
| Timeline step 5 | Aug 2026 \| Move \| 1,150 people moved over three weekends… | Project timeline | |
| Timeline step 6 | Sep 2026 \| Settle & measure \| A post-occupancy survey found 89%… | Project timeline | |
| Testimonial quote | "CBRE gave us one team, one plan and one point of accountability…" | Testimonial | **Use only a real, client-approved quote.** Never publish the sample quote. |
| Testimonial attribution | Firstname Lastname, Head of Real Estate & Workplace, Asia Pacific, a global technology company | Testimonial | Name and title only with the person's written consent; otherwise use title and descriptor only. No photo unless the client supplies one. |
| Services intro | One integrated team across four service lines. | Services we provided | Update the number of service lines. |
| Service card 1 | Advisory & Transaction Services – Tenant representation: market search… | Services we provided | Card titles should match the tile names in `[Template] Services Explorer`. |
| Service card 2 | Project Management – Workplace strategy, design-and-build fit-out… | Services we provided | |
| Service card 3 | ESG & Sustainability Consulting – Building sustainability due diligence… | Services we provided | |
| Service card 4 | Facilities & Workplace Management – Day-one facilities set-up… | Services we provided | Delete the card if the service wasn't part of the project. |
| Service "Learn more" URL | https://www.cbre.com.sg/services | Services we provided, CTA | **Placeholder.** Replace with each service's own page, or the published Services Explorer. Check that every URL loads. |
| Related story card 1 | A regional bank \| Restacking a CBD headquarters to free up 30,000 sq ft | More client stories | Link only to published, approved case studies. Image slot R1. |
| Related story card 2 | A global logistics provider \| A 420,000 sq ft distribution hub secured in 10 weeks | More client stories | Image slot R2. |
| Related story card 3 | A life sciences company \| Five sites, one facilities partner, 12% lower operating costs | More client stories | Image slot R3. |
| Related story URLs | https://www.cbre.com.sg/insights | More client stories | **Placeholder.** Replace with each case study's URL. Delete cards rather than linking to unpublished stories. |
| CTA heading + body | Planning your next workplace move? / Whether you're consolidating, expanding or rethinking… | Contact CTA | Match the project type. |
| Contact URL | https://www.cbre.com.sg/contact-us | Hero, CTA, Nav | **Placeholder.** Replace in every location (up to 3). |
| Navigation labels (optional) | Overview · The story · Results · Before & after · Timeline · Services · [Contact our team] | Navigation | Only if follow-up 9 was used. Keep labels in step with the section headings; delete a label if you delete its section. |
| Disclaimer | [Disclaimer placeholder — insert the approved CBRE Singapore disclaimer…] | Footer | **Mandatory** (the story contains cost and savings figures). Get approved wording from Legal/Compliance. Never publish with the placeholder. |
| Image disclaimer | Images are for illustration only. | Footer | Delete it if all images are the project's own photography. |
| Sample-content footer note | Sample content for template purposes only — replace before publishing. | Footer | Keep it in the template. **Delete it in the published copy** only after all content is replaced and verified. |

## Sample content

Everything below is fictional sample content for template purposes. The client, project, quote, people and figures are invented. "CBD" and "city fringe" are generic locations; no building is named.

### 1. Hero

- **Eyebrow:** Client case study | Workplace consolidation
- **Client line:** A global technology company | Singapore
- **Headline (H1):** Three offices into one: 22% less space, S$2.4M saved a year
- **Subhead:** How CBRE brought 1,150 people into one hybrid-ready headquarters, with the fit-out delivered in 14 weeks.
- **Primary button:** See the results → anchor to Results in numbers
- **Secondary button:** Contact our team → https://www.cbre.com.sg/contact-us (new tab)

### 2. At a glance

| Label | Value |
|---|---|
| Sector | Technology |
| Location | Singapore CBD |
| Size | 96,700 sq ft (from 124,000 sq ft) |
| Services | Tenant representation, project management, ESG, facilities management |
| Timeline | 11 months to move-in |

### 3. The story

- **Heading:** The story
- **Intro:** From three ageing offices to one workplace built around how people really work.

**Tab: Challenge** (open by default)

- **Heading:** Three offices, one ageing footprint
- **Paragraph:** The company's 1,150 Singapore employees were split across three offices in the CBD and city fringe, with leases expiring between September 2026 and March 2027. Hybrid working had pushed average desk utilisation down to 48%, yet teams struggled to find meeting space and cross-team collaboration was suffering.
- **Bullets:**
  - Three leases expiring within seven months of each other
  - 48% average desk utilisation, but meeting rooms over 90% booked at peak times
  - A global commitment to cut occupancy costs and operational carbon
- **Image:** slot T1

**Tab: Approach**

- **Heading:** One integrated team, one plan
- **Paragraph:** CBRE brought workplace strategy, tenant representation, project management, sustainability and facilities specialists together under a single account lead. A six-week utilisation study shaped the brief, the search and the design, so every decision traced back to how people actually worked.
- **Bullets:**
  - Occupancy sensors and a staff survey (780 responses) set a 0.7 desk-to-employee ratio
  - A search of 14 options, ending in a six-year lease with a four-month rent-free fit-out period
  - Design-and-build fit-out across four floors, plus reinstatement of the three vacated offices
- **Image:** slot T2

**Tab: Results**

- **Heading:** A headquarters people want to come to
- **Paragraph:** The company moved into its new 96,700 sq ft headquarters in August 2026, ahead of its first lease expiry. The new workplace offers 112 collaboration spaces, up from 38, and average desk utilisation has risen to 71%.
- **Bullets:**
  - 22% less space and S$2.4M lower annual occupancy costs
  - Fit-out delivered in 14 weeks, on time and 3% under budget
  - 68% of existing furniture reused, donated or recycled
- **Image:** slot T3

Internal consistency of the sample: 1,150 employees × 0.7 desk ratio ≈ 805 desks; 96,700 sq ft ÷ 1,150 ≈ 84 sq ft per employee.

### 4. Results in numbers

- **Heading:** Results in numbers
- **Intro:** The outcomes, measured against the client's original brief.

| Counter | End value | Prefix | Suffix | Label |
|---|---|---|---|---|
| 1 | 22 | | % | Less office space (124,000 to 96,700 sq ft) |
| 2 | 2.4 | S$ | M | Annual occupancy cost savings |
| 3 | 14 | | weeks | Fit-out delivery, on time and 3% under budget |
| 4 | 89 | | % | Of employees rate the new workplace good or excellent |

- **Methodology note:** Savings compare annual gross occupancy costs (rent, service charge, utilities and facilities services) of the three previous offices with the new headquarters' projected first full year. Satisfaction from a post-occupancy survey, September 2026 (612 responses). Sample figures.

**Calculation behind the sample figures** (for whoever replaces them):

- Space reduction = (124,000 − 96,700) ÷ 124,000 = 27,300 ÷ 124,000 = **22.0%**
- Annual gross occupancy cost before = 124,000 sq ft × S$11.50 psf/mth × 12 = S$17,112,000 (blended across the three old offices, including the duplicated reception, security and facilities services of running three sites)
- Annual gross occupancy cost after = 96,700 sq ft × S$12.65 psf/mth × 12 = S$14,679,060
- Saving = S$2,432,940 ≈ **S$2.4M a year** (about 14% of the previous cost)

### 5. Before and after

- **Heading:** The workplace, transformed
- **Instruction:** Drag the divider to compare. (Tab fallback: "Select Before or After to compare.")
- **Before label / caption:** Before — Before: assigned desks in ageing offices, with too few places to meet. (slot B1)
- **After label / caption:** After — After: an activity-based floor with 12 types of work setting, from focus booths to project rooms. (slot B2)
- **Default state:** divider in the middle (slider) or "Before" selected (tab fallback).

### 6. Project timeline

- **Heading:** From brief to move-in in 11 months

| Step | Dates | Title | Line |
|---|---|---|---|
| 1 | Oct – Nov 2025 | Discover | A six-week utilisation study and staff survey defined a 0.7 desk ratio and the space brief. |
| 2 | Dec 2025 – Feb 2026 | Search & negotiate | 14 options reviewed, four shortlisted, and a six-year lease signed in February 2026. |
| 3 | Mar – Apr 2026 | Design & approvals | Design-and-build tender, detailed design and authority submissions completed in eight weeks. |
| 4 | May – Aug 2026 | Build | A 14-week fit-out across four floors, completed on 7 August 2026, on time and 3% under budget. |
| 5 | Aug 2026 | Move | 1,150 people moved over three weekends with zero business days lost. |
| 6 | Sep 2026 | Settle & measure | A post-occupancy survey found 89% of employees rate the new workplace good or excellent. |

Sample date detail: fit-out 4 May – 7 August 2026 (14 working weeks); moves on the weekends of 15–16, 22–23 and 29–30 August 2026.

### 7. Testimonial

- **Quote:** "CBRE gave us one team, one plan and one point of accountability. We brought 1,150 people together in a workplace they genuinely want to come to, without losing a single business day."
- **Attribution line 1:** Firstname Lastname
- **Attribution line 2:** Head of Real Estate & Workplace, Asia Pacific, a global technology company
- **Photo:** none

### 8. Services we provided

- **Heading:** Services we provided
- **Intro:** One integrated team across four service lines.

| Card | Title | Line | Link |
|---|---|---|---|
| 1 | Advisory & Transaction Services | Tenant representation: market search, financial analysis and lease negotiation. | Learn more → https://www.cbre.com.sg/services (new tab) |
| 2 | Project Management | Workplace strategy, design-and-build fit-out, cost control and move management. | Learn more → https://www.cbre.com.sg/services (new tab) |
| 3 | ESG & Sustainability Consulting | Building sustainability due diligence and a circular plan for furniture and fit-out materials. | Learn more → https://www.cbre.com.sg/services (new tab) |
| 4 | Facilities & Workplace Management | Day-one facilities set-up and ongoing workplace services for the new headquarters. | Learn more → https://www.cbre.com.sg/services (new tab) |

Suggested icons: handshake or key · clipboard or hard hat · leaf · gear or building with spanner. Use the icons available in Ceros; don't license icons from Stock.

### 9. More client stories

- **Heading:** More client stories

| Card | Image slot | Client descriptor | Title | Line | Link |
|---|---|---|---|---|---|
| 1 | R1 | A regional bank | Restacking a CBD headquarters to free up 30,000 sq ft | Workplace strategy and a phased fit-out across eight floors while 900 staff stayed in place. | Read case study → https://www.cbre.com.sg/insights (new tab) |
| 2 | R2 | A global logistics provider | A 420,000 sq ft distribution hub secured in 10 weeks | An off-market search and negotiation for a ramp-up logistics facility in western Singapore. | Read case study → https://www.cbre.com.sg/insights (new tab) |
| 3 | R3 | A life sciences company | Five sites, one facilities partner, 12% lower operating costs | Integrated facilities management across manufacturing, laboratory and office sites. | Read case study → https://www.cbre.com.sg/insights (new tab) |

### 10. Contact call to action

- **Heading:** Planning your next workplace move?
- **Body:** Whether you're consolidating, expanding or rethinking how your space supports hybrid work, our Singapore team can help you plan the next step.
- **Primary button:** Contact our team → https://www.cbre.com.sg/contact-us (new tab)
- **Secondary button:** Explore our services → https://www.cbre.com.sg/services (new tab)

### 11. Footer

1. **Disclaimer (placeholder, mandatory):** "[Disclaimer placeholder — insert the approved CBRE Singapore disclaimer before publishing.] Sample wording: This case study is provided for general information only. Results are specific to this client and project, are approximate and are not a guarantee of future outcomes. Cost figures do not constitute financial or investment advice. The client is not named for confidentiality reasons."
2. **Image disclaimer:** Images are for illustration only.
3. **Sample note (visible):** Sample content for template purposes only — replace before publishing.

### Optional navigation labels

Overview · The story · Results · Before & after · Timeline · Services · [Contact our team]

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** Whether to license images (this spends Adobe Stock credits on the CBRE account) or to use watermarked comp/preview images for the template is still to be decided by the user. **The executing session must ask before licensing any image.** Until then, use comps or the Ceros placeholders.

Search at https://stock.adobe.com/sg. Selection rules for this template:

- Singapore/Asia context; diverse people (Chinese, Malay, Indian and other backgrounds; mixed genders and ages).
- No visible third-party brands, logos, signage or legible screens.
- No identifiable real buildings, towers or landmarks, and no skyline that could be read as the client's actual building.
- Exclude assets marked "Editorial use only".
- If CBRE policy disallows AI-generated stock, turn on the "Exclude generative AI" filter.
- B1 and B2 should look like the same kind of space (similar angle, height and light) so the comparison reads well.

To save credits, T1 can reuse B1 and T3 can reuse B2; the page then shows each image twice, which is acceptable for the template.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| H1 – Hero | Diverse team working together in a bright, modern open-plan office with daylight; space for text | `diverse asian team modern open plan office collaboration wide` (alt: `singapore office workers hybrid workplace daylight`) | Landscape 16:9, ≥ 2400 px wide | Colleagues collaborating in a bright, modern open-plan office |
| T1 – Challenge tab | Dated office with rows of assigned desks or cubicles, few people | `outdated office cubicles rows empty desks interior` | Landscape 3:2, ≥ 1600 px wide | Rows of assigned desks in a dated office |
| T2 – Approach tab | Small diverse team reviewing a printed floor plan or sticky-note workshop | `business team workshop reviewing office floor plan asia` | Landscape 3:2, ≥ 1600 px wide | Project team reviewing an office floor plan in a workshop |
| T3 – Results tab | Employees in a lively collaboration or breakout zone | `employees collaborating breakout area modern office asia` | Landscape 3:2, ≥ 1600 px wide | Employees meeting in a modern collaboration area |
| B1 – Before | Dated office interior, fixed desks, low ceilings, fluorescent light; no people or few people | `old office interior fluorescent lighting desks dated` | Landscape 16:9, ≥ 2000 px wide (same as B2) | Before: a dated office with fixed desks and fluorescent lighting |
| B2 – After | Activity-based workplace with varied settings: booths, lounge, project tables, plants | `activity based working office interior flexible seating booths` | Landscape 16:9, ≥ 2000 px wide (same as B1) | After: an activity-based office with booths, lounge seating and project tables |
| R1 – Related story 1 | Modern corporate office floor or meeting room, no signage (bank story) | `modern corporate office meeting room glass walls asia` | Landscape 3:2, ≥ 1200 px wide | Modern corporate office meeting room |
| R2 – Related story 2 | Modern logistics warehouse interior with high racking; no branded packaging | `modern logistics warehouse interior racking asia` | Landscape 3:2, ≥ 1200 px wide | Interior of a modern logistics warehouse with high racking |
| R3 – Related story 3 | Facilities technician inspecting building equipment, or a clean laboratory corridor | `facilities technician inspecting building equipment asia` (alt: `modern laboratory interior clean bright`) | Landscape 3:2, ≥ 1200 px wide | Facilities technician carrying out a building inspection (if the laboratory alternative is used: "A clean, modern laboratory interior") |

**No testimonial photo.** Never pair a stock face with a client quote. Add a photo only if the client supplies an approved one.

**Live case studies:** replace H1, T1–T3 and B1–B2 with the project's own photography (with client and photographer permissions). Stock may stay only where it clearly illustrates a generic idea, and the "Images are for illustration only." line must then stay in the footer.

## QA checklist

- [ ] Brand kit is still **CBRE Test** and **unmodified**. No AI offer to change the brand kit was accepted, and no new brand kit was created.
- [ ] No colour, font or logo overrides were added to any element. If there was drift, follow-up 11 was applied.
- [ ] The experience is in the **CBRE Singapore** folder.
- [ ] The experience is named exactly `[Template] Client Case Study`.
- [ ] Tone and structure are consistent with the New Joiner Onboarding reference experience.
- [ ] All eleven sections are present in order (twelve with the optional navigation).
- [ ] Hero "See the results" scrolls to Results in numbers.
- [ ] The at-a-glance strip shows all five items with the exact labels and values.
- [ ] Story tabs: all three switch correctly, Challenge is open by default, and each has a heading, paragraph, three bullets and an image (or the fallback works).
- [ ] Counters animate (or fade in) once and end on exactly 22%, S$2.4M, 14 weeks and 89%; the methodology note is present.
- [ ] The headline, subhead, Results tab, counters and timeline all use the same figures (22%, S$2.4M, 14 weeks, 1,150 people, 96,700 sq ft).
- [ ] Before/after: the divider drags with mouse and touch (or the Before/After tabs switch), and the labels and captions are correct.
- [ ] Timeline: six steps in the right order with the right dates; horizontal on desktop, vertical on mobile (or the carousel/accordion fallback works).
- [ ] Testimonial has the placeholder attribution, no photo and no company name.
- [ ] Services and related-story cards: every link opens in a new tab.
- [ ] All interactions were tested in preview on **desktop and mobile**: tabs, counters, comparison slider or tabs, timeline, anchor links, buttons, and nav if added.
- [ ] Mobile: strip, counters, timeline and cards stack cleanly; no overlapping or cut-off text and no page-level horizontal scroll.
- [ ] The **disclaimer placeholder** and the image disclaimer are present and visible in the footer.
- [ ] The **"Sample content for template purposes only — replace before publishing."** footer note is visible on desktop and mobile.
- [ ] CTAs and links point to placeholders: Contact → https://www.cbre.com.sg/contact-us; Learn more / Explore our services → https://www.cbre.com.sg/services; Read case study → https://www.cbre.com.sg/insights. External links open in a new tab.
- [ ] Image placeholders have been replaced with the agreed images (licensed or comp, **per the user's decision**). No stock image was licensed without asking.
- [ ] No third-party logos or brands, no identifiable real building or landmark, and no "Editorial use only" assets.
- [ ] Alt text is set on every image, including both comparison images, matching the image slots table.
- [ ] No real client names, real people, or real property names/addresses appear anywhere.
- [ ] Heading structure is one H1 (hero headline) and an H2 per section. Button and link labels are descriptive.
