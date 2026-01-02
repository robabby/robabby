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