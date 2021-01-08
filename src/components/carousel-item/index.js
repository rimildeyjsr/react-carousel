import React from 'react';
import Chip from '../chip';
import "./index.css";

const CarouselItem = ({bookInfo: {name, imageLink, imageAlt, price, category}, middleElement = false}) => {
  const scaleValue = middleElement ? 1.2 : 1;
  const paddingValue = middleElement ? 50: 20;
  const boxShadowValue = middleElement ?
    '0px 6px 6px rgba(0, 0, 0, 0.25)' : '0px 4px 4px rgba(0, 0, 0, 0.25)';

  return (
    <div
      className="carousel-item"
      style={{
         transform: 'scale(' + scaleValue + ')',
         padding: paddingValue + 'px'
      }}
    >

      <div
        className="carousel-image-wrapper"
        style={{
          boxShadow: boxShadowValue
        }}
      >
        <img
          className="carousel-image"
          src={imageLink}
          alt={imageAlt}
        />
      </div>

      <div
        className="carousel-information"
        style={{
          boxShadow: boxShadowValue
        }}
      >
        <h4 className="carousel-name">
          {name}
        </h4>

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


        <p className="carousel-price">
          Rs {price}/-
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
