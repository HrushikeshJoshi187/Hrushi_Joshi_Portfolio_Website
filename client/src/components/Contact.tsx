import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

import { contact_socials } from "../data/data.tsx";

import "./Contact.css";

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ??
  ((() => {
    console.warn("EMAILJS_SERVICE_ID not defined. Falling back to default.");
    return "default_service";
  })() as string);
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string;

interface FormData {
  client_name: string;
  client_email: string;
  client_message: string;
}

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    client_name: "",
    client_email: "",
    client_message: "",
  });

  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const showAlert = (type: string, message: string) => {
    setAlert({ show: true, type, message });

    setTimeout(() => {
      setAlert({ show: false, type: "", message: "" });
    }, 30000);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    const sanitizedValue = DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });

    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!validateEmail(formData.client_email)) {
      showAlert("error", "Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.currentTarget, {
        publicKey: EMAILJS_USER_ID,
      })
      .then(
        (result) => {
          console.log("Success:", result.text);
          showAlert("success", "Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          showAlert("error", "Error sending message, please try again later");
        }
      );

    setFormData({
      client_name: "",
      client_email: "",
      client_message: "",
    });
  };

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
                className="contact_social reveal-up"
                key={key}
                href={social}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social_logo}
              </a>
            ))}
          </div>
        </div>

        <form
          className="contact_form"
          action=""
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="contact_name_and_email">
            <div className="contact_form_div">
              <label className="contact_label reveal-up" htmlFor="client_name">
                Name
              </label>

              <input
                id="client_name"
                className="contact_input reveal-up"
                type="text"
                name="client_name"
                autoComplete="name"
                required
                placeholder="e.g., John Doe"
                value={formData.client_name}
                onChange={handleChange}
              />
            </div>

            <div className="contact_form_div">
              <label className="contact_label reveal-up" htmlFor="client_email">
                Email
              </label>

              <input
                id="client_email"
                className="contact_input reveal-up"
                type="email"
                name="client_email"
                autoComplete="email"
                required
                placeholder="e.g., JohnDoe@gmail.com"
                value={formData.client_email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact_form_div">
            <label htmlFor="message" className="contact_label reveal-up">
              Message
            </label>

            <textarea
              id="message"
              className="contact_input contact_textarea reveal-up"
              name="client_message"
              placeholder="e.g., Hi! I would like to collaborate with you on a project."
              required
              value={formData.client_message}
              onChange={handleChange}
            ></textarea>
          </div>

          <label htmlFor="project_name" className="contact_hidden">
            Project Name
          </label>

          <input
            id="project_name"
            className="contact_hidden"
            type="text"
            name="project_name"
            required
            placeholder="Hrushi_Joshi_Portfolio_Website"
            value="Hrushi_Joshi_Portfolio_Website"
            readOnly
          />

          <button
            type="submit"
            className="contact_button contact_primary_button contact_form_submit_button reveal-up"
          >
            Submit
          </button>
        </form>

        {alert.show && (
          <div
            className={`alert ${
              alert.type === "success" ? "success" : "failure"
            }`}
          >
            {alert.message}
            <button
              onClick={() => setAlert({ ...alert, show: false })}
              className="alert_button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path
                  d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
