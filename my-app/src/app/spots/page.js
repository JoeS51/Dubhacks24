import React from 'react';
import styles from '../Styles/Layout.module.css';
import TopBar  from '../Components/TopBar';
import ImageGallery from '../Components/ImageGallery';
import parkingSpot1 from '../Images/parkingspot.jpg'

const Page = () => {
  const images = [
    parkingSpot1, // Main image (large)
    parkingSpot1,
    parkingSpot1,
    parkingSpot1,
    parkingSpot1,
    parkingSpot1, // Additional smaller images
  ];

  return (
    <div className={styles.layout}>
      <TopBar/>
      <div>
        <ImageGallery images = {images}/>
      </div>
    </div>
  );
};

export default Page;
