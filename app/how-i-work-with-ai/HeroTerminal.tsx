"use client";

import { useEffect, useRef } from "react";
import events from "./workflow-events.json";

export default function HeroTerminal() {
  const figure = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = figure.current!;
    const terminal = root.querySelector<HTMLElement>(".terminal")!;
    const feed = root.querySelector<HTMLElement>(".conversation")!;
    const draft = root.querySelector<HTMLElement>("[data-draft]")!;
    const placeholder = root.querySelector<HTMLElement>("[data-placeholder]")!;
    const button = root.querySelector<HTMLButtonElement>("button")!;
    const status = root.querySelector<HTMLElement>("[data-status]")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listeners = new AbortController();
    let index = 0;
    let elapsed = 0;
    let last = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let visible = false;
    let paused = reduced.matches;
    let cycle = 1;

    function append(kind: string, text: string) {
      const row = document.createElement("div");
      row.className = `log ${kind}`;
      row.textContent = text;
      feed.append(row);
      // Keep the repeating simulation bounded, including on long visits.
      while (feed.children.length > 42) feed.firstElementChild!.remove();
      feed.scrollTop = feed.scrollHeight;
    }

    function render() {
      const event = events[index];
      status.textContent = event.phase;
      const text = event.kind === "prompt"
        ? event.text.slice(0, Math.floor(Math.min(1, elapsed / (event.ms - 650)) * event.text.length))
        : "";
      draft.textContent = text;
      placeholder.hidden = Boolean(text);
      feed.scrollTop = feed.scrollHeight;
    }

    function stop() {
      clearTimeout(timer);
      terminal.classList.add("paused");
    }

    function run() {
      stop();
      button.textContent = paused ? "Play" : "Pause";
      button.setAttribute("aria-label", paused ? "Play simulated activity" : "Pause simulated activity");
      if (paused || !visible || document.hidden) return;
      terminal.classList.remove("paused");
      last = performance.now();
      timer = setTimeout(tick, 40);
    }

    function tick() {
      const now = performance.now();
      elapsed += now - last;
      last = now;
      const event = events[index];
      if (elapsed >= event.ms) {
        if (event.kind === "prompt") append("prompt-log", `› ${event.text}`);
        index++;
        elapsed = 0;
        if (index === events.length) {
          index = 0;
          cycle++;
          append("divider", `Simulation repeats · cycle ${cycle}`);
        }
        const next = events[index];
        if (next.kind !== "prompt") append(next.kind, next.text);
      }
      render();
      timer = setTimeout(tick, 40);
    }

    function pause() { paused = true; run(); }
    const options = { signal: listeners.signal };
    button.hidden = false;
    button.addEventListener("click", () => { paused = !paused; run(); }, options);
    feed.addEventListener("wheel", pause, { ...options, passive: true });
    feed.addEventListener("touchstart", pause, { ...options, passive: true });
    feed.addEventListener("focus", pause, options);
    feed.addEventListener("keydown", event => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) pause();
    }, options);
    document.addEventListener("visibilitychange", run, options);
    reduced.addEventListener("change", () => { if (reduced.matches) pause(); }, options);
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      run();
    }, { threshold: 0.15 });
    observer.observe(terminal);

    feed.replaceChildren();
    append("divider", "WavePoint · tester guide · illustrative workflow");
    if (reduced.matches) {
      append("prompt-log", `› ${events[0].text}`);
      index = 1;
      append(events[1].kind, events[1].text);
    }
    render();
    run();
    return () => { stop(); observer.disconnect(); listeners.abort(); };
  }, []);

  return <figure ref={figure}>
    <div className="terminal paused" aria-label="Illustrative terminal conversation">
      <div className="term-header"><strong>Codex</strong><span>~/workbench/wavepoint</span></div>
      <div className="conversation" tabIndex={0} aria-label="Simulated activity. Focus or scroll to pause.">
        <div className="log prompt-log">› Pick up SG-1721. Keep the tester guide simple.</div>
        <div className="log agent">Read the issue → edit → check → commit → PR → review → merge → deploy.</div>
      </div>
      <div className="entry" aria-label="Illustrated prompt area">
        <span aria-hidden="true">›</span>
        <span className="draft-line"><span data-draft /><span className="cursor" aria-hidden="true" /><span data-placeholder>Ask Codex to do anything</span></span>
      </div>
      <div className="term-footer"><span>WavePoint · Web</span><span data-status>Simulated workflow</span></div>
    </div>
    <figcaption className="caption"><span>Simulated activity · repeating workflow</span><button type="button" hidden>Pause</button></figcaption>
  </figure>;
}
