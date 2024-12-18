import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import InfoCard from '../info-card/InfoCard'
import styles from './InfoPanel.module.css';

const InfoPanel = () => {
    return (
        <div>
            <Drawer
                className={styles.drawer}
                variant="permanent"
                classes={{ paper: styles.drawerPaper }}
                anchor="left"
            >
                <InfoCard />
            </Drawer>
        </div>
    );
};

export default InfoPanel;
