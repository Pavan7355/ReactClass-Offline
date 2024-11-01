import React from 'react'

export default function Example2(props) {
 const welcomeMsg=<h2>Welcome User thank you for login</h2>

 const loginMsg=<h2>Please log in</h2>

 return (props.isloggedin?welcomeMsg:loginMsg)
}
