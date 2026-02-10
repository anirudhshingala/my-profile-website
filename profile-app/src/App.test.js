import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navbar brand', () => {
  render(<App />);
  const brandElement = screen.getAllByText(/anirudh shingala/i)[0];
  expect(brandElement).toBeInTheDocument();
});
