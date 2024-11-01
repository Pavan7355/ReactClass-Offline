
//handling the froms in react
import React from 'react'
import { useState } from 'react'
function StateExample6() {
     const[username,setUsername]=useState('')
     const[password,setpassword]=useState('')
    let handlecheck=(event)=>{
event.preventDefault()
console.log("UserName is ",username)
console.log("Password is ",password)
alert("Logged in successfully")
window.location.reload()
    }
  return (
    <div style={{boxShadow:"0px 0px 10px black",
        width:"400px",padding:"10px",margin:"50px auto",
        textAlign:"center"
    }}>
      <form>
        <label>Username</label>
        <input type='text' name="username"
        placeholder='Enter User name'
       value={username}
       onChange={(e)=>setUsername(e.target.value)}
        ></input>
        <br></br><br></br>
        <label>Password</label>
        <input type='password' name='password'
       value={password}
       onChange={(e)=>setpassword(e.target.value)}
        placeholder='Enter password'
        ></input>
        <br></br><br></br>
        <button onClick={handlecheck}>Submit</button>
      </form>
    </div>
  )
}

export default StateExample6
