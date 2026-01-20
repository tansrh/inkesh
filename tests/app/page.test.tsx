import { render, screen } from '@testing-library/react';
import HomePage from '../../src/app/page';

describe('HomePage', () => {
  it('renders heading and search bar', () => {
    render(<HomePage />);
    expect(screen.getByText(/Tattoo Artists & Studios/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search artists/i)).toBeInTheDocument();
  });
});
