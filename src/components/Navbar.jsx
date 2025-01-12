import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-indigo-600 text-white shadow-lg'>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
    {/* Logo */}
      <div className='text-2xl font-bold cursor-pointer' onClick={()=> navigate("/")}>
        🎥 MovieHub 
      </div>

      {/* Links for larger screens */}
      <ul className='hidden md:flex space-x-8'>
        <li>
          <a href="/" className='hover:text-indigo-300 transition-duration-200'>
            Home
          </a>
        </li>
        <li>
          <a href="/" className='hover:text-indigo-300 transition-duration-200'>
            Movies 
          </a>
        </li>
        <li>
          <a href="/" className='hover:text-indigo-300 transition-duration-200'>
            More
          </a>
        </li>
      </ul>

      {/* Hamburger menu for smaller screens */}
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
        <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            {
              isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ):(
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )
            }
            </svg>
        </button>
      </div>
    </div>
      
      {/* Mobile menu */}
      {isOpen &&(
        <div className='md:hidden bg-indigo-500'>
          <ul className='flex flex-col space-y-4 p-4'>
            <li>
              <a href="/" className='block hover:text-indigo-300 transition duration-200'>Home</a>
            </li>
            <li>
              <a href="/" className='block hover:text-indigo-300 transition duration-200'>Movies</a>
            </li>
            <li>
              <a href="#more" className='block hover:text-indigo-300 transition duration-200'>More</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
