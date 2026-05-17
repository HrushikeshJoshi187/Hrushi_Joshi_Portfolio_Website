import { useState } from "react";

import { useTheme, type Theme } from "../context/ThemeContext.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

const navItems = [
  { id: "about", label: "About", number: "01" },
  { id: "work", label: "Work", number: "02" },
  { id: "experience", label: "Experience", number: "03" },
  { id: "education", label: "Education", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];

const renderNavLinks = ({ mobile = false, theme }: { mobile?: boolean; theme: Theme }) =>
  navItems.map((item) => (
    <li key={item.id}>
      <a
        href={`#${item.id}`}
        className={`
          hover:text-[var(--link)]
          ${mobile ? "flex-1 text-center" : ""}
        `}
      >
        <span className={`font-mono ${theme === "dark" ? "font-semibold" : "font-bold"} text-[var(--primary)]`}>
          {item.number}.
        </span>

        {mobile ? <br /> : " "}

        {item.label}
      </a>
    </li>
  ));

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  console.log(theme);

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-[var(--link)]">
          {renderNavLinks({ mobile: false, theme })}

          <li>
            <a
              href="/resume/Hrushikesh_Joshi_s_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="border-2 border-[var(--primary)] p-2 rounded-md text-[var(--primary)] hover:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
            >
              Resume
            </a>
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
          {renderNavLinks({ mobile: true, theme })}

          <li className="mt-4">
            <a
              href="/resume/Hrushikesh_Joshi_s_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="border-2 border-[var(--primary)] p-2 rounded-md text-[var(--primary)] hover:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
            >
              Resume
            </a>
          </li>

          <li className="mt-4">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
