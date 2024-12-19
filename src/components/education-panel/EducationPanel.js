import React from 'react';
import { Typography, Grid, ButtonBase, Card, CardContent, Divider, Accordion, AccordionSummary, AccordionDetails, Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profile from '../../data/profile';
import styles from './EducationPanel.module.css';

const EducationPanel = () => {
    const handleSchoolLinkClick = (url) => {
        window.open(url);
    };

    return (
        <Box className={styles.educationPanel} overflow="auto" height="100%">
            <Grid container justifyContent="center" alignItems="center" spacing={4}>
                {profile.Education.map((education) => (
                    <Grid item xs={12} sm={9} key={education.SchoolName}>
                        <Card className={styles.card}>
                            <div className={styles.cardDetails}>
                                <CardContent>
                                    <Grid container spacing={4}>
                                        <Grid item xs={8}>
                                            <Typography component="h2" variant="h5">
                                                {education.SchoolName}
                                            </Typography>
                                            <Typography variant="h6" paragraph>
                                                {education.Degree}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {education.Date}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {education.Location}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {education.Description}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ButtonBase onClick={() => handleSchoolLinkClick(education.SchoolLink)}>
                                                <img className={styles.schoolImg} alt={education.SchoolName} src={education.SchoolImage} />
                                            </ButtonBase>
                                        </Grid>
                                    </Grid>
                                    {education.Awards.length > 0 && (
                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography variant="h5">Awards</Typography>
                                            </AccordionSummary>
                                            <Divider variant="middle" />
                                            {education.Awards.map((award) => (
                                                <AccordionDetails key={award.Name}>
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <Typography component="h2" variant="h5">
                                                                {award.Name}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography variant="subtitle1" color="textSecondary">
                                                                {`${award.Date} - ${award.Organization}`}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </AccordionDetails>
                                            ))}
                                        </Accordion>
                                    )}
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EducationPanel;