import React from 'react';
import {
  Box,
  Text,
  Grid,
  VStack,
  Badge,
} from '@chakra-ui/react';
import useGetAllOrders from '../../hooks/useGetAllOrders';
import { OrderItem } from '../../types/OrderItem';

const STATUS_COLUMNS = [
  'Created',
  'Processing',
  'Stitching',
  'Quality Check',
  'Ready',
  'Delivered',
];

export const TailoringKanbanBoard: React.FC = () => {
  const { data: orders = [] } =
    useGetAllOrders('/api/cc/tailoring/orders?showAll=false');

  return (
    <Box p={8}>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>
        Tailoring Workflow Board
      </Text>

      <Grid templateColumns="repeat(6,1fr)" gap={6}>
        {STATUS_COLUMNS.map((status) => (
          <Box
            key={status}
            bg="gray.50"
            p={4}
            borderRadius="lg"
            minH="400px"
          >
            <Text fontWeight="bold" mb={4}>
              {status}
            </Text>

            <VStack spacing={3} align="stretch">
              {orders
                .filter((o: OrderItem) => o.order_status === status)
                .map((order: OrderItem) => (
                  <Box
                    key={order.order_id}
                    bg="white"
                    p={3}
                    borderRadius="md"
                    boxShadow="sm"
                  >
                    <Text fontWeight="bold">#{order.order_id}</Text>
                    <Text fontSize="sm">{order.name}</Text>
                    <Badge mt={2}>{order.order_assignment || 'Unassigned'}</Badge>
                  </Box>
                ))}
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TailoringKanbanBoard;
