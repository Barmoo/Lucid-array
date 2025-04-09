import React from 'react'
// import "./navbar.css"

const navbar = () => {
  return (
    <div className='h-12 bg-blue-950 flex flex-row justify-between items-center px-4'>
      {/* Left Section: Logo and Title */}
      <div className='flex flex-row items-center text-white'>
        <div className='logo'>
          <img src="" alt="" className='logo'/>
        </div>
        <p className='ml-2'>Lucid Array</p>
      </div>

      {/* Right Section: Navigation Links */}
      <div>
        <ul className='flex flex-row gap-9 text-white'>
          <li>Services</li>
          <li>Clients</li>
          <li>Projects</li>
          <li className='border-0 px-4 py-0.5 rounded-md bg-blue-400'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default navbar