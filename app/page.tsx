import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import SiteHeader from "@/app/components/SiteHeader";
import Contact from "@/app/components/Contact";
import { pageMetadata, PAGE_INFO, SITE_URL } from "@/app/lib/site";
import JsonLd from "@/app/components/JsonLd";
import ExperienceLogos from "@/app/components/ExperienceLogos";
import WavePointGallery from "@/app/components/WavePointGallery";

export const metadata = pageMetadata("home");

export default function Home() {
  return (
    <>
      <SiteHeader home />
      <JsonLd
        value={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${SITE_URL}/#page`,
          url: `${SITE_URL}/`,
          name: PAGE_INFO.home.title,
          mainEntity: { "@id": `${SITE_URL}/#rob` },
        }}
      />
      <main id="main-content" tabIndex={-1}>
        <section className="wrap opening" aria-labelledby="hero-title">
          <div className="identity">
            <h1 id="hero-title">Rob Abby</h1>
            <Image className="portrait" src="/profile.jpeg" alt="Rob Abby outdoors by the water" width={640} height={640} sizes="(max-width: 360px) 72px, (max-width: 720px) 84px, 192px" priority />
            <p className="identity-meta">Based in Bellingham.<br />Working locally and remotely.</p>
          </div>
          <div className="hero-copy">
            <h2 className="hero-statement">I design and<br /><span>build software.</span></h2>
            <p className="hero-intro">My background is in frontend engineering. Over time, I’ve found myself getting involved in more of what goes into making a product—especially design and working with the people who use it. These days, I am working on WavePoint.</p>
            <div className="hero-actions">
              <a className="button" href="#work">Explore my work <ArrowRightIcon className="arrow" aria-hidden="true" /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowRightIcon className="arrow" aria-hidden="true" /></a>
            </div>
          </div>
        </section>
        <section className="wrap experience" aria-label="Previous roles">
          <p>Previously at</p>
          <ExperienceLogos />
        </section>
        <section className="wrap selected-work" id="work" aria-labelledby="work-title">
          <h2 id="work-title">Some of the work.</h2>
          <div className="work-grid">
            <article id="wavepoint" aria-labelledby="wavepoint-title">
              <div className="project-heading">
                <h3 id="wavepoint-title"><a href="https://wavepoint.space/">WavePoint</a></h3>
                <span>Current business</span>
              </div>
              <p className="project-role">Founder and operator</p>
              <WavePointGallery />
              <div className="work-info">
                <p>WavePoint is an astrology app I’m building for iPhone. It brings together charts, readings, and a place to record experiences and revisit them over time. I look after the product, design, engineering, and day-to-day business - collaborating with my wife, Shayna. The app is currently in TestFlight.</p>
                <a className="text-link" href="https://wavepoint.space/">Visit WavePoint <ArrowRightIcon className="arrow" aria-hidden="true" /></a>
              </div>
            </article>
            <article aria-labelledby="savo-work-title">
              <div className="project-heading">
                <h3 id="savo-work-title"><Link href="/work/savo">SAVO</Link></h3>
                <span>Historical work</span>
              </div>
              <p className="project-role">Frontend engineering, product ownership, and UI/UX</p>
              <Link className="work-image savo-preview" href="/work/savo" aria-label="Read the SAVO story">
                <Image src="/images/savo/asset-page.png" alt="Historical SAVO Asset Page showing a document preview, download action, and file details" width={2880} height={1566} sizes="(max-width: 720px) calc(100vw - 76px), (max-width: 1000px) 35vw, 440px" />
              </Link>
              <p className="image-caption">The Asset Page · historical interface example.</p>
              <div className="work-info">
                <p>My time at SAVO took me from frontend engineering into product ownership and helping establish our UI/UX team. I worked closely with our visual designer on design and implementation, built the shared component system and style guide, and helped other engineers with their frontend work.</p>
                <Link className="text-link" href="/work/savo">Read the SAVO story <ArrowRightIcon className="arrow" aria-hidden="true" /></Link>
              </div>
            </article>
          </div>
        </section>
        <section className="wrap about" id="about" aria-labelledby="about-title">
          <h2 id="about-title">A bit about how I work.</h2>
          <div className="about-copy">
            <p>A lot of my attention goes into how someone will actually use what we’re making. I’m interested in what they’re trying to do, how they think about it, and how the software could help.</p>
            <p>AI has become a substantial part of how I work. I use it throughout development, and I’m continuing to learn where it helps and what needs more attention from me. We’re a small operation at WavePoint, so keeping the work practical and avoiding unnecessary complexity matters.</p>
            <p>Before WavePoint, I worked at SAVO, project44, and PartySlate.</p>
            <div className="about-links">
              <Link className="text-link" href="/work-with-me">Ways we can work together</Link>
              <a className="text-link" href="/resume.pdf">Résumé (PDF)</a>
            </div>
          </div>
        </section>
        <Contact intro="If you see an opportunity for us to work together, I’d love to hear from you. That could be a role, a project, or simply getting to know each other and seeing where it goes." wavepointLink />
      </main>
    </>
  );
}
