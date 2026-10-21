---
name: WHITE MOUNTAIN
description: Halal beef from Satun, lettered like a hand-painted kedai signboard.
colors:
  signwriter-red: "#c8231f"
  signwriter-red-deep: "#9e1915"
  board-gold: "#efc659"
  board-green: "#1f5a3d"
  board-green-deep: "#174630"
  enamel-cream: "#f3ead6"
  enamel-cream-dim: "#d9ccb0"
  field-cream: "#fbf6ea"
  board-ink: "#14241b"
typography:
  display:
    fontFamily: "Knewave, Lalezar, Chonburi, ZCOOL QingKe HuangYou, serif"
    fontSize: "clamp(3.2rem, 9vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Knewave, Lalezar, Chonburi, ZCOOL QingKe HuangYou, serif"
    fontSize: "clamp(2.2rem, 5vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.05
  item-name:
    fontFamily: "Knewave, Lalezar, Chonburi, ZCOOL QingKe HuangYou, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.1
  price:
    fontFamily: "Lalezar, serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "'tnum'"
  title:
    fontFamily: "Lalezar, serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Sarabun, Vazirmatn, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Sarabun, Vazirmatn, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  none: "0px"
spacing:
  gap: "clamp(1rem, 3vw, 2rem)"
  board-pad: "clamp(1.25rem, 4vw, 3.5rem)"
  gutter: "clamp(0.75rem, 2.5vw, 1.75rem)"
  line: "3px"
components:
  hanging-plaque:
    backgroundColor: "{colors.signwriter-red}"
    textColor: "{colors.enamel-cream}"
    typography: "{typography.item-name}"
    rounded: "{rounded.none}"
    padding: "1rem 1.6rem 0.9rem"
  hanging-plaque-hover:
    backgroundColor: "{colors.signwriter-red-deep}"
  plaque:
    backgroundColor: "{colors.signwriter-red}"
    textColor: "{colors.enamel-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.3rem 0.9rem"
  plaque-hover:
    backgroundColor: "{colors.signwriter-red-deep}"
  plaque-quiet:
    backgroundColor: "{colors.enamel-cream}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.3rem 0.9rem"
  plaque-quiet-hover:
    backgroundColor: "{colors.enamel-cream-dim}"
  add-button:
    backgroundColor: "{colors.enamel-cream}"
    textColor: "{colors.board-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.9rem"
  add-button-hover:
    backgroundColor: "{colors.board-gold}"
  add-button-on:
    backgroundColor: "{colors.signwriter-red}"
    textColor: "{colors.enamel-cream}"
  lang-tag:
    backgroundColor: "transparent"
    textColor: "{colors.enamel-cream}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.6rem 0.4rem"
  lang-tag-active:
    backgroundColor: "{colors.board-gold}"
    textColor: "{colors.board-ink}"
  board:
    backgroundColor: "{colors.board-green}"
    textColor: "{colors.enamel-cream}"
    rounded: "{rounded.none}"
    padding: "{spacing.board-pad}"
  order-chit:
    backgroundColor: "{colors.enamel-cream}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.25rem, 3.5vw, 2.75rem)"
  chit-field:
    backgroundColor: "{colors.field-cream}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.7rem"
---

# Design System: WHITE MOUNTAIN

## Overview

**Creative North Star: "The Satun Kedai Signboard"**

The site is a stack of hand-painted signboards from a southern Muslim tea shop in Satun. Each section is its own green board with a doubled gold edge, set on a deeper green wall. Product names are lettered in several scripts side by side, the way kedai boards letter Thai, Jawi and Rumi together; whichever language is active is painted large and the others sit small beneath it. Prices are painted in gold numerals, and the thing for sale is picked out in signwriter red.

Everything is flat sign paint: solid fills, one even 3px ink line around every cream panel and photo, double-ruled gold edges on boards, no gradients and no shadows. Cream enamel panels (the hero pack frame, the order chit, the brochure sheet) are pinned onto the green the way a shop pins a photo or a docket onto its board.

The world refuses the white-grid exporter page with a row of green halal badges.

