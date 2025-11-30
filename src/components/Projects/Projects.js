import React from 'react';
import { Grid, CardContent, CardActions, Button } from '@mui/material';
import profile from '../../data/profile.json';
import { styled } from '@mui/material/styles';
import { StyledHeader, StyledBox } from '../Shared/StyledComponents';
import StyledCard from '../Shared/StyledCard';
import { StyledProjectName } from '../Shared/StyledTypography';

const StyledDescription = styled('div')({
    color: 'rgba(255,255,255,0.85)',
    marginBottom: 16,
    flex: 1,
});

const TechChip = styled('div')({
    display: 'inline-block',
    padding: '4px 8px',
    margin: '0 4px 4px 0',
    borderRadius: 12,
    fontSize: '0.75rem',
    backgroundColor: 'rgba(25, 118, 210, 0.15)',
    color: 'rgba(255,255,255,0.9)',
    border: '1px solid rgba(25, 118, 210, 0.3)',
});

const TechContainer = styled('div')({
    marginBottom: 16,
});

const StyledProjectButton = styled(Button)({
    fontWeight: 600,
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
});

const Projects = () => (
    <StyledBox>
        <StyledHeader variant="h4">Projects</StyledHeader>
        <Grid container spacing={3}>
            {profile.Projects && profile.Projects.map(project => (
                <Grid item xs={12} key={project.Name}>
                    <StyledCard>
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
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    </StyledBox>
);

export default Projects;
