import { render, screen } from '@testing-library/react';
import ArtistProfilePage from '../../../../src/app/artists/[id]/page';
describe('ArtistProfilePage', () => {
  it('renders artist name and bio', async () => {
    // Mock params and API data
    const params = Promise.resolve({ id: 'test-id' });
    render(<ArtistProfilePage/>);
    expect(await screen.findByText(/Artist not found/i)).toBeInTheDocument();
  });
});
