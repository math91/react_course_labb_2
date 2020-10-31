import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Theme from "./themeProvider"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Theme.Provider value="Mattias">
      <App />
    </Theme.Provider>
  </BrowserRouter>,
  document.getElementById('root'))
