import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaFacebookF,
  FaGithub,
  //   FaDribble,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
   if (  inp1.current.value !== "" & inp2.current.value !== ""&
   inp3.current.value !== "") {emailjs
      .sendForm(
        "service_krwi48f",
        "template_cp3rx08",
        form.current,
        "7Wj7ooA-48DDi3C4U"
      )
      .then(
        (result) => {
          console.log(result.text);
          inp1.current.value = "";
          inp2.current.value = "";
          inp3.current.value = "";
          inp4.current.value = "";
        },
        (error) => {
          console.log(error.text);
          inp1.current.value = ""; inp2.current.value = "";
          inp3.current.value = "";
          inp4.current.value = "";

        }
      );}
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section_title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact_container container grid">
          <div className="contact_data">
            <h3 className="contact_title">Don't be Shy:!</h3>

            <p className="contact_description">
              Feel free to contact with me ; I am always open to discussing new
              projects, creative ideas or opportunities tb be part of your
              visions.
            </p>

            <div className="contact_info">
              <div className="info_item">
                <FaEnvelopeOpen className="info_icon" />
                <div>
                  <span className="info_title">Mail me</span>
                  <h4 className="info_desc">almohamd@gmail.com</h4>
                </div>
              </div>

              <div className="info_item">
                <FaPhoneSquareAlt className="info_icon" />
                <div>
                  <span className="info_title">Call me</span>
                  <h4 className="info_desc">+963 940-373-898</h4>
                </div>
              </div>
            </div>

            <div className="contact_socials">
              <a
                rel='noreferrer'
                target="_blank"
                href="http://www.linkedin.com/in/mohamd-almahmod-1b08a825b"
                className="contact_social-link"
              >
                <FaLinkedin />
              </a>
              <a
              rel='noreferrer'
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100019122930479&mibextid=ZbWKwL"
                className="contact_social-link"
              >
                <FaFacebookF />
              </a>

              <a
              rel='noreferrer'
                target="_blank"
                href="https://github.com/almohamd668"
                className="contact_social-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="form_input-group">
              <div className="form_input-div">
                <input
                 ref={inp1}
                  type="text"
                  placeholder="Your Name"
                  className="form_control"
                  name="user_name"
                />
              </div>
               
           

              <div className="form_input-div">
                <input
                  ref={inp2}
                  type="email"
                  placeholder="Your Email"
                  className="form_control"
                  name="user_email"
                />
              </div>

              <div className="form_input-div">
                <input
                ref={inp3}
                  type="text"
                  placeholder="Your subject"
                  className="form_control"
                  name="user_sub"
                />
              </div>
            </div>
            <div className="form_input-div">
              <textarea
              ref={inp4}
                placeholder="Your Message"
                className="form_control textarea"
                name="message"
              ></textarea>
            </div>

            <button type="submit" className="button">
              Send Message
              <span className="button_icon contact_button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
