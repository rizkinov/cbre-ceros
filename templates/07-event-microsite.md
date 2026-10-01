# [Template] Event Microsite

- **Slug:** `event-microsite`
- **Ceros starting point:** Free prompt
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline.
- **Experience name:** `[Template] Event Microsite`
- **Primary audience:** Invited guests of CBRE Singapore events: senior occupiers, investors, developers, landlords and partners. CBRE Singapore Marketing & Events (with the hosting business line) duplicates it for seminars, market briefings, launches and client receptions.
- **Est. build time:** 2.5–3.5 hours (about 20 min generation and refinement, 1 h content and interaction checks covering the countdown, calendar links, flip cards and accordions, 45 min images and alt text, 30–45 min QA)

## Purpose

This is a reusable invitation microsite for an in-person CBRE Singapore event. It replaces a static e-invite PDF with one link that carries the hero invitation, a live countdown, the reasons to attend, an agenda by time slot, speaker flip cards, venue and travel details, FAQs, and RSVP and add-to-calendar actions. For each new event, Marketing & Events duplicates the template, swaps in the event name, date, venue, agenda, speakers, FAQs and links, and then shares it by email invitation, LinkedIn and QR code. The sample event is the fictional "CBRE Singapore Real Estate Market Outlook 2027" half-day seminar.

## Ceros AI prompt

Before you paste:

1. Open the existing **New Joiner Onboarding** experience in the CBRE Singapore folder. Note its tone, section rhythm and how it uses components, so this build feels like part of the same family. If the generated result differs noticeably, adjust it with the follow-up prompts. Do not add any styling instructions.
2. In the "What will you build today?" box, set **Brand Kit = CBRE Test** and **Folder = CBRE Singapore**. Do not use a quick-start chip; this is a free prompt.
3. Paste the block below verbatim and generate. It is 2,454 characters (2,474 if the box counts each line break as two characters), under the assumed limit of about 2,500. If you edit it, re-count: the footer note is at the end, so a truncated paste would lose it.
4. If the AI offers to update, extend or modify the brand kit at any point, decline. Reply: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`
5. If the AI proposes a third-party countdown widget, external script or custom code, don't accept it. Ask the user first; until they decide, use the static date badge fallback (follow-up 1).
6. Rename the experience to `[Template] Event Microsite`.

```text
Create a responsive single-page event microsite for "CBRE Singapore Real Estate Market Outlook 2027", a half-day seminar. Use the selected brand kit's styles as-is. Tone: warm, professional, concise. Use labelled image placeholders only (no real venues, brands or landmarks).

Sections, in order:

1. Hero: eyebrow "CBRE Singapore | You're invited"; headline "Real Estate Market Outlook 2027"; subhead "A half-day seminar on where Singapore's property and capital markets are heading in 2027."; details "Thursday, 19 November 2026 | 8.30am–1.00pm SGT | The Halden Bay Hotel, Singapore"; a live countdown (days, hours, minutes, seconds) to 19 Nov 2026, 8.30am SGT (UTC+8), else a static date badge "THU 19 NOV 2026"; buttons "RSVP now" and "Add to calendar"; note "Complimentary. Seats are limited. RSVP by Friday, 6 November 2026."; image placeholder: seminar audience.

2. "Why attend": four cards, each an icon and one line: Hear the 2027 outlook first; Learn from decision-makers; Plan with confidence; Connect with peers.

3. "Agenda": accordion (one item open at a time), header = time + session, body = description and speakers: 8.30am Registration and networking breakfast | 9.15am Welcome address | 9.25am Keynote: Singapore Real Estate Market Outlook 2027 | 10.05am Panel 1: Where will occupiers go next? | 10.50am Coffee break | 11.10am Panel 2: Where is capital heading in 2027? | 11.55am Closing remarks | 12.05pm Networking lunch.

4. "Speakers": six flip cards. Front: photo placeholder, "Firstname Lastname", job title. Back: 2-sentence bio and session. Flip on hover or tap. Then "More speakers to be announced."

5. "Venue": "Halden Ballroom, Level 3, The Halden Bay Hotel, 12 Placeholder Boulevard, Singapore"; box labelled "Map embed placeholder"; button "Open in Google Maps"; getting-there notes (MRT, bus, parking, taxi, accessibility).

6. "FAQs": accordion of 8 questions (fee, audience, guests, confirmation, dress code, slides, photos, cancellation).

7. RSVP band: heading "Reserve your seat"; line "Seats are limited. RSVP by 6 November 2026."; buttons "RSVP now" and "Add to calendar". All "RSVP now" buttons open https://www.cbre.com.sg/contact-us in a new tab; I'll send calendar links next.

8. Footer: "[Disclaimer and PDPA notice placeholder: insert approved wording before publishing.]" and the visible note "Sample content for template purposes only — replace before publishing."

