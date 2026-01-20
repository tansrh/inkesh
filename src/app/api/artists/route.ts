// src/app/api/artists/route.ts
import { NextResponse } from 'next/server';
import pool from '@/db/pool';

export async function GET() {
  try {
    const result = await pool.query('SELECT id, name, bio, portfolio FROM artists');
    // Parse portfolio JSON for each artist
    const artists = result.rows.map((artist: any) => ({
      ...artist,
      portfolio: Array.isArray(artist.portfolio)
        ? artist.portfolio
        : JSON.parse(artist.portfolio),
    }));
    return NextResponse.json({ artists });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch artists' }, { status: 500 });
  }
}
