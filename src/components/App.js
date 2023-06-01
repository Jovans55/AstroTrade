import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import Tilt from "react-parallax-tilt";
import NavBar from "./NavBar";
import Home from "./navElements/Home";
import News from "./navElements/News";
import Contact from "./navElements/Contact";

function App() {
  return (
    <Router>
      <div>
        <Tilt style={{ scale: "1.3" }}>
          <h1 id={"title"}>Aᓭℸ ̣ ∷𝙹t∷ᔑ↸ᒷ🛸</h1>
        </Tilt>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
