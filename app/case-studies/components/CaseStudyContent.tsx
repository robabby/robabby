import Link from "next/link";
import { CaseStudy, CASE_STUDIES } from "../data";
import DiagramRenderer from "./DiagramRenderer";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const currentIndex = CASE_STUDIES.findIndex(
    (cs) => cs.slug === caseStudy.slug
  );
  const prevStudy =
    currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : CASE_STUDIES[CASE_STUDIES.length - 1];
  const nextStudy =
    currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : CASE_STUDIES[0];

  return (
    <>
      {/* Hero */}
      <div className="cs-hero">
        <div className="cs-hero-meta">
          <span>{caseStudy.company}</span>
          <span className="cs-hero-meta-separator">/</span>
          <span>{caseStudy.role}</span>
          <span className="cs-hero-meta-separator">/</span>
          <span>{caseStudy.period}</span>
        </div>
        <h1 className="cs-hero-title">{caseStudy.title}</h1>
        <p className="cs-hero-subtitle">{caseStudy.subtitle}</p>
      </div>

      {/* Metrics bar */}
      <div className="cs-metrics-bar card">
        {caseStudy.metrics.map((metric) => (
          <div key={metric.label} className="cs-metric">
            <div className="cs-metric-value">{metric.value}</div>
            <div className="cs-metric-label">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Content sections */}
      <div className="cs-body">
        {caseStudy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="cs-section-heading">{section.heading}</h2>
            {section.content.map((paragraph, i) => (
              <p key={i} className="about-narrative">
                {paragraph}
              </p>
            ))}

            {/* Render diagrams after the Architecture section */}
            {section.heading === "Architecture" &&
              caseStudy.diagramIds.length > 0 && (
                <>
                  {caseStudy.diagramIds.map((diagramId) => (
                    <div key={diagramId} className="card cs-diagram-wrapper">
                      <DiagramRenderer diagramId={diagramId} />
                    </div>
                  ))}
                </>
              )}
          </section>
        ))}

        {/* Tech tags */}
        <div className="cs-tech">
          <div className="cs-tech-label">Technologies</div>
          <div className="cs-tech-list">
            {caseStudy.tech.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation footer */}
      <nav className="cs-nav" aria-label="Case study navigation">
        {prevStudy && prevStudy.slug !== caseStudy.slug && (
          <Link
            href={`/case-studies/${prevStudy.slug}`}
            className="card cs-nav-card"
          >
            <div className="cs-nav-label">Previous Case Study</div>
            <div className="cs-nav-title">{prevStudy.title}</div>
          </Link>
        )}
        {nextStudy && nextStudy.slug !== caseStudy.slug && (
          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="card cs-nav-card"
          >
            <div className="cs-nav-label">Next Case Study</div>
            <div className="cs-nav-title">{nextStudy.title}</div>
          </Link>
        )}
        <Link href="/" className="card cs-nav-card cs-nav-home">
          <div className="cs-nav-label">Portfolio</div>
          <div className="cs-nav-title">Back to Homepage</div>
        </Link>
      </nav>
    </>
  );
}
