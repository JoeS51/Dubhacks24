import React from 'react';
import JayPark from '@/app/Components/Park';
import Map from '@/app/Components/Map';
import TopBar from '@/app/Components/TopBar';
import styles from '../src/app/Styles/Layout.module.css';

const HelloWorld = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopBar/>
        <div className={styles.mainContent}>
          <JayPark />
        </div>
      </div>
  );
};

export default HelloWorld;
