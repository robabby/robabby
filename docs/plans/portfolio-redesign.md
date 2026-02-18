# Portfolio Redesign: Staff Engineer Hiring Optimization

> **Goal:** Transform robabby.com from a technically competent portfolio with a misaligned mystical aesthetic into a staff-level engineering portfolio that communicates precision, leadership, impact, and craft — and gets Rob hired.

## Current State (February 2026)

- **Framework:** Next.js 15, React 19, TypeScript, Radix UI Themes
- **Aesthetic:** "Sacred Geometry" dark luxury theme — Cinzel (mystical serif), Outfit (UI), Crimson Pro (body), gold + blue on near-black, Metatron's Cube, ambient particles
- **Content:** Hero, StatsBar, About (minimal), Skills, Experience (timeline w/ collapsible detail), Projects (4 hobby-level), Footer
- **Strengths:** Stats bar with real business metrics, well-structured experience timeline, solid animation work with reduced motion support, clean component architecture
- **Weaknesses:** Theme creates cognitive dissonance (mystical vs. engineer), no case studies, empty About section, hobby-level projects, no social proof, gmail CTA, WCAG contrast issues on muted text

## Phases

Each phase is independently plannable. After completing a phase, update the "Phase Status" and "Learnings" sections below so the next planning session has full context.

---

### Phase 1: Theme & Typography
**Status:** `completed`
**Branch:** `phase1-theme-typography`
**Goal:** Replace the Sacred Geometry identity with a design system that communicates "senior engineer" — precise, confident, technically sophisticated.

**Scope:**
- Replace 3-font system (Cinzel, Crimson Pro, Outfit) with a focused 2-font pairing
- Redefine the color palette — keep dark theme but drop the mystical gold-on-black
- Remove Metatron's Cube, ambient particles, sacred geometry patterns, sacred geometry variable names/comments
- Remove scroll progress bar
- Redesign section dividers (negative space over decorative elements)
- Update CSS custom properties / design tokens to reflect new identity
- Ensure all text passes WCAG AA contrast (4.5:1 body, 3:1 large text)

**Does NOT include:** Content changes, layout restructuring, new sections. Those come in later phases. This phase is purely visual identity.

