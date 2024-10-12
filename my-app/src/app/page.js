import React from 'react';
import ParkingGrid from "./Components/ParkingGrid";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <ParkingGrid/>
      </div>
  );
}

