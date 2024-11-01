import React from 'react'
import './Nav.css'
import Home from './Home'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div>
        <div className='heading'>
<h1>React Router Example</h1>
        </div>
      <nav>
        <Link class='nav-items' to="/">Home</Link>
        <Link class='nav-items' to="/about">About</Link>
        <Link class='nav-items' to="/profile">Profile</Link>
        <Link class='nav-items' to="/login">Login</Link>
        <Link class='nav-items' href="/signup">Signup</Link>
        </nav>
        <div>
            <Home/>
        </div>
    </div>
  )
}

export default Nav
