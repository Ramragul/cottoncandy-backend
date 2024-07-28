import React from 'react';
import { Box, Heading, Stack, Text, Badge, Spinner, Center, Image, Divider } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import useGetYourOrders from '../hooks/useGetYourOrders';

export const YourOrdersPage: React.FC = () => {
  const { authState } = useAuth();
  const { data: orders = [], error, isLoading } = useGetYourOrders(authState.userId, 'api/cc/user/orders');

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="100vh">
        <Text fontSize="xl" color="red.500">Failed to load orders. Please try again later.</Text>
      </Center>
    );
  }

  return (
    <Box p={8}>
      <Heading as="h1" mb={4} textAlign="center">Your Orders</Heading>
      {orders.length === 0 ? (
        <Text fontSize="xl" textAlign="center">You have not placed any orders yet.</Text>
      ) : (
        <Stack spacing={6}>
          {orders.map((order: any) => (
            <Box
              key={order.id}
              p={6}
              borderWidth={1}
              borderRadius="lg"
              boxShadow="md"
              borderColor="gray.200"
              bg="white"
            >
              <Heading as="h3" size="md">Order ID: {order.id}</Heading>
              <Text>Date: {new Date(order.date).toLocaleDateString()}</Text>
              <Text>Total: ${order.total}</Text>
              <Text>Products Price: ${order.productsPrice}</Text>
              <Text>Security Deposit: ${order.securityDeposit}</Text>
              <Text>Status: <Badge colorScheme={order.status === 'Completed' ? 'green' : 'yellow'}>{order.status}</Badge></Text>
              <Divider my={4} />
              <Text>Items:</Text>
              <Stack pl={4} mt={2} spacing={4}>
                {order.items.map((item: any) => (
                  <Box key={item.id} display="flex" alignItems="center">
                    <Image
                      boxSize="100px"
                      objectFit="contain"
                      src={item.imageURL}
                      alt={item.name}
                      mr={4}
                    />
                    <Box>
                      <Text fontWeight="bold">{item.name}</Text>
                      <Text>Quantity: {item.quantity}</Text>
                      <Text>Price: ${item.price}</Text>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default YourOrdersPage;
