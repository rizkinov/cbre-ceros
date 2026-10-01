# [Template] Workplace Strategy Quiz

- **Slug:** `workplace-strategy-quiz`
- **Ceros starting point:** "Create a quiz" chip (if the chip pre-fills the prompt box, clear that text and paste the prompt below instead)
- **Folder:** CBRE Singapore
- **Brand kit:** CBRE Test. Select it in the prompt box before generating. Never accept any AI offer to modify the brand kit; always decline (see refinement prompt 1).
- **Experience name:** [Template] Workplace Strategy Quiz
- **Primary audience:** HR, workplace, real estate and operations leaders at occupier organisations in Singapore who are reviewing hybrid work arrangements. The template is duplicated by CBRE Singapore Workplace Strategy and Advisory & Transaction Services marketing for campaigns, events and client workshops.
- **Est. build time:** 60–90 minutes (about 25 min to generate and refine, 30 min to load the four results and test the scoring paths, 20 min for images and QA)

## Purpose

"What is your hybrid workplace profile?" is a personality-style quiz with seven questions. It sorts a respondent's organisation into one of four hybrid workplace profiles. Each result gives a description, three recommendations, a relevant CBRE service and a call to action to talk to a specialist. CBRE Singapore marketing and workplace teams duplicate it as a top-of-funnel engagement piece for LinkedIn campaigns, event QR codes and pre-workshop warm-ups, swapping questions, profile copy, services, images and links. The full scoring map and tie-break rule are below so the logic can be rebuilt or edited safely.

## Ceros AI prompt

Paste the block below verbatim into the "What will you build today?" box **after** setting Brand Kit = CBRE Test and Folder = CBRE Singapore. It is 2,468 characters (limit assumed to be about 2,500). The letters in brackets are scoring codes only; refinement prompt 2 makes sure they never appear on screen.

```text
Build a responsive personality quiz, "What is your hybrid workplace profile?", for CBRE Singapore. Use the selected brand kit's styles throughout; do not modify the brand kit.

Profiles: H = The Collaborative Hub, N = The Flexible Network, F = The Focused HQ, E = The Experience-Led Campus.

1. Intro: title, subhead "Seven quick questions to discover how your organisation uses the office, and what to do next.", label "7 questions · 2 minutes", button "Start the quiz", image placeholder: hybrid team.
2. Seven questions, one per screen, with a "Question 1 of 7" progress bar and Back button. Each answer adds 1 point to the bracketed profile:
Q1 How often are most of your people in the office? 4-5 days, it's our base (F) | 2-3 set team days (H) | It varies: home, clients, flex spaces (N) | When there's a reason: events, culture (E)
Q2 What does collaboration mostly look like? Workshops and whiteboard sessions (H) | Scheduled meetings around solo work (F) | Town halls, socials, client events (E) | Video check-ins across locations (N)
Q3 Where does focused work happen best? At home, office days are for teamwork (H) | At my own desk in a quiet office (F) | Anywhere: home, flex centre, near clients (N) | Varied spaces: library, terrace, wellness room (E)
Q4 Which best describes your workplace tech? Cloud-first, secure anywhere (N) | Every meeting room hybrid-ready (H) | One app for access, booking, events (E) | Robust on-site desk set-ups (F)
Q5 Which amenity would matter most? Café, wellness studio, event space (E) | Quiet rooms and ergonomic desks (F) | Project rooms and team neighbourhoods (H) | Flex spaces across Singapore (N)
Q6 How does sustainability shape property decisions? Central: top green ratings, ESG data (E) | Use less space, share it better (N) | Right-size to real use, reinvest savings (H) | Important, balanced with cost (F)
Q7 What do your next three years look like? Steady growth, room to add teams (F) | Uncertain, flexibility beats footprint (N) | Growing, but consolidating smarter (H) | Building our brand to win talent (E)
3. Four result screens. Most points wins; ties resolve H > N > E > F. Each result: name, tagline, description, image placeholder, 3 recommendations, "How CBRE can help" service card, button "Talk to a workplace specialist" (https://www.cbre.com.sg/contact-us), "Retake the quiz" and share buttons.
4. Footer on every screen: "Sample content for template purposes only — replace before publishing."
```

## Expected structure

After generation, check that the experience contains the following.

