import React, { useState } from "react";
import img1 from "../assets/port1.jpg";
import img2 from "../assets/port2.jpg";
import img3 from "../assets/port3.jpg";
// import FontChecker from "./FontChecker";

const portfolioItem = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img1 },
];

export default function Portfolio() {
  return (
    <section className="section sec3 portfolio" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Sample</span>
          <span className="bg-text">My Sample</span>
        </h2>
      </div>
      <div className="p port-text">This just a sample page</div>
      <div className="portfolios">
        {portfolioItem.map((item) => {
          return (
            <div key={item.id} className="portfolio-item">
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

{
  /* <div className="main-title">
        <h2>
          My <span>Portfolio</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      <div className="p port-text">
        Here is some of my work that I've don in various programming languagues.
      </div> */
}

{
  /* <div className="portfolio-item">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div> */
}
