"use client";

import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const API_KEY = 'AIzaSyCkuzW1WbWBbDGhQsT5aIKR2q4ww1RnFKQ';

// Predefined locations to spread the markers out
const locations = [
  { lat: 47.65, lng: -122.6 },
  { lat: 47.8, lng: -122.9 },
  { lat: 47.3, lng: -120.32 },
  { lat: 47.65, lng: -122.3 }
];

export default function GoogleMapComponent() {
  const destination = useSelector((state) => state.map.destination);
  const initialPos = { lat: 47.65, lng: -122.3 };
  const [center, setCenter] = useState(initialPos);

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
    // Check if e and e.latLng are defined before accessing toJSON
    if (e && e.latLng) {
      const newCenter = e.latLng.toJSON(); // Safely get new center
      setCenter(newCenter);
    } else {
      console.warn('Drag event does not contain latLng.');
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMap
        center={center}
        zoom={13} // Zoom out to show all markers
        onDragEnd={onMapDrag}
        mapContainerStyle={{ height: '100%', width: '100%' }}
        options={{ disableDefaultUI: true }}
      >
        {/* Render the center marker */}

        {/* Render multiple markers */}
        {locations.map((position, index) => (
          <Marker key={index} position={position} />
        ))}
      </GoogleMap>
    </div>
  );
}
