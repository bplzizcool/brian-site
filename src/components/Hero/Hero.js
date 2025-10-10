import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import profile from '../../data/profile.json';

const StyledHeroBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '80vh',
    width: '100%',
    maxWidth: '100%',
    padding: theme.spacing(12, 4),
    background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    borderRadius: theme.spacing(2),
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
        pointerEvents: 'none'
    }
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 180,
    height: 180,
    marginBottom: theme.spacing(4),
    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.4)',
    border: '4px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 12px 40px rgba(25, 118, 210, 0.6)',
    }
}));

const StyledName = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    letterSpacing: 2,
    color: 'white',
    textShadow: '0 4px 12px rgba(0,0,0,0.4)',
    marginBottom: theme.spacing(2),
    fontSize: '3.5rem',
    padding: theme.spacing(0, 2),
    textAlign: 'center',
    backgroundImage: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'fadeIn 0.8s ease-out',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem'
    }
}));

const StyledPosition = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: theme.palette.primary.light,
    marginBottom: theme.spacing(3),
    fontSize: '1.8rem',
    letterSpacing: 1,
    opacity: 0.9,
    animation: 'slideUp 0.6s ease-out',
    '@keyframes slideUp': {
        from: {
            transform: 'translateY(20px)',
            opacity: 0
        },
        to: {
            transform: 'translateY(0)',
            opacity: 0.9
        }
    }
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
    color: 'rgba(255,255,255,0.9)',
    fontSize: 20,
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    padding: theme.spacing(0, 2),
    lineHeight: 1.6,
    animation: 'fadeIn 1s ease-out',
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    }
}));

const StyledDetails = styled(Typography)(({ theme }) => ({
    color: 'rgba(255,255,255,0.85)',
    fontSize: 16,
    margin: theme.spacing(0.5),
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(4),
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'rgba(255,255,255,0.15)',
        transform: 'translateY(-2px)'
    }
}));

const StyledDetailsContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    alignItems: 'center',
    animation: 'slideUp 0.8s ease-out',
    animationDelay: '0.2s',
    animationFillMode: 'backwards'
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
