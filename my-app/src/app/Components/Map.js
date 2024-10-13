"use client";

import React from 'react'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps"

export default function GoogleMap() {
  const pos = {lat: 47.65, lng: -122.3};

  return (
    <APIProvider apiKey='AIzaSyCkuzW1WbWBbDGhQsT5aIKR2q4ww1RnFKQ'>
      <div style={{height: "100vh", width: "100vh"}}>
        <Map zoom={15} center={pos} mapId='f743d2c8c09f3efe'>
          <AdvancedMarker position={pos}>
            
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  )
}