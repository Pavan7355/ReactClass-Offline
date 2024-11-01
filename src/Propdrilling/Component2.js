import React from 'react'
import Component3 from './Component3'

function Component2(props) {
  return (
    <div>
      <h1>Component2</h1>
      <Component3 data={props.data}/>
    </div>
  )
}

export default Component2
