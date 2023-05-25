import React, { useEffect, useState, useRef, useReducer } from "react";
import Modal from "./Modal";
import emailjs from "@emailjs/browser";

// import FontChecker from "./FontChecker";

export default function Contact() {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    subject: "",
    textarea: "",
  });
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer);
  const form = useRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.subject) {
      setShowModal(true);
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", subject: "", textarea: "" });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s51ubmp",
        "template_vwcpwuo",
        form.current,
        "2Kjc8FwC3TsYytFAb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="section sec5 contact" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            {/* <span className="bg-text">Contact</span> */}
          </h2>
        </div>

        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact Information</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              laborum numquam? Quam excepturi perspiciatis quas quasi.
            </p>
            <div className="contact-info">
              <div className="contact-item2">
                <i className="fas fa-map-marker-alt"></i>
                <span>Location</span>
                <p>Malaysia, Selangor</p>
              </div>

              <div className="contact-item2">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
                <p>
                  <span>
                    <a href="ytchoong.dev@gmail.com">ytchoong.dev@gmail.com</a>
                  </span>
                </p>
              </div>
              <div className="contact-item2">
                <i className="fas fa-user-graduate"></i>
                <span>Education</span>
                <p>
                  <span>CIMA, KDU</span>
                </p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a href="www.facebook.com" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="right-contact">
            {showModal && <Modal />}

            <form className="contact-form" onSubmit={handleSubmit} ref={form}>
              <h2>Message Me</h2>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  id="firstName"
                  name="firstName"
                  value={person.firstName}
                  onChange={handleChange}
                  placeholder=""
                />
                <span>Your Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  required
                  placeholder=""
                  id="email"
                  name="email"
                  value={person.email}
                  onChange={handleChange}
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input
                  className="inputBox"
                  type="text"
                  required
                  id="subject"
                  name="subject"
                  value={person.subject}
                  onChange={handleChange}
                />
                <span>Subject</span>
              </div>
              <div className="inputBox">
                <textarea
                  className="inputBox"
                  required
                  type="textarea"
                  name="textarea"
                  id="textarea"
                  value={person.textarea}
                  onChange={handleChange}
                  cols="15"
                  rows="4"
                ></textarea>
                <span>Message</span>
              </div>
              <button type="submit" className="submit-btn">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
