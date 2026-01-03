# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `pnpm build` - Build the production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

## Project Architecture

This is a personal portfolio website for Rob Abby (Staff Frontend Engineer) built with Next.js 15 using the app router structure.

### Tech Stack
- **Next.js 15** with App Router
- **React 19** 
- **TypeScript**
- **Tailwind CSS** for styling
- **shadcn/ui** components (configured in components.json)
- **Vercel Analytics** for tracking
- **Lucide React** for icons

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

## Project Management

Work items (issues, bugs, features, tasks) are tracked in Linear:

- **Workspace:** Sherpa
- **Team:** Sherpa
- **Project:** [robabby.com](https://linear.app/sherpagg/project/robabbycom-7008e82030bb)

When creating issues, always associate them with the `robabby.com` project.

**Issue Status:** Linear issues are automatically marked as Done when their branch is merged. Do not manually mark issues as Done.

## Development Workflow

### Feature Implementation

Use the `/feature-dev` skill when implementing features. This provides a structured workflow:

1. **Discovery** - Understand requirements from Linear issues
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