1. **Intro screen.** Hero with eyebrow, title, subhead, meta label "7 questions · 2 minutes", a one-line teaser naming the four profiles, the "Start the quiz" button and image slot IMG-01. *Interaction:* "Start the quiz" opens Question 1.
2. **Question screens Q1–Q7.** A quiz question component, one question per screen. Each screen has a question stem, a helper line and four single-select answer cards in the order listed in the scoring map. Profile codes (H/N/F/E) are never visible.
   - *Interaction:* selecting an answer marks it as selected and advances to the next question. Fallback: a "Next" button that becomes active after a selection.
   - "Back" returns to the previous question with its answer still shown and lets the user change it.
   - The progress indicator reads "Question X of 7" with a bar that advances about 14% per question.
3. **Scoring logic (not visible).** Each answer adds points to exactly one profile. The highest total wins, and ties resolve to H > N > E > F. See the scoring map and the implementation options under Sample content.
4. **Result screens ×4** (The Collaborative Hub, The Flexible Network, The Focused HQ, The Experience-Led Campus). Each is a quiz outcome screen containing:
   - the "Your hybrid workplace profile is" label, profile name and tagline
   - the profile image (IMG-02 to IMG-05) and description
   - "Our recommendations": a numbered list of three
   - an "In practice" sample case line
   - a "How CBRE can help" card with image IMG-06, service name, one-line blurb and a text link
   - the primary button "Talk to a workplace specialist"
   - the "Retake the quiz" button
   - "Share the quiz" buttons (LinkedIn, Email, Copy link)

   *Interaction:* the CTA and the service link open in a new tab. Retake clears all scores and returns to the intro or Q1. Share buttons open the share URLs.
5. **Optional: Explore the other profiles.** Tabs or an accordion under each result listing the other three profiles (name, tagline, first sentence of the description). Fallback if tabs aren't available: an accordion. Skip it if neither works cleanly.
6. **Footer** on the intro, every question and every result. It holds the disclaimer placeholder and the visible note "Sample content for template purposes only — replace before publishing."

## Follow-up refinement prompts

Send these one at a time in the Ceros AI chat after the first generation, and preview after each one. Skip any that the first pass already got right. None of them may request colour, font or logo changes.

1. **Decline brand-kit changes.** Use this every time the AI offers to change, update or create a brand kit.

```text
No thanks. Please keep the CBRE Test brand kit exactly as it is and do not modify it. Continue with content, structure and quiz logic changes only.
```

2. **Exact question copy, helper lines and hidden codes.**

```text
Please make sure the letters H, N, F and E in brackets are never shown to users; they are scoring codes only. Use en dashes in "4–5 days, it's our base" and "2–3 set team days". Add a short helper line under each question:
Q1 "Think about a typical week, not your busiest day."
Q2 "Think about the most common reason your teams get together."
Q3 "Reports, analysis, writing: the work that needs concentration."
Q4 "Pick the closest fit for most of your people."
Q5 "Choose the one your people would value most."
Q6 "Think about how decisions are actually made, not just policy."
Q7 "Consider headcount, footprint and brand ambitions."
Keep the answer order exactly as given in my first message.
```

3. **Lock scoring and the tie-break.**

```text
Please check the quiz scoring. Every answer gives points to exactly one profile, as bracketed in my first message. The profile with the most points wins. If two or more profiles tie for the most points, choose in this priority order: The Collaborative Hub, then The Flexible Network, then The Experience-Led Campus, then The Focused HQ.
If the quiz cannot apply a tie-break rule directly, use weighted points instead: every Collaborative Hub answer = 33 points, Flexible Network = 32, Experience-Led Campus = 31, Focused HQ = 30, and the highest total wins.
Test: answers 1A 2B 3B 4C 5A 6A 7B (counting answers A–D in the order shown) must give The Experience-Led Campus; 1B 2D 3D 4B 5D 6A 7A must give The Collaborative Hub; 1C 2B 3C 4D 5D 6D 7C must give The Flexible Network.
```

4. **Progress, navigation and selection.**

```text
On each question screen show "Question X of 7" with a progress bar that fills in sevenths. Selecting an answer should visibly mark it as selected and move to the next question after a short pause. If auto-advance isn't possible, add a "Next" button that activates once an answer is chosen. Add a "Back" button on Questions 2–7 that keeps the previous answer selected so it can be changed. Answer cards must be large enough to tap easily on mobile.
```

5. **Result: The Collaborative Hub.**

