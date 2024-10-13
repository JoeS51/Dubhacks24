import React from 'react';
import parkingSpot1 from '../Images/parkingspot.jpg';
import Image from 'next/image';

// components/ImageGallery.js
const ImageGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-2 h-96 relative">
      <div className="col-span-2 row-span-2">
        <Image
          src={parkingSpot1}
          alt="Main house"
          priority
          width={500} // Specify width
          height={300} // Specify height
          style={{ objectFit: 'cover' }} // Mimics Tailwind's object-cover for the img
        />
      </div>
      <div>
        <Image
          src={parkingSpot1}
          alt="Living room"
          className="w-full h-full object-cover"
          width={400} // Specify width
          height={300} // Specify height
        />
      </div>
      <div>
        <Image
          src={parkingSpot1}
          alt="Kitchen"
          className="w-full h-full object-cover"
          width={400} // Specify width
          height={300} // Specify height
        />
      </div>
      <div>
        <Image
          src={parkingSpot1}
          alt="Bedroom"
          className="w-full h-full object-cover"
          width={400} // Specify width
          height={300} // Specify height
        />
      </div>
      <div>
        <Image
          src={parkingSpot1}
          alt="Dining area"
          className="w-full h-full object-cover"
          width={400} // Specify width
          height={300} // Specify height
        />
      </div>
      <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg">Show all photos</button>
    </div>
  );
};

export default ImageGallery;
