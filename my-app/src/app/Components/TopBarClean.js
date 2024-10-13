import React from 'react';
import styles from '../Styles/TopBarClean.module.css';
import Link from 'next/link';

const TopBarClean = () => {
  return (
    <div className={styles.topBarClean}>
      <div className={styles.logo}>SpotLite</div>
      <div className={styles.navItems}>
        <Link href="/" passHref>
            <button className={styles.navButton}>Reservation</button>
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