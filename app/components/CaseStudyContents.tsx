"use client";

import { useEffect, useState } from "react";
import styles from "../work/case-study.module.css";

type Section = { id: string; label: string };

export default function CaseStudyContents({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id));
    let frame = 0;

    function update() {
      frame = 0;
      // Follow the section at the upper third of the reading viewport.
      const readingLine = window.innerHeight * 0.3;
      let current: string | undefined;
      for (const element of elements) {
        if (element && element.getBoundingClientRect().top <= readingLine) current = element.id;
      }
      const last = elements.at(-1);
      if (last && last.getBoundingClientRect().bottom <= 0) current = undefined;
      setActive(current);
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    for (const element of elements) if (element) observer.observe(element);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <nav className={styles.contents} aria-label="In this case study">
      <p>In this story</p>
      <ol role="list">{sections.map(({ id, label }) => (
        <li key={id}><a href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a></li>
      ))}</ol>
    </nav>
  );
}