On mobile, stack cards in one column.
```

## Expected structure

After generation, check each section against this list. Use the follow-up prompts to fix anything missing.

1. **Hero**: full-width section with an image placeholder (seminar audience), eyebrow, H1 headline, subhead and a details line covering date, time and venue. It also contains:
   - **Countdown**: a live countdown with four labelled units (Days, Hours, Minutes, Seconds) that ticks every second and targets 19 Nov 2026, 08:30 SGT (2026-11-19T00:30:00Z), whatever the viewer's time zone. **Fallback:** a static date badge with three lines ("THU" / "19 NOV 2026" / "8.30am SGT").
   - **Buttons**: "RSVP now" opens the registration placeholder in a new tab. "Add to calendar" opens a popup (modal) with Google Calendar and Outlook buttons. **Fallback:** two text links under the button.
   - **RSVP note**: "Complimentary. Seats are limited. RSVP by Friday, 6 November 2026."
2. **Why attend**: four cards, 4-across or 2×2 on desktop and one column on mobile. Each card has an icon, a short title and one line of copy. The cards are static, with an optional entrance animation. *(Optional, from follow-up 3)* An "At a glance" row of four number counters that count up once when scrolled into view, with a networking image placeholder (slot N1). **Fallback:** static numbers.
3. **Agenda**: an accordion with eight items. Each header shows the time range and session title; clicking it expands or collapses the body. Only one item is open at a time, and the first is open by default. Each body has a description, speaker names (where relevant) and a location line. A note "Programme is subject to change." sits under the accordion.
4. **Speakers**: six flip cards (3×2 on desktop, one or two columns on mobile). The front shows a photo placeholder, "Firstname Lastname", job title and organisation. The back shows a 2-sentence bio and the session role. Cards flip on hover (desktop) and on tap (mobile/keyboard). **Fallback:** a static card front with a "Read bio" button that opens a popup with the bio and session. Under the grid: "More speakers to be announced."
5. **Venue**: two columns (stacked on mobile).
   - **Venue block**: venue name, room, address and an "Open in Google Maps" button that opens in a new tab.
   - **Getting there**: a list of five items (MRT, bus, car and parking, taxi/ride-hailing, accessibility).
   - **Map**: a clearly labelled "Map embed placeholder" box, using an embed component if available or an image placeholder otherwise.
   - **Venue image**: a placeholder.
6. **FAQs**: an accordion with eight items (ten with the two optional ones). All items are collapsed by default, and only one is open at a time.
7. **RSVP band**: a full-width band with the heading "Reserve your seat", one line of copy, two buttons ("RSVP now" and "Add to calendar", the latter opening the same popup as the hero) and a contact line with a `mailto:` link. *(Optional, from follow-up 8)* A decorative background image placeholder (slot R1).
8. **Footer**: the disclaimer and PDPA notice placeholder paragraph, a "Privacy notice" link and the visible sample-content note.
9. *(Optional, from follow-up 9)* **Navigation**: a slim top bar with anchor links to sections 2–6 and an "RSVP now" button, or a sticky "RSVP now" bar on mobile.

## Follow-up refinement prompts

Paste these one at a time in the AI chat after the first generation, and preview after each one. Skip any that the first pass already handled. None of them contain styling requests; if the AI offers brand kit changes, decline with: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`

**1. Countdown timer and fallback**

```text
Check the hero countdown. It must count down to Thursday 19 November 2026, 8.30am Singapore time (UTC+8), which is 2026-11-19T00:30:00Z, so it shows the same remaining time whatever the visitor's own time zone. Show four labelled units: Days, Hours, Minutes, Seconds, with the label "Starts in" above them. When it reaches zero, replace it with "The seminar is under way". After 1.00pm SGT on 19 November 2026 (2026-11-19T05:00:00Z), show "Thank you for joining us. Highlights coming soon." instead.

If a live countdown is not supported, or would need a third-party widget or custom script, remove it and show a static date badge in the same place with three lines: "THU", "19 NOV 2026", "8.30am SGT". Keep the full date and time line under the subhead either way.
```

**2. Add-to-calendar links**

```text
Make every "Add to calendar" button open a small popup titled "Add to your calendar" with a close button and two buttons, each opening in a new tab:

"Google Calendar" → https://calendar.google.com/calendar/render?action=TEMPLATE&text=CBRE%20Singapore%20Real%20Estate%20Market%20Outlook%202027&dates=20261119T003000Z/20261119T050000Z&details=Half-day%20seminar.%20Registration%20opens%208.30am%20SGT.&location=The%20Halden%20Bay%20Hotel%2C%2012%20Placeholder%20Boulevard%2C%20Singapore

"Outlook" → https://outlook.office.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&subject=CBRE%20Singapore%20Real%20Estate%20Market%20Outlook%202027&startdt=2026-11-19T08%3A30%3A00%2B08%3A00&enddt=2026-11-19T13%3A00%3A00%2B08%3A00&location=The%20Halden%20Bay%20Hotel%2C%2012%20Placeholder%20Boulevard%2C%20Singapore&body=Half-day%20seminar.%20Registration%20opens%208.30am%20SGT.

Under the two buttons add the line "Using another calendar? Save the date: Thursday, 19 November 2026, 8.30am–1.00pm SGT." If popups are not available, remove the "Add to calendar" buttons and show "Add to Google Calendar" and "Add to Outlook" as text links in their place, in the hero and in the RSVP band.
```

**3. Why attend copy and "At a glance" counters**

```text
Set the "Why attend" section to this copy. Intro under the heading: "One morning to get ready for the year ahead."

1. Hear the 2027 outlook first: "CBRE Research shares its forecasts for rents, vacancy, new supply and investment across Singapore's office, industrial, retail and residential sectors."
2. Learn from decision-makers: "Occupiers and investors explain how they are planning their space and capital for 2027."
3. Plan with confidence: "Take away practical insights for your leasing, workplace and investment decisions in the next budget cycle."
4. Connect with peers: "Meet around 250 senior business, finance and real estate leaders over breakfast, coffee and lunch."

Under the cards, add a row headed "At a glance" with four number counters that count up once when scrolled into view: 1 Keynote | 2 Panel discussions | 6+ Speakers | 250 Guests. If counters are not available, show the same numbers as static text.

Beside or under the "At a glance" row, add an image placeholder: diverse guests networking over coffee at a business event.
```

**4. Agenda accordion copy**

