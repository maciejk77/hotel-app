import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Rating from '../Rating';

const props = {
  rating: '3',
  numberOfStars: 5,
  setRating: jest.fn(),
  isActive: false,
};

describe('<Rating />', () => {
  test('renders without crashing', () => {
    render(<Rating {...props} />);
    const rating = screen.getByTestId('rating');
    expect(rating).toBeInTheDocument();
    const stars = screen.getAllByTestId('star');
    expect(stars).toHaveLength(5);
  });

  test('renders with correct number of active/inactive stars', () => {
    render(<Rating {...props} />);
    const starsFilled = screen.getAllByTestId('star-filled');
    expect(starsFilled).toHaveLength(3);

    const starsOutlined = screen.getAllByTestId('star-outlined');
    expect(starsOutlined).toHaveLength(2);
  });

  test.skip('receives the click and triggers stars rating update', () => {
    render(<Rating {...props} isActive={true} />); // click from star with proper handler ie setRating
    const stars = screen.getAllByTestId('star');
    const starsFilled = screen.getAllByTestId('star-filled');
    const starsOutlined = screen.getAllByTestId('star-outlined');

    // click on first star
    const firstStar = stars[0];
    fireEvent.click(firstStar); // => not triggered
    expect(props.setRating).toHaveBeenCalledTimes(1); // => 0?
    expect(starsFilled).toHaveLength(1);
    expect(starsOutlined).toHaveLength(4);

    // click on fourth star
    const fourthStar = stars[3];
    fireEvent.click(fourthStar); // => not triggered
    expect(props.setRating).toHaveBeenCalledTimes(1); // => 0?
    expect(starsFilled).toHaveLength(4);
    expect(starsOutlined).toHaveLength(1);
  });

  test.skip('receives the click and DO NOT trigger stars rating update', () => {
    // FALSE POSITIVE atm, 3/2 are default values components mounts with

    render(<Rating {...props} />); // click from star with dummy handler eg () => {}
    const stars = screen.getAllByTestId('star');
    const starsFilled = screen.getAllByTestId('star-filled');
    const starsOutlined = screen.getAllByTestId('star-outlined');

    // click on first star
    const firstStar = stars[0];
    fireEvent.click(firstStar);
    fireEvent.click(firstStar);
    expect(props.setRating).toHaveBeenCalledTimes(0);
    expect(starsFilled).toHaveLength(3);
    expect(starsOutlined).toHaveLength(2);
  });
});
