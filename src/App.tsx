import React, { useContext } from 'react';
import Rating from './components/Rating';
import Hotels from './components/Hotels';
import Counter from './components/Counter';
import { DataContext } from '.';
import landscape from '../src/assets/city-wide.jpeg';

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
    <div className="mx-auto w-[800px] relative">
      <img className="m-auto" src={landscape} alt="landscape" />

      <div className="flex justify-center items-center m-auto p-4 border-2 bg-white outline outline-2 outline-white border-black w-[500px] z-1 absolute top-[100px] left-[150px]">
        <Rating isActive rating={rating} setRating={setRating} />
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
