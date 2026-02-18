import VenuePageArchitecture from "./diagrams/VenuePageArchitecture";
import MetricsBeforeAfter from "./diagrams/MetricsBeforeAfter";
import TeamStructure from "./diagrams/TeamStructure";
import DesignSystemLayers from "./diagrams/DesignSystemLayers";

const DIAGRAM_MAP: Record<string, React.ComponentType> = {
  "venue-page-architecture": VenuePageArchitecture,
  "metrics-before-after": MetricsBeforeAfter,
  "team-structure": TeamStructure,
  "design-system-layers": DesignSystemLayers,
};

const DIAGRAM_CAPTIONS: Record<string, string> = {
  "venue-page-architecture":
    "Component architecture: SearchFilters, MapView, ResultsList, and GraphQL data layer",
  "metrics-before-after":
    "Before and after: key performance and accessibility metrics",
  "team-structure":
    "Organizational evolution from siloed teams to a hub-and-spoke UX practice",
  "design-system-layers":
    "Design system stack: Material Design foundation through product UIs",
};

export default function DiagramRenderer({ diagramId }: { diagramId: string }) {
  const DiagramComponent = DIAGRAM_MAP[diagramId];

  if (!DiagramComponent) {
    return null;
  }

  return (
    <figure>
      <DiagramComponent />
      {DIAGRAM_CAPTIONS[diagramId] && (
        <figcaption className="cs-diagram-caption">
          {DIAGRAM_CAPTIONS[diagramId]}
        </figcaption>
      )}
    </figure>
  );
}
