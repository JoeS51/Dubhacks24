import React from 'react';
import TopBar from './TopBar';
import Navigation from './Navigation';
import MapContainer from './MapContainer';
import styles from '../Styles/Layout.css';
import ParkingGrid from './ParkingGrid';

const Layout = () => {
    return (
      <div className={styles.layout}>
        <TopBar/>
        <Navigation/>
        <div className={styles.mainContent}>
          <ParkingGrid/>
          <MapContainer/>
        </div>
      </div>
    );
  };
  
  export default Layout;