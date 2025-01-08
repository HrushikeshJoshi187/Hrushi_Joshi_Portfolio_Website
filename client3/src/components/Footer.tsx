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

            {/* <ButtonPrimary
              href="mailto:hrushikesh.joshi.187@gmail.com"
              target=""
              label="Start project"
              icon="chevron_right"
              classes=" reveal-up"
            /> */}
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
              src="./src/assets/logos/hrushikesh_joshi_logo_dark.svg"
              width={40}
              height={40}
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
