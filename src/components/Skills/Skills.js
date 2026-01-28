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
    <StyledSkillsBox role="region" aria-labelledby="skills-heading">
        <StyledHeader variant="h4" component="h2" gutterBottom id="skills-heading">Skills</StyledHeader>
        <Grid
            container
            spacing={2}
            role="list"
            aria-label="Technical skills by category"
        >
            {profile.Skills && profile.Skills.map(skill => (
                <Grid
                    container
                    size={6}
                    key={skill.Area}
                    role="listitem"
                >
                    <StyledCard
                        aria-labelledby={`skill-area-${skill.Area}`}
                        aria-describedby={`skill-list-${skill.Area}`}
                    >
                        <StyledAreaTitle variant="h6" id={`skill-area-${skill.Area}`}>
                            {skill.Area}
                        </StyledAreaTitle>
                        <StyledChipContainer
                            role="list"
                            id={`skill-list-${skill.Area}`}
                            aria-label={`${skill.Area} skills`}
                        >
                            {skill.SkillSet.map(s => (
                                <div key={s.Name} role="listitem">
                                    <TechChip
                                        label={s.Name}
                                        hot={s.Hot ? "true" : "false"}
                                        aria-label={`${s.Name}${s.Hot ? ', highly experienced' : ''}`}
                                    />
                                </div>
                            ))}
                        </StyledChipContainer>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    </StyledSkillsBox>
);

export default Skills;
