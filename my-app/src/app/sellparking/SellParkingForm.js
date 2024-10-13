"use client";
import React, { useState } from "react";
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
    }
  });

  const printForm = () => {
    console.log(formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: { ...prevData.address, [field]: value }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
      title: "n/a",
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
  } catch (error) {
    console.error("Error submitting listing", error);
  }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Parent Username */}
        <div>
          <label className="block text-gray-700">Parent Username:</label>
          <input
            type="text"
            name="parentUsername"
            value={formData.parentUsername}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Latitude and Longitude */}
        <div>
          <label className="block text-gray-700">Latitude:</label>
          <input
            type="text"
            name="lat"
            value={formData.lat}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Longitude:</label>
          <input
            type="text"
            name="long"
            value={formData.long}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Start and End Times */}
        <div>
          <label className="block text-gray-700">Start Time:</label>
          <input
            type="datetime-local"
            name="start"
            value={formData.start}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">End Time:</label>
          <input
            type="datetime-local"
            name="end"
            value={formData.end}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700">City:</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">State:</label>
          <input
            type="text"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Zipcode:</label>
          <input
            type="text"
            name="address.zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Street:</label>
          <input
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-500 rounded-md"
          onClick={printForm}
        >
          Submit Listing
        </button>
      </form>
    </div>
  );
}

export default SellParkingForm;
