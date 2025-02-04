import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import KevinRushPortfolioWebsite from "./components/KevinRushPortfolioWebsite.tsx";
import JohnDoePortfolioWebsite from "./components/JohnDoePortfolioWebsite.tsx";
import AskYourCrushOutOnline from "./components/AskYourCrushOutOnline.tsx";

import Art from "./components/Art.tsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = (): JSX.Element => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up") as HTMLElement[];

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <BrowserRouter>
      <ReactLenis root>
        <div className="app">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                  </main>
                </>
              }
            />
            <Route
              path="/kevin_rush_portfolio_website"
              element={<KevinRushPortfolioWebsite />}
            />
            <Route
              path="/john_doe_portfolio_website"
              element={<JohnDoePortfolioWebsite />}
            />

            <Route
              path="/ask_your_crush_out_online"
              element={<AskYourCrushOutOnline />}
            />

            <Route path="/art" element={<Art />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;
