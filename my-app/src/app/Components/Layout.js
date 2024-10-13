import React from 'react';
import TopBar from './TopBar';
import MapContainer from './MapContainer';
import styles from '../Styles/Layout.module.css';
import ParkingGrid from './ParkingGrid';

const Layout = () => {
    return (
      <div className={styles.layout}>
        <TopBar/>
        <div className={styles.mainContent}>
          <MapContainer/>
          <ParkingGrid/>
        </div>
      </div>
    );
  };
  
  export default Layout;