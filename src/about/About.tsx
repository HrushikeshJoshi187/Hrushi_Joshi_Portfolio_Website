import AboutMe from "./AboutMe.tsx";
import Experience from "./Experience.tsx";
import Education from "./Education.tsx";

export default function About() {
  return (
    <main className="w-full h-full">
      <AboutMe />
      <Experience />
      <Education />
    </main>
  );
}
