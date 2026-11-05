---
name: Javier Guerra — Portfolio
description: One quiet reading column of ink on cool paper, where type, hairlines and real screenshots do the work.
colors:
  ink: "hsl(220 22% 10%)"
  ink-blue: "hsl(226 70% 45%)"
  cool-paper: "hsl(210 20% 99%)"
  graphite: "hsl(220 8% 38%)"
  hairline: "hsl(220 14% 89%)"
  paper-shade: "hsl(220 16% 96%)"
  night-ink: "hsl(220 14% 7%)"
  night-text: "hsl(220 14% 93%)"
  night-graphite: "hsl(220 8% 64%)"
  night-hairline: "hsl(220 10% 17%)"
  night-shade: "hsl(220 12% 11%)"
  night-blue: "hsl(224 92% 74%)"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    letterSpacing: "-0.025em"
  body-lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
  data:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  column: "42rem"
  gutter-mobile: "20px"
  gutter: "24px"
  section-gap: "56px"
  section-pad-top: "40px"
  footer-gap: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cool-paper}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-shade}"
  icon-button:
    textColor: "{colors.graphite}"
    rounded: "{rounded.lg}"
    size: "40px"
  icon-button-hover:
    backgroundColor: "{colors.paper-shade}"
    textColor: "{colors.ink}"
  nav-item:
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "0 10px"
    height: "32px"
  nav-item-active:
    textColor: "{colors.ink}"
  filter-toggle:
    textColor: "{colors.graphite}"
    rounded: "{rounded.sm}"
    height: "32px"
  filter-toggle-pressed:
    textColor: "{colors.ink}"
  screenshot-frame:
    backgroundColor: "{colors.paper-shade}"
    rounded: "{rounded.lg}"
---

# Design System: Javier Guerra — Portfolio

## Overview

**Creative North Star: "The Quiet Column"**

A single reading column of near-black ink on cool near-white paper. Typography, spacing and real screenshots carry the page; there is no decoration standing in for content. The register is the canonical developer portfolio executed at craft level: calm, legible in a skim, confident without volume.

Structure comes from hairline rules and rhythm, not containers. Sections are separated by a 1px rule and generous vertical space; entries are rows, not cards. Color is almost absent: one ink-blue accent appears only where something is interactive at the moment of interaction (link hover, focus, selection, the pressed filter, the contact email underline). Motion is short and soft: one entrance rise per page and a slow, small drift on project captures.

The system explicitly replaces a template look; the refused signatures are a bottom dock, blur-fade on every element, purple radial glow, shimmer buttons, emoji greetings and badge clouds.

**Key Characteristics:**
- One centered column, 42rem max, on every route.
- Ink and paper; one ink-blue accent reserved for interaction.
- Geist for all text; Geist Mono only for dates and data.
- Hairline rules instead of cards; screenshots in 1px frames with 8px corners.
- Full light and dark parity; dark is a tonal inversion, not a new palette.

## Colors

A near-monochrome cool-gray palette with a single saturated blue held back for interaction.

### Primary
- **Ink** (`ink`): All headings, names, project titles, body copy (at 85-90% opacity for long paragraphs), and the fill of the one primary button. In dark mode it becomes **Night Text** (`night-text`).

### Secondary
- **Ink Blue** (`ink-blue`): Link hover color and underline, the focus ring (2px outline, 3px offset), text selection (at 22% alpha), the pressed filter underline, and the resting underline of the contact email (at 50% alpha). In dark mode it lifts to **Night Blue** (`night-blue`) so it stays legible on night ink.

