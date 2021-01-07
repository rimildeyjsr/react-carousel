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

      <div
        className="divider-line"
      />

      <h2>
        Filter the list
      </h2>
      <CategoryFilters
        setBookList={setBookList}
      />
    </div>
  );
}

export default App;
