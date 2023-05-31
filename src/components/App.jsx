import './App.css'
import NavBar from './NavBar'
import Promoted from './Promoted'
import Popular from './Popular'
import Products from './Products'

function App() {

  return (
    <>
    <div>
      <h1 id={"title"}>Aᓭℸ ̣ ∷𝙹t∷ᔑ↸ᒷ🛸</h1>
    </div>
    <NavBar />
    <section id={'topPage'}>
      <Popular />
      <Promoted />
    </section>
    <Products />
    </>
  )
}

export default App