```text
Update The Collaborative Hub result screen:
Label: "Your hybrid workplace profile is"
Name: The Collaborative Hub
Tagline: "Your office is where the best ideas happen together."
Description: "Your people come in with purpose: to workshop, solve problems and build relationships. Focused work mostly happens elsewhere. Your office should be designed around teamwork rather than rows of desks, with a clear rhythm of team days so that when people make the trip, the right colleagues are there too."
Our recommendations: 1 "Rebalance your space toward collaboration: more project rooms, team neighbourhoods and writable walls, fewer assigned desks." 2 "Agree team anchor days and use desk and room booking to manage peak attendance." 3 "Make every meeting space hybrid-ready so remote colleagues can contribute equally."
In practice: "Sample case: A global technology company replaced 30% of its assigned desks with project rooms and team neighbourhoods when it consolidated onto two floors at One Marina Gateway, 8 Example Street."
How CBRE can help: "Workplace Strategy". "Our workplace strategists combine utilisation data and employee insight to design a hub that fits how your teams really collaborate." Link "Explore Workplace Strategy" to https://www.cbre.com.sg/ (new tab).
```

6. **Result: The Flexible Network.**

```text
Update The Flexible Network result screen:
Label: "Your hybrid workplace profile is"
Name: The Flexible Network
Tagline: "Work happens everywhere, so your real estate should too."
Description: "Your people are mobile and your needs change quickly. Instead of one large office, you will benefit from a smaller core space connected to a network of flexible locations, backed by technology that lets people work securely from anywhere."
Our recommendations: 1 "Right-size your core office and add flexible or coworking access near where your people live and meet clients." 2 "Build flexibility into your leases: shorter terms and options to expand or contract." 3 "Standardise cloud tools and one booking platform that work across every location."
In practice: "Sample case: A regional financial services firm reduced its core office by 25% and added flexible memberships in three suburban hubs, keeping a client suite at Example Tower, 21 Sample Road."
How CBRE can help: "Flexible Workplace Solutions". "We help you blend leased, flexible and on-demand space into one network, and negotiate the terms that keep it agile." Link "Explore flexible workplace solutions" to https://www.cbre.com.sg/ (new tab).
```

7. **Result: The Focused HQ.**

```text
Update The Focused HQ result screen:
Label: "Your hybrid workplace profile is"
Name: The Focused HQ
Tagline: "A dependable home base built for concentration."
Description: "Your people are in most days, and much of their work needs concentration, confidentiality or specialist set-ups. A well-planned headquarters with great acoustics, ergonomics and room to grow will serve you better than a heavily shared model."
Our recommendations: 1 "Plan for assigned or neighbourhood desks, with quiet rooms and acoustic zoning for focus." 2 "Secure growth options such as expansion rights or adjacent space in your next lease." 3 "Add a few flexible collaboration settings so the office can adapt as work styles evolve."
In practice: "Sample case: A professional services firm secured expansion rights over an adjacent half-floor when it renewed its lease at Sample Square, 3 Placeholder Avenue."
How CBRE can help: "Advisory & Transaction Services". "Our advisors help you find, negotiate and future-proof the right headquarters, from renewals and expansions to relocations." Link "Explore Advisory & Transaction Services" to https://www.cbre.com.sg/ (new tab).
```

8. **Result: The Experience-Led Campus.**

```text
Update The Experience-Led Campus result screen:
Label: "Your hybrid workplace profile is"
Name: The Experience-Led Campus
Tagline: "A destination that earns the commute."
Description: "For you, the office is a strategic tool for culture, talent and client relationships. People come in for experiences they can't get at home, so hospitality, wellbeing and sustainability credentials matter as much as square feet."
Our recommendations: 1 "Curate a hospitality-led experience: a welcoming arrival, café, events programme and wellbeing spaces." 2 "Prioritise buildings with strong green credentials, and track energy and wellbeing data for ESG reporting." 3 "Use a workplace app and a community programme to keep the space lively and measure engagement."
In practice: "Sample case: A global consumer brand opened a two-floor workplace with an event forum and wellness studio at The Canopy Works, 5 Placeholder Walk, and saw weekly office visits rise by a third."
How CBRE can help: "Project Management". "Our project managers deliver amenity-rich, sustainable workplaces from design brief to handover, on time and on budget." Link "Explore Project Management" to https://www.cbre.com.sg/ (new tab).
```

9. **Retake and share.**

```text
On every result screen: the "Retake the quiz" button must clear all scores and selections and return to Question 1. Add a "Share the quiz" row with three buttons: "LinkedIn" linking to https://www.linkedin.com/sharing/share-offsite/?url=https://www.cbre.com.sg/ , "Email" linking to mailto:?subject=What%27s%20your%20hybrid%20workplace%20profile%3F&body=Take%20CBRE%20Singapore%27s%20two-minute%20quiz%3A%20https%3A%2F%2Fwww.cbre.com.sg%2F , and "Copy link" if a copy-link action is available (otherwise leave it out). Keep "Talk to a workplace specialist" (https://www.cbre.com.sg/contact-us) as the main button. All links open in a new tab.
```

