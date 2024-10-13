import React from "react";
import Image from "next/image";
import parkingSpot1 from "../Images/parkingspot.jpg";
import trien from "../Images/trien_vuong.jpg";
import TopBarClean from "../Components/TopBarClean";

// Sample data for profile and reserved parking spaces
const userProfile = {
  name: "Trien Vuong",
  profilePicture: "/images/profile.jpg",
  email: "trienvuong@gmail.com",
  phoneNumber: "(123) 456-7890",
};

const reservedParkingSpaces = [
  {
    id: 1,
    location: "Seattle, WA",
    dates: "Oct 14 - Oct 20",
    price: 120,
    image: parkingSpot1, // Pass the image directly, not as an object
  },
  {
    id: 2,
    location: "San Francisco, CA",
    dates: "Nov 2 - Nov 5",
    price: 90,
    image: parkingSpot1, // Pass the image directly
  },
  // Add more reservations if needed
];
const myParkingSpaces = [
    {
      id: 1,
      location: "Bellevue, WA",
      dates: "Oct 14 - Oct 20",
      price: 5,
      image: parkingSpot1, // Pass the image directly, not as an object
    },
    // Add more reservations if needed
  ];

const ProfilePage = () => {
  return (
    <div>
      <TopBarClean />
      <div className="flex flex-col items-center p-8">
        {/* Profile Section */}
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md text-center">
          <Image
            src={trien}
            alt="Profile picture"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4">{userProfile.name}</h2>
          <p className="text-gray-600">{userProfile.email}</p>
          <p className="text-gray-600">{userProfile.phoneNumber}</p>
        </div>

        {/* Reserved Parking Spaces */}
        <div className="w-full max-w-4xl mt-8">
          <h3 className="text-xl font-bold mb-4">Reserved Parking Spots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reservedParkingSpaces.map((space) => (
              <div
                key={space.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center"
              >
                <div className="w-1/3">
                  <Image
                    src={space.image} // Access the image directly
                    alt={space.location}
                    width={150}
                    height={100}
                    className="rounded"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h4 className="text-lg font-semibold">{space.location}</h4>
                  <p className="text-gray-600">{space.dates}</p>
                  <p className="text-gray-800">${space.price} / total</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-4xl mt-8">
          <h3 className="text-xl font-bold mb-4">My Parking Spots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {myParkingSpaces.map((space) => (
              <div
                key={space.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center"
              >
                <div className="w-1/3">
                  <Image
                    src={space.image} // Access the image directly
                    alt={space.location}
                    width={150}
                    height={100}
                    className="rounded"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h4 className="text-lg font-semibold">{space.location}</h4>
                  <p className="text-gray-600">{space.dates}</p>
                  <p className="text-gray-800">${space.price} / total</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
