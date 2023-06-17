import React from 'react';
import Rating from './components/Rating';
import Hotels from './components/Hotels';
import Counter from './components/Counter';
// import './App.css';

const App = () => {
  return (
    <>
      <div>Image</div>

      <div
        style={{
          display: 'flex',
        }}
      >
        <Rating />
        <Counter label="Adults" />
        <Counter label="Children" />
      </div>

      <Hotels />
    </>
  );
};

export default App;
