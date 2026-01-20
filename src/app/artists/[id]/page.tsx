'use client';
// Artist Profile Page
import { useState, useCallback, useEffect } from 'react';
import { fetchArtistById, fetchBookingsByArtistId } from '@/utils/api';
import Image from 'next/image';
import React from 'react';
import { useParams } from 'next/navigation';
function BookingList({ bookings }: { bookings: any[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking.id} className="border rounded p-4 bg-gray-50">
              <div className="font-semibold text-blue-700">{booking.name}</div>
              <div className="text-gray-600 text-sm">{booking.contact}</div>
              <div className="text-gray-700 mt-1">{booking.message}</div>
              <div className="text-xs text-gray-400 mt-2">Preferred: {booking.preferred_date ? new Date(booking.preferred_date).toLocaleString() : 'N/A'}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function ArtistProfilePage() {
  const params = useParams();
  const artistId = params.id as string;
  const [artist, setArtist] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);

  const getArtist = useCallback(async () => {
    const data = await fetchArtistById(artistId);
    setArtist(data);
  }, [artistId]);

  const getBookings = useCallback(async () => {
    const data = await fetchBookingsByArtistId(artistId);
    setBookings(data);
  }, [artistId]);

  useEffect(() => {
    getArtist();
    getBookings();
  }, [getArtist, getBookings]);

  if (!artist) {
    return <div className="p-8">Artist not found.</div>;
  }
  return (
    <main className="max-w-2xl mx-auto py-8 px-4 border-l-4 border-black-600 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{artist.name}</h1>
      <p className="mb-4 text-gray-600">{artist.bio}</p>
      <div className="grid grid-cols-2 gap-4 mb-6 max-[450px]:grid-cols-1">
        {/*
        {artist.portfolio.map((img: string, idx: number) => (
          <Image key={idx} src={img} alt={artist.name} width={240} height={240} className="rounded object-cover" />
        ))}
        */}
        {/* TODO: Render all 5 static images from /public/images for this artist */}
      </div>
      <a href={`/artists/${artist.id}/book`} className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-black mb-8">Book Now</a>
      <BookingList bookings={bookings} />
    </main>
  );
}

