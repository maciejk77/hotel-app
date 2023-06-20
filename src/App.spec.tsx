import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders without crashing', () => {
    render(<App />);
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();

    const image = screen.getAllByRole('img');
    expect(image).toHaveLength(1);

    const counterComponents = screen.getAllByTestId('counter');
    expect(counterComponents).toHaveLength(2);

    const ratingComponent = screen.getAllByTestId('rating');
    expect(ratingComponent).toHaveLength(1);

    const hotelsComponent = screen.getAllByTestId('hotels');
    expect(hotelsComponent).toHaveLength(1);
  });
});
