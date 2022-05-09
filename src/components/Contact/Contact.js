import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Let's connect!</h2>

      <div className="contact__content">
        {/* info */}
        <div className="contact__info">
          <p>You can also find me here:</p>
          <ul className="contact__social">
            <a href="https://www.linkedin.com/in/phoebe--chang/" alt="linkedin">
              <li>
                <AiFillLinkedin size={40} />
              </li>
            </a>
            <a href="https://github.com/phoebe03111" alt="github">
              <li>
                <AiFillGithub size={40} />
              </li>
            </a>
            <a href="mailto:phoebe03111@gmail.com">
              <li>
                <AiOutlineMail size={40} />
              </li>
            </a>
          </ul>
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
