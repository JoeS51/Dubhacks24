import React, { useEffect, useState } from 'react';
import ParkingCard from './ParkingCard';
import parkingSpot1 from '../Images/parkingspot.jpg'
import '../Styles/ParkingGrid.css'
import axios from 'axios';
import Park from '../../../public/Park';
import park1 from '../Images/park1.jpg'
import park2 from '../Images/park2.jpg'
import park3 from '../Images/park3.jpg'
import park9 from '../Images/park9.jpg'

const images = [parkingSpot1, park9, park1, park2, park3];

const ParkingGrid = () => {

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      weekday: 'short', // E.g., Sun
      month: 'short',   // E.g., Dec
      day: 'numeric',   // E.g., 15
      hour: 'numeric',  // E.g., 10 AM
      minute: '2-digit',
      hour12: true,     // Use AM/PM format
      timeZone: 'UTC',  // Adjust as needed
    });
  };

  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/listings/get');
        console.log('API Response:', response.data); // Log the JSON data to console
        setListings(response.data); // Optionally, store data in state
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="container">
      <div className="grid-container">
        {listings.map((listing, index) => (

          <ParkingCard
            image={images[index % images.length]}
            title={listing?.title}
            location={listing?.address?.city + ", " + listing?.address?.state}
            rating={listing?.rating}
            reviews={listing?.numRatings}
            priceNow={listing?.price}
            dates={`Now - ${formatDate(listing?.end)}`}
            key={listing._id}
            id={listing._id}
          />

        ))}
        {/* <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceNow={3}
          dates="Now - 5 hours"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Apartment in Seattle"
          location="Seattle, WA"
          rating={4.85}
          reviews={534}
          priceBefore={162}
          priceNow={4}
          dates="Now - Oct 18"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Loft in Downtown Seattle"
          location="Seattle, WA"
          rating={4.74}
          reviews={39}
          priceNow={5}
          dates="Now - 17"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={68}
          dates="Oct 12 - 17"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={68}
          dates="Oct 12 - 17"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={68}
          dates="Oct 12 - 17"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={68}
          dates="Oct 12 - 17"
        /> */}
      </div>
    </div>
  );
};

export default ParkingGrid;
