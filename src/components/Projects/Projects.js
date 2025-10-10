import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import profile from '../../data/profile.json';
import { styled } from '@mui/material/styles';

const StyledProjectsBox = styled(Box)({
    paddingTop: 32,
    paddingBottom: 32,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const StyledProjectCard = styled(Card)({
    background: 'rgba(255,255,255,0.08)',
    boxShadow: '0 4px 24px rgba(25, 118, 210, 0.12)',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.12)',
    padding: 8,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 8px 32px rgba(25, 118, 210, 0.18)',
    },
});

const StyledHeader = styled(Typography)({
    fontWeight: 700,
    color: 'white',
    letterSpacing: 1,
    textAlign: 'center',
    width: '100%',
    marginBottom: 24,
});

const StyledProjectName = styled(Typography)({
    fontWeight: 700,
    color: 'white',
    marginBottom: 8,
});

const StyledDescription = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
    marginBottom: 16,
    flex: 1,
});

const TechChip = styled(Box)({
    display: 'inline-block',
    padding: '4px 8px',
    margin: '0 4px 4px 0',
    borderRadius: 12,
    fontSize: '0.75rem',
    backgroundColor: 'rgba(25, 118, 210, 0.15)',
    color: 'rgba(255,255,255,0.9)',
    border: '1px solid rgba(25, 118, 210, 0.3)',
});

const TechContainer = styled(Box)({
    marginBottom: 16,
});

const StyledProjectButton = styled(Button)({
    fontWeight: 600,
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
});

const Projects = () => (
    <StyledProjectsBox>
        <StyledHeader variant="h4">Projects</StyledHeader>
        <Grid container spacing={3} sx={{ width: '100%' }}>
            {profile.Projects && profile.Projects.map(project => (
                <Grid item xs={12} key={project.Name}>
                    <StyledProjectCard>
                        <CardContent>
                            <StyledProjectName variant="h6">{project.Name}</StyledProjectName>
                            <StyledDescription variant="body2">{project.Description}</StyledDescription>
                            {project.Technologies && (
                                <TechContainer>
                                    {project.Technologies.map((tech, index) => (
                                        <TechChip key={index}>{tech}</TechChip>
                                    ))}
                                </TechContainer>
                            )}
                        </CardContent>
                        <CardActions>
                            <StyledProjectButton
                                size="small"
                                color="primary"
                                href={project.ProjectLink}
                                target="_blank"
                                variant="contained"
                            >
                                View Source
                            </StyledProjectButton>
                        </CardActions>
                    </StyledProjectCard>
                </Grid>
            ))}
        </Grid>
    </StyledProjectsBox>
);

export default Projects;
