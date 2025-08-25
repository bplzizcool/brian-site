import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import profile from '../../data/profile.json';

const Projects = () => (
  <Box sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>Projects</Typography>
    <Grid container spacing={2}>
      {profile.Projects && profile.Projects.map(project => (
        <Grid item xs={12} md={6} key={project.Name}>
          <Card>
            <CardContent>
              <Typography variant="h6">{project.Name}</Typography>
              <Typography variant="body2" color="text.secondary">{project.Description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href={project.ProjectLink} target="_blank">View Project</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
