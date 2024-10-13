"use client";

import React, { useState } from "react";
import { format, parseISO } from "date-fns";
// components/BookingWidget.js
const BookingWidget = () => {

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  

  // const["checkIn", handleCheckInChange] = useState("");
  const isButtonDisabled = () => {
    return checkIn === "" || checkOut === "";
  }

  const handleClick = () => {
    if (isButtonDisabled === true) {
        alert('Invalid');
    } else {
        // Handle the actual button click action here
        console.log('Button clicked!');
    }
};

  const formatDateTime = (dateString) => {
    if (!dateString) return "";
    const date = parseISO(dateString);
    return format(date, "MM/dd/yyyy hh:mm aa");
  };

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
    if (checkOut && new Date(e.target.value) > new Date(checkOut)) {
      setCheckOut("");
    }
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
    if (checkIn && new Date(e.target.value) < new Date(checkIn)) {
      setCheckOut("");
    }
  };

  const handleBooking = () => {
    handleClick();

    
    fetch("/add", {method: "POST", body: body, headers: {'Content-Type': "application/json"}})
  }
 
  return (
    <div className="border rounded-xl p-6 shadow-lg">
      <div className="text-xl">
        $3 / hr
      </div>
      <div className="p-2">
              <input
                type="text"
                placeholder="Check in time"
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => (e.target.type = "text")}
                value={checkIn ? formatDateTime(checkIn) : ""}
                onChange={handleCheckInChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 ease-in-out" 
              />
            </div>
            <div className="p-2">
              <input
                type="text"
                placeholder="Check out time"
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => (e.target.type = "text")}
                value={checkOut ? formatDateTime(checkOut) : ""}
                onChange={handleCheckOutChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 ease-in-out" 
              />
            </div>
      <button className="w-full bg-customBlue text-white py-3 rounded-lg mt-4 hover:bg-customBlueHover"
      disabled={isButtonDisabled()}
      onClick={handleBooking}>
        Reserve
      </button>
      <p className="text-center text-sm mt-2">You won't be charged yet</p>
      {/* Add price breakdown here */}
    </div>
  );
};

// import React from 'react';

// components/BookingWidget.js
// const BookingWidget = () => {
//     return (
//       <div className="border rounded-xl p-6 shadow-lg">
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-2xl font-bold">$3 <span className="text-base font-normal">/ hour</span></span>
//         </div>
//         <div className="border rounded-t-lg">
//           <div className="flex">
//             <div className="w-1/2 p-2 border-r">
//               <label className="block text-xs font-semibold">CHECK-IN</label>
//               <input type="text" placeholder="10/17/2024" className="w-full" />
//             </div>
//             <div className="w-1/2 p-2">
//               <label className="block text-xs font-semibold">CHECKOUT</label>
//               <input type="text" placeholder="11/5/2024" className="w-full" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };


export default BookingWidget;
