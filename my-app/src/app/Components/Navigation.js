import React from 'react';
import styles from '../Styles/Navigation.css';

const navigationItems = ['Your search', 'Beach', 'Amazing views', 'Rooms', 'Countryside', 'National parks', 'Lakefront', "Chef's kitchens", 'Amazing pools', 'Cabins', 'Vineyards', 'Beachfront'];

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      {navigationItems.map((item) => (
        <div key={item} className={styles.navItem}>
          <span className={styles.navIcon}>🏠</span>
          <span className={styles.navText}>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;