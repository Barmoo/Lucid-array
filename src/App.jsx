import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Service from './components/services'
import Projects from './components/projects'
import Clients from './components/clients'
import Contacts from './components/contacts'
import Footer from './components/footer'
import Image from './components/image'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
// import './App.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="border-t-0 border-gray-300 my-0 mt-"></div>
      <Image/>
      {/* <div className="h-[500px] bg-white"></div> */}
      <Service />
      <div className="">
      <Projects />
      </div>
      <Clients />
      <Contacts />
      <Footer/>

    </div>
  )
}

export default App