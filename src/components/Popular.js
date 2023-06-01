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
      <h1 id="popularTitle">P𝙹!¡⚍ꖎᔑ∷ ⭐</h1>
      <section className="cardHolder">
        {popularProducts.map((product) => (
          <div key={product.id} class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <img
                  src={process.env.PUBLIC_URL + product.imageUrl}
                  alt=""
                  width={"125px"}
                  style={{ border: "3px solid black", borderRadius: "20px" }}
                />
                <p class="title">{product.name}</p>
                <p>₹{product.price}</p>
              </div>
              <div class="backSide">
                <p class="title">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Popular;
