import React from 'react';
import { Box, Grid, GridItem, Heading, Text, Icon } from '@chakra-ui/react';
import { FaUpload, FaUserTie, FaPaintBrush } from 'react-icons/fa'; // Sample icons for forms

export const AdminDashboard = () => {
  // Define the forms with icons and titles
  const forms = [
    {
      id: 1,
      title: 'Rental Product Upload',
      description: 'Upload products available for rent.',
      icon: FaUpload,
    },
    {
      id: 2,
      title: 'Service Partner Registration',
      description: 'Register service partners like tailors and designers.',
      icon: FaUserTie,
    },
    {
      id: 3,
      title: 'Boutique Designer Product Upload',
      description: 'Upload boutique designer products.',
      icon: FaPaintBrush,
    },
    // Add more forms as needed
  ];

  return (
    <Box p={5}>
      <Heading mb={5} color="#b82d92">
        Admin Dashboard
      </Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
        {forms.map((form) => (
          <GridItem
            key={form.id}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
            cursor="pointer"
            bg="#f7f2fa"
          >
            <Icon as={form.icon} w={8} h={8} color="#b82d92" />
            <Heading size="md" mt={4} color="#2d2d2d">
              {form.title}
            </Heading>
            <Text mt={2} color="gray.600">
              {form.description}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
