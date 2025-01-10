export default function Experience() {
  const experiences = [
    {
      title: "Staff Frontend Engineer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description: "Lead frontend development for multiple high-impact projects, mentor junior developers, and drive technical decisions."
    },
    {
      title: "Senior Frontend Developer",
      company: "WebSolutions Ltd.",
      period: "2017 - 2020",
      description: "Developed and maintained large-scale web applications using React and Redux, improving performance and user experience."
    },
    {
      title: "Frontend Developer",
      company: "DigitalCreations Co.",
      period: "2014 - 2017",
      description: "Built responsive websites and implemented interactive features using JavaScript and jQuery."
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

