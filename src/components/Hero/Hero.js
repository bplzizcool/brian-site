import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import profile from '../../data/profile.json';

const StyledHeroBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    borderRadius: theme.spacing(2),
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 140,
    height: 140,
    marginBottom: theme.spacing(2),
    boxShadow: '0 4px 24px rgba(25, 118, 210, 0.3)',
}));

const StyledName = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    letterSpacing: 1.5,
    color: 'white',
    textShadow: '0 4px 12px rgba(0,0,0,0.3)',
    marginBottom: theme.spacing(1),
}));

const StyledPosition = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    color: theme.palette.primary.light,
    marginBottom: theme.spacing(2),
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    color: 'rgba(255,255,255,0.9)',
    fontSize: 18,
    textAlign: 'center',
}));

const StyledDetails = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
    color: 'rgba(255,255,255,0.85)',
    fontSize: 16,
}));

const StyledDetailsContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    textAlign: 'center',
}));

const Hero = () => (
    <StyledHeroBox>
        <StyledAvatar src={require('../../img/profile_pic.jpg')} alt={profile.Name} />
        <StyledName variant="h2" component="h1" gutterBottom>{profile.Name}</StyledName>
        <StyledPosition variant="h5">{profile.Position}</StyledPosition>
        <StyledDescription variant="body1">{profile.Description}</StyledDescription>
        <StyledDetailsContainer>
            <StyledDetails>{profile.Company}</StyledDetails>
            <StyledDetails>{profile.School}</StyledDetails>
            <StyledDetails>{profile.Address}</StyledDetails>
        </StyledDetailsContainer>
    </StyledHeroBox>
);

export default Hero;
