import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import SiteHeader from "@/app/components/SiteHeader";
import Contact from "@/app/components/Contact";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata, PAGE_INFO, SITE_URL } from "@/app/lib/site";
import styles from "../case-study.module.css";

export const metadata = pageMetadata("partyslate");

const sections = [
  { id: "idea-gallery", label: "Idea Gallery", title: "A new way to explore event ideas", content: <>
      <p>{"My first feature at PartySlate was Idea Gallery. We drew themes from the site’s collection of professional event photography and gave people a place to browse for inspiration as they thought about an event of their own."}</p>
      <p>{"I built the feature end to end. It was our first use of React Router and client-side routing: people could move between pages without a full page reload. I defined skeleton loading states and worked with Imgix to optimize the images, paying attention to how the experience felt while content was loading as well as when it was ready."}</p>
      <p>{"At the time, our React application was closely tied to Rails and the way it supplied data to each page. Working within that structure could be cumbersome. Idea Gallery gave us a working example of another approach. For "}<a href="https://www.linkedin.com/in/ben-kimpel/">Ben Kimpel</a>{" and me, seeing client-side navigation become a practical option for the wider site was a significant moment."}</p>
      <p>{"We delivered the full feature, including the image handling and loading states. I don’t recall it attracting much traffic, but the engineering work proved useful beyond that first release. The patterns I established there carried into the later Find a Venue work."}</p>
    </>, images: [] },
  { id: "buttons", label: "The button audit", title: "Starting with the buttons", content: <>
      <p>{"One of the problems I had been hired to address was consistency across the interface. Shortly after Idea Gallery, I carried out a comprehensive button audit. There were dramatic differences in how buttons were used and styled: borders, backgrounds, fonts, sizes, icons, icon placement and hover states."}</p>
      <p>{"I led the audit and implemented the shared button component. Ben helped me find my way around the codebase when I needed guidance. "}<a href="https://www.linkedin.com/in/mark-semon-84ab913/">Mark Semon</a>{", our visual designer, and I worked together to establish a consistent button interface."}</p>
      <p>{"That work also meant improving how design and engineering communicated. Mark was working in Photoshop, and I encouraged him to adopt Zeplin. He was willing to learn new ways of working, including using a symbol library to produce more consistent buttons. We had challenges along the way, but we were able to work through problems that had been holding collaboration back."}</p>
      <p>{"The result was something I could point other engineers to and they could use. I remember feedback from "}<a href="https://www.linkedin.com/in/lucasbrandt/">Lucas Brandt</a>{", an apprentice engineer at the time, that the component was a joy to use. We had more consistent buttons and a shared starting point for the people building the product."}</p>
      <p>{"Later, similar audits became useful work to delegate to junior engineers. They could learn their way around the codebase while contributing to the consistency of the interface."}</p>
    </>, images: [{"src": "/images/partyslate/buttons.jpg", "width": 1400, "height": 788, "alt": "Button variants and states alongside Storybook color tokens.", "caption": "A later view of PartySlate’s design system: button variants and states alongside Storybook color tokens. From the Product Day presentation preserved in the September 2023 archive."}] },
  { id: "find-a-venue", label: "Find a Venue", title: "Connecting venue search to the map", content: <>
      <p>{"Find a Venue took the client-side patterns further. The existing experience used defined search zones. We wanted to add a map view alongside that approach and give people another way to explore the listings."}</p>
      <p>{"I owned the entire frontend implementation and the data contracts it needed. That included adapting the existing URL-based API design so the frontend could fetch data as people interacted with the page."}</p>
      <p>{"People could drag the map to explore an area. Hovering over a listing highlighted its corresponding map pin and tooltip, and the map tooltips offered quick actions. The results and the map worked together, giving visitors a different way to navigate venues while retaining the existing search-zone approach."}</p>
      <p>{"We saw a substantial increase in engagement and in people contacting venues through Find a Venue. Contacting a venue was considered the highest-value action someone could take on the site. It was rewarding to see the engineering work contribute to that outcome."}</p>
    </>, images: [{"src": "/images/partyslate/find-a-venue.png", "width": 1438, "height": 1392, "alt": "Early development prototype of PartySlate’s Find a Venue map and filters, with an unfinished results area.", "caption": "Early development prototype of Find a Venue’s map and filters. Work in progress, with an unfinished results area—not the finished interface."}] },
  { id: "onboarding", label: "Professional onboarding", title: "Helping event professionals get started", content: <>
      <p>{"For event professionals, getting started on PartySlate could mean creating a new company profile, claiming one that already existed, or joining a company with an existing account. Those paths had developed separately, with different behavior for venues and other event businesses. The registration and onboarding work in early 2023 aimed to make that first experience easier to follow."}</p>
      <p>{"The goal went beyond creating an account. A professional needed a path toward a useful company profile, with contact information, images and details about their work. The designs broke that journey into smaller steps, with visible progress, clear actions and layouts for both desktop and mobile. They also accounted for the less tidy moments: missing information, invalid entries, choosing a photo and deciding to finish a step later."}</p>
      <p>{"The engineering plan treated these journeys as related flows built from reusable pieces. It called for shared form-validation and upload patterns, explicit navigation between steps, and saving information to the server before advancing where possible. Another priority was making individual steps easy to reach and test, so the team could develop the underlying flow before every screen was finished."}</p>
      <p>{"I led and implemented the main flow, then delegated other flows to "}<a href="https://www.linkedin.com/in/katharine-cooney/">Katy Cooney</a>{" and "}<a href="https://www.linkedin.com/in/lucasbrandt/">Lucas Brandt</a>{". The work gave us a way to divide implementation across engineers while working toward a consistent experience for the professionals getting started on PartySlate."}</p>
      <p>{"The flows shipped, but I don’t recall their impact. In my experience, and to PartySlate's detriment, we rarely came back to evaluate the success of these initiatives."}</p>
    </>, images: [{"src": "/images/partyslate/onboarding-company.jpg", "width": 1400, "height": 745, "alt": "Company-profile application design with fields for an event business.", "caption": "Company-profile application design, Q1 2023."}, {"src": "/images/partyslate/onboarding-event.jpg", "width": 1400, "height": 809, "alt": "An onboarding step for entering event details.", "caption": "An event-details step in the onboarding design, Q1 2023."}, {"src": "/images/partyslate/onboarding-mobile.jpg", "width": 789, "height": 1400, "alt": "Mobile onboarding designs showing form validation states.", "caption": "Mobile validation states in the onboarding design, Q1 2023."}] },
  { id: "design-system", label: "The Soir\u00e9e design system", title: "Giving the design system a way to grow", content: <>
      <p>{"I was PartySlate’s design-system lead throughout my time there. It was one of the priorities discussed when I joined, and the work continued across changes in our team and frontend architecture. Alongside building components, I worked on how design, product and engineering would maintain them together."}</p>
      <p>{"That progress was uneven. In my 2020 self-review, I described releasing Storybook and establishing a production path for our design-system work as goals we had not yet reached. By 2023, Soirée gave that work a concrete implementation and a renewed focus on the process around it."}</p>
      <p>{"I led the definition of a component-development process that made the decisions explicit. When a new design need emerged, the team would consider whether an existing component could meet it. Design would explain the opportunity, engineering would assess the work involved, and product would decide whether to invest. The process connected reusable components documented in Storybook with corresponding symbols in the Figma library."}</p>
      <p>{"I also led the framework evaluation and the Chakra/Soirée work. The evaluation considered maturity, customization, community support and integration with design tools. We selected Chakra UI as a foundation for Soirée, PartySlate’s design system."}</p>
      <p>{"We built a fully custom Soirée theme through Chakra’s theme object, with a Rollup build system that integrated it into both our Next.js application and the legacy frontend. That let us bring the same theme into newer and existing parts of the site."}</p>
      <p>{"I wanted us to stop negotiating the same interface details at every handoff. Shared components and a common design language gave us something to build on together. Keeping that useful required continued investment from design, engineering and product."}</p>
    </>, images: [{"src": "/images/partyslate/component-process.jpg", "width": 1400, "height": 788, "alt": "Component-development process connecting design, engineering and product decisions.", "caption": "Component-development process shown in the Product Day material preserved in the September 2023 archive. The diagram describes the proposed collaboration between design, engineering and product."}] },
  { id: "mentoring", label: "Helping engineers grow", title: "Helping other engineers find their footing", content: <>
      <p>Alongside feature work, I spent substantial time helping other engineers develop. I paired with junior and apprentice engineers, hosted technical lunch-and-learns, and created documentation to help people understand our codebase and conventions. Making it comfortable to ask questions was an important part of that work.</p>
      <p>As the frontend changed, there was a lot to learn together. My teaching materials covered React Context, GraphQL and the structure of our shared code. I wanted engineers to have working examples they could refer to and someone they could work through a problem with.</p>
      <p>In 2022, I created a style-guide repository and drafted technical documentation to support hiring and onboarding. I also continued supporting colleagues as they took on larger initiatives. That meant making room for questions about the work and helping people communicate what they needed to move forward.</p>
    </>, images: [] },
  { id: "what-i-learned", label: "What I learned", title: "Learning what it takes to sustain the work", content: <>
      <p>PartySlate gave me opportunities to build substantial features and help other engineers grow. It also taught me how difficult that work becomes when responsibilities, priorities and support are unclear.</p>
      <p>An earlier effort to move the marketplace to server-side rendering was shelved in 2022. It competed with feature delivery and did not have the dedicated planning and support I felt it needed. That experience stayed with me: a large technical initiative needs realistic scope, shared ownership and room in the team’s priorities.</p>
      <p>I also learned that supporting everyone else could come at the expense of supporting myself. Being committed to the work meant learning to communicate my own needs, make limits visible and protect a sustainable balance. Those lessons were hard-earned, and they remain part of how I think about working with a team.</p>
    </>, images: [] }
];

