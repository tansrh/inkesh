'use client';
// Home/Listings Page
import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { fetchArtists } from '@/utils/api';
import React from 'react';
export default function HomePage() {
    const [search, setSearch] = useState('');
    const [artists, setArtists] = useState<any[]>([]);

    const getArtists = useCallback(async () => {
        const data = await fetchArtists();
        setArtists(data);
    }, []);

    useEffect(() => {
        getArtists();
    }, []);

    const filteredArtists = artists.filter((artist) =>
        artist.name.toLowerCase().includes(search.toLowerCase()) ||
        artist.bio.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="mx-auto py-8 px-2 m-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h1 className="responsive-heading">Tattoo Artists & Studios</h1>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search artists..."
                    className="border rounded px-3 py-2 w-full sm:w-64"
                />
            </div>
            <div className="flex flex-wrap gap-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6 rounded-xl shadow-inner min-h-screen flex-start items-start space-evenly">
                {filteredArtists.map((artist: any) => (
                    <div key={artist.id} className="bg-white rounded-lg shadow p-4 flex flex-col h-150 min-w-[400px] w-full sm:w-full md:w-[450px] lg:w-[460px] relative">
                        <h2 className="responsive-card-title mb-2">{artist.name}</h2>
                        <div className="mb-2 text-gray-600 h-32 overflow-hidden">
                            {artist.bio.substring(0, 200)}...
                        </div>
                        <div className="flex gap-2 mb-2">
                            {/* Render any 2 random images from /public/images */}
                            {(() => {
                                const staticImages = [
                                    '/images/1.jpg',
                                    '/images/2.jpg',
                                    '/images/3.jpg',
                                    '/images/4.jpg',
                                    '/images/5.jpg',
                                ];
                                const shuffled = staticImages.sort(() => 0.5 - Math.random());
                                const selected = shuffled.slice(0, 2);
                                return selected.map((img, idx) => (
                                    <Image key={idx} src={img} alt={artist.name} width={180} height={80} className="rounded object-cover" />
                                ));
                            })()}
                        </div>
                        <Link href={`/artists/${artist.id}`} className="mt-auto text-blue-600 hover:underline absolute bottom-4">View Profile</Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
