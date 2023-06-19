import React from 'react';
import { IRoom } from '../../interfaces';

const RoomCard = ({ room }: { room: IRoom }) => {
  const { name, occupancy, longDescription } = room;

  return (
    <div className="flex border-2 border-black p-3 mb-1 px-6 justify-between">
      <div className="w-1/3">
        <div>{name}</div>
        <div>Adults: {occupancy.maxAdults}</div>
        <div>Children: {occupancy.maxChildren}</div>
      </div>

      <div className="w-2/3">
        <div>{longDescription}</div>
      </div>
    </div>
  );
};

export default RoomCard;
