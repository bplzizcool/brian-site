import React from 'react';
import { Typography, Grid, Card, CardContent, Box, Link } from '@mui/material';
import profile from '../../data/profile.json';
import moment from 'moment';
import { styled } from '@mui/material/styles';

const StyledExperienceBox = styled(Box)({
    paddingTop: 32,
    paddingBottom: 32,
});

const StyledExperienceCard = styled(Card)({
    background: 'rgba(255,255,255,0.08)',
    boxShadow: '0 4px 24px rgba(25, 118, 210, 0.12)',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.12)',
    padding: 8,
    transition: 'transform 0.2s',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 8px 32px rgba(25, 118, 210, 0.18)',
    },
});

const StyledHeader = styled(Typography)({
    fontWeight: 700,
    color: 'white',
    letterSpacing: 1,
});

const StyledCompany = styled(Typography)({
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
});

const StyledDescription = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
});

const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '16px !important',
});

const CompanyLogo = styled('img')({
    width: '100%',
    height: 'auto',
    maxHeight: 60,
    objectFit: 'contain',
    marginBottom: 16,
    backgroundColor: 'white',
    padding: '8px 16px',
    borderRadius: 8,
});

const RoleBox = styled(Box)({
    marginBottom: 16,
    '&:last-child': {
        marginBottom: 0,
    },
});

const RoleTitle = styled(Typography)({
    fontWeight: 600,
});

const DateText = styled(Typography)({
    color: 'rgba(255,255,255,0.6)',
});

const StyledLink = styled(Link)({
    width: '100%',
    textAlign: 'center',
    display: 'block',
});

const Experience = () => (
    <StyledExperienceBox>
        <StyledHeader variant="h4" gutterBottom>Experience</StyledHeader>
        <Grid container spacing={2}>
            {profile.experiences && profile.experiences.map(exp => (
                <Grid item xs={12} md={6} key={exp.companyName}>
                    <StyledExperienceCard>
                        <StyledCardContent>
                            <Box>
                                <StyledLink
                                    href={exp.url}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <CompanyLogo src={exp.logo} alt={exp.companyName} />
                                </StyledLink>
                                <StyledCompany variant="h6" gutterBottom>{exp.companyName}</StyledCompany>
                            </Box>
                            {exp.roles.map(role => (
                                <RoleBox key={role.title}>
                                    <RoleTitle variant="subtitle1" color="primary">{role.title}</RoleTitle>
                                    <DateText variant="body2">
                                        {moment(role.startDate).format('MMM YYYY')} - {role.currentJob ? 'Present' : moment(role.endDate).format('MMM YYYY')}
                                    </DateText>
                                    <StyledDescription variant="body2">{role.description}</StyledDescription>
                                </RoleBox>
                            ))}
                        </StyledCardContent>
                    </StyledExperienceCard>
                </Grid>
            ))}
        </Grid>
    </StyledExperienceBox>
);

export default Experience;
