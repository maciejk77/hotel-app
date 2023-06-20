import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomCard from '../RoomCard';

const room = {
  id: '1',
  name: 'First Room',
  occupancy: {
    maxAdults: 3,
    maxChildren: 3,
  },
  longDescription: 'Some description here',
};

describe('<RoomCard />', () => {
  test('renders without crashing', () => {
    render(<RoomCard room={room} />);
    const roomCard = screen.getByTestId('room-card');
    expect(roomCard).toBeInTheDocument();
  });

  test('renders name, occupancy and description data', async () => {
    render(<RoomCard room={room} />);

    const name = await screen.findByText(/First Room/);
    expect(name).toBeInTheDocument();

    const adultsCount = await screen.findByText(/Adults:/);
    expect(adultsCount).toBeInTheDocument();

    const childrenCount = await screen.findByText(/Children:/);
    expect(childrenCount).toBeInTheDocument();

    const description = await screen.findByText(/Some description here/);
    expect(description).toBeInTheDocument();
  });
});
