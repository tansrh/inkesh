// src/utils/api.ts


import 'dotenv/config';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Fetch all artists
export async function fetchArtists() {
  const res = await fetch(`${BASE_URL}/api/artists`, { cache: 'no-cache' });
  const data = await res.json();
  return data.artists || [];
}

// Fetch single artist by id
export async function fetchArtistById(id: string) {
  const res = await fetch(`${BASE_URL}/api/artists/${id}`, { cache: 'force-cache' });
  const data = await res.json();
  return data.artist;
}

// Fetch bookings for an artist
export async function fetchBookingsByArtistId(id: string) {
  const res = await fetch(`${BASE_URL}/api/bookings/${id}`, { cache: 'no-store' });
  const data = await res.json();
  return data.bookings || [];
}

// Create a booking
export async function createBooking(booking: any) {
  const res = await fetch(`${BASE_URL}/api/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking),
  });
  return res.ok;
}
