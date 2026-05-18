import Logo from "./Logo";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-8 lg:px-12 mx-auto xl:max-w-6xl flex flex-col gap-4 pb-10 overflow-hidden break-normal">
      <div className="h-px w-full bg-[var(--line)]"></div>

      <div className=" py-8 flex flex-col sm:flex-row gap-12 lg:gap-24 text-[clamp(0.875rem,2.8vw+0.4rem,1rem)]">
        <div className="flex-3 flex flex-col gap-2">
          <h2 className="text-[var(--text)] text-[clamp(1.125rem,3.5vw+0.5rem,1.5rem)] font-semibold">
            Hrushikesh Joshi
          </h2>
          <p className="text-[clamp(0.875rem,2.8vw+0.4rem,1rem)] text-[var(--text-muted)]">
            Building cool things on the web. Passionate about development, design, and creating meaningful digital
            experiences.
          </p>
        </div>

        <div className="flex-2 flex flex-row flex-wrap gap-12 lg:gap-24">
          <div className="flex-1 flex flex-col items-start justify-start">
            <h3 className="text-[var(--text)] text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] font-semibold mb-2">Sitemap</h3>
            <ul className="space-y-1 text-[var(--text-muted)]">
              <li>
                <Link to="/" className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col items-start justify-start">
            <h3 className="text-[var(--text)] text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] font-semibold mb-2">Socials</h3>
            <ul className="space-y-1 text-[var(--text-muted)]">
              <li>
                <a
                  href="https://github.com/HrushikeshJoshi187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hrushikeshjoshi187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/hrushiJoshi187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out"
                >
                  Codepen
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Hrushikesh86361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hrushikesh_joshi_187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full justify-between gap-12">
        <Logo />
        <div className="text-[clamp(0.875rem,2.8vw+0.4rem,1rem)] text-[var(--text-muted)]">
          © {new Date().getFullYear()} Hrushi Joshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
