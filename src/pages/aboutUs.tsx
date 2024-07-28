import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const AboutUs = () => {
  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" color="pink.600">About Us</Text>
      <Text mt={4} color="gray.700">Information about Cotton Candy.</Text>
    </Box>
  );
};

export default AboutUs;
