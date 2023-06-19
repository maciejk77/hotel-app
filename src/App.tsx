import React, { useContext } from 'react';
import Rating from './components/Rating';
import Hotels from './components/Hotels';
import Counter from './components/Counter';
import { DataContext } from '.';
import landscape from '../src/assets/city-wide.jpeg';
import './App.css';

const App = () => {
  const {
    adultsCount,
    childrenCount,
    setAdultsCount,
    setChildrenCount,
    rating,
    setRating,
  } = useContext(DataContext);

  return (
    <div className="w-full m-auto">
      <img src={landscape} alt="landscape" />

      <div className="flex justify-center">
        <Rating hasBorder isActive rating={rating} setRating={setRating} />
        <Counter
          label="Adults"
          id="adults"
          count={adultsCount}
          handler={setAdultsCount}
        />
        <Counter
          label="Children"
          id="children"
          count={childrenCount}
          handler={setChildrenCount}
        />
      </div>
      <Hotels />
    </div>
  );
};

export default App;
