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

function Lineup() {
  const {team, setTeam} = useTeam()

  // List Dog Team
  const dogTeam = team.map((item) =>
    <Li key={item}>
      <img src={item} height="150px"/>
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
