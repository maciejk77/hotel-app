import React from 'react';
import { IRoom } from '../../interfaces';

const RoomCard = ({ room }: { room: IRoom }) => {
  const { name, occupancy, longDescription } = room;

  return (
    <div
      data-testid="room-card"
      className="flex border-2 border-black p-3 mb-1 px-6 justify-between"
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
