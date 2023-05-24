import React, { useEffect, useState } from "react";
// import FontChecker from "./FontChecker";

export default function Contact() {
  // const [firstName, setFirstName] = useState("");
  // const [subject, setSubject] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    subject: "",
    textarea: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.subject) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", subject: "", textarea: "" });
    }
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
            <form
              className="contact-form"
              action="contactform.php"
              method="post"
              onSubmit={handleSubmit}
            >
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
