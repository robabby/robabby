// import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 animate-fade-in-down">Robert Abby</h1>
        <p className="text-2xl mb-8 animate-fade-in-up">Product Engineer</p>
        <a href="#about" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Learn More</a>
      </div>
    </section>
  )
}

