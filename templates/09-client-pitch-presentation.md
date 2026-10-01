# [Template] Client Pitch Presentation

- **Slug:** `client-pitch-presentation`
- **Ceros starting point:** Free prompt that builds a slide-style, paged experience. Alternative: if an existing, approved pitch PDF is supplied, use the "Create a presentation from a PDF" chip, then apply the follow-up prompts below to reach the same nine-slide structure. Anonymise the PDF first and never upload a real client's confidential proposal into the template.
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline.
- **Experience name:** `[Template] Client Pitch Presentation`
- **Primary audience:** Decision-makers at a prospective client: the CEO, COO or CFO, the head of real estate or workplace, and procurement or selection panels. The pitch team presents it live in the meeting and then sends it as a follow-up link. CBRE Singapore brokers and consultants (Advisory & Transaction Services first, then other business lines) duplicate it for each pitch, with Marketing or bid support.
- **Est. build time:** 3–4 hours for the template (about 25 min generation and paging fixes, 1 h flip card/timeline/carousel/counter checks, 45 min images and headshot placeholders, 45 min QA on desktop and mobile). Each later per-pitch duplicate takes about 1.5–2 hours.

## Purpose

This is an interactive, slide-style proposal that replaces a static PDF pitch deck. Nine light slides take the client from our understanding of their brief, through why CBRE, the team, a clickable five-phase approach, relevant track record and a market snapshot, to indicative fees and next steps. Brokers and consultants duplicate it for each pitch and swap in the client name, brief, team, timings, case studies, market data and fees. The sample (an office relocation advisory proposal for an anonymised "regional financial services firm") is entirely fictional.

## Ceros AI prompt

Before you paste:

1. Open the existing **New Joiner Onboarding** experience in the CBRE Singapore folder. Note its tone, section rhythm and how it uses components, so this build feels like part of the same family. If the generated result differs noticeably, adjust it with the follow-up prompts. Do not add any styling instructions.
2. In the "What will you build today?" box, set **Brand Kit = CBRE Test** and **Folder = CBRE Singapore**.
3. Paste the block below verbatim and generate. It is 2,397 characters (the limit is assumed to be about 2,500). The full-screen-sections fallback for paging is in follow-up 1.
4. If the AI offers to update, extend or modify the brand kit at any point, decline. Reply: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`
5. Rename the experience to `[Template] Client Pitch Presentation`.

**PDF alternative:** if you start from "Create a presentation from a PDF" instead, upload the anonymised PDF, generate, then apply follow-up 1 (paging) first and follow-ups 2–9 to replace or add each slide's content. The disclaimer, fees label and sample-content note (follow-ups 8 and 9) are mandatory either way.

```text
Create a responsive, slide-style pitch deck: an office relocation advisory proposal for "a regional financial services firm" in Singapore. Use the selected brand kit's styles as-is. Tone: confident, concise, client-first. Keep each slide uncluttered. Use labelled image placeholders (no recognisable real buildings or landmarks).

Navigation: nine slides, one at a time, with previous/next arrows, clickable progress dots marking the current slide, a "1 / 9" counter and mobile swipe.

