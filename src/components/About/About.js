import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import profile from '../../data/profile.json';

const StyledAboutBox = styled(Box)({
    paddingTop: 32,
    paddingBottom: 32,
});

const StyledHeader = styled(Typography)({
    fontWeight: 700,
    color: 'white',
    letterSpacing: 1,
});

const StyledBody = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
    fontSize: 18,
});

const About = () => (
    <StyledAboutBox>
        <StyledHeader variant="h4" gutterBottom>About Me</StyledHeader>
        <StyledBody variant="body1">{profile.About}</StyledBody>
    </StyledAboutBox>
);

export default About;
