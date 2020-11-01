import React, {useState, useEffect, createContext} from "react"
import Team from "./Team"
import styled from "styled-components"
export const TeamContext = createContext(null)

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  padding: 0.25em 1em;
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: black;
    border: 2px solid black;
  }
`;

function PickPlayers() {

  const [dog, setDog] = useState("nodog.jpg")
  const [number, setNumber] = useState(0)
  const [team, setTeam] = useState(["notinh"])

  // On click Randomize dog
  function randomClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      setDog(data.message)
    })
    console.log(team)
  }

  // Load Dog on start
  useEffect(() => {
    randomClick()
  }, [])

  // On click Add Dog
  function addClick() {
    setTeam(team.concat(dog))
    setNumber(prevNum => prevNum + 1)
    randomClick()
  }

  return (
    <>
      <h1>Pick Players</h1>
      <p>You have {number} players in your team</p>
      <Button
        onClick={randomClick}
      >
        Randomize dog
      </Button>
      <p>
        <img
          src={dog}
          height="200px"
        />
      </p>
      <Button
        onClick={addClick}
      >
        Add Dog to Team
      </Button>

    <TeamContext.Provider value={team}>
      <Team />
    </TeamContext.Provider>

  </>
  )
}

export default PickPlayers
