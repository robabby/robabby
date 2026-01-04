"use client";

import { useState, useMemo } from "react";
import { Container } from "@radix-ui/themes";
import { IMAGES, getToolCounts } from "./images";
import { CosmicBackground } from "./components/CosmicBackground";
import { FilterBar } from "./components/FilterBar";
import { GalleryGrid } from "./components/GalleryGrid";
import { GalleryHero } from "./components/GalleryHero";
import "./style.css";

export default function ArtPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const counts = useMemo(() => getToolCounts(), []);

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return IMAGES;
    return IMAGES.filter((img) => img.tool === activeFilter);
  }, [activeFilter]);

  return (
    <div className="gallery-page">
      <CosmicBackground />
      <GalleryHero />

      <section id="gallery" className="gallery-section">
        <FilterBar
          activeFilter={activeFilter}
          counts={counts}
          totalCount={IMAGES.length}
          onFilterChange={setActiveFilter}
        />

        <Container size="4">
          <GalleryGrid images={filteredImages} />
        </Container>
      </section>
    </div>
  );
}
