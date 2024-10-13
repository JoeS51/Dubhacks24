import React from 'react';
import Image from 'next/image';
import '../Styles/ParkingCard.css';

const ParkingCard = ({ image, title, rating, reviews, priceBefore, priceNow, dates, location }) => {
  return (
    <div className="parking-card">
      <div className="card-image">
        <Image src={image} alt={title} priority />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <div className="rating">
          <span>⭐ {rating} ({reviews})</span>
        </div>
        <div className="dates">
          <span>{dates}</span>
        </div>
        <div className="price">
          {priceBefore && (
            <span className="old-price">${priceBefore}</span>
          )}
          {priceNow && (
            <span className="new-price">${priceNow} / hour</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParkingCard;
