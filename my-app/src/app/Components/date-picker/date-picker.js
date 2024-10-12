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
    <DateRangePicker 
      label="Stay duration" 
      className="max-w-xs" 
    />
    );
};

export default DateRangePickerComponent;
