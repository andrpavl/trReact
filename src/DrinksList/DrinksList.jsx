import DrinksItem from 'components/DrinksItem/DrinksItem';
import {
  StyledList,
  StyledSelectInput,
  StyledTextInput,
  StyledTitle,
} from './StyledDrinksList';
import React, { useState } from 'react';
import Pagination from 'components/Pagination';

export const DrinksList = ({ drinks }) => {
  //   const [driks, setDriks] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [drinksPerPage] = useState(9);

  //   const lastDrinkIndex = currentPage * drinksPerPage;

  //   const firstDinkIndex = lastDrinkIndex - drinksPerPage;
  //   const currentDrink = drinks.slice(firstDinkIndex, lastDrinkIndex);
  const [currentPage, setCurrentPage] = useState(1);
  const drinksPerPage = 9;

  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

  const totalPages = Math.ceil(drinks.length / drinksPerPage);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <StyledTitle>Drinks</StyledTitle>
      <div>
        <StyledTextInput type="text" placeholder="Enter the text" />
        <StyledSelectInput name="pets" id="pet-select">
          <option value="">All categories</option>
          <option value="ordinary drink">Ordinary drink</option>
          <option value="snake">Snake</option>
          <option value="other/Unknow">Other/Unknow</option>
          <option value="cocoa">Cocoa</option>
          <option value="shot">Shot</option>
          <option value="coffee/Tea">Coffee/Tea</option>
          <option value="homemade Liqueur">Homemade Liqueur</option>
          <option value="punch / Party Drink">Punch / Party Drink</option>
          <option value="beer">Beer</option>
          <option value="Soft Drink">Soft Drink</option>
        </StyledSelectInput>
        <StyledSelectInput name="pets" id="pet-select">
          <option value="">Ingredients</option>
          <option value="Light rum">Light rum</option>
          <option value="Applejack">Applejack</option>
          <option value="Gin">Gin</option>
          <option value="Dark rum">Dark rum</option>
          <option value=" Sweet Vermouth">Sweet Vermouth</option>
          <option value="Strawberry">Strawberry</option>
          <option value="Scotch">Scotch</option>
          <option value="Apricot brandy">Apricot brandy</option>
        </StyledSelectInput>
      </div>
      <StyledList>
        {currentDrinks.map((drink, index) => (
          <li key={drink._id}>
            <DrinksItem
              drinkThumb={drink.drinkThumb}
              name={drink.drink}
            ></DrinksItem>
          </li>
        ))}
      </StyledList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
