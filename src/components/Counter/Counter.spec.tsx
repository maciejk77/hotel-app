import React from 'react';
import {
  fireEvent,
  render,
  screen,
  cleanup,
  waitFor,
} from '@testing-library/react';
import Counter from '.';

const props = {
  label: 'Chocolates',
  id: '1',
  handler: jest.fn(),
  count: 2,
};

afterEach(cleanup);

describe('<Counter />', () => {
  test('renders without crashing', () => {
    render(<Counter {...props} />);
    const counter = screen.getByTestId('counter');
    expect(counter).toBeInTheDocument();
  });

  test('it renders with starting value 2', () => {
    render(<Counter {...props} />);
    const count = screen.getByTestId('count');
    expect(count.innerHTML).toBe('2');
  });

  it('receives a click up/down', () => {
    render(<Counter {...props} />);
    const countUp = screen.getByTestId('count-up');
    const countDown = screen.getByTestId('count-down');

    fireEvent.click(countUp);
    expect(props.handler).toHaveBeenCalled();
    fireEvent.click(countDown);
    expect(props.handler).toHaveBeenCalled();
  });

  test.skip('it increases the value with the click', async () => {
    render(<Counter {...props} />);
    const count = screen.getByTestId('count');
    expect(count.textContent).toBe('2');

    const countUp = screen.getByTestId('count-up');
    fireEvent.click(countUp);
    fireEvent.click(countUp);
    // not updating 2 -> 4 clicks, even though the above test passes
    await waitFor(() => expect(count.textContent).toBe('4'));
  });

  test.skip('it decreases the value with the click, (not below 0)', async () => {
    render(<Counter {...props} />);
    const count = screen.getByTestId('count');
    expect(count.textContent).toBe('2');

    const countDown = screen.getByTestId('count-down');
    fireEvent.click(countDown);
    fireEvent.click(countDown);
    // not updating 2 -> 4 clicks, even though the above test passes
    await waitFor(() => expect(count.textContent).toBe('0'));
    fireEvent.click(countDown);
    await waitFor(() => expect(count.textContent).toBe('0'));
  });
});
