"use client";

import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%", // Full width for its half-container
  height: "100%", // Full height of the parent
};

const center = {
  lat: 47.6567, // Example latitude (Seattle area)
  lng: -122.3066, // Example longitude
};

// Array of marker positions
const markerPositions = [
  
  { lat: 47.6567, lng: -122.3066 }, // Center marker
  { lat: 47.6605, lng: -122.3091 }, // Another marker
  { lat: 47.6549, lng: -122.3055 }, // Additional marker
];


export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCkuzW1WbWBbDGhQsT5aIKR2q4ww1RnFKQ", // Use environment variable for API key
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();

    // Extend bounds for each marker position
    markerPositions.forEach((position) => {
      bounds.extend(position);
    });

    // Fit map to the bounds of all markers
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left half for the map */}
      <div className="h-full">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15} // Optional: Default zoom when fitBounds is not called
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Render markers */}
            {markerPositions.map((position, index) => (
              <Marker key={index} position={position}/>
            ))}
          </GoogleMap>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Right half for other content */}
      <div className="flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">Right Side Content</h1>
      </div>
    </div>
  );
}
