import { Flex } from "@radix-ui/themes";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
		</Flex>
  )
}

