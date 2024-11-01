import React from 'react'
import { useState } from 'react'
function StateExample7() {
          const[formdata,setformdata]=useState({
            username:'',
            phone:'',
            email:'',
            password:'',
            confirmpassword:''
          })
         const[passwordError,setpasswordError]=useState(false)
         const[FormFields,setFormFields]=useState(false)
         const[Submit,setSubmit]=useState(false)
         const handleChange=(event)=>{
            const name=event.target.name
           const value=event.target.value
setformdata({...formdata,[name]:value})
          }
          const submitform=(e)=>{
e.preventDefault()
if(formdata.password !== formdata.confirmpassword){
 setpasswordError(true)
}
else if(formdata.name ==='' || formdata.phone ===''||
    formdata.email ===''|| formdata.password ===''||
    formdata.confirmpassword ==='')
{
   setFormFields(true)
}
else{
setSubmit(true)
 console.log("Name is ",formdata.username)
console.log("Phone Number is ",formdata.phone)
console.log("Email is ",formdata.email)
console.log("Password is ",formdata.password)
console.log("Confirm Password is ",formdata.confirmpassword)  
}
          }
  return (
    <div>
        <h2>Welcome to employee registration page</h2>
        <div className='form-control'>
            <form onSubmit={submitform}>
                <div>
                    <label>Name</label><br></br>
                    <input type='text' className='input'
                    name="username"
                    value={formdata.username}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Phone</label><br></br>
                    <input type='tel' className='input'
                    name="phone"
                    value={formdata.phone}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Email</label><br></br>
                    <input type='email' className='input'
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Password</label><br></br>
                    <input type='password' className='input'
                    name="password"
                    value={formdata.password}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Confirm Password</label><br></br>
                    <input type='password' className='input'
                    name="confirmpassword"
                    value={formdata.confirmpassword}
                    onChange={handleChange}/>
                </div>
                <br></br>
{passwordError&&<p style={{color:"red",fontSize:"larger"}}>
    *Password doesn't match*</p>}
 {FormFields&& <p style={{color:"red",fontSize:"larger"}}>
    *Please Fill All the FIelds*</p>}
 {Submit?<p style={{color:"green",fontSize:"larger"}}>
    *Form Submitted Successfully*</p>:<p></p>}
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default StateExample7
