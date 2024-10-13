import React from 'react';
import styles from '../Styles/Layout.module.css';
import SellParkingForm from './SellParkingForm';
import TopBarClean from '../Components/TopBarClean';
import TopBarNoSearch from '../Components/TopBarNoSearch';


const SellParking = () => {
  return (
    <div className={styles.layout}>
      <TopBarNoSearch />
      <div className="overflow-auto h-screen"> {/* Set a height for scrollable area */}
        <SellParkingForm/>
      </div>
      
    </div>
  );
};

export default SellParking;







