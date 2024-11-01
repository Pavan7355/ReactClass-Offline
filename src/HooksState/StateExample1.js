import React from 'react'
import { useState } from 'react'
function StateExample1() {
    let[state,setState]=useState("Welcome to react js class")
  
    return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setState("thank you for attending")}>
        Click here</button>
    </div>
  )
}

export default StateExample1
