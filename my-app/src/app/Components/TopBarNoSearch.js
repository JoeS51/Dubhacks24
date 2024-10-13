import React from 'react';
import styles from '../Styles/TopBar.module.css';
import CalendarBarNoSearch from './CalendarBarNoSearch';
import Link from 'next/link';

const TopBarNoSearch = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/JayPark" passHref>
        <div className={styles.logo}>SpotLite</div>
      </Link>
      <CalendarBarNoSearch/>
      <div className={styles.userOptions}>
        <span style={{ color: 'black' }}>SpotLite your Garage</span>

        <span>🌐</span>
        <div className={styles.userIcon}>👤</div>
      </div>
    </div>
  );
};

export default TopBarNoSearch;