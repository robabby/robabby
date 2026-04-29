"use client";

import { motion, useReducedMotion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const YEAR = new Date().getFullYear();

export default function Splash() {
  const reduceMotion = useReducedMotion();
  const fade = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <>
      <ThemeToggle />
      <main className="splash">
        <motion.article className="card" {...fade}>
          <p className="eyebrow">Bellingham, WA</p>
          <h1 className="name">Rob Abby</h1>
          <hr className="rule" aria-hidden />
          <p className="role">Staff Engineer &amp; IT Manager</p>
          <p className="tagline">
            15 years across software engineering and IT operations.
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
          <p className="copyright">© {YEAR} Rob Abby</p>
        </motion.article>
      </main>
    </>
  );
}
