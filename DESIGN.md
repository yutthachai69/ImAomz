---
name: Neo-Dev Bento
colors:
  surface: '#fff9ef'
  surface-dim: '#e1d9c7'
  surface-bright: '#fff9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e0'
  surface-container: '#f6edda'
  surface-container-high: '#f0e7d5'
  surface-container-highest: '#eae2cf'
  on-surface: '#1f1b10'
  on-surface-variant: '#4d4732'
  inverse-surface: '#343024'
  inverse-on-surface: '#f9f0dd'
  outline: '#7e775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#e9c400'
  secondary: '#7b41b3'
  on-secondary: '#ffffff'
  secondary-container: '#c588fe'
  on-secondary-container: '#54118a'
  tertiary: '#00696f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00f1ff'
  on-tertiary-container: '#006a70'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0050'
  on-secondary-fixed-variant: '#622599'
  tertiary-fixed: '#79f5ff'
  tertiary-fixed-dim: '#00dbe8'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#fff9ef'
  on-background: '#1f1b10'
  surface-variant: '#eae2cf'
typography:
  h1:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
  code:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-padding: 24px
  stack-gap: 16px
---

## Brand & Style

This design system is built on the principles of Neo-Brutalism, specifically tailored for a high-performance technical professional. It rejects the softness of modern SaaS aesthetics in favor of raw, high-contrast structural elements. The personality is energetic and unpretentious, reflecting a developer who values clarity, speed, and functional logic.

The visual style utilizes a rigid "Bento Box" architecture—a series of modular, rectangular containers that organize complex information into digestible, high-impact segments. By combining harsh geometry with a playful, vibrant color palette, the system communicates a "pro-tech" persona that is both technically authoritative and approachable.

## Colors

The palette is driven by high-contrast pairings to ensure maximum legibility and visual pop. 

- **Primary Yellow (#FFD700):** Used exclusively for highlights, warnings, or "active" states. It serves as a visual beacon within the layout.
- **Deep Purple (#4B0082):** The anchor color for primary actions, buttons, and high-level headings. It provides the "professional" weight to balance the playfulness of the yellow.
- **Background (#F9F8FF):** A soft lavender-tinted off-white. This reduces eye strain compared to pure white while maintaining the clean Neo-Brutalism look.
- **Pure Black (#000000):** Used for all borders, shadows, and body text to maintain the "comic-book" or "blueprint" aesthetic.

## Typography

This design system employs a trio of sans-serif fonts to distinguish between hierarchy levels. **Lexend** is used for headlines; its variable-width origins make it exceptionally readable and bold. **Inter** handles the body copy, providing a neutral, utilitarian balance to the more expressive headings. **Space Grotesk** is used for labels and technical data, leaning into the developer/support specialist identity with its geometric, monospaced-adjacent feel.

All headings should feature tight tracking and heavy weights to anchor the bento boxes. Body text remains spacious to ensure readability in documentation or project descriptions.

## Layout & Spacing

The layout is a **Fixed Grid Bento System**. Content is housed in containers that follow a 12-column grid. Spacing is strictly mathematical, based on a 4px baseline unit.

- **Bento Boxes:** Should span 3, 4, 6, or 12 columns depending on content priority.
- **Gutters:** A consistent 24px gap between all bento boxes ensures the hard shadows do not overlap awkwardly.
- **Padding:** Internal container padding is generous (24px) to ensure text does not feel crowded against the thick black borders.

## Elevation & Depth

Depth in this design system is achieved through **Physicality**, not light simulation. 

- **Hard Shadows:** Use non-blurry, 100% opacity black shadows. The standard offset is `4px 4px` or `6px 6px`.
- **Borders:** Every container, button, and input field must have a `3px` or `4px` solid black border. 
- **Layering:** When an element is hovered or "pressed," the shadow should disappear or move to `2px 2px`, creating a "tactile click" effect where the element physically moves closer to the page.
- **No Blurs:** Gaussian blurs and soft drop-shadows are strictly forbidden. All edges must remain crisp.

## Shapes

To lean into the "Brutalist" aspect of the design, the system uses a **Sharp (0)** roundedness setting. All containers, buttons, and tags are perfect rectangles. This reinforces the "grid" and "block" nature of the bento box layout. Sharp corners communicate precision and a technical, no-nonsense approach to application support and development.

## Components

### Buttons
Primary buttons use the Deep Purple (#4B0082) background with White text and a 4px black shadow. On hover, the button shifts down and right by 2px, and the shadow shrinks accordingly. Secondary buttons use the Primary Yellow (#FFD700) with Black text.

### Bento Cards (Containers)
The core component. Every card has a White background, a 3px black border, and a 6px black shadow. Top-right corners of cards are ideal locations for "Labels" or "Tags" to categorize project types (e.g., "Python", "Support", "Infrastructure").

### Chips / Tags
Small rectangular boxes with a 2px black border. Use Primary Yellow for tech stack tags and light grey for metadata. No shadows on chips to keep them visually "flatter" than the cards they inhabit.

### Input Fields
White background with a 3px black border. When focused, the border remains black but the background shifts to a very faint version of the Primary Yellow or the shadow increases in size to indicate activity.

### Status Indicators
For Application Support metrics, use high-contrast status dots: Pure Green for "System Up," Primary Yellow for "Warning," and a bright Red for "Critical," all encased in 2px black borders.