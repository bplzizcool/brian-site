import React from 'react';
import { Typography, Box, Chip, Grid } from '@mui/material';
import profile from '../../data/profile.json';
import { styled } from '@mui/material/styles';

const StyledSkillsBox = styled(Box)({
    paddingTop: 32,
    paddingBottom: 32,
});

const StyledSkillCard = styled(Box)({
    background: 'rgba(255,255,255,0.08)',
    boxShadow: '0 2px 12px rgba(25, 118, 210, 0.10)',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.10)',
    padding: 16,
    marginBottom: 16,
});

const StyledTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: 'white',
    letterSpacing: 1,
    marginBottom: theme.spacing(1),
}));

const StyledChipContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
}));

const StyledAreaTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    color: 'white',
    fontWeight: 600,
}));

const StyledHotChip = styled(Chip)(({ theme }) => ({
    fontWeight: 500,
    fontSize: 15,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1 / 2),
    paddingBottom: theme.spacing(1 / 2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
}));

const StyledNormalChip = styled(Chip)(({ theme }) => ({
    fontWeight: 500,
    fontSize: 15,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1 / 2),
    paddingBottom: theme.spacing(1 / 2),
    backgroundColor: 'rgba(255,255,255,0.12)',
    color: 'rgba(255,255,255,0.85)',
}));

const Skills = () => (
    <StyledSkillsBox>
        <StyledTitle variant="h4" gutterBottom>Skills</StyledTitle>
        <Grid container spacing={2}>
            {profile.Skills && profile.Skills.map(skill => (
                <Grid item xs={12} md={6} key={skill.Area}>
                    <StyledSkillCard>
                        <StyledAreaTitle variant="h6">{skill.Area}</StyledAreaTitle>
                        <StyledChipContainer>
                            {skill.SkillSet.map(s => (
                                s.Hot ? (
                                    <StyledHotChip
                                        label={s.Name}
                                        key={s.Name}
                                    />
                                ) : (
                                    <StyledNormalChip
                                        label={s.Name}
                                        key={s.Name}
                                    />
                                )
                            ))}
                        </StyledChipContainer>
                    </StyledSkillCard>
                </Grid>
            ))}
        </Grid>
    </StyledSkillsBox>
);

export default Skills;
