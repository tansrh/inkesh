import pool from "@/db/pool";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const result = await pool.query('SELECT * FROM bookings WHERE artist_id = $1', [id]);
        return NextResponse.json({ bookings: result.rows });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}