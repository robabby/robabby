export default function Experience() {
  const projects = [
    {
      title: "ai-chatbot",
      githubLink: "https://github.com/robabby/ai-chatbot",
      liveLink: "https://ai-chatbot-psi-green-88.vercel.app/",
      description: "ChatGPT/Grok clone built with Next.js, TailwindCSS, Grok and OpenAI API. Features include conversation history, user authentication, and a sleek, responsive design.",
      tech: [
        "Nextjs", "shadcn/ui", "radix-ui", "OpenAI API", "Grok API", "TypeScript", "Vercel Chat SDK"
      ]
    },
    {
      title: "tldr-bot",
      githubLink: "https://github.com/robabby/tldr-bot",
      liveLink: null,
      description: "A Discord bot written in Python that leverages OpenAI's GPT-5 API to generate sarcastic summaries of recent messages in a channel. Will also generate memes based on message contents.",
      tech: [
        "Python", "Discord.py", "OpenAI GPT-5 API"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
        >
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-emerald-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-emerald-800">{proj.title}</h3>
              <p className="mb-2">
                <a 
                  className="text-teal-600 hover:text-emerald-700 mb-2 font-semibold hover:underline transition-colors duration-300" 
                  href={proj.githubLink} 
                  target="_blank"
                >
                  Github Link
                </a>
              </p>
              {proj.liveLink && (
                <p className="mb-2">
                  <a 
                    className="text-teal-600 hover:text-emerald-700 mb-2 font-semibold hover:underline transition-colors duration-300" 
                    href={proj.liveLink} 
                    target="_blank"
                    >
                    Demo Link
                  </a>
                </p>
              )}
              <p className="text-gray-700 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((item, index) => (
                  <span key={index} className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full text-sm hover:from-emerald-200 hover:to-teal-200 hover:shadow-md transform hover:scale-105 transition-all duration-300 font-medium">
                    {item}
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

