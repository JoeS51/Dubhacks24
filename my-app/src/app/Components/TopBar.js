import React from 'react';
import styles from '../Styles/TopBar.module.css';
import SearchBar from '../Components/SearchBar';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>SpotLite</div>
      <div className={styles.userOptions}>
        <span>SpotLite your Garage</span>
        <span>🌐</span>
        <div className={styles.userIcon}>👤</div>
      </div>
    </div>
  );
};

export default TopBar;