# [Template] Office Space Calculator

- **Slug:** `office-space-calculator`
- **Ceros starting point:** "Create a calculator" chip (if the chip pre-fills the prompt box, clear that text and paste the prompt below instead)
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline (see refinement prompt 1).
- **Experience name:** [Template] Office Space Calculator
- **Primary audience:** Occupier decision-makers in Singapore (CEOs, COOs, CFOs, HR and real estate leads at SMEs and MNCs) planning a relocation, renewal or expansion. The template is duplicated by CBRE Singapore Advisory & Transaction Services (A&T) marketing and advisors.
- **Est. build time:** 90–120 minutes (about 30 min to generate and refine, 45 min to test the formulas on desktop and mobile, 30 min to swap content and images and run QA)

## Purpose

This is a lead-generation calculator for CBRE Singapore's Advisory & Transaction Services team. Prospective occupiers enter headcount, work style, attendance, collaboration intensity and growth. They get recommended workstations, an estimated net lettable area (NLA) and an indicative monthly rent range, followed by a "Speak to an advisor" call to action. A&T marketing and advisors duplicate it for campaigns, events and pitch follow-ups, replacing the sample rent band, copy, images and links. The formula and constants below are documented so that whoever duplicates it can edit them safely.

## Ceros AI prompt

Paste the block below verbatim into the "What will you build today?" box **after** setting Brand Kit = CBRE Test and Folder = CBRE Singapore. It is 2,453 characters (limit assumed to be about 2,500).

```text
Build a responsive lead-generation calculator, "Office Space Calculator", for CBRE Singapore's Advisory & Transaction Services team. Use the selected brand kit's styles throughout; do not modify the brand kit. All content is sample content.

Sections, in order:
1. Hero: headline "How much office space does your team need?", subhead "Estimate workstations, floor area and an indicative rent range for your next Singapore office in under two minutes.", button "Start calculating" that scrolls to the calculator. Placeholder image: modern hybrid office.
2. How it works, three steps: "Tell us about your team", "Choose how you work", "See your space and rent range".
3. Calculator with inputs beside live results. Inputs:
- Headcount today: slider 10-1,000, step 5, default 150
- Work style: buttons Traditional / Hybrid / Agile, default Hybrid
- Average office attendance: slider 40-100%, step 5, default 60%, helper "Used for Hybrid and Agile"
- Collaboration intensity: buttons Low / Medium / High, default Medium
- Expected growth over 3 years: slider 0-50%, step 5, default 20%
Constants by work style (Traditional / Hybrid / Agile): sharing factor k = 0 / 0.8 / 1.0; workpoint area P = 60 / 65 / 75 sq ft. By collaboration (Low / Medium / High): collaboration area C = 15 / 25 / 35 sq ft; people per meeting room R = 16 / 12 / 8.
Formulas: H = headcount x (1 + growth); W = H x (1 - k x (1 - attendance)); rooms = W / R; U = W x (P + C); NLA = U x 1.35; per person = NLA / H; monthly rent = NLA x 9 to NLA x 13 (S$ psf/mth); annual = monthly x 12.
Results (whole numbers): Planning headcount, Recommended workstations, Suggested meeting rooms, Estimated NLA (sq ft), Space per person (sq ft), Monthly rent (S$k range), Annual rent (S$M range, 2 decimals). Defaults must show 180, 122, 10, 14,872, 83, S$134k-S$193k, S$1.61M-S$2.32M.
4. "Where your space goes": donut chart of NLA split into Workpoints (W x P), Meeting & collaboration (W x C), Support & amenities (U x 0.15), Circulation (U x 0.20).
5. "How we calculate this": accordion with the formulas, constants and sample rent band S$9-13 psf/mth.
6. Advisor CTA: headline "Turn your estimate into a workplace plan", button "Speak to an advisor" linking to https://www.cbre.com.sg/contact-us, placeholder image: advisor meeting a client.
7. Footer: "[Disclaimer placeholder: indicative estimates only, not advice.]" and "Sample content for template purposes only — replace before publishing."
```

## Expected structure

After generation, check that the experience contains these sections in this order. The section numbers match the prompt.

1. **Hero.** Full-width hero banner with eyebrow, headline, subhead, primary button and image slot IMG-01. *Interaction:* "Start calculating" scrolls or anchors to section 3 on desktop and mobile.
2. **How it works.** Three step cards (number or icon, title, one-line description). They are static and sit three across on desktop, stacked on mobile.
3. **Calculator (inputs + results).** A calculator component.
   - Inputs: three sliders (Headcount today, Average office attendance, Expected growth), each showing its current value, plus two single-select button groups (Work style, Collaboration intensity) with helper text.
   - Results panel: seven output tiles (planning headcount, workstations with a desk-ratio sub-label, meeting rooms, NLA with a formula caption, space per person, monthly rent range, annual rent range) and a rent-basis note. Results sit beside the inputs on desktop and below them on mobile.
   - *Interaction:* any input change recalculates every output immediately. Fallback if live updating isn't supported: a "Calculate" button under the inputs. With default inputs, the panel shows the worked example (180 / 122 / 10 / 14,872 sq ft / 83 sq ft / S$134k–S$193k / S$1.61M–S$2.32M). Moving the attendance slider while Traditional is selected must not change any result.
