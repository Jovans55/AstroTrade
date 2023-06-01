import React from "react";
import Promoted from "../Promoted";
import Popular from "../Popular";
import Products from "../Products";

const Home = () => {
  return (
    <div>
      <section id={"topPage"}>
        <Popular />
        <Promoted />
      </section>
      <Products />
    </div>
  );
};

export default Home;
