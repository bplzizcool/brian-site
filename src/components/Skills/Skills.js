import React from 'react';
import { Typography, Box, Chip, Grid } from '@mui/material';
import profile from '../../data/profile.json';

const Skills = () => (
    <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <Grid container spacing={2}>
            {profile.Skills && profile.Skills.map(skill => (
                <Grid item xs={12} md={6} key={skill.Area}>
                    <Typography variant="h6" sx={{ mb: 1 }}>{skill.Area}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {skill.SkillSet.map(s => (
                            <Chip label={s.Name} color={s.Hot ? 'primary' : 'default'} key={s.Name} />
                        ))}
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default Skills;
