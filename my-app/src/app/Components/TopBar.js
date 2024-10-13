import React from 'react';
import styles from '../Styles/TopBar.module.css';
import CalendarBar from './CalendarBar';
import Link from 'next/link';
import trien from '../Images/trien_vuong.jpg'
import Image from 'next/image';
import icon from '../Images/icon.png'

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/JayPark" passHref>
        <div className={styles.logo}>
        <Image
            src={icon}
            width={40}
            height={40}
        />
          SpotLite</div>
      </Link>
      <div className={styles.navItems}>
        <CalendarBar/>
      </div>
      <div className={styles.userOptions}>
        <span style={{ color: 'black' }}>SpotLite your Garage</span>
        <span>🌐</span>
        <Image src={trien} width="40" height="40" className='rounded-full mr-4'/>

      </div>
    </div>
  );
};

export default TopBar;