// import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
// import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* <Header /> */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}

