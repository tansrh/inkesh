import { NextRequest, NextResponse } from 'next/server';
import pool from '@/db/pool';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const result = await pool.query('SELECT id, name, bio, portfolio FROM artists WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Artist not found' }, { status: 404 });
    }
    const artist = result.rows[0];
    artist.portfolio = Array.isArray(artist.portfolio)
      ? artist.portfolio
      : JSON.parse(artist.portfolio);
    return NextResponse.json({ artist });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch artist' }, { status: 500 });
  }
}
