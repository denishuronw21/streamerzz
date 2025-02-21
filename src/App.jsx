import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import KeyFeatures from './components/KeyFeatures'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  

  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <KeyFeatures/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}

export default App
