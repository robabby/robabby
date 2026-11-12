"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./back-to-top.module.css";

export default function BackToTop() {
  const top = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > Math.max(600, window.innerHeight));
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div id="page-top" ref={top} tabIndex={-1} className={styles.target} />
      <a
        href="#page-top"
        className={styles.control}
        data-visible={visible}
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        aria-label="Back to top"
        onClick={(event) => {
          event.preventDefault();
          top.current?.focus({ preventScroll: true });
          window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }}
      >
        <span>Top</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5m-6 6 6-6 6 6" />
        </svg>
      </a>
    </>
  );
}
