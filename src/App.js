import React from "react"
import About from "./About"
import Contact from "./Contact"
import Username from "./Username"

function App() {
  return (
    <Username.Provider value="Mattias">
      <About />
      <Contact />
    </Username.Provider>
  )
}

export default App
