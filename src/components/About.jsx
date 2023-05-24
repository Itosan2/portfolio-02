import React from "react";
import Home from "./Home";
import Port from "./Port";
// import FontChecker from "./FontChecker";

const statItem = [
  {
    id: 1,
    progTitle: "HTML5",
    progStat: "70",
  },
  {
    id: 2,
    progTitle: "CSS3",
    progStat: "60",
  },
  {
    id: 3,
    progTitle: "JAVASCRIPT",
    progStat: "55",
  },
  {
    id: 4,
    progTitle: "REACT JS",
    progStat: "45",
  },
  {
    id: 5,
    progTitle: "PYTHON",
    progStat: "20",
  },
  {
    id: 6,
    progTitle: "DJANGO",
    progStat: 30,
  },
];

const completeItem = [
  {
    id: 1,
    completeNo: 60,
    completeItem: "HTML5",
  },
  {
    id: 2,
    completeNo: 60,
    completeItem: "CSS5",
  },
  {
    id: 3,
    completeNo: 30,
    completeItem: "JAVASCRIPT",
  },
  {
    id: 1,
    completeNo: 20,
    completeItem: "REACT",
  },
];

export default function About(props) {
  return (
    <section className={`section sec2 about ${props.class}`} id="about">
      <div className="main-title">
        <h2>
          About<span> me</span>
          {/* <span className="bg-text">my stats</span> */}
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4 className="text-info2">Other Skills</h4>
          <p>
            Using Excel Visual Basic for Applocations to generate Financial
            Statement and reports (eg Balance Sheet, Income Statement, cash flow
            and Budget)
            <br />
            Other reports : Balanced Score-card, ISO Documentation Management
            sytem, Debtor collection and Inventory Management.
          </p>
          <div className="btn-con" onClick={props.handleClick}>
            <a href={<Port />} className="main-btn">
              <span className="btn-text">Portfolio Page</span>
              <span className="btn-icon">
                <i className="fas fa-user"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="right-about">
          {completeItem.map((item) => {
            return (
              <div key={item.id} className="about-item">
                <div className="abt-text">
                  <p className="large-text">{item.completeNo} + </p>
                  <p className="small-text">
                    {item.completeItem}
                    <br />
                    Completed tutorial / Projects
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          {statItem.map((item) => {
            return (
              <div key={item.id} className="progress-bar">
                <p className="prog-title">{item.progTitle}</p>
                <div className="progress-con">
                  <p className="prog-text">{item.progStat + "%"}</p>
                  <div className="progress">
                    <span
                      className="html"
                      style={{ width: item.progStat + "%" }}
                    ></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2010 - present</p>
          <h5>
            Web Developer<span> - Vircrosoft</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2008 - 2011</p>
          <h5>
            Software Engineer<span> - Boogle, Inc.</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2016 - 2017</p>
          <h5>
            C++ Programmer<span> - Slime Tech</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2009 - 2013</p>
          <h5>
            Business Degree<span> - Sussex University</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2013 - 2016</p>
          <h5>
            Computer Science Degree<span> - Brookes University</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2017 - present</p>
          <h5>
            3d Animation<span> - Brighton University</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
      </div> */}
    </section>
  );
}
