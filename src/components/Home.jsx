import React from "react";
import Hero from "../assets/hero.png";

export default function Home(props) {
  return (
    <header className="section sec1 header" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={Hero} alt="" />
          </div>
        </div>

        <div className="right-header">
          <div className="right-header_text">
            <h1 className="name">
              Hi, I'm <span>Choong YT.</span>
            </h1>
            <h2>A Web Developer</h2>
            <p>
              based in Selangor, Malaysia. Although I originally pursued a
              career in accounting, I have discovered a passion for web
              development and have spent the past 3 years honing my skills in
              HTML, CSS, Javascript, React and Django.
            </p>
            <div className="btn-con" onClick={props.handleClick}>
              <a href="#" className="main-btn">
                <span className="btn-text">Portfolio Page</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