4. **Where your space goes.** A donut chart of NLA in four segments with sq ft values and percentages. *Interaction:* updates with the inputs. Fallback 1: a horizontal stacked bar. Fallback 2, if charts can't bind to calculator values: four output tiles (sq ft + %) under a static illustrative chart labelled "Example: default inputs".
5. **How we calculate this.** An accordion with six items (formula, work-style assumptions, collaboration assumptions, support and circulation, rent band, worked example), with image slot IMG-02 beside it on desktop. *Interaction:* items expand and collapse; all start closed.
6. **Advisor CTA.** An image (IMG-03) with a text block: headline, body, a text-only advisor card, the primary button "Speak to an advisor" and the secondary button "Discover your hybrid workplace profile". *Interaction:* both buttons open external placeholder URLs in a new tab.
7. **Footer.** A text block holding the disclaimer placeholder, "Assumptions last reviewed: Q3 2026 (sample)" and the visible note "Sample content for template purposes only — replace before publishing."

## Follow-up refinement prompts

Send these one at a time in the Ceros AI chat after the first generation, and preview after each one. Skip any that the first pass already got right. None of them may request colour, font or logo changes.

1. **Decline brand-kit changes.** Use this every time the AI offers to change, update or create a brand kit.

```text
No thanks. Please keep the CBRE Test brand kit exactly as it is and do not modify it. Continue with content, structure and calculator logic changes only.
```

2. **Lock the formula and constants.**

```text
Please make the calculator logic match this exactly. Treat percentages as decimals (60% = 0.6, 20% = 0.2).
Work style constants: Traditional k = 0, P = 60; Hybrid k = 0.8, P = 65; Agile k = 1.0, P = 75.
Collaboration constants: Low C = 15, R = 16; Medium C = 25, R = 12; High C = 35, R = 8.
H = headcount x (1 + growth)
Desk ratio D = 1 - k x (1 - attendance)
W = H x D
Meeting rooms = W / R
U = W x (P + C)
NLA = U x 1.35
Space per person = NLA / H
Monthly rent low = NLA x 9; monthly rent high = NLA x 13
Annual rent low/high = monthly low/high x 12
Do not round intermediate values; round only what is displayed.
Test 1: 150, Hybrid, 60%, Medium, 20% must show 180 / 122 / 10 / 14,872 sq ft / 83 sq ft / S$134k-S$193k / S$1.61M-S$2.32M.
Test 2: 100, Traditional, any attendance, Low, 0% must show 100 / 100 / 6 / 10,125 sq ft / 101 sq ft / S$91k-S$132k / S$1.09M-S$1.58M.
Test 3: 400, Agile, 55%, High, 10% must show 440 / 242 / 30 / 35,937 sq ft / 82 sq ft / S$323k-S$467k / S$3.88M-S$5.61M.
```

3. **Result labels and number formatting.**

```text
Please format the results panel like this:
- "Planning headcount (incl. growth)": whole number + " people"
- "Recommended workstations": whole number, with a sub-label "Desk ratio: 0.68 per person" showing D to 2 decimals
- "Suggested meeting rooms": whole number
- "Estimated net lettable area (NLA)": whole number with thousands separator + " sq ft", with the caption "NLA = workstations x (workpoint area + collaboration area) x 1.35"
- "Space per person": whole number + " sq ft per person"
- "Indicative monthly rent": "S$" + (NLA x 9 / 1,000, 0 decimals) + "k – S$" + (NLA x 13 / 1,000, 0 decimals) + "k"
- "Indicative annual rent": "S$" + (NLA x 9 x 12 / 1,000,000, 2 decimals) + "M – S$" + (NLA x 13 x 12 / 1,000,000, 2 decimals) + "M"
Under the rent figures add: "Based on a sample rent band of S$9.00–S$13.00 psf per month (gross, excl. GST, fit-out and utilities)."
Lead the panel with Estimated NLA and Indicative monthly rent as the headline results.
```

4. **Input helper text and option descriptions.**

