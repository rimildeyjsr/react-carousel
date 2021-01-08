import React, {useState, useRef} from 'react';
import FILTER_CATEGORIES from "../../constants/filter-categories";
import "./index.css";
import {bookItemList} from "../../constants/book-list";

const CategoryFilters = ({setBookList}) => {
  const [selectedFilters, setSelectedFilter] = useState([]);
  const buttonRef = useRef();

  const updateFilters = (category, index) => {
    isFilterSelected(category) ? removeFilter(category, index) : addFilter(category, index);
    filterList();
  };

  const removeFilter = (category, index) => {
    const filterIndex = selectedFilters.indexOf(category);
    selectedFilters.splice(filterIndex, 1);
    setSelectedFilter(selectedFilters);
    buttonRef.current.children[index].style.backgroundColor = 'white';
    buttonRef.current.children[index].style.color = '#b9c95a';
  };

  const addFilter = (category, index) => {
    selectedFilters.push(category);
    setSelectedFilter(selectedFilters);
    buttonRef.current.children[index].style.backgroundColor = '#b9c95a';
    buttonRef.current.children[index].style.color = 'white';
  };

  const isFilterSelected = (category) => {
    return selectedFilters.includes(category);
  };

  const filterList = () => {
    let list = [];
    if(selectedFilters.length) {
      selectedFilters.forEach((filter) => {
        bookItemList.forEach((book) => {
          if (book.category.includes(FILTER_CATEGORIES[filter])) {
            list.push(book);
          }
        });
      });
      list = [...new Map(list.map(item => [item['key'], item])).values()];
      setBookList(list);
    } else {
      setBookList(bookItemList);
    }
  };

  return (
    <div className="category-filters-wrapper" ref={buttonRef}>
      {
        Object.keys(FILTER_CATEGORIES).map((category, index) => {
          return (
            <button
              className="filter-category-wrapper"
              key={index}
              onClick={() => updateFilters(category, index)}
            >
              <p className="filter-text">
                {FILTER_CATEGORIES[category]}
              </p>
            </button>
          );
        })
      }
    </div>
  )
};

export default CategoryFilters;
