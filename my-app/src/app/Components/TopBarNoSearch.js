import React from 'react';
import styles from '../Styles/TopBar.module.css';
import CalendarBarNoSearch from './CalendarBarNoSearch';
import Link from 'next/link';
import icon from '../Images/icon.png'
import Image from 'next/image'
import trien from '../Images/trien_vuong.jpg'

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
      <Link href="/sellparking">
      <span style={{ color: 'black' }}>Share your SpotLite</span>
        </Link>
        

        <span>🌐</span>
        <Link href="/profile" passHref>
          <Image src={trien} width="40" height="40" className='rounded-full mr-4'/>
        </Link>
      </div>
    </div>
  );
};

export default TopBarNoSearch;