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

  return <section id={"products"}>Products</section>;
};

export default Products;
