// import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">Robert Abby</h1>
        <p className="text-2xl mb-8 animate-fade-in-up">Product Engineer</p>
        <a href="#about" className="bg-white/90 backdrop-blur-sm text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">Learn More</a>
      </div>
    </section>
  )
}

