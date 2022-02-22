import React from 'react';
import FoodNav from './FoodNav';
import Food from './Food';
import FoodHeader from './FoodHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <FoodNav />
      <Routes>
        <Route path="/" element={<FoodHeader />} />
        <Route path="/food/:name" element={<Food />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
