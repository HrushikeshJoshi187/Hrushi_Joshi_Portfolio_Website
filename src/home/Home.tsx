import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
