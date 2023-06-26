import React, { useContext, useEffect } from 'react';
import { HOTEL_API_URL } from '../../constants';
import HotelCard from '../HotelCard';
import { DataContext } from '../..';

const Hotels = () => {
  const {
    rating,
    hotels,
    setHotels,
    // roomsData: { rooms },
  } = useContext(DataContext);

  // Provided that each room had foreign key ie hotelId the below could control rendering of HotelCard
  // based on selection adults/children/rating e.g. won't show HotelCard at all if no available rooms
  // as oppose to "No matching rooms for your selection" message at the moment

  // e.g.
  // const canShow = (id: any) => rooms?.map((room) => room.id).includes(id);

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
    <div className="mt-10" data-testid="hotels">
      {hotels?.map((hotel) => (
        // canShow(hotel.id) && // see comments above
        <div key={hotel.id}>
          <HotelCard hotel={hotel} />
        </div>
      ))}
    </div>
  );
};

export default Hotels;
