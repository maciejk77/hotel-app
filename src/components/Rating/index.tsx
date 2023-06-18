import React, { useContext } from 'react';
import { DataContext } from '../..';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

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
        border: '1px solid black',
        padding: 10,
        margin: '0 5px',
      }}
    >
      {starIds.map((starId) => {
        const isActiveStar = starId <= rating;

        return (
          <div key={starId} onClick={() => handleClick(starId)}>
            <div style={{ fontSize: 30 }}>
              {isActiveStar ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
