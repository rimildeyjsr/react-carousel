import React, {useState} from 'react';
import './App.css';
import Carousel from "./components/carousel";
import CategoryFilters from "./components/category-filters";
import {bookItemList} from "./constants/book-list";

function App() {
  const [bookList, setBookList] = useState(bookItemList);

  return (
    <div className="App">
      <Carousel
        list={bookList}
      />

      <div className="category-filter-container">
        <h2 className="filter-heading">
          Filter
        </h2>
        <CategoryFilters
          setBookList={setBookList}
        />
      </div>
    </div>
  );
}

export default App;
