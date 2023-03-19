import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/icons/blackLogo.svg'

const Navbar = () => {
  return (
    <Stack // Stack containing all nav elements. Also has css to adjust based on screen sizes
    direction='row'
    justifyContent='space-between'
    sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} px='20px'>
      <Link to='/'> 
        <img src={Logo} alt='logo' style= {{width: '70%', height: '70%', margin:'0 20px'}} //Link to logo
        /> 
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontSize='24px'
      alignItems='flex-end'>
        <Link to='/' style={{textDecoration: 'none', color:'#3A1212', borderBottom:'3px solid #FF2625'}}>Home</Link>
        <a href='#exercises' style={{textDecoration: 'none', color:'#3A1212'}}>Exercises</a>

      </Stack>
    </Stack>
  )
}

export default Navbar