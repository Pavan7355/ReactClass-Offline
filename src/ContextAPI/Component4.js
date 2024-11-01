import React, { useContext } from 'react'
import { contextData } from './Component1'

function Component4() {
      const data=useContext(contextData)
  return (
    <div>
      <h1>Component 4</h1>
      <p>{data[0]}</p>
      <img src={data[1]}/>
    </div>
  )
}

export default Component4