```text
Set the Agenda accordion to this exact content. Header = time range + title. Body = description, then "Speaker(s):" line where given, then "Location:" line. First item open by default, only one open at a time. Add the intro "Times are in Singapore time (SGT)." under the heading and the note "Programme is subject to change." under the accordion.

1. 8.30am–9.15am | Registration and networking breakfast. "Collect your name badge and join us for breakfast. Please have your QR code confirmation ready." Location: Ballroom Foyer, Level 3.
2. 9.15am–9.25am | Welcome address. "Opening remarks and the themes for the morning." Speaker: Firstname Lastname, Managing Director, CBRE Singapore. Location: Halden Ballroom.
3. 9.25am–10.05am | Keynote: Singapore Real Estate Market Outlook 2027. "Our forecasts for rents, vacancy, new supply and investment volumes across Singapore's key sectors, and the global and regional forces behind them." Speaker: Firstname Lastname, Head of Research, Singapore & Southeast Asia, CBRE. Location: Halden Ballroom.
4. 10.05am–10.50am | Panel 1: Where will occupiers go next? "How flight to quality, hybrid work, cost pressures and sustainability targets are shaping office and industrial space decisions in 2027." Moderator: Firstname Lastname, Executive Director, Advisory & Transaction Services, CBRE Singapore. Panellists: Firstname Lastname, Head of Real Estate & Workplace, Asia Pacific, a global technology company; more to be announced. Location: Halden Ballroom.
5. 10.50am–11.10am | Coffee break. "Refreshments and networking." Location: Ballroom Foyer, Level 3.
6. 11.10am–11.55am | Panel 2: Where is capital heading in 2027? "Investors discuss pricing, interest rates, cross-border capital flows and the sectors they favour in Singapore and the region." Moderator: Firstname Lastname, Executive Director, Capital Markets, CBRE Singapore. Panellists: Firstname Lastname, Chief Investment Officer, a regional real estate investment manager; more to be announced. Location: Halden Ballroom.
7. 11.55am–12.05pm | Closing remarks. "Key takeaways from the morning and what to watch in 2027." Speaker: Firstname Lastname, Managing Director, CBRE Singapore. Location: Halden Ballroom.
8. 12.05pm–1.00pm | Networking lunch. "Continue the conversation with speakers and fellow guests over a buffet lunch." Location: Ballroom Foyer, Level 3.
```

**5. Speaker flip cards**

```text
Set the six speaker flip cards to this content. Front: photo placeholder, name, job title, organisation. Back: bio, then the session in the form "Speaking at: ...". Add the intro "Meet the people sharing their view of 2027." under the heading, and keep "More speakers to be announced." under the grid.

1. Firstname Lastname | Managing Director | CBRE Singapore | "Firstname leads CBRE's business in Singapore across advisory, leasing, capital markets, valuation and property management. Firstname has more than 20 years of experience in Asia Pacific commercial real estate." | Speaking at: Welcome address and closing remarks
2. Firstname Lastname | Head of Research, Singapore & Southeast Asia | CBRE | "Firstname leads CBRE's research coverage of office, industrial, retail, residential and capital markets across Singapore and Southeast Asia. Firstname is a regular commentator on property market trends in regional media." | Speaking at: Keynote
3. Firstname Lastname | Executive Director, Advisory & Transaction Services | CBRE Singapore | "Firstname advises multinational and local occupiers on office strategy, lease negotiations and relocations. Firstname's team has completed more than 3 million sq ft of transactions in Singapore." | Speaking at: Panel 1 (moderator)
4. Firstname Lastname | Head of Real Estate & Workplace, Asia Pacific | A global technology company | "Firstname manages an office portfolio across 12 Asia Pacific markets for a global technology company. Firstname focuses on hybrid workplace design and sustainable fit-outs." | Speaking at: Panel 1
5. Firstname Lastname | Executive Director, Capital Markets | CBRE Singapore | "Firstname advises institutional investors, developers and funds on buying and selling commercial property in Singapore. Firstname has more than 15 years of capital markets experience in the region." | Speaking at: Panel 2 (moderator)
6. Firstname Lastname | Chief Investment Officer | A regional real estate investment manager | "Firstname sets investment strategy for a regional real estate investment manager with office, logistics and residential assets across Asia Pacific. Firstname previously held investment roles in Hong Kong and Sydney." | Speaking at: Panel 2

Cards flip on hover on desktop, and on tap or Enter key on mobile and keyboard. If flip cards are not available, show the front only with a "Read bio" button that opens a popup with the bio and session.
```

**6. Venue section and map**

```text
Update the Venue section:
Intro under the heading: "In the heart of the city, a short walk from the MRT."
Venue block: "The Halden Bay Hotel" / "Halden Ballroom, Level 3" / "12 Placeholder Boulevard, Singapore 0XXXXX".
Button "Open in Google Maps" → https://www.google.com/maps/search/?api=1&query=Singapore (new tab).
Map: keep a clearly labelled box "Map embed placeholder – replace with the venue's Google Maps embed". Use an embed component if available, but leave it without code; otherwise use an image placeholder with the same label. Do not embed a map of any real address.

"Getting there" list, one icon per item:
By MRT: "Halden Bay MRT station (Exit B), about a 5-minute sheltered walk to the hotel lobby."
By bus: "Several bus services stop on Placeholder Boulevard outside the hotel. Check a journey-planner app for routes."
By car: "Enter the hotel car park from Placeholder Boulevard (basement levels B1–B3). Parking charges apply at the hotel's rates."
By taxi or ride-hailing: "Set your drop-off to The Halden Bay Hotel, Main Lobby, then take the lifts to Level 3."
Accessibility: "Step-free access from the main lobby to Level 3 by lift, with accessible restrooms beside the ballroom. Let us know about any access needs when you RSVP."

Add an image placeholder of a hotel ballroom set up for a seminar, captioned "Image for illustration only."
```

**7. FAQ accordion copy**

```text
Set the FAQs accordion to these ten items, all collapsed by default, one open at a time:

1. Is there a fee to attend? "No. The seminar is complimentary for invited guests. Registration is required, and seats are confirmed on a first-come, first-served basis."
2. Who should attend? "Senior leaders responsible for real estate, workplace, finance, investment and business strategy in Singapore and the region."
3. Can I bring a colleague? "Each invitation admits one guest. To nominate a colleague, email the events team and we will confirm whether a seat is available."
4. When will I receive my confirmation? "Within three working days of registering. Your confirmation email includes a QR code; please show it at the registration desk."
5. What is the dress code? "Business attire."
6. Will the presentation slides be shared? "Registered attendees will receive a summary of the key slides by email within five working days after the event."
7. Will there be photography or filming? "Yes. CBRE will take photographs and video at the event for marketing and communications. If you prefer not to be photographed, please let our team know at registration. See our privacy notice for how we use personal data."
8. How do I cancel or change my registration? "Use the link in your confirmation email, or email the events team by Thursday, 12 November 2026, so we can offer your seat to a guest on the waitlist."
9. Will the event be livestreamed? "No. This is an in-person event only."
10. Can you cater for dietary requirements? "Yes. Please tell us about any dietary requirements or allergies when you register."

Under the accordion add: "Still have a question? Email firstname.lastname@cbre.com" with the address as a mailto link.
```