**Learnings:**
- Fonts: Syne (display) + Instrument Sans (body) replaced Cinzel/Outfit/Crimson Pro. Two fonts is sufficient.
- Colors: Blue (#3b82f6) primary + Warm Stone (#a8a29e) secondary on near-black (#0a0a0f). All text passes WCAG AA.
- Token rename from `--sg-*` to semantic `--color-*`/`--gradient-*`/`--transition-*` touched 16+ files. CSS class rename `.sg-card`→`.card` and `.sg-badge`→`.badge` was equally pervasive.
- Deleted 5 decorative components (MetatronsCube, AmbientParticles, GeometricPattern, ScrollProgress, SectionDivider) removing ~620 lines.
- Removed unused dependencies: @radix-ui/colors, react-particles, gray-matter, next-mdx-remote, reading-time.
- Pre-existing issue: `pnpm lint` (`next lint`) failed with "Invalid project directory" — resolved in Phase 2 (see below).
- Design system documented at `docs/ux/design-system.md`.

---

### Phase 2: About Section & Narrative
**Status:** `completed`
**Branch:** `phase2-about-narrative`
**Goal:** Rewrite the About section into a compelling engineering narrative that communicates staff-level philosophy, not just a LinkedIn summary.

**Scope:**
- Expand About from 2 sentences to a real narrative (engineering philosophy, what "staff" means, team impact)
- Consider restructuring the layout to give About more visual weight
- Revisit key strength badges — make them more meaningful or replace with a different format

**Learnings:**
- Replaced generic lead statement ("15 years crafting...") and 4 badge chips with 3-block content architecture: editorial lead (Syne pull-quote), 3-paragraph narrative, and 3 engineering principles with left-border accent.
- Lead statement answers "what kind of engineer" not "how long" — avoids duplicating Hero tagline and StatsBar metrics.
- Narrative paragraphs thread the career arc (Web2Carz → Savo → project44 → PartySlate) around a staff-level theme: building the systems and teams beneath the feature.
- Engineering principles replaced KEY_STRENGTHS badges — communicate *how Rob thinks* rather than *what Rob knows*, avoiding duplication with the Skills section.
- ~45 lines of CSS added using existing design tokens. No new dependencies, no layout restructuring. Component stays as server component.
- Copy was drafted collaboratively (presented for review before code), approved on first pass with no iteration needed.
- Fixed pre-existing lint breakage: `next lint` was removed in Next.js 16. Migrated to `eslint .` via official codemod, upgraded `eslint-config-next` from 15.1.4 to 16.1.6, removed unused `@eslint/eslintrc`. Fixed 4 pre-existing lint errors (unused import, missing deps, setState-in-effect).

---

### Phase 3: Case Studies
**Status:** `completed`
**Branch:** `phase3-case-studies`
**Goal:** Add 2 detailed case studies that prove staff-level work with code-generated diagrams, architecture decisions, and measurable outcomes.

**Scope:**
- PartySlate Venue Page rewrite (150% inquiry increase, map-view, search redesign, Lighthouse 78→95)
- Savo Design System Leadership (UX team spinout, 50+ research sessions, living design system)
- Format: problem → approach → architecture → results with inline SVG diagrams
- Standalone pages at `/case-studies/[slug]` with SSG + metadata
- Homepage teaser section between Experience and Projects
- 4 SVG diagram components (server-rendered, CSS variable themed)

**Learnings:**
- Two case studies cover both pillars of staff-level work: technical depth (PartySlate) and organizational influence (Savo).
- Code-generated SVG diagrams avoid the need for product screenshots (none available). Using CSS variables makes them theme-consistent.
- Content in TypeScript data files (not MDX) — consistent with Phase 1 decision to remove MDX. The `data.ts` + `getCaseStudyBySlug()` pattern mirrors `app/art/images.ts`.
- Copy was drafted collaboratively (presented for review before implementation), matching the Phase 2 workflow.
- Detail pages use single-column editorial layout (720px max-width) for focused reading, unlike the asymmetric grid used on the homepage.
- Homepage teaser uses the asymmetric grid pattern (section-header-column left, content right) consistent with About/Skills/Projects.
- Diagrams are server components with `viewBox` for responsive scaling, `role="img"` + `aria-label` for accessibility.
- DiagramRenderer component maps string IDs to diagram components with figcaption support.
- 11 new files, 3 modified files. Clean build with both slugs in static params.

---

### Phase 4: Projects Section Overhaul
**Status:** `pending`
**Goal:** Replace hobby-level projects with evidence of staff-level engineering or reframe existing projects to highlight engineering depth.

**Scope:**
- Evaluate which current projects to keep, reframe, or remove
- Add project screenshots/demos instead of gradient placeholder cards
- Consider adding: design system work, architectural decision records, OSS contributions
- Show the actual work — live embeds, video clips, or annotated screenshots

**Learnings:** _(updated after completion)_

---

### Phase 5: Social Proof & Professional Polish
**Status:** `pending`
**Goal:** Add credibility signals and fix professional details.

**Scope:**
- Add 2-3 testimonial quotes from former colleagues (source from LinkedIn recommendations or ask directly)
- Set up professional email (rob@robabby.com) and update all CTAs
- Consider adding company logos to experience section
- Review and polish all copy for consistency with new tone
- Final WCAG audit pass

**Learnings:** _(updated after completion)_

---

### Phase 6: Layout & Composition Polish
**Status:** `pending`
**Goal:** Break the monotonous section pattern and add compositional range that demonstrates frontend craft.

**Scope:**
- Audit section-by-section layout repetition (left-label + right-content everywhere)
- Introduce layout variety — at least one section should break the grid
- Hero redesign to be more distinctive (the site itself is the most important project)
- Mobile experience audit and polish
- Performance audit (bundle size, LCP, CLS)

**Learnings:** _(updated after completion)_

---

## Design Principles (Guide All Phases)

1. **Precision over decoration.** Every element should earn its place. No ornament for ornament's sake.
2. **Show, don't tell.** Screenshots > bullet points. Demos > descriptions. Numbers > adjectives.
3. **Staff-level signal.** Every choice should answer: "Does this make a hiring manager more confident in Rob as a staff engineer?"
4. **Accessibility is non-negotiable.** WCAG AA minimum everywhere. This is on the resume — the site must prove it.
5. **Performance is a feature.** Fast loads, no layout shift, optimized assets. This is also on the resume.

## Reference Sites (Tone/Aesthetic Direction)

These are not templates — they represent the *confidence level* and *precision* the new design should convey:
- Stripe.com — technical sophistication expressed through clean design
- Linear.app — dark theme done with restraint and purpose
- Vercel.com — developer-focused, typographically strong
- Rauno Freiberg (rauno.me) — individual engineer portfolio that demonstrates craft

## Notes for Future Sessions

- This document is the source of truth for the redesign
- Each phase gets its own feature branch
- After completing a phase, update its Status, add Learnings, and note any scope changes that affect downstream phases
- The site runs on `pnpm dev` at localhost:3000
- All work follows the git workflow in CLAUDE.md (feature branch -> PR -> merge)
