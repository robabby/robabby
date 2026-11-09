import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import Contact from "@/app/components/Contact";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata, PAGE_INFO, SITE_URL } from "@/app/lib/site";
import styles from "../case-study.module.css";

export const metadata = pageMetadata("savo");

type PortfolioImage = { src: string; label: string; alt: string; width: number; height: number };

const portfolioImages: PortfolioImage[] = [
  {
    "src": "search-results.png",
    "label": "Search results \u00b7 desktop",
    "alt": "SAVO desktop search with results grouped into documents and posts, pages, and multimedia.",
    "width": 2880,
    "height": 9718
  },
  {
    "src": "search-mobile-results.png",
    "label": "Mobile results",
    "alt": "Mobile SAVO search results showing documents and posts.",
    "width": 728,
    "height": 1294
  },
  {
    "src": "search-mobile-filters.png",
    "label": "Mobile filters",
    "alt": "Mobile search filters for attention, document type, owner, and library.",
    "width": 728,
    "height": 1294
  },
  {
    "src": "search-mobile-tags.png",
    "label": "Mobile tags",
    "alt": "Mobile search tags grouped by document type, audience, industry, and other categories.",
    "width": 728,
    "height": 1294
  },
  {
    "src": "search-filters.png",
    "label": "Desktop filters",
    "alt": "Desktop search results alongside a filter panel.",
    "width": 2880,
    "height": 1472
  },
  {
    "src": "search-filter-options.png",
    "label": "Filter options",
    "alt": "Desktop search with a filter dropdown expanded.",
    "width": 2880,
    "height": 1472
  },
  {
    "src": "search-item-actions.png",
    "label": "Item actions",
    "alt": "Desktop search with an action menu open on a result.",
    "width": 2880,
    "height": 1472
  },
  {
    "src": "search-documents.png",
    "label": "Documents results",
    "alt": "Expanded list of document search results.",
    "width": 2880,
    "height": 9814
  },
  {
    "src": "styleguide-principles.png",
    "label": "Design principles",
    "alt": "SAVO style guide describing lean work, simplicity, user-centered design, informed decisions, and balanced design.",
    "width": 2880,
    "height": 6470
  },
  {
    "src": "styleguide-colors.png",
    "label": "Color palette",
    "alt": "SAVO style guide with primary, neutral, and secondary color palettes.",
    "width": 2880,
    "height": 2662
  },
  {
    "src": "styleguide-typography.png",
    "label": "Typography",
    "alt": "SAVO typography guidance with Proxima Nova and Roboto heading examples.",
    "width": 2880,
    "height": 3850
  },
  {
    "src": "styleguide-empty-states.png",
    "label": "Empty-state guidance",
    "alt": "SAVO style guide showing how to explain blank states and suggest next steps.",
    "width": 2880,
    "height": 2368
  },
  {
    "src": "styleguide-icons.png",
    "label": "Icons",
    "alt": "SAVO icon guidance with icon sets and implementation examples.",
    "width": 2880,
    "height": 10282
  },
  {
    "src": "styleguide-voice-tone.png",
    "label": "Voice and tone",
    "alt": "SAVO voice and tone guidance describing the product voice and its audiences.",
    "width": 2880,
    "height": 3248
  }
];

