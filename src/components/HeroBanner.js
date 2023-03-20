import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import background from '../assets/images/background.jpg'
import Navbar from './Navbar'
const HeroBanner = () => {
  return (
    
    <section class="hero">
      <Navbar />
    <div class="hero-background"></div>
    <div class="hero-content">
      <h1 class="hero-title">all of your fitness needs in one place.</h1>
    </div>
  </section>
  
  )
}

export default HeroBanner