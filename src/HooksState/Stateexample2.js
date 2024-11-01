import React from 'react'
import { useState } from 'react'
function Stateexample2() {
    const[count,setcount]=useState(0)
    let increment=()=>{
     setcount(prev=>prev+1)
    }
    let decrement=()=>{
   setcount(prev=>prev-1)
    }
    let reset=()=>{
       setcount(0)
    }
  return (
    <div>
      <h1>Count value is {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Stateexample2
