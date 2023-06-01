import React from "react";

const News = () => {
  return (
    <section>
      <h1 style={{ color: "white" }}>News from us blowing your stuff up!</h1>
      <img
        style={{ border: "5px solid black", margin: "25px" }}
        src={process.env.PUBLIC_URL + "news.jpg"}
        alt="crazy man trying to find aliens with a radio"
        width={"1000px"}
      />
      <h1 style={{ color: "white" }}>Alien 1 Humans 0</h1>
    </section>
  );
};

export default News;
