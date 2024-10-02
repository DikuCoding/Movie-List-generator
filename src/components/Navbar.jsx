import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
    <ul className='nav-links'>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/">Movies</a>
        </li>
        <li>  
            <a href="#more">More</a>
        </li>
    </ul>
    </div>
  )
}

export default Navbar
