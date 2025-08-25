import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import profile from '../../data/profile.json';

const Hero = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 6 }}>
    <Avatar src={require('../../img/profile_pic.jpg')} alt={profile.Name} sx={{ width: 120, height: 120, mb: 2 }} />
    <Typography variant="h2" component="h1" gutterBottom>{profile.Name}</Typography>
    <Typography variant="h5" color="text.secondary">{profile.Position}</Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>{profile.Description}</Typography>
  </Box>
);

export default Hero;
