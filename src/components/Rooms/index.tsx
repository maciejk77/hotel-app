import React, { useState, useEffect, useContext } from 'react';
import { ROOM_API_BASE_URL } from '../../constants';
import { IOccupancy, IRoom, IRooms } from '../../interfaces';
import { DataContext } from '../..';
import RoomCard from '../RoomCard';
const Rooms = ({ hotelId }: { hotelId: string }) => {
  const {
    adultsCount,
    childrenCount,
    // roomsData,
    // setRoomsData
  } = useContext(DataContext);

  const [roomsData, setRoomsData] = useState<any>([]);
  const { rooms }: { rooms: IRoom[] } = roomsData;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${ROOM_API_BASE_URL}/${hotelId}`);
      const { rooms }: IRooms = await res.json();

      const updatedRooms = rooms?.filter(
        ({ occupancy }: { occupancy: IOccupancy }) =>
          adultsCount <= occupancy.maxAdults &&
          childrenCount <= occupancy.maxChildren
      );

      setRoomsData((prevData: any) => ({ ...prevData, rooms: updatedRooms }));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adultsCount, childrenCount]);

  return (
    <div data-testid="rooms">
      {rooms?.length ? (
        rooms?.map((room: IRoom) => <RoomCard key={room.id} room={room} />)
      ) : (
        <div className="border-2 border-white p-3">
          No matching rooms for your selection
        </div>
      )}
    </div>
  );
};

export default Rooms;
