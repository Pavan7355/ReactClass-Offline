//how to add object values in useState and how access inside 
//jsx and update new value in jsx
import React from 'react'
import { useState } from 'react'
function StateExample4() {
  const[name,setname]=useState({fname:"Virat"})
  let updatename=()=>{
    setname({fname:"sachin"})
  }
  return (
    <div style={{textAlign:"center",margin:"50px auto"}}>
      <h1>My name is {name.fname}</h1>
      <h3>I am from Mumbai</h3>
      <button onClick={updatename}>UpdateName</button>
    </div>
  )
}

export default StateExample4
