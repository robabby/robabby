import { Box } from "@radix-ui/themes";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box>
      <ScrollProgress />
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
		</Box>
  )
}

