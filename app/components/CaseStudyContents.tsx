"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "../work/case-study.module.css";

type Section = { id: string; label: string };

export default function CaseStudyContents({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>();
  const [open, setOpen] = useState(false);
  const navigation = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!navigation.current?.contains(event.target as Node)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 721px)");
    const reset = () => setOpen(false);
    document.addEventListener("pointerdown", dismiss);
    desktop.addEventListener("change", reset);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      desktop.removeEventListener("change", reset);
    };
  }, []);

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
    <nav ref={navigation} className={styles.contents} aria-label="In this case study" data-open={open} onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <p>In this story</p>
      <button ref={trigger} className={styles.contentsToggle} type="button" aria-expanded={open} aria-controls={listId} onClick={() => setOpen(!open)}>
        <span><span className={styles.contentsLabel}>In this story</span><span>{sections.find(section => section.id === active)?.label ?? "Choose a section"}</span></span>
        <ChevronDownIcon aria-hidden="true" />
      </button>
      <ol id={listId} role="list">{sections.map(({ id, label }) => (
        <li key={id}><a href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => {
          setOpen(false);
          if (window.matchMedia("(max-width: 720px)").matches) {
            const heading = document.getElementById(id)?.querySelector("h2");
            heading?.setAttribute("tabindex", "-1");
            heading?.focus({ preventScroll: true });
          }
        }}>{label}</a></li>
      ))}</ol>
    </nav>
  );
}
