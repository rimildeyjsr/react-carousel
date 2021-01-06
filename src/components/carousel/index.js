import React, {useState} from 'react';
import CarouselItem from "../carousel-item";
import {bookItemList} from "../../constants/book-list";
import "./index.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const totalBooks = bookItemList.length;

  const moveToPreviousIndex = () => {
    const previousIndex = activeIndex - 1;
    if(previousIndex - 1 > 0) {
      setActiveIndex(previousIndex);
    }
  };

  const moveToNextIndex = () => {
    const nextIndex = activeIndex + 1;
    if(nextIndex + 1 < totalBooks) {
      setActiveIndex(nextIndex);
    }
  };

  return (
    <div className="carousel flex-centered">

      {
        totalBooks > 0 ?

          <div className="carousel-wrapper flex-centered">

            <CarouselItem
              className="left-carousel-item"
              bookInfo={bookItemList[activeIndex - 1]}
            />

            <CarouselItem
              className="main-carousel-item"
              bookInfo={bookItemList[activeIndex]}
              middleElement={true}
            />

            <CarouselItem
              className="right-carousel-item"
              bookInfo={bookItemList[activeIndex + 1]}
            />
          </div>

          :

          <h3>
            No items to show here!
          </h3>
      }

      <div className="carousel-arrow-wrapper">
        <button onClick={moveToPreviousIndex}>
          {"<"}
        </button>

        <button onClick={moveToNextIndex}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