function PortfolioFigure({ image, className = "", sizes }: { image: PortfolioImage; className?: string; sizes: string }) {
  const href = `/images/savo/${image.src}`;
  return (
    <figure className={`${styles.portfolioFigure} ${className}`}>
      <a className={styles.portfolioImage} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${image.label.toLowerCase()} at full size (opens in a new tab)`}>
        <Image src={href} width={image.width} height={image.height} sizes={sizes} alt={image.alt} />
      </a>
      <figcaption>{image.label} · <a href={href} target="_blank" rel="noopener noreferrer">Full image<span className="sr-only"> (opens in a new tab)</span></a></figcaption>
    </figure>
  );
}

const sections = [
  {
    id: "early-years",
    title: "Starting with the work in front of me",
    label: "The early years",
    content: (<>
      <p>SAVO helped salespeople find and use content for conversations with clients and prospects. I joined as a self-taught frontend engineer. For roughly my first two and a half years, I didn’t feel I was growing very much beyond the work assigned to me.</p>
      <p>We worked in a waterfall process, following detailed product requirements documents that defined what we were supposed to build. Those requirements could still change late in the process as new demands came from sales. There wasn’t much room in my work to explore the problem or help shape the solution.</p>
    </>),
  },
  {
    id: "changing-how-we-worked",
    title: "Seeing another way to work",
    label: "The shift to Agile",
    content: (<>
      <p>The company was entering a period of change. In June 2014, SAVO announced a <a href="https://www.prnewswire.com/news-releases/savo-raises-35-million-to-drive-global-leadership-in-sales-productivity-software-solutions-261821291.html">$35 million funding round led by Goldman Sachs</a>, with two Goldman Sachs representatives joining the board.</p>
      <p><a href="https://www.linkedin.com/in/jason-liu-a4757812/">Jason Liu</a> was <a href="https://www.prnewswire.com/news-releases/jason-liu-named-ceo-of-savo-300045952.html">appointed CEO in March 2015</a>. <a href="https://www.linkedin.com/in/doug-marquis/">Doug Marquis</a> <a href="https://www.prnewswire.com/news-releases/savo-appoints-doug-marquis-as-executive-vice-president-product-development-300153629.html">joined that October as EVP of Product Development</a> and later became our CTO. For me, the shift toward Agile development during this period opened up a different way of thinking about software.</p>
      <p>I remember the organization becoming much flatter, with people who had held leadership roles moving into individual contributor work. It was also a difficult period. There were major cuts to QA and Support, and colleagues lost their jobs. The changes that opened up opportunities for me came alongside real disruption for other people.</p>
      <p>Working with <a href="https://www.linkedin.com/in/vbrianhauk/">Brian Hauk</a>, our Agile Coach, and <a href="https://www.linkedin.com/in/andrewikamas/">Andrew Ikamas</a>, our Scrum Master, was eye-opening. They demonstrated a more collaborative way of working through problems together. I began to see that I could contribute to how we approached the work, as well as what appeared on the screen.</p>
      <p>That shift opened the door to my Product Owner training and a very different role on the Data Science team.</p>
    </>),
  },
  {
    id: "data-science",
    title: "Finding my footing as a Product Owner",
    label: "Data Science and product ownership",
    content: (<>
      <p>SAVO paid for me to become a Certified Scrum Product Owner (CSPO). I became the embedded Product Owner for the Data Science team, working on the Predictive initiative and reporting directly to the CTO.</p>
      <p>I worked with <a href="https://www.linkedin.com/in/caronp/">Peter Caron</a>, a Senior VP of Product, to define the goals for an intuitive recommendation system. We wanted to help salespeople prepare for deeper conversations with their clients.</p>
      <p>The bigger ambition was to use a salesperson’s calendar to understand who they were meeting with, then connect that context with the content SAVO housed and other information we could gather. Rather than making someone search through a library before every meeting, we wanted to help bring relevant material to them.</p>
      <p><a href="https://www.linkedin.com/in/jeff-charbeneau-984b7a14/">Jeff Charbeneau</a> joined as our Data Scientist. Much of his work involved “laying pipe”—building the data pipelines needed to collect information the team could work with. <a href="https://www.linkedin.com/in/braunreyes/">Braun Reyes</a>, a database specialist on the team, worked with Neo4j to build graph databases.</p>
      <p>My part often came through sprint planning and grooming sessions. We kept meetings spaced out so the team could spend most of its time building and experimenting, with room to decide how best to approach the problems. I facilitated those conversations and often worked at the whiteboard, sketching concepts as people talked through them. I brought my technical perspective where it helped, while learning a domain that was new to me.</p>
      <p>Over time, I found it difficult to work with the uncertainty around the team’s direction. I was well outside my comfort zone, and I missed the tangible nature of frontend engineering: making a change on screen and seeing the effect of my work. I shifted my focus toward the interface and user experience work that followed.</p>
      <p>The recommendation initiative ultimately didn’t reach customers; company priorities changed. Even so, the experience broadened how I thought about product development, facilitating a team, and giving people room to solve problems.</p>
      <p>During that period, I read Steve Krug’s <em>Don’t Make Me Think</em>. It helped shape the user advocacy that followed.</p>
    </>),
  },
  {
    id: "people-using-savo",
    title: "Making room for the people using the software",
    label: "The people using SAVO",
    content: (<>
      <p>The executives buying SAVO, the administrators managing it, and the people using it every day had different needs.</p>
      <p>Product decisions were heavily influenced by sales commitments. We also supported older enterprise environments, which placed real constraints on the interface. I wanted us to hear more directly from the sales and marketing people who spent their days using what we built.</p>
      <p>I researched ways to establish a baseline for the usability of our systems and settled on the System Usability Scale (SUS). The idea was straightforward: get an initial score, then use it to track whether we were making the software easier to use.</p>
      <p>I worked with <a href="https://www.linkedin.com/in/meggancarczyk/">Megan “Meg” Gancarczyk</a>, a Junior Product Manager at the time, to prepare the questionnaire and its introduction to the SAVO User Alliance Group. Just before it was due to go out, <a href="https://www.linkedin.com/in/gwgoodman/">Greg Goodman</a>, a Senior Product Manager, stopped the initiative over concerns about how low our initial score would be. We never sent the questionnaire, so we didn’t establish that baseline.</p>
      <p>I still wanted us to give the people using SAVO more attention. I kept advocating for a visual designer and a dedicated UI/UX team.</p>
    </>),
  },
  {
    id: "forming-the-team",
    title: "Starting with the team",
    label: "Forming the team",
    content: (<>
      <p>The dated interface gave us a concrete place to begin. My manager, <a href="https://www.linkedin.com/in/johnnarofsky/">John Narofsky</a>, helped carry my request through the organization and secure the CTO’s approval to hire a Visual Designer.</p>
      <p>I wrote the job posting, ran the interviews, and hired Brittany. From there, we helped form a UI/UX team that brought visual design, user experience, research, and frontend engineering together.</p>
      <p><a href="https://www.linkedin.com/in/esands/">Eric Sands</a>, previously our VP of QA, became the Delivery Manager on the UI/UX team after the Agile transformation. We worked together as colleagues on that team.</p>
      <p>Brittany and I worked hand-in-hand throughout the work we produced together. I was involved in both design and implementation, and our collaboration continued as we built. That relationship was central to the Asset Page redesign and the shared UI foundation that supported it.</p>
    </>),
  },
  {
    id: "asset-page",
    title: "Helping people work with an asset",
    label: "The Asset Page",
    content: (<>
      <p>The Asset Page was where someone could view a document or other piece of content and decide what to do with it. We wanted to make it easier to navigate the asset and take the next action: save it, share it, or edit it.</p>
      <p>Brittany and I worked through the redesign together, from design through implementation. We put it in front of end users through multiple rounds of feedback and usability testing.</p>
      <p>The redesign shipped to customers and was well received. Users particularly appreciated the added mobile support, which was new to them at the time.</p>
    </>),
  },
  {
    id: "search",
    title: "Finding content across desktop and mobile",
    label: "Search",
    content: <p>Search screens from the SAVO portfolio archive, showing results, filters, and tags across desktop and mobile layouts.</p>,
  },
  {
    id: "shared-ui",
    title: "A shared foundation for building interfaces",
    label: "The shared UI system",
    content: (<>
      <p>I built our component system in Ember.js, along with a style guide that became a bookmarked reference for many developers. The components were used in SAVO’s shared navigation and application frame, individual products, and our Salesforce CRM widget.</p>
      <p>Much of the engineering organization focused on backend development. I moved between teams to help engineers with their frontend implementations, alongside my work on the system itself.</p>
      <p>From my experience, that combination made a substantial difference to developer experience. Engineers had a shared reference, components they could use, and someone who could work through implementation details with them. It helped people finish their work.</p>
    </>),
  },
  {
    id: "research-and-process",
    title: "Bringing research into the process",
    label: "Research and process",
    content: (<>
      <p>Access to the SAVO User Alliance Group eventually gave us a pool of administrators and end users for interviews and testing. <a href="https://www.linkedin.com/in/tom-green-b6198a4/">Tom Green</a> was our UX Designer, and <a href="https://www.linkedin.com/in/allisonpaul/">Allison Paul</a> later managed outreach and scheduling. Allison had moved into our UI/UX team from Support during the layoffs, which allowed her to stay at SAVO. Tom and Allison both frequently facilitated user-testing sessions. We worked together to define research goals.</p>
      <p>Getting candid feedback took relationship-building, too. We worked to create the trust and space for one-to-one conversations with the people using the software.</p>
      <p>Alongside Brittany, the rest of our UI/UX team, Head of Product <a href="https://www.linkedin.com/in/zachary-debelak-39b7541/">Zach Debelak</a>, and the wider Product team, I helped define a product process that included research throughout the work. Our process diagram connected early exploration, design, development, and feedback after release.</p>
    </>),
  },
  {
    id: "team-culture",
    title: "Understanding how we worked together",
    label: "Team culture",
    content: (<>
      <p>I also wanted us to be able to describe the less tangible parts of our team culture. I brought ideas from my personal-development interests into a workshop with the UI/UX team.</p>
      <p>We gathered in a room with whiteboard walls, and I projected an empty mind map from my laptop. Together, we built out our values, principles, and the skills, traits, and abilities we considered important. I facilitated the session and created the map; the team shaped what went into it.</p>
      <p>The exercise gave us a clearer way to talk about ourselves as a team. Later, we used it when interviewing and hiring another UX researcher. It helped us move from a vague idea of “culture fit” to more specific conversations about how someone might work with us. We hired an excellent researcher, and I felt the exercise worked very well for us.</p>
    </>),
  },
  {
    id: "what-i-learned",
    title: "Learning to contribute beyond my title",
    label: "What I learned",
    content: (<>
      <p>When I first joined SAVO, I compared my self-taught background with the degrees and experience of the people around me. I thought of myself as someone who was good at CSS. Over time, I learned that my product thinking, commitment to users, and interests outside engineering could be useful to the team, too. That meant the world to me.</p>
    </>),
  }
];

const url = `${SITE_URL}${PAGE_INFO.savo.path}`;
const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  url,
  name: PAGE_INFO.savo.title,
  description: PAGE_INFO.savo.description,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: {
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    name: "Building a UI/UX practice at SAVO.",
    author: { "@id": `${SITE_URL}/#rob` },
    about: { "@type": "Organization", name: "SAVO" },
    inLanguage: "en-US",
    image: `${SITE_URL}/images/savo/styleguide-buttons.png`,
  },
};

