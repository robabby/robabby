# Design system — robabby.com

## Overview

**Ink + Ultramarine** is the editorial direction accepted on 2026-11-06. Cool paper, dark ink, expressive serif headings, and a blue accent give Rob’s personal site a clear identity. Open columns, thin rules, and real work imagery carry the hierarchy. WavePoint is the featured current business within a broader personal introduction.

This is the canonical visual reference. The implementation lives in `app/globals.css`, `app/work/case-study.module.css`, and the shared components; fonts are configured in `app/layout.tsx`. Copy authority and working-draft boundaries are recorded in `CLAUDE.md`.

## Colors

Ultramarine marks emphasis and action. Neutral surfaces and dividers keep the work itself prominent.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `#f9fafb` | `#191c20` | Page background |
| `--ink` | `#202429` | `#eef0f2` | Headings and main text |
| `--muted` | `#58616a` | `#b1b8c1` | Supporting copy, navigation, captions, employer logos |
| `--accent` | `#2945ba` | `#b0c3ff` | Text links, second hero line, active gallery choice, focus |
| `--action` | `#2945ba` | `#b7c8ff` | Filled action and text-selection background |
| `--action-ink` | `#fff` | `#1c2b53` | Text on the action color |
| `--line` | `#d2d8dd` | `#3c434b` | Section rules and control borders |
| `--surface` | `#f0f3f5` | `#21262c` | Hover background for outlined controls |
| `--image-mat` | `#e9edf0` | `#dde3e8` | Pale framing around product and historical screenshots |

Themes use `data-theme` on the document. A saved choice takes precedence over the system preference. Without JavaScript, CSS follows the system preference and hides the theme button. Image mats remain pale in both themes; the captured product interface retains its own colors.

## Typography

| Role | Family and treatment | Use |
|---|---|---|
| Display | Newsreader, Georgia, serif; regular (400), with italic available | Hero statement, page and section headings |
| Personal name | Newsreader, medium (500); 48px desktop, 38px phone, 33px at 360px and below | Homepage h1 |
| Body | Instrument Sans, sans-serif; 17px / 1.65 base | Paragraphs and supporting copy |
| Labels and controls | Instrument Sans; generally 12–15px | Navigation, captions, buttons, role labels |

The current homepage trial is “I design and / build software.” on two lines. Both lines are upright; the second uses the accent color. It scales to 68px on wide screens, 48px below 1000px and on phones, and 42px at 360px and below. Rob’s name remains the page’s sole h1. The homepage share card uses the same two-line statement.

Headings use close leading (usually 1.08–1.15) and slightly tightened tracking. Body copy uses 1.65–1.8 leading with a general 68ch limit; long-form copy is limited to 65ch. Sentence case and first-person language support the personal voice. Do not add decorative ampersands or a red accent.

## Layout

- The shared container is at most 1200px wide, with 48px side gutters. Gutters become 28px at 1000px and below, then 20px at 720px and below.
- The recurring editorial grid uses a 280px heading or identity column, a 90px gap, and a flexible content column. At 1000px and below, the rail is 220px and the gap 50px. Sections stack at 720px and below.
- Selected work uses a wider WavePoint column and narrower SAVO column (1.45:1, with a 40px gap), then stacks on phones. Project entries are open content groups rather than enclosed cards.
- Major sections are separated by one-pixel rules and generous vertical space. Contact uses the page background and the same editorial grid.
- The SAVO article uses the shared rail for its contents list, sticky 28px from the top on larger screens. On phones, contents precede the story and stop being sticky. Privacy and the not-found page use the narrower 760px reading layout.

Keep navigation visible at every width. The mobile header places the identity and theme control above a full-width row of navigation links, without a menu drawer. The portrait moves beside the name and location, shrinking from 192px to 84px, then 72px at the narrowest breakpoint.

## Elevation & Depth

The interface is flat and uses no shadows. Thin rules separate sections; pale image mats distinguish screenshots from page content. Hover states use color, underline, or a subtle surface change.

## Shapes