Slides:
1. Cover: image placeholder; eyebrow "Proposal | Office relocation advisory"; title "Your next headquarters, planned with confidence"; "Prepared for [Client name], a regional financial services firm"; "CBRE Singapore | 29 September 2026"; "Strictly private and confidential"; button "Start".
2. Our understanding of your brief: tabs "Where you are today" and "What you need", four bullets each (copy to follow).
3. Why CBRE: four counters that count up on view: 100+ countries and territories | 140,000+ employees worldwide | 1,200+ professionals in Singapore | 2.8M sq ft leased for Singapore occupiers since 2023; line "Sample figures – replace with the latest approved CBRE figures."
4. Your team: four flip cards. Front: photo placeholder, "Firstname Lastname", role. Back: two-line bio, email.
5. Our approach: clickable five-phase timeline (Strategy, Search, Negotiation, Design & Build, Move); each reveals its timing, three activities and deliverable; Strategy open first.
6. Relevant track record: carousel of three anonymised mini case studies (client descriptor, headline, three facts) with arrows and dots.
7. Market snapshot: three KPIs: S$12.45 psf/mth Grade A CBD rent | 4.6% Core CBD vacancy | 312,000 sq ft net absorption; two-sentence commentary; "Source: CBRE Research, Q3 2026 (sample data)".
8. Fees & commercial terms: label "Indicative – for discussion only"; table Phase | Scope | Fee basis | Indicative fee (excl. GST), five rows; terms note.
9. Next steps: three numbered steps, engagement lead contact card, buttons "Contact us" (https://www.cbre.com.sg/contact-us) and "Email the team" (mailto).

Every slide shows a small footer note: "Sample content for template purposes only — replace before publishing." Slides 8–9 also show "[Disclaimer placeholder: insert the approved CBRE Singapore disclaimer.]" External links open in a new tab. On mobile, use one column per slide.
```

## Expected structure

After generation, check each item against this list. Use the follow-up prompts to fix anything missing.

0. **Slide navigation (whole experience)**: one slide visible at a time, nine slides in the order below. Previous/next arrows (previous hidden or disabled on slide 1, next hidden or disabled on slide 9), nine progress dots that mark the current slide and jump to any slide when clicked, a "1 / 9"-style counter, and swipe left/right on mobile (keyboard arrows if supported). **Fallback:** nine full-screen sections stacked vertically, with a sticky dot navigation that anchor-links to each section and a "Next" button at the bottom of slides 1–8 (see follow-up 1).
1. **Cover**: full-bleed image placeholder, eyebrow, H1 title, "Prepared for [Client name], a regional financial services firm", presenter line, date, "Strictly private and confidential" label. The "Start" button goes to slide 2.
2. **Our understanding of your brief**: H2, intro line, and a tabs component with two tabs ("Where you are today" open by default, "What you need"), four bullets each, plus a small source line. Optional small image. **Fallback:** two lists side by side (stacked on mobile).
3. **Why CBRE**: H2, intro line, four animated number counters that count up once when the slide is shown or scrolled into view (fallback: static numbers with a fade-in), and the visible "Sample figures" line.
4. **Your team**: H2, intro, instruction line, and four flip cards. Click or tap flips a card to its back (bio and "Email" mailto link) and flips it back again. **Fallback:** cards with the front content and a "View profile" button that opens a popup (modal) with the bio and email.
5. **Our approach**: H2, intro, and five numbered, clickable phase steps (horizontal on desktop, vertical on mobile). Selecting a step shows that phase's timing, three activities and deliverable; Strategy is selected by default. **Fallback:** five tabs or an accordion with the same content.
6. **Relevant track record**: H2, intro, and a carousel with three slides (image placeholder, client descriptor, headline, three facts, services line). It has arrows, dots and swipe, and no autoplay. A confidentiality/sample note and a "See more client stories" link sit below it. **Fallback:** three cards side by side (stacked on mobile) or three tabs, which avoids nesting a carousel inside a paged experience.
7. **Market snapshot**: H2 and three KPI counters (S$12.45 psf/mth, 4.6%, 312,000 sq ft) with labels, a source line, a "What it means for you" commentary and a "Read the latest market outlook" link.
8. **Fees & commercial terms**: H2 with a visible "Indicative – for discussion only" label, intro, a five-row table (Phase | Scope | Fee basis | Indicative fee, excl. GST), a footnote, four terms bullets and the disclaimer placeholder. On mobile the rows become stacked cards or the table scrolls inside its container.
9. **Next steps**: H2, three numbered steps with dates, a thank-you line, the engagement-lead contact card, and two buttons ("Contact us" in a new tab, "Email the team" as a mailto link).
10. **Footer on every slide**: the small sample-content note on all nine slides. Slides 8 and 9 also carry the full disclaimer placeholder and the image disclaimer.

## Follow-up refinement prompts

Paste these one at a time in the AI chat after the first generation. Skip any that the first pass already handled. None of them contain styling requests; if the AI offers brand kit changes, decline.

**1. Paged slide navigation**

```text
Make this a true slide experience: show one slide at a time at full screen height, in this order: 1 Cover, 2 Our understanding of your brief, 3 Why CBRE, 4 Your team, 5 Our approach, 6 Relevant track record, 7 Market snapshot, 8 Fees & commercial terms, 9 Next steps.

Add previous and next arrows, nine progress dots that mark the current slide and jump to any slide when clicked, and a "1 / 9" counter that updates. Hide or disable the previous arrow on slide 1 and the next arrow on slide 9. Support swipe left/right on mobile and the keyboard arrow keys if available. The Cover's "Start" button goes to slide 2. Keep each slide's content within one screen on desktop; on mobile a slide may scroll vertically inside itself.

If true paging is not possible, build nine full-screen sections in the same order with a sticky dot navigation (one dot per slide, marking the current slide, each dot jumps to its slide) and a "Next" button at the bottom of slides 1 to 8 that scrolls to the next slide.
```

**2. Cover and brief copy**

```text
Set slide 1 (Cover) to: eyebrow "Proposal | Office relocation advisory"; title "Your next headquarters, planned with confidence"; line "Prepared for [Client name], a regional financial services firm"; line "Presented by CBRE Singapore | Advisory & Transaction Services"; date "29 September 2026"; label "Strictly private and confidential"; button "Start" (goes to slide 2). Keep the cover image placeholder.

Set slide 2 to the heading "Our understanding of your brief" and the intro "You want one modern headquarters that brings your Singapore teams together, supports hybrid work and keeps occupancy costs in check." Use two tabs, with "Where you are today" open by default:

Where you are today
- 720 people across two sites: a 68,000 sq ft CBD headquarters and a 21,000 sq ft operations centre in the city fringe
- Leases expire on 31 March 2028 (operations centre) and 30 June 2028 (headquarters)
- Hybrid working with three anchor days has cut average desk use to about 55%
- Ageing building services and too few meeting and collaboration spaces

What you need
- One Grade A headquarters of 70,000–75,000 sq ft for up to 800 people by 2030
- Annual gross rent at or below today's level of about S$11.0M
- BCA Green Mark Platinum certification and a direct MRT link
- A move completed before 31 March 2028, with no business disruption

Under the tabs add the small line "Based on our discovery meeting on 15 September 2026. Tell us if we've missed anything." Add a small image placeholder of a client meeting if space allows. If tabs are not available, show the two lists side by side (stacked on mobile) under these two headings.
```

**3. Why CBRE counters**

```text
On slide 3 "Why CBRE", add the intro line "Global reach, local depth, and one team accountable from strategy to move-in." Set the four counters to exactly:
1. 100 with suffix "+" – "Countries and territories"
2. 140,000 with suffix "+" – "Employees worldwide"
3. 1,200 with suffix "+" – "Professionals in Singapore"
4. 2.8 with suffix "M sq ft" – "Office space leased for occupiers in Singapore since 2023"
Each counter counts up once from zero when the slide is shown, keeping the thousands separator and the decimal in 2.8. If counters cannot be triggered by the slide, trigger them when they come into view; if animated counters are not available, show static numbers with a simple fade-in. Keep the visible line "Sample figures – replace with the latest approved CBRE figures." directly under the counters.
```

**4. Team flip cards**

```text
On slide 4 "Your team", add the intro "One senior team, with you from first workshop to move-in day." and the instruction "Select a card to see each person's role." Set the four flip cards, in this order. Each card flips on click or tap, flips back the same way, and works with the keyboard. Front: circular photo placeholder, name, role and a small tag. Back: the two-line bio and an "Email" link to mailto:firstname.lastname@cbre.com.

1. Firstname Lastname | Executive Director, Advisory & Transaction Services | Tag "Engagement lead" | Back: "Leads the engagement and your negotiation strategy. 18 years advising banks, insurers and asset managers on their Singapore offices."
2. Firstname Lastname | Director, Occupier Advisory | Tag "Day-to-day lead" | Back: "Your day-to-day contact. Runs the market search, shortlisting and the financial comparison of every option, including staying put."
3. Firstname Lastname | Associate Director, Workplace Strategy | Tag "Workplace strategy" | Back: "Turns utilisation data and staff input into a space brief that fits how your people work in a hybrid model."
4. Firstname Lastname | Senior Director, Project Management | Tag "Design & build" | Back: "Manages design, fit-out, cost and the move itself, so your teams start work on day one without disruption."

If flip cards are not available, show the front content on each card with a "View profile" button that opens a popup with the bio, the email link and a close button.
```

**5. Approach timeline**

```text
On slide 5 "Our approach", add the intro "Five phases, 18 months, one accountable team. Select a phase to see what happens and when." Build a row of five numbered, clickable phase steps (horizontal on desktop, vertical on mobile). Selecting a step shows its panel and marks that step as current; Strategy is selected first. Panel content (phase | timing | three activities | deliverable):

1. Strategy | Oct – Dec 2026 | Six-week workplace utilisation study and staff survey; Space brief, budget and decision criteria agreed with your steering committee; Renew-versus-relocate financial baseline | Deliverable: Accommodation strategy and space brief
2. Search | Jan – Mar 2027 | Market scan of every option that fits the brief, on and off market; Shortlist tours and requests for proposal to landlords; Side-by-side financial and qualitative comparison | Deliverable: Shortlist report with recommended options
3. Negotiation | Apr – Jun 2027 | Competitive negotiations with two to three landlords in parallel; Heads of terms covering rent, rent-free period, fit-out contribution and flexibility; Lease review support alongside your legal advisers | Deliverable: Signed letter of offer and lease
4. Design & Build | Jul 2027 – Jan 2028 | Design brief and design-and-build tender; Authority submissions and cost control; 20-week fit-out with weekly progress reports | Deliverable: A workplace ready for occupation
5. Move | Feb – Mar 2028 | Move planning, communications and change management; Weekend moves with day-one support; Reinstatement and handover of both existing sites by their lease expiries | Deliverable: Moved in by 13 March 2028, ahead of your first lease expiry

If a clickable timeline is not possible, use five tabs with the same labels and content, or an accordion with Strategy open.
```

**6. Track record carousel**

```text
On slide 6 "Relevant track record", add the intro "Recent relocations and renewals for financial services occupiers in Singapore." Set the carousel to three slides, in this order. Each slide has an image placeholder, the client descriptor, a headline, three short facts with a tick icon, and a "Services" line. Include previous/next arrows, dots and swipe on mobile; no autoplay.

1. A regional bank | "A new 110,000 sq ft headquarters for 1,000 people" | Three sites consolidated into one Grade A building; Net effective rent 17% below the best renewal offer; Six months' rent-free and a fit-out contribution secured | Services: Tenant representation, workplace strategy, project management
2. A global insurer | "Stay or go? A renewal that saved S$4.0M" | Renew-versus-relocate analysis of nine options; Rent 8% below the landlord's opening offer on 62,000 sq ft; Expansion and contraction rights built into a six-year term | Services: Tenant representation, lease advisory
3. A digital payments company | "Fitted space for 350 people, secured in 9 weeks" | 32,000 sq ft of fitted space in the city fringe; Moved in 10 weeks after signing, with minimal fit-out spend; Right of first refusal on a further 10,000 sq ft | Services: Tenant representation, workplace strategy

Under the carousel add the small line "Client names withheld for confidentiality. Sample case studies." and a text link "See more client stories" to https://www.cbre.com.sg/insights (new tab). If a carousel inside a slide conflicts with the slide navigation, show the three as cards side by side (stacked on mobile) or as three tabs.
```

**7. Market snapshot**

```text
On slide 7, set the heading "Market snapshot: Singapore office, Q3 2026". Show three KPIs as counters that count up when the slide is shown (static numbers with a fade-in if not available):
1. 12.45 with prefix "S$" and suffix " psf/mth" – "Grade A CBD rent, up 0.8% QoQ"
2. 4.6 with suffix "%" – "Core CBD vacancy"
3. 312,000 with suffix " sq ft" – "Net absorption, Q3 2026"
Keep the line "Source: CBRE Research, Q3 2026 (sample data)." directly under the KPIs.
Below that, under the subheading "What it means for you": "Grade A rents are rising steadily, and limited new Core CBD supply until 2028 will keep the best space tight. Starting your search about 18 months before you need to move gives you leverage: landlords with 2027–2028 vacancies are competing for commitments now."
Add a text link "Read the latest market outlook" to https://www.cbre.com.sg/insights (new tab).
```

**8. Fees and commercial terms**

```text
On slide 8 "Fees & commercial terms", keep the label "Indicative – for discussion only" next to the heading and add the intro "A phased fee structure, so you commit to each phase only when you're ready." Set the table to exactly these columns and rows (Phase | Scope | Fee basis | Indicative fee, excl. GST):

Strategy | Utilisation study, staff survey, space brief and financial baseline | Fixed fee | S$45,000
Search & Negotiation | Market search, shortlist, landlord proposals, negotiation and lease support | Success fee on lease signing | 1.0 month's gross rent*
Design & Build | Project and cost management of design, fit-out and approvals | Percentage of fit-out cost | 3.5% of construction cost
Move | Move planning, change management and day-one support | Fixed fee | S$28,000
Disbursements | Surveys, printing and out-of-pocket costs | At cost | Capped at S$5,000

Under the table, in small text: "*Reduced by any commission payable to CBRE by the landlord on the same transaction." Then these terms as short bullets:
- All fees are indicative, exclude GST and are subject to a signed engagement letter.
- Fees for each later phase are confirmed in writing before that phase starts.
- Invoices are payable within 30 days.
- This proposal is valid until 27 November 2026.
Then the line "[Disclaimer placeholder: insert the approved CBRE Singapore disclaimer.]" On mobile, show each table row as a stacked card with the column names as labels, or let the table scroll sideways inside its own container.
```

**9. Next steps, contact and footer**

```text
On slide 9 "Next steps", add three numbered steps (title – line):
1. "Confirm scope and fees" – "By Friday, 9 October 2026. Tell us which phases you'd like us to quote firmly."
2. "Sign the engagement letter" – "By Friday, 16 October 2026."
3. "Kick-off workshop" – "Week of 19 October 2026. Agree the steering committee, timetable and survey plan."
Add the line "Thank you for the opportunity. We'd welcome the chance to help you plan your next headquarters."
Contact card: circular photo placeholder, "Firstname Lastname", "Executive Director, Advisory & Transaction Services", "+65 6XXX XXXX", "firstname.lastname@cbre.com".
Buttons: "Contact us" → https://www.cbre.com.sg/contact-us (new tab) and "Email the team" → mailto:firstname.lastname@cbre.com?subject=Office%20relocation%20proposal

Set the footer of slides 8 and 9 to, in this order:
1. "[Disclaimer placeholder — insert the approved CBRE Singapore disclaimer before publishing.] Sample wording: This proposal is confidential and prepared solely for the named recipient. Market information is indicative and based on sources believed to be reliable but not guaranteed. Fees and timings are indicative and subject to a signed engagement letter. Nothing in this proposal constitutes financial, investment, legal or tax advice."
2. "Images are for illustration only."
3. "Sample content for template purposes only — replace before publishing."
On slides 1 to 7, keep only line 3 as a small footer note. Make sure the footer text is visible on desktop and mobile on every slide.
```

**10. Accessibility and mobile pass**

```text
Do an accessibility and mobile pass: use one H1 (the cover title) and an H2 for each slide heading; give the previous/next arrows and each progress dot an accessible label such as "Go to slide 5: Our approach"; make sure arrows, dots, tabs, flip cards, timeline steps, carousel controls and links all work with a keyboard; give every image placeholder descriptive alt text; make button and link text descriptive (no "Click here"); and check on mobile that every slide fits the screen width, the flip cards and fees table are readable, nothing overlaps or is cut off, and there is no page-level horizontal scrolling. Swiping inside the track-record carousel must not also change the slide.
```

**11. Reset styling drift (use only if needed)**

```text
Remove any custom styling you applied to individual elements and apply the selected brand kit's default styles consistently to all headings, body text, buttons, tabs, cards, tables and navigation controls. Do not create, change or update the brand kit itself.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | `[Template] Client Pitch Presentation` | Settings | When you duplicate it, rename to e.g. `Pitch – <Client> – <Service> – <Mon YYYY>` and remove `[Template]`. |
| Sharing / visibility | Not published (template) | Settings | Pitches are client-confidential. Share only the direct link with the client's named recipients. Don't add it to public galleries or the website. Turn off search indexing, and use password or private-link options if Ceros offers them. Unpublish after the decision if the bid rules require it. |
| Slide navigation and control labels | Counter "1 / 9"; arrows "Previous slide" / "Next slide"; dot labels = the nine slide headings; cover button "Start"; approach panel labels "Timing" / "What happens" / "Deliverable"; popup fallback button "View profile" | All slides | If you add, remove or rename a slide, update the counter total, the dots and their accessible labels together. |
| SEO / share title | Proposal: Office relocation advisory – CBRE Singapore | Settings | Don't put the client's name in share metadata, because link previews in chat and email can expose it. |
| SEO / share description | An interactive proposal from CBRE Singapore Advisory & Transaction Services. | Settings | Keep it generic. No fees or client details. |
| Client name | [Client name] | Cover | Use the real name only in the duplicated pitch copy. Check that the client is comfortable being named in a hosted link. Never put a real client name in the template. |
| Client descriptor | a regional financial services firm | Cover | Keep it if the client prefers not to be named on screen. |
| Cover eyebrow | Proposal \| Office relocation advisory | Cover | Change the service, e.g. "Lease renewal advisory", "Portfolio strategy", "Facilities management". |
| Cover title (H1) | Your next headquarters, planned with confidence | Cover | One line, outcome-led. |
| Presenter line | Presented by CBRE Singapore \| Advisory & Transaction Services | Cover | Change the business line, or list several for a joint pitch. |
| Pitch date | 29 September 2026 | Cover | It must agree with the proposal validity date (slide 8) and the next-step dates (slide 9). |
| Confidentiality label | Strictly private and confidential | Cover | Keep it on every pitch. |
| Cover image | Bright modern office with a soft-focus city view | Cover | Image slot P1. |
| Brief heading + intro | Our understanding of your brief / You want one modern headquarters… | Slide 2 | Write the intro in the client's own terms, from the RFP or discovery meeting. |
| Brief tab 1 – "Where you are today" | 4 bullets (720 people, two sites, lease expiries, utilisation, building issues) | Slide 2 | Facts the client gave you. Check every figure with the client before the pitch. |
| Brief tab 2 – "What you need" | 4 bullets (70,000–75,000 sq ft, S$11.0M rent cap, Green Mark Platinum + MRT, move by 31 Mar 2028) | Slide 2 | Sample check: today's rent = (68,000 × S$11.20 + 21,000 × S$7.40) psf/mth × 12 = S$11.0M a year. A 72,000 sq ft Grade A option at S$12.45 psf/mth = S$10.8M a year, which meets the cap. |
| Brief source line | Based on our discovery meeting on 15 September 2026. Tell us if we've missed anything. | Slide 2 | Change the date or source, e.g. "Based on your RFP dated…". |
| Brief image (optional) | Client meeting in a modern meeting room | Slide 2 | Image slot P2. Delete it if the slide feels crowded. |
| Why CBRE intro | Global reach, local depth, and one team accountable from strategy to move-in. | Slide 3 | |
| Counter 1–3 | 100+ countries and territories; 140,000+ employees worldwide; 1,200+ professionals in Singapore | Slide 3 | Use the latest approved corporate figures. Keep them consistent with `[Template] Services Explorer`. |
| Counter 4 | 2.8M sq ft office space leased for occupiers in Singapore since 2023 | Slide 3 | **Sample only.** Swap in a verified, service-relevant figure with a data source, or delete the counter. |
| Sample-figures line | Sample figures – replace with the latest approved CBRE figures. | Slide 3 | Delete it only when all four counters are verified. |
| Team intro + instruction | One senior team, with you from first workshop to move-in day. / Select a card to see each person's role. | Slide 4 | Change the instruction if the popup fallback is used ("Select View profile…"). |
| Team member 1 | Firstname Lastname, Executive Director, Advisory & Transaction Services, tag "Engagement lead", bio, email | Slide 4 | Use real names, titles and years of experience only with each person's agreement. Use the person's approved CBRE headshot (slot T1), never a stock face. Add a CEA registration number if Compliance requires it. |
| Team member 2 | Firstname Lastname, Director, Occupier Advisory, tag "Day-to-day lead" | Slide 4 | Slot T2. Keep 3–6 cards. Odd numbers are fine on mobile. |
| Team member 3 | Firstname Lastname, Associate Director, Workplace Strategy, tag "Workplace strategy" | Slide 4 | Slot T3. |
| Team member 4 | Firstname Lastname, Senior Director, Project Management, tag "Design & build" | Slide 4 | Slot T4. |
| Team emails | firstname.lastname@cbre.com | Slides 4, 9 | **Placeholder.** Replace each `mailto:` and check it opens. |
| Approach intro | Five phases, 18 months, one accountable team. Select a phase to see what happens and when. | Slide 5 | Update the number of months if the timings change. |
| Phase 1 – Strategy | Oct – Dec 2026; 3 activities; deliverable "Accommodation strategy and space brief" | Slide 5 | Plan backwards from the client's earliest lease expiry and keep phases in date order. Phase 1 can't start before the kick-off workshop on slide 9. |
| Phase 2 – Search | Jan – Mar 2027; 3 activities; "Shortlist report with recommended options" | Slide 5 | |
| Phase 3 – Negotiation | Apr – Jun 2027; 3 activities; "Signed letter of offer and lease" | Slide 5 | |
| Phase 4 – Design & Build | Jul 2027 – Jan 2028; 3 activities; "A workplace ready for occupation" | Slide 5 | Sample: about 8 weeks of design and tender, then a 20-week fit-out. |
| Phase 5 – Move | Feb – Mar 2028; 3 activities; "Moved in by 13 March 2028, ahead of your first lease expiry" | Slide 5 | The move-in date must fall before the first lease expiry on slide 2 (31 March 2028 in the sample). |
| Track record intro | Recent relocations and renewals for financial services occupiers in Singapore. | Slide 6 | Match the client's sector. |
| Case study 1 | A regional bank \| A new 110,000 sq ft headquarters for 1,000 people \| 3 facts \| services | Slide 6 | Use only approved, anonymised case studies. Make sure the combination of sector, size and dates doesn't identify the client. Image slot R1. |
| Case study 2 | A global insurer \| Stay or go? A renewal that saved S$4.0M \| 3 facts \| services | Slide 6 | Sample calc: 62,000 sq ft × S$11.30 psf/mth opening offer × 8% × 72 months ≈ S$4.0M. Image slot R2. |
| Case study 3 | A digital payments company \| Fitted space for 350 people, secured in 9 weeks \| 3 facts \| services | Slide 6 | Image slot R3. |
| Track record note + link | Client names withheld for confidentiality. Sample case studies. / See more client stories → https://www.cbre.com.sg/insights | Slide 6 | Remove "Sample case studies." once they are real and approved. **Placeholder URL.** |
| Market heading | Market snapshot: Singapore office, Q3 2026 | Slide 7 | Change the sector or quarter. |
| KPI 1 | S$12.45 psf/mth – Grade A CBD rent, up 0.8% QoQ | Slide 7 | Must match the current published CBRE Research figures (and `[Template] Quarterly Market Outlook` for that quarter). |
| KPI 2 | 4.6% – Core CBD vacancy | Slide 7 | |
| KPI 3 | 312,000 sq ft – Net absorption, Q3 2026 | Slide 7 | |
| Market source line | Source: CBRE Research, Q3 2026 (sample data). | Slide 7 | Remove "(sample data)" only when the figures are verified. |
| Market commentary | Grade A rents are rising steadily… competing for commitments now. | Slide 7 | Two sentences, tailored to the client's timing. Have Research review it. |
| Market link | Read the latest market outlook → https://www.cbre.com.sg/insights | Slide 7 | **Placeholder URL.** Link to the current published report. |
| Fees label | Indicative – for discussion only | Slide 8 | **Must stay** unless the fees have been formally approved as a firm quote. |
| Fees intro | A phased fee structure, so you commit to each phase only when you're ready. | Slide 8 | |
| Fee rows (×5) | Strategy S$45,000; Search & Negotiation 1.0 month's gross rent*; Design & Build 3.5% of construction cost; Move S$28,000; Disbursements capped at S$5,000 | Slide 8 | **Sample figures and fee mechanisms only.** The engagement lead sets the real fees, approved under CBRE's fee approval process. Never present the sample fees to a client. |
| Fee footnote | *Reduced by any commission payable to CBRE by the landlord on the same transaction. | Slide 8 | Sample mechanism only. Replace it with the approved wording, or delete it. |
| Terms bullets | Indicative, excl. GST, subject to engagement letter; later phases confirmed in writing; 30-day payment; valid until 27 November 2026 | Slide 8 | Keep "excl. GST" (GST is currently 9%). The validity date is the pitch date plus about 60 days. |
| Next steps (×3) | Confirm scope and fees by Fri 9 Oct 2026; Sign engagement letter by Fri 16 Oct 2026; Kick-off workshop week of 19 Oct 2026 | Slide 9 | Dates must come after the pitch date and before the proposal expiry, and the kick-off must fall within the first month of Phase 1 (slide 5). Check the weekdays. |
| Thank-you line | Thank you for the opportunity. We'd welcome the chance to help you plan your next headquarters. | Slide 9 | |
| Contact card | Firstname Lastname, Executive Director, Advisory & Transaction Services, +65 6XXX XXXX, firstname.lastname@cbre.com | Slide 9 | Same person as team card 1. Reuse slot T1. |
| Contact URL | https://www.cbre.com.sg/contact-us | Slide 9 | **Placeholder.** Replace it with the business line's enquiry page, or delete it and keep only "Email the team". |
| "Email the team" link | mailto:firstname.lastname@cbre.com?subject=Office%20relocation%20proposal | Slide 9 | Use a team inbox or the engagement lead's email. Keep the subject URL-encoded. |
| Disclaimer | [Disclaimer placeholder — insert the approved CBRE Singapore disclaimer before publishing.] Sample wording… | Slides 8–9 | **Mandatory** (fees and market data). Get the approved wording from Legal/Compliance. Never send the pitch with the placeholder still in it. |
| Image disclaimer | Images are for illustration only. | Slides 8–9 | Keep it while any stock image is used. |
| Sample-content footer note | Sample content for template purposes only — replace before publishing. | All slides | Keep it in the template. **Delete it in each pitch copy** only after all content is replaced and checked. |

## Sample content

Everything below is fictional sample content for template purposes. The client, people, case studies, market figures and fees are invented or sample figures. No building or address is named.

### Navigation

- Nine slides; counter format "1 / 9"
- Dot labels (for accessibility): Cover · Our understanding of your brief · Why CBRE · Your team · Our approach · Relevant track record · Market snapshot · Fees & commercial terms · Next steps
- Arrow labels: Previous slide · Next slide

### Slide 1. Cover

- **Eyebrow:** Proposal | Office relocation advisory
- **Title (H1):** Your next headquarters, planned with confidence
- **Prepared for:** Prepared for [Client name], a regional financial services firm
- **Presented by:** Presented by CBRE Singapore | Advisory & Transaction Services
- **Date:** 29 September 2026
- **Label:** Strictly private and confidential
- **Button:** Start → slide 2
- **Image:** slot P1
- **Footer:** Sample content for template purposes only — replace before publishing.

### Slide 2. Our understanding of your brief

- **Heading:** Our understanding of your brief
- **Intro:** You want one modern headquarters that brings your Singapore teams together, supports hybrid work and keeps occupancy costs in check.

**Tab: Where you are today** (open by default)

- 720 people across two sites: a 68,000 sq ft CBD headquarters and a 21,000 sq ft operations centre in the city fringe
- Leases expire on 31 March 2028 (operations centre) and 30 June 2028 (headquarters)
- Hybrid working with three anchor days has cut average desk use to about 55%
- Ageing building services and too few meeting and collaboration spaces

**Tab: What you need**

- One Grade A headquarters of 70,000–75,000 sq ft for up to 800 people by 2030
- Annual gross rent at or below today's level of about S$11.0M
- BCA Green Mark Platinum certification and a direct MRT link
- A move completed before 31 March 2028, with no business disruption

- **Source line:** Based on our discovery meeting on 15 September 2026. Tell us if we've missed anything.
- **Image (optional):** slot P2

Internal consistency of the sample:

- Current space = 68,000 + 21,000 = 89,000 sq ft
- Current annual gross rent = (68,000 × S$11.20 + 21,000 × S$7.40) × 12 = (S$761,600 + S$155,400) × 12 = **S$11,004,000 ≈ S$11.0M**
- Target option = 72,000 sq ft × S$12.45 psf/mth (Grade A CBD, slide 7) × 12 = **S$10,756,800 ≈ S$10.8M** (within the cap)
- 72,000 sq ft ÷ 800 people = 90 sq ft per person

### Slide 3. Why CBRE

- **Heading:** Why CBRE
- **Intro:** Global reach, local depth, and one team accountable from strategy to move-in.

| Counter | End value | Prefix | Suffix | Label |
|---|---|---|---|---|
| 1 | 100 | | + | Countries and territories |
| 2 | 140,000 | | + | Employees worldwide |
| 3 | 1,200 | | + | Professionals in Singapore |
| 4 | 2.8 | | M sq ft | Office space leased for occupiers in Singapore since 2023 |

- **Sample line (visible):** Sample figures – replace with the latest approved CBRE figures.

### Slide 4. Your team

- **Heading:** Your team
- **Intro:** One senior team, with you from first workshop to move-in day.
- **Instruction:** Select a card to see each person's role.

| Card | Photo slot | Front: name | Front: role | Front: tag | Back: bio | Back: link |
|---|---|---|---|---|---|---|
| 1 | T1 | Firstname Lastname | Executive Director, Advisory & Transaction Services | Engagement lead | Leads the engagement and your negotiation strategy. 18 years advising banks, insurers and asset managers on their Singapore offices. | Email → `mailto:firstname.lastname@cbre.com` |
| 2 | T2 | Firstname Lastname | Director, Occupier Advisory | Day-to-day lead | Your day-to-day contact. Runs the market search, shortlisting and the financial comparison of every option, including staying put. | Email → `mailto:firstname.lastname@cbre.com` |
| 3 | T3 | Firstname Lastname | Associate Director, Workplace Strategy | Workplace strategy | Turns utilisation data and staff input into a space brief that fits how your people work in a hybrid model. | Email → `mailto:firstname.lastname@cbre.com` |
| 4 | T4 | Firstname Lastname | Senior Director, Project Management | Design & build | Manages design, fit-out, cost and the move itself, so your teams start work on day one without disruption. | Email → `mailto:firstname.lastname@cbre.com` |

Popup fallback button label: View profile

### Slide 5. Our approach

- **Heading:** Our approach
- **Intro:** Five phases, 18 months, one accountable team. Select a phase to see what happens and when.

| # | Phase | Timing | Activities | Deliverable |
|---|---|---|---|---|
| 1 (selected by default) | Strategy | Oct – Dec 2026 | Six-week workplace utilisation study and staff survey · Space brief, budget and decision criteria agreed with your steering committee · Renew-versus-relocate financial baseline | Accommodation strategy and space brief |
| 2 | Search | Jan – Mar 2027 | Market scan of every option that fits the brief, on and off market · Shortlist tours and requests for proposal to landlords · Side-by-side financial and qualitative comparison | Shortlist report with recommended options |
| 3 | Negotiation | Apr – Jun 2027 | Competitive negotiations with two to three landlords in parallel · Heads of terms covering rent, rent-free period, fit-out contribution and flexibility · Lease review support alongside your legal advisers | Signed letter of offer and lease |
| 4 | Design & Build | Jul 2027 – Jan 2028 | Design brief and design-and-build tender · Authority submissions and cost control · 20-week fit-out with weekly progress reports | A workplace ready for occupation |
| 5 | Move | Feb – Mar 2028 | Move planning, communications and change management · Weekend moves with day-one support · Reinstatement and handover of both existing sites by their lease expiries | Moved in by 13 March 2028, ahead of your first lease expiry |

Panel labels: "Timing", "What happens", "Deliverable". Duration check: October 2026 to March 2028 = 18 months. 13 March 2028 is a Monday, which leaves 18 days before the 31 March 2028 expiry.

### Slide 6. Relevant track record

- **Heading:** Relevant track record
- **Intro:** Recent relocations and renewals for financial services occupiers in Singapore.

| Slide | Image slot | Client descriptor | Headline | Fact 1 | Fact 2 | Fact 3 | Services |
|---|---|---|---|---|---|---|---|
| 1 | R1 | A regional bank | A new 110,000 sq ft headquarters for 1,000 people | Three sites consolidated into one Grade A building | Net effective rent 17% below the best renewal offer | Six months' rent-free and a fit-out contribution secured | Tenant representation, workplace strategy, project management |
| 2 | R2 | A global insurer | Stay or go? A renewal that saved S$4.0M | Renew-versus-relocate analysis of nine options | Rent 8% below the landlord's opening offer on 62,000 sq ft | Expansion and contraction rights built into a six-year term | Tenant representation, lease advisory |
| 3 | R3 | A digital payments company | Fitted space for 350 people, secured in 9 weeks | 32,000 sq ft of fitted space in the city fringe | Moved in 10 weeks after signing, with minimal fit-out spend | Right of first refusal on a further 10,000 sq ft | Tenant representation, workplace strategy |

- **Note (visible):** Client names withheld for confidentiality. Sample case studies.
- **Link:** See more client stories → https://www.cbre.com.sg/insights (new tab)

Sample calc for slide 2 of the carousel: 62,000 sq ft × S$11.30 psf/mth (opening offer) × 8% = S$56,048 a month × 72 months = S$4,035,456 ≈ **S$4.0M**.

### Slide 7. Market snapshot

- **Heading:** Market snapshot: Singapore office, Q3 2026

| KPI | End value | Prefix | Suffix | Label |
|---|---|---|---|---|
| 1 | 12.45 | S$ | psf/mth | Grade A CBD rent, up 0.8% QoQ |
| 2 | 4.6 | | % | Core CBD vacancy |
| 3 | 312,000 | | sq ft | Net absorption, Q3 2026 |

- **Source line:** Source: CBRE Research, Q3 2026 (sample data).
- **Subheading:** What it means for you
- **Commentary:** Grade A rents are rising steadily, and limited new Core CBD supply until 2028 will keep the best space tight. Starting your search about 18 months before you need to move gives you leverage: landlords with 2027–2028 vacancies are competing for commitments now.
- **Link:** Read the latest market outlook → https://www.cbre.com.sg/insights (new tab)

These sample figures match `[Template] Quarterly Market Outlook` (Office tab, Q3 2026).

### Slide 8. Fees & commercial terms

- **Heading:** Fees & commercial terms
- **Label (visible, next to heading):** Indicative – for discussion only
- **Intro:** A phased fee structure, so you commit to each phase only when you're ready.

| Phase | Scope | Fee basis | Indicative fee (excl. GST) |
|---|---|---|---|
| Strategy | Utilisation study, staff survey, space brief and financial baseline | Fixed fee | S$45,000 |
| Search & Negotiation | Market search, shortlist, landlord proposals, negotiation and lease support | Success fee on lease signing | 1.0 month's gross rent* |
| Design & Build | Project and cost management of design, fit-out and approvals | Percentage of fit-out cost | 3.5% of construction cost |
| Move | Move planning, change management and day-one support | Fixed fee | S$28,000 |
| Disbursements | Surveys, printing and out-of-pocket costs | At cost | Capped at S$5,000 |

- **Footnote:** *Reduced by any commission payable to CBRE by the landlord on the same transaction.
- **Terms:**
  - All fees are indicative, exclude GST and are subject to a signed engagement letter.
  - Fees for each later phase are confirmed in writing before that phase starts.
  - Invoices are payable within 30 days.
  - This proposal is valid until 27 November 2026.
- **Disclaimer line:** [Disclaimer placeholder: insert the approved CBRE Singapore disclaimer.]

For reference only, so whoever duplicates it can sense-check scale (not shown on screen): at the sample target option, 1.0 month's gross rent = 72,000 × S$12.45 = S$896,400.

### Slide 9. Next steps

- **Heading:** Next steps

| Step | Title | Line |
|---|---|---|
| 1 | Confirm scope and fees | By Friday, 9 October 2026. Tell us which phases you'd like us to quote firmly. |
| 2 | Sign the engagement letter | By Friday, 16 October 2026. |
| 3 | Kick-off workshop | Week of 19 October 2026. Agree the steering committee, timetable and survey plan. |

Date check: the kick-off (week of 19 October 2026) starts the Strategy phase (Oct – Dec 2026, slide 5), and all three steps fall between the pitch date (Tuesday, 29 September 2026) and the proposal expiry (Friday, 27 November 2026).

- **Closing line:** Thank you for the opportunity. We'd welcome the chance to help you plan your next headquarters.
- **Contact card:** photo (reuse slot T1) · Firstname Lastname · Executive Director, Advisory & Transaction Services · +65 6XXX XXXX · firstname.lastname@cbre.com
- **Primary button:** Contact us → https://www.cbre.com.sg/contact-us (new tab)
- **Secondary button:** Email the team → `mailto:firstname.lastname@cbre.com?subject=Office%20relocation%20proposal`

### Footer

On slides 8 and 9, in this order:

1. **Disclaimer (placeholder, mandatory):** "[Disclaimer placeholder — insert the approved CBRE Singapore disclaimer before publishing.] Sample wording: This proposal is confidential and prepared solely for the named recipient. Market information is indicative and based on sources believed to be reliable but not guaranteed. Fees and timings are indicative and subject to a signed engagement letter. Nothing in this proposal constitutes financial, investment, legal or tax advice."
2. **Image disclaimer:** Images are for illustration only.
3. **Sample note (visible):** Sample content for template purposes only — replace before publishing.

On slides 1 to 7: line 3 only, as a small footer note.

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** Whether to license images (this spends Adobe Stock credits on the CBRE account) or to use watermarked comp/preview images for the template is still to be decided by the user. **The executing session must ask before licensing any image.** Until then, use comps or the Ceros placeholders.

Search at https://stock.adobe.com/sg. Selection rules for this template:

- Singapore/Asia context; diverse people (Chinese, Malay, Indian and other backgrounds; mixed genders and ages).
- No visible third-party brands, logos, signage or legible screens.
- No identifiable real buildings, towers or landmarks. Use soft-focus or generic city views only, so nothing could be read as the client's building or a property CBRE is marketing.
- Exclude assets marked "Editorial use only".
- If CBRE policy disallows AI-generated stock, turn on the "Exclude generative AI" filter.
- Keep it light: nine slots, of which four are headshot placeholders. The approach, market and next-steps slides use icons and numbers, not photos.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| P1 – Cover | Bright, modern office or boardroom with floor-to-ceiling windows and a soft-focus city view; no people or a few out of focus; calm area for the title | `modern office interior floor to ceiling windows blurred city view` (alt: `empty boardroom bright city view daylight wide`) | Landscape 16:9, ≥ 2400 px wide | Bright, modern office with floor-to-ceiling windows overlooking the city |
| P2 – Brief (optional) | Small diverse group in a meeting room discussing documents with an advisor | `asian business team meeting room discussion documents advisor` | Landscape 3:2, ≥ 1600 px wide | Client and advisors discussing a brief in a meeting room |
| T1 – Team card 1 (and slide 9 contact) | **Placeholder only.** Professional headshot, neutral background | `asian businessman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Executive Director, Advisory & Transaction Services |
| T2 – Team card 2 | **Placeholder only.** Professional headshot | `malay businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Director, Occupier Advisory |
| T3 – Team card 3 | **Placeholder only.** Professional headshot | `indian businesswoman professional headshot studio neutral` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Associate Director, Workplace Strategy |
| T4 – Team card 4 | **Placeholder only.** Professional headshot | `mature asian businessman headshot grey background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Senior Director, Project Management |
| R1 – Track record 1 (regional bank) | Spacious, modern corporate office floor or reception, no signage | `modern office lobby reception area interior empty daylight` | Landscape 3:2, ≥ 1200 px wide | Modern corporate office reception area |
| R2 – Track record 2 (global insurer) | Glass-walled meeting room or workspace in an established office | `corporate meeting room glass walls modern office asia` | Landscape 3:2, ≥ 1200 px wide | Glass-walled meeting room in a modern office |
| R3 – Track record 3 (digital payments company) | Young, diverse team working in a fitted, contemporary office | `young diverse team working modern fitted office asia` | Landscape 3:2, ≥ 1200 px wide | Team working together in a contemporary fitted office |

**Team photos:** never publish stock faces next to real staff names. In every pitch copy, T1–T4 must be the named person's own approved CBRE headshot. For the template, keep neutral avatar placeholders rather than licensing four headshots; the queries above are only for comps if the user wants realistic previews.

**Track record images:** for live pitches, use the project's own approved photography if the client permits. Otherwise keep generic stock that can't be read as the client's premises, and keep the image disclaimer.

## QA checklist

- [ ] Brand kit is still **CBRE Test** and **unmodified**. No AI offer to change the brand kit was accepted, and no new brand kit was created.
- [ ] No colour, font or logo overrides were added to any element. If there was drift, follow-up 11 was applied.
- [ ] The experience is in the **CBRE Singapore** folder.
- [ ] The experience is named exactly `[Template] Client Pitch Presentation`.
- [ ] Tone and structure are consistent with the New Joiner Onboarding reference experience.
- [ ] All nine slides are present in the right order.
- [ ] Slide navigation works: the arrows move one slide at a time, every dot jumps to the right slide and marks it, the "1 / 9" counter updates, and there's no "previous" on slide 1 or "next" on slide 9 (or the full-screen-section fallback with sticky dots and Next buttons works).
- [ ] Swipe changes slides on mobile, and swiping inside the track-record carousel doesn't also change the slide.
- [ ] Cover "Start" goes to slide 2.
- [ ] Brief tabs switch correctly, with "Where you are today" open by default and four bullets per tab.
- [ ] Why CBRE counters animate (or fade in) once and end on exactly 100+, 140,000+, 1,200+ and 2.8M sq ft; the "Sample figures" line is visible.
- [ ] All four team cards flip on click/tap and back again (or the "View profile" popups open and close), and each "Email" link opens a `mailto:`.
- [ ] Approach: all five phases are clickable, Strategy is selected by default, and every panel shows the right timing, three activities and deliverable (or the tab/accordion fallback works).
- [ ] Track record carousel: three slides in order, arrows, dots and swipe work, no autoplay (or the cards/tabs fallback is used); the confidentiality note and link are present.
- [ ] Market snapshot KPIs end on exactly S$12.45 psf/mth, 4.6% and 312,000 sq ft, and the source line shows "(sample data)".
- [ ] Fees slide shows the **"Indicative – for discussion only"** label, all five table rows, the footnote, four terms bullets and the disclaimer placeholder; the table is readable on mobile (stacked cards or contained scroll).
- [ ] Figures agree across slides: lease expiries (31 Mar / 30 Jun 2028) vs move-in (13 Mar 2028); 18 months in the approach intro vs phase dates; pitch date (29 Sep 2026) vs validity (27 Nov 2026) vs next-step dates.
- [ ] All interactions were tested in preview on **desktop and mobile**: slide navigation, tabs, counters, flip cards, timeline, carousel, buttons and links.
- [ ] Mobile: every slide fits the screen width, with no overlapping or cut-off text and no page-level horizontal scroll.
- [ ] The **disclaimer placeholder** and the image disclaimer are visible on slides 8 and 9.
- [ ] The **"Sample content for template purposes only — replace before publishing."** footer note is visible on every slide, on desktop and mobile.
- [ ] CTAs and links point to placeholders: Contact us → https://www.cbre.com.sg/contact-us; See more client stories / Read the latest market outlook → https://www.cbre.com.sg/insights; emails → `mailto:firstname.lastname@cbre.com`. External links open in a new tab.
- [ ] Image placeholders have been replaced with the agreed images (licensed or comp, **per the user's decision**). No stock image was licensed without asking, and no stock faces are used as real team members.
- [ ] No third-party logos or brands, no identifiable real building or landmark, and no "Editorial use only" assets.
- [ ] Alt text is set on every image, including the four team photos, matching the image slots table.
- [ ] No real client names, real people, or real property names/addresses appear anywhere; the client stays as "[Client name], a regional financial services firm".
- [ ] Heading structure is one H1 (cover title) and an H2 per slide. Arrows and dots have accessible labels, and button/link labels are descriptive.
- [ ] Sharing settings for the template keep it unlisted/not indexed (if available), and the share title/description contain no client name or fees.
