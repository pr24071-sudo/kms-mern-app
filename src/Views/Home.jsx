import React from 'react'
import Hero from '../components/Hero'
import Client from '../components/Client'
import About from "../Views/About"
import Services from '../components/Services'
import Features from '../components/Features'
import Faq from "../components/Faq"
import Pricing from "../components/Pricing"
import Contact from "../Views/Contact"


const Home = () => {
  return (
    <>
    <Hero/>
    <Client/>
    <About/>
    <Services/>
    <Features/>
    
    <Pricing/>
    <Faq/>
    <Contact/>
  
    </>
  )
}

export default Home