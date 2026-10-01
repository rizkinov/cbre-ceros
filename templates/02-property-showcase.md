# [Template] Property Showcase

- **Slug:** `property-showcase`
- **Ceros starting point:** Free prompt
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline.
- **Experience name:** `[Template] Property Showcase`
- **Primary audience:** Prospective tenants and purchasers (corporate real estate heads, office managers, occupier representatives and co-broking agents) evaluating a single commercial building. The CBRE Singapore leasing/sales teams (Advisory & Transaction Services) and Marketing duplicate it for each property mandate.
- **Est. build time:** 4–5 hours (about 25 min generation and refinement, 1.5 h hotspots/table/carousel checks, 1.5 h images and map, 45 min QA)

## Purpose

This is a single-building leasing (or sales) microsite that agents can send to prospects in place of a static PDF brochure. It shows the building at a glance, lets prospects explore key spaces through an interactive floor plan with hotspots, and covers location, gallery, live availability and the agent team, with a clear enquiry CTA throughout. For each new mandate, the leasing team duplicates the template and replaces the building name, specs, plans, images, availability and contacts. The sample building "One Marina Gateway" is entirely fictional.

## Ceros AI prompt

Before you paste:

1. Open the existing **New Joiner Onboarding** experience in the CBRE Singapore folder. Note its tone, section rhythm and how it uses components, so this build feels like part of the same family. If the generated result differs noticeably, adjust it with the follow-up prompts. Do not add any styling instructions.
2. In the "What will you build today?" box, set **Brand Kit = CBRE Test** and **Folder = CBRE Singapore**.
3. Paste the block below verbatim and generate.
4. If the AI offers to update, extend or modify the brand kit at any point, decline. Reply: `No thanks. Keep the selected brand kit exactly as it is and do not modify it.`
5. Rename the experience to `[Template] Property Showcase`.

```text
Create a responsive single-page leasing microsite for a Grade A office building, "One Marina Gateway", 8 Example Street, Singapore. Use the selected brand kit's styles as-is. Tone: confident, premium, factual. Use labelled image placeholders only (no recognisable real buildings or landmarks).

Sections, in order:

1. Hero: full-width building image placeholder captioned "Artist's impression"; eyebrow "For lease | Singapore CBD"; headline "One Marina Gateway"; subhead "Column-free Grade A offices designed for how teams work now. Whole and part floors from 3,200 sq ft."; buttons "Enquire now" (https://www.cbre.com.sg/contact-us) and "View availability" (scrolls to section 6).

2. "Building at a glance": six spec tiles (icon, value, label): approx. 720,000 sq ft net lettable area; approx. 24,000 sq ft column-free typical floor plate; 3.2 m ceiling height; Platinum sustainability rating; completed 2025; 260 parking lots incl. 30 EV charging.

3. "Explore the building": large building cutaway image placeholder with five numbered hotspots; each opens a popup with title, two sentences, image placeholder and close button. Hotspots: Grand Lobby; Typical Office Floor; Pantry & Breakout; Sky Terrace; End-of-Trip Facilities.

4. "Location & connectivity": two columns. Left: travel times (Gateway Central MRT – 3 min walk; Example Quay MRT – 7 min walk; bus – 1 min; expressway – 3 min drive; airport – 20 min drive) and an amenities list. Right: map embed placeholder labelled "Map embed – replace with property map".

5. "Gallery": carousel of six captioned image placeholders (Exterior, Lobby, Typical floor, Pantry, Sky terrace, End-of-trip) with arrows, dots and mobile swipe.

6. "Current availability": table with columns Floor | Unit | Size (sq ft NLA) | Available from | Notes, six sample rows, and the note "Availability as at 30 September 2026 and subject to change."

7. "Your leasing team": three contact cards: circular photo placeholder, "Firstname Lastname", job title, phone, email, "Email" button.

8. Enquiry CTA: heading "Arrange a private viewing", one line of copy, "Enquire now" button (https://www.cbre.com.sg/contact-us). External links open in a new tab.

9. Footer: "[Disclaimer placeholder: insert the approved CBRE Singapore leasing disclaimer.]" and the visible note "Sample content for template purposes only — replace before publishing."

On mobile, stack all columns and cards in one column.
```

## Expected structure

After generation, check each section against this list. Use the follow-up prompts to fix anything missing.

