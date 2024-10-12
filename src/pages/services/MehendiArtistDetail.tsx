import React from 'react';
import { Box, Image, Text, VStack, SimpleGrid, Button, Icon } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

type ArtistDetailProps = {
  artist: {
    name: string;
    price: string;
    portfolio: string[];
    services: string[];
    rules: string;
    brandsUsed: string;
  };
  onClose: () => void;
};

export const MehendiArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onClose }) => {
  return (
    <Box p={6}>
      <Button leftIcon={<ArrowBackIcon />} onClick={onClose} mb={4} variant="outline" colorScheme="pink">
        Back to List
      </Button>
      <VStack spacing={4} align="start">
        <Text fontSize="2xl" fontWeight="bold">{artist.name}</Text>
        <Text>Price Range: {artist.price}</Text>
        <Text>Services Offered:</Text>
        <SimpleGrid columns={[1, 2]} spacing={4}>
          {artist.services.map(service => (
            <Text key={service} color="gray.600">- {service}</Text>
          ))}
        </SimpleGrid>
        <Text>Brands Used: {artist.brandsUsed}</Text>
        <Text>Rules: {artist.rules}</Text>

        <Text fontSize="xl" fontWeight="bold" mt={6}>Portfolio:</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {artist.portfolio.map((image, index) => (
            <Image key={index} src={image} alt={`Portfolio image ${index + 1}`} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
