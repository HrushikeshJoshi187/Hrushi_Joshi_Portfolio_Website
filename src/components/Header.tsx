import { useEffect, useState } from "react";

import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full h-20 flex items-center justify-between px-4 sm:px-8 lg:px-12 bg-[var(--background)] z-10 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <Logo />
      <Navigation />
    </header>
  );
}