**Key Characteristics:**
- Green board grounds (two greens: wall and board) with 6px double gold board edges.
- Cream enamel panels and photo frames, each outlined with a 3px ink line.
- Signwriter red reserved for actions and the selected item; gold for rules, prices and active states.
- Brush-lettered display (Knewave, self-hosted) for Latin; Chonburi Thai, Lalezar Arabic and prices, ZCOOL QingKe HuangYou Chinese; Sarabun / Vazirmatn for reading.
- Multi-script product names, active script large.
- Hanging plaque CTA on painted gold cords; gold-ruled price rail; cream order chit.
- Language switch "repaints" lettering with a left-to-right (RTL: right-to-left) clip wipe.

## Colors

Flat sign-paint palette: two board greens, cream enamel, gold leaf-paint, signwriter red, and a near-black green ink.

### Primary
- **Signwriter Red** (#c8231f): the item being sold and the act of buying it: the hanging plaque, the red plaque button, the selected item's add button, the order chit heading.
- **Deep Signwriter Red** (#9e1915): hover for red plaques; error text on the chit.

### Secondary
- **Board Gold** (#efc659): rules, board edges, prices, the hanging cords, contact icons, the active language tag, focus ring, selection, and hover fill on cream buttons.

### Neutral
- **Board Green** (#1f5a3d): the face of every board.
- **Wall Green** (#174630): the page behind the boards and the sticky top beam; also the hover fill for rail and contact rows.
- **Enamel Cream** (#f3ead6): main text on green, and the ground of pinned panels and quiet buttons.
- **Dim Enamel** (#d9ccb0): secondary text on green, unselected language tag borders, slip row dividers, quiet-button hover.
- **Field Cream** (#fbf6ea): input and slip-text fields inside the chit, a shade lighter than the chit.
- **Board Ink** (#14241b): the 3px outline on every panel and button, and text on cream.

### Named Rules
**The Red Means Sale Rule.** Signwriter red marks only what you act on to buy: the CTA plaques and the selected item. Headings on green are cream, prices are gold; red never decorates.

**The Gold Is Paint Rule.** Gold is a flat line or numeral colour. It is never a gradient, a metallic sheen or a fill behind body text.

## Typography

**Display Font:** Knewave (self-hosted woff2, Latin range) with Lalezar / Chonburi / ZCOOL QingKe HuangYou per script
**Body Font:** Sarabun (Vazirmatn under Arabic), with system sans fallback
**Numeral / Sign Font:** Lalezar for prices, the brand and the contact name

**Character:** Brush caps for the painted words, a plain humanist sans for everything you read. Each script gets its own sign-painter face via `:lang()`, swapped through `--display` / `--text`, rather than one font stretched over every script.

### Hierarchy
- **Display** (400, clamp(3.2rem, 9vw, 7.5rem), line-height 0.95): the WHITE MOUNTAIN wordmark, one word per line.
- **Headline** (400, clamp(2.2rem, 5vw, 3.6rem), line-height 1.05): board titles, cream on green, red on the chit.
- **Item Name** (400, clamp(1.5rem, 3vw, 2.25rem), line-height 1.1): active-script product name; the other scripts follow at 0.95rem in Sarabun, Dim Enamel. Also the hanging plaque's lettering (clamp(1.35rem, 2.2vw, 1.7rem)).
- **Price** (Lalezar 400, clamp(1.8rem, 3.5vw, 2.6rem), tabular): gold item prices; 1.5rem on the price rail; the "THB" unit drops to 0.9rem Sarabun 600 in Dim Enamel.
- **Title** (Lalezar 400, clamp(1.8rem, 3.5vw, 2.6rem)): the export manager's name in gold.
- **Body** (400, 1.0625rem, line-height 1.6): running text, 38–60ch.
- **Label** (600, 0.9–1.05rem): buttons, tags, nav, form labels; the place line under the wordmark is 700 uppercase at 0.08em.

### Named Rules
**The Active Script Rule.** Every product name is shown in all four scripts; the active language is painted large in its own sign face and the other three sit small beneath. Never show only one script.

**The Painted Numerals Rule.** Prices are Lalezar, gold, tabular, never in the body face.

## Layout

A centred column capped at 82rem with a thin clamp(0.75rem, 2.5vw, 1.75rem) wall gutter. Each section is a separate board stacked with clamp(1rem, 3vw, 2rem) of wall between, padded clamp(1.25rem, 4vw, 3.5rem) inside. The hero is a 1.5fr/1fr grid with the pinned pack at the end and the four-column price rail spanning the bottom. The menu board is a list of items, each a grid of photo / names and description / price / add button, separated by dashed cream rules. At 60rem hero, farm and contact collapse to one column, the rail becomes 2×2 and the chit form stacks; at 40rem the nav hides (language tags stay), item rows become photo + text with price and a full-width add button beneath.

## Elevation & Depth

Flat. No shadows, no gradients. Depth is the layering of physical boards: Wall Green behind, Board Green boards with a 6px double gold edge, cream panels pinned on top with a 3px ink line, and photos framed again inside them. Doubled frames (ink border plus a coloured `outline`) stand in for the raised edge of a painted plaque.

### Named Rules
**The Flat Paint Rule.** Every surface is a solid fill. If something needs to stand forward, give it a cream panel and an ink line, or a second outline, never a shadow.

## Shapes

Square corners throughout (0px). The form language is lines: 6px double gold for board edges, 3px Board Ink around every cream panel, photo and button, 2px gold for rules, rail dividers and the header's bottom edge, 2px dashed translucent cream between menu items. Photos and the plate logo get a double frame: 3px ink border plus a 3px cream or gold outline. The one non-rectangular silhouette is the hanging plaque's pair of gold cords meeting at a nail, drawn as an inline SVG above it.

## Components

### Buttons ("plaques")
Small painted signboards.
- **Shape:** square, 3px Board Ink border plus a 2px outline in the fill colour (the plaque's painted edge).
- **Primary:** Signwriter Red, cream text, Sarabun 600 1.05rem, padding 0.95rem 1.3rem 0.9rem; hover to Deep Signwriter Red over 160ms ease-out.
- **Quiet:** Enamel Cream with ink text; hover to Dim Enamel (on the chit, hover goes to Gold).
- **Focus:** 3px gold outline, 3px offset.

### Hanging Plaque (signature CTA)
The main "Request a quote" action: a red plaque lettered in the display face, 3px ink border plus 3px gold outline, hung from two gold cords meeting at a nail (SVG pseudo-element). On hover it swings (rotate -1.5deg around a point above it, 260ms cubic-bezier(0.16, 1, 0.3, 1)) and deepens to Deep Signwriter Red.

### Price Rail
A strip of the four items along the bottom of the hero board: gold-ruled top and bottom, gold dividers between cells, bold name over a gold Lalezar price. Rows hover to Wall Green. 2×2 under 60rem.

### Menu Items (list rows)
Photo (3px ink border, 3px cream outline) / multi-script names and description / gold price / cream add button. Selected item: add button turns red, the active name turns gold.

### Order Chit (card)
- **Corner Style:** square.
- **Background:** Enamel Cream with 3px ink border, centred at max 56rem on its board.
- **Content:** red headline, slip lines ruled in ink and Dim Enamel, 2px ink quantity steppers that fill gold on hover.

### Inputs / Fields
- **Style:** Field Cream, 2px ink border, square, red caret.
- **Error:** red border plus 2px red outline; message in Deep Signwriter Red.

### Navigation
A sticky top beam on Wall Green with a 2px gold bottom edge. Brand in Lalezar beside a 44px logo in a 2px gold frame; text links 600 underline on hover. Language tags are small painted tags: 2px Dim Enamel border, hover gold, active solid gold with ink text. Under 40rem the links hide and the brand text drops to the logo.

### Repaint (signature motion)
On language switch, product names, the hook and board headlines are re-lettered with a clip-path wipe from inset(0 100% 0 0) to full over 520ms cubic-bezier(0.16, 1, 0.3, 1), mirrored for Arabic. Off under reduced motion.

## Do's and Don'ts

### Do:
- **Do** put every section on its own Board Green board with a 6px double gold edge.
- **Do** outline every cream panel, photo and button with a 3px Board Ink line.
- **Do** show product names in all four scripts with the active one large in its own sign face.
- **Do** paint prices in gold Lalezar with tabular figures.
- **Do** keep the hanging plaque as the primary call to action.

### Don't:
- **Don't** add shadows, gradients or rounded corners.
- **Don't** use Signwriter Red for decoration or headings on green; it marks what is for sale.
- **Don't** fall back to a white grid with a row of green halal badges.
- **Don't** set display lettering in the body sans or a system face.
