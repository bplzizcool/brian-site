import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import profile from '../../data/profile.json';

const getSocialIcon = (url) => {
    if (url.includes('github.com')) return <GitHubIcon />;
    if (url.includes('linkedin.com')) return <LinkedInIcon />;
    if (url.includes('twitter.com')) return <TwitterIcon />;
    return <GitHubIcon />;
};

const Contact = () => (
    <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Contact</Typography>
        <Typography variant="body1" gutterBottom>{profile.Email}</Typography>
        <Box>
            {profile.SocialMedias && profile.SocialMedias.map((url, idx) => (
                <IconButton key={idx} href={url} target="_blank" rel="noopener" color="primary" sx={{ mx: 1 }}>
                    {getSocialIcon(url)}
                </IconButton>
            ))}
        </Box>
    </Box>
);

export default Contact;
