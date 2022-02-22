import React from 'react';
import { NavLink } from 'react-router-dom';

import './FoodNav.css';

const defaultFoods = ["burrito", "salad", "sushi", "lasagna"];
const FoodNav = ({ foods = defaultFoods }) => {
  return (
    <nav className="FoodNav">
      {foods.map(food => (
        <NavLink key={food} className="NavLink" to={(`/food/${food}`)}>Show me the {food}!</NavLink>
      ))}
    </nav>
  );
};

export default FoodNav;
