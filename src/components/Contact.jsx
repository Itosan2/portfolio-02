import React, { useEffect, useState } from "react";
// import FontChecker from "./FontChecker";

export default function Contact() {
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
            <h4>Contact me here</h4>
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
            <form action="" className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" required placeholder="YOUR NAME" />
                <input type="email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" required placeholder="ENTER SUBJECT" />
              </div>
              <div className="input-control">
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="6"
                  placeholder="Message Here..."
                ></textarea>
              </div>
              <div className="submit-btn">
                <a href="#" className="main-btn">
                  <span className="btn-text">Submit</span>
                  <span className="btn-icon">
                    <i className="fas fa-download"></i>
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
