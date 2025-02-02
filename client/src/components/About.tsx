import { about_items } from "../data/data.tsx";

import logo from "../assets/logos/hrushikesh_joshi_logo_dark.svg";

import "./About.css";

const About = (): JSX.Element => {
  return (
    <section id="about_section" className="about_section">
      <div className="about_container">
        <div className="about_card reveal-up">
          <p className="about_description">
            Welcome! I&apos;m Hrushikesh, a professional web developer with a
            knack for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance.
          </p>

          <div className="about_numbers">
            {about_items.map(({ label, number }, key) => (
              <div key={key} className="">
                <div className="about_number_div">
                  <span className="about_number">{number}</span>
                  <span className="about_number_plus">+</span>
                </div>

                <p className="about_number_label">{label}</p>
              </div>
            ))}

            <img
              className="about_logo"
              src={logo}
              alt="Hrushikesh Joshi Logo"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
