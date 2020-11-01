import React, {useState, useEffect, useContext} from "react"
import styled from "styled-components"
import {TeamContext} from "./App"

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

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`

const Lian = styled.li`
  float: left;
  width: 100%;
  max-width: 250px;
  margin: 10px;
`

function PickPlayers() {

  const [dog, setDog] = useState("nodog.jpg")
  const [number, setNumber] = useState(0)
  const [team] = useContext(TeamContext)

  // On click Randomize dog
  function randomClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      setDog(data.message)
    })
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

  // List Dog Team
  const dogTeam = team.map((item) =>
    <Lian key={item}>
      <img src={item} height="150px"/>
    </Lian>)

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
      <br />
      <Ul>
        {dogTeam}
      </Ul>
    </>
  )
}

export default PickPlayers
