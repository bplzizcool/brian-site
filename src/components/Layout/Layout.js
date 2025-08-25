import React from 'react';
import { Container, Box } from '@mui/material';

const Layout = ({ children }) => (
  <Container maxWidth="lg">
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {children}
    </Box>
  </Container>
);

export default Layout;
