import React from 'react'

export default function Exxample3(props) {
  return (
    <div>
      {props.isloggedin && <h2>Welcome user</h2>}
      
    </div>
  )
}