Corners are only gently softened: the portrait uses 3px, image frames and filled buttons 5px, and the theme control 6px. Gallery arrows are circular 44px buttons. Do not turn editorial sections into rounded panels.

## Components

### Header and footer

The home header reads “Product, design and engineering”; inner pages link home with “Rob Abby”. Main navigation is Work (`/#work`), Work with me (`/work-with-me`), About (`/#about`), and Contact. The footer contains Work with me, Résumé (PDF), LinkedIn, GitHub, and Privacy. Work with me has a current-page indicator; Contact stays on the current page when it has a contact section. Navigation has at least 44px-high targets, muted text at rest, and an accent underline on hover.

### Actions and contact

Filled actions use the action colors, 12px × 18px padding, and a 48px minimum height. Text links use the accent color, underline, and a 44px minimum height. The homepage pairs “Explore my work” with “Get in touch”; the services page retains “Discuss a project”. Contact uses “Let’s talk.” and a visible, selectable email address.

Arrow movement is limited to 3px over 180ms on hover. Reduced-motion mode removes the transition and smooth page scrolling. Keyboard focus uses a 3px accent outline with a 5px offset.

### Theme control

The outlined theme button includes an icon and the destination theme’s name, “Light” or “Dark”. Its accessible label states the action, and its pressed state represents dark mode. It retains a 44px minimum height and becomes a subtle filled surface on hover.

### Employer logos

Use the original PartySlate, project44, and SAVO wordmarks from `ExperienceLogos`, with their individual optical sizes and `currentColor`. The homepage label is “Previously at”. Company homepage links open in new tabs; SAVO links to the local case study. Preserve the named links and original artwork; source notes are in `docs/ux/company-logos.md`.

### WavePoint gallery and imagery

`WavePointGallery` is a manual, two-view gallery: Website, then iPhone app. Native horizontal scrolling and scroll snapping support swiping. Visible view buttons and circular arrows enhance it after hydration; left/right arrows and Home/End work when the viewport has focus. There is no automatic advance. The active choice is underlined, and a polite announcement identifies the selected view.

Both views reserve the same stage height. The website image is contained in its mat; the iPhone view pairs Day chart and Journal captures. Without JavaScript, both views remain horizontally scrollable, controls are hidden, and a combined caption and scrolling hint remain visible. Reduced-motion mode makes button-driven changes instant.

Use the November 2026 product captures in `public/images/wavepoint/`. The iPhone images are development previews with fictional sample content; they do not establish that those exact screens are distributed in TestFlight. Keep that caption distinction visible. The app’s stated release status is TestFlight. Asset provenance and the status of older captures are in `public/images/wavepoint/README.md`.

Use `next/image` with intrinsic dimensions and responsive sizes. Only the hero portrait is prioritized; supporting images load lazily. The SAVO article crops its tall style-guide image for the page and links to the full source image.

### Reading and sharing

Services use the shared editorial rows and native `details` for the FAQ. SAVO, privacy, and the not-found page inherit the same type, rules, colors, and controls. Share cards use Newsreader and Instrument Sans on the dark ink background with the blue accent; the home card repeats the three-line statement.

## Do's and Don'ts

- **Do** preserve semantic links and buttons, one h1 per page, descriptive section headings, the skip link, visible focus, and informative image alternatives.
- **Do** keep substantive content server-rendered and usable without JavaScript, including the gallery and FAQ.
- **Do** check both themes, narrow widths, enlarged text, keyboard use, and reduced motion when extending the system.
- **Do** preserve actual image provenance, historical context, and release-status distinctions.
- **Don't** restore the superseded green/ivory palette, Fraunces, decorative ampersands, or red accents.
- **Don't** substitute private chart or customer data, reconstructed employer wordmarks, or speculative product mockups for the established imagery.
- **Don't** add a second homepage logo beside the personal-name heading. Keep the résumé as a quiet “Résumé (PDF)” text link in About and the shared footer, rather than a primary hero action. Open the PDF normally so visitors can read or save it through their browser.
