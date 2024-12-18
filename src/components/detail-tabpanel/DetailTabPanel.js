import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import ExperiencePanel from '../experience-panel/ExperiencePanel';
import SkillPanel from '../skill-panel/SkillPanel';
import EducationPanel from '../education-panel/EducationPanel';
import ProjectTabPanel from '../project-tabpanel/ProjectTabPanel';
import styles from './DetailTabPanel.module.css';

const DetailTabPanel = ({ theme }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={styles.tabPanelRoot}>
            <AppBar position="fixed" className={styles.appBar}>
                <Tabs value={value} variant="fullWidth" onChange={handleChange} className={styles.tabPanelContainer}>
                    <Tab className={styles.tabPanelText} label="My Experience" />
                    <Tab className={styles.tabPanelText} label="My Skills" />
                    <Tab className={styles.tabPanelText} label="My Education" />
                    <Tab className={styles.tabPanelText} label="My Personal Projects" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                animateHeight
                className={styles.tabContainer}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <ExperiencePanel dir={theme.direction} />
                <SkillPanel dir={theme.direction} />
                <EducationPanel dir={theme.direction} />
                <ProjectTabPanel dir={theme.direction} />
            </SwipeableViews>
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(DetailTabPanel);