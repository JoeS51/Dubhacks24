"use client";

import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setDestination } from "../../../store/store"; // Import Redux action

const CalendarBar = () => {
  const [destination, setLocalDestination] = useState(""); // Renamed local state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const dispatch = useDispatch();
  const destinationTwo = useSelector((state) => state.map.destination); // Get Redux state

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
    console.log("Searching for:", { destination: destinationTwo, checkIn, checkOut });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "";
    const date = parseISO(dateString);
    return format(date, "MM/dd/yyyy hh:mm aa");
  };

  return (
    <div className="bar-div">
      <div className="flex items-center">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white rounded-full shadow-lg"
        >
          <div className="flex items-center divide-x">
            <input
              type="text"
              placeholder="Where"
              value={destination}
              onChange={(e) => {
                const value = e.target.value; // Define 'value' correctly inside the function
                console.log("PLZZZZ", value); // Debugging log
                setLocalDestination(value); // Update local state
                dispatch(setDestination(value)); // Dispatch Redux action
              }}
              className="w-1/3 px-6 py-3 rounded-l-full focus:outline-none text-black"
            />
            <div className="w-1/3 px-6 py-3">
              <input
                type="text"
                placeholder="Check in"
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => (e.target.type = "text")}
                value={checkIn ? formatDateTime(checkIn) : ""}
                onChange={handleCheckInChange}
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
                onChange={handleCheckOutChange}
                className="w-full focus:outline-none text-black"
              />
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="bg-customBlue text-white p-4 rounded-full hover:bg-customBlueHover focus:outline-none ml-4"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default CalendarBar;
