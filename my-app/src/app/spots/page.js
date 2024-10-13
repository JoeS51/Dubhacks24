import React from 'react';
import styles from './Gallery.module.css'; // Import CSS module for styling
import Image from 'next/image'
import parkingSpot1 from '../Images/parkingspot.jpg'

const Page = () => {
  const images = [
    parkingSpot1
    // Add more images as needed
  ];

  return (
    <div>
      <h1>Spots</h1>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className={styles.image}
              layout="responsive"  // Ensures responsive behavior
              width={200}          // Replace with your desired width
              height={150}         // Replace with your desired height
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
