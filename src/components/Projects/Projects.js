import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import profile from '../../data/profile.json';
import { styled } from '@mui/material/styles';

const StyledProjectsBox = styled(Box)({
    paddingTop: 32,
    paddingBottom: 32,
});

const StyledProjectCard = styled(Card)({
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

const StyledProjectName = styled(Typography)({
    fontWeight: 600,
    color: 'white',
});

const StyledProjectButton = styled(Button)({
    fontWeight: 600,
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
});

const Projects = () => (
    <StyledProjectsBox>
        <StyledHeader variant="h4" gutterBottom>Projects</StyledHeader>
        <Grid container spacing={2}>
            {profile.Projects && profile.Projects.map(project => (
                <Grid item xs={12} md={6} key={project.Name}>
                    <StyledProjectCard>
                        <CardContent>
                            <StyledProjectName variant="h6">{project.Name}</StyledProjectName>
                            <Typography variant="body2" color="text.secondary">{project.Description}</Typography>
                        </CardContent>
                        <CardActions>
                            <StyledProjectButton
                                size="small"
                                color="primary"
                                href={project.ProjectLink}
                                target="_blank"
                            >
                                View Project
                            </StyledProjectButton>
                        </CardActions>
                    </StyledProjectCard>
                </Grid>
            ))}
        </Grid>
    </StyledProjectsBox>
);

export default Projects;
