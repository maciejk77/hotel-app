import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { TDispatch } from '../../interfaces';

const Rating = ({
  numberOfStars = 5,
  rating = '5',
  setRating = () => {},
  isActive = false,
}: {
  numberOfStars?: number;
  rating: string | number;
  setRating?: TDispatch;
  isActive?: boolean;
}) => {
  const starIds = Array.from({ length: numberOfStars }, (_, i) => i + 1);

  const handleClick = (e: React.SetStateAction<number>) => {
    setRating(e);
  };

  return (
    <div className="flex w-36">
      {starIds.map((starId) => {
        const isActiveStar = starId <= Number(rating);

        return (
          <div
            key={starId}
            onClick={isActive ? () => handleClick(starId) : () => {}}
          >
            <div className="text-2xl">
              {isActiveStar ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
