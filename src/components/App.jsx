import './App.css'
import NavBar from './NavBar'
import Promoted from './Promoted'
import Popular from './Popular'

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
    </>
  )
}

export default App
