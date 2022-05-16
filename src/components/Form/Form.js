import React from "react";
import { FiSend } from "react-icons/fi";
import "./Form.scss";

const Form = () => {
  return (
    <form
      className="contact__form"
      name="contact-form"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <input type="text" name="name" id="name" placeholder="your name" required />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your email"
        required
      />
      <textarea
        type="text"
        name="message"
        id="message"
        placeholder="your message"
        rows={5}
        required
      />
      <button type="submit" className="contact__button">
        Send <FiSend />
      </button>
    </form>
  );
};

export default Form;
