import React from 'react';
import styles from '../Styles/MapContainer.module.css';
import GoogleMap from './Map';

const MapContainer = () => {
  return (
    <div className={styles.map}>
      <div className={styles.mapContent}>
        <GoogleMap/>
      </div>
    </div>
  );
};

export default MapContainer;