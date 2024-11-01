import React, { useState } from 'react';
import './Signup.css';

function Signup(){

  return (
    <>
    <div className='Signup-heading'>
    <h1>Signup Page</h1>
</div>
    <div className="signup-container">
      <h2>Signup</h2>
      <form >
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
       name="username" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
        name="password"
            required 
          />
        </div>
        <button className="btn" type="submit">Signup</button>
      </form>
      <div style={{textAlign:"center",marginTop: "10px"}}>
    <a href="login.html">Already have an account? Login here</a>
  </div>
    </div>
    </>
  );
};

export default Signup;
