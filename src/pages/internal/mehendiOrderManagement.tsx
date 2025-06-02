import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Text,
  useToast,
  Badge,
  ChakraProvider,
  extendTheme,
  Container,
} from '@chakra-ui/react';
import axios from 'axios';

interface Booking {
  id: number;
  name: string;
  contact_number: string;
  email?: string;
  address?: string;
  city?: string;
  pincode?: string;
  service_id: number;
  variant_id: number;
  variant_name?: string;
  total_price?: string;
  service_date: string;
  service_time?: string;
  user_id?: number;
  booking_date: string;
  booking_status?: string;
  order_notes?: string;
}

const theme = extendTheme({
  colors: {
    pink: {
      500: '#D53F8C',
    },
  },
});

export const MehendiOrderManagement: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const toast = useToast();

  useEffect(() => {
    axios
      .get('https://admee.in:3003/api/mehendi/booking')
      .then((response) => {
        setBookings(response.data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
        toast({
          title: 'Error fetching booking data.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="full" p={5}>
        <Heading size="lg" mb={6} textAlign="center" color="pink.500">
          Mehendi Bookings Dashboard
        </Heading>

        {loading ? (
          <Box textAlign="center" mt={10}>
            <Spinner size="xl" color="pink.400" />
          </Box>
        ) : bookings.length === 0 ? (
          <Text textAlign="center" color="gray.500">
            No bookings found.
          </Text>
        ) : (
          <Box overflowX="auto">
            <Table variant="striped" colorScheme="pink" size="sm">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Contact</Th>
                  <Th>City</Th>
                  <Th>Variant</Th>
                  <Th>Service Date</Th>
                  <Th>Time</Th>
                  <Th>Price</Th>
                  <Th>Status</Th>
                  <Th>Notes</Th>
                </Tr>
              </Thead>
              <Tbody>
                {bookings.map((booking) => (
                  <Tr key={booking.id}>
                    <Td>{booking.id}</Td>
                    <Td>{booking.name}</Td>
                    <Td>{booking.contact_number}</Td>
                    <Td>{booking.city || '-'}</Td>
                    <Td>{booking.variant_name || '-'}</Td>
                    <Td>{new Date(booking.service_date).toLocaleDateString()}</Td>
                    <Td>{booking.service_time || '-'}</Td>
                    <Td>₹{booking.total_price || '0'}</Td>
                    <Td>
                      <Badge
                        colorScheme={
                          booking.booking_status === 'pending'
                            ? 'yellow'
                            : booking.booking_status === 'completed'
                            ? 'green'
                            : 'gray'
                        }
                      >
                        {booking.booking_status}
                      </Badge>
                    </Td>
                    <Td>{booking.order_notes || '-'}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
      </Container>
    </ChakraProvider>
  );
};

export default MehendiOrderManagement;
