"use client";

import React, { useState } from "react";
import { format, parseISO } from "date-fns";

const CalendarBar = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

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

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", { destination, checkIn, checkOut, guests });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "";
    const date = parseISO(dateString);
    return format(date, "MM/dd/yyyy hh:mm aa");
  };

  return (
    <div className="bar-div">
      <div className="flex items-center">
        {" "}
        {/* Flex container for the form and button */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white rounded-full shadow-lg"
        >
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
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => (e.target.type = "text")}
                value={checkIn ? formatDateTime(checkIn) : ""}
                onChange={(e) => handleCheckInChange(e)}
                className="w-full focus:outline-none text-black"
              />
            </div>
            <div className="w-1/3 px-6 py-3">
              <input
                type="text"
                placeholder="Check out"
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => (e.target.type = "text")}
                value={checkOut ? formatDateTime(checkOut) : ""}
                onChange={(e) => handleCheckOutChange(e)}
                className="w-full focus:outline-none text-black"
              />
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 focus:outline-none ml-4" // Added margin-left for spacing
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default CalendarBar;
