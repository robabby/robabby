# CLAUDE.md

This file provides the canonical guidance for coding agents working in this repository. Codex loads it through the relative `AGENTS.md` link.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `pnpm build` - Build the production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint directly (Next.js 16 removed `next lint`)
- `pnpm shots [base-url]` - Playwright screenshot harness: light/dark × desktop/mobile plus no-JS and reduced-motion renders into `screenshots/` (gitignored)

## Project Architecture

This is Rob Abby's personal site for a mixed audience, bringing together his product, design, engineering, and collaborative experience. WavePoint is the featured current business, with historical work shown through SAVO. The accepted visual direction is Ink + Ultramarine: an editorial layout built with Next.js App Router.

### Tech stack

- Next.js 16, React 19, TypeScript, and custom CSS (`app/globals.css`).
- Newsreader display type, including italic, and Instrument Sans body type through `next/font`.
- Server-rendered page content; small client components handle the saved/system theme preference and manual WavePoint gallery. The site remains usable without JavaScript.
- Vercel Analytics and Speed Insights; GA4 is gated on `NEXT_PUBLIC_GA_ID`.

### Structure

- `app/page.tsx` — personal introduction, previous-employer logos, selected WavePoint and SAVO work, approach, and contact.
- `app/work-with-me/page.tsx` — services, approach, FAQ, and contact.
- WavePoint is introduced on the homepage with a link to its website; `/work/wavepoint` redirects to `/#wavepoint`.
- `app/work/savo/page.tsx` — historical UI/UX, shared UI system, and team-building case study.
- `app/components/` — shared header, footer, contact, theme control, original employer logos, manual product gallery, and JSON-LD rendering.
- `app/work/case-study.module.css` — SAVO article layout, contents navigation, and image framing.
- `app/lib/site.ts` — page metadata, canonical origin, and Person/Organization identities.
- `app/lib/share-image.tsx` and route `opengraph-image.tsx` files — matching share cards.
- `app/privacy/page.tsx`, `app/robots.ts`, `app/sitemap.ts` — privacy and search infrastructure.
- `public/images/wavepoint/` — current website and iPhone development captures; its `README.md` records provenance and distinguishes active images from retained historical assets.
- `public/resume.pdf` — current user-supplied résumé (November 8, 2026), linked quietly from the homepage About section and shared footer; served with noindex. Preserve the supplied PDF unchanged.
- `docs/ux/design-system.md` — current visual conventions.

### Content Rules

- Consult `../career/docs/positioning.md` for facts and `../career/docs/copy-blocks.md` for previously approved copy. Their September 2026 website direction predates Rob's November 6 decisions for this site; do not use it to restore the older visual system, founder-only framing, navigation, or removed WavePoint case study.
- The November 6 working direction presents Rob to people considering roles, projects, or a conversation. The current homepage hero trial is “I design and build software.” on two lines, with “build software.” upright and blue. It replaces the earlier three-line statement for local review; the homepage share card uses the same statement. The rest of the revised homepage copy remains a working draft. Local implementation is authorized; this does not establish final copy or publication approval.
- Preserve the substantive services, SAVO, and privacy copy during theme work. WavePoint remains the featured current business; SAVO supplies historical work evidence. Historical resume/LinkedIn wording is not authority over the current direction. No private-repository links, unsupported outcomes, or stale numeric claims.
- WavePoint's app status is TestFlight. Its gallery screenshots show a development preview with fictional sample content, not proof that those exact screens are distributed in TestFlight. Preserve that distinction in captions and image descriptions.

### Career Hub (private)

Professional positioning, approved copy blocks, and private career history live in the **private** repo at `../career` (github.com/robabby/career) — never in this public repo.

- Before editing site copy (`app/**/page.tsx`, metadata/OG, `README.md`, or any resume revision), consult `../career/docs/positioning.md` and apply the dated content precedence above. Keep private career material out of this public repository.
- Application logs, target-company notes, comp data, interview prep: `../career` only.
- Career-focused agent sessions run from `../career`, not this repo.

## Development Workflow

### Project Tracking (Linear)

Linear is our product and project management system — it houses every work item and defines our branching strategy. Work for this site lives in the **robabby.com project** in Linear workspace `sherpagg`, **team Sherpa (key `SG`)** — there is no separate "robabby" team; robabby.com is a *project* under Sherpa, so its issues are numbered `SG-###` (same scheme as the WavePoint project).

Use the available Linear connector or MCP tools; discover the current host's tool names when needed.

- **Start every change from a Linear issue.** If the work isn't tracked yet, create the issue in the robabby.com project first.
- **No archive/delete tool.** Close an issue out by setting its `state` to `Canceled`; real archive/delete is a UI-only bulk action (canceled/completed issues auto-archive on the team's schedule).
- **Listing every project issue at once can overflow the tool token limit.** Filter `list_issues` by `state`/`updatedAt`, or read the saved tool-result file.

### Git Workflow (Required)

**Never commit directly to `main`.** Every change is tracked by a Linear issue and lands through a pull request.

1. **Pick or create the Linear issue** in the robabby.com project for the work.
2. **Create the branch from that issue** using the name Linear generates (Linear → "Copy git branch name", e.g. `sg-123-add-blog-with-mdx-support`), cut from an up-to-date `main`:
   ```bash
   git checkout main && git pull
   git checkout -b <linear-branch-name>
   ```
3. **Commit on the branch** using conventional commit format: `type(scope): description`. Reference the issue (`SG-###`) in a commit or the PR so Linear links the work automatically.
4. **Push and open a PR** back to `main`:
   ```bash
   git push -u origin <linear-branch-name>
   gh pr create --title "..." --body "..."
   ```
5. **Merge via PR.** Merging advances the linked Linear issue to its Done state.

### Feature Implementation

Understand the requested outcome and existing code, resolve consequential open decisions, implement within the authorized scope, and verify the affected behavior. Use relevant skills and tools available in the current host. Follow `~/.agents/rules/collaboration.md` for discussion, visual proposals, and existing authorization.

### Subagent Usage

When delegation is permitted and useful, assign bounded independent work and inherit the selected model. Follow the host's delegation limits; do not force parallel work or a fixed agent count for small tasks.
