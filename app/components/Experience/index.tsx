import { Box, Flex, Heading } from "@radix-ui/themes";
import ExperienceItem from "./components/ExperienceItem";

const EXPERIENCE = [
  {
    title: "IT Manager",
    company: "VIMSIA",
    companyLink: "https://www.vimsia.org",
    period: "2025 - PRESENT",
    description: "Managing IT for a private Montessori & International Baccalaureate school with a combined headcount of 350 people including faculty and students.",
    highlights: [
      "Overseeing all aspects of IT infrastructure, including network management, hardware and software procurement, and system maintenance to ensure optimal performance and security with a network uptime of 98%.",
      "Managing code and changes for small websites, microsites and data repositories using modern frameworks and tools.",
      "Providing technical support and training to faculty and staff, enhancing effective utilization of technology in educational settings and reducing support requests by 20%.",
      "Coordinating with external vendors and service providers to ensure seamless integration and operation of IT services."
    ]
  },
  {
    title: "Staff Frontend Engineer",
    company: "PartySlate",
    companyLink: "https://www.partyslate.com",
    period: "2018 - 2024",
    description: "PartySlate (B2C) is a photo-rich platform & dual-sided marketplace that connects people planning events with leading vendors and venues.",
    highlights: [
      "Supported growth at PartySlate (B2C), a dual-sided marketplace platform, from a 12-person early-stage startup to a +50-employee Series-B company while averaging 258.33% revenue growth year-over-year.",
      "Spearheaded 10+ large-scale features from requirements phase through agile development and cross-functional definition process, resulting in a 25% increase in user engagement year-over-year.",
      "Led the rewrite of Find Venues Page, the most impactful page on the website, to provide an interactive Map-view and redesigned search results, leading to  a 150% increase in Venue inquiries.",
      "Mentored fellow engineers via code-reviews, pair programming and lunch-and-learns fostering a positive work environment.",
      "Optimized code quality across teams by integrating ESLint and Prettier into CI pipelines, reducing code review defects by 40% and ensuring consistent React/GraphQL standards.",
      "Expanded UI Components library by developing 25+ reusable modules with Ant Design, streamlining cross-team collaboration and reducing feature rollout cycle by 40% over a 12-month period using Rollup.js and Storybook."
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
      "Built live-code prototypes and deployed them to AWS (S3) for gathering feedback and testing new features.",
      "Engineered seamless integration of REST API endpoints into React/Redux interfaces, accelerating data retrieval times by 35% and supporting 5+ major feature rollouts using Axios and Postman for real-time validation."
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
      "Contributed to the production of a holistic Design Language and Living Design System, resulting in a 20% improvement in developer productivity.",
      "Established the SAVO Front-End Guild, a bi-weekly meeting for all developers that covered Front-end development basics, best practices, and industry trends."
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
    <Box id="experience" py="8">
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
    </Box>
  )
}
