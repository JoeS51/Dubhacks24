"use client";

import React, {useState, useEffect} from 'react';
import ImageGallery from './ImageGallery';
import ListingInfo from './ListingInfo';
import HostInfo from './HostInfo';
import Amenities from './Amenities';
import BookingWidget from './BookingWidget';
import AboutPlace from './AboutPlace';
import TopBarNoSearch from '../Components/TopBarNoSearch';
import styles from '../Styles/Layout.module.css';
import { useSearchParams } from 'next/navigation'
import axios from 'axios';
import TopBarClean from '../Components/TopBarClean';


const SpotsPage = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const [info, setInfo] = useState();

  useEffect(() => {
    // Function to fetch data
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/listings/get/' + id);
        console.log("PLSPLSPSLPSPLSPSLPSLPSSPSLLSPLSLPSPLSLPPLSPL")
        console.log('API Response:', response.data); // Log the JSON data to console
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className={styles.layout}>
      <TopBarClean/>
      <div className="overflow-auto h-screen"> {/* Set a height for scrollable area */}
        <div className="mx-10">
        <h1 className="text-3xl font-bold mt-6 mb-4">Seattle Parking</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="font-semibold">Parking in {info?.address.city}, {info?.address.state}</span>
          </div>
          {/* <div>
            <button className="mr-4">Share</button>
            <button>Save</button>
          </div> */}
        </div>
        <ImageGallery />
        <div className="flex mt-8">
          <div className="w-2/3 pr-8">
            <ListingInfo />
            <HostInfo />
            <Amenities />
            <AboutPlace description={info?.description} />
          </div>
          <div className="w-1/3">
            <BookingWidget id={id} rate={info?.price}/>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SpotsPage;
