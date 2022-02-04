import { render, screen } from '@testing-library/react';
import App from './App';

test('directed', () => {
  render(<App />);
  const linkElement = screen.getByText(/directed/i);
  expect(linkElement).toBeInTheDocument();
});
