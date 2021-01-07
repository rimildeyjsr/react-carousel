import React from 'react';
import './App.css';
import Carousel from "./components/carousel";
import CategoryFilters from "./components/category-filters";

function App() {
  return (
    <div className="App">
      <Carousel/>

      <div
        className="divider-line"
      />

      <h2>
        Filter the list
      </h2>
      <CategoryFilters/>
    </div>
  );
}

export default App;
