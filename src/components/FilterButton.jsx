import React from 'react';
import './FilterButton.css';

function FilterButton() {
  return (
    <div>
      <button className="filter__button">
        Filter
        <span className="filter__btn-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.561697 1.53234C0.649514 1.37237 0.81751 1.27295 1 1.27295H11C11.1825 1.27295 11.3505 1.37237 11.4383 1.53234C11.5261 1.69232 11.5198 1.88743 11.4218 2.04139L8 7.41855V9.27295C8 9.46234 7.893 9.63547 7.72361 9.72016L4.72361 11.2202C4.56861 11.2977 4.38454 11.2894 4.23713 11.1983C4.08973 11.1072 4 10.9462 4 10.7729V7.41855L0.57817 2.04139C0.480195 1.88743 0.473881 1.69232 0.561697 1.53234ZM1.91084 2.27295L4.92183 7.00451C4.97288 7.08474 5 7.17786 5 7.27295V9.96393L7 8.96393V7.27295C7 7.17786 7.02712 7.08474 7.07817 7.00451L10.0892 2.27295H1.91084Z" fill="white" />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default FilterButton
