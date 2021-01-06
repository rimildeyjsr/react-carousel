import React from 'react';
import Chip from '../chip';

const CarouselItem = ({bookInfo: {name, imageLink, imageAlt, price, category}}) => {
  return (
    <div className="carousel-item">

      <div className="carousel-image-wrapper">
        <img
          className="carousel-image"
          src={imageLink}
          alt={imageAlt}
        />
      </div>

      <div className="carousel-information">
        <h4 className="carousel-name">
          {name}
        </h4>

        <p className="carousel-price">
          {price}
        </p>
      </div>

      <div className="carousel-categories">
        {
          category.map((category, index) => {
            return (
              <Chip
                name={category}
                key={index}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default CarouselItem;
