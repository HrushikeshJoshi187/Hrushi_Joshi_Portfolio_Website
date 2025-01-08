import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
