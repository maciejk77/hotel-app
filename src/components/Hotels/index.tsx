import React, { useContext, useEffect, useState } from 'react';
import { HOTEL_API_URL } from '../../constants';
import HotelCard from '../HotelCard';
import { IHotel } from '../../interfaces';
import { DataContext } from '../..';

const Hotels = () => {
  const { rating } = useContext(DataContext);
  const [hotels, setHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    fetch(HOTEL_API_URL)
      .then((res) => res.json())
      .then((data) =>
        data.filter(
          ({ starRating }: { starRating: string }) =>
            Number(starRating) >= rating
        )
      )
      .then((data) => setHotels(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

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
