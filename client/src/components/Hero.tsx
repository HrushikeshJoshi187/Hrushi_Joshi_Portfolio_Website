import "./Hero.css";

const Hero = (): JSX.Element => {
  return (
    <section id="hero_section" className="hero_section">
      <div className="hero_container">
        <div>
          {/* <div className="hero_profile">
            <figure className="hero_profile_figure">
              <img
                className="hero_profile_image"
                src="./src/assets/profile_photos/profile_image.jpg"
                alt="profile_image"
                width={40}
                height={40}
              />
            </figure>

            <div className="hero_profile_information">
              <span className="hero_profile_ping_1">
                <span className="hero_profile_ping_2"></span>
              </span>
              Available for work
            </div>
          </div> */}

          <h2 className="hero_headline">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="hero_buttons">
            <a
              href=""
              target=""
              className="hero_button hero_primary_button reveal-up"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="none"
              >
                <path
                  d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#contact_section"
              target=""
              className="hero_button hero_outline_button reveal-up"
            >
              Hire me now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="none"
              >
                <path
                  d="M440-313v-447q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v447l196-196q12-12 28-11.5t28 12.5q11 12 11.5 28T772-452L508-188q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L188-452q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l195 195Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero_portrait">
          <figure className="hero_portrait_figure">
            <img
              src="./src/assets/profile_photos/profile_photo.png"
              width={656}
              height={800}
              alt="picture"
              className="hero_portrait_image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
