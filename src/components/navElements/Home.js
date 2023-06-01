import React from "react";
import Promoted from "../Promoted";
import Popular from "../Popular";
import Products from "../Products";

const Home = () => {
  return (
    <div
      style={{
        border: "5px solid rgba(0, 0, 0, 0.517)",
        borderTop: "none",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
      }}
    >
      <section id={"topPage"}>
        <Popular />
        <Promoted />
      </section>
      <Products />
    </div>
  );
};

export default Home;
