import React from "react"
import About from "./About"
import Contact from "./Contact"
import Username from "./Username"
import {Link, Switch, Route} from "react-router-dom"
import styled from "styled-components"


function App() {

  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      border: 2px solid Violet;
    }
  `;

  return (
    <Username.Provider value="Kalle">
      <Link to="/">Home</Link>
      <Link to="/contact">Kontakta</Link>

      <Button>Click me</Button>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

    </Username.Provider>
  )
}

export default App
