# Sukun Studio Design Style Guide

This landing page uses a cinematic, futuristic studio style inspired by `design-ref/rd-01.webp`. The visual language should feel premium, technical, dark, and atmospheric while keeping the actual Sukun Studio content clear and scannable.

## Visual Direction

- Overall mood: high-end creative production, dark interface, violet light, cinematic depth.
- Base environment: near-black navy surfaces with subtle grids, star-like texture, and soft violet spotlights.
- UI shape language: sharp, restrained 8px radius cards and buttons. Avoid pill-heavy or overly rounded layouts except for small eyebrow labels.
- Layout rhythm: generous vertical space, constrained max-width containers, and dense but readable content cards.
- Decorative style: use light, glow, glass, borders, and subtle gradients. Avoid colorful illustration, beige palettes, large blobs, or marketing-style split hero art.

## Color System

Primary colors live in `src/index.css` under Tailwind `@theme`.

```css
--color-primary: #7c5cff;
--color-secondary: #aeb3c7;
--color-surface: #02020a;
--color-surface-elevated: #080817;
--color-on-surface: #ffffff;
```

Usage:

- `#02020a`: main page background.
- `#080817`: elevated dark panels.
- `#7c5cff`: primary violet actions, glows, and active accents.
- `#aeb3c7`: secondary body text.
- White with opacity: borders, subtle text, card surfaces, dividers.
- Violet tints: `violet-200`, `violet-300`, `violet-400`, `violet-500` for highlights and hover states.

## Typography

Fonts are loaded in `index.html`.

- Headings and brand text: `Syne`.
- Body text, buttons, and supporting UI: `Poppins`.
- Heading style: bold, tight leading, white.
- Body style: muted secondary color, comfortable line height.
- Eyebrows: uppercase, small, wide tracking, violet-tinted.

Current examples:

- Hero heading: `font-syne`, `font-bold`, `leading-[0.95]`, `text-[clamp(2.85rem,6vw,5.7rem)]`.
- Section heading: `font-syne`, `text-4xl md:text-5xl`, `leading-tight`.
- Footer headline: exactly two lines using block spans with `whitespace-nowrap`.

## Layout Rules

- Main content width: `max-w-7xl` for standard sections.
- Primary page padding: `px-4`, with large vertical section padding like `py-24 md:py-32`.
- Hero: two-column desktop grid with text on the left and showreel media on the right.
- Services: 1 column mobile, 2 columns tablet, 3 columns wide desktop.
- Portfolio: equal two-column grid on desktop; do not row-span the first card because it creates empty space.
- Footer: left brand/CTA block and right link columns on large screens; stacked on smaller screens.

## Backgrounds And Atmosphere

Use these motifs consistently:

- Hero grid: subtle 72px line grid over a dark navy gradient.
- Star texture: low-opacity radial dots masked out down the page.
- Spotlights: violet vertical beams on the left and right edges.
- Section bands: alternating dark radial violet gradients.
- Glows: violet shadows for featured media, buttons, and selected surfaces.

Avoid adding separate decorative circles, bokeh blobs, or unrelated gradients. If adding new visual depth, prefer the existing spotlight, grid, border, and glass treatment.

## Components

### Navigation

- Fixed at top with `bg-[#050514]/75`, blur, white/10 border.
- Logo is a 36px square with an 8px radius.
- Desktop links are small, quiet, and secondary-colored.
- Mobile uses an animated dropdown with the same glass surface.

### Buttons

Three reusable styles exist:

- `.button-primary`: violet fill, violet border, visible glow.
- `.button-secondary`: transparent glass button with white/10 border.
- `.button-light`: white button for high-emphasis CTAs inside dark/violet panels.

Buttons should stay 8px radius and use icon+text when the action benefits from an icon.

### Cards

Reusable card style is shared by:

- `.feature-card`
- `.workflow-card`
- `.portfolio-card`
- `.contact-panel`

Card traits:

- 8px radius.
- `border-white/10`.
- translucent white surface.
- backdrop blur.
- deep dark shadow.
- subtle pseudo-element highlight with diagonal white sheen and violet radial glow.

### Service Pills

Service tags use `.service-pill`:

- Small text.
- 8px radius.
- dark translucent fill.
- white/10 border.
- violet border and white text on hover.

### Media Frames

Video frames use:

- fixed aspect ratio with `aspect-video`.
- black background.
- 8px radius.
- white/10 border.
- violet glow shadow.

Keep embedded YouTube videos inside these frames so media presentation remains consistent.

## Motion

Motion uses `motion/react`.

- Use small entrance transitions: opacity plus slight Y movement or scale.
- Use `viewport={{once: true, margin: '-80px'}}` for scroll-triggered section items.
- Keep durations restrained and avoid looping decorative motion unless it supports the cinematic feel.

## Responsive Behavior

- Use Tailwind breakpoints instead of custom media queries where possible.
- Preserve readable text on mobile by avoiding viewport-width-only font sizing.
- Long CTAs and email addresses must wrap or break safely.
- Intentional two-line headings should use block spans instead of relying on browser wrapping.
- Avoid layout choices that create dead space, such as row-spanning video cards without matching content height.

## Content Rules

- Keep Sukun Studio content unchanged unless explicitly requested.
- Existing content includes:
  - service suite titles, subtitles, categories, and items.
  - workflow steps.
  - mission statement.
  - portfolio video titles and YouTube IDs.
  - contact details and CTA labels.
- When adding structure, do not add new marketing copy unless requested.

## Implementation Notes

- Primary page implementation: `src/App.tsx`.
- Styling system: `src/index.css`.
- Static logo: `src/sukun_logo.png`.
- Vite asset typing: `src/vite-env.d.ts`.
- External embeds:
  - Cal.com script in `index.html`.
  - YouTube iframes in the hero and portfolio.

Before shipping style changes, run:

```bash
npm run lint
npm run build
```
