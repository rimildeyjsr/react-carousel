import React, {useState, useEffect} from 'react';
import CarouselItem from "../carousel-item";
import "./index.css";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

const Carousel = ({list}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [offset, setOffset] = useState(0);
  const [bookList, setBookList] = useState(list);
  const CARD_WIDTH = 392;

  useEffect(() => {
    setBookList(list);
    setActiveIndex(1);
    setOffset(0);
  }, [list]);

  const moveToPreviousIndex = () => {
    const previousIndex = activeIndex - 1;
    if(previousIndex - 1 >= 0) {
      setActiveIndex(previousIndex);
      setOffset(offset + CARD_WIDTH);
    }
  };

  const moveToNextIndex = () => {
    const nextIndex = activeIndex + 1;
    if(nextIndex + 1 < bookList.length) {
      setActiveIndex(nextIndex);
      setOffset(offset - CARD_WIDTH);
    }
  };

  return (
    <section>
      <button
        onClick={moveToPreviousIndex}
        className={activeIndex - 2 >= 0 ? 'arrow-button' : 'restricted-cursor arrow-button'}
        disabled={activeIndex - 2 < 0}
      >
        <img
          src={leftArrow}
          alt="left arrow"
        />
      </button>

      <div className="carousel">
        {
          bookList.length > 0 ?
            <div
              className="carousel-wrapper"
              style={{transform: 'translateX(' + offset + 'px'}}
            >
              {
                bookList.map((book, index) => {
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

            <h1 className="no-item-text">
              No items to show here!
            </h1>
        }
      </div>

      <button
        onClick={moveToNextIndex}
        className={activeIndex + 2 <  bookList.length ? 'arrow-button' : 'restricted-cursor  arrow-button'}
        disabled={activeIndex + 2 >=  bookList.length}
      >
        <img
          src={rightArrow}
          alt="right arrow"
        />
      </button>
    </section>
  );
};

export default Carousel;
