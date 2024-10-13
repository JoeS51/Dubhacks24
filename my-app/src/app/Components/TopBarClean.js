import React from 'react';
import styles from '../Styles/TopBar.module.css';
import Link from 'next/link';
import icon from '../Images/icon.png'
import Image from 'next/image'

const TopBarClean = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Image
            src={icon}
            width={40}
            height={40}
        />
        SpotLite
        </div>
      <div className={styles.navItems}>
        <Link href="/" passHref>
            <button className={styles.navButton}>Reserve Now</button>
        </Link>
        <button className={styles.navButton}>About Us</button>
      </div>
      <div className={styles.userOptions}>
        <span>SpotLite your Garage</span>
        <span>🌐</span>
        <div className={styles.userIcon}>👤</div>
      </div>
    </div>
  );
};

export default TopBarClean;