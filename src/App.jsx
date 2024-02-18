import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Mobile from './components/Mobile'
import Steps from './components/Steps'
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Card/>
      <Steps/>
      <Mobile/>
      <Footer/>
    </>
  )
}

export default App
