import React, { useState } from "react";
import Pagination from "./pagination/Pagination";

import img1 from "../assets/port1.jpg";
import img2 from "../assets/port2.jpg";
import img3 from "../assets/port3.jpg";
import img4 from "../assets/port4.jpg";
import img5 from "../assets/port5.jpg";
import img6 from "../assets/port6.jpg";
import img7 from "../assets/port7.jpg";
import img8 from "../assets/port8.jpg";
import img9 from "../assets/port9.jpg";
import img10 from "../assets/port10.jpg";
import img11 from "../assets/food.png";
import imgGym from "../assets/gym.png";
import imgPagination from "../assets/pagination.png";

const portItem = [
  {
    id: 9,
    img: img9,
    title: "Van-life - React Router-6",
    text: "A React project focusing on React Router v6.4. Using new features like createBrowserRouter, action, loader,Await,defer etc",
    url: "https://itosan2.github.io/van-life/",
  },
  {
    id: 7,
    img: img7,
    title: "e-Commerce",
    text: "React apps with Tailwind CSS. Using React Router and experiencing different way to deploy to Github",
    url: "https://itosan2.github.io/ecomm/",
  },
  {
    id: 12,
    img: imgGym,
    title: "Fitness Exercise App - Rapid Api",
    text: "Using Material-UI for user interface, fetch data from Rapid API and refactor Pagination component. Will deploy upon request",
    url: "https://github.com/Itosan2/gym",
  },
  {
    id: 13,
    img: imgPagination,
    title: "Pagination - fetching data from jsonplaceholder",
    text: "Paginate data from jsonplaceholder and making Pagination component reusable.",
    url: "https://itosan2.github.io/pagination/",
  },
  {
    id: 11,
    img: img11,
    title: "Food Webpage",
    text: "Using React Router 6 and working with images editing. Exploring with some Framer Motion animation ",
    url: "https://itosan2.github.io/food/",
  },
  {
    id: 8,
    img: img8,
    title: "Studybud Chatroom",
    text: "Django chatroom project. This a CRUD apps with login, logout and registration pages and search function. Here is the link to the codes.",
    url: "https://github.com/Itosan2/studybud",
  },
  {
    id: 10,
    img: img10,
    title: "Sudoku",
    text: "Credit to Mr.Tran Anh Tuat. Messing around with CSS",
    url: "https://itosan2.github.io/sudoku",
  },
  {
    id: 1,
    img: img1,
    title: "Building a neat-looking portfolio website",
    text: "Create a desktop and mobile version website from Adobe XD. Using some cold css styling with a bit of Javascript",
    url: "https://itosan2.github.io/portfolio/",
  },

  {
    id: 2,
    img: img2,
    title: "Relax with a game of Tenzies",
    text: "Tenzies game created using React. Replacing the die face with dots",
    url: "https://itosan2.github.io/tenzies",
  },
  {
    id: 3,
    img: img3,
    title: "AirBnB Experiences Clone",
    text: "Creating a Dynamic Image Gallery with React: Insights from Mr. Bob Ziroll's Expertise",
    url: "https://itosan2.github.io/abnb-tut",
  },
  {
    id: 4,
    img: img4,
    title: "Morning Night Toggle",
    text: "Toggle between morning and night mode changing the image and greeting text",
    url: "https://itosan2.github.io/morning/",
  },
  {
    id: 5,
    img: img5,
    title: "Tic Tac Toe migration",
    text: "Creating this base application before migrating to React with TypeScript.",
    url: "https://itosan2.github.io/tictactoe2/",
  },
  {
    id: 6,
    img: img6,
    title: "Meme Generation",
    text: "React apps fectching a random meme from api.imgflip.com",
    url: "https://itosan2.github.io/meme/",
  },
];

export default function Port() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  //Change Page
  // const paginate = (pageNumber) => {
  const paginate = () => {
    console.log("paginate", paginate);
    const element = document.getElementById("ports");
    if (element) {
      // setCurrentPage(pageNumber);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <section className="section sec4" id="ports">
      <div className="ports-content">
        <div className="main-title">
          <h2>
            My <span>Portfolio</span>
            {/* <span className="bg-text">Portfolio</span> */}
          </h2>
        </div>
        <p className="port-para">Here is a selection of my works</p>
        {/* <div className="ports"> */}
        <div className="">
          <Pagination
            data={portItem}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
          />

          {/* {portItem.map((item) => {
            return (
              <div key={item.id} className="port">
                <a href={item.url} target="_blank">
                  <img src={item.img} alt={item.title} />
                  <div className="port-text">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </a>
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
}
