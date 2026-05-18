import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Socials from "./components/Socials.tsx";
import Email from "./components/Email.tsx";

import Home from "./home/Home.tsx";
import Work from "./work/Work.tsx";
import About from "./about/About.tsx";
import Blog from "./blog/Blog.tsx";

export default function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col text-[var(--text-muted)] bg-[var(--background)] text-[clamp(0.875rem,calc(2.8vw+0.5rem),1.25rem)]">
      <Header />

      <div className="flex">
        <Socials />
        <div className="w-full h-full flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
        <Email />
      </div>
    </div>
  );
}
