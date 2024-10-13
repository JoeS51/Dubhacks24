import React from 'react';
import ParkingCard from './ParkingCard';
import parkingSpot1 from '../Images/parkingspot.jpg'
import '../Styles/ParkingGrid.css'

const ParkingGrid = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={3}
          dates="Now - 5 hours"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Apartment in Seattle"
          location="Seattle, WA"
          rating={4.85}
          reviews={534}
          priceBefore={162}
          priceNow={4}
          dates="Now - Oct 18"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Loft in Downtown Seattle"
          location="Seattle, WA"
          rating={4.74}
          reviews={39}
          priceBefore={161}
          priceNow={5}
          dates="Now - 17"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={68}
          dates="Oct 12 - 17"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={68}
          dates="Oct 12 - 17"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={68}
          dates="Oct 12 - 17"
        />
        <ParkingCard
          image={parkingSpot1}
          title="Guest suite in Seattle"
          location="Seattle, WA"
          rating={4.72}
          reviews={72}
          priceBefore={116}
          priceNow={68}
          dates="Oct 12 - 17"
        />
      </div>
    </div>
  );
};

export default ParkingGrid;
