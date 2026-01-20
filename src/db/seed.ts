// src/db/seed.ts
import pool from './pool';
import 'dotenv/config';
async function seed() {
  const artists = [
    {
      name: 'Luna Ink',
      bio: 'Specializes in fine line and minimal tattoos. 8 years experience. Luna is known for her delicate, precise work and calming studio atmosphere. She loves collaborating with clients to create meaningful, subtle designs that stand the test of time. Her portfolio features minimalist botanicals, script, and custom micro-tattoos.',
      portfolio: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      ],
    },
    {
      name: 'Shadow Studio',
      bio: 'Bold, blackwork, and geometric designs. 10+ years in the industry. Shadow Studio is renowned for its striking, high-contrast tattoos and innovative geometric patterns. The lead artist has a background in graphic design and brings a modern edge to every piece, from large sleeves to intricate mandalas.',
      portfolio: [
        'https://images.unsplash.com/photo-1464983953574-0892a716854b',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      ],
    },
    {
      name: 'Color Craze',
      bio: 'Vibrant watercolor tattoos and creative color blending. 6 years experience. Color Craze is all about expressive, painterly tattoos that pop with energy. The artist specializes in blending colors seamlessly and creating custom artwork inspired by nature, animals, and abstract forms. Every tattoo is a unique work of art.',
      portfolio: [
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      ],
    },
    {
      name: 'Neo Trad Collective',
      bio: 'Neo-traditional and illustrative tattoos. Award-winning studio. Neo Trad Collective blends classic tattoo traditions with modern illustration techniques. Their team has won multiple awards for their bold lines, vibrant colors, and storytelling through art. They welcome custom projects and large-scale pieces.',
      portfolio: [
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368',
      ],
    },
    {
      name: 'Dot & Line Atelier',
      bio: 'Dotwork, linework, and abstract geometric art. 5 years experience. Dot & Line Atelier is a haven for lovers of abstract and geometric tattoos. The artist is passionate about creating visually stunning pieces using only dots and lines, often inspired by architecture, sacred geometry, and modern art.',
      portfolio: [
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b',
        'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
      ],
    },
  ];
  for (const artist of artists) {
    await pool.query(
      'INSERT INTO artists (name, bio, portfolio) VALUES ($1, $2, $3::jsonb)',
      [artist.name, artist.bio, JSON.stringify(artist.portfolio)]
    );
  }
  await pool.end();
  console.log('Seeded artists!');
}
seed().catch((e) => {
  console.error('Seeding failed:', e);
  if (e instanceof Error && e.stack) {
    console.error(e.stack);
  }
  process.exit(1);
});
