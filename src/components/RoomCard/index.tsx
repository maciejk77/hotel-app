import React from 'react';
import { IRoom } from '../../interfaces';

const RoomCard = ({ room }: { room: IRoom }) => {
  const { name, occupancy, longDescription } = room;

  return (
    <div
      data-testid="room-card"
      className="flex border-t-2 border-black pl-4 py-4 mb-1 justify-between"
    >
      <div className="w-5/12">
        <div className="font-bold text-lg">{name}</div>
        <div>Adults: {occupancy.maxAdults}</div>
        <div>Children: {occupancy.maxChildren}</div>
      </div>

      <div className="w-7/12">
        <div>{longDescription}</div>
      </div>
    </div>
  );
};

export default RoomCard;