1. **Hero**: full-width image placeholder with an "Artist's impression" caption, eyebrow, H1 (building name) and subhead. "Enquire now" links out in a new tab; "View availability" scrolls (anchor link) to section 6.
2. **Building at a glance**: a 6-tile spec grid (3×2 on desktop, 2×3 or 1 column on mobile). Each tile has an icon, value and label. Tiles are static (optional entrance animation, or number counters for the numeric values).
3. **Explore the building**: a large cutaway or floor-plan image with five numbered hotspot markers. Clicking or tapping a marker opens a popup (modal) with a title, two sentences, an image and a close button. The popup also closes on an outside click or Esc if supported. **Fallback:** if hotspots on an image aren't possible, five numbered buttons or tabs below the image open the same popups or panels.
4. **Location & connectivity**: two columns (stacked on mobile). One column has the travel-times list and amenities list; the other has an embed placeholder for a map (iframe). **Fallback:** a static location map image plus a "View on map" button linking out.
5. **Gallery**: a carousel or slider with six slides and captions. Arrows and dots navigate; swipe works on mobile. **Fallback:** a 3×2 image grid where each image opens a popup with the larger image and caption.
6. **Current availability**: heading, optional intro line, and a table with five data columns and six rows, plus an "as at" note and a total line (both added by follow-up 2 if missing). After follow-up 2, a sixth "Enquire" column holds a link per row. On mobile, rows become stacked cards or the table scrolls horizontally inside its container. **Fallback:** if no native table component is available, build a header row plus six rows from text blocks aligned in columns, or use six availability cards (one per unit) with the column names as labels.
7. **Your leasing team**: heading, intro line and three contact cards (photo placeholder, name, title, phone, email, optional registration line). "Email" opens a `mailto:` link. An agency licence placeholder line sits below the cards.
8. **Enquiry CTA band**: heading, one line of copy, and an "Enquire now" button that links out in a new tab.
9. **Footer**: disclaimer placeholder, image disclaimer (added by follow-up 8 if the first pass omits it) and the visible sample-content note.
10. *(Optional, from follow-up 7)* **Navigation**: a top or sticky bar with anchor links and a persistent "Enquire now" button, or "Back to top" links.

## Follow-up refinement prompts

Paste these one at a time in the AI chat after the first generation. Skip any that the first pass already handled. None of them contain styling requests; if the AI offers brand kit changes, decline.

**1. Hotspot popups content**

```text
In "Explore the building", add the instruction line "Select a numbered marker to explore key spaces." above the image, and set the five hotspot popups to exactly this content. Each popup has a title, the text, an image placeholder and a close button, and also closes when clicking outside it.

1. Grand Lobby – "A 12 m double-volume lobby with concierge, café and contactless turnstiles. Destination-control lifts serve the low, mid and high zones."
2. Typical Office Floor – "Approx. 24,000 sq ft column-free floor plate with 3.2 m finished ceilings and 150 mm raised floors. Layouts flex easily from open plan to cellular."
3. Pantry & Breakout – "Every floor has provision for a central pantry with water and exhaust points. Shown here as an indicative fitted breakout area."
4. Sky Terrace – "A landscaped Level 36 terrace with seating for 120 and an events lawn. Bookable by tenants for client and staff functions."
5. End-of-Trip Facilities – "300 bicycle lots, 40 showers, 480 lockers and towel service on Basement 1. Direct access from the cycle ramp."

If hotspots placed on the image are not possible, place five numbered buttons directly below the image that open the same popups.
```

**2. Availability table rows**

```text
Under the "Current availability" heading, add the intro line "Whole floors and fitted suites, available now and through 2027." Replace the availability table rows with exactly these six rows, in this order (Floor | Unit | Size (sq ft NLA) | Available from | Notes):

Level 35 | Whole floor | 24,100 | 1 January 2027 | Bare shell; direct access to Level 36 sky terrace
Level 28 | #28-01 | 12,450 | Immediate | Fitted, move-in ready
Level 22 | #22-02 | 8,600 | 1 March 2027 | Bare shell
Level 15 | Whole floor | 24,000 | 1 July 2027 | Bare shell; can be subdivided
Level 9 | #09-03 | 4,850 | Immediate | Fitted with four meeting rooms
Level 3 | #03-01 | 3,200 | 1 November 2026 | Suits a training or client centre

Under the table add "Total available: 77,200 sq ft" and keep the note "Availability as at 30 September 2026 and subject to change." Add a final column "Enquire" with a text link "Enquire" in each row to https://www.cbre.com.sg/contact-us, opening in a new tab. On mobile, show each row as a stacked card with the column names as labels, or make the table scroll horizontally inside its own container. If a table component is not available, build a header row and six rows from text blocks aligned in columns, or use six cards (one per unit) with the column names as labels.
```

