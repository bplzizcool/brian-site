import React from 'react';
import { Typography, Box } from '@mui/material';
import profile from '../../data/profile.json';

const About = () => (
    <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1">{profile.About}</Typography>
    </Box>
);

export default About;
