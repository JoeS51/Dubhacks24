import React from 'react';

// components/ImageGallery.js
const ImageGallery = () => {
    return (
      <div className="grid grid-cols-4 gap-2 h-96">
        <div className="col-span-2 row-span-2">
          <img src="/api/placeholder/800/600" alt="Main house" className="w-full h-full object-cover rounded-l-xl" />
        </div>
        <div>
          <img src="/api/placeholder/400/300" alt="Living room" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src="/api/placeholder/400/300" alt="Kitchen" className="w-full h-full object-cover rounded-tr-xl" />
        </div>
        <div>
          <img src="/api/placeholder/400/300" alt="Bedroom" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src="/api/placeholder/400/300" alt="Dining area" className="w-full h-full object-cover rounded-br-xl" />
        </div>
        <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg">Show all photos</button>
      </div>
    );
  };

  export default ImageGallery;