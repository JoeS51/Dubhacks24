import React from 'react';
import TopBarClean from '../Components/TopBarClean';
import styles from '../Styles/Layout.module.css';
import SellParkingForm from './SellParkingForm';


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







