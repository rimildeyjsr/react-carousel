import React, {useState, useRef} from 'react';
import CarouselItem from "../carousel-item";
import {bookItemList} from "../../constants/book-list";
import "./index.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef();
  const totalBooks = bookItemList.length;

  const moveToPreviousIndex = () => {
    const previousIndex = activeIndex - 1;
    if(previousIndex - 1 >= 0) {
      containerRef.current.children[previousIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
      setActiveIndex(previousIndex);
    }
  };

  const moveToNextIndex = () => {
    const nextIndex = activeIndex + 1;
    if(nextIndex + 1 < totalBooks) {
      containerRef.current.children[nextIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
      setActiveIndex(nextIndex);
    }
  };

  return (
    <div className="carousel center-align-flex">
      {
        totalBooks > 0 ?
          <div className="carousel-wrapper center-align-flex" ref={containerRef}>
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
