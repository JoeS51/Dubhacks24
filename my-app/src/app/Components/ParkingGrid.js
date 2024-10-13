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
import FilterBar from './FilterBar';

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
  const [filteredListings, setFilteredListings] = useState([]); // Filtered listings
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/listings/get');
        console.log('API Response:', response.data); // Log the JSON data to console
        setListings(response.data); // Optionally, store data in state
        setFilteredListings(response.data); // Initialize filtered listings with all listings
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []); // Empty dependency array to run once on mount

  // Function to handle filter changes from FilterBar
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  
    // Filter listings based on active filters
    if (filters.length === 0) {
      setFilteredListings(listings); // Show all listings if no filters are selected
    } else {
      const filtered = listings.filter((listing) => {
        return filters.every((filter) => {
          // Get the description and handle undefined/null cases
          const description = listing.description ? listing.description.toLowerCase() : '';
  
          // Example logic: match vehicle types or other conditions
          if (filter === 'SUV') return description.includes('suv');
          if (filter === 'Sedan') return description.includes('sedan');
          if (filter === 'Minivan') return description.includes('minivan');
          if (filter === 'Gated') return description.includes('gated');
          if (filter === 'Curbside') return description.includes('curbside');
          if (filter === 'Garage') return description.includes('garage');
          
          return false; // Default false for filters that don't match
        });
      });
  
      setFilteredListings(filtered);
    }
  };
  

  return (
    <div className="container">
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="grid-container">
        {filteredListings.map((listing, index) => (

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
      </div>
    </div>
  );
};

export default ParkingGrid;
