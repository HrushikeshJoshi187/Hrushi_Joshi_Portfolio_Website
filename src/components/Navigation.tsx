import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-lg items-center gap-6">
          <li>
            <a href="#experience" className="hover:underline">
              Work
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
          <span className="w-6 h-0.5 bg-zinc-300"></span>
          <span className="w-6 h-0.5 bg-zinc-300"></span>
          <span className="w-6 h-0.5 bg-zinc-300"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-lg">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>

          <li>
            <a href="#work" className="hover:underline">
              Work
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
