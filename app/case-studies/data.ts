export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  heading: string;
  content: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  companyLink: string;
  period: string;
  role: string;
  teaserDescription: string;
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  tech: string[];
  diagramIds: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "venue-page",
    title: "Rewriting PartySlate\u2019s Most Impactful Page",
    subtitle: "How a Find Venues rewrite drove a 150% increase in venue inquiries",
    company: "PartySlate",
    companyLink: "https://www.partyslate.com",
    period: "2018\u20132024",
    role: "Staff Frontend Engineer",
    teaserDescription: "A ground-up rewrite of PartySlate\u2019s highest-traffic page \u2014 redesigned search, interactive map view, and a modernized React/GraphQL architecture that drove a 150% increase in venue inquiries.",
    metrics: [
      { value: "150%", label: "Increase in venue inquiries" },
      { value: "78 \u2192 95", label: "Lighthouse accessibility score" },
      { value: "-40%", label: "Bundle size reduction" },
      { value: "-2.3s", label: "Page load improvement" },
    ],
    sections: [
      {
        heading: "Problem",
        content: [
          "PartySlate\u2019s Find Venues page was the single most impactful page on the platform \u2014 the front door for couples searching for event spaces. But inquiry volume had plateaued despite steady traffic growth. The existing page was a static list with basic filters: slow to load, hard to browse, and missing the spatial context that venue search demands. Users were landing, scrolling, and leaving without converting.",
          "The page also carried years of accumulated technical debt. The component was monolithic, tightly coupled to a legacy data-fetching layer, and nearly impossible to iterate on without risking regressions across the marketplace.",
        ],
      },
      {
        heading: "Approach",
        content: [
          "Rather than patch the existing implementation, I advocated for a full rewrite \u2014 scoped tightly to the venue page to limit blast radius while proving out patterns the team could adopt elsewhere.",
          "The core insight was that venue search is inherently spatial. Couples don\u2019t just want a list of venues \u2014 they want to understand where venues are relative to each other, to landmarks, to neighborhoods. I designed the new experience around an interactive map view paired with a redesigned search results panel, letting users toggle between map and list views while filters stay persistent.",
          "I led the technical design and implementation end-to-end: component architecture, data layer, performance budget, and rollout plan. The team worked in two-week sprints, with feature-flagged releases so we could ship incrementally and measure impact at each stage.",
        ],
      },
      {
        heading: "Architecture",
        content: [
          "The rewrite introduced a clean component hierarchy: SearchFilters feeds both MapView and ResultsList through shared state, with a GraphQL data layer replacing the legacy REST calls. The GraphQL schema was designed for this page\u2019s specific query patterns \u2014 fetching venue cards with just the fields needed for list rendering, and a separate lighter query for map pins.",
          "Shared filter state was lifted to a URL-synced context, so search state survives navigation and enables shareable links. The MapView component only loads when the user switches to map mode, keeping the default list view fast. Filter changes use optimistic UI \u2014 results update immediately with cached data while the network request resolves.",
          "An image optimization pipeline with responsive srcsets and blur placeholders cut largest contentful paint significantly. Code splitting and tree-shaking of legacy dependencies brought the bundle size down 40%.",
        ],
      },
      {
        heading: "Results",
        content: [
          "The rewrite shipped over six weeks and the numbers were immediate. Venue inquiries increased 150% within the first month, validating that the UX friction \u2014 not traffic \u2014 had been the bottleneck. Lighthouse accessibility climbed from 78 to 95 as we built WCAG 2.1 AA compliance into the component library rather than patching it after. Bundle size dropped 40% through code splitting and tree-shaking the legacy dependencies. Average page load time decreased by 2.3 seconds.",
          "Beyond the metrics, the rewrite established patterns the team adopted across the platform: the shared-state filter architecture became the template for the vendor search and photo gallery pages, and the GraphQL data layer replaced REST calls over the following quarters.",
        ],
      },
    ],
    tech: ["React", "Next.js", "GraphQL", "TypeScript", "Chakra UI", "Storybook", "Lighthouse"],
    diagramIds: ["venue-page-architecture", "metrics-before-after"],
  },
  {
    slug: "design-system-leadership",
    title: "Building a UX Practice from Scratch",
    subtitle: "Spinning out an autonomous team, running 50+ research sessions, and creating a living design system",
    company: "Savo",
    companyLink: "https://pitchbook.com/profiles/company/13234-69#overview",
    period: "2013\u20132018",
    role: "Senior Product Developer",
    teaserDescription: "Led the creation of Savo\u2019s first dedicated UX practice \u2014 from spinning out an autonomous team to running 50+ research sessions and building a living design system that unified product development across Salesforce integrations.",
    metrics: [
      { value: "50+", label: "User research sessions" },
      { value: "30%", label: "Increase in user satisfaction" },
      { value: "20%", label: "Developer productivity improvement" },
      { value: "1st", label: "Living design system at Savo" },
    ],
    sections: [
      {
        heading: "Problem",
        content: [
          "When I joined Savo, there was no dedicated UX practice. Designers were embedded in product teams with no shared process, no research cadence, and no design system. The result was visible: three separate products with inconsistent interfaces, duplicated components, and UX decisions driven by stakeholder opinion rather than user evidence.",
          "The technical challenge compounded the organizational one. Savo\u2019s platform needed to work seamlessly inside Salesforce \u2014 a complex integration environment where UI components had to coexist with Salesforce\u2019s own styling, respect its security model, and render inside iframes and Lightning containers. Every product team was solving these integration problems independently, often reaching different conclusions.",
        ],
      },
      {
        heading: "Approach",
        content: [
          "I saw an opportunity to address both problems simultaneously. The fragmented UX wasn\u2019t just a design problem \u2014 it was an engineering architecture problem. If we built the right component infrastructure, we could enforce consistency while making individual teams faster.",
          "I championed spinning out a dedicated UI/UX team: a small, autonomous group with a mandate to establish research practices, define design standards, and build shared tooling. The team included myself, a UX designer, and a UX researcher. We reported to the VP of Product, which gave us the organizational leverage to work across all product teams.",
          "We started with research. Over the next two years, I planned and facilitated 50+ sessions: usability interviews, design workshops, stakeholder alignment meetings, and field studies with enterprise sales teams using the product in their Salesforce workflows. The research didn\u2019t just inform design \u2014 it built organizational credibility. When product managers saw us testing their assumptions with real users, they started coming to us proactively.",
        ],
      },
      {
        heading: "Architecture",
        content: [
          "The design system was built in Ember.js on top of Material Design \u2014 providing familiar visual language while customizing for Savo\u2019s specific needs. The system had three layers:",
          "The foundation layer adapted Material Design tokens for Savo\u2019s brand: color, typography, spacing, and elevation. The component layer implemented the design language in Ember.js with built-in Salesforce compatibility: iframe-safe styling, Lightning-aware event handling, and responsive layouts that work within Salesforce\u2019s panel constraints. The integration layer handled the Salesforce embedding lifecycle: authentication handshakes, cross-origin communication, and state synchronization between the Savo UI and the surrounding Salesforce context.",
          "To ensure adoption, I established the Front-End Guild \u2014 a bi-weekly meeting open to all developers covering front-end fundamentals, design system usage, and industry trends. The guild served dual purposes: it was an education channel that lowered the barrier to contributing components, and a feedback loop that surfaced friction in the design system APIs. I also authored the contribution guidelines and documentation, making it clear how teams could consume existing components, propose new ones, and extend the system without fragmenting it.",
        ],
      },
      {
        heading: "Results",
        content: [
          "User satisfaction increased 30% \u2014 measured through quarterly NPS surveys that the research practice itself had established. Developer productivity improved 20%, measured by sprint velocity across teams using the design system versus the baseline period. More importantly, the organizational shift stuck: the UX team continued to grow after I left, and the research-driven process became how Savo made product decisions.",
          "The design system became the single source of truth for UI development across all Savo products, including the Salesforce integrations. New features that previously required 2\u20133 weeks of Salesforce-specific UI work could be assembled from existing components in days. The Front-End Guild ran for years and became a template for similar engineering guilds at the company.",
        ],
      },
    ],
    tech: ["Ember.js", "Material Design", "Salesforce Lightning", "SCSS", "Agile/Lean UX"],
    diagramIds: ["team-structure", "design-system-layers"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
