import React, { useContext } from 'react';
import Rating from './components/Rating';
import Hotels from './components/Hotels';
import Counter from './components/Counter';
import { DataContext } from '.';
// import './App.css';

const App = () => {
  const { adultsCount, childrenCount, setAdultsCount, setChildrenCount } =
    useContext(DataContext);

  return (
    <>
      <div>Image</div>

      <div
        style={{
          display: 'flex',
          marginBottom: 10,
        }}
      >
        <Rating />
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
    </>
  );
};

export default App;
