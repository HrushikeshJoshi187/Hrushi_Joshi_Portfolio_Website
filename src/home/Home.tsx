import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
