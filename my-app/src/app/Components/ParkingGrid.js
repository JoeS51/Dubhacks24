import React, { useEffect, useState } from 'react';
import ParkingCard from './ParkingCard';
import parkingSpot1 from '../Images/parkingspot.jpg';
import '../Styles/ParkingGrid.css';
import park1 from '../Images/park1.jpg';
import park2 from '../Images/park2.jpg';
import park3 from '../Images/park3.jpg';
import park9 from '../Images/park9.jpg';
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

  // Hardcoded listings for testing
  const [listings, setListings] = useState([
    {
      _id: '1',
      title: 'Downtown Garage Parking',
      address: { city: 'Seattle', state: 'WA' },
      rating: 4.5,
      numRatings: 120,
      price: '$10/hr',
      end: '2024-12-31T23:59:59Z',
      size: 'SUV',
      type: 'Gated',
    },
    {
      _id: '2',
      title: 'Curbside Parking Lot',
      address: { city: 'Los Angeles', state: 'CA' },
      rating: 4.0,
      numRatings: 80,
      price: '$8/hr',
      end: '2024-11-30T23:59:59Z',
      size: 'Sedan',
      type: 'Lot',
    },
    {
      _id: '3',
      title: 'Covered Garage Space',
      address: { city: 'New York', state: 'NY' },
      rating: 4.7,
      numRatings: 150,
      price: '$15/hr',
      end: '2024-12-15T20:00:00Z',
      size: 'Minivan',
      type: 'Garage',
    },
    {
      _id: '4',
      title: 'Open Lot near Park',
      address: { city: 'San Francisco', state: 'CA' },
      rating: 3.8,
      numRatings: 60,
      price: '$5/hr',
      end: '2024-11-15T19:00:00Z',
      size: 'Sedan',
      type: 'Curbside',
    },
  ]);

  const [filteredListings, setFilteredListings] = useState(listings);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    // If you'd normally fetch data, it has been replaced with hardcoded entries
    setListings(listings);
    setFilteredListings(listings);
  }, []); // Empty dependency array to run once on mount

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);

    if (filters.length === 0) {
      setFilteredListings(listings);
    } else {
      const filtered = listings.filter((listing) => {
        return filters.every((filter) => {
          const size = listing.size ? listing.size.toLowerCase() : '';
          const type = listing.type ? listing.type.toLowerCase() : '';

          if (filter === 'SUV') return size.includes('suv');
          if (filter === 'Sedan') return size.includes('sedan');
          if (filter === 'Minivan') return size.includes('minivan');
          if (filter === 'Gated') return type.includes('gated');
          if (filter === 'Curbside') return type.includes('curbside');
          if (filter === 'Garage') return type.includes('garage');
          if (filter === 'Lot') return type.includes('lot');

          return false;
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
            location={`${listing?.address?.city}, ${listing?.address?.state}`}
            rating={listing?.rating}
            reviews={listing?.numRatings}
            priceNow={listing?.price}
            dates={`Now - ${formatDate(listing?.end)}`}
            key={listing._id}
            id={listing._id}
            i={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ParkingGrid;
