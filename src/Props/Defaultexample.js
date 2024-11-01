import React from 'react'
export default function Defaultexample(props) {
  return (
    <div>
      <h1>Hello, {props.name} !</h1>
    </div>
  )
}
Defaultexample.defaultProps={
    name:"Stranger"
}