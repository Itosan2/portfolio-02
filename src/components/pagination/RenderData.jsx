import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const RenderData = ({ currentItems }) => {
  //   const [data, setData] = useState([]);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [itemsPerPage, setItemsPerPage] = useState(5);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json())
  //       .then((json) => setData(json));
  //   }, []);

  console.log("currentItems", currentItems);
  return (
    <div className="ports">
      {/* <ul style={{ listStyleType: "none" }}> */}
      {currentItems.map((item, index) => {
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
      })}
      {/* </ul> */}
    </div>
  );
};

export default RenderData;
