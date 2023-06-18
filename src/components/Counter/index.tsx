// import React from 'react';

const Counter = ({
  label,
  id,
  handler,
  count,
}: {
  label: string;
  id: string;
  handler: any; // TODO type
  count: number;
}) => {
  const handleCount = (step: number) => {
    if (!count && step === -1) return;
    handler((preVal: number) => (preVal >= 0 ? preVal + step : 0));
  };

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
      <div id={id} onClick={() => handleCount(1)}>
        +
      </div>
      <div>&nbsp;{count}&nbsp;</div>
      <div id={id} onClick={() => handleCount(-1)}>
        -
      </div>
    </div>
  );
};

export default Counter;
