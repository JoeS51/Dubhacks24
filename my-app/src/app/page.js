import React from 'react';
import ParkingGrid from "./Components/ParkingGrid";
import DateRangePickerComponent from "./Components/date-picker/datePicker"
import Map from './Components/Map';
import CalendarBarComponent from './Components/calendar/calendarBar';
export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column"}}>
        <ParkingGrid/>
        <div>
        {/* <DateRangePickerComponent>
        </DateRangePickerComponent> */}
        <CalendarBarComponent>
          
        </CalendarBarComponent>
        </div>
        <div>
        <Map></Map>
        </div>
      </div>
  );
}

