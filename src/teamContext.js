import React, {useState, useContext} from "react"

const TeamContext = React.createContext(null)

export function TeamProvider(props) {
  const [team, setTeam] = useState([])

  return <TeamContext.Provider value={{team, setTeam}}>{props.children}</TeamContext.Provider>
}

export function useTeam() {
  const context = useContext(TeamContext)
  return context
}
