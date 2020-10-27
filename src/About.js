import React from "react"
import Username from "./Username"

function About() {
  const user = React.useContext(Username)
  return (
    <h1>Hello {user} eller? cool!</h1>
  )
}

export default About
