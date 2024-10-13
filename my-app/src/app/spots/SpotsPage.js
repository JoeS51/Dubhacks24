import React from 'react';
import ImageGallery from './ImageGallery';
import ListingInfo from './ListingInfo';
import HostInfo from './HostInfo';
import Amenities from './Amenities';
import BookingWidget from './BookingWidget';
import AboutPlace from './AboutPlace';
import TopBar from '../Components/TopBar';

const SpotsPage = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <TopBar/>
      <h1 className="text-3xl font-bold mt-6 mb-4">Basement bedroom Fir</h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="font-semibold">Room in Kirkland, Washington</span>
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
  );
};

export default SpotsPage;