export default function Savo() {
  return (
    <>
      <SiteHeader localContact />
      <JsonLd value={schema} />
      <main id="main-content" tabIndex={-1}>
        <div className="wrap">
          <article aria-labelledby="savo-title">
            <header className={styles.hero}>
              <div>
                <h1 id="savo-title">Building a UI/UX practice at SAVO.</h1>
                <p className={styles.lead}>SAVO is where I began to see how much I could contribute beyond frontend engineering. My path into UI/UX went through a company-wide shift in how we worked, Product Owner training, and a period with the Data Science team. Each chapter changed how I thought about building software with other people.</p>
                <p className={styles.intro}>I led the initiative to form our UI/UX team, hired visual designer <a href="https://www.linkedin.com/in/brittanymikottis/">Brittany Mikottis</a>, and worked alongside her on design and implementation. I also built the shared Ember.js component system and style guide used across several parts of the product.</p>
                <p className={styles.acquisitionNote}>SAVO was acquired by <a href="https://www.seismic.com/">Seismic</a> in 2018.</p>
              </div>
              <aside className={styles.projectContext} aria-label="Project context">
                <dl>
                  <div><dt>My work</dt><dd>Frontend engineering<br />Product ownership<br />Building the UI/UX team</dd></div>
                  <div><dt>Alongside</dt><dd>Brittany Mikottis and the UI/UX, Product, and engineering teams. <a href="#people">Meet the people</a>.</dd></div>
                </dl>
              </aside>
            </header>
            <details className={styles.collaborators} id="people">
              <summary>People behind the work <span>LinkedIn profiles</span></summary>
              <div className={styles.peopleGroups}>
                  <div>
                    <h3>UI/UX team</h3>
                    <ul role="list">
                      <li><a href="https://www.linkedin.com/in/brittanymikottis/">Brittany Mikottis</a><span>Visual Designer</span></li>
                      <li><a href="https://www.linkedin.com/in/tom-green-b6198a4/">Tom Green</a><span>UX Designer</span></li>
                      <li><a href="https://www.linkedin.com/in/allisonpaul/">Allison Paul</a><span>Research outreach and testing</span></li>
                      <li><a href="https://www.linkedin.com/in/esands/">Eric Sands</a><span>Delivery Manager</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3>Product and Data Science</h3>
                    <ul role="list">
                      <li><a href="https://www.linkedin.com/in/caronp/">Peter Caron</a><span>Senior VP of Product</span></li>
                      <li><a href="https://www.linkedin.com/in/jeff-charbeneau-984b7a14/">Jeff Charbeneau</a><span>Data Scientist</span></li>
                      <li><a href="https://www.linkedin.com/in/braunreyes/">Braun Reyes</a><span>Database specialist</span></li>
                      <li><a href="https://www.linkedin.com/in/meggancarczyk/">Megan “Meg” Gancarczyk</a><span>Junior Product Manager</span></li>
                      <li><a href="https://www.linkedin.com/in/gwgoodman/">Greg Goodman</a><span>Senior Product Manager</span></li>
                      <li><a href="https://www.linkedin.com/in/zachary-debelak-39b7541/">Zach Debelak</a><span>Head of Product</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3>Agile transition</h3>
                    <ul role="list">
                      <li><a href="https://www.linkedin.com/in/vbrianhauk/">Brian Hauk</a><span>Agile Coach</span></li>
                      <li><a href="https://www.linkedin.com/in/andrewikamas/">Andrew Ikamas</a><span>Scrum Master</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3>Leadership and support</h3>
                    <ul role="list">
                      <li><a href="https://www.linkedin.com/in/jason-liu-a4757812/">Jason Liu</a><span>CEO</span></li>
                      <li><a href="https://www.linkedin.com/in/doug-marquis/">Doug Marquis</a><span>Product Development / CTO</span></li>
                      <li><a href="https://www.linkedin.com/in/johnnarofsky/">John Narofsky</a><span>My manager</span></li>
                    </ul>
                  </div>
              </div>
            </details>
            <figure className={styles.figure}>
                        <a className={styles.figureMat} href="/images/savo/styleguide-buttons.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full SAVO style guide image (opens in a new tab)">
                          <div className={styles.figureWindow}>
                            <Image src="/images/savo/styleguide-buttons.png" width={2880} height={4464} sizes="(max-width: 720px) calc(100vw - 68px), 786px" alt="SAVO’s style guide showing button variants alongside Ember template examples." />
                          </div>
                        </a>
                        <figcaption>I built the shared Ember.js component system and this style guide, which became a reference for developers working across SAVO’s products. <a href="/images/savo/styleguide-buttons.png" target="_blank" rel="noopener noreferrer">Open the full image<span className="sr-only"> (opens in a new tab)</span></a>.</figcaption>
                      </figure>
            <div className={styles.layout}>
              <nav className={styles.contents} aria-label="In this case study">
                <p>In this story</p>
                <ol role="list">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span>{section.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className={styles.story}>
                {sections.map((section) => (
                  <section className={styles.section} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
                    <h2 id={`${section.id}-title`}>{section.title}</h2>
                    {section.content}
                    {section.id === "asset-page" && (
                      <figure className={styles.sketchFigure}>
                        <a className={styles.figureMat} href="/images/savo/asset-page-sketches.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size Asset Page sketches (opens in a new tab)">
                          <Image src="/images/savo/asset-page-sketches.jpg" width={2448} height={3264} sizes="(max-width: 720px) calc(100vw - 68px), 436px" alt="Whiteboard with alternative Asset Page layouts, including document preview, details, comments, and actions." />
                        </a>
                        <figcaption>Early team sketches exploring the Asset Page layout. <a href="/images/savo/asset-page-sketches.jpg" target="_blank" rel="noopener noreferrer">View the full image<span className="sr-only"> (opens in a new tab)</span></a>.</figcaption>
                      </figure>
                    )}
                    {section.id === "search" && (
                      <>
                        <PortfolioFigure image={portfolioImages[0]} className={styles.searchOverview} sizes="(max-width: 720px) calc(100vw - 68px), 786px" />
                        <div className={styles.searchPhones}>
                          {portfolioImages.slice(1, 4).map((image) => <PortfolioFigure key={image.src} image={image} sizes="270px" />)}
                        </div>
                        <details className={styles.moreImages}>
                          <summary>More Search screens (4)</summary>
                          <div className={styles.portfolioGrid}>
                            {portfolioImages.slice(4, 8).map((image) => <PortfolioFigure key={image.src} image={image} sizes="(max-width: 720px) calc(100vw - 68px), 375px" />)}
                          </div>
                        </details>
                      </>
                    )}
                    {section.id === "shared-ui" && (
                      <>
                        <div className={styles.portfolioGrid}>
                          {portfolioImages.slice(8, 12).map((image) => <PortfolioFigure key={image.src} image={image} sizes="(max-width: 720px) calc(100vw - 68px), 375px" />)}
                        </div>
                        <details className={styles.moreImages}>
                          <summary>More Style Guide screens (2)</summary>
                          <div className={styles.portfolioGrid}>
                            {portfolioImages.slice(12).map((image) => <PortfolioFigure key={image.src} image={image} sizes="(max-width: 720px) calc(100vw - 68px), 375px" />)}
                          </div>
                        </details>
                      </>
                    )}
                    {section.id === "research-and-process" && (
                      <figure className={styles.processFigure}>
                        <a className={styles.figureMat} href="/images/savo/design-session.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size design-session photo (opens in a new tab)">
                          <Image src="/images/savo/design-session.jpg" width={3264} height={2448} sizes="(max-width: 720px) calc(100vw - 68px), 786px" alt="Interface sketches on sheets of paper attached to a glass wall, with colored voting dots." />
                        </a>
                        <figcaption>Sketches and voting dots from a SAVO team design session. <a href="/images/savo/design-session.jpg" target="_blank" rel="noopener noreferrer">View the full image<span className="sr-only"> (opens in a new tab)</span></a>.</figcaption>
                      </figure>
                    )}
                    {section.id === "asset-page" && (
                      <div className={styles.assetGallery} role="group" aria-label="Asset Page before and after gallery">
                        {[
                          { src: "asset-page-before.png", label: "Before · desktop", width: 2880, height: 3146, alt: "Earlier Asset Page with document thumbnails, preview, comments, and tags on one long page" },
                          { src: "asset-page.png", label: "After · desktop", width: 2880, height: 1566, alt: "Redesigned Asset Page with a larger document preview and file details alongside it" },
                          { src: "asset-page-mobile-preview.png", label: "Mobile · preview", width: 728, height: 1295, alt: "Redesigned mobile Asset Page with the Preview tab selected and a document viewer" },
                          { src: "asset-page-mobile-details.png", label: "Mobile · details", width: 728, height: 1295, alt: "Redesigned mobile Asset Page with the Details tab selected, showing modified date and file type" },
                        ].map((image) => (
                          <figure key={image.src}>
                            <a className={styles.assetImage} href={`/images/savo/${image.src}`} target="_blank" rel="noopener noreferrer" aria-label={`Open ${image.label.toLowerCase()} image at full size (opens in a new tab)`}>
                              <Image src={`/images/savo/${image.src}`} width={image.width} height={image.height} sizes="(max-width: 720px) calc(100vw - 68px), 375px" alt={image.alt} />
                            </a>
                            <figcaption><a href={`/images/savo/${image.src}`} target="_blank" rel="noopener noreferrer">{image.label}<span className="sr-only"> · full-size image (opens in a new tab)</span></a></figcaption>
                          </figure>
                        ))}
                      </div>
                    )}
                    {section.id === "team-culture" && (
                      <figure className={styles.processFigure}>
                        <a className={styles.figureMat} href="/images/savo/ux-team.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open the full UI/UX team mind map PDF (opens in a new tab)">
                          <Image src="/images/savo/ux-team.png" width={2000} height={1906} sizes="(max-width: 720px) calc(100vw - 68px), 786px" alt="UI/UX team mind map connecting our shared needs, values, traits, abilities, skills, and principles, including collaboration, growth, feedback, and respect." />
                        </a>
                        <figcaption>The mind map we developed together during the team workshop. <a href="/images/savo/ux-team.pdf" target="_blank" rel="noopener noreferrer">View the full mind map (PDF)<span className="sr-only"> (opens in a new tab)</span></a>.</figcaption>
                      </figure>
                    )}
                    {section.id === "research-and-process" && (
                      <figure className={styles.processFigure}>
                        <a className={styles.figureMat} href="/images/savo/product-process.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full SAVO product process diagram (opens in a new tab)">
                          <Image src="/images/savo/product-process.jpg" width={2415} height={1575} sizes="(max-width: 720px) calc(100vw - 68px), 786px" alt="SAVO product process: Ideation, Research, Design, and Develop span seven stages from Target to Release to Portfolio, with research continuing through delivery and after release." />
                        </a>
                        <figcaption>The process we defined together across Product, UI/UX, and engineering. Research runs from early exploration through feedback after release. <a href="/images/savo/product-process.jpg" target="_blank" rel="noopener noreferrer">View the full-size diagram<span className="sr-only"> (opens in a new tab)</span></a>.</figcaption>
                      </figure>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </article>
          <nav className={styles.related} aria-label="Related work">
            <p>My business</p>
            <Link href="/#wavepoint">Explore WavePoint <ArrowRightIcon aria-hidden="true" /></Link>
          </nav>
        </div>
        <Contact intro="If you see an opportunity for us to work together, I’d love to hear from you. That could be a role, a project, or simply getting to know each other and seeing where it goes." />
      </main>
    </>
  );
}