```text
Please add this helper text under each input:
Headcount today: "Full-time employees and long-term contractors who will use the office."
Work style: Traditional "Everyone has an assigned desk; most people are in four to five days a week." Hybrid "A mix of assigned and shared desks; people split time between office and home." Agile "Fully shared, activity-based settings with no assigned desks."
Average office attendance: "Typical share of your people in the office on an average day. Used for Hybrid and Agile; Traditional gives everyone a desk."
Collaboration intensity: Low "Mostly individual work with occasional meetings." Medium "Regular team meetings and some workshops." High "Frequent workshops, project teams and client sessions."
Expected growth over 3 years: "Net headcount growth you want the space to accommodate."
Show each slider's current value next to its label (for example "150 people", "60%", "20%").
```

5. **Breakdown chart.**

```text
In "Where your space goes", make the donut chart use these four live values: Workpoints = W x P; Meeting & collaboration = W x C; Support & amenities = U x 0.15; Circulation = U x 0.20. Label each segment with its name, sq ft (whole number) and share of NLA (1 decimal). With default inputs it should read 7,956 sq ft (53.5%), 3,060 sq ft (20.6%), 1,652 sq ft (11.1%) and 2,203 sq ft (14.8%). Add the line: "Support and circulation are fixed at 15% and 20% of usable area in this model." If the chart cannot update from calculator values, show four result tiles with the same values instead and keep a static chart labelled "Example: default inputs".
```

6. **"How we calculate this" accordion content.**

```text
Replace the "How we calculate this" accordion with six items, all closed by default:
1. "The formula in five steps": 1) Planning headcount = today's headcount x (1 + growth). 2) Workstations = planning headcount x desk ratio, where desk ratio = 1 - sharing factor x (1 - attendance). 3) Usable area = workstations x (workpoint area + collaboration area). 4) NLA = usable area x 1.35. 5) Monthly rent = NLA x rent band; annual rent = monthly rent x 12.
2. "Work style assumptions": Traditional: sharing factor 0, workpoint area 60 sq ft. Hybrid: 0.8, 65 sq ft. Agile: 1.0, 75 sq ft.
3. "Collaboration assumptions": Low: 15 sq ft per workstation, 1 meeting room per 16 workstations. Medium: 25 sq ft, 1 per 12. High: 35 sq ft, 1 per 8.
4. "Support, amenities and circulation": "We add 15% of usable area for support and amenities (reception, pantry, storage, IT, wellness and parent rooms) and 20% for circulation, a combined factor of 1.35."
5. "Rent band": "Sample band of S$9.00–S$13.00 psf per month: illustrative gross rents for quality CBD and city-fringe office space, Q3 2026. Fictional figures for template purposes; excludes GST, fit-out, utilities and other occupancy costs."
6. "Worked example": paste the worked example text I provide next.
```

Then paste the worked example from **Sample content → Section 5, item 6** as the next message, prefixed with `Use this text for accordion item 6, "Worked example":`.

7. **Advisor CTA, advisor card and footer.**

```text
In the advisor section, use the body text: "Every organisation works differently. Our Advisory & Transaction Services team can test these numbers against real buildings, lease options and your workplace strategy, with no obligation." Add a small text-only card: "Your advisor: Firstname Lastname, Title, Advisory & Transaction Services, CBRE Singapore". Keep the primary button "Speak to an advisor" (https://www.cbre.com.sg/contact-us) and add a secondary button "Discover your hybrid workplace profile" linking to https://www.cbre.com.sg/. Both buttons open in a new tab.
Replace the footer with three lines:
"[DISCLAIMER PLACEHOLDER: replace with wording approved by CBRE Singapore Legal/Compliance before publishing.] This calculator provides indicative estimates for general information only, based on simplified assumptions and a sample rent band. It does not constitute an offer, valuation, or professional, financial or investment advice. Actual space requirements and occupancy costs vary with building efficiency, fit-out, lease terms and market conditions."
"Assumptions last reviewed: Q3 2026 (sample)."
"Sample content for template purposes only — replace before publishing."
```

8. **Hero eyebrow and "How it works" copy.**

```text
Add the eyebrow "Advisory & Transaction Services · Singapore" above the hero headline. In "How it works", use these step descriptions: 1 "Tell us about your team": "Enter today's headcount and how much you expect to grow over the next three years." 2 "Choose how you work": "Select your work style, typical office attendance and how much your teams collaborate." 3 "See your space and rent range": "Get recommended workstations, an estimated net lettable area (NLA) and an indicative monthly rent range."
```

9. **Mobile and interaction polish.**

```text
Please check the mobile layout: inputs first, then the results panel directly below, then the chart. Sliders must be easy to drag on touch screens and each one should show its current value. Make sure the hero button jumps to the calculator on mobile too. If supported, add a compact summary bar on mobile showing "NLA" and "Monthly rent" while the user scrolls through the inputs. All external links open in a new tab.
```

