import React from 'react';
import { Box, Grid, GridItem, Heading, Text, Icon, Button } from '@chakra-ui/react';
import { FaUpload, FaUserTie, FaPaintBrush } from 'react-icons/fa'; // Sample icons for forms
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const AdminDashboard = () => {
  // Define the forms with icons and titles
  const navigate = useNavigate();
  const {authState} = useAuth();
  const userRole = authState.userRole;
  const forms = [
    {
      id: 1,
      title: 'Rental Product Upload',
      description: 'Upload products available for rent.',
      icon: FaUpload,
      navigate : '/rentalProductUpload'
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
      navigate : '/tailoringProductUpload'
    },
    // Add more forms as needed
  ];

  return (
    <>
    { (userRole!= "user" && userRole!= undefined) ? (
    <>
    <Box p={5}>
      <Heading mb={5} color="#b82d92">
        Admin Dashboard
      </Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
        {forms.map((form) => (
          <GridItem
          onClick={()=>navigate(form.navigate)}
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
      </> ) : ( <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="gray.50"
      >
        <Heading as="h1" size="2xl" mb={4} color="red.500">
          Access Denied
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          You don't have permission to view this page.
        </Text>
        <Button
          colorScheme="pink"
          size="lg"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Box>)
    }
    </>
  );
};

export default AdminDashboard;
