import React from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import profile from "../../data/profile";
import moment from "moment";
import styles from './ExperiencePanel.module.css';

moment.locale('en');

const ExperiencePanel = () => {
    return (
        <Container className={styles.experienceContainer}>
            <Row>
                <Col>
                    {profile.experiences.map((experience, i) => {

                        return (
                            <div key={i}>
                                <Media className={styles.media}>
                                    <Media left top href={experience.url}>
                                        <Media object src={experience.logo} alt={experience.companyName} />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            <a href={experience.url}>{experience.companyName}</a>
                                        </Media>
                                        {experience.roles.map((role, j) => {
                                            const { startDate, endDate, currentJob, title, description } = role;
                                            const formattedStartDate = moment(startDate).format('MMM YYYY');
                                            const formattedEndDate = currentJob ? 'Present' : moment(endDate).format('MMM YYYY');

                                            return (
                                                <div key={j}>
                                                    <h5>{title}</h5>
                                                    <p>{formattedStartDate} - {formattedEndDate}</p>
                                                    <p>{description}</p>
                                                </div>
                                            );
                                        })}
                                    </Media>
                                </Media>
                            </div>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default ExperiencePanel;