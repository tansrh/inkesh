import { NextRequest, NextResponse } from 'next/server';
import pool from '@/db/pool';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { artistId, name, contact, preferredDate, message } = data;
    if (!artistId || !name || !contact) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    await pool.query(
      'INSERT INTO bookings (artist_id, name, contact, preferred_date, message) VALUES ($1, $2, $3, $4, $5)',
      [artistId, name, contact, preferredDate, message]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}
