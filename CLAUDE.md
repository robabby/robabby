# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `pnpm build` - Build the production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint directly (Next.js 16 removed `next lint`)

## Project Architecture

This is a personal portfolio website for Rob Abby (Staff Frontend Engineer) built with Next.js 15 using the app router structure.

### Tech Stack
- **Next.js 15** with App Router
- **React 19**
- **TypeScript**
- **Radix UI Themes** + custom CSS variables for styling
- **Vercel Analytics** for tracking
- **@radix-ui/react-icons** for icons
- **motion/react** for animations

### Structure
- `app/` - Next.js app router pages and layout
  - `page.tsx` - Main homepage combining all portfolio sections
  - `layout.tsx` - Root layout with Inter font and Analytics
  - `components/` - Page-specific components (Hero, About, Skills, Experience, Footer)
- `lib/utils.ts` - Utility functions (likely for shadcn/ui)
- `components.json` - shadcn/ui configuration with path aliases

### Key Features
- Portfolio sections: Hero, About, Skills, Experience
- Header and Contact components exist but are currently commented out
- Uses pnpm as package manager
- Configured for shadcn/ui with "new-york" style and slate base color

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