import React from 'react';
import profile from "../../data/profile";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './EducationPanel.module.css';

const EducationPanel = () => {
    const handleSchoolLinkClick = (url) => {
        window.open(url);
    };

    return (
        <div className={styles.educationPanel}>
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
                                        <Accordion defaultExpanded>
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
        </div>
    );
};

export default EducationPanel;