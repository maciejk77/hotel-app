import React from 'react';
import { render, screen } from '@testing-library/react';
import Images from '../Images';

const props = {
  images: [
    { url: 'http://image-stockx.com/1' },
    { url: 'http://image-stockx.com/2' },
    { url: 'http://image-stockx.com/3' },
  ],
};

describe('<Images />', () => {
  test('renders without crashing', () => {
    render(<Images {...props} />);
    const imageComponent = screen.getByTestId('images');
    expect(imageComponent).toBeInTheDocument();
    const image = screen.getAllByAltText('hotel');
    expect(image).toHaveLength(1);
  });

  // TBC more tests
});
