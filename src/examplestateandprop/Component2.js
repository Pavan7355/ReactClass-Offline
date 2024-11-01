import React from 'react'

export default function Component2({content}) {
  return (
    <div>
      <h1>this is functional component</h1>
      <h2>This is the data received form
        the component1 {content}
      </h2>
    </div>
  )
}
