import React, {useState, createContext} from "react"
import Header from "./Header"
import Main from "./Main"

export const TeamContext = createContext(null)

function App() {
  const [team, setTeam] = useState("test")
  return (
    <TeamContext.Provider value={team}>
      <Header />
      <Main />
    </TeamContext.Provider>
  )
}

export default App
