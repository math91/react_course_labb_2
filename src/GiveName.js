import React, {useState} from "react"

function GiveName() {
  const [name, setName] = useState("")

  function handleChange(event) {
    setName(event.target.value)
    console.log(name)
  }

  return (
    <>
      <label>Give your team a name: </label>
      <input
        type="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
    </>
  )
}

export default GiveName
