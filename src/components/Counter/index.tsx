import React, { useState } from 'react';

const Counter = ({ label }: { label: string }) => {
  const [count, setCount] = useState();

  // label, min, max, step? 1/-1

  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid blue',
        padding: 10,
        marginRight: 5,
      }}
    >
      <div>&nbsp;{label}&nbsp;</div>
      <div>+</div>
      <div>&nbsp;3&nbsp;</div>
      <div>-</div>
    </div>
  );
};

export default Counter;
