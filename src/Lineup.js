import React from "react"
import {useTeam} from "./teamContext"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`

const Li = styled.li`
  float: left;
  width: 100%;
  max-width: 250px;
  margin: 10px;
`

const Button = styled.button`
  background-color: lightblue;
`

function Lineup() {
  const {team} = useTeam()

  // List Dog Team
  const dogTeam = team.map((item) =>
    <Li key={item}>
      <img src={item} height="150px"/>
      <Button>Give extra speed</Button>
    </Li>)

  return(
    <>
      <Ul>
        {dogTeam}
      </Ul>
    </>
  )
}

export default Lineup
