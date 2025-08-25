import React from 'react';
import { Typography, Grid, Card, CardContent, Box, Link, Avatar } from '@mui/material';
import profile from '../../data/profile.json';
import moment from 'moment';

const Experience = () => (
  <Box sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>Experience</Typography>
    <Grid container spacing={2}>
      {profile.experiences && profile.experiences.map(exp => (
        <Grid item xs={12} md={6} key={exp.companyName}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Link href={exp.url} target="_blank" rel="noopener">
                  <Avatar src={exp.logo} alt={exp.companyName} sx={{ width: 48, height: 48, mr: 2 }} />
                </Link>
                <Typography variant="h6">{exp.companyName}</Typography>
              </Box>
              {exp.roles.map(role => (
                <Box key={role.title} mb={2}>
                  <Typography variant="subtitle1" fontWeight={600}>{role.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {moment(role.startDate).format('MMM YYYY')} - {role.currentJob ? 'Present' : moment(role.endDate).format('MMM YYYY')}
                  </Typography>
                  <Typography variant="body2">{role.description}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Experience;
