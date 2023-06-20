import React from 'react';
import { IHotel } from '../../interfaces';
import Rooms from '../Rooms';
import Images from '../Images';
import Rating from '../Rating';

const HotelCard = ({ hotel }: { hotel: IHotel }) => {
  const { id, name, address1, address2, starRating, images } = hotel;

  return (
    <div className="border-2 border-black mb-5 p-4">
      <div className="flex">
        <Images images={images} />

        <div className="w-full px-4 text-xl">
          <div className="font-bold">{name}</div>
          <div>{address1}</div>
          <div>{address2}</div>
        </div>

        <Rating rating={starRating} />
      </div>

      <Rooms hotelId={id} />
    </div>
  );
};

export default HotelCard;
