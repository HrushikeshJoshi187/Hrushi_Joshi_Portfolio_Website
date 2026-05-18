import { useState } from "react";
import { Link, useLocation, type Location } from "react-router-dom";

import { useTheme, type Theme } from "../context/ThemeContext.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "blog", label: "Blog" },
];

const renderNavLinks = ({ mobile = false, theme, location }: { mobile?: boolean; theme: Theme; location: Location }) =>
  navItems.map((item) => (
    <li key={item.id}>
      <Link
        to={`/${item.id === "home" ? "" : item.id}`}
        className={`relative inline-block origin-center hover:text-[var(--primary)] hover:scale-105 transition-all duration-300 ease-in-out
          after:content-['']
          after:absolute
          after:left-1/2
          after:bottom-0
          after:h-[2px]
          after:bg-[var(--primary)]
          after:transition-all
          after:duration-300
          after:ease-in-out
          after:-translate-x-1/2

          ${theme === "dark" ? "" : ""}

          ${
            location.pathname === `/${item.id === "home" ? "" : item.id}`
              ? "text-[var(--primary)] after:w-full"
              : "text-[var(--text)] after:w-0 hover:after:w-full"
          }

          ${mobile ? "flex-1 text-center" : ""}
        `}
      >
        {mobile ? <br /> : " "}

        {item.label}
      </Link>
    </li>
  ));

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-end">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-[var(--link)]">
          {renderNavLinks({ mobile: false, theme, location })}

          <li>
            <Link
              to="/resume/Hrushikesh_Joshi_s_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="border-2 border-[var(--primary)] p-2 rounded-md text-[var(--primary)] hover:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
            >
              Resume
            </Link>
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Hamburger */}
        <button className="lg:hidden relative z-100 w-6 h-6" onClick={() => setOpen(!open)}>
          <span
            className={`absolute w-6 h-0.5 bg-[var(--text)] transition-transform duration-300 ${open ? "rotate-45 top-3" : "top-1"}`}
          ></span>

          <span
            className={`absolute w-6 h-0.5 bg-[var(--text)] transition-opacity duration-300 ${open ? "opacity-0" : "top-3"}`}
          ></span>

          <span
            className={`absolute w-6 h-0.5 bg-[var(--text)] transition-transform duration-300 ${open ? "-rotate-45 top-3" : "top-5"}`}
          ></span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 lg:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-[var(--background)] p-12 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="w-full h-full flex flex-col items-center justify-center gap-6 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-[var(--text-muted)] text-center">
          {renderNavLinks({ mobile: true, theme, location })}

          <li className="mt-4">
            <Link
              to="/resume/Hrushikesh_Joshi_s_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="border-2 border-[var(--primary)] p-2 rounded-md text-[var(--primary)] hover:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
            >
              Resume
            </Link>
          </li>

          <li className="mt-4">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
