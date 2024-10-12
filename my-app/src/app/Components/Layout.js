import React from 'react';
import TopBar from './TopBar';
import MapContainer from './MapContainer';
import styles from '../Styles/Layout.module.css';
import ParkingGrid from './ParkingGrid';
import CalendarBar from './CalendarBar';

const Layout = () => {
    return (
      <div className={styles.layout}>
        <TopBar/>
        <CalendarBar/>
        <div className={styles.mainContent}>
          <ParkingGrid/>
          <MapContainer/>
        </div>
      </div>
    );
  };
  
  export default Layout;