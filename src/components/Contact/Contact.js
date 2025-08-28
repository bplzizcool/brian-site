import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import profile from '../../data/profile.json';
import { styled } from '@mui/material/styles';

const StyledContactBox = styled(Box)({
    paddingTop: 32,
    paddingBottom: 32,
    textAlign: 'center',
});

const StyledIconButton = styled(IconButton)({
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
    transition: 'background 0.2s',
    '&:hover': {
        backgroundColor: '#1976d2',
        color: 'white',
    },
});

const StyledHeader = styled(Typography)({
    fontWeight: 700,
    color: 'white',
    letterSpacing: 1,
});

const StyledEmail = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
    fontSize: 18,
});

const getSocialIcon = (url) => {
    if (url.includes('github.com')) return <GitHubIcon />;
    if (url.includes('linkedin.com')) return <LinkedInIcon />;
    if (url.includes('twitter.com')) return <TwitterIcon />;
    return <GitHubIcon />;
};

const Contact = () => (
    <StyledContactBox>
        <StyledHeader variant="h4" gutterBottom>Contact</StyledHeader>
        <StyledEmail variant="body1" gutterBottom>{profile.Email}</StyledEmail>
        <Box>
            {profile.SocialMedias && profile.SocialMedias.map((url, idx) => (
                <StyledIconButton
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener"
                    color="primary"
                >
                    {getSocialIcon(url)}
                </StyledIconButton>
            ))}
        </Box>
    </StyledContactBox>
);

export default Contact;
