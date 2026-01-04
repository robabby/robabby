"use client";

import { AI_TOOLS } from "../images";

interface FilterBarProps {
  activeFilter: string;
  counts: Record<string, number>;
  totalCount: number;
  onFilterChange: (filter: string) => void;
}

export function FilterBar({
  activeFilter,
  counts,
  totalCount,
  onFilterChange,
}: FilterBarProps) {
  const tools = Object.values(AI_TOOLS);

  return (
    <div className="filter-bar">
      <button
        className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        All<span className="filter-count">({totalCount})</span>
      </button>
      {tools.map((tool) => (
        <button
          key={tool}
          className={`filter-button ${activeFilter === tool ? "active" : ""}`}
          onClick={() => onFilterChange(tool)}
        >
          {tool}
          <span className="filter-count">({counts[tool] || 0})</span>
        </button>
      ))}
    </div>
  );
}
