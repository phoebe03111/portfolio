import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import contactImg from "../../assets/contact.svg";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Let's connect!</h2>

      <div className="contact__content">
        {/* info */}
        <div className="contact__info">
          <img src={contactImg} alt="contact" className="contact__img" />
          <div className="contact__social">
            <p>You can also find me here:</p>
            <ul className="contact__icons">
              <a
                href="https://www.linkedin.com/in/phoebe--chang/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <AiFillLinkedin size={40} />
                </li>
              </a>
              <a
                href="https://github.com/phoebe03111"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <AiFillGithub size={40} />
                </li>
              </a>
              <a
                href="mailto:phoebe03111@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <MdEmail size={40} />
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/* form */}
        <form className="contact__form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="message"
            rows={5}
            required
          />
          <button className="contact__button">
            Send <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
