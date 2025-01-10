export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
    "HTML5", "CSS3", "Sass", "Tailwind CSS", "GraphQL", "REST APIs",
    "Webpack", "Jest", "Cypress", "Git", "Agile Methodologies", "CI/CD"
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

