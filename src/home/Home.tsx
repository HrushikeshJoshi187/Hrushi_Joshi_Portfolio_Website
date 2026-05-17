import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Work />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