**3. Location, amenities and map**

```text
Update "Location & connectivity":

Intro line: "In the heart of Singapore's CBD, One Marina Gateway puts your team minutes from rail, road and waterfront amenities."

Address line (above the lists): "One Marina Gateway, 8 Example Street, Singapore"

Getting here (list with a simple icon per line):
- Gateway Central MRT (interchange) – 3 min sheltered walk
- Example Quay MRT – 7 min walk
- Bus stops (6 services) – 1 min walk
- Expressway access – 3 min drive
- Airport – approx. 20 min drive

Nearby amenities (list):
- 50+ food and beverage outlets within a 5-minute walk
- 4 hotels within a 10-minute walk
- Waterfront promenade – 2 min walk
- Childcare centre on Level 2
- Supermarket and pharmacy at Basement 1
- Fitness studios and banks within a 5-minute walk

For the map, use an embed block with a placeholder labelled "Map embed – replace with property map". If an embed block is not available, use an image placeholder with a "View on map" button linking to https://maps.google.com, opening in a new tab.
```

**4. Gallery captions and behaviour**

```text
Set the gallery carousel to six slides with these captions, in this order:
1. "Exterior at dusk (artist's impression)"
2. "Grand lobby with concierge and café"
3. "Typical column-free office floor (indicative fit-out)"
4. "Pantry and breakout area (indicative fit-out)"
5. "Level 36 sky terrace"
6. "End-of-trip facilities, Basement 1"
Include previous/next arrows, dot indicators and swipe on mobile. Do not autoplay. If a carousel is not available, use a 3×2 image grid where each image opens a popup showing the larger image and its caption.
```

**5. Specs grid copy and intro**

```text
In "Building at a glance", add the intro line "A 38-storey Grade A office tower with best-in-class specifications, completed in 2025." under the heading. Keep the six tiles in this order with exactly these values and labels:
1. approx. 720,000 sq ft – Net lettable area
2. approx. 24,000 sq ft – Typical floor plate, column-free
3. 3.2 m – Finished ceiling height
4. Platinum – Sustainability rating
5. 2025 – Year of completion
6. 260 lots – Car parking, incl. 30 EV charging lots
If number counters are available, animate the numeric values once when the grid scrolls into view; otherwise keep them static. If icons are not available, leave them out.
```

After this prompt, **type tile 4's label manually in the editor** as `BCA Green Mark rating` (the Singapore building certification). It is deliberately kept out of every AI prompt so that a colour-like word never reaches the AI and cannot trigger a brand-kit offer. If the AI recolours or restyles tile 4 anyway, apply follow-up 10.

**6. Leasing team cards**

```text
Under the "Your leasing team" heading, add the intro line "Speak to the team that knows One Marina Gateway best." Set the section to three cards with this content. Each "Email" button opens a mailto link to the card's email address.

1. Firstname Lastname | Executive Director, Office Leasing | +65 6XXX XXXX | firstname.lastname@cbre.com
2. Firstname Lastname | Associate Director, Office Leasing | +65 9XXX XXXX | firstname.lastname@cbre.com
3. Firstname Lastname | Senior Manager, Office Leasing | +65 9XXX XXXX | firstname.lastname@cbre.com

Under each title add a small placeholder line "Registration No. [placeholder – include only if required]". Under the cards add one line: "[Agency name and licence number placeholder]". Keep the photos as circular image placeholders.
```

**7. Navigation and persistent enquiry (optional)**

```text
Add a slim navigation bar at the top with anchor links "Overview", "Explore", "Location", "Gallery", "Availability", "Contact" and an "Enquire now" button linking to https://www.cbre.com.sg/contact-us in a new tab. Keep it visible while scrolling if that is supported. On mobile, collapse the links into a menu but keep "Enquire now" visible. If a persistent bar is not possible, add a "Back to top" link at the end of sections 3 to 7.
```

**8. Enquiry CTA and footer copy**

```text
Update the enquiry call to action body copy to: "Speak to our leasing team about whole- and part-floor options at One Marina Gateway, including fitted suites available immediately."

Set the footer to, in this order:
1. "[Disclaimer placeholder — insert the approved CBRE Singapore leasing disclaimer before publishing.] Sample wording: All information, specifications, plans, images and availability are indicative only, subject to change without notice and do not form part of any offer or contract. Interested parties should make their own enquiries and rely on their own professional advice."
2. "Images are artist's impressions or for illustration only."
3. "Sample content for template purposes only — replace before publishing."
Make sure all three lines are visible on desktop and mobile.
```