**8. RSVP band, disclaimer and footer**

```text
Update the RSVP band and footer.

RSVP band: heading "Reserve your seat"; body "Complimentary seats are limited and confirmed on a first-come, first-served basis. Please RSVP by Friday, 6 November 2026."; buttons "RSVP now" → https://www.cbre.com.sg/contact-us (new tab) and "Add to calendar" (same popup as the hero). Under the buttons: "Questions? Email firstname.lastname@cbre.com or call +65 6XXX XXXX." with the email as a mailto link. If the band supports a background image, add a decorative image placeholder of softly blurred city lights at dusk; otherwise skip it.

Footer, in this order:
1. "[Disclaimer and PDPA notice placeholder — insert the approved CBRE Singapore event disclaimer and personal data notice before publishing.] Sample wording: The views expressed at this seminar are for general information only and do not constitute investment, financial, legal or tax advice. CBRE may change the programme, speakers or venue without notice. Personal data you provide when you register will be used to manage your attendance and in line with CBRE's privacy notice."
2. A text link "Privacy notice" → https://www.cbre.com.sg (new tab).
3. "Sample content for template purposes only — replace before publishing."
Make sure all three are visible on desktop and mobile and not hidden behind any element.
```

**9. Navigation and mobile RSVP (optional)**

```text
Add a slim navigation bar at the top with anchor links "Why attend", "Agenda", "Speakers", "Venue", "FAQs" and an "RSVP now" button linking to https://www.cbre.com.sg/contact-us in a new tab. Keep it visible while scrolling if that is supported. On mobile, collapse the links into a menu but keep "RSVP now" visible, or add a sticky "RSVP now" bar at the bottom of the screen. If a persistent bar is not possible, add a "Back to top" link at the end of the Agenda, Speakers and FAQs sections instead.
```

**10. Accessibility and mobile pass**

```text
Do an accessibility and mobile pass: use one H1 (the hero headline) and an H2 for each section heading; give every image placeholder descriptive alt text; give the countdown an accessible label "Time remaining until the seminar starts" and make sure screen readers are not interrupted every second; make sure flip cards, accordion items, the calendar popup and its close button work with a keyboard; make button text descriptive (no "Click here"); and check that on mobile the why-attend cards, speaker cards, venue columns and RSVP buttons stack in a single column with no text overlapping or cut off.
```

**11. Reset styling drift (use only if needed)**

