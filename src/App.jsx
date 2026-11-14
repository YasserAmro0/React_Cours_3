import { useState, useRef } from "react"
const App = () => {
  const Reff = useRef(null)

  const handleClickFocus = () => {
    Reff.current.focus()
  }

  return (
    <>
      <input ref={Reff} type="text" placeholder="type anythings" />
      <button onClick={handleClickFocus}>CLick Hello </button>
    </>

  )
}


export default App;