### Neutral
- **Cool Paper** (`cool-paper`): Page background. Dark: **Night Ink** (`night-ink`).
- **Graphite** (`graphite`): Secondary text: roles, descriptions on the projects index, tech lists, section labels, dates, nav items at rest. Dark: **Night Graphite** (`night-graphite`).
- **Hairline** (`hairline`): Every border and rule: section dividers, row separators, screenshot frames, the secondary button stroke, the header divider. Dark: **Night Hairline** (`night-hairline`).
- **Paper Shade** (`paper-shade`): Hover wash on nav items, icon buttons and the secondary button; the empty fill behind screenshots and avatars. Dark: **Night Shade** (`night-shade`).

### Named Rules
**The Accent Is a Response Rule.** Ink Blue never sits on the page as decoration or fill. It appears on hover, focus, selection or a pressed state; the contact email underline is the single resting exception. If a screen shows blue with nobody touching it, something is wrong.

**The Opacity Not Hue Rule.** Intermediate emphasis is made by lowering Ink's alpha (90%, 85%, 35% underline, 28% frame on hover), not by adding new grays or tints.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono, for dates, the language code, and tabular data only

**Character:** One neo-grotesque family at a few tight sizes. Hierarchy comes from weight (600 vs 400) and color (Ink vs Graphite) more than from size jumps. Stylistic sets `ss01` and `cv11` are on globally.

### Hierarchy
- **Display** (600, 2rem mobile / 2.5rem from 640px, 1.1, -0.03em): The person's name on home and the page title on Projects. One per page.
- **Headline** (600, 1.5rem, -0.02em): The closing "Contact" heading only.
- **Title** (600, 15px, tight tracking): Project titles, job titles, degrees, the name mark in the header.
- **Body Lead** (400, 17px, 1.625): The intro bio and page intros, capped at 34-36rem.
- **Body** (400, 14-15px, 1.625): Descriptions and paragraphs inside entries.
- **Label** (500, 13px, Graphite): Section headings. They are real `h2`s set small and quiet, sitting at the left of the section head with an optional arrow link opposite.
- **Data** (Geist Mono 400, 12px, tabular numerals): Timeline dates. The language switch uses mono 12px uppercase.

### Named Rules
**The Mono Means Data Rule.** Geist Mono is only for dates, codes and numbers that benefit from tabular alignment. Never for headings, labels or decoration.

**The Weight Not Size Rule.** Within an entry, title and body differ by weight and color at nearly the same size (15px/600 vs 14px/400). Don't introduce intermediate size steps to create hierarchy.

## Layout

A single centered column, `max-width: 42rem`, with 20px side padding on mobile and 24px from 640px. The header and footer live inside the same column; nothing is full-bleed.

Sections stack with a 56px top margin, a hairline top border, 40px padding above and 24px below; each section head sits 32px above its content. The footer is pushed down with a 96px gap and its own hairline.

Inside sections the grammar is the **timeline row**: a fixed left column (10rem for dates, 8.5rem for skill groups, 11rem for project thumbnails on the index) and a fluid right column with 24px gap from 640px, collapsing to a single stacked column on mobile. Featured projects use a two-column grid from 640px (24px column gap, 48px row gap). The projects index is a ruled list: each entry is a row with a bottom hairline and 28px vertical padding.

Breakpoint: one, at 640px (Tailwind `sm`).

## Elevation & Depth

Flat. Depth is carried by hairlines and tonal washes (Paper Shade), never by layered surfaces. The only shadow in the system is a 1px contact shadow under the primary button, which reads as weight rather than lift.

### Shadow Vocabulary
- **Button contact** (`box-shadow: 0 1px 2px hsl(220 30% 5% / 0.12)`): Primary button only.

### Named Rules
**The No Floating Cards Rule.** Content never sits in shadowed cards. If grouping is needed, use a hairline rule or a row, not a box with elevation.

## Shapes

Small, consistent radii on a 0.5rem base: 8px for buttons, icon buttons and screenshot frames; 6px for nav items and the skip link; 4px for focus outlines, inline links and filter toggles; full circles only for the portrait and school logos. Borders are always 1px Hairline. Screenshots are cropped to a 16:10 frame, anchored to the top of the capture.

