import React from 'react';
import { Grid } from '@mui/material';
import profile from '../../data/profile.json';
import { styled } from '@mui/material/styles';
import { StyledHeader, StyledBox } from '../Shared/StyledComponents';
import StyledCard from '../Shared/StyledCard';
import { StyledChipContainer } from '../Shared/StyledChip';
import { TechChip } from '../Shared/StyledChip';

const StyledSkillsBox = styled(StyledBox)({
    paddingTop: 32,
    paddingBottom: 32,
});

const StyledAreaTitle = styled(StyledHeader)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    color: 'white',
    fontWeight: 600,
}));

const Skills = () => (
    <StyledSkillsBox>
        <StyledHeader variant="h4" gutterBottom>Skills</StyledHeader>
        <Grid container spacing={2}>
            {profile.Skills && profile.Skills.map(skill => (
                <Grid item xs={12} md={6} key={skill.Area}>
                    <StyledCard>
                        <StyledAreaTitle variant="h6">{skill.Area}</StyledAreaTitle>
                        <StyledChipContainer>
                            {skill.SkillSet.map(s => s.Hot ? (
                                <TechChip
                                    label={s.Name}
                                    key={s.Name}
                                    hot
                                />
                            ) : (
                                <TechChip
                                    label={s.Name}
                                    key={s.Name}
                                />
                            ))}
                        </StyledChipContainer>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    </StyledSkillsBox>
);

export default Skills;
