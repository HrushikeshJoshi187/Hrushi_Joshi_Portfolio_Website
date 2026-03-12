import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="px-12 mx-auto xl:max-w-6xl flex flex-col items-center justify-center gap-4 border-t border-zinc-600 pb-10">
      <div className=" py-12 grid gap-24 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold mb-3">Hrushi Joshi</h2>
          <p className="text-sm text-zinc-400">
            Building cool things on the web. Passionate about development, design, and creating meaningful digital experiences.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex gap-4 text-gray-600 text-zinc-400">
            <a href="https://github.com" className="hover:text-white transition">
              GitHub
            </a>
            <a href="https://linkedin.com" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full justify-between gap-4">
        <Logo />

        <div className="text-sm text-zinc-400">© {new Date().getFullYear()} Hrushi Joshi. All rights reserved.</div>
      </div>
    </footer>
  );
}
