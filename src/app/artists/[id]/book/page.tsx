// Booking Form Page

'use client';
import { useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createBooking } from '@/utils/api';
import React from 'react';
export default function BookingFormPage() {
  const params = useParams();
  const artistId = params.id as string;
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const booking = {
      name: nameRef.current?.value || '',
      contact: contactRef.current?.value || '',
      preferredDate: dateRef.current?.value || '',
      message: messageRef.current?.value || '',
      artistId,
    };
    try {
      const ok = await createBooking(booking);
      setStatus(ok ? 'success' : 'error');
      if (ok) {
        if (nameRef.current) nameRef.current.value = '';
        if (contactRef.current) contactRef.current.value = '';
        if (dateRef.current) dateRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
        setTimeout(() => router.push('/'), 1500);
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="responsive-heading mb-4">Book your Artist</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input ref={nameRef} name="name" placeholder="Your Name" required className="border p-2 rounded" />
        <input ref={contactRef} name="contact" placeholder="Email or Phone" required className="border p-2 rounded" />
        <input ref={dateRef} name="preferredDate" type="datetime-local" className="border p-2 rounded" />
        <textarea ref={messageRef} rows={6} name="message" placeholder="Message" className="border p-2 rounded" />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-black cursor-pointer border hover:border-black">Submit Booking</button>
      </form>
      {status === 'success' && <p className="text-green-600 mt-4">Booking request sent!</p>}
      {status === 'error' && <p className="text-red-600 mt-4">Failed to send booking. Try again.</p>}
    </main>
  );
}
