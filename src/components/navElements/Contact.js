import React from "react";

const Contact = () => {
  return (
    <section
      style={{
        border: "5px solid rgba(0, 0, 0, 0.517)",
        borderTop: "none",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
      }}
    >
      <h1 style={{ color: "white", marginTop: "0px" }}>How to contact us!</h1>
      <img
        style={{ border: "5px solid black", margin: "25px" }}
        src={process.env.PUBLIC_URL + "contact.jpg"}
        alt="crazy man trying to find aliens with a radio"
        width={"1000px"}
      />
      <h1 style={{ color: "white" }}>
        Stare up at the sky and wait for a while, we'll pop up eventually
      </h1>
    </section>
  );
};

export default Contact;
