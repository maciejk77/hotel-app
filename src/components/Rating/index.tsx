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
    <div className="flex w-34" data-testid="rating">
      {starIds.map((starId) => {
        const isActiveStar = starId <= Number(rating);

        return (
          <div
            key={starId}
            onClick={isActive ? () => handleClick(starId) : () => {}}
            data-testid="star"
          >
            <div className="text-2xl">
              {isActiveStar ? (
                <div data-testid="star-filled">
                  <AiFillStar />
                </div>
              ) : (
                <div data-testid="star-outlined">
                  <AiOutlineStar />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
