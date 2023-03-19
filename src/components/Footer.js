import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/icons/blackLogo.svg';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF" borderTop='solid 2px red'>
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Mark wuz Hir</Typography>
  </Box>
);

export default Footer;