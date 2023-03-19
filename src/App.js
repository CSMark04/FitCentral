import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Box } from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m='auto'>
        <Navbar />
        <Routes>
          // path = URL, and the element is what is being rendered when taken to that URL
            <Route path="/" element ={<Home />} />
            <Route path="/exercise/:id" element ={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App
