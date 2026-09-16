# Design system — robabby.com

The site uses the editorial direction approved on 2026-09-16: warm ivory, forest green, restrained typography, and space around useful content. Shared CSS lives in `app/globals.css`; fonts are configured in `app/layout.tsx`.

## Typography

| Token | Font | Use |
|---|---|---|
| `--font-display` | Fraunces, regular, optical sizing | Personal name, page headings, section headings |
| `--font-body` | Instrument Sans, regular and medium | Navigation, paragraphs, labels, buttons |

Keep display headings restrained. Sentence case and first-person language are intentional parts of the personal brand. Body copy uses comfortable line lengths and a 1.6–1.8 line height. Small uppercase labels supply hierarchy without replacing descriptive headings.

## Color

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `#f5f3eb` | `#111d17` | Page background |
| `--ink` | `#20372c` | `#f0f1e6` | Main text |
| `--body` | `#4f5b51` | `#b4c1b6` | Supporting text |
| `--line` | `#cdd1c4` | `#384b3e` | Dividers |
| `--accent` | `#294c38` | `#ccdebb` | Main action |
| `--pale` | `#e5e9dd` | `#2b4033` | Product figures and process context |
| `--contact` | `#203b2d` | `#294534` | Contact section |

Themes use `data-theme` on the document. The saved preference takes precedence over the system preference. Without JavaScript, CSS follows the system preference and hides the inactive theme button.

## Structure

- Home uses the descriptor “Product, design & engineering” in the header and “Rob Abby” as the sole personal-name heading. Do not duplicate it with a homepage logo.
- Inner pages link home with Rob’s name. Shared navigation points to the WavePoint case study, Work with me, and the homepage About section.
- The maximum content width is 1160px. Layouts become a single column on phones; navigation remains visible without a JavaScript menu.
- WavePoint imagery uses real public product views. Keep the example-chart label visible; never substitute private customer or chart data.
- Explain the development process through a numbered sequence and a compact project-context summary. Avoid decorative dashboards or a grid of vendor logos.
- The primary action is “Discuss a project,” leading to the contact section or email. Keep the contact address visible and selectable.
- The historical resume remains accessible at its existing URL, with noindex and no promotional CTA in the new site.

## Accessibility and performance

Use semantic links and buttons, one h1 per page, clear section headings, a working skip link, visible keyboard focus, and informative image alternatives. Native details elements handle the small FAQ. All substantive content is server-rendered and remains available without JavaScript.

Use `next/image` with dimensions and responsive sizes. Preload only the hero portrait; other images load lazily. Use `next/font` for the two existing font families. Keep motion minimal and respect reduced-motion preferences. Avoid horizontal overflow at narrow widths and at enlarged text sizes.

Page-specific metadata is defined in `app/lib/site.ts`. The canonical origin is `https://www.robabby.com`. Person and WavePoint are separate structured-data entities connected by the founder relationship; do not represent the business URL as another identity of the person.
