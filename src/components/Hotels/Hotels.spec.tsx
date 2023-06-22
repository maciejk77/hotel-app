import React from 'react';
import { render, screen } from '@testing-library/react';
import Hotels from '../Hotels';
import { HOTEL_API_URL } from '../../constants';
import { hotelsDataMock } from '../../mockData';

// const room = {
//   id: '1',
//   name: 'First Room',
//   occupancy: {
//     maxAdults: 3,
//     maxChildren: 3,
//   },
//   longDescription: 'Some description here',
// };

describe('<Hotels />', () => {
  test('renders without crashing', () => {
    render(<Hotels />);
    const hotels = screen.getByTestId('hotels');
    expect(hotels).toBeInTheDocument();
  });

  test.skip('receives correct hotel data from Hotel API', async () => {
    const data = await fetch(HOTEL_API_URL).then((data) => data.json());
    expect(data).toEqual(hotelsDataMock);
  });

  test.skip('renders name, occupancy and description data', async () => {
    render(<Hotels />);

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
