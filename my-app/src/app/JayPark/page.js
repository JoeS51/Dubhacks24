import React from 'react';
import TopBarClean from '../Components/TopBarClean';
import JayPark from '../Components/Park';
import styles from '../Styles/Layout.module.css';


const SpotsPage = () => {
  return (
    <div className={styles.layout}>
      <TopBarClean />
      <JayPark />
    </div>
  );
};

export default SpotsPage;