10. **Image placeholders and alt text.**

```text
Please make sure there are three image placeholders: hero (landscape 16:9), beside the "How we calculate this" accordion (landscape 3:2) and in the advisor section (landscape 3:2). Set the alt text to: hero "Colleagues working at shared desks in a bright, modern open-plan office"; accordion "Office floor plan showing workstations, meeting rooms and shared spaces"; advisor "An advisor discussing office options with a client in a meeting room".
```

11. **Optional: let users adjust the rent band.** Use this only if the A&T owner wants it.

```text
Add a collapsed "Adjust assumptions" panel under the inputs with two number inputs: "Rent band low (S$ psf/mth)" default 9.00 and "Rent band high (S$ psf/mth)" default 13.00, step 0.50, min 3, max 30. Use them in place of the fixed 9 and 13 in all rent formulas and in the rent-basis note.
```

12. **Fallback: only if the AI says a button option can carry just one value.**

```text
Set the work style buttons to values Traditional = 0, Hybrid = 1, Agile = 2 (call it S) and the collaboration buttons to Low = 0, Medium = 1, High = 2 (call it L). Then compute: k = 1.1 x S - 0.3 x S x S; P = 60 + 2.5 x S + 2.5 x S x S; C = 15 + 10 x L; R = 16 - 4 x L. Keep all other formulas unchanged and re-run Test 1, 2 and 3.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | [Template] Office Space Calculator | Ceros settings | Rename on duplicate (for example "SG – Office Space Calculator – <campaign>") and remove "[Template]". Keep the same folder unless told otherwise. |
| Hero eyebrow | Advisory & Transaction Services · Singapore | 1 Hero | Service line and market label. |
| Hero headline | How much office space does your team need? | 1 Hero | Keep to 50 characters or fewer so it fits on mobile. |
| Hero subhead | Estimate workstations, floor area and an indicative rent range for your next Singapore office in under two minutes. | 1 Hero | |
| Hero button label | Start calculating | 1 Hero | Must still anchor to section 3. |
| Hero image + alt | IMG-01 | 1 Hero | See Image slots. |
| Step 1 title / text | Tell us about your team / Enter today's headcount and how much you expect to grow over the next three years. | 2 How it works | |
| Step 2 title / text | Choose how you work / Select your work style, typical office attendance and how much your teams collaborate. | 2 How it works | |
| Step 3 title / text | See your space and rent range / Get recommended workstations, an estimated net lettable area (NLA) and an indicative monthly rent range. | 2 How it works | |
| Input 1: label, range, step, default | Headcount today · 10–1,000 · step 5 · default 150 | 3 Calculator | Changing a default changes the default results. Update the worked example and Test 1 to match. |
| Input 1 helper | Full-time employees and long-term contractors who will use the office. | 3 Calculator | |
| Input 2: label, options, default | Work style · Traditional / Hybrid / Agile · default Hybrid | 3 Calculator | Each option carries a sharing factor (k) and workpoint area (P). |
| Input 2 option descriptions | See Sample content, section 3 | 3 Calculator | |
| Input 3: label, range, step, default | Average office attendance · 40–100% · step 5 · default 60% | 3 Calculator | Has no effect when Traditional is selected (k = 0). That is intended. |
| Input 3 helper | Typical share of your people in the office on an average day. Used for Hybrid and Agile; Traditional gives everyone a desk. | 3 Calculator | |
| Input 4: label, options, default | Collaboration intensity · Low / Medium / High · default Medium | 3 Calculator | Each option carries a collaboration area (C) and people per meeting room (R). |
| Input 4 option descriptions | See Sample content, section 3 | 3 Calculator | |
| Input 5: label, range, step, default | Expected growth over 3 years · 0–50% · step 5 · default 20% | 3 Calculator | |
| Input 5 helper | Net headcount growth you want the space to accommodate. | 3 Calculator | |
| Sharing factor k | Traditional 0 · Hybrid 0.8 · Agile 1.0 | 3 Calculator (logic) | Change only with A&T or Workplace Strategy sign-off. Keep between 0 and 1. |
| Workpoint area P | Traditional 60 · Hybrid 65 · Agile 75 sq ft | 3 Calculator (logic) | Desk plus its share of alternative work settings. |
| Collaboration area C | Low 15 · Medium 25 · High 35 sq ft per workstation | 3 Calculator (logic) | |
| People per meeting room R | Low 16 · Medium 12 · High 8 | 3 Calculator (logic) | Workstations per meeting room. |
| Support & amenity factor | 15% (0.15) | 3 / 4 / 5 | If you change it, update the 1.35 multiplier, the chart and the accordion text. |
| Circulation factor | 20% (0.20) | 3 / 4 / 5 | Same as above. Gross-up = 1 + support + circulation = 1.35. |
| Rent band low | S$9.00 psf/mth | 3 / 5 | **Sample, fictional.** Replace with current CBRE Research-approved figures and the date. |
| Rent band high | S$13.00 psf/mth | 3 / 5 | **Sample, fictional.** As above. |
| Rent basis note | Based on a sample rent band of S$9.00–S$13.00 psf per month (gross, excl. GST, fit-out and utilities). | 3 Calculator | Keep it consistent with the rent band values. |
| Output labels | Planning headcount (incl. growth) · Recommended workstations · Suggested meeting rooms · Estimated net lettable area (NLA) · Space per person · Indicative monthly rent · Indicative annual rent | 3 Calculator | |
| Output formats | "180 people" · "122" · "10" · "14,872 sq ft" · "83 sq ft per person" · "S$134k – S$193k" · "S$1.61M – S$2.32M" | 3 Calculator | Values shown are the defaults. |
| Desk ratio sub-label | Desk ratio: 0.68 per person | 3 Calculator | Shows D to 2 decimals. |
| NLA formula caption | NLA = workstations × (workpoint area + collaboration area) × 1.35 | 3 Calculator | |
| Chart title | Where your space goes | 4 Chart | |
| Chart segment labels | Workpoints · Meeting & collaboration · Support & amenities · Circulation | 4 Chart | |
| Chart note | Support and circulation are fixed at 15% and 20% of usable area in this model. | 4 Chart | |
| Accordion title | How we calculate this | 5 Accordion | |
| Accordion item titles | The formula in five steps · Work style assumptions · Collaboration assumptions · Support, amenities and circulation · Rent band · Worked example | 5 Accordion | |
| Worked example | 150 / Hybrid / 60% / Medium / 20% → 14,872 sq ft, S$134k–S$193k per month | 5 Accordion | Must match the default inputs and outputs. |
| Accordion image + alt | IMG-02 | 5 Accordion | |
| CTA headline | Turn your estimate into a workplace plan | 6 Advisor CTA | |
| CTA body | Every organisation works differently. Our Advisory & Transaction Services team can test these numbers against real buildings, lease options and your workplace strategy, with no obligation. | 6 Advisor CTA | |
| Advisor card | Your advisor: Firstname Lastname, Title, Advisory & Transaction Services, CBRE Singapore | 6 Advisor CTA | Use a real name only with that person's agreement. Don't add direct phone numbers or emails unless Marketing approves. |
| Primary CTA label / URL | Speak to an advisor · https://www.cbre.com.sg/contact-us | 6 Advisor CTA | Placeholder. Replace with the campaign contact URL (add UTM parameters if Marketing uses them). |
| Secondary CTA label / URL | Discover your hybrid workplace profile · https://www.cbre.com.sg/ | 6 Advisor CTA | Placeholder. Replace with the published Workplace Strategy Quiz URL, or remove the button. |
| CTA image + alt | IMG-03 | 6 Advisor CTA | |
| Disclaimer | See Sample content, section 7 | 7 Footer | **Mandatory.** Replace with Legal/Compliance-approved wording before publishing. |
| Assumptions date | Assumptions last reviewed: Q3 2026 (sample) | 7 Footer | Update whenever constants or the rent band change. |
| Sample footer note | Sample content for template purposes only — replace before publishing. | 7 Footer | Keep it on the template. Remove it from a duplicate only after every sample value has been replaced. |

## Sample content

### Section 1: Hero

- **Eyebrow:** Advisory & Transaction Services · Singapore
- **Headline:** How much office space does your team need?
- **Subhead:** Estimate workstations, floor area and an indicative rent range for your next Singapore office in under two minutes.
- **Button:** Start calculating (anchors to the calculator)

### Section 2: How it works

1. **Tell us about your team.** Enter today's headcount and how much you expect to grow over the next three years.
2. **Choose how you work.** Select your work style, typical office attendance and how much your teams collaborate.
3. **See your space and rent range.** Get recommended workstations, an estimated net lettable area (NLA) and an indicative monthly rent range.

### Section 3: Calculator

**Inputs**

| # | Label | Control | Range / options | Step | Default | Helper text |
|---|---|---|---|---|---|---|
| 1 | Headcount today | Slider + value readout ("150 people") | 10–1,000 | 5 | 150 | Full-time employees and long-term contractors who will use the office. |
| 2 | Work style | Single-select buttons | Traditional / Hybrid / Agile | n/a | Hybrid | See option descriptions below. |
| 3 | Average office attendance | Slider + readout ("60%") | 40–100% | 5 | 60% | Typical share of your people in the office on an average day. Used for Hybrid and Agile; Traditional gives everyone a desk. |
| 4 | Collaboration intensity | Single-select buttons | Low / Medium / High | n/a | Medium | See option descriptions below. |
| 5 | Expected growth over 3 years | Slider + readout ("20%") | 0–50% | 5 | 20% | Net headcount growth you want the space to accommodate. |

**Work style option descriptions**
- **Traditional:** Everyone has an assigned desk; most people are in four to five days a week.
- **Hybrid:** A mix of assigned and shared desks; people split time between office and home.
- **Agile:** Fully shared, activity-based settings with no assigned desks.

**Collaboration option descriptions**
- **Low:** Mostly individual work with occasional meetings.
- **Medium:** Regular team meetings and some workshops.
- **High:** Frequent workshops, project teams and client sessions.

**Constants (editable, sample values)**

| Work style | Sharing factor k | Workpoint area P (sq ft per workstation) | Meaning |
|---|---|---|---|
| Traditional | 0 | 60 | Every person gets a desk. Attendance does not reduce desks. |
| Hybrid | 0.8 | 65 | Desks cover average attendance plus a buffer equal to 20% of those not in on an average day, to absorb peak days. |
| Agile | 1.0 | 75 | Desks match average attendance. The larger workpoint area pays for focus booths, quiet rooms and alternative settings. |

| Collaboration | Collaboration area C (sq ft per workstation) | People per meeting room R (workstations per room) |
|---|---|---|
| Low | 15 | 16 |
| Medium | 25 | 12 |
| High | 35 | 8 |

| Constant | Value |
|---|---|
| Support & amenity factor | 0.15 (reception, pantry, storage, IT/comms, wellness and parent rooms) |
| Circulation factor | 0.20 (corridors and walkways) |
| Gross-up multiplier | 1 + 0.15 + 0.20 = **1.35** |
| Rent band low (RENT_LOW) | S$9.00 psf/mth (sample, fictional) |
| Rent band high (RENT_HIGH) | S$13.00 psf/mth (sample, fictional) |

**Formula.** Attendance (A) and growth (g) are decimals, so 60% = 0.60.

```
H  (planning headcount)       = headcount × (1 + g)
D  (desk ratio)               = 1 − k × (1 − A)
W  (recommended workstations) = H × D
M  (suggested meeting rooms)  = W ÷ R
U  (usable area, sq ft)       = W × (P + C)
NLA (net lettable area, sq ft) = U × 1.35
Space per person (sq ft)      = NLA ÷ H
Monthly rent low  (S$)        = NLA × RENT_LOW
Monthly rent high (S$)        = NLA × RENT_HIGH
Annual rent low / high (S$)   = monthly low / high × 12

