import React from 'react';
import Image from 'next/image';
import '../Styles/ParkingCard.css';
import Link from 'next/link';

const ParkingCard = ({ image, title, rating, reviews, priceBefore, priceNow, dates, location }) => {
  return (
    <div className="parking-card">
      <Link href="/spots" passHref>
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
            {priceBefore ? (
              <>
                <span className="old-price">${priceBefore}</span>
                <span className="new-price">${priceNow} / hour</span>
              </>
            ) : (
              <span className="price">${priceNow} / hour</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ParkingCard;
