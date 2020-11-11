import React, {useState} from "react"
import styled from "styled-components"

const Ground = styled.div`
  max-width: 120px;
  padding: 120px 50px;
  text-align: center;
  color: white;
`

function Arena() {
  const [ground, setGround] = useState(false)
  const [people, setPeople] = useState(0)

  function handleClick() {
    setGround(() => {
      
    })
  }

  return (
    <>
      <h2>Arena</h2>
      <label>Audience:</label> <br />
      <input type="number" />
      <p><button onClick={handleClick}>Change ground</button></p>
      <Ground style={{ backgroundColor: ground ? 'orange' : 'green' }}><h2>{people}</h2></Ground>
    </>
  )
}

export default Arena

// https://www.youtube.com/watch?v=THL1OPn72vo&ab_channel=WebDevSimplified
