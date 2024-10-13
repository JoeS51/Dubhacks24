import React from 'react';
// components/AboutPlace.js
const AboutPlace = ({description}) => {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">About this Spot</h3>
        {/* <p>Great parking spot that is safely gated. Walking distance to University of Washington</p> */}
        <p>{description}</p>
      </div>
    );
  };

  export default AboutPlace;