import React from 'react';
import { IHotel } from '../../interfaces';
import Rooms from '../Rooms';
import Images from '../Images';
import Rating from '../Rating';

const HotelCard = ({ hotel }: { hotel: IHotel }) => {
  const { id, name, address1, address2, starRating, images } = hotel;

  return (
    <div className="m-auto mb-1 p-1 w-3/4">
      <div className="flex border-2 h-64 border-gray-300 bg-gray-300 p-3 justify-between">
        <Images images={images} />

        <div>
          <div>{name}</div>
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
