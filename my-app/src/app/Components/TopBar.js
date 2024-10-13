import React from 'react';
import styles from '../Styles/TopBar.module.css';
import CalendarBar from './CalendarBar';
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/JayPark" passHref>
        <div className={styles.logo}>SpotLite</div>
      </Link>
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