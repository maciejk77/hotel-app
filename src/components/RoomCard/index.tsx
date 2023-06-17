import React from 'react';

const RoomCard = ({ room }: { room: any }) => {
  // TODO types
  return (
    <div style={styles.container}>
      <div style={{ width: '25%' }}>
        <div>{room.name}</div>
        <div>Adults: {room.occupancy.maxAdults}</div>
        <div>Children: {room.occupancy.maxChildren}</div>
      </div>

      <div style={{ width: '100%' }}>
        <div>{room.longDescription}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid green',
    marginBottom: 10,
    padding: 25,
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default RoomCard;
