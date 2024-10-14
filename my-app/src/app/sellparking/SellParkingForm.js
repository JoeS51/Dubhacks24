"use client";
import React, { useState } from "react";
import { Calendar, Clock, DollarSign, MapPin, Car, Home } from 'lucide-react';
import axios from "axios";




function SellParkingForm() {
  const [formData, setFormData] = useState({
    parentUsername: "",
    lat: "",
    long: "",
    start: "",
    end: "",
    price: "",
    description: "",
    address: {
      city: "",
      state: "",
      zipcode: "",
      street: ""
    },
    title: "",
    type: "",
    size: "",
  });

  const printForm = () => {
    console.log(formData);
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name.startsWith("address.")) {
  //     const field = name.split(".")[1];
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       address: { ...prevData.address, [field]: value }
  //     }));
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData };
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        newData[parent] = { ...newData[parent], [child]: value };
      } else {
        newData[name] = value;
      }
      return newData;
    });
  };



  
  const handleSubmit = async (e) => {

    
    e.preventDefault();


    const newListing = {
      parentUsername: formData.parentUsername,
      position: {
        type: "Point",
        coordinates: [parseFloat(formData.long), parseFloat(formData.lat)]
      },
      start: new Date(formData.start).toISOString(),
      end: new Date(formData.end).toISOString(),
      price: formData.price,
      rating: "n/a",
      title: formData.title,
      description: formData.description,
      address: formData.address,
      occupied: "no",
    };

    try {
      await axios.post('http://localhost:4000/api/listings/add', {
      body: newListing,
      headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(newListing)
      console.log(error);
    });
  } catch (error) {;
    console.error("Error submitting listing", error);
  }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Parking Spot Listing</h2>
    <div>
    </div>
    <form onSubmit={handleSubmit} className="space-y-6">
    <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <div className="relative">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <div className="relative">
            <input
              type="text"
              name="parentUsername"
              value={formData.parentUsername}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Home className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price per hour</label>
          <div className="relative">
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
          <div className="relative">
            <input
              type="datetime-local"
              name="start"
              value={formData.start}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
          <div className="relative">
            <input
              type="datetime-local"
              name="end"
              value={formData.end}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
          <input
            type="text"
            name="lat"
            value={formData.lat}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
          <input
            type="text"
            name="long"
            value={formData.long}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          required
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <div className="relative">
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <input
            type="text"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zipcode</label>
          <input
            type="text"
            name="address.zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street</label>
          <input
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Parking Spot Type</label>
          <div className="relative">
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              required
            >
              <option value="" disabled>Select a type</option>
              <option value="Gated">Gated</option>
              <option value="Apartment">Apartment</option>
              <option value="Garage">Garage</option>
              <option value="Driveway">Driveway</option>
              <option value="Curbside">Curbside</option>
            </select>
            <Home className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Vehicle Size</label>
          <div className="relative">
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              required
            >
              <option value="" disabled>Select a size</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Minivan">Minivan</option>
              <option value="Compact">Compact</option>
              <option value="Truck">Truck</option>
            </select>
            <Car className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
          Submit Listing
        </button>
      </div>
    </form>
  </div>
  );
}

export default SellParkingForm;

