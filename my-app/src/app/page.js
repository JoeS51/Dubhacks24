import React from 'react';
import ParkingGrid from "./Components/ParkingGrid";
import DateRangePickerComponent from "./Components/date-picker/date-picker"
export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <ParkingGrid/>
        <div>
        <DateRangePickerComponent>
        </DateRangePickerComponent>
        </div>
      </div>
  );
}

