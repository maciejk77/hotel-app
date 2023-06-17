import React from 'react';
import { IHotel } from '../../interfaces';
import Rooms from '../Rooms';

const HotelCard = ({ hotel }: { hotel: IHotel }) => {
  const { id, name, address1, address2, starRating, images } = hotel;

  return (
    <div style={styles.container}>
      <div style={styles.flex}>
        <div>images here</div>

        <div>
          <div>{name}</div>
          <div>{address1}</div>
          <div>{address2}</div>
        </div>

        <div>{starRating}</div>
      </div>
      <Rooms hotelId={id} />
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    border: '1px solid red',
    width: '80%',
    marginBottom: 25,
    padding: 5,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px dotted blue',
    padding: 20,
    marginBottom: 10,
  },
};

export default HotelCard;
