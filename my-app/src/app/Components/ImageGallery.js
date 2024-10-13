import React from 'react';
import styles from '../Styles/Gallery.module.css';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

const ImageGallery = ({ images }) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.mainImageContainer}>
                <Image
                    src={images[0]}
                    alt="Main Gallery Image"
                    layout="responsive"
                    width={500} // Adjust width for the main image
                    height={500} // Adjust height for a square
                    objectFit="cover"
                />
                <button className={styles.showAllButton}>
                    <i className="fa fa-th" aria-hidden="true"></i> Show all photos
                </button>
            </div>
            <div className={styles.thumbnails}>
                {images.slice(1, 5).map((image, index) => (
                    <div key={index} className={styles.thumbnail}>
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            layout="responsive"
                            width={200} // Adjust width as needed
                            height={200} // Adjust height to keep it square
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
