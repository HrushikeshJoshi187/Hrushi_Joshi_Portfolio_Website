import { contact_socials } from "../data/data.tsx";

import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact_section" className="contact_section">
      <div className="contact_container">
        <div className="contact_information">
          <h2 className="contact_headline reveal-up">
            Contact me for collaboration
          </h2>

          <p className="contact_section_description">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>

          <div className="contact_socials">
            {contact_socials.map(({ social_logo, social }, key) => (
              <a
                key={key}
                href={social}
                target="_blank"
                rel="noopener noreferrer"
                className="contact_social reveal-up"
              >
                {social_logo}
              </a>
            ))}
          </div>
        </div>

        <form action="" className="contact_form" method="POST">
          <div className="contact_name_and_email">
            <div className="contact_form_div">
              <label htmlFor="name" className="contact_label reveal-up">
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="contact_input reveal-up"
              />
            </div>

            <div className="contact_form_div">
              <label htmlFor="email" className="contact_label reveal-up">
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="JohnDoe@gmail.com"
                className="contact_input reveal-up"
              />
            </div>
          </div>

          <div className="contact_form_div">
            <label htmlFor="message" className="contact_label reveal-up">
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              className="contact_input contact_textarea reveal-up"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact_button contact_primary_button contact_form_submit_button reveal-up"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