10. **Intro details and footer.**

```text
On the intro screen add the eyebrow "Workplace Strategy · Singapore" above the title and this line under the subhead: "Find out which of four profiles fits you best: The Collaborative Hub, The Flexible Network, The Focused HQ or The Experience-Led Campus."
Make the footer appear on the intro, every question and every result screen, with two lines:
"[DISCLAIMER PLACEHOLDER: replace with wording approved by CBRE Singapore Legal/Compliance before publishing.] This quiz offers general guidance for discussion purposes only and does not constitute professional advice. Results are based on your answers and simplified assumptions."
"Sample content for template purposes only — replace before publishing."
```

11. **Optional: explore the other profiles.**

```text
Under the share row on each result screen, add a section "Explore the other profiles" as tabs (or an accordion if tabs aren't available) showing the other three profiles, each with its name, tagline and the first sentence of its description.
```

12. **Image placeholders and alt text.**

```text
Please make sure there are six image placeholders: intro hero (landscape 16:9); one per result screen (landscape 3:2) for The Collaborative Hub, The Flexible Network, The Focused HQ and The Experience-Led Campus; and one shared image in the "How CBRE can help" card (landscape 3:2). Set the alt text exactly as follows:
Intro: "A team meeting in a modern office with a remote colleague joining by video"
Collaborative Hub: "Colleagues planning a project together at a whiteboard covered in notes"
Flexible Network: "A professional working on a laptop in a bright coworking space"
Focused HQ: "A professional concentrating at an ergonomic desk in a quiet office"
Experience-Led Campus: "Colleagues chatting in a plant-filled office café and lounge"
How CBRE can help: "A workplace consultant walking clients through an office design plan"
```

## Template fields

| Field | Sample value | Section | Notes for whoever duplicates it |
|---|---|---|---|
| Experience name | [Template] Workplace Strategy Quiz | Ceros settings | Rename on duplicate (for example "SG – Hybrid Workplace Quiz – <campaign>") and remove "[Template]". |
| Intro eyebrow | Workplace Strategy · Singapore | 1 Intro | |
| Quiz title | What is your hybrid workplace profile? | 1 Intro | It also appears in the share email subject, so update both. |
| Intro subhead | Seven quick questions to discover how your organisation uses the office, and what to do next. | 1 Intro | If you change the number of questions, update "Seven" and "7". |
| Meta label | 7 questions · 2 minutes | 1 Intro | |
| Profile teaser line | Find out which of four profiles fits you best: The Collaborative Hub, The Flexible Network, The Focused HQ or The Experience-Led Campus. | 1 Intro | Must list the current profile names. |
| Start button label | Start the quiz | 1 Intro | |
| Intro image + alt | IMG-01 | 1 Intro | See Image slots. |
| Progress label format | Question X of 7 | 2 Questions | |
| Q1–Q7 stems, helpers, answers | See Sample content, section 2 | 2 Questions | Keep 4 answers per question, one per profile, so every profile stays equally reachable. |
| Scoring map | See Sample content, section 3 | 3 Logic | If you edit an answer, keep its profile mapping, or update the map **and** the test paths. |
| Points per answer | 1 (or weighted 33 / 32 / 31 / 30) | 3 Logic | Use weights only if Ceros can't apply the tie-break directly. |
| Tie-break priority | Collaborative Hub > Flexible Network > Experience-Led Campus > Focused HQ | 3 Logic | Change only together with the weights and test paths. |
| Result label | Your hybrid workplace profile is | 4 Results | |
| Profile names ×4 | The Collaborative Hub · The Flexible Network · The Focused HQ · The Experience-Led Campus | 4 Results | Update the intro teaser line if names change. |
| Taglines ×4 | See Sample content, section 4 | 4 Results | |
| Descriptions ×4 | See Sample content, section 4 | 4 Results | Keep to about 60 words for mobile. |
| Recommendations ×12 (3 per profile) | See Sample content, section 4 | 4 Results | Start each with a verb. |
| "In practice" sample case ×4 | See Sample content, section 4 | 4 Results | **Fictional.** Replace with approved, anonymised case studies, or delete. Never name a client without written approval. |
| Service name ×4 | Workplace Strategy · Flexible Workplace Solutions · Advisory & Transaction Services · Project Management | 4 Results | Confirm the current official service names on cbre.com.sg. |
| Service blurb ×4 | See Sample content, section 4 | 4 Results | |
| Service link label / URL ×4 | Explore Workplace Strategy · https://www.cbre.com.sg/ (etc.) | 4 Results | Placeholder. Replace with the exact service page URLs. |
| Primary CTA label / URL | Talk to a workplace specialist · https://www.cbre.com.sg/contact-us | 4 Results | Placeholder. Replace with the campaign contact URL (add UTM parameters if Marketing uses them). |
| Retake button label | Retake the quiz | 4 Results | |
| Share heading and labels | Share the quiz · LinkedIn · Email · Copy link | 4 Results | |
| Share URL (published experience) | https://www.cbre.com.sg/ | 4 Results | Placeholder. After publishing, replace with the experience's own URL in the LinkedIn and email links (URL-encode it in the email body). |
| Share email subject / body | What's your hybrid workplace profile? / Take CBRE Singapore's two-minute quiz: [URL] | 4 Results | |
| Result images + alt ×4 | IMG-02 to IMG-05 | 4 Results | |
| Service card image + alt | IMG-06 | 4 Results | Shared across all four results. |
| Disclaimer | See Sample content, section 6 | 6 Footer | Placeholder. Replace with Legal/Compliance-approved wording. |
| Sample footer note | Sample content for template purposes only — replace before publishing. | 6 Footer | Keep it on the template. Remove it from a duplicate only after every sample value has been replaced. |
| Data capture | None | n/a | Don't add forms or personal-data fields without Marketing and Legal (PDPA) approval. |

