import React from 'react'
import { useState } from 'react'

function StateExample5() {
    const[state,setstate]=useState({fname:"Viart",city:"Mumbai",age:36})
  let updateDetails=()=>{
    setstate({...state,fname:"sachin",age:45})
  }
    return (
    <div style={{textAlign:"center",margin:"50px auto"}}>
       <h1>My name is {state.fname}</h1>
      <h3>I am from {state.city}</h3>
      <h5>I am  {state.age} years old</h5>
      <button onClick={updateDetails}>UpdateDetails</button>
    </div>
  )
}

export default StateExample5
