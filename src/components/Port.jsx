import React from "react";
import img1 from "../assets/port1.png";
import img2 from "../assets/port2.jpg";
import img3 from "../assets/port3.jpg";

const portItem = [
  {
    id: 1,
    img: img1,
    title: "How to Create Your Own Website",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?",
    url: "https://itosan2.github.io/portfolio/",
  },
  {
    id: 2,
    img: img2,
    title: "How to Create Your Own Website",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?",
    url: "#",
  },
  {
    id: 3,
    img: img3,
    title: "How to Create Your Own Website",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?",
    url: "#",
  },
  {
    id: 4,
    img: img1,
    title: "How to Create Your Own Website",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus natus voluptas, eos obcaecati recusandae amet?",
    url: "#",
  },
];

export default function Port() {
  return (
    <section className="section sec4" id="blogs">
      <div className="blogs-content">
        <div className="main-title">
          <h2>
            My <span>Portfolio</span>
            <span className="bg-text">Portfolio</span>
          </h2>
        </div>
        <p className="port-text">Here is a selection of my works</p>
        <div className="blogs">
          {portItem.map((item) => {
            return (
              <div key={item.id} className="blog">
                <a href={item.url} target="_blank">
                  <img src={item.img} alt="image 1" />
                  <div className="blog-text">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
