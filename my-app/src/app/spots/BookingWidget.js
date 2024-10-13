"use client";

import React, { useState } from "react";

// components/BookingWidget.js
const BookingWidget = () => {

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className="border rounded-xl p-6 shadow-lg">
      <div class="text-xl">
        $3 / hr
      </div>
      <div className="p-2">
        <input
          type="text"
          placeholder="Check in Time"
          onFocus={(e) => (e.target.type = "datetime-local")}
          onBlur={(e) => (e.target.type = "text")}
          value={checkIn ? formatDateTime(checkIn) : ""}
          onChange={(e) => handleCheckInChange(e)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 ease-in-out" 
        />
      </div>
      <div className="p-2">
        <input
          type="text"
          placeholder="Check out Time"
          onFocus={(e) => (e.target.type = "datetime-local")}
          onBlur={(e) => (e.target.type = "text")}
          value={checkOut ? formatDateTime(checkOut) : ""}
          onChange={(e) => handleCheckOutChange(e)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 ease-in-out"
        />
      </div>
      <button className="w-full bg-customBlue text-white py-3 rounded-lg mt-4 hover:bg-customBlueHover">
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
