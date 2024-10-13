import React from 'react';
import styles from '../Styles/Layout.module.css';
import SellParkingForm from './SellParkingForm';
import TopBarNoSearch from '../Components/TopBarNoSearch';
import TopBarClean from '../Components/TopBarClean';


const SellParking = () => {
  return (
    <div className={styles.layout}>
      <TopBarClean />
      <div className="overflow-auto h-screen"> {/* Set a height for scrollable area */}
        <SellParkingForm/>
      </div>
    </div>
  );
};

export default SellParking;







