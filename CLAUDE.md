# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `pnpm build` - Build the production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint directly (Next.js 16 removed `next lint`)
- `pnpm shots [base-url]` - Playwright screenshot harness: light/dark × desktop/mobile plus no-JS and reduced-motion renders into `screenshots/` (gitignored)

## Project Architecture

This is the personal site of Rob Abby (Senior Frontend Product Engineer) — a deliberately minimal single-page splash built with Next.js 16 (App Router).

### Tech Stack
- **Next.js 16** with App Router
- **React 19**
- **TypeScript**
- **Custom CSS** with CSS variables (`app/globals.css`) — no UI framework
- **Fraunces** (display) + **Instrument Sans** (body) via `next/font`
- **CSS keyframe entrance animations**, gated on a `data-js` flag set by the inline head script — no-JS visitors get the fully visible static page, reduced motion is respected, and the hero animates transform-only so LCP isn't delayed
- **Vercel Analytics + Speed Insights** and **GA4** (`@next/third-parties`, gated on `NEXT_PUBLIC_GA_ID`)

### Structure
- `app/page.tsx` - Renders `<Splash />`, the entire homepage
- `app/components/Splash.tsx` - All homepage content: hero card, Current Work (WavePoint), Experience summaries, footer. Copy lives in the `PROJECTS` and `EXPERIENCE` constants
- `app/components/ThemeToggle.tsx` / `useThemeMode.ts` - light/dark theming (localStorage + `prefers-color-scheme`, applied via `data-theme` on `<html>`)
- `app/layout.tsx` - Root layout: fonts, metadata/OG, Person JSON-LD, analytics
- `app/privacy/page.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`
- `public/resume.pdf` - Served by the "View Résumé" CTA — keep in sync with the current resume

### Content Rules
- Site copy must stay consistent with the resume and LinkedIn (`../career/docs/positioning.md` is the positioning source of truth). Notable: "React and TypeScript since 2018" (never "15 years of React"), WavePoint is the only showcased project, and no links to private repos.

### Career Hub (private)

Career positioning, approved copy blocks, application tracking, and job-search context live in the **private** repo at `../career` (github.com/robabby/career) — never in this public repo.

- Before editing site copy (`app/components/Splash.tsx`, `app/layout.tsx` metadata/OG, `README.md`, `public/resume.pdf`), consult `../career/docs/positioning.md` — site copy must match it.
- Application logs, target-company notes, comp data, interview prep: `../career` only.
- Career-focused Claude sessions run from `../career`, not this repo.

## Development Workflow

### Project Tracking (Linear)

Linear is our product and project management system — it houses every work item and defines our branching strategy. Work for this site lives in the **robabby.com project** in Linear workspace `sherpagg`, **team Sherpa (key `SG`)** — there is no separate "robabby" team; robabby.com is a *project* under Sherpa, so its issues are numbered `SG-###` (same scheme as the WavePoint project).

Accessed via the `plugin:linear:linear` MCP server (load tools through ToolSearch). Read + create/update issues, comments, labels, status updates, and docs via the `save_*` tools.

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

Use the `/feature-dev` skill when implementing features. This provides a structured workflow:

1. **Discovery** - Understand requirements
2. **Codebase Exploration** - Launch explorer subagents to analyze existing patterns
3. **Clarifying Questions** - Resolve ambiguities before design
4. **Architecture Design** - Plan approach with architect subagents
5. **Implementation** - Build with parallel subagents where possible
6. **Quality Review** - Launch reviewer subagents for code quality
7. **Summary** - Document accomplishments

### Subagent Usage

Prefer subagents for parallel, independent work:

- **Exploration**: Launch 2-3 code-explorer agents to analyze different aspects simultaneously
- **Implementation**: Use general-purpose agents for independent file changes
- **Review**: Launch multiple code-reviewer agents with different focuses (bugs, DRY, conventions)

This maximizes throughput and reduces context usage in the main conversation.

**Model Selection:** All subagents should use Claude Opus (`model: "opus"`) for maximum capability and code quality.