```text
Remove any custom styling you applied to individual elements and apply the selected brand kit's default styles consistently to all headings, body text, buttons, cards, accordions and popups. Do not create, change or update the brand kit itself.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | `[Template] Event Microsite` | Settings | When you duplicate it, rename to e.g. `Market Outlook 2027 Seminar – Invitation` and remove `[Template]`. |
| SEO / share title | CBRE Singapore Real Estate Market Outlook 2027 \| 19 November 2026 | Settings | Set in experience settings if available. |
| SEO / share description | Join CBRE Singapore on 19 November 2026 for a half-day seminar on the 2027 outlook for Singapore's property and capital markets. RSVP now. | Settings | Keep under about 160 characters. |
| Share image | Crop of hero image H1 | Settings | 1200 × 630 px. No text baked into the image. |
| Event full name | CBRE Singapore Real Estate Market Outlook 2027 | Prompt intro, calendar links, SEO | **Fictional sample.** Also update the `text=` / `subject=` parameter in both calendar links. |
| Hero eyebrow | CBRE Singapore \| You're invited | Hero | Use e.g. "CBRE Singapore \| Save the date" before invitations open. |
| Hero headline (H1) | Real Estate Market Outlook 2027 | Hero | Short event name; keep under about 40 characters for mobile. |
| Hero subhead | A half-day seminar on where Singapore's property and capital markets are heading in 2027. | Hero | One sentence: format + topic. |
| Event date | Thursday, 19 November 2026 | Hero details line, countdown target and end-state time, static date badge, both calendar links, calendar popup helper line, SEO title and description | Check the weekday. Update every place listed, then re-check the date cross-check table. The RSVP and cancellation deadlines are separate fields. |
| Event time and time zone | 8.30am–1.00pm SGT | Hero, agenda, calendar links | SGT = UTC+8. Keep the agenda start and end times consistent. |
| Countdown target | 2026-11-19T08:30:00+08:00 (= 2026-11-19T00:30:00Z) | Hero | Set to the registration start time. After the event, the countdown should show the post-event message (follow-up 1). Once the sample date has passed, the template itself shows the post-event message, so move the sample date forward before demoing the template. |
| Countdown end-state messages | The seminar is under way / Thank you for joining us. Highlights coming soon. | Hero | Update or unpublish the microsite after the event. |
| Static date badge (fallback) | THU / 19 NOV 2026 / 8.30am SGT | Hero | Only if the live countdown is not used. |
| Venue (short) | The Halden Bay Hotel, Singapore | Hero | **Invented sample.** |
| RSVP note | Complimentary. Seats are limited. RSVP by Friday, 6 November 2026. | Hero | Usually 10–14 days before the event. |
| RSVP deadline | Friday, 6 November 2026 | Hero note, RSVP band body | Check the weekday. |
| Cancellation deadline | Thursday, 12 November 2026 | FAQ 8 | About one week before the event. Check the weekday. |
| Section headings | Why attend · Agenda · Speakers · Venue · FAQs · Reserve your seat | Sections 2–7 | Keep in sync with the navigation labels. |
| Hero image | Seminar audience, speaker on stage | Hero | Image slot H1. Swap for a photo from a previous CBRE event if approved (with consent of anyone identifiable). |
| RSVP URL | https://www.cbre.com.sg/contact-us | Hero, RSVP band, nav | **Placeholder.** Replace with the real registration page (the approved events/registration platform). Don't build a data-capture form in Ceros without Marketing and Legal (PDPA) approval. Add UTM parameters if Marketing uses them. |
| Calendar popup title and helper line | Add to your calendar / Using another calendar? Save the date: Thursday, 19 November 2026, 8.30am–1.00pm SGT. | Calendar popup | The helper line repeats the event date and time. |
| Add to calendar – Google | See follow-up 2 / Sample content | Calendar popup | Update `text`, `dates` (in UTC, `YYYYMMDDTHHMMSSZ/…`), `details` and `location`. Use URL encoding (space = `%20`, comma = `%2C`). |
| Add to calendar – Outlook | See follow-up 2 / Sample content | Calendar popup | Update `subject`, `startdt`, `enddt` (`+08:00` encoded as `%2B08%3A00`), `location` and `body`. If the registration platform issues an .ics file, link to it instead, labelled "Apple / other calendars (.ics)". |
| Why attend heading and intro | Why attend / One morning to get ready for the year ahead. | Why attend | |
| Why attend cards (×4) | Hear the 2027 outlook first; Learn from decision-makers; Plan with confidence; Connect with peers (+ one line each) | Why attend | Keep each line under about 25 words. Icons come from the Ceros icon library, not stock. |
| At a glance counters (×4, optional) | 1 Keynote; 2 Panel discussions; 6+ Speakers; 250 Guests | Why attend | Must match the agenda and speaker grid. Use the expected headcount, not the invite count. |
| Networking image (optional) | Guests networking over coffee | Why attend | Image slot N1. |
| Agenda intro and note | Times are in Singapore time (SGT). / Programme is subject to change. | Agenda | |
| Agenda items (×8) | 8.30am Registration … 12.05pm Networking lunch | Agenda | Each needs a time range, title, description and location; add speakers where relevant. Times must run continuously with no gaps or overlaps. |
| Speakers intro and TBA line | Meet the people sharing their view of 2027. / More speakers to be announced. | Speakers | Delete the TBA line once the line-up is final. |
| Speaker cards (×6) | Firstname Lastname, title, organisation, bio, session | Speakers | **Placeholders.** Use real, approved names, titles and headshots only, with each speaker's written approval of their bio. Name a guest speaker's organisation only with that organisation's consent; otherwise keep "a global technology company" style. Add or remove cards to match the line-up. |
| Venue intro | In the heart of the city, a short walk from the MRT. | Venue | Check that it is true for the real venue. |
| Venue name | The Halden Bay Hotel | Hero, Venue, calendar links | **Invented sample.** Find and replace every instance, including the calendar link `location` parameters. |
| Room | Halden Ballroom, Level 3 | Venue, agenda locations | |
| Address | 12 Placeholder Boulevard, Singapore 0XXXXX | Venue, calendar links | **Invented sample.** Use the full address with its 6-digit postal code when live. |
| Map embed | Map embed placeholder box | Venue | Replace with the venue's Google Maps embed (Google Maps → Share → Embed a map → copy the iframe). Give the iframe the title "Map showing the location of [venue name]". |
| Google Maps button URL | https://www.google.com/maps/search/?api=1&query=Singapore | Venue | Replace `query=` with the URL-encoded venue name and address. |
| Getting there notes (×5) | MRT, bus, car, taxi, accessibility | Venue | **Invented sample** (e.g. "Halden Bay MRT"). Check every detail with the venue. Remove any that don't apply. |
| Venue image and caption | Hotel ballroom set up for a seminar / Image for illustration only. | Venue | Image slot V1. Use the venue's own approved photo if it provides one (check usage rights), and remove the caption if it shows the actual venue. |
| FAQ items (×8 + 2 optional) | See Sample content | FAQs | Update the cancellation deadline (FAQ 8) and the slide-sharing promise (FAQ 6) for each event. |
| FAQ closing line | Still have a question? Email firstname.lastname@cbre.com | FAQs | **Placeholder** address; `mailto:` link. |
| Events team contact | firstname.lastname@cbre.com / +65 6XXX XXXX | FAQs, RSVP band | **Placeholder.** Use the approved team mailbox and number. |
| RSVP band heading and body | Reserve your seat / Complimentary seats are limited… | RSVP band | The body repeats the RSVP deadline. |
| RSVP band background (optional) | Blurred city lights at dusk | RSVP band | Image slot R1. Decorative. |
| Disclaimer and PDPA notice | [Disclaimer and PDPA notice placeholder — …] + sample wording | Footer | **Mandatory.** Get approved wording from Legal/Compliance, and include the PDPA personal-data notice for registration and photography. Never publish with the placeholder. |
| Privacy notice link | https://www.cbre.com.sg | Footer, FAQ 7 | **Placeholder.** Replace with the CBRE Singapore privacy notice URL. |
| Sample-content footer note | Sample content for template purposes only — replace before publishing. | Footer | Keep it in the template. **Delete it in the published copy** only after all content is replaced and verified. |
| Navigation labels (optional) | Why attend · Agenda · Speakers · Venue · FAQs · RSVP now | Nav | Keep in sync with section headings. |

## Sample content

All names, venues, addresses, numbers and links below are fictional sample values for template purposes.

### 1. Hero

- **Eyebrow:** CBRE Singapore | You're invited
- **Headline (H1):** Real Estate Market Outlook 2027
- **Subhead:** A half-day seminar on where Singapore's property and capital markets are heading in 2027.
- **Details line:** Thursday, 19 November 2026 | 8.30am–1.00pm SGT | The Halden Bay Hotel, Singapore
- **Countdown:**
  - Label: Starts in
  - Units: Days · Hours · Minutes · Seconds
  - Target: 2026-11-19T08:30:00+08:00 (2026-11-19T00:30:00Z)
- **Countdown end states:**
  - From the start time: "The seminar is under way"
  - After 1.00pm SGT on 19 November 2026 (2026-11-19T05:00:00Z): "Thank you for joining us. Highlights coming soon."
- **Static date badge (fallback):** THU / 19 NOV 2026 / 8.30am SGT
- **Primary button:** RSVP now → https://www.cbre.com.sg/contact-us (new tab; placeholder for the registration page)
- **Secondary button:** Add to calendar → opens the calendar popup
- **Note:** Complimentary. Seats are limited. RSVP by Friday, 6 November 2026.
- **Image:** slot H1 (seminar audience)

**Calendar popup**

- **Title:** Add to your calendar
- **Button "Google Calendar":**
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=CBRE%20Singapore%20Real%20Estate%20Market%20Outlook%202027&dates=20261119T003000Z/20261119T050000Z&details=Half-day%20seminar.%20Registration%20opens%208.30am%20SGT.&location=The%20Halden%20Bay%20Hotel%2C%2012%20Placeholder%20Boulevard%2C%20Singapore`
- **Button "Outlook":**
  `https://outlook.office.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&subject=CBRE%20Singapore%20Real%20Estate%20Market%20Outlook%202027&startdt=2026-11-19T08%3A30%3A00%2B08%3A00&enddt=2026-11-19T13%3A00%3A00%2B08%3A00&location=The%20Halden%20Bay%20Hotel%2C%2012%20Placeholder%20Boulevard%2C%20Singapore&body=Half-day%20seminar.%20Registration%20opens%208.30am%20SGT.`
