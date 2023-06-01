import React, { useEffect, useState } from "react";
import "./Card.css";

const Popular = () => {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const popularProducts = backendData.filter((product) => product.popular);

  console.log(popularProducts);

  return (
    <section id={"popular"}>
      {popularProducts.map((product) => (
        <>
          <div class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <p class="title">FRONT SIDE</p>
                <p>Hover Me</p>
              </div>
              <div class="backSide">
                <p class="title">BACK SIDE</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
          <div class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <p class="title">FRONT SIDE</p>
                <p>Hover Me</p>
              </div>
              <div class="backSide">
                <p class="title">BACK SIDE</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </section>
  );
};

export default Popular;
