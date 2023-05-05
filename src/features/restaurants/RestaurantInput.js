import React, { useState } from "react";

function RestaurantInput({ onSubmit }) {
  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(name)
    setName("")
  }

  return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        name
        <input 
        type="text"
        placeholder="name"
        value={name}
        onChange={handleChange}
        />
        <input
        type="submit"
        value="Add Restaurant"
        />
        </label>
      </form>
    </div>
  )
}

export default RestaurantInput;
