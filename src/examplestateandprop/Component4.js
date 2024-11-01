import React from 'react'

export default function Component4({count,increment,decrement}) {
  return (
    <div>
      <h2>Current Value: {count}</h2>
      <button onClick={increment}>Increment Count</button>
      <button onClick={decrement}>Decrement Count</button>
    </div>
  )
}
