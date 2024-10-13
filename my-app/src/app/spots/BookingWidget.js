import React from 'react';

// components/BookingWidget.js
const BookingWidget = () => {
    return (
      <div className="border rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold">$3 <span className="text-base font-normal">/ hour</span></span>
        </div>
        <div className="border rounded-t-lg">
          <div className="flex">
            <div className="w-1/2 p-2 border-r">
              <label className="block text-xs font-semibold">CHECK-IN</label>
              <input type="text" placeholder="10/17/2024" className="w-full" />
            </div>
            <div className="w-1/2 p-2">
              <label className="block text-xs font-semibold">CHECKOUT</label>
              <input type="text" placeholder="11/5/2024" className="w-full" />
            </div>
          </div>
        </div>
        <button className="w-full bg-customBlue text-white py-3 rounded-lg mt-4">Reserve</button>
        <p className="text-center text-sm mt-2">You won't be charged yet</p>
        {/* Add price breakdown here */}
      </div>
    );
  };

  export default BookingWidget;