import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Service from './components/services'
import Projects from './components/projects'
import Clients from './components/clients'
// import './App.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className="mt-70 border-t-4 border-blue-500 my-8"> */}
      <Service />
      {/* </div> */}
      <Projects />
      {/* <div className="border-t border-blue-500 my-8"></div> */}
      <Clients />
    </div>
  )
}

export default App