## Sample content

### Section 1: Intro screen

- **Eyebrow:** Workplace Strategy · Singapore
- **Title:** What is your hybrid workplace profile?
- **Subhead:** Seven quick questions to discover how your organisation uses the office, and what to do next.
- **Meta label:** 7 questions · 2 minutes
- **Teaser line:** Find out which of four profiles fits you best: The Collaborative Hub, The Flexible Network, The Focused HQ or The Experience-Led Campus.
- **Button:** Start the quiz

### Section 2: Questions

Progress label: "Question X of 7". Navigation: "Back" (Q2–Q7) and auto-advance on selection, or a "Next" button as the fallback.

**Q1. How often are most of your people in the office?**
*Helper:* Think about a typical week, not your busiest day.
- A. 4–5 days, it's our base
- B. 2–3 set team days
- C. It varies: home, clients, flex spaces
- D. When there's a reason: events, culture

**Q2. What does collaboration mostly look like?**
*Helper:* Think about the most common reason your teams get together.
- A. Workshops and whiteboard sessions
- B. Scheduled meetings around solo work
- C. Town halls, socials, client events
- D. Video check-ins across locations

**Q3. Where does focused work happen best?**
*Helper:* Reports, analysis, writing: the work that needs concentration.
- A. At home, office days are for teamwork
- B. At my own desk in a quiet office
- C. Anywhere: home, flex centre, near clients
- D. Varied spaces: library, terrace, wellness room

**Q4. Which best describes your workplace tech?**
*Helper:* Pick the closest fit for most of your people.
- A. Cloud-first, secure anywhere
- B. Every meeting room hybrid-ready
- C. One app for access, booking, events
- D. Robust on-site desk set-ups

**Q5. Which amenity would matter most?**
*Helper:* Choose the one your people would value most.
- A. Café, wellness studio, event space
- B. Quiet rooms and ergonomic desks
- C. Project rooms and team neighbourhoods
- D. Flex spaces across Singapore

**Q6. How does sustainability shape property decisions?**
*Helper:* Think about how decisions are actually made, not just policy.
- A. Central: top green ratings, ESG data
- B. Use less space, share it better
- C. Right-size to real use, reinvest savings
- D. Important, balanced with cost

**Q7. What do your next three years look like?**
*Helper:* Consider headcount, footprint and brand ambitions.
- A. Steady growth, room to add teams
- B. Uncertain, flexibility beats footprint
- C. Growing, but consolidating smarter
- D. Building our brand to win talent

### Section 3: Scoring map and tie-break

Codes: **H** = The Collaborative Hub · **N** = The Flexible Network · **F** = The Focused HQ · **E** = The Experience-Led Campus. Each question has exactly one answer per profile, so every profile can score 0–7.

| Question | A | B | C | D |
|---|---|---|---|---|
| Q1 Attendance pattern | F +1 | H +1 | N +1 | E +1 |
| Q2 Collaboration | H +1 | F +1 | E +1 | N +1 |
| Q3 Focus work | H +1 | F +1 | N +1 | E +1 |
| Q4 Technology | N +1 | H +1 | E +1 | F +1 |
| Q5 Amenities | E +1 | F +1 | H +1 | N +1 |
| Q6 Sustainability priority | E +1 | N +1 | H +1 | F +1 |
| Q7 Growth plans | F +1 | N +1 | H +1 | E +1 |

**Winner:** the profile with the highest total.

**Tie-break rule:** if two or more profiles share the highest total, the winner is the first tied profile in this priority order: **The Collaborative Hub > The Flexible Network > The Experience-Led Campus > The Focused HQ**. The reasoning: a tied respondent is usually mid-transition, so the tie goes to the more change-oriented profile, and The Focused HQ, the least-change option, comes last. Ties are common. About a quarter of all possible answer combinations produce a tie at the top, so the rule must be implemented and tested.

**Implementation options, in order of preference:**
1. If the Ceros quiz supports an explicit tie-break or outcome priority, set it to H > N > E > F.
2. If it resolves ties by outcome order, list the outcomes in the order H, N, E, F, then confirm with test paths P5–P7.
3. If neither works, use **weighted points**: every H answer = 33, N = 32, E = 31, F = 30, and the highest total wins. Decimal equivalent: 1.03 / 1.02 / 1.01 / 1.00. These weights reproduce the rule above exactly for all 16,384 possible answer combinations, because the weight gap can never overturn a one-answer lead across seven questions.

**Test paths** (answer letters for Q1–Q7, as listed in section 2):

| Path | Answers | Totals (H / N / E / F) | Expected result | Why |
|---|---|---|---|---|
| P1 | B A A B C C C | 7 / 0 / 0 / 0 | The Collaborative Hub | Pure H |
| P2 | C D C A D B B | 0 / 7 / 0 / 0 | The Flexible Network | Pure N |
| P3 | A B B D B D A | 0 / 0 / 0 / 7 | The Focused HQ | Pure F |
| P4 | D C D C A A D | 0 / 0 / 7 / 0 | The Experience-Led Campus | Pure E |
| P5 | A B B C A A B | 0 / 1 / 3 / 3 | The Experience-Led Campus | Tie E–F → E |
| P6 | B D D B D A A | 2 / 2 / 2 / 1 | The Collaborative Hub | Three-way tie H–N–E → H |
| P7 | C B C D D D C | 1 / 3 / 0 / 3 | The Flexible Network | Tie N–F → N |
| P8 | A B B B C B D | 2 / 1 / 1 / 3 | The Focused HQ | A clear lead beats priority |

### Section 4: Results

Shared elements on every result screen:
- **Label:** Your hybrid workplace profile is
- **Primary button:** Talk to a workplace specialist → https://www.cbre.com.sg/contact-us (new tab)
- **Retake button:** Retake the quiz (clears scores, returns to Q1)
- **Share row:** Share the quiz. LinkedIn → `https://www.linkedin.com/sharing/share-offsite/?url=https://www.cbre.com.sg/`. Email → `mailto:?subject=What%27s%20your%20hybrid%20workplace%20profile%3F&body=Take%20CBRE%20Singapore%27s%20two-minute%20quiz%3A%20https%3A%2F%2Fwww.cbre.com.sg%2F`. Copy link, if available.
- **"How CBRE can help" card image:** IMG-06

#### The Collaborative Hub (H)
- **Tagline:** Your office is where the best ideas happen together.
- **Description:** Your people come in with purpose: to workshop, solve problems and build relationships. Focused work mostly happens elsewhere. Your office should be designed around teamwork rather than rows of desks, with a clear rhythm of team days so that when people make the trip, the right colleagues are there too.
- **Our recommendations:**
  1. Rebalance your space toward collaboration: more project rooms, team neighbourhoods and writable walls, fewer assigned desks.
  2. Agree team anchor days and use desk and room booking to manage peak attendance.
  3. Make every meeting space hybrid-ready so remote colleagues can contribute equally.
- **In practice:** Sample case: A global technology company replaced 30% of its assigned desks with project rooms and team neighbourhoods when it consolidated onto two floors at One Marina Gateway, 8 Example Street.
- **How CBRE can help:** **Workplace Strategy.** Our workplace strategists combine utilisation data and employee insight to design a hub that fits how your teams really collaborate. Link: "Explore Workplace Strategy" → https://www.cbre.com.sg/ (placeholder)
- **Image:** IMG-02

