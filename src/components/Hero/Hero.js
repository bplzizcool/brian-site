import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import profile from '../../data/profile.json';

const StyledHeroBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 48,
});

const StyledAvatar = styled(Avatar)({
    width: 120,
    height: 120,
    marginBottom: 16,
    border: '4px solid #1976d2',
    boxShadow: '0 4px 24px rgba(25, 118, 210, 0.2)',
    background: 'white',
});

const StyledName = styled(Typography)({
    fontWeight: 700,
    letterSpacing: 1,
    color: 'white',
    textShadow: '0 2px 8px rgba(0,0,0,0.12)',
});

const StyledPosition = styled(Typography)({
    fontWeight: 500,
});

const StyledDescription = styled(Typography)({
    marginTop: 16,
    color: 'rgba(255,255,255,0.85)',
});


const Hero = () => (
    <StyledHeroBox>
        <StyledAvatar src={require('../../img/profile_pic.jpg')} alt={profile.Name} />
        <StyledName variant="h2" component="h1" gutterBottom>{profile.Name}</StyledName>
        <StyledPosition variant="h5" color="primary">{profile.Position}</StyledPosition>
        <StyledDescription variant="body1">{profile.Description}</StyledDescription>
    </StyledHeroBox>
);

export default Hero;
