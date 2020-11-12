import React, {useState, useMemo} from "react"
import styled from "styled-components"

const Ground = styled.div`
  max-width: 120px;
  padding: 120px 50px;
  text-align: center;
  color: white;
`

function Arena() {
  const [ground, setGround] = useState(false)
  const [totalPeople, setTotalPeople] = useState(0)
  const [value, setValue] = useState(0)

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleClick() {
    setGround((item) => {
      if (ground === true) {
        item = false
      } else {
        item = true
      }
    return item;
  })
}

  const doubleNumber = useMemo(() => {
    return double(value)
  }, [value])


  function double(num) {
    console.log("Calling function")
      return num * 2
  }

  return (
    <>
      <h2>Arena</h2>
      <label>Audience:</label> <br />
      <input
        type="number"
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <p><button onClick={handleClick}>Change ground</button></p>
      <Ground style={{ backgroundColor: ground ? 'orange' : 'green' }}><h2>{ground ? 'sand' : 'grass' }</h2></Ground>
      <h2>Good to Know</h2>
      <p>You need to buy at least {doubleNumber} hot dogs</p>
    </>
  )
}

export default Arena
