import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function Counter() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
   console.log("component mounted")
   document.title=`count is ${count}`
   return ()=>{
    console.log("component umounted")
   }
    },[count])
    let increment=()=>{
setCount(prev=>prev+1)
    }
   let dercement=()=>{
setCount(prev=>prev-1)
    }
    let reset=()=>{
        setCount(0)
    }
  return (
    <div>
        <center>
      <h1>Count is :{count}</h1>
      <button onClick={increment}>increment</button>&nbsp;&nbsp;
       <button onClick={dercement}>decrement</button>&nbsp;&nbsp;
       <button onClick={reset}>Reset</button>
       </center>
    </div>
  )
}

export default Counter
