import React from 'react'
import Component4 from './Component4'

function Component3(props) {
  return (
    <div>
      <h1>Component 3</h1>
      <Component4 data={props.data}/>
    </div>
  )
}

export default Component3