- **Helper line:** Using another calendar? Save the date: Thursday, 19 November 2026, 8.30am–1.00pm SGT.
- **Text-link fallback labels:** Add to Google Calendar · Add to Outlook

### 2. Why attend

- **Heading:** Why attend
- **Intro:** One morning to get ready for the year ahead.

| Card | Title | Line | Icon suggestion |
|---|---|---|---|
| 1 | Hear the 2027 outlook first | CBRE Research shares its forecasts for rents, vacancy, new supply and investment across Singapore's office, industrial, retail and residential sectors. | Line chart / trend |
| 2 | Learn from decision-makers | Occupiers and investors explain how they are planning their space and capital for 2027. | Microphone / discussion |
| 3 | Plan with confidence | Take away practical insights for your leasing, workplace and investment decisions in the next budget cycle. | Checklist / target |
| 4 | Connect with peers | Meet around 250 senior business, finance and real estate leaders over breakfast, coffee and lunch. | People / handshake |

**At a glance (optional counters)**

| Counter | End value | Suffix | Label |
|---|---|---|---|
| 1 | 1 | | Keynote |
| 2 | 2 | | Panel discussions |
| 3 | 6 | + | Speakers |
| 4 | 250 | | Guests |

- **Image (optional):** slot N1 (guests networking over coffee)

### 3. Agenda

- **Heading:** Agenda
- **Intro:** Times are in Singapore time (SGT).
- **Note under accordion:** Programme is subject to change.

| # | Time | Session (header) | Description (body) | Speaker(s) | Location |
|---|---|---|---|---|---|
| 1 (open by default) | 8.30am–9.15am | Registration and networking breakfast | Collect your name badge and join us for breakfast. Please have your QR code confirmation ready. | — | Ballroom Foyer, Level 3 |
| 2 | 9.15am–9.25am | Welcome address | Opening remarks and the themes for the morning. | Firstname Lastname, Managing Director, CBRE Singapore | Halden Ballroom |
| 3 | 9.25am–10.05am | Keynote: Singapore Real Estate Market Outlook 2027 | Our forecasts for rents, vacancy, new supply and investment volumes across Singapore's key sectors, and the global and regional forces behind them. | Firstname Lastname, Head of Research, Singapore & Southeast Asia, CBRE | Halden Ballroom |
| 4 | 10.05am–10.50am | Panel 1: Where will occupiers go next? | How flight to quality, hybrid work, cost pressures and sustainability targets are shaping office and industrial space decisions in 2027. | Moderator: Firstname Lastname, Executive Director, Advisory & Transaction Services, CBRE Singapore. Panellists: Firstname Lastname, Head of Real Estate & Workplace, Asia Pacific, a global technology company; more to be announced. | Halden Ballroom |
| 5 | 10.50am–11.10am | Coffee break | Refreshments and networking. | — | Ballroom Foyer, Level 3 |
| 6 | 11.10am–11.55am | Panel 2: Where is capital heading in 2027? | Investors discuss pricing, interest rates, cross-border capital flows and the sectors they favour in Singapore and the region. | Moderator: Firstname Lastname, Executive Director, Capital Markets, CBRE Singapore. Panellists: Firstname Lastname, Chief Investment Officer, a regional real estate investment manager; more to be announced. | Halden Ballroom |
| 7 | 11.55am–12.05pm | Closing remarks | Key takeaways from the morning and what to watch in 2027. | Firstname Lastname, Managing Director, CBRE Singapore | Halden Ballroom |
| 8 | 12.05pm–1.00pm | Networking lunch | Continue the conversation with speakers and fellow guests over a buffet lunch. | — | Ballroom Foyer, Level 3 |

### 4. Speakers

- **Heading:** Speakers
- **Intro:** Meet the people sharing their view of 2027.
- **Under grid:** More speakers to be announced.
- **Fallback button label (if no flip cards):** Read bio

| Card | Name (front) | Job title (front) | Organisation (front) | Bio (back) | Session (back) |
|---|---|---|---|---|---|
| 1 | Firstname Lastname | Managing Director | CBRE Singapore | Firstname leads CBRE's business in Singapore across advisory, leasing, capital markets, valuation and property management. Firstname has more than 20 years of experience in Asia Pacific commercial real estate. | Speaking at: Welcome address and closing remarks |
| 2 | Firstname Lastname | Head of Research, Singapore & Southeast Asia | CBRE | Firstname leads CBRE's research coverage of office, industrial, retail, residential and capital markets across Singapore and Southeast Asia. Firstname is a regular commentator on property market trends in regional media. | Speaking at: Keynote |
| 3 | Firstname Lastname | Executive Director, Advisory & Transaction Services | CBRE Singapore | Firstname advises multinational and local occupiers on office strategy, lease negotiations and relocations. Firstname's team has completed more than 3 million sq ft of transactions in Singapore. | Speaking at: Panel 1 (moderator) |
| 4 | Firstname Lastname | Head of Real Estate & Workplace, Asia Pacific | A global technology company | Firstname manages an office portfolio across 12 Asia Pacific markets for a global technology company. Firstname focuses on hybrid workplace design and sustainable fit-outs. | Speaking at: Panel 1 |
| 5 | Firstname Lastname | Executive Director, Capital Markets | CBRE Singapore | Firstname advises institutional investors, developers and funds on buying and selling commercial property in Singapore. Firstname has more than 15 years of capital markets experience in the region. | Speaking at: Panel 2 (moderator) |
| 6 | Firstname Lastname | Chief Investment Officer | A regional real estate investment manager | Firstname sets investment strategy for a regional real estate investment manager with office, logistics and residential assets across Asia Pacific. Firstname previously held investment roles in Hong Kong and Sydney. | Speaking at: Panel 2 |

