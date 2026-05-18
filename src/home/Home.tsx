import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
