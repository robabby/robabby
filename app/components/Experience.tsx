export default function Experience() {
  const experiences = [
    {
      title: "Staff Frontend Engineer",
      company: "PartySlate",
      period: "2018 - 2024",
      description: "PartySlate (B2C) is a photo-rich platform & dual-sided marketplace that connects people planning events with leading vendors and venues. In my time at PartySlate we grew from a 12-person early-stage startup to a +50-employee Series-B company while averaging 258.33% revenue growth year-over-year.",
      highlights: [
        "Spearheaded 10+ large-scale features from requirements phase through agile development and cross-functional definition process, resulting in a 25% increase in user engagement year-over-year.",
        "Led the rewrite of Find Venues Page, the most impactful page on the website, to provide an interactive Map-view and redesigned search results, leading to  a 150% increase in Venue inquiries.",
        "Mentored fellow engineers via code-reviews, pair programming and lunch-and-learns fostering a positive work environment."
      ]
    },
    {
      title: "Senior UX Engineer",
      company: "project44",
      period: "2018 - 2018",
      description: "project44 (B2B) is the leading Decision Intelligence Platform for supply chains, powered by the world's largest transportation data network. I worked within the Product Experience team defining and developing processes and features for project44’s new User Interface products, sitting atop their existing API based solutions.",
      highlights: [
        "Worked heavily with the Here Maps API to build interactive map-based interfaces.",
        "Implementing features into a React/Redux codebase within tight timelines and scope using development best-practices (Jest, Enzyme, ES6, SCSS w/BEM).",
        "Led the creation of a living style guide and UI component library with Ant Design & Rollup.js.",
        "Built live-code prototypes and deployed them to AWS (S3) for gathering feedback and testing new features."
      ]
    },
    {
      title: "Senior Product Developer",
      company: "Savo",
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
      period: "2011 - 2013",
      description: "Web2Carz (B2C) is a used car marketplace and editorial platform. I was hired as the first developer and worked directly with the founders to implement a major redesign of the Web2Carz aging site, implement a new editorial segment, and develop an adaptive mobile solution.",
      highlights: [
        "Collaborated with stakeholders and designers to implement new car viewing galleries, contact forms, article layouts, resulting in a 20% improvement in revenue, a 15% decrease in bounce rate, and a 25% increase in conversion.",
        "Developed a revamped, standalone mobile web application adopting cutting-edge industry standards (jQuery), leading to a 20% increase in revenue."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-600 mb-2">{exp.company}</p>
              <p className="text-gray-600 mb-4">{exp.period}</p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