**9. Accessibility and mobile pass**

```text
Do an accessibility and mobile pass: use one H1 (the building name) and an H2 for each section heading; give every image and hotspot image placeholder descriptive alt text; give each hotspot marker an accessible label matching its title; make sure popups, carousel arrows and table links work with a keyboard; make button text descriptive; and check that on mobile the spec tiles, location columns, availability table and contact cards stack cleanly with no overlapping, cut-off text or page-level horizontal scrolling.
```

**10. Reset styling drift (use only if needed)**

```text
Remove any custom styling you applied to individual elements and apply the selected brand kit's default styles consistently to all headings, body text, buttons, tables and popups. Do not create, change or update the brand kit itself.
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | `[Template] Property Showcase` | Settings | When you duplicate it, rename to e.g. `<Building name> – Leasing` and remove `[Template]`. |
| SEO / share title | One Marina Gateway – Grade A Offices for Lease, Singapore CBD | Settings | Set in experience settings if available. |
| SEO / share description | Column-free Grade A offices from 3,200 sq ft. View specs, floor plans, availability and contact the leasing team. | Settings | Keep under about 160 characters. |
| Building name | One Marina Gateway | Settings (SEO title), Hero, Location, Leasing team intro, Enquiry CTA, image alt text (P1, P2, P8) | **Invented sample.** Find and replace every instance, including alt text. |
| Address | One Marina Gateway, 8 Example Street, Singapore | Location (address line) | **Invented sample.** Use the full address with postal code when live. |
| Hero eyebrow | For lease \| Singapore CBD | Hero | Change to "For sale" / "For lease and sale" as needed. |
| Hero subhead | Column-free Grade A offices designed for how teams work now. Whole and part floors from 3,200 sq ft. | Hero | The "from" size must match the smallest unit in Availability. |
| Hero image + caption | Building exterior render / "Artist's impression" | Hero | Image slot P1. Use the landlord-approved render or photo. Keep the caption if it's a render. |
| Hero buttons | "Enquire now" → https://www.cbre.com.sg/contact-us; "View availability" → anchor to section 6 | Hero | Replace the enquiry URL with the mandate's enquiry form or a mailto link. |
| Specs intro | A 38-storey Grade A office tower with best-in-class specifications, completed in 2025. | Building at a glance | |
| Spec tile 1 – NLA | approx. 720,000 sq ft | Building at a glance | Use the landlord's confirmed figure. Say "approx." unless it's surveyed. |
| Spec tile 2 – Typical floor plate | approx. 24,000 sq ft, column-free | Building at a glance | |
| Spec tile 3 – Ceiling height | 3.2 m finished ceiling height | Building at a glance | Singapore convention is metres. |
| Spec tile 4 – Green Mark rating | Platinum / BCA Green Mark rating | Building at a glance | Confirm the current certification level and version. Type the label directly in the editor; never put it in an AI prompt (see the note under follow-up 5). |
| Spec tile 5 – Completion year | 2025 | Building at a glance | For a development, use "Expected TOP 20XX". |
| Spec tile 6 – Parking | 260 lots, incl. 30 EV charging | Building at a glance | |
| Optional extra specs | 38 storeys; 4.0 kN/m² floor loading; destination-control lifts; 150 mm raised floor | Building at a glance | Add a second row only if the landlord supplies them. |
| Explore heading + instruction | Explore the building / Select a numbered marker to explore key spaces. | Explore | |
| Cutaway / floor plan base image | Isometric building cutaway illustration | Explore | Image slot P2. Replace with the landlord's plan or axonometric, then **reposition all hotspot markers**. |
| Hotspot 1 – Grand Lobby | 12 m double-volume lobby… | Explore | Title, two sentences, image (slot P3). |
| Hotspot 2 – Typical Office Floor | Approx. 24,000 sq ft column-free… | Explore | Image slot P4. |
| Hotspot 3 – Pantry & Breakout | Provision for a central pantry… | Explore | Image slot P5. Mark it "indicative fit-out" if not provided by the landlord. |
| Hotspot 4 – Sky Terrace | Landscaped Level 36 terrace… | Explore | Image slot P6. |
| Hotspot 5 – End-of-Trip Facilities | 300 bicycle lots, 40 showers, 480 lockers… | Explore | Image slot P7. |
| Location intro | In the heart of Singapore's CBD, One Marina Gateway puts your team minutes from… | Location | |
| Travel times (×5) | Gateway Central MRT 3 min; Example Quay MRT 7 min; bus 1 min; expressway 3 min drive; airport approx. 20 min drive | Location | **Station names are invented.** Replace them with real stations and verified times for the actual property. |
| Amenities list (×6) | 50+ F&B outlets within 5 min… | Location | Use only verifiable amenities. |
| Map embed URL | Placeholder box: "Map embed – replace with property map" | Location | Use a Google Maps embed (iframe) of the actual address, or slot P9 plus a "View on map" link. |
| Gallery slides (×6) | Exterior at dusk; Lobby; Typical floor; Pantry; Sky terrace; End-of-trip | Gallery | Slots P8, P3–P7. Keep the "artist's impression" / "indicative fit-out" tags where true. |
| Availability intro (optional) | Whole floors and fitted suites, available now and through 2027. | Availability | Update the year range to match the latest "Available from" date. |
| Availability "as at" date | 30 September 2026 | Availability | **Update every time the table changes.** |
| Availability row 1 | Level 35 \| Whole floor \| 24,100 \| 1 January 2027 \| Bare shell… | Availability | |
| Availability row 2 | Level 28 \| #28-01 \| 12,450 \| Immediate \| Fitted, move-in ready | Availability | |
| Availability row 3 | Level 22 \| #22-02 \| 8,600 \| 1 March 2027 \| Bare shell | Availability | |
| Availability row 4 | Level 15 \| Whole floor \| 24,000 \| 1 July 2027 \| Bare shell; can be subdivided | Availability | |
| Availability row 5 | Level 9 \| #09-03 \| 4,850 \| Immediate \| Fitted with four meeting rooms | Availability | |
| Availability row 6 | Level 3 \| #03-01 \| 3,200 \| 1 November 2026 \| Suits a training or client centre | Availability | Delete or add rows as needed. Keep the smallest size consistent with the hero subhead. |
| Total available | 77,200 sq ft | Availability | Recalculate whenever rows change. |
| Leasing team intro | Speak to the team that knows One Marina Gateway best. | Leasing team | Contains the building name. |
| Leasing team card 1 | Firstname Lastname, Executive Director, Office Leasing, +65 6XXX XXXX, firstname.lastname@cbre.com | Leasing team | Use real, approved staff details and headshots only, with each person's consent. |
| Leasing team card 2 | Firstname Lastname, Associate Director, Office Leasing, +65 9XXX XXXX | Leasing team | As above. |
| Leasing team card 3 | Firstname Lastname, Senior Manager, Office Leasing, +65 9XXX XXXX | Leasing team | As above. |
| Leasing team photos (×3) | Circular headshot placeholders | Leasing team | Image slots B1–B3. Use each named person's own approved headshot; never a stock face next to a real name. Update the alt text with the real name and title. |
| Registration / licence lines | Registration No. [placeholder]; [Agency name and licence number placeholder] | Leasing team | Ask Compliance whether agent registration and agency licence numbers must be shown for this mandate (required for residential; check for commercial). Delete the lines if not required. |
| Enquiry CTA heading + body | Arrange a private viewing / Speak to our leasing team about whole- and part-floor options… | Enquiry CTA | |
| Enquiry URL | https://www.cbre.com.sg/contact-us | Hero, Availability, Nav, CTA | Placeholder. Replace in **every** location (up to 4). |
| Navigation labels (optional) | Overview · Explore · Location · Gallery · Availability · Contact · [Enquire now] | Navigation | Only if follow-up 7 was applied. Keep the labels in step with the section headings. |
| Disclaimer | [Disclaimer placeholder — insert the approved CBRE Singapore leasing disclaimer…] | Footer | **Mandatory.** Get approved wording from Legal/Compliance. Never publish with the placeholder. |
| Image disclaimer | Images are artist's impressions or for illustration only. | Footer | Keep it if any render or indicative image is used. |
| Sample-content footer note | Sample content for template purposes only — replace before publishing. | Footer | Keep it in the template. **Delete it in the published copy** only after all content is replaced and verified. |

## Sample content

Everything below is fictional sample content for template purposes. "One Marina Gateway", "8 Example Street", "Gateway Central MRT" and "Example Quay MRT" are invented names.

### 1. Hero

- **Image caption:** Artist's impression
- **Eyebrow:** For lease | Singapore CBD
- **Headline (H1):** One Marina Gateway
- **Subhead:** Column-free Grade A offices designed for how teams work now. Whole and part floors from 3,200 sq ft.
- **Primary button:** Enquire now → https://www.cbre.com.sg/contact-us (new tab)
- **Secondary button:** View availability → anchor to Current availability

### 2. Building at a glance

- **Heading:** Building at a glance
- **Intro:** A 38-storey Grade A office tower with best-in-class specifications, completed in 2025.

| Tile | Value | Label | Suggested icon |
|---|---|---|---|
| 1 | approx. 720,000 sq ft | Net lettable area | building |
| 2 | approx. 24,000 sq ft | Typical floor plate, column-free | floor plan / grid |
| 3 | 3.2 m | Finished ceiling height | vertical arrows |
| 4 | Platinum | BCA Green Mark rating (type manually; the AI prompts use "Sustainability rating") | leaf |
| 5 | 2025 | Year of completion | calendar |
| 6 | 260 lots | Car parking, incl. 30 EV charging lots | car / charging plug |

Optional second row: 38 storeys · 4.0 kN/m² floor loading · Destination-control lifts · 150 mm raised floor

### 3. Explore the building

- **Heading:** Explore the building
- **Instruction:** Select a numbered marker to explore key spaces.

Suggested hotspot positions are for the sample cutaway image. Reposition them for the real plan.

| # | Hotspot title | Popup text | Popup image | Suggested position on image |
|---|---|---|---|---|
| 1 | Grand Lobby | A 12 m double-volume lobby with concierge, café and contactless turnstiles. Destination-control lifts serve the low, mid and high zones. | P3 | Ground level, entrance |
| 2 | Typical Office Floor | Approx. 24,000 sq ft column-free floor plate with 3.2 m finished ceilings and 150 mm raised floors. Layouts flex easily from open plan to cellular. | P4 | Mid-tower floor |
| 3 | Pantry & Breakout | Every floor has provision for a central pantry with water and exhaust points. Shown here as an indicative fitted breakout area. | P5 | Core area of the mid-tower floor |
| 4 | Sky Terrace | A landscaped Level 36 terrace with seating for 120 and an events lawn. Bookable by tenants for client and staff functions. | P6 | Top of building |
| 5 | End-of-Trip Facilities | 300 bicycle lots, 40 showers, 480 lockers and towel service on Basement 1. Direct access from the cycle ramp. | P7 | Basement level |

### 4. Location & connectivity

- **Heading:** Location & connectivity
- **Intro:** In the heart of Singapore's CBD, One Marina Gateway puts your team minutes from rail, road and waterfront amenities.
- **Address line:** One Marina Gateway, 8 Example Street, Singapore
- **Getting here:**
  - Gateway Central MRT (interchange) – 3 min sheltered walk
  - Example Quay MRT – 7 min walk
  - Bus stops (6 services) – 1 min walk
  - Expressway access – 3 min drive
  - Airport – approx. 20 min drive
- **Nearby amenities:**
  - 50+ food and beverage outlets within a 5-minute walk
  - 4 hotels within a 10-minute walk
  - Waterfront promenade – 2 min walk
  - Childcare centre on Level 2
  - Supermarket and pharmacy at Basement 1
  - Fitness studios and banks within a 5-minute walk
- **Map:** embed placeholder labelled "Map embed – replace with property map". Fallback: image slot P9 plus a "View on map" button → https://maps.google.com (new tab; replace with the property's map link).

### 5. Gallery

- **Heading:** Gallery

| Slide | Image slot | Caption |
|---|---|---|
| 1 | P8 | Exterior at dusk (artist's impression) |
| 2 | P3 | Grand lobby with concierge and café |
| 3 | P4 | Typical column-free office floor (indicative fit-out) |
| 4 | P5 | Pantry and breakout area (indicative fit-out) |
| 5 | P6 | Level 36 sky terrace |
| 6 | P7 | End-of-trip facilities, Basement 1 |

Carousel controls: previous/next arrows, dots, swipe on mobile, no autoplay.

### 6. Current availability

- **Heading:** Current availability
- **Intro (optional):** Whole floors and fitted suites, available now and through 2027.

| Floor | Unit | Size (sq ft NLA) | Available from | Notes | Enquire |
|---|---|---|---|---|---|
| Level 35 | Whole floor | 24,100 | 1 January 2027 | Bare shell; direct access to Level 36 sky terrace | Enquire |
| Level 28 | #28-01 | 12,450 | Immediate | Fitted, move-in ready | Enquire |
| Level 22 | #22-02 | 8,600 | 1 March 2027 | Bare shell | Enquire |
| Level 15 | Whole floor | 24,000 | 1 July 2027 | Bare shell; can be subdivided | Enquire |
| Level 9 | #09-03 | 4,850 | Immediate | Fitted with four meeting rooms | Enquire |
| Level 3 | #03-01 | 3,200 | 1 November 2026 | Suits a training or client centre | Enquire |

- **Total line:** Total available: 77,200 sq ft
- **Note:** Availability as at 30 September 2026 and subject to change.
- **Row links:** each "Enquire" → https://www.cbre.com.sg/contact-us (new tab)

### 7. Your leasing team

- **Heading:** Your leasing team
- **Intro:** Speak to the team that knows One Marina Gateway best.

| Card | Name | Title | Phone | Email | Registration line | Button |
|---|---|---|---|---|---|---|
| 1 | Firstname Lastname | Executive Director, Office Leasing | +65 6XXX XXXX | firstname.lastname@cbre.com | Registration No. [placeholder – include only if required] | Email → `mailto:firstname.lastname@cbre.com` |
| 2 | Firstname Lastname | Associate Director, Office Leasing | +65 9XXX XXXX | firstname.lastname@cbre.com | Registration No. [placeholder – include only if required] | Email → `mailto:firstname.lastname@cbre.com` |
| 3 | Firstname Lastname | Senior Manager, Office Leasing | +65 9XXX XXXX | firstname.lastname@cbre.com | Registration No. [placeholder – include only if required] | Email → `mailto:firstname.lastname@cbre.com` |

Below the cards: [Agency name and licence number placeholder]

### 8. Enquiry call to action

- **Heading:** Arrange a private viewing
- **Body:** Speak to our leasing team about whole- and part-floor options at One Marina Gateway, including fitted suites available immediately.
- **Button:** Enquire now → https://www.cbre.com.sg/contact-us (new tab)

### 9. Footer

1. **Disclaimer (placeholder, mandatory):** "[Disclaimer placeholder — insert the approved CBRE Singapore leasing disclaimer before publishing.] Sample wording: All information, specifications, plans, images and availability are indicative only, subject to change without notice and do not form part of any offer or contract. Interested parties should make their own enquiries and rely on their own professional advice."
2. **Image disclaimer:** Images are artist's impressions or for illustration only.
3. **Sample note (visible):** Sample content for template purposes only — replace before publishing.

### Optional navigation labels

Overview · Explore · Location · Gallery · Availability · Contact · [Enquire now]

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** Whether to license images (this spends Adobe Stock credits on the CBRE account) or to use watermarked comp/preview images for the template is still to be decided by the user. **The executing session must ask before licensing any image.** Until then, use comps or the Ceros placeholders.

Search at https://stock.adobe.com/sg. Selection rules for this property template:

- **No identifiable real buildings, towers or landmarks** that could be mistaken for a CBRE-managed or marketed asset. Prefer generic 3D renders and unbranded interiors.
- No visible third-party brands, logos or signage; no legible screens.
- Diverse people where people appear; Singapore/Asia context.
- Exclude assets marked "Editorial use only".
- If CBRE policy disallows AI-generated stock, turn on the "Exclude generative AI" filter.

Slots P3–P7 are each used twice (hotspot popup + gallery slide), so they need only one licence each.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| P1 – Hero | Generic modern glass office tower, low angle against sky (render preferred), space for text | `modern glass office tower 3d render low angle sky` | Landscape 16:9, ≥ 2400 px wide | Artist's impression of One Marina Gateway, a modern glass office tower |
| P2 – Explore base image | Isometric or axonometric cutaway of a multi-storey office building, showing lobby, office floors, rooftop terrace and basement | `isometric office building cutaway illustration floors` (alt: `3d office building section cross section floors`) | Landscape 16:9 or 4:3, ≥ 2400 px wide (hotspots need detail) | Cutaway illustration of One Marina Gateway showing the lobby, office floors, sky terrace and basement |
| P3 – Lobby | Double-height, minimalist office lobby with reception/concierge; no signage | `modern office building lobby double height reception interior` | Landscape 16:9, ≥ 2000 px wide | Double-height lobby with concierge desk and lift lobby |
| P4 – Typical floor | Open-plan, column-free office floor with daylight and city views; diverse staff optional | `open plan office floor column free city view asia` | Landscape 16:9, ≥ 2000 px wide | Column-free open-plan office floor with floor-to-ceiling windows |
| P5 – Pantry & breakout | Contemporary office pantry/breakout with people chatting | `modern office pantry breakout area colleagues asia` | Landscape 16:9, ≥ 2000 px wide | Office pantry and breakout area with colleagues talking |
| P6 – Sky terrace | Landscaped rooftop terrace with seating and tropical planting; generic or blurred city backdrop with no identifiable skyline or landmark | `rooftop garden terrace office tropical plants city` | Landscape 16:9, ≥ 2000 px wide | Landscaped rooftop sky terrace with seating and tropical plants |
| P7 – End-of-trip | Bicycle parking room, or showers/lockers in a modern end-of-trip facility | `office bicycle parking end of trip facility lockers` | Landscape 16:9, ≥ 2000 px wide | End-of-trip facility with bicycle racks and lockers |
| P8 – Gallery exterior | Generic office tower at dusk with lit floors (render), different angle from P1 | `modern office skyscraper dusk 3d render glass facade` | Landscape 16:9, ≥ 2000 px wide | Artist's impression of One Marina Gateway at dusk |
| P9 – Map fallback | Stylised, fictional street map illustration (not a real city plan) | `abstract city street map vector illustration minimal` | Landscape 4:3, ≥ 1600 px wide | Illustrative location map placeholder |
| B1 – Leasing contact 1 | **Placeholder only.** Professional headshot, neutral background | `asian businessman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Executive Director, Office Leasing |
| B2 – Leasing contact 2 | **Placeholder only.** Professional headshot, neutral background | `malay businesswoman professional headshot neutral background` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Associate Director, Office Leasing |
| B3 – Leasing contact 3 | **Placeholder only.** Professional headshot, neutral background | `indian professional man headshot studio neutral` | Square 1:1, ≥ 800 px | Photo of Firstname Lastname, Senior Manager, Office Leasing |

