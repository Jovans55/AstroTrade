import React, { useEffect, useState } from "react";

const Products = () => {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  console.log("products", backendData);

  return (
    <section id={"products"}>
      <h1 id="popularTitle">Aꖎꖎ !¡∷𝙹↸⚍ᓵℸ ̣ ᓭ 📦</h1>
      <section className="cardHolder">
        {backendData.map((product) => (
          <div key={product.id} class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <img
                  src={process.env.PUBLIC_URL + "/images/gun1.jpg"}
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

export default Products;
