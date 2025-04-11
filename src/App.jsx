import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Service from './components/services'
import Projects from './components/projects'
import Clients from './components/clients'
import Contacts from './components/contacts'
import Footer from './components/footer'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
// import './App.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="border-t-0 border-gray-300 my-0 mt-8"></div>
      <Service />
      <div className="-mt-8">
      <Projects />
      </div>
      <Clients />
      <Contacts />
      <Footer/>
    </div>
  )
}

export default App