import React from 'react';
import ImageGallery from './ImageGallery';
import ListingInfo from './ListingInfo';
import HostInfo from './HostInfo';
import Amenities from './Amenities';
import BookingWidget from './BookingWidget';
import AboutPlace from './AboutPlace';
import TopBarNoSearch from '../Components/TopBarNoSearch';
import styles from '../Styles/Layout.module.css';

const SpotsPage = () => {
  return (
    <div className={styles.layout}>
      <TopBarNoSearch/>
      <div className="overflow-auto h-screen"> {/* Set a height for scrollable area */}
        <div className="mx-10">
        <h1 className="text-3xl font-bold mt-6 mb-4">Seattle Parking</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="font-semibold">Parking in Seattle, Washington</span>
          </div>
          <div>
            <button className="mr-4">Share</button>
            <button>Save</button>
          </div>
        </div>
        <ImageGallery />
        <div className="flex mt-8">
          <div className="w-2/3 pr-8">
            <ListingInfo />
            <HostInfo />
            <Amenities />
            <AboutPlace />
          </div>
          <div className="w-1/3">
            <BookingWidget />
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SpotsPage;
