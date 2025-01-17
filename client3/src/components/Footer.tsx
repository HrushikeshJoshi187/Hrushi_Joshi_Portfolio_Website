import { site_map } from "../data/data.tsx";
import { footer_socials } from "../data/data.tsx";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_container">
        <div className="footer_information_site_map_and_socials">
          <div className="footer_information">
            <h2 className="footer_headline reveal-up">
              Let&apos;s work together today!
            </h2>

            <a
              href="#contact"
              target=""
              className="footer_button footer_primary_button"
            >
              Start Project
              <span
                className="footer_material_symbols_rounded"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="undefined"
                >
                  <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
                </svg>
              </span>
            </a>
          </div>

          <div className="footer_site_map_and_socials">
            <div>
              <p className="footer_site_map_and_social reveal-up">Sitemap</p>
              <ul>
                {site_map.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="footer_link reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="footer_site_map_and_social reveal-up">Socials</p>
              <ul>
                {footer_socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="footer_link reveal-up"
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_copyright_section">
          <a href="/" className="footer_logo reveal-up">
            <img
              className=""
              src="./src/assets/logos/hrushikesh_joshi_logo_dark.svg"
              alt="Hrushi Joshi Logo"
            />
          </a>

          <p className="footer_copyright reveal-up">
            &copy; {new Date().getFullYear()}{" "}
            <span className="footer_name text-zinc-200">Hrushikesh Joshi</span>.
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
