import { render, screen } from '@testing-library/react';
import BookingFormPage from '../../../../../src/app/artists/[id]/book/page';
import '@testing-library/jest-dom';
describe('BookingFormPage', () => {
  it('renders booking form heading', () => {
    render(<BookingFormPage />);
    expect(screen.getByText(/Book your Artist/i)).toBeInTheDocument();
  });
});
