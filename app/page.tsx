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
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <Box>
      <ScrollProgress />
      <Header />
      <Hero />
      <StatsBar />
      <SectionDivider />
      <About />
      <SectionDivider variant="subtle" />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider variant="subtle" />
      <Projects />
      <Footer />
    </Box>
  )
}

