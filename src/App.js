import React, {useState} from "react"
import Header from "./Header"
import Main from "./Main"
import {TeamContext} from "./teamContext"

function App() {
  const [team, setTeam] = useState([])
  return (
    <>
    <TeamContext.Provider value={{team, setTeam}}>
      <Header />
      <Main />
    </TeamContext.Provider>
    </>
  )
}

export default App