**Contact photos:** never publish stock faces next to real staff names. In any live copy, B1–B3 must be the named person's own approved headshot. For the template, consider keeping a neutral avatar placeholder instead of licensing headshots.

**Live mandates:** P1–P8 must be replaced with landlord-supplied or CBRE-commissioned photography and renders of the actual building. Stock images of generic buildings must never represent a real listed property.

## QA checklist

- [ ] Brand kit is still **CBRE Test** and **unmodified**. No AI offer to change the brand kit was accepted, and no new brand kit was created.
- [ ] No colour, font or logo overrides were added to any element. If there was drift, follow-up 10 was applied.
- [ ] The experience is in the **CBRE Singapore** folder.
- [ ] The experience is named exactly `[Template] Property Showcase`.
- [ ] Tone and structure are consistent with the New Joiner Onboarding reference experience.
- [ ] All nine sections are present in order (ten with the optional navigation).
- [ ] Hero "View availability" scrolls to Current availability.
- [ ] Spec grid shows all six tiles with the exact values and labels, and tile 4's label was typed manually as "BCA Green Mark rating".
- [ ] All five hotspots open the correct popup (title, text, image); every popup closes; markers are tappable on mobile and none overlap. If the fallback was used, all five buttons work.
- [ ] Location: intro and address line present; travel times and amenities lists are complete; the map embed placeholder (or fallback image + "View on map" link) is present.
- [ ] Gallery: six slides with correct captions; arrows, dots and mobile swipe work; no autoplay.
- [ ] Availability table (or its text-block/card fallback): six rows match the sample content, the total reads 77,200 sq ft, and the "as at" note is present. It is readable on mobile (stacked cards or contained horizontal scroll).
- [ ] Leasing team intro is present; "Email" buttons open `mailto:` links; the registration/licence placeholders are present.
- [ ] All interactions were tested in preview on **desktop and mobile**: hotspots and popups, carousel, anchor links, table links, buttons, and nav if added.
- [ ] Mobile: no overlapping or cut-off text and no page-level horizontal scroll.
- [ ] The **disclaimer placeholder** and the image disclaimer are present and visible in the footer.
- [ ] The **"Sample content for template purposes only — replace before publishing."** footer note is visible on desktop and mobile.
- [ ] CTAs and links point to placeholders: Enquire/Enquire now → https://www.cbre.com.sg/contact-us in every location; map fallback → https://maps.google.com. External links open in a new tab.
- [ ] Image placeholders have been replaced with the agreed images (licensed or comp, **per the user's decision**). No stock image was licensed without asking.
- [ ] No identifiable real building or landmark, no third-party logos or brands, and no "Editorial use only" assets.
- [ ] "Artist's impression" / "indicative fit-out" captions appear wherever renders or indicative images are used.
- [ ] Alt text is set on every image, including popup images, matching the image slots table.
- [ ] No real client names, real people, or real property names/addresses/station names appear anywhere.
- [ ] Heading structure is one H1 (building name) and an H2 per section. Button labels are descriptive.
