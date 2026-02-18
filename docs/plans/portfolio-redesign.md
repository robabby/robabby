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

### Phase 1: Theme & Typography (Current)
**Status:** `planning`
**Branch:** TBD (needs Linear ticket)
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

**Learnings:** _(updated after completion)_

---

### Phase 2: About Section & Narrative
**Status:** `pending`
**Goal:** Rewrite the About section into a compelling engineering narrative that communicates staff-level philosophy, not just a LinkedIn summary.

**Scope:**
- Expand About from 2 sentences to a real narrative (engineering philosophy, what "staff" means, team impact)
- Consider restructuring the layout to give About more visual weight
- Revisit key strength badges — make them more meaningful or replace with a different format

**Learnings:** _(updated after completion)_

---

### Phase 3: Case Studies
**Status:** `pending`
**Goal:** Add 1-2 detailed case studies that prove staff-level work with visuals, architecture decisions, and measurable outcomes.

**Scope:**
- PartySlate Venue Page rewrite (primary candidate: 150% inquiry increase, map-view, search redesign)
- Potentially: Design system / component library work at PartySlate or Savo
- Format: problem statement, approach, architecture, screenshots/mockups, results
- May require a new route (`/case-studies/[slug]`) or in-page expandable sections
- Source screenshots and visual assets

**Learnings:** _(updated after completion)_

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
- Each phase gets its own Linear ticket and feature branch
- After completing a phase, update its Status, add Learnings, and note any scope changes that affect downstream phases
- The site runs on `pnpm dev` at localhost:3000
- All work follows the git workflow in CLAUDE.md (feature branch -> PR -> merge)
