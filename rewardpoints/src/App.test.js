import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reward points information', () => {
  render(<App />);
  const rewardPointsElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h1' && content.includes('Reward Points');
  });
  expect(rewardPointsElement).toBeInTheDocument();
});