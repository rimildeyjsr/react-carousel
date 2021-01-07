import React, {useState} from 'react';
import CarouselItem from "../carousel-item";
import {bookItemList} from "../../constants/book-list";
import "./index.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(0);
  const totalBooks = bookItemList.length;

  const moveToPreviousIndex = () => {
    const previousIndex = activeIndex - 1;
    if(previousIndex - 1 >= 0) {
      setActiveIndex(previousIndex);
      setDirection(direction + 392);
    }
  };

  const moveToNextIndex = () => {
    const nextIndex = activeIndex + 1;
    if(nextIndex + 1 < totalBooks) {
      setActiveIndex(nextIndex);
      setDirection(direction - 392);
    }
  };

  return (
    <>
      <div className="carousel">
        {
          totalBooks > 0 ?
            <div
              className="carousel-wrapper"
              style={{transform: 'translateX(' + direction + 'px'}}
            >
              {
                bookItemList.map((book, index) => {
                  return (
                    <CarouselItem
                      bookInfo={book}
                      middleElement={index === activeIndex}
                      key={book.key}
                    />
                  )
                })
              }
            </div>

            :

            <h3>
              No items to show here!
            </h3>
        }
      </div>

      <div className="carousel-arrow-wrapper">
        <button onClick={moveToPreviousIndex}>
          {"<"}
        </button>

        <button onClick={moveToNextIndex}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default Carousel;
