import React from 'react';
import { StyledAreaTitle } from '../Shared/StyledTypography';
import { StyledBox } from '../Shared/StyledComponents';
import profile from '../../data/profile.json';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledBody = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
    fontSize: 18,
});

const About = () => (
    <StyledBox>
        <StyledAreaTitle variant="h4" gutterBottom>About Me</StyledAreaTitle>
        <StyledBody variant="body1">{profile.About}</StyledBody>
    </StyledBox>
);

export default About;
