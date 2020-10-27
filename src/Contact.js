import React, {useContext} from "react"
import Username from "./Username"

function Contact() {
  const user = useContext(Username)
  return (
    <h2>Kontakta {user}</h2>
  )
}

export default Contact
