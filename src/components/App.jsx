import './App.css'
import Search from './Search'
import Promoted from './Promoted'

function App() {

  return (
    <>
    <div>
      <h1 id={"title"}>Aᓭℸ ̣ ∷𝙹t∷ᔑ↸ᒷ🛸</h1>
    </div>
    <nav id={"navBar"}>
      <div id={'tabs'}>
        <a>H𝙹ᒲᒷ</a>
        <a>Nᒷ∴ᓭ</a>
        <a>C𝙹リℸ ̣ ᔑᓵℸ ̣</a>
      </div>
      <Search />
      <div id={'cart'}>
        <a><img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" height={"25px"} width={"25px"} /></a>
      </div>
    </nav>
    <Promoted />
    </>
  )
}

export default App
