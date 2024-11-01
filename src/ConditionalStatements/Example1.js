import React from 'react'

export default function Example1(props) {
  if(props.islogged){
    return (
    <>
    <h1>Welcome User</h1>
    <p>{props.username}</p>
    </>
    )
  }
  else{
    return(
    <><h1>Welcome guest</h1>
       <p>{props.username}</p>
    </>
    )
  }
}
