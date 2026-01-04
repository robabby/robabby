"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { IMAGES } from "../images";

const FEATURED_IMAGE = IMAGES[0]; // "Cosmic Download"

export function GalleryHero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section className="gallery-hero">
      <div className="gallery-hero-background">
        <Image
          src={FEATURED_IMAGE.src}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="gallery-hero-overlay" />
      </div>

      <motion.div
        className="gallery-hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: "easeOut"
        }}
      >
        <h1 className="gallery-hero-title">Cosmic Sanctum</h1>
        <p className="gallery-hero-subtitle">AI Art Gallery</p>
      </motion.div>

      <motion.button
        className="gallery-hero-scroll"
        onClick={scrollToGallery}
        aria-label="Scroll to gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 1,
          duration: shouldReduceMotion ? 0 : 0.5
        }}
      >
        <span className="gallery-hero-scroll-text">Explore</span>
        <ChevronDownIcon width={24} height={24} className="gallery-hero-scroll-icon" />
      </motion.button>
    </section>
  );
}
