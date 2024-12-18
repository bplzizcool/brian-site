import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import profile from '../../data/profile';
import StarIcon from '@material-ui/icons/Star';
import styles from './SkillPanel.module.css';

const SkillPanel = () => {
    return (
        <div className={styles.skillPanel}>
            {profile.Skills.map((skill) => (
                <Accordion key={skill.Area} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">{skill.Area}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.skillPanelDetail}>
                        {skill.SkillSet.map((skillDetail) => (
                            <Chip
                                icon={skillDetail.Hot ? <StarIcon /> : null}
                                label={skillDetail.Name}
                                className={styles.skillChip}
                                color="primary"
                                key={skillDetail.Name}
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default SkillPanel;