const url = `${SITE_URL}${PAGE_INFO.partyslate.path}`;
const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`, url,
  name: PAGE_INFO.partyslate.title,
  description: PAGE_INFO.partyslate.description,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: {
    "@type": "CreativeWork", "@id": `${url}#case-study`,
    name: "Building interfaces and shared foundations at PartySlate.",
    author: { "@id": `${SITE_URL}/#rob` },
    about: { "@type": "Organization", name: "PartySlate" },
    inLanguage: "en-US", image: `${SITE_URL}/images/partyslate/buttons.jpg`,
  },
};

export default function PartySlate() {
  return <>
    <SiteHeader localContact />
    <JsonLd value={schema} />
    <main id="main-content" tabIndex={-1}>
      <div className="wrap">
        <article aria-labelledby="partyslate-title">
          <header className={styles.hero}>
            <div>
              <h1 id="partyslate-title">Building interfaces and shared foundations at PartySlate.</h1>
              <p className={styles.lead}>At PartySlate, I built ways for people to find event inspiration, explore venues and get their businesses onto the platform. I also led the design-system work that helped us build more consistently.</p>
              <p className={styles.intro}>My work connected frontend engineering, interaction design and collaboration across the team. It was a challenging period, with opportunities to grow as an engineer, mentor and design-system lead.</p>
            </div>
            <aside className={styles.projectContext} aria-label="Project context">
              <dl>
                <div><dt>At PartySlate</dt><dd>December 2018–February 2024</dd></div>
                <div><dt>My work</dt><dd>Frontend engineering<br />Design-system leadership<br />Mentoring and collaboration</dd></div>
                <div><dt>Across the product</dt><dd>Idea Gallery, venue search, professional onboarding and Soirée</dd></div>
              </dl>
            </aside>
          </header>
          <details className={styles.collaborators} id="people">
            <summary>People behind the work <span>LinkedIn profiles</span></summary>
            <div className={styles.peopleGroups}>
              <div>
                <h3>Engineering guidance</h3>
                <ul role="list">
                  <li><a href="https://www.linkedin.com/in/ben-kimpel/">Ben Kimpel</a><span>Principal Engineer · codebase guidance</span></li>
                </ul>
              </div>
              <div>
                <h3>Visual design</h3>
                <ul role="list">
                  <li><a href="https://www.linkedin.com/in/mark-semon-84ab913/">Mark Semon</a><span>Visual Designer · button design collaboration</span></li>
                </ul>
              </div>
              <div>
                <h3>Frontend engineering</h3>
                <ul role="list">
                  <li><a href="https://www.linkedin.com/in/katharine-cooney/">Katy Cooney</a><span>Engineer · onboarding flows</span></li>
                  <li><a href="https://www.linkedin.com/in/lucasbrandt/">Lucas Brandt</a><span>Engineer · onboarding flows</span></li>
                </ul>
              </div>
            </div>
          </details>
          <div className={styles.layout}>
            <nav className={styles.contents} aria-label="In this case study">
              <p>In this story</p>
              <ol>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.label}</a></li>)}</ol>
            </nav>
            <div className={styles.story}>
              {sections.map(section => <section className={styles.section} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.content}
                {section.images.map(image => <figure key={image.src} className={`${styles.portfolioFigure} ${styles.processFigure} ${image.height > image.width * 1.5 ? styles.sketchFigure : ""}`}>
                  <a className={styles.portfolioImage} href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${image.alt} (opens in a new tab)`}>
                    <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(max-width: 720px) calc(100vw - 68px), (max-width: 1000px) 60vw, 786px" />
                  </a>
                  <figcaption>{image.caption} <a href={image.src} target="_blank" rel="noopener noreferrer">Full image<span className="sr-only"> (opens in a new tab)</span></a></figcaption>
                </figure>)}
              </section>)}
            </div>
          </div>
        </article>
        <nav className={styles.related} aria-label="Related work">
          <Link href="/#wavepoint">Explore WavePoint <ArrowRightIcon aria-hidden="true" /></Link>
          <Link href="/work/savo">Read the SAVO story <ArrowRightIcon aria-hidden="true" /></Link>
        </nav>
      </div>
      <Contact intro="If you see an opportunity for us to work together, I’d love to hear from you. That could be a role, a project, or simply getting to know each other and seeing where it goes." />
    </main>
  </>;
}
