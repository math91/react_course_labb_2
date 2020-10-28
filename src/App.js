import React from "react"
import About from "./About"
import Contact from "./Contact"
import Username from "./Username"
import {Link} from "react-router-dom"

function App() {
  return (
    <Username.Provider value="Kalle">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <About />
      <Contact />
    </Username.Provider>
  )
}

export default App