#### The Flexible Network (N)
- **Tagline:** Work happens everywhere, so your real estate should too.
- **Description:** Your people are mobile and your needs change quickly. Instead of one large office, you will benefit from a smaller core space connected to a network of flexible locations, backed by technology that lets people work securely from anywhere.
- **Our recommendations:**
  1. Right-size your core office and add flexible or coworking access near where your people live and meet clients.
  2. Build flexibility into your leases: shorter terms and options to expand or contract.
  3. Standardise cloud tools and one booking platform that work across every location.
- **In practice:** Sample case: A regional financial services firm reduced its core office by 25% and added flexible memberships in three suburban hubs, keeping a client suite at Example Tower, 21 Sample Road.
- **How CBRE can help:** **Flexible Workplace Solutions.** We help you blend leased, flexible and on-demand space into one network, and negotiate the terms that keep it agile. Link: "Explore flexible workplace solutions" → https://www.cbre.com.sg/ (placeholder)
- **Image:** IMG-03

#### The Focused HQ (F)
- **Tagline:** A dependable home base built for concentration.
- **Description:** Your people are in most days, and much of their work needs concentration, confidentiality or specialist set-ups. A well-planned headquarters with great acoustics, ergonomics and room to grow will serve you better than a heavily shared model.
- **Our recommendations:**
  1. Plan for assigned or neighbourhood desks, with quiet rooms and acoustic zoning for focus.
  2. Secure growth options such as expansion rights or adjacent space in your next lease.
  3. Add a few flexible collaboration settings so the office can adapt as work styles evolve.
- **In practice:** Sample case: A professional services firm secured expansion rights over an adjacent half-floor when it renewed its lease at Sample Square, 3 Placeholder Avenue.
- **How CBRE can help:** **Advisory & Transaction Services.** Our advisors help you find, negotiate and future-proof the right headquarters, from renewals and expansions to relocations. Link: "Explore Advisory & Transaction Services" → https://www.cbre.com.sg/ (placeholder)
- **Image:** IMG-04

#### The Experience-Led Campus (E)
- **Tagline:** A destination that earns the commute.
- **Description:** For you, the office is a strategic tool for culture, talent and client relationships. People come in for experiences they can't get at home, so hospitality, wellbeing and sustainability credentials matter as much as square feet.
- **Our recommendations:**
  1. Curate a hospitality-led experience: a welcoming arrival, café, events programme and wellbeing spaces.
  2. Prioritise buildings with strong green credentials, and track energy and wellbeing data for ESG reporting.
  3. Use a workplace app and a community programme to keep the space lively and measure engagement.
- **In practice:** Sample case: A global consumer brand opened a two-floor workplace with an event forum and wellness studio at The Canopy Works, 5 Placeholder Walk, and saw weekly office visits rise by a third.
- **How CBRE can help:** **Project Management.** Our project managers deliver amenity-rich, sustainable workplaces from design brief to handover, on time and on budget. Link: "Explore Project Management" → https://www.cbre.com.sg/ (placeholder)
- **Image:** IMG-05

### Section 5: Explore the other profiles (optional)

- **Heading:** Explore the other profiles
- **Tabs (each result shows the other three):**
  - The Collaborative Hub: Your office is where the best ideas happen together. Your people come in with purpose: to workshop, solve problems and build relationships.
  - The Flexible Network: Work happens everywhere, so your real estate should too. Your people are mobile and your needs change quickly.
  - The Focused HQ: A dependable home base built for concentration. Your people are in most days, and much of their work needs concentration, confidentiality or specialist set-ups.
  - The Experience-Led Campus: A destination that earns the commute. For you, the office is a strategic tool for culture, talent and client relationships.

### Section 6: Footer (every screen)

- **Disclaimer (placeholder):** [DISCLAIMER PLACEHOLDER: replace with wording approved by CBRE Singapore Legal/Compliance before publishing.] This quiz offers general guidance for discussion purposes only and does not constitute professional advice. Results are based on your answers and simplified assumptions.
- **Sample note (must be visible):** Sample content for template purposes only — replace before publishing.

## Image slots & Adobe Stock searches

**Licensing is a pending decision.** Licensing an image uses CBRE's Adobe Stock credits. Before licensing anything, the executing session must ask the user whether to (a) license the chosen images or (b) place watermarked comp/preview images as placeholders. Never license without explicit confirmation. Record each chosen asset's Adobe Stock ID next to its slot in the build notes.

Search on stock.adobe.com/sg with these filters: Content type = Photos; Orientation = Horizontal; exclude Editorial (only commercially licensable assets); exclude generative AI content unless CBRE policy allows it.

Picking images:
- Prefer Singapore or Asian context, with diverse people across age, gender and ethnicity.
- Reject any image with visible third-party brands or logos, including on laptops, phones, screens, cups and signage.
- Reject identifiable real landmarks or skylines.
- Keep the four result images similar in style and framing so the results feel like one set.

| Slot | What it shows | Adobe Stock search query | Orientation / min size | Alt text |
|---|---|---|---|---|
| IMG-01 Intro hero | A hybrid meeting in a modern office: a small, diverse Asian team around a table with a remote colleague on a wall screen. No readable UI or brands. | `hybrid meeting asian team video call modern office` | Landscape 16:9, ≥ 2400 × 1350 px | A team meeting in a modern office with a remote colleague joining by video |
| IMG-02 Result: The Collaborative Hub | A team workshop at a whiteboard or glass wall covered in sticky notes, with people actively engaged | `asian team workshop sticky notes whiteboard collaboration office` | Landscape 3:2, ≥ 1600 × 1067 px | Colleagues planning a project together at a whiteboard covered in notes |
| IMG-03 Result: The Flexible Network | A professional working on a laptop in a bright coworking or flex space | `asian professional working laptop coworking space bright` | Landscape 3:2, ≥ 1600 × 1067 px | A professional working on a laptop in a bright coworking space |
| IMG-04 Result: The Focused HQ | A person concentrating at an ergonomic desk in a calm, quiet office | `focused asian professional working desk quiet office ergonomic` | Landscape 3:2, ≥ 1600 × 1067 px | A professional concentrating at an ergonomic desk in a quiet office |
| IMG-05 Result: The Experience-Led Campus | A hospitality-style office café or lounge with plants, people chatting | `modern office lounge cafe biophilic design colleagues chatting asia` | Landscape 3:2, ≥ 1600 × 1067 px | Colleagues chatting in a plant-filled office café and lounge |
| IMG-06 "How CBRE can help" card (shared) | A workplace consultant walking clients through an office design plan or mood boards in a meeting room | `workplace consultant presenting office design plan to clients meeting room` | Landscape 3:2, ≥ 1200 × 800 px | A workplace consultant walking clients through an office design plan |

## QA checklist

- [ ] Brand kit is still **CBRE Test** and unmodified: no AI offer to change it was accepted, and no colour, font or logo overrides were applied anywhere.
- [ ] Folder is **CBRE Singapore**.
- [ ] Experience name is exactly **[Template] Workplace Strategy Quiz**.
- [ ] Tone and screen conventions match the New Joiner Onboarding reference experience in the same folder.
- [ ] There are seven questions with four answers each, matching section 2 word for word, in the listed order. Scoring codes (H/N/F/E) are not visible anywhere.
- [ ] The progress indicator runs from "Question 1 of 7" to "Question 7 of 7" and the bar advances each time.
- [ ] Back works on Q2–Q7 and changing an earlier answer changes the result.
- [ ] Test paths P1–P8 each produce the expected result in desktop **and** mobile preview, including the tie paths P5–P7.
- [ ] All four result screens have the label, name, tagline, description, image, three recommendations, the "In practice" line, the service card with link, the CTA, Retake and Share.
- [ ] Retake clears scores: run P1, retake, run P2, and the result is The Flexible Network.
- [ ] Share buttons open LinkedIn and email with the placeholder URL. Copy link works, or it was removed.
- [ ] CTAs and links point to placeholders (https://www.cbre.com.sg/contact-us and https://www.cbre.com.sg/) and open in a new tab.
- [ ] The disclaimer placeholder is present in the footer.
- [ ] The footer note "Sample content for template purposes only — replace before publishing." is visible on the intro, question and result screens on desktop and mobile.
- [ ] There are no real client names, real people or real property names or addresses (only One Marina Gateway, Example Tower, Sample Square and The Canopy Works, all fictional).
- [ ] Images are replaced in all six slots with licensed images or comp images. The licensing decision was confirmed with the user, and Adobe Stock IDs are recorded.
- [ ] Alt text is set for IMG-01 to IMG-06.
- [ ] Mobile preview: answer cards are easy to tap, there is no cut-off text, and result screens scroll cleanly.
- [ ] No data-capture form has been added.
- [ ] Spelling uses British/Singapore English (organisation, utilisation, neighbourhood, programme).
