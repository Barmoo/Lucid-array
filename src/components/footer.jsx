import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import Logo from '../assets/images/logo-lucid.png'

const footer = () => {
  return (
    <div className=' w-full z-10 bg-gradient-to-r bg-[#081A44] py-8 px-4 shadow-lg'>
        <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
        <div className='flex flex-col items-start text-white'>
          <div className='flex items-center'>
            <div className='logo p-2 mb-2'>
              <img src={Logo}  alt="" className='h-8 w-8'/>
            </div>
            <p className='ml-2 text-xl font-bold'>Lucid Array</p>
          </div>
          <p className='text-gray-300 text-sm mt-2'>Innovative solutions for your digital needs</p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className='flex flex-col md:flex-row gap-6'>
          <ul className='flex flex-col md:flex-row gap-6 text-white'>
            <li className='hover:text-blue-300 cursor-pointer transition-colors'>Services</li>
            <li className='hover:text-blue-300 cursor-pointer transition-colors'>Clients</li>
            <li className='hover:text-blue-300 cursor-pointer transition-colors'>Projects</li>
            <li className='border-0 px-4 py-1 rounded-md bg-blue-400 hover:bg-blue-500 transition-colors cursor-pointer'>Contact</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-4 text-white'>
          <a href="#" className='hover:text-blue-400 transition-colors'><FaFacebook size={24} /></a>
          <a href="#" className='hover:text-blue-400 transition-colors'><FaTwitter size={24} /></a>
          <a href="#" className='hover:text-blue-400 transition-colors'><FaInstagram size={24} /></a>
          <a href="#" className='hover:text-blue-400 transition-colors'><FaLinkedin size={24} /></a>
          <a href="#" className='hover:text-blue-400 transition-colors'><FaGithub size={24} /></a>
        </div>
        </div>
        
        <div className='mt-6 pt-4 border-t border-blue-800 text-center text-gray-400 text-sm'>
          <p>© {new Date().getFullYear()} Lucid Array. All rights reserved.</p>
        </div>
        </div>
    </div>
  )
}

export default footer