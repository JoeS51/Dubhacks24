import React from 'react';
import styles from '../Styles/TopBar.module.css';
import CalendarBar from './CalendarBar';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>SpotLite</div>
      <CalendarBar/>
      <div className={styles.userOptions}>
        <span style={{ color: 'black' }}>SpotLite your Garage</span>

        <span>🌐</span>
        <div className={styles.userIcon}>👤</div>
      </div>
    </div>
  );
};

export default TopBar;