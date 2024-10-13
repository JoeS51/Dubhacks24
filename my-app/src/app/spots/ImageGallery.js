import React from 'react';
import parkingSpot1 from '../Images/parkingspot.jpg';
import Image from 'next/image';

// components/ImageGallery.js
const ImageGallery = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap h-96">
      <div className="flex justify-between items-center h-full space-x-4">
      <Image
          src={parkingSpot1}
          alt="Main house"
          priority
          width={500} // Specify width
          height={300} // Specify height
          // style={{ objectFit: 'cover' }} // Mimics Tailwind's object-cover for the img
        />
        <Image
          src={parkingSpot1}
          alt="Main house"
          priority
          width={500} // Specify width
          height={300} // Specify height
          // style={{ objectFit: 'cover' }} // Mimics Tailwind's object-cover for the img
        />
        <Image
          src={parkingSpot1}
          alt="Main house"
          priority
          width={500} // Specify width
          height={300} // Specify height
          // style={{ objectFit: 'cover' }} // Mimics Tailwind's object-cover for the img
        />
        <Image
          src={parkingSpot1}
          alt="Main house"
          priority
          width={500} // Specify width
          height={300} // Specify height
          // style={{ objectFit: 'cover' }} // Mimics Tailwind's object-cover for the img
        />
        {/* Add more items as needed */}
      </div>
    </div>
    // <div className="grid grid-cols-4 gap-2 h-96 relative">
    //   <div className="col-span-2 row-span-2">
        
    //   </div>
    //   <div className="col-span-2 row-span-2">
    //     <Image
    //       src={parkingSpot1}
    //       alt="Main house"
    //       priority
    //       width={500} // Specify width
    //       height={300} // Specify height
    //       // style={{ objectFit: 'cover' }} // Mimics Tailwind's object-cover for the img
    //     />
    //   </div>
    //   <div className="col-span-2 row-span-2">
    //     <Image
    //       src={parkingSpot1}
    //       alt="Main house"
    //       priority
    //       width={500} // Specify width
    //       height={300} // Specify height
    //       // style={{ objectFit: 'cover' }} // Mimics Tailwind's object-cover for the img
    //     />
    //   </div>
    //   <div>
    //     <Image
    //       src={parkingSpot1}
    //       alt="Living room"
    //       className="w-full h-full object-cover"
    //       width={400} // Specify width
    //       height={300} // Specify height
    //     />
    //   </div>
    //   <div>
    //     <Image
    //       src={parkingSpot1}
    //       alt="Kitchen"
    //       className="w-full h-full object-cover"
    //       width={400} // Specify width
    //       height={300} // Specify height
    //     />
    //   </div>
    //   <div>
    //     <Image
    //       src={parkingSpot1}
    //       alt="Bedroom"
    //       className="w-full h-full object-cover"
    //       width={400} // Specify width
    //       height={300} // Specify height
    //     />
    //   </div>
    //   <div>
    //     <Image
    //       src={parkingSpot1}
    //       alt="Dining area"
    //       className="w-full h-full object-cover"
    //       width={400} // Specify width
    //       height={300} // Specify height
    //     />
    //   </div>
    // </div>

  );
};

export default ImageGallery;