## Components

### Buttons
Solid and quiet; only two exist, side by side in the intro.
- **Shape:** Gently rounded (8px), 40px tall, 16px horizontal padding, 14px/500 label with a 16px line icon (stroke 1.75) and 8px gap.
- **Primary:** Ink fill, Cool Paper text, button contact shadow. One per page: the email call to action.
- **Hover / Active:** Primary fades to Ink at 86%; all buttons press down 1px on `:active`. 150ms transitions.
- **Secondary:** Transparent with a 1px Hairline stroke and Ink text; hover adds the Paper Shade wash.
- **Icon button:** 40px square, Graphite icon (18px), hover to Ink on Paper Shade. Used for GitHub, LinkedIn and X.

### Links
Three link treatments, all with 1px underlines offset 5-6px.
- **Title link:** No visible underline at rest; on hover (or when its project row is hovered or focused) a 35% Ink underline fades in.
- **Arrow link:** Ink text with a Hairline underline and a 14px arrow icon; hover turns text and underline Ink Blue and nudges the arrow 1px up-right with the expo-out curve. Used for "all projects", project Live/Code links and LinkedIn.
- **Contact email:** 18px (20px from 640px), 500 weight, Ink text with a 1.5px Ink Blue underline at 50% that becomes full Ink Blue text on hover. The page's closing gesture.

### Chips
There are no chips. Technology lists are plain inline text (13px, Graphite, 12px gaps), and the projects filter is a row of text toggles.
- **Filter toggle:** 14px Graphite text, 32px tall, horizontally scrollable without a scrollbar. Hover goes to Ink. Pressed state is Ink text with a 1.5px Ink Blue underline offset 6px.

### Cards / Containers
None. Entries are rows separated by hairlines (see Layout). The one framed element is the screenshot.

### Navigation
- Header: name mark (Title style) on the left; on the right, 32px-tall nav items at 14px Graphite with 6px corners, a 1px x 16px Hairline divider, the mono uppercase language code, and the theme toggle as a 32px square nav item.
- Hover: Ink text on Paper Shade. Current page: Ink text, no wash.
- The language switch keeps the current path and only swaps the locale segment.
- The same header applies on mobile with no hamburger menu; the four items fit.

### Screenshot Frame (signature)
The 16:10 frame (8px radius, 1px Hairline border, Paper Shade fill) around each project capture, with the image anchored top. In dark mode the capture is dimmed to 88% brightness.
- **Signature interaction:** hovering or focusing anywhere in a project entry does three things at once: the frame border sharpens to Ink at 28% (300ms), the capture scales to 1.025 (700ms), and the title underline fades in. All use `cubic-bezier(0.16, 1, 0.3, 1)`.

### Page Entrance
Each route's first block rises 6px and fades in over 600ms with the same expo-out curve. Content is visible by default, and reduced-motion collapses all animation and transition to near zero.

## Do's and Don'ts

### Do:
- **Do** keep every route inside the single 42rem column with the same header and footer.
- **Do** separate sections and list entries with 1px Hairline rules and vertical space.
- **Do** reserve Ink Blue for hover, focus, selection and pressed states (plus the contact email underline).
- **Do** use Geist Mono only for dates, codes and tabular data.
- **Do** frame real screenshots at 16:10 with an 8px radius and a 1px Hairline border.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for motion, 150ms for color state changes, and honor reduced motion.
- **Do** ship light and dark together, swapping every token to its night counterpart.

### Don't:
- **Don't** put content in shadowed cards or add elevation beyond the primary button's contact shadow.
- **Don't** add a bottom dock, blur-fade on every element, purple radial glows, shimmer buttons, emoji greetings or badge clouds.
- **Don't** render technology stacks as pill badges; they are plain Graphite text.
- **Don't** use Ink Blue as a fill, a background or a decorative color at rest.
- **Don't** add new grays or tints; vary Ink's opacity instead.