Breakdown (sums to NLA):
Workpoints               = W × P
Meeting & collaboration  = W × C
Support & amenities      = U × 0.15
Circulation              = U × 0.20
```

Rounding rules: never round intermediate values; round only on display. Whole numbers for headcount, workstations, rooms, NLA, space per person and chart sq ft. D to 2 decimals. Monthly rent in S$ thousands with 0 decimals and a "k" suffix. Annual rent in S$ millions with 2 decimals and an "M" suffix. Chart percentages to 1 decimal. Because each segment is rounded separately, the chart segments may add up to 1 sq ft less or more than the NLA tile. That is acceptable.

**Results panel labels and default values**

| Label | Default display |
|---|---|
| Planning headcount (incl. growth) | 180 people |
| Recommended workstations | 122 (sub-label: "Desk ratio: 0.68 per person") |
| Suggested meeting rooms | 10 |
| Estimated net lettable area (NLA) | 14,872 sq ft (caption: "NLA = workstations × (workpoint area + collaboration area) × 1.35") |
| Space per person | 83 sq ft per person |
| Indicative monthly rent | S$134k – S$193k |
| Indicative annual rent | S$1.61M – S$2.32M |
| Rent basis note | Based on a sample rent band of S$9.00–S$13.00 psf per month (gross, excl. GST, fit-out and utilities). |

### Section 4: Where your space goes

- **Title:** Where your space goes
- **Segments (defaults):** Workpoints 7,956 sq ft (53.5%) · Meeting & collaboration 3,060 sq ft (20.6%) · Support & amenities 1,652 sq ft (11.1%) · Circulation 2,203 sq ft (14.8%)
- **Note:** Support and circulation are fixed at 15% and 20% of usable area in this model.

### Section 5: How we calculate this (accordion)

1. **The formula in five steps.**
   1. Planning headcount = today's headcount × (1 + growth).
   2. Workstations = planning headcount × desk ratio, where desk ratio = 1 − sharing factor × (1 − attendance).
   3. Usable area = workstations × (workpoint area + collaboration area).
   4. NLA = usable area × 1.35.
   5. Monthly rent = NLA × rent band (S$ psf per month); annual rent = monthly rent × 12.
2. **Work style assumptions.** Traditional: sharing factor 0, workpoint area 60 sq ft. Hybrid: sharing factor 0.8, workpoint area 65 sq ft. Agile: sharing factor 1.0, workpoint area 75 sq ft. Higher sharing means fewer desks. Agile allows more area per workpoint for focus booths, quiet rooms and alternative settings.
3. **Collaboration assumptions.** Low: 15 sq ft of collaboration space per workstation and one meeting room per 16 workstations. Medium: 25 sq ft and one room per 12. High: 35 sq ft and one room per 8. Collaboration space covers meeting rooms, project rooms, phone booths and informal huddle areas.
4. **Support, amenities and circulation.** We add 15% of usable area for support and amenities (reception, pantry, storage, IT/comms, wellness and parent rooms) and 20% for circulation (corridors and walkways), a combined factor of 1.35. Actual efficiency varies with floor plate shape and core layout.
5. **Rent band.** A sample band of S$9.00–S$13.00 psf per month, representing illustrative gross rents (including service charge) for quality CBD and city-fringe office space, Q3 2026. These are fictional figures for template purposes and exclude GST, fit-out, utilities and other occupancy costs. Replace them with current CBRE Research-approved figures before publishing.
6. **Worked example.** *A 150-person team working hybrid, with 60% average attendance, medium collaboration and 20% growth expected over three years:*
   - Planning headcount: 150 × (1 + 0.20) = **180 people**
   - Desk ratio: 1 − 0.8 × (1 − 0.60) = **0.68**
   - Workstations: 180 × 0.68 = 122.4 → **122**
   - Meeting rooms: 122.4 ÷ 12 = 10.2 → **10**
   - Usable area: 122.4 × (65 + 25) = **11,016 sq ft**
   - NLA: 11,016 × 1.35 = 14,871.6 → **14,872 sq ft** (about **83 sq ft per person**)
   - Monthly rent: 14,871.6 × S$9 = S$133,844 to 14,871.6 × S$13 = S$193,331 → **S$134k – S$193k**
   - Annual rent: **S$1.61M – S$2.32M**
   - Space split: Workpoints 7,956 sq ft · Meeting & collaboration 3,060 sq ft · Support & amenities 1,652 sq ft · Circulation 2,203 sq ft

**Test cases** (for QA; not shown on the page)

| Test | Inputs (headcount / style / attendance / collaboration / growth) | Planning HC | Workstations | Rooms | NLA (sq ft) | Sq ft per person | Monthly rent | Annual rent |
|---|---|---|---|---|---|---|---|---|
| 1 (defaults) | 150 / Hybrid / 60% / Medium / 20% | 180 | 122 (122.4) | 10 (10.2) | 14,872 (14,871.6) | 83 | S$134k – S$193k | S$1.61M – S$2.32M |
| 2 | 100 / Traditional / any / Low / 0% | 100 | 100 | 6 (6.25) | 10,125 | 101 | S$91k – S$132k | S$1.09M – S$1.58M |
| 3 | 400 / Agile / 55% / High / 10% | 440 | 242 | 30 (30.25) | 35,937 | 82 | S$323k – S$467k | S$3.88M – S$5.61M |
| 4 (minimum) | 10 / Traditional / any / Low / 0% | 10 | 10 | 1 (0.625) | 1,013 (1,012.5) | 101 | S$9k – S$13k | S$0.11M – S$0.16M |
| 5 (maximum) | 1,000 / Traditional / any / High / 50% | 1,500 | 1,500 | 188 (187.5) | 192,375 | 128 | S$1,731k – S$2,501k | S$20.78M – S$30.01M |

Test 2 check: with Traditional selected, moving attendance anywhere from 40% to 100% must leave every output unchanged. For the .5 values in tests 4 and 5, a display that rounds half-down (for example 1,012 or 187) is acceptable. Note which way Ceros rounds in the QA log.

**Single-value fallback** (only needed if a button option can carry just one value; see refinement prompt 12). Use S = 0/1/2 for Traditional/Hybrid/Agile and L = 0/1/2 for Low/Medium/High:
- k = 1.1 × S − 0.3 × S² → 0 / 0.8 / 1.0
- P = 60 + 2.5 × S + 2.5 × S² → 60 / 65 / 75
- C = 15 + 10 × L → 15 / 25 / 35
- R = 16 − 4 × L → 16 / 12 / 8

### Section 6: Advisor CTA

- **Headline:** Turn your estimate into a workplace plan
- **Body:** Every organisation works differently. Our Advisory & Transaction Services team can test these numbers against real buildings, lease options and your workplace strategy, with no obligation.
- **Advisor card (text only):** Your advisor: Firstname Lastname, Title, Advisory & Transaction Services, CBRE Singapore
- **Primary button:** Speak to an advisor → https://www.cbre.com.sg/contact-us (new tab)
- **Secondary button:** Discover your hybrid workplace profile → https://www.cbre.com.sg/ (placeholder for the published Workplace Strategy Quiz URL; new tab)

### Section 7: Footer

- **Disclaimer (placeholder):** [DISCLAIMER PLACEHOLDER: replace with wording approved by CBRE Singapore Legal/Compliance before publishing.] This calculator provides indicative estimates for general information only, based on simplified assumptions and a sample rent band. It does not constitute an offer, valuation, or professional, financial or investment advice. Actual space requirements and occupancy costs vary with building efficiency, fit-out, lease terms and market conditions.
- **Assumptions line:** Assumptions last reviewed: Q3 2026 (sample).
- **Sample note (must be visible):** Sample content for template purposes only — replace before publishing.

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** Licensing an image uses CBRE's Adobe Stock credits. Before licensing anything, the executing session must ask the user whether to (a) license the chosen images or (b) place watermarked comp/preview images as placeholders. Never license without explicit confirmation. Record each chosen asset's Adobe Stock ID next to its slot in the build notes.

Search on stock.adobe.com/sg with these filters: Content type = Photos; Orientation = Horizontal; exclude Editorial (only commercially licensable assets); exclude generative AI content unless CBRE policy allows it.

Picking images:
- Prefer Singapore or Asian context and diverse people.
- Reject any image with visible third-party brands or logos, including on laptops, phones, screens and signage.
- Reject identifiable real landmarks or skylines (for example Marina Bay), because they could be mistaken for a CBRE-managed asset.
- Interiors are preferred.

The step icons in section 2 come from Ceros's own icon set and are not stock slots.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| IMG-01 Hero | A bright, modern hybrid office interior with a few diverse Asian professionals at shared desks and natural light. No readable screens, no brands. | `modern hybrid office interior asian professionals shared desks natural light` | Landscape 16:9, ≥ 2400 × 1350 px | Colleagues working at shared desks in a bright, modern open-plan office |
| IMG-02 How we calculate this | An architectural office floor plan or space-planning drawing showing workstations and meeting rooms. No legible text, title block or logos. | `office floor plan workstations meeting rooms architectural drawing top view` | Landscape 3:2, ≥ 1600 × 1067 px | Office floor plan showing workstations, meeting rooms and shared spaces |
| IMG-03 Advisor CTA | An advisor reviewing plans with one or two clients in a modern meeting room, with a laptop or tablet. Diverse Asian professionals; no device logos. | `asian business advisor meeting client modern meeting room tablet` | Landscape 3:2, ≥ 1600 × 1067 px | An advisor discussing office options with a client in a meeting room |

## QA checklist

- [ ] Brand kit is still **CBRE Test** and unmodified: no AI offer to change it was accepted, and no colour, font or logo overrides were applied anywhere.
- [ ] Folder is **CBRE Singapore**.
- [ ] Experience name is exactly **[Template] Office Space Calculator**.
- [ ] Tone and section conventions match the New Joiner Onboarding reference experience in the same folder.
- [ ] All seven sections are present in the order listed under Expected structure.
- [ ] The hero button scrolls to the calculator in desktop and mobile preview.
- [ ] Each slider has the correct range, step and default and shows its current value. Each button group has the correct options and default.
- [ ] Test cases 1–5 produce the expected outputs in desktop **and** mobile preview.
- [ ] With Traditional selected, the attendance slider has no effect on any output.
- [ ] No input combination produces blank, NaN, negative or "Infinity" values (try every extreme of every slider).
- [ ] The breakdown chart updates with the inputs and its default values match section 4, or the documented fallback is in place and labelled "Example: default inputs".
- [ ] All six accordion items expand and collapse, and the worked example matches the defaults.
- [ ] CTAs and links point to placeholders (https://www.cbre.com.sg/contact-us and https://www.cbre.com.sg/) and open in a new tab.
- [ ] The disclaimer placeholder is present in the footer.
- [ ] The footer note "Sample content for template purposes only — replace before publishing." is visible on desktop and mobile.
- [ ] There are no real client names, real people or real property names or addresses. The advisor is "Firstname Lastname, Title".
- [ ] Images are replaced in all three slots with licensed images or comp images. The licensing decision was confirmed with the user, and Adobe Stock IDs are recorded.
- [ ] Alt text is set for IMG-01, IMG-02 and IMG-03.
- [ ] Mobile preview shows no overlapping or cut-off text, sliders are usable by touch, and results appear directly under the inputs.
- [ ] Spelling uses British/Singapore English (organisation, utilisation, programme).
