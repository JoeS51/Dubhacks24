import React from 'react';
import styles from '../Styles/MapContainer.module.css';
import Map from './Map';

const MapContainer = () => {
  return (
    <div className={styles.map}>
      <div className={styles.mapContent}>
        <Map/>
      </div>
    </div>
  );
};

export default MapContainer;