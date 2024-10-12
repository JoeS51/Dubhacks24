import React from 'react';
import { Search } from 'lucide-react';
import styles from '../Styles/TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>SpotLite</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Start your search" className={styles.searchInput} />
        <Search className={styles.searchIcon} size={24} />
      </div>
      <div className={styles.userOptions}>
        <span>SpotLite your Garage</span>
        <span>🌐</span>
        <div className={styles.userIcon}>👤</div>
      </div>
    </div>
  );
};

export default TopBar;