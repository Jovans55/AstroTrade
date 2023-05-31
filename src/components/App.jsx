import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from './NavBar'
import Home from "./navElements/Home";
import News from "./navElements/News";
import Contact from "./navElements/Contact";

function App() {

  return (
    <Router>
      <div> 
        <h1 id={"title"}>Aᓭℸ ̣ ∷𝙹t∷ᔑ↸ᒷ🛸</h1>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
