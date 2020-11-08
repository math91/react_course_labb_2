import React, {useState, useReducer} from "react"

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      return state
  }
}

function Play() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function handleClick() {
    const you = state.count + 2
    const opponent = state.count
    document.getElementById('playGame').innerHTML =
    "Congratz! You won " + you + " - " + opponent + " against Cats Bollklubb."
  }

  function increment() {
    dispatch({type: "increment"})
  }

  function decrement() {
    dispatch({type: "decrement"})
  }

  return (
    <>
      <h1>Play</h1>
      <div id="playGame">
        <h2>How many goals do you want your opponent to do?</h2>
        <p>{state.count} goals</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <br /><br />
        <button onClick={handleClick}>Play Game!</button>
      </div>
    </>
  )
}

export default Play
