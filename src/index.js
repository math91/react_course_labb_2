import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import {TeamProvider} from "./teamContext"

ReactDOM.render(
  <BrowserRouter>
    <TeamProvider>
      <App />
    </TeamProvider>
  </BrowserRouter>,
  document.getElementById('root'))


// https://app.pluralsight.com/course-player?clipId=1182019f-393d-4ced-95d9-74922cff9b25
