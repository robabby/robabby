"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ImageType } from "../images";
import { GalleryCard } from "./GalleryCard";

interface GalleryGridProps {
  images: ImageType[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <motion.div
      className="gallery-grid"
      layout
    >
      <AnimatePresence mode="popLayout">
        {images.map((image, index) => (
          <GalleryCard key={image.slug} image={image} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
