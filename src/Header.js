import React, {useContext} from "react"
import Theme from "./themeProvider"
import {Link} from "react-router-dom"

function Header() {
  const theme = useContext(Theme)
  return (
    <>
      <h1>Create your Dog Soccer Team</h1>
      <nav>
        <Link to="/">Pick Players</Link>
        <br />
        <Link to="/team">Your Team</Link>
        <br />
        <Link to="/play">Lets play!</Link>
      </nav>
    </>
  )
}

export default Header
