import React from 'react';
const Pagination = ({ drinksPerPage, totalDrinks, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a href="!#" onClick={onPageChange}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
