import React, {useState, useRef} from 'react';
import FILTER_CATEGORIES from "../../constants/filter-categories";
import "./index.css";

const CategoryFilters = () => {
  const [selectedFilters, setSelectedFilter] = useState([]);
  const buttonRef = useRef();

  const updateFilters = (category, index) => {
    isFilterSelected(category) ? removeFilter(category, index) : addFilter(category, index);
    console.log(selectedFilters);
  };

  const removeFilter = (category, index) => {
    const filterIndex = selectedFilters.indexOf(category);
    selectedFilters.splice(filterIndex, 1);
    setSelectedFilter(selectedFilters);
    buttonRef.current.children[index].style.backgroundColor = 'white';
  };

  const addFilter = (category, index) => {
    selectedFilters.push(category);
    setSelectedFilter(selectedFilters);
    console.log(buttonRef);
    buttonRef.current.children[index].style.backgroundColor = '#dcf9ec';
  };

  const isFilterSelected = (category) => {
    return selectedFilters.includes(category);
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
