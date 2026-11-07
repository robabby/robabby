"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const slides = [
  { label: "Website", caption: "WavePoint’s current website homepage." },
  { label: "iPhone app", caption: "Day chart and Journal · Development preview with fictional sample content. App currently in TestFlight." },
];

const subscribeToHydration = () => () => {};

export default function WavePointGallery() {
  const viewport = useRef<HTMLDivElement>(null);
  const selected = useRef(0);
  const [active, setActive] = useState(0);
  const ready = useSyncExternalStore(subscribeToHydration, () => true, () => false);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = Math.round(element.scrollLeft / element.clientWidth);
        selected.current = Math.max(0, Math.min(slides.length - 1, next));
        setActive(selected.current);
      });
    };
    const resize = new ResizeObserver(() => {
      element.scrollTo({ left: selected.current * element.clientWidth, behavior: "instant" });
    });
    element.addEventListener("scroll", onScroll, { passive: true });
    resize.observe(element);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("scroll", onScroll);
      resize.disconnect();
    };
  }, []);

  function show(index: number) {
    const element = viewport.current;
    if (!element) return;
    const next = (index + slides.length) % slides.length;
    element.scrollTo({
      left: next * element.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <div className="product-gallery" role="region" aria-roledescription="carousel" aria-label="WavePoint website and iPhone app">
      <div
        ref={viewport}
        className="gallery-viewport"
        id="wavepoint-images"
        tabIndex={0}
        aria-label="Product images. Scroll horizontally to see both views. Use left and right arrow keys to change the view."
        onKeyDown={(event) => {
          const next = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: slides.length - 1 }[event.key];
          if (next === undefined) return;
          event.preventDefault();
          show(next);
        }}
      >
        <div className="gallery-slide" role="group" aria-roledescription="slide" aria-label="Website, 1 of 2" aria-hidden={ready ? active !== 0 : undefined}>
          <div className="gallery-stage gallery-web">
            <Image src="/images/wavepoint/homepage-2026-11.png" alt="WavePoint’s homepage: Bring astrology into everyday life, with a Day chart and Moment example" width={1440} height={1000} sizes="(max-width: 720px) calc(100vw - 68px), (max-width: 1000px) 52vw, 640px" />
          </div>
        </div>
        <div className="gallery-slide" role="group" aria-roledescription="slide" aria-label="iPhone app, 2 of 2" aria-hidden={ready ? active !== 1 : undefined}>
          <div className="gallery-stage gallery-phones">
            <Image src="/images/wavepoint/day-chart-2026-11.png" alt="WavePoint’s current dark-theme Day chart with a chart wheel and timeline" width={1170} height={2532} sizes="(max-width: 720px) 39vw, 220px" />
            <Image src="/images/wavepoint/journal-2026-11.png" alt="WavePoint’s Journal with fictional sample Moments, photos, and an audio recording" width={1170} height={2532} sizes="(max-width: 720px) 39vw, 220px" />
          </div>
        </div>
      </div>
      <div className="gallery-controls" hidden={!ready}>
        <div className="gallery-choices" aria-label="Choose a product view">
          {slides.map((slide, index) => (
            <button key={slide.label} type="button" aria-controls="wavepoint-images" aria-pressed={active === index} onClick={() => show(index)}>{slide.label}</button>
          ))}
        </div>
        <div className="gallery-arrows">
          <button type="button" aria-label="Previous product image" aria-controls="wavepoint-images" onClick={() => show(active - 1)}><ArrowLeftIcon aria-hidden="true" /></button>
          <button type="button" aria-label="Next product image" aria-controls="wavepoint-images" onClick={() => show(active + 1)}><ArrowRightIcon aria-hidden="true" /></button>
        </div>
      </div>
      <p className="image-caption gallery-caption">{ready ? slides[active].caption : "WavePoint’s website and iPhone app. App images are development previews with fictional sample content; the app is currently in TestFlight."}</p>
      <p className="sr-only" aria-live="polite" aria-atomic="true">{ready ? `${slides[active].label}, ${active + 1} of ${slides.length}` : ""}</p>
      <noscript><p className="image-caption">Swipe or scroll horizontally to see the iPhone app.</p></noscript>
    </div>
  );
}
