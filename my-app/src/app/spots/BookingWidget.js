"use client";

import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import axios from "axios";
// components/BookingWidget.js
const BookingWidget = ({id, rate}) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(null); // State to hold the estimated price

  const hourlyRate = rate; // Price per hour
  const currId = id;
  const isButtonDisabled = () => {
    return checkIn === "" || checkOut === "";
  };

  const handleClick = () => {
    if (isButtonDisabled === true) {
      alert("Invalid");
    } else {
      // Handle the actual button click action here
      console.log("Button clicked!");
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

  const handleCheckPrice = () => {
    // For now, we'll just calculate a dummy price based on date differences.
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    
    // If both dates are valid, calculate the price (e.g., $100 per night)
    if (checkInDate && checkOutDate && checkInDate < checkOutDate) {
      const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60); // Convert milliseconds to days
      const price = nights * hourlyRate; // Assuming $100 per night for this example
      setEstimatedPrice(price); // Set the estimated price in the state
    } else {
      setEstimatedPrice("Invalid dates! Please select valid check-in and check-out dates.");
    }
  };

  const handleBooking = async () => {
    handleClick();

     try {
      const url = `http://localhost:4000/api/listings/get/${currId}`;
      const response = await axios.get(url);
      response.occupied = "yes";
      console.log('Listing data:', response.data);

      await axios.post('http://localhost:4000/api/listings/add', {
        body: response,
        headers: {
          'Content-Type': 'application/json',
      }
      })
      // const url = 'http://localhost:4000/api/listings/get/' + currId
      // await axios.post(url, {
      //   params: currId,
      //   headers: {
      //     'Content-Type': 'application/json',
      // }
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(currId)
      //   console.log(error);
      // });
    } catch (error) {
      console.error("Error updating listing", error);
    }
  };

  return (
    <div className="border rounded-xl p-6 shadow-lg">
      <div className="text-xl">${hourlyRate} / hr</div>
      <div className="py-2">
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
      <div className="py-2">
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
      <button
          onClick={handleCheckPrice}
          className="w-full bg-customBlue text-white py-2 rounded-lg mt-4 hover:bg-customBlueHover"
        >
          Check Price
        </button>
      <button
        className="w-full bg-customBlue text-white py-3 rounded-lg mt-4 hover:bg-customBlueHover"
        disabled={isButtonDisabled()}
        onClick={handleBooking}
      >
        Reserve
      </button>
      {estimatedPrice !== null && (
        <div className="mt-4 text-gray-800">
          <strong>Estimated Price:</strong>{" "}
          {typeof estimatedPrice === "number" ? `$${estimatedPrice.toFixed(2)}` : estimatedPrice}
        </div>
      )}
      <p className="text-center text-sm mt-2">You won't be charged yet</p>
      
    </div>
  );
};

export default BookingWidget;
