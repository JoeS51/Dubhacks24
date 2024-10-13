import React from 'react';

// components/HostInfo.js
const HostInfo = () => {
    return (
      <div className="flex items-center mb-8">
        <img src="/api/placeholder/50/50" alt="Host" className="rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">Stay with Rosemary</h3>
          <p className="text-gray-600">2 months hosting</p>
        </div>
      </div>
    );
  };

  export default HostInfo;