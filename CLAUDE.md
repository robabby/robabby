# CLAUDE.md

This file provides the canonical guidance for coding agents working in this repository. Codex loads it through the relative `AGENTS.md` link.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `pnpm build` - Build the production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint directly (Next.js 16 removed `next lint`)
- `pnpm shots [base-url]` - Playwright screenshot harness: light/dark × desktop/mobile plus no-JS and reduced-motion renders into `screenshots/` (gitignored)

## Project Architecture

This is Rob Abby's personal site: founder and operator of WavePoint, with select independent client projects. The approved direction is a three-page editorial site built with Next.js App Router.

### Tech stack

- Next.js 16, React 19, TypeScript, and custom CSS (`app/globals.css`).
- Fraunces display type and Instrument Sans body type through `next/font`.
- Server-rendered page content; the theme toggle is a small client component with a saved/system preference. The site remains usable without JavaScript.
- Vercel Analytics and Speed Insights; GA4 is gated on `NEXT_PUBLIC_GA_ID`.

### Structure

- `app/page.tsx` — personal introduction, WavePoint, service summary, background, and contact.
- `app/work-with-me/page.tsx` — services, approach, FAQ, and contact.
- `app/work/wavepoint/page.tsx` — product case study and AI-native development process.
- `app/components/` — shared header, footer, contact, theme control, and JSON-LD rendering.
- `app/lib/site.ts` — page metadata, canonical origin, and Person/Organization identities.
- `app/lib/share-image.tsx` and route `opengraph-image.tsx` files — matching share cards.
- `app/privacy/page.tsx`, `app/robots.ts`, `app/sitemap.ts` — privacy and search infrastructure.
- `public/images/wavepoint/` — public example-chart screenshot and published calendar sample.
- `public/resume.pdf` — historical direct URL retained without a CTA; served with noindex. A resume refresh is not a dependency of site work.
- `docs/ux/design-system.md` — current visual conventions.

### Content Rules
- Use the current approved copy in `../career/docs/copy-blocks.md` and facts in `../career/docs/positioning.md`. Historical resume/LinkedIn wording is not authority over the approved 2026-09-16 direction. WavePoint remains the only showcased product. No private-repository links, unsupported outcomes, or stale numeric claims.

### Career Hub (private)

Professional positioning, approved copy blocks, and private career history live in the **private** repo at `../career` (github.com/robabby/career) — never in this public repo.

- Before editing site copy (`app/**/page.tsx`, metadata/OG, `README.md`, or any resume revision), consult `../career/docs/positioning.md` — site copy must match it.
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
