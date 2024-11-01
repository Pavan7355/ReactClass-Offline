import React from 'react'

export default function ExamplePro(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.onClick}>Click</button>
    </div>
  )
}
