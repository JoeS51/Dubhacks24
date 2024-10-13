"use client";

import React, { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps";

export default function GoogleMap() {
  const initialPos = {lat: 47.65, lng: -122.3};
  const [center, setCenter] = useState(initialPos);

  const onMapDrag = (e) => {
    const newCenter = e.detail.center;
    setCenter(newCenter);
  };

  return (
    <APIProvider apiKey='AIzaSyCkuzW1WbWBbDGhQsT5aIKR2q4ww1RnFKQ'>
      <div style={{height: "100vh", width: "100%"}}>
        <Map
          defaultCenter={initialPos}
          center={center}
          mapId='f743d2c8c09f3efe'
          scrollwheel={true}
          zoomControl={true}
          minZoom={14}
          maxZoom={20} 
          disableDefaultUI={true}
          onDrag={onMapDrag}
        >
          <AdvancedMarker position={initialPos}>
            <Pin />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}