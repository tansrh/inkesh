require('@testing-library/jest-dom');
jest.mock('next/navigation', () => ({
  useParams: () => ({ id: 'test-id' }),
  useRouter: () => ({ push: jest.fn() }),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ bookings: [], artist: null, artists: [] }),
    ok: true,
  })
);