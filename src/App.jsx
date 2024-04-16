/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <FeaturedProjects/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App