import React from 'react';
import { Grid, Link } from '@mui/material';
import profile from '../../data/profile.json';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import { StyledHeader, StyledBox } from '../Shared/StyledComponents';
import StyledCard from '../Shared/StyledCard';
import { StyledCompany } from '../Shared/StyledTypography';

const StyledExperienceCard = styled(StyledCard)({
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

const StyledDescription = styled('div')({
    color: 'rgba(255,255,255,0.85)',
});

const StyledCardContent = styled('div')({
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

const RoleBox = styled('div')({
    marginBottom: 16,
    '&:last-child': {
        marginBottom: 0,
    },
});

const RoleTitle = styled('div')({
    fontWeight: 600,
});

const DateText = styled('div')({
    color: 'rgba(255,255,255,0.6)',
});

const StyledLink = styled(Link)({
    width: '100%',
    textAlign: 'center',
    display: 'block',
});

const Experience = () => (
    <StyledBox>
        <StyledHeader variant="h4" gutterBottom>Experience</StyledHeader>
        <Grid container spacing={2}>
            {profile.experiences && profile.experiences.map(exp => (
                <Grid item xs={12} md={6} key={exp.companyName}>
                    <StyledExperienceCard>
                        <StyledCardContent>
                            <div>
                                <StyledLink
                                    href={exp.url}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <CompanyLogo src={exp.logo} alt={exp.companyName} />
                                </StyledLink>
                                <StyledCompany variant="h6" gutterBottom>{exp.companyName}</StyledCompany>
                            </div>
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
    </StyledBox>
);

export default Experience;