### 5. Venue

- **Heading:** Venue
- **Intro:** In the heart of the city, a short walk from the MRT.
- **Venue name:** The Halden Bay Hotel
- **Room:** Halden Ballroom, Level 3
- **Address:** 12 Placeholder Boulevard, Singapore 0XXXXX
- **Button:** Open in Google Maps → https://www.google.com/maps/search/?api=1&query=Singapore (new tab; placeholder)
- **Map placeholder label:** Map embed placeholder – replace with the venue's Google Maps embed
- **Venue image:** slot V1 (hotel ballroom set up for a seminar)
- **Venue image caption:** Image for illustration only.

**Getting there**

| Item | Copy |
|---|---|
| By MRT | Halden Bay MRT station (Exit B), about a 5-minute sheltered walk to the hotel lobby. |
| By bus | Several bus services stop on Placeholder Boulevard outside the hotel. Check a journey-planner app for routes. |
| By car | Enter the hotel car park from Placeholder Boulevard (basement levels B1–B3). Parking charges apply at the hotel's rates. |
| By taxi or ride-hailing | Set your drop-off to The Halden Bay Hotel, Main Lobby, then take the lifts to Level 3. |
| Accessibility | Step-free access from the main lobby to Level 3 by lift, with accessible restrooms beside the ballroom. Let us know about any access needs when you RSVP. |

### 6. FAQs

- **Heading:** FAQs
- **Under accordion:** Still have a question? Email firstname.lastname@cbre.com (`mailto:` link)

| # | Question | Answer |
|---|---|---|
| 1 | Is there a fee to attend? | No. The seminar is complimentary for invited guests. Registration is required, and seats are confirmed on a first-come, first-served basis. |
| 2 | Who should attend? | Senior leaders responsible for real estate, workplace, finance, investment and business strategy in Singapore and the region. |
| 3 | Can I bring a colleague? | Each invitation admits one guest. To nominate a colleague, email the events team and we will confirm whether a seat is available. |
| 4 | When will I receive my confirmation? | Within three working days of registering. Your confirmation email includes a QR code; please show it at the registration desk. |
| 5 | What is the dress code? | Business attire. |
| 6 | Will the presentation slides be shared? | Registered attendees will receive a summary of the key slides by email within five working days after the event. |
| 7 | Will there be photography or filming? | Yes. CBRE will take photographs and video at the event for marketing and communications. If you prefer not to be photographed, please let our team know at registration. See our privacy notice for how we use personal data. |
| 8 | How do I cancel or change my registration? | Use the link in your confirmation email, or email the events team by Thursday, 12 November 2026, so we can offer your seat to a guest on the waitlist. |
| 9 (optional) | Will the event be livestreamed? | No. This is an in-person event only. |
| 10 (optional) | Can you cater for dietary requirements? | Yes. Please tell us about any dietary requirements or allergies when you register. |

### 7. RSVP band

- **Heading:** Reserve your seat
- **Body:** Complimentary seats are limited and confirmed on a first-come, first-served basis. Please RSVP by Friday, 6 November 2026.
- **Primary button:** RSVP now → https://www.cbre.com.sg/contact-us (new tab; placeholder)
- **Secondary button:** Add to calendar → calendar popup
- **Contact line:** Questions? Email firstname.lastname@cbre.com or call +65 6XXX XXXX.
- **Background (optional):** slot R1 (decorative; blurred city lights at dusk)

### 8. Footer

- **Disclaimer and PDPA notice (placeholder, mandatory):** "[Disclaimer and PDPA notice placeholder — insert the approved CBRE Singapore event disclaimer and personal data notice before publishing.] Sample wording: The views expressed at this seminar are for general information only and do not constitute investment, financial, legal or tax advice. CBRE may change the programme, speakers or venue without notice. Personal data you provide when you register will be used to manage your attendance and in line with CBRE's privacy notice."
- **Link:** Privacy notice → https://www.cbre.com.sg (new tab; placeholder)
- **Sample note (visible):** Sample content for template purposes only — replace before publishing.

### Optional navigation labels

Why attend · Agenda · Speakers · Venue · FAQs · RSVP now

### Date and time cross-check (sample event)

| Item | Value | Weekday check |
|---|---|---|
| Event | 19 November 2026, 8.30am–1.00pm SGT (00:30–05:00 UTC) | Thursday |
| RSVP deadline | 6 November 2026 | Friday |
| Cancellation deadline (FAQ 8) | 12 November 2026 (one week before the event) | Thursday |

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** The user hasn't yet decided whether to license images, which spends Adobe Stock credits on the CBRE account, or to use watermarked comp/preview images for the template. **The executing session must ask before licensing any image.** Until then, use comps or the Ceros placeholders.

Search at https://stock.adobe.com/sg. Selection rules:

- Singapore/Asia context; diverse people (Chinese, Malay, Indian and other backgrounds; mixed genders and ages).
- No visible third-party brands, logos, hotel names or legible slides/screens.
- No identifiable real hotel interiors or landmarks. The venue is fictional, so it must not look like a specific real hotel.
- Exclude assets marked "Editorial use only".
- If CBRE policy disallows AI-generated stock, turn on the "Exclude generative AI" filter.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| H1 – Hero | Audience seen from behind at a business seminar, speaker on a stage, blank or blurred screen, space for text | `business seminar audience asia conference hall stage` (alt: `conference audience back view speaker stage blurred`) | Landscape 16:9, ≥ 2400 px wide | Audience listening to a speaker at a business seminar |
| N1 – Why attend / At a glance (optional) | Diverse guests networking over coffee at a business event, natural expressions, no name badges legible | `diverse asian business people networking coffee break conference` | Landscape 3:2, ≥ 1600 px wide | Guests networking over coffee at a business event |
| W1–W4 – Why attend icons | **Not stock.** Use icons from the Ceros icon library (chart, microphone, checklist, people) so they follow the brand kit | — | Icon | Decorative (empty alt), since the card titles carry the meaning |
| SP1 – Speaker 1 | **Placeholder only.** Professional headshot, neutral background | `senior asian businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Managing Director, CBRE Singapore |
| SP2 – Speaker 2 | **Placeholder only.** Professional headshot | `chinese businessman professional headshot studio neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Head of Research, Singapore & Southeast Asia, CBRE |
| SP3 – Speaker 3 | **Placeholder only.** Professional headshot | `indian businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Executive Director, Advisory & Transaction Services, CBRE Singapore |
| SP4 – Speaker 4 | **Placeholder only.** Professional headshot | `malay businessman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Head of Real Estate & Workplace, Asia Pacific |
| SP5 – Speaker 5 | **Placeholder only.** Professional headshot | `asian businesswoman executive portrait studio neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Executive Director, Capital Markets, CBRE Singapore |
| SP6 – Speaker 6 | **Placeholder only.** Professional headshot | `mature businessman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Chief Investment Officer |
| V1 – Venue | Generic hotel ballroom set up theatre-style for a seminar, stage and screen, no hotel branding or signage | `hotel ballroom conference setup theatre seating stage empty` | Landscape 3:2, ≥ 1600 px wide | Hotel ballroom set up with theatre-style seating for a seminar |
| M1 – Map | **Not stock.** Google Maps embed of the actual venue (added when duplicated); placeholder box in the template | — | Embed, about 16:9 | Iframe title: "Map showing the location of [venue name]" |
| R1 – RSVP band background (optional) | Softly blurred city lights at dusk, abstract, no identifiable skyline or landmark | `blurred city lights dusk bokeh abstract asia` | Landscape 16:9, ≥ 2400 px wide | Decorative (empty alt) |
| S1 – Social share image | Crop of H1 | — | 1200 × 630 px | — |

**Speaker photos:** never publish stock faces next to real names. In any published copy, SP1–SP6 must be each speaker's own approved headshot. For the template, consider keeping a neutral avatar placeholder instead of licensing headshots.

**Event photos:** if you use photos from a previous CBRE event in place of H1 or N1, confirm that attendees consented to marketing use (per the event's PDPA notice) and that no client logos or slides are visible.

## QA checklist

- [ ] The brand kit is still **CBRE Test** and **unmodified**. No AI offer to change the brand kit was accepted, and no new brand kit was created.
- [ ] No colour, font or logo overrides were added to any element. If there was drift, follow-up 11 was applied.
- [ ] The experience is in the **CBRE Singapore** folder.
- [ ] The experience is named exactly `[Template] Event Microsite`.
- [ ] Tone and structure are consistent with the New Joiner Onboarding reference experience.
- [ ] All eight sections are present in order (nine with the optional navigation).
- [ ] **Countdown:** it shows Days/Hours/Minutes/Seconds and ticks. The remaining time matches a manual calculation to 19 Nov 2026, 08:30 SGT (test with the computer's time zone set to something other than Singapore if possible). The end-state messages are configured. **Or** the static date badge "THU / 19 NOV 2026 / 8.30am SGT" is shown instead.
- [ ] No third-party countdown widget, external script or custom code was added without the user's approval.
- [ ] **Add to calendar:** the popup (or text-link fallback) works in the hero and the RSVP band. The Google Calendar link opens a pre-filled event for 19 Nov 2026, 8.30am–1.00pm SGT. The Outlook link opens a pre-filled event with the same times. Each was tested in a browser signed in to that service.
- [ ] Hero, RSVP band (and nav if added) "RSVP now" buttons all open https://www.cbre.com.sg/contact-us in a new tab.
- [ ] Agenda accordion: eight items with continuous times from 8.30am to 1.00pm, first open by default, one open at a time, with a location line on every item.
- [ ] Speakers: six flip cards flip on hover (desktop) and tap (mobile), or the "Read bio" popup fallback works. Bios fit on the card back without being cut off. The "More speakers to be announced." line is present.
- [ ] Venue: the map placeholder is clearly labelled (no map of a real address is embedded). The "Open in Google Maps" button opens in a new tab. All five getting-there items are present.
- [ ] FAQs: eight to ten items, collapsed by default, one open at a time. The `mailto:` link works.
- [ ] All interactions were tested in preview on **desktop and mobile**: countdown, calendar popup, flip cards, both accordions, anchor links, buttons and the nav if added.
- [ ] Mobile: cards, speaker grid and venue columns stack in one column; nothing is overlapping, cut off or scrolling horizontally; the RSVP button is easy to reach.
- [ ] The **disclaimer and PDPA notice placeholder** paragraph and the "Privacy notice" link are present and visible in the footer.
- [ ] The **"Sample content for template purposes only — replace before publishing."** footer note is visible on desktop and mobile.
- [ ] CTAs and links point to placeholders: RSVP → https://www.cbre.com.sg/contact-us; Privacy notice → https://www.cbre.com.sg; Google Maps → search placeholder. External links open in a new tab.
- [ ] Dates and weekdays match the cross-check table everywhere: hero details line, countdown or date badge, RSVP note, RSVP band, FAQ 8, calendar links, calendar popup helper line and SEO title/description.
- [ ] Image placeholders have been replaced with the agreed images (licensed or comp, **per the user's decision**). No stock image was licensed without asking.
- [ ] No third-party logos or brands, no identifiable real hotel or landmark, and no "Editorial use only" assets.
- [ ] Alt text is set on every image, matching the image slots table. Decorative images have empty alt text.
- [ ] If the optional RSVP band background (R1) is used, the text over it is readable on desktop and mobile. If it isn't, remove the background image; don't change colours.
- [ ] No real client names, real people or real property, hotel or venue names/addresses appear anywhere (sample venue "The Halden Bay Hotel, 12 Placeholder Boulevard" is invented).
- [ ] Heading structure is one H1 and an H2 per section. Button labels are descriptive.
