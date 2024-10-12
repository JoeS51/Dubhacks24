"use client";
// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// export default function BasicDateRangePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangePicker']}>
//         <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }


import React, { useState } from 'react';
import {DateRangePicker} from "@nextui-org/react";
import {parseZonedDateTime} from "@internationalized/date";
const DateRangePickerComponent = () => {
    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');

    // const handleStartDateChange = (event) => {
    //     setStartDate(event.target.value);
    // };

    // const handleEndDateChange = (event) => {
    //     setEndDate(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (startDate && endDate) {
    //         alert(`Selected Range: ${startDate} to ${endDate}`);
    //     } else {
    //         alert('Please select both start and end dates.');
    //     }
    // };

    return (
    //     <div style={{ margin: '20px' }}>
    //         <h2>Select Date Range</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>
    //                     Start Date:
    //                     <input
    //                         type="date"
    //                         value={startDate}
    //                         onChange={handleStartDateChange}
    //                     />
    //                 </label>
    //             </div>
    //             <div>
    //                 <label>
    //                     End Date:
    //                     <input
    //                         type="date"
    //                         value={endDate}
    //                         onChange={handleEndDateChange}
    //                     />
    //                 </label>
    //             </div>
    //             <button type="submit">Submit</button>
    //         </form>
    //         {startDate && endDate && (
    //             <div>
    //                 <p>
    //                     You selected a range from {startDate} to {endDate}.
    //                 </p>
    //             </div>
    //         )}
    //     </div>
    <div className="w-full max-w-xl flex flex-row gap-4">
      <DateRangePicker
        label="Event duration"
        hideTimeZone
        visibleMonths={2}
        defaultValue={{
          start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
          end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]"),
        }}
      />
    </div>
    );
};

export default DateRangePickerComponent;
