import React from 'react';
import { IRoom } from '../../interfaces';

const RoomCard = ({ room }: { room: IRoom }) => (
  <div className="flex border-2 border-gray-300 p-4 mb-1 justify-between">
    <div className="w-1/4">
      <div>{room.name}</div>
      <div>Adults: {room.occupancy.maxAdults}</div>
      <div>Children: {room.occupancy.maxChildren}</div>
    </div>

    <div className="w-3/4">
      <div>{room.longDescription}</div>
    </div>
  </div>
);

export default RoomCard;
