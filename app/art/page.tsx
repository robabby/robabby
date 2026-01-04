"use client";

import { useState, useMemo } from "react";
import { Container, Heading, Text } from "@radix-ui/themes";
import { IMAGES, getToolCounts } from "./images";
import { CosmicBackground } from "./components/CosmicBackground";
import { FilterBar } from "./components/FilterBar";
import { GalleryGrid } from "./components/GalleryGrid";
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

      <Container size="4" style={{ position: "relative", zIndex: 1 }}>
        <header className="gallery-header">
          <Heading as="h1" className="gallery-title">
            Cosmic Sanctum
          </Heading>
          <Text as="p" className="gallery-subtitle">
            AI Art Gallery
          </Text>
        </header>

        <FilterBar
          activeFilter={activeFilter}
          counts={counts}
          totalCount={IMAGES.length}
          onFilterChange={setActiveFilter}
        />

        <GalleryGrid images={filteredImages} />
      </Container>
    </div>
  );
}
