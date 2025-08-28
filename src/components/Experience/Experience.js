import React from 'react';
import { Typography, Grid, Card, CardContent, Box, Link, Avatar } from '@mui/material';
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
    marginLeft: 8,
});

const StyledDescription = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
});

const HeaderRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
});

const StyledAvatar = styled(Avatar)({
    width: 48,
    height: 48,
    marginRight: 16,
    backgroundColor: 'white',
    border: '2px solid #1976d2',
});

const RoleBox = styled(Box)({
    marginBottom: 16,
});

const RoleTitle = styled(Typography)({
    fontWeight: 600,
});

const DateText = styled(Typography)({
    color: 'rgba(255,255,255,0.6)',
});

const Experience = () => (
    <StyledExperienceBox>
        <StyledHeader variant="h4" gutterBottom>Experience</StyledHeader>
        <Grid container spacing={2}>
            {profile.experiences && profile.experiences.map(exp => (
                <Grid item xs={12} md={6} key={exp.companyName}>
                    <StyledExperienceCard>
                        <CardContent>
                            <HeaderRow>
                                <Link href={exp.url} target="_blank" rel="noopener">
                                    <StyledAvatar src={exp.logo} alt={exp.companyName} />
                                </Link>
                                <StyledCompany variant="h6">{exp.companyName}</StyledCompany>
                            </HeaderRow>
                            {exp.roles.map(role => (
                                <RoleBox key={role.title}>
                                    <RoleTitle variant="subtitle1" color="primary">{role.title}</RoleTitle>
                                    <DateText variant="body2">
                                        {moment(role.startDate).format('MMM YYYY')} - {role.currentJob ? 'Present' : moment(role.endDate).format('MMM YYYY')}
                                    </DateText>
                                    <StyledDescription variant="body2">{role.description}</StyledDescription>
                                </RoleBox>
                            ))}
                        </CardContent>
                    </StyledExperienceCard>
                </Grid>
            ))}
        </Grid>
    </StyledExperienceBox>
);

export default Experience;
