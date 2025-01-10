export default function Experience() {
  const experiences = [
    {
      title: "Staff Frontend Engineer",
      company: "PartySlate",
      period: "2018 - 2024",
      description: "In my time at PartySlate we grew from a 12-person early-stage startup to a +50-employee Series-B company while averaging 258.33% revenue growth year-over-year. I shipped *many* features, embraced remote work, established a collaborative Design System, transitioned to Next.js and React Query, and succeeded in building a world class events industry platform."
    },
    {
      title: "Senior Product Developer",
      company: "Savo",
      period: "2013 - 2018",
      description: "Worked within Agile and Lean UX methodologies to take projects from discovery to implementation. Collaborated with Visual Design, UX Design & Research, Development, Product, and Delivery Managers to build quality, user centered products."
    },
    {
      title: "Web Developer",
      company: "Web2Carz",
      period: "2011 - 2013",
      description: "Hired as the first developer and worked directly with the founders to implement a major redesign of the Web2Carz aging site, implement a new editorial segment, and develop an adaptive mobile solution."
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
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

