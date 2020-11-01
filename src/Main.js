import React from "react"
import PickPlayers from "./PickPlayers"
import Team from "./Team"
import Play from "./Play"
import {Switch, Route} from "react-router-dom"

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <PickPlayers />
      </Route>
      <Route path="/team">
        {/* <Team /> */}
      </Route>
      <Route path="/play">
        <Play />
      </Route>
    </Switch>
  )
}

export default Main
