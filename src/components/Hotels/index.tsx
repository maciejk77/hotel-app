import React, { useContext, useEffect } from 'react';
import { DataContext } from '../..';
import { HOTEL_API_URL } from '../../constants';
import HotelCard from '../HotelCard';

const Hotels = () => {
  const { hotels, setHotels } = useContext(DataContext);

  console.log(hotels);
  useEffect(() => {
    fetch(HOTEL_API_URL)
      .then((res) => res.json())
      .then((data) => setHotels(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <HotelCard hotel={hotel} />
        </div>
      ))}
    </>
  );
};

export default Hotels;
