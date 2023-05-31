import Search from "./Search"

const NavBar = () => {
    return (
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
    )
}

export default NavBar