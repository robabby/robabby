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
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-center text-emerald-700">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full text-sm hover:from-emerald-200 hover:to-teal-200 hover:shadow-md transform hover:scale-105 transition-all duration-300 font-medium">
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

