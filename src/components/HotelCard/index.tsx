import React from 'react';
import { IHotel } from '../../interfaces';
import Rooms from '../Rooms';
import Images from '../Images';
import Rating from '../Rating';

const HotelCard = ({ hotel }: { hotel: IHotel }) => {
  const { id, name, address1, address2, starRating, images } = hotel;

  return (
    <div data-testid="hotel-card" className="border-2 border-black mb-5">
      <div className="flex">
        <div className="mt-3 ml-3 mb-1 bg-black">
          <Images images={images} />
        </div>

        <div className="w-full ml-4 mt-3 text-xl">
          <div className="font-bold">{name}</div>
          <div>{address1}</div>
          <div>{address2}</div>
        </div>

        <div className="mt-3 mr-3">
          <Rating rating={starRating} />
        </div>
      </div>

      <Rooms hotelId={id} />
    </div>
  );
};

export default HotelCard;
