import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import Contact from "@/app/components/Contact";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata, PAGE_INFO, SITE_URL } from "@/app/lib/site";
import styles from "../case-study.module.css";

export const metadata = pageMetadata("savo");

const sections = [
  {
    id: "people-using-savo",
    title: "Making room for the people using the software",
    label: "The people using SAVO",
    content: (<>
      <p>SAVO helped salespeople find and use content for conversations with clients and prospects. The executives buying the software, the administrators managing it, and the people using it every day had different needs.</p>
      <p>Product decisions were heavily influenced by sales commitments. We also supported older enterprise environments, which placed real constraints on the interface. I wanted us to hear more directly from the sales and marketing people who spent their days using what we built.</p>
      <p>One early attempt was a usability questionnaire I prepared for the SAVO User Alliance Group. It was canceled before it went out. We still needed a way to bring user feedback into our work.</p>
    </>),
  },
  {
    id: "forming-the-team",
    title: "Starting with the team",
    label: "Forming the team",
    content: (<>
      <p>The dated interface gave us a concrete place to begin. My manager, <a href="https://www.linkedin.com/in/johnnarofsky/">John Narofsky</a>, helped carry my request through the organization and secure the CTO’s approval to hire a Visual Designer.</p>
      <p>I wrote the job posting, ran the interviews, and hired Brittany. From there, we helped form a UI/UX team that brought visual design, user experience, research, and frontend engineering together.</p>
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
      <p>The redesign shipped to customers and was well received.</p>
    </>),
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
    label: "Research & process",
    content: (<>
      <p>Access to the SAVO User Alliance Group eventually gave us a pool of administrators and end users for interviews and testing. <a href="https://www.linkedin.com/in/tom-green-b6198a4/">Tom Green</a> was our user researcher, and <a href="https://www.linkedin.com/in/allisonpaul/">Allison Paul</a> later managed outreach, scheduling, and session facilitation. We worked together to define research goals.</p>
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
      <p>Before the UI/UX initiative, SAVO moved from waterfall delivery to Agile. Our CTO, <a href="https://www.linkedin.com/in/doug-marquis/">Doug Marquis</a>, brought in <a href="https://www.linkedin.com/in/vbrianhauk/">Brian Hauk</a> to help guide that transition. Their work opened up a different way of thinking about software for me.</p>
      <p>The company paid for my Product Owner certification, and I became the embedded Product Owner for our Predictive Analytics team, reporting directly to the CTO.</p>
      <p>I ran grooming sessions, brought a technical perspective where it helped, and helped the team work through problems in a domain I was still learning. The ambition was to recommend useful documents in the context of a salesperson’s meetings and conversations. The team never delivered that work to customers; company priorities changed.</p>
      <p>During that period, I read Steve Krug’s <em>Don’t Make Me Think</em>. It helped shape the user advocacy that followed. Later, our UI/UX team learned together at conferences and brought ideas back into our work.</p>
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
      <SiteHeader />
      <JsonLd value={schema} />
      <main id="main-content" tabIndex={-1}>
        <div className="wrap">
          <article aria-labelledby="savo-title">
            <header className={styles.hero}>
              <div>
                <p className="eyebrow">Selected work · SAVO</p>
                <h1 id="savo-title">Building a UI/UX practice at SAVO.</h1>
                <p className={styles.lead}>SAVO is where my career truly started. I joined as a self-taught frontend developer and went on to help shape how we designed, built, and learned from the people using our software.</p>
                <p className={styles.intro}>I led the initiative to form our UI/UX team, hired visual designer <a href="https://www.linkedin.com/in/brittanymikottis/">Brittany Mikottis</a>, and worked alongside her on design and implementation. I also built the shared Ember.js component system and style guide used across several parts of the product.</p>
              </div>
              <aside className={styles.projectContext} aria-label="Project context">
                <dl>
                  <div><dt>My work</dt><dd>Frontend engineering<br />Product ownership<br />Building the UI/UX team</dd></div>
                  <div><dt>Alongside</dt><dd>Brittany Mikottis and the UI/UX, Product, and engineering teams</dd></div>
                </dl>
              </aside>
            </header>
            <div className={styles.layout}>
              <nav className={styles.contents} aria-label="In this case study">
                <p className="eyebrow">In this story</p>
                <ol role="list">
                  {sections.map((section, i) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span className={styles.number} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                        <span>{section.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className={styles.story}>
                {sections.map((section, i) => (
                  <section className={styles.section} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
                    <span className={styles.sectionIndex} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h2 id={`${section.id}-title`}>{section.title}</h2>
                    {section.content}
                    {section.id === "shared-ui" && (
                      <figure className={styles.figure}>
                        <a className={styles.figureMat} href="/images/savo/styleguide-buttons.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full SAVO style guide image (opens in a new tab)">
                          <div className={styles.figureWindow}>
                            <Image src="/images/savo/styleguide-buttons.png" width={2880} height={4464} sizes="(max-width: 760px) calc(100vw - 76px), (max-width: 1000px) 65vw, 750px" alt="SAVO’s style guide showing button variants alongside Ember template examples." />
                          </div>
                        </a>
                        <figcaption>The style guide paired component examples with implementation guidance. <a href="/images/savo/styleguide-buttons.png" target="_blank" rel="noopener noreferrer">Open the full image<span className="sr-only"> (opens in a new tab)</span></a>.</figcaption>
                      </figure>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </article>
          <nav className={styles.related} aria-label="Related work">
            <p className="eyebrow">My business</p>
            <Link href="/work/wavepoint">Explore WavePoint <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
        <Contact />
      </main>
    </>
  );
}
