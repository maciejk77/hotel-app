import React, { useEffect, useState } from 'react';
import { HOTEL_API_URL } from '../../constants';
import HotelCard from '../HotelCard';
import { IHotel } from '../../interfaces';

const Hotels = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    fetch(HOTEL_API_URL)
      .then((res) => res.json())
      .then((data) => setHotels(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {hotels?.map((hotel) => (
        <div key={hotel.id}>
          <HotelCard hotel={hotel} />
        </div>
      ))}
    </>
  );
};

export default Hotels;
