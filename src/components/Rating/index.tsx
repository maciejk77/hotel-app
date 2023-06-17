import React, { useContext } from 'react';
import { DataContext } from '../..';

const Rating = () => {
  const { rating, setRating } = useContext(DataContext);

  const starIds = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleClick = (e: React.SetStateAction<number>) => {
    setRating(e);
  };

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {starIds.map((starId) => {
        const isActiveStar = starId <= rating;

        return (
          <div
            key={starId}
            onClick={() => handleClick(starId)}
            style={{ color: isActiveStar ? 'red' : 'black' }}
          >
            <div style={{ fontSize: 40 }}>&nbsp;*&nbsp;</div>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
