import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import MyTeam from "./myTeamProvider"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <MyTeam.Provider value="Mattias">
      <App />
    </MyTeam.Provider>
  </BrowserRouter>,
  document.getElementById('root'))
