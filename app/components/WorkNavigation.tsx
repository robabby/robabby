"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

export default function WorkNavigation({ mobile = false }: { mobile?: boolean }) {
  const disclosure = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      const details = disclosure.current;
      if (details && !details.contains(event.target as Node)) details.open = false;
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  const links = <>
    <li><a href="https://wavepoint.space/" target="_blank" rel="noopener noreferrer">WavePoint <ExternalLinkIcon aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></li>
    <li><Link href="/work/partyslate">PartySlate</Link></li>
    <li><Link href="/work/savo">SAVO</Link></li>
  </>;

  if (mobile) return <div className="mobile-work-links"><p>Work</p><ul>{links}</ul></div>;

  return (
    <details
      className="work-nav"
      ref={disclosure}
      onKeyDown={(event) => {
        if (event.key === "Escape" && event.currentTarget.open) {
          event.preventDefault();
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
      onBlur={(event) => {
        // A pointer activation can blur the summary without focusing the link.
        // Keep it visible until the click completes; outside pointers dismiss above.
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
    >
      <summary>Work <ChevronDownIcon aria-hidden="true" /></summary>
      <ul className="work-nav-links" onClick={() => {
        if (disclosure.current) disclosure.current.open = false;
      }}>
        {links}
      </ul>
    </details>
  );
}
