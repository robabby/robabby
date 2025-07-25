export default function Skills() {
  const skillCategories = {
    "Languages & Frameworks": [
      "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
      "HTML5", "CSS3", "Sass", "Tailwind CSS", "GraphQL", "REST APIs"
    ],
    "Leadership": [
      "Coaching", "Training", "Pair Programming", "Agile Methodologies"
    ],
    "Platforms & Tools": [
      "Living Design Systems", "Webpack", "Jest", "Cypress", "Git", "CI/CD"
    ]
  }

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

