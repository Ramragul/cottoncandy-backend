import React, { useState } from 'react';
import { Grid, Box, Text, Image, Button } from '@chakra-ui/react';
import { MehendiArtistCard } from './MehendiArtistCard';
import { MehendiArtistDetail } from './MehendiArtistDetail';

type Artist = {
  id: number;
  name: string;
  price: string;
  image: string;
  services: string[];
  portfolio: string[];
  rules: string;
  brandsUsed: string;
};

const mehendiArtists: Artist[] = [
  {
    id: 1,
    name: 'Priya Mehendi Artist',
    price: '₹2000-5000',
    image: '/images/artist1.jpg',
    services: ['Bridal Mehendi', 'Party Mehendi', 'Festive Mehendi'],
    portfolio: ['/images/work1.jpg', '/images/work2.jpg', '/images/work3.jpg'],
    rules: 'Booking at least 3 days in advance is required.',
    brandsUsed: 'Natural Mehendi Brands',
  },
  {
    id: 2,
    name: 'Radhika Mehendi Creations',
    price: '₹3000-7000',
    image: '/images/artist2.jpg',
    services: ['Bridal Mehendi', 'Custom Designs', 'Traditional Mehendi'],
    portfolio: ['/images/work4.jpg', '/images/work5.jpg', '/images/work6.jpg'],
    rules: 'Cancellation 24 hours in advance.',
    brandsUsed: 'Organic Mehendi',
  },
  // Add more artists
];

export const MehendiArtistList: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  return (
    <Box p={6}>
      {selectedArtist ? (
        <MehendiArtistDetail artist={selectedArtist} onClose={() => setSelectedArtist(null)} />
      ) : (
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
          {mehendiArtists.map(artist => (
            <MehendiArtistCard key={artist.id} artist={artist} onClick={() => handleArtistClick(artist)} />
          ))}
        </Grid>
      )}
    </Box>
  );
};
