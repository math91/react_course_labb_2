import React from "react"

function Play() {

  function handleClick() {
    document.getElementById('playGame').innerHTML =
    "Congratz! You won 5-1 against Cats Bollklubb."
  }

  return (
    <>
      <h1>Play</h1>
      <div id="playGame">
        <button onClick={handleClick}>Play Game!</button>
      </div>
    </>
  )
}

export default Play
