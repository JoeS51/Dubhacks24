import React from 'react';
import styles from '../Styles/TopBar.module.css';
import CalendarBarNoSearch from './CalendarBarNoSearch';
import Link from 'next/link';
import icon from '../Images/icon.png'
import Image from 'next/image'

const TopBarNoSearch = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/JayPark" passHref>
        <div className={styles.logo}>
            <Image
                src={icon}
                width={40}
                height={40}
            />
            SpotLite
        </div>
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