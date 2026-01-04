"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ImageType } from "../images";

interface GalleryCardProps {
  image: ImageType;
  index: number;
}

export function GalleryCard({ image, index }: GalleryCardProps) {
  return (
    <motion.div
      className="gallery-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1, // Stagger by column position
        ease: "easeOut",
      }}
    >
      <Link href={`/art/${image.slug}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="gallery-card-image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="gallery-card-overlay">
          <p className="gallery-card-title">{image.title}</p>
          <span className="gallery-card-tool">{image.tool}</span>
        </div>
      </Link>
    </motion.div>
  );
}
