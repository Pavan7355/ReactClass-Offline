import React, { useState } from 'react'
import Component2 from './Component2'

function Component1() {
    const[data,setData]=useState("Data to be passed to component4")
  return (
    <div>
      <h1>Component 1</h1>
      <p>{data}</p>
      <Component2 data={data}/>
    </div>
  )
}

export default Component1
