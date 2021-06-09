import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const AppBar = screen.getByText(/AppBar/i);
  expect(AppBar).toBeInTheDocument();
});
