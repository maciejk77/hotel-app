import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelCard from '../HotelCard';

const hotel = {
  id: '1',
  name: 'Hotel Waldorf Astoria',
  address1: 'Sesame Street 123',
  address2: 'Floor 99',
  starRating: '3',
  images: [{ url: 'http:/imagesfoo.com/1' }, { url: 'http:/imagesfoo.com/2' }],
};

describe('<HotelCard />', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<HotelCard hotel={hotel} />);
  });

  test('renders without crashing', () => {
    const hotelCard = screen.getByTestId('hotel-card');
    expect(hotelCard).toBeInTheDocument();
  });

  test('renders name, occupancy, description data and images, rating components', async () => {
    const name = await screen.findByText(/Hotel Waldorf Astoria/);
    expect(name).toBeInTheDocument();

    const address1 = await screen.findByText(/Sesame Street 123/);
    expect(address1).toBeInTheDocument();

    const address2 = await screen.findByText(/Floor 99/);
    expect(address2).toBeInTheDocument();

    const ratingComponent = await screen.findByTestId('rating');
    expect(ratingComponent).toBeInTheDocument();

    const imagesComponent = await screen.findAllByTestId('images');
    expect(imagesComponent).toHaveLength(1);
  });
});
