import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('increments count when increment button is clicked', () => {
    render(<App />);
    
    const incrementButton = screen.getByText('Increment');
    const countText = screen.getByText(/Count:/);
    
    expect(countText).toHaveTextContent('Count: 0');
    
    fireEvent.click(incrementButton);
    
    expect(countText).toHaveTextContent('Count: 1');
  });
});
