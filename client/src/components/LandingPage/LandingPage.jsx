import React from 'react'
import Navbar1 from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import RidesAttract from '../Ride_Attract/RideAttract'
import Event from '../Event/Event'

const LandingPage = () => {
  return (
    <>
      <Navbar1 />
      <Hero />
      <Services showNavbar={false} showFooter ={false}/>
      <RidesAttract showNavbar={false} showFooter={false}/>
      <Event showNavbar={false} showFooter={false}/>
      <Contact showNavbar={false}/>
      <Footer/>
    </>
  )
}

export default LandingPage
