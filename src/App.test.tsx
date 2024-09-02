import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/testUtils';

test('renders the title', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByRole('heading', { level: 1, name: /jokes app/i });
  expect(linkElement).toBeInTheDocument();
});

test("renders the generate funny jokes button", () => {
  renderWithProviders(<App />);
  expect(screen.getByRole('button', { name: /generate funny jokes/i })).toBeInTheDocument();
});