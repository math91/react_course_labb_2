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
  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(true)
    setTimeout(function(){
      setLoading(false)
      const you = state.count + 2
      const opponent = state.count
      document.getElementById('playGame').innerHTML =
      "Congratz! You won " + you + " - " + opponent + " against Cats Bollklubb."
  }, 3000);
}

  function increment() {
    dispatch({type: "increment"})
  }

  function decrement() {
    if (state.count < 1) {
      alert("Must be at least 0")
    } else {
      dispatch({type: "decrement"})
    }
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
        <p>{loading ? "Playing game..." : "Waiting for game to start..."}</p>
      </div>
    </>
  )
}

export default Play
