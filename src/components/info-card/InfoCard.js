import React from 'react';
import { Typography, Divider, Grid, List, ListItem, ListItemText, Avatar } from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WorkIcon from '@material-ui/icons/Work';
import { SocialIcon } from 'react-social-icons';
import SchoolIcon from '@material-ui/icons/School';
import profile from '../../data/profile';
import styles from './InfoCard.module.css';

const socialMediaList = profile.SocialMedias;

const InfoCard = () => {
    return (
        <div>
            <Grid container className={styles.infoGrid} justifyContent="center" alignItems="center">
                <Grid item>
                    <Avatar alt={profile.Name} className={styles.bigAvatar} src={require("../../img/profile_pic.jpg")} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" className={styles.name}>
                        {profile.Name}
                    </Typography>
                    <Typography variant="h5" className={styles.position}>
                        {profile.Position}
                    </Typography>
                    <Typography variant="h6" className={styles.introduction}>
                        {profile.Description}
                    </Typography>
                </Grid>
                <Divider className={styles.divider} variant="middle" />
                <Grid item xs={12}>
                    <List className={styles.infoList}>
                        <ListItem>
                            <Avatar className={styles.infoIcon}>
                                <LocationCityIcon />
                            </Avatar>
                            <ListItemText className={styles.profileListItem} primary={profile.Address} />
                        </ListItem>
                        <ListItem>
                            <Avatar className={styles.infoIcon}>
                                <WorkIcon />
                            </Avatar>
                            <ListItemText className={styles.profileListItem} primary={profile.Company} />
                        </ListItem>
                        <ListItem>
                            <Avatar className={styles.infoIcon}>
                                <SchoolIcon />
                            </Avatar>
                            <ListItemText className={styles.profileListItem} primary={profile.School} />
                        </ListItem>
                    </List>
                </Grid>
                <Divider className={styles.divider} variant="middle" />
                <Grid item xs={12} className={styles.socialMedias}>
                    {socialMediaList.map((s, index) => (
                        <SocialIcon className={styles.socialMediasIcon} key={index} url={s} bgColor="#fff" />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default InfoCard;