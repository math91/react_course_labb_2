import React, {useState} from "react"

function PickPlayers() {

  const [dog, setDog] = useState("")

  function handleClick() {
    setDog(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => console.log(data))
      return data
      }
      )
  }

  return (
    <>
      <h1>Pick Players</h1>
      <button onClick={handleClick}>
        Randomize dog
      </button>
    </>
  )
}

export default PickPlayers
