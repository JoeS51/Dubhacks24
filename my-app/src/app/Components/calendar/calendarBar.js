"use client";
import React, { useState } from 'react';
import DateRangePickerComponent from '../date-picker/datePicker';
const CalendarBarComponent = () => {

    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('');

    // useEffect(() => {
    //     validateDates();
    //   }, [checkIn, checkOut]);

    const validateDates = () => {
    if (checkIn && checkOut) {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        if (checkOutDate <= checkInDate) {
        setDateError('Check-out date must be after check-in date');
        } else {
        setDateError('');
        }
    } else {
        setDateError('');
    }
    };
    
    const handleCheckInChange = (e) => {
        setCheckIn(e.target.value);
        if (checkOut && new Date(e.target.value) > new Date(checkOut)) {
          setCheckOut('');
        }
      };
    
      const handleCheckOutChange = (e) => {
        setCheckOut(e.target.value);
        if (checkIn && new Date(e.target.value) < new Date (checkIn)) {
            setCheckOut('');
        }
      };


    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', { destination, checkIn, checkOut, guests });
      };
    
    return (
        <div className="bar-div">
        <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-lg">
          <div className="flex items-center divide-x">
            <input
              type="text"
              placeholder="Where"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-1/3 px-6 py-3 rounded-l-full focus:outline-none text-black"
            />
            <div className="w-1/3 px-6 py-3">
              <input
                type="text"
                placeholder="Check in"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                value={checkIn}
                onChange={(e) => handleCheckInChange(e)}
                className="w-full focus:outline-none text-black"
              />
            </div>
            <div className="w-1/3 px-6 py-3">
              <input
                type="text"
                placeholder="Check out"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                value={checkOut}
                onChange={(e) => handleCheckOutChange(e)}
                className="w-full focus:outline-none text-black"
              />
            </div>
            {/* <input
              type="text"
              placeholder="Who"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-1/4 px-6 py-3 focus:outline-none"
            /> */}
          </div>
          {/* <button type="submit" className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 focus:outline-none"> */}
          {/* </button> */}
        </form>
      </div>
    );
};

export default CalendarBarComponent;
