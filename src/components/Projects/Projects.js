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
    <StyledBox role="region" aria-labelledby="projects-heading">
        <StyledHeader variant="h4" component="h2" id="projects-heading">Projects</StyledHeader>
        <Grid
            container
            spacing={3}
            role="list"
            aria-label="Portfolio projects"
        >
            {profile.Projects && profile.Projects.map((project, index) => (
                <Grid
                    size={12}
                    key={project.Name}
                    role="listitem"
                >
                    <StyledCard
                        aria-labelledby={`project-name-${index}`}
                        aria-describedby={`project-desc-${index}`}
                    >
                        <CardContent>
                            <StyledProjectName
                                variant="h6"
                                id={`project-name-${index}`}
                            >
                                {project.Name}
                            </StyledProjectName>
                            <StyledDescription
                                variant="body2"
                                id={`project-desc-${index}`}
                            >
                                {project.Description}
                            </StyledDescription>
                            {project.Technologies && (
                                <TechContainer
                                    role="list"
                                    aria-label={`Technologies used in ${project.Name}`}
                                >
                                    {project.Technologies.map((tech, idx) => (
                                        <div
                                            key={idx}
                                            role="listitem"
                                            style={{ display: 'inline-block' }}
                                        >
                                            <TechChip aria-label={`Technology: ${tech}`}>
                                                {tech}
                                            </TechChip>
                                        </div>
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
                                rel="noopener noreferrer"
                                variant="contained"
                                aria-label={`View source code for ${project.Name} project`}
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
