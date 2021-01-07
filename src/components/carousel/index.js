import React, {useState} from 'react';
import CarouselItem from "../carousel-item";
import {bookItemList} from "../../constants/book-list";
import "./index.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [offset, setOffset] = useState(0);
  const totalBooks = bookItemList.length;
  const CARD_WIDTH = 392;

  const moveToPreviousIndex = () => {
    const previousIndex = activeIndex - 1;
    if(previousIndex - 1 >= 0) {
      setActiveIndex(previousIndex);
      setOffset(offset + CARD_WIDTH);
    }
  };

  const moveToNextIndex = () => {
    const nextIndex = activeIndex + 1;
    if(nextIndex + 1 < totalBooks) {
      setActiveIndex(nextIndex);
      setOffset(offset - CARD_WIDTH);
    }
  };

  return (
    <>
      <div className="carousel">
        {
          totalBooks > 0 ?
            <div
              className="carousel-wrapper"
              style={{transform: 'translateX(' + offset + 'px'}}
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
        <button
          onClick={moveToPreviousIndex}
          className={activeIndex - 2 >= 0 ? 'arrow-button' : 'restricted-cursor arrow-button'}
          disabled={activeIndex - 2 < 0}
        >
          {"<"}
        </button>

        <button
          onClick={moveToNextIndex}
          className={activeIndex + 2 < totalBooks ? 'arrow-button' : 'restricted-cursor  arrow-button'}
          disabled={activeIndex + 2 >= totalBooks}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Carousel;
