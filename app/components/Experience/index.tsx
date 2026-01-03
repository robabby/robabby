import { Box, Flex, Heading } from "@radix-ui/themes";
import ExperienceItem from "./components/ExperienceItem";
import GeometricPattern from "../GeometricPattern";
import AnimatedSection from "../AnimatedSection";

const EXPERIENCE = [
  {
    title: "IT Manager",
    company: "VIMSIA",
    companyLink: "https://www.vimsia.org",
    period: "2025 - PRESENT",
    description: "Leading modernization of internal tech infrastructure and web tools at an international Montessori/IB school.",
    highlights: [
      "Oversee system performance (98% uptime) and digital transformation initiatives integrating cloud, automation, and web technologies.",
      "Providing technical support and training to faculty and staﬀ, enhancing eﬀective utilization of technology in educational settings and reducing support requests by 20%.",
      "Coordinating with external vendors and service providers to ensure seamless integration and operation of IT services."
    ]
  },
  {
    title: "Staff Frontend Engineer",
    company: "PartySlate",
    companyLink: "https://www.partyslate.com",
    period: "2018 - 2024",
    description: "Supported growth at PartySlate, a dual-sided marketplace platform, from a 12-person early-stage startup to a +50-employee Series-B company while averaging 258.33% revenue growth year-over-year.",
    highlights: [
      "Spearheaded 10+ large-scale features used by 200k+ users monthly in a React & NextJS frontend and Ruby on Rails backend from requirements phase through agile development and cross-functional definition process, resulting in a 25% increase in user engagement year-over-year.",
      "Led the rewrite of Find Venues Page, the most impactful page on the website, to provide an interactive Map-view and redesigned search results, leading to  a 150% increase in Venue inquiries.",
      "Mentored fellow engineers via code-reviews, pair programming and lunch-and-learns fostering a positive work environment.",
      "Optimized code quality across teams by adopting TypeScript and integrating ESLint and Prettier into CI pipelines, reducing code review defects by 40% and ensuring consistent React/GraphQL standards.",
      "Expanded UI Components library by developing 25+ reusable modules using TypeScript, React, and Chakra UI with integrated web accessibility testing and visual regression in Storybook, streamlining cross-team collaboration and reducing feature rollout cycle by 40% over a 12-month period.",
			"Improved site-wide Lighthouse accessibility score from 78 to 95 and performance score to 90+ by implementing lazy loading, code splitting, and WCAG 2.1 AA compliance standards, reducing initial bundle size by 40% and average page load time by 2.3 seconds improving engagement on high-traﬃc marketplace pages."
    ]
  },
  {
    title: "Senior UX Engineer",
    company: "project44",
    companyLink: "https://www.project44.com",
    period: "2018 - 2018",
    description: "project44 (B2B) is the leading Decision Intelligence Platform for supply chains, powered by the world's largest transportation data network.",
    highlights: [
      "Collaborated within the Product Experience team defining and developing processes and features for new User Interface products, sitting atop existing API based solutions.",
      "Worked heavily with the Here Maps API to build interactive map-based interfaces.",
      "Implementing features into a React/Redux codebase within tight timelines and scope using development best-practices (Jest, Enzyme, ES6, SCSS w/BEM).",
      "Led the creation of a living style guide and UI component library with Ant Design & Rollup.js.",
      "Built live-code prototypes and deployed them to AWS (S3) for gathering feedback and testing new features."
    ]
  },
  {
    title: "Senior Product Developer",
    company: "Savo",
    companyLink: "https://pitchbook.com/profiles/company/13234-69#overview",
    period: "2013 - 2018",
    description: "SAVO (B2B) was an industry leader in the sales enablement space, providing SaaS software used by some of the largest companies in the world (Disney, American Express, Google, UPS, etc.). I worked within Agile and Lean UX methodologies taking projects from discovery to implementation.",
    highlights: [
      "Led the spinout of an autonomous UI/UX team that adopted a user-centered process, conducting 50+ User Research sessions, Usability Interviews, and Design Workshops, resulting in a 30% increase in user satisfaction.",
			"Architected and implemented UI features that embedded SAVO’s sales content and enablement tools directly within Salesforce, creating a seamless experience for enterprise sales teams and reducing context-switching between platforms.",
			"Developed UI components and features that integrated SAVO’s sales enablement platform into Salesforce, enabling sales teams to access content, training, and playbooks within their existing CRM workflow, improving adoption rates and user engagement.",
      "Contributed to the production of a holistic Design Language and Living Design System using Ember.js and Material Design, used within our own products and integrated with Salesforce, resulting in a 20% improvement in developer productivity.",
      "Established the SAVO Front-End Guild, a bi-weekly meeting for all developers that covered Front-end development basics, best practices, and industry trends.",
			"Authored design system documentation and contribution guidelines to ensure consistency across multiple product teams."
    ]
  },
  {
    title: "Web Developer",
    company: "Web2Carz",
    companyLink: "https://www.web2carz.com",
    period: "2011 - 2013",
    description: "Web2Carz (B2C) is a used car marketplace and editorial platform. I was hired as the first developer and worked directly with the founders to implement a major redesign of the Web2Carz aging site, implement a new editorial segment, and develop an adaptive mobile solution.",
    highlights: [
      "Collaborated with stakeholders and designers to implement new car viewing galleries, contact forms, article layouts, resulting in a 20% improvement in revenue, a 15% decrease in bounce rate, and a 25% increase in conversion.",
      "Developed a revamped, standalone mobile web application adopting cutting-edge industry standards (jQuery), leading to a 20% increase in revenue.",
      "Implemented git for version control and a formal deployment process to reduce bugs and increase uptime of the site."
    ]
  }
]

export default function Experience() {

  return (
    <Box id="experience" py="8" style={{ background: "var(--sg-gradient-section)", position: "relative", overflow: "hidden" }}>
      <GeometricPattern variant="dots" opacity={0.02} />
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Flex direction="column" justify="center" align="center">
          <Heading size="8">Experience</Heading>
          <Box>
            {EXPERIENCE.map(({
              title,
              company,
              companyLink,
              period,
              description,
              highlights
             }, index) => (
              <ExperienceItem
                title={title}
                company={company}
                companyLink={companyLink}
                period={period}
                description={description}
                highlights={highlights}
                key={index}
              />
            ))}
          </Box>
        </Flex>
      </AnimatedSection>
    </Box>
  )
}
