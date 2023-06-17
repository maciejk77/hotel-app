import React, { useState, useEffect } from 'react';
import { ROOM_API_BASE_URL } from '../../constants';
import { IRoom } from '../../interfaces';
// import { IRatePlan, IRoom, IRooms } from '../../interfaces';
import RoomCard from '../RoomCard';

const Rooms = ({ hotelId }: { hotelId: string }) => {
  const [roomsData, setRoomsData] = useState<any>([]); // TODO: types

  const { rooms }: { rooms: any } = roomsData; // TODO: types

  useEffect(() => {
    fetch(`${ROOM_API_BASE_URL}/${hotelId}`)
      .then((res) => res.json())
      .then((data) => setRoomsData(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      {rooms?.map((room: IRoom) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </>
  );
};

export default Rooms;
