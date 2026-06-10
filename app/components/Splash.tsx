"use client";

import { motion, useReducedMotion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const YEAR = new Date().getFullYear();

const EASE = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    name: "WavePoint",
    description:
      "Product monorepo: a Next.js 16 web app with subscriptions, plus six native Apple apps sharing a Swift astronomy engine.",
    stack: "Next.js 16 · TypeScript · Supabase · Stripe · SwiftUI",
    links: [
      { label: "Live site", href: "https://wavepoint.space" },
      { label: "GitHub", href: "https://github.com/robabby/wavepoint" },
    ],
  },
  {
    name: "Sherpa",
    description:
      "Collaboration framework for agentic workflows — governance, research, and execution. Agent definitions, a skills engine, and a dispatch pipeline that live in your codebase.",
    stack: "Claude Code · Agentic workflows · TypeScript",
    links: [{ label: "Live site", href: "https://sherpa.solar" }],
  },
  {
    name: "claude-skills",
    description:
      "Open-source cross-session memory system for Claude Code, built on Obsidian. Eight skills for persistent context, recall, and session handoff.",
    stack: "Claude Code · MCP · Obsidian · Markdown/YAML",
    links: [{ label: "GitHub", href: "https://github.com/robabby/claude-skills" }],
  },
  {
    name: "ai-ready-vault",
    description:
      "Documentation site for AI-ready Obsidian vaults with downloadable starter templates.",
    stack: "Next.js App Router · React Server Components · TypeScript · MDX · Vercel",
    links: [
      { label: "Live site", href: "https://ai-ready-vault.vercel.app" },
      { label: "GitHub", href: "https://github.com/robabby/ai-ready-vault" },
    ],
  },
];

export default function Splash() {
  const reduceMotion = useReducedMotion();
  const fade = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: EASE },
      };
  const fadeWork = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: EASE, delay: 0.2 },
      };

  return (
    <>
      <ThemeToggle />
      <main>
        <section className="splash">
          <motion.article className="card" {...fade}>
            <p className="eyebrow">Bellingham, WA</p>
            <h1 className="name">Rob Abby</h1>
            <hr className="rule" aria-hidden />
            <p className="role">Senior Frontend Product Engineer</p>
            <p className="tagline">
              15 years shipping consumer and B2B products in React and
              TypeScript.
            </p>
            <a
              className="cta"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Résumé
            </a>
            <nav className="links" aria-label="Contact">
              <a
                href="https://linkedin.com/in/robabby"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span aria-hidden>·</span>
              <a href="mailto:robabby23@gmail.com">Email</a>
              <span aria-hidden>·</span>
              <a
                href="https://github.com/robabby"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </nav>
          </motion.article>
        </section>
        <motion.section
          className="work"
          aria-labelledby="work-heading"
          {...fadeWork}
        >
          <p className="eyebrow" id="work-heading">
            Current Work
          </p>
          <p className="work-sub">
            Independent Software Engineer · Rob Abby LLC · Nov 2025 – Present
          </p>
          <hr className="rule" aria-hidden />
          <ul className="work-list">
            {PROJECTS.map((project) => (
              <li className="work-item" key={project.name}>
                <h2 className="work-name">{project.name}</h2>
                <p className="work-description">{project.description}</p>
                <p className="work-stack">{project.stack}</p>
                <p className="work-links">
                  {project.links.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 && <span aria-hidden> · </span>}
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </motion.section>
        <footer className="footer">
          <p className="copyright">© {YEAR} Rob Abby</p>
        </footer>
      </main>
    </>
  );
}
