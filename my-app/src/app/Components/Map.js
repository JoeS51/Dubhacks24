"use client";

import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { useSelector } from 'react-redux';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import axios from 'axios';

const API_KEY = 'AIzaSyCkuzW1WbWBbDGhQsT5aIKR2q4ww1RnFKQ';

// Predefined locations to spread the markers out
const locations = [
  { lat: 47.65, lng: -122.6 },
  { lat: 47.8, lng: -122.9 },
  { lat: 47.3, lng: -120.32 },
  { lat: 47.65, lng: -122.3 }
];

export default function GoogleMapComponent() {
  const router = useRouter(); // Use router to programmatically navigate
  const destination = useSelector((state) => state.map.destination);
  const initialPos = { lat: 47.65, lng: -122.3 };
  const [center, setCenter] = useState(initialPos);
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
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries: ["places"],
  });

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  useEffect(() => {
    if (destination) {
      handleSelect(destination);
    }
  }, [destination]);

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setCenter({ lat, lng });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onMapDrag = (e) => {
    if (e && e.latLng) {
      const newCenter = e.latLng.toJSON();
      setCenter(newCenter);
    } else {
      console.warn('Drag event does not contain latLng.');
    }
  };

  const handleMarkerClick = () => {
    router.push('/spots'); // Navigate to /spots when a marker is clicked
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMap
        center={center}
        zoom={13}
        onDragEnd={onMapDrag}
        mapContainerStyle={{ height: '100%', width: '100%' }}
        options={{ disableDefaultUI: true }}
      >
        {/* Render multiple markers */}
        {locations.map((position, index) => (
          <Marker 
            key={index} 
            position={position} 
            onClick={handleMarkerClick} // Handle marker click to navigate
          />
        ))}
      </GoogleMap>
    </div>
  );
}
