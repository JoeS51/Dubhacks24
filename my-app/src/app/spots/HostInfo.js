import Image from 'next/image';
import React from 'react';
import trien from '../Images/trien_vuong.jpg'

// components/HostInfo.js
const HostInfo = () => {
    return (
      <div className="flex items-center mb-8">
        <Image src={trien} width="60" height="60" className='rounded-full mr-4'/>
        <div>
          <h3 className="font-semibold">Minh Trenithing Vuong</h3>
          <p className="text-gray-600">2 months hosting</p>
        </div>
      </div>
    );
  };

  export default HostInfo;