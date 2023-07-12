import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import contactImg from "../../assets/contact.svg";
import Form from "../Form/Form";
import "./Contact.scss";
import pdf from '../../assets/Resume_Phoebe-Chang.pdf'

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
                  <AiFillLinkedin size={35} />
                </li>
              </a>
              <a
                href="https://github.com/phoebe03111"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <AiFillGithub size={35} />
                </li>
              </a>
              <a
                href="mailto:phoebe03111@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <MdEmail size={35} />
                </li>
              </a>
              <a
                href={pdf}
                className="contact__resume"
                download
              >
                <li>
                  <BsFileEarmarkText size={30} />
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/* form */}
        <Form />
      </div>
    </section>
  );
};

export default Contact;
