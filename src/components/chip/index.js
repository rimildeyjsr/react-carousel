import React from 'react';
import './index.css';

const Chip = ({name}) => {
  return (
    <div className="chip-wrapper">
      <p className="chip-text">
        {name}
      </p>
    </div>
  );
};

export default Chip;
