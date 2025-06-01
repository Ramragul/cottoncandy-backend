import React from 'react';
import { Box, Image, Text, Button, VStack } from '@chakra-ui/react';

type ArtistCardProps = {
  artist: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  onClick: () => void;
};

export const MehendiArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      p={4} 
      boxShadow="md"
      _hover={{ boxShadow: 'lg', cursor: 'pointer' }}
      onClick={onClick}
    >
      <Image src={artist.image} alt={artist.name} />
      <VStack mt={4} spacing={2} align="start">
        <Text fontWeight="bold" fontSize="lg">{artist.name}</Text>
        <Text color="gray.500">Price: {artist.price}</Text>
        <Button colorScheme="pink" size="sm">View Details</Button>
      </VStack>
    </Box>
  );
};
