// Version 1 : Working Version


// import React, { useState } from 'react';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Box,
//   Text,
//   Spinner,
//   Select,
//   Input,
//   Stack,
//   useMediaQuery,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import useGetAllOrders from '../../hooks/useGetAllOrders';
// import { OrderItem } from '../../types';



// export const TailoringOrderManagement = () => {
//   const { data: orders = [], error, isLoading } = useGetAllOrders('api/cc/tailoring/orders');
//   const [sortKey, setSortKey] = useState<keyof OrderItem>('order_date');
//   const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
//   const [searchOrderId, setSearchOrderId] = useState('');
//   const navigate = useNavigate();
//   const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

//   if (isLoading) return <Spinner size="xl" />;
//   if (error) return <Text color="red.500">Failed to load orders</Text>;

//   // Filter orders based on search input
//   const filteredOrders = orders.filter(order =>
//     order.order_id.toString().includes(searchOrderId)
//   );

//   // Sorting logic
//   const sortedOrders = [...filteredOrders].sort((a, b) => {
//     const valueA = a[sortKey];
//     const valueB = b[sortKey];

//     if (typeof valueA === 'string' && typeof valueB === 'string') {
//       return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
//     }

//     if (typeof valueA === 'number' && typeof valueB === 'number') {
//       return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
//     }

//     return 0;
//   });

//   const handleSortChange = (key: keyof OrderItem) => {
//     if (sortKey === key) {
//       setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortKey(key);
//       setSortOrder('asc');
//     }
//   };

//   const handleRowClick = (order: OrderItem) => {
//     navigate(`/tailoring/orderDetails/${order.order_id}`, { state: { order } });
//   };

//   return (
//     <Box padding="4">
//       <Text fontSize="2xl" fontWeight="bold" mb="4">Order Management</Text>
//       <Box mb="4" display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap="4">
//         <Input 
//           placeholder="Search by Order ID" 
//           value={searchOrderId} 
//           onChange={(e) => setSearchOrderId(e.target.value)} 
//           width={isSmallScreen ? '100%' : '300px'}
//         />
//         <Select 
//           width={isSmallScreen ? '100%' : '200px'} 
//           onChange={(e) => handleSortChange(e.target.value as keyof OrderItem)}
//           placeholder="Sort by"
//         >
//           <option value="order_date">Order Date</option>
//           <option value="appointment_date">Appointment Date</option>
//           {/* <option value="return_date">Return Date</option> */}
//         </Select>
//       </Box>
//       <Table variant="striped" colorScheme="teal">
//         <Thead>
//           <Tr>
//             <Th>Order ID</Th>
//             <Th onClick={() => handleSortChange('order_date')}>Order Date</Th>
//             <Th>Product ID</Th>
//             <Th>Total Amount</Th>
//             <Th>Status</Th>
//             <Th onClick={() => handleSortChange('appointment_date')}>Delivery Date</Th>
//             {/* <Th onClick={() => handleSortChange('return_date')}>Return Date</Th> */}
//             <Th>Assigned To</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {sortedOrders.map((order) => (
//             <Tr 
//               key={order.order_id} 
//               onClick={() => handleRowClick(order)} 
//               style={{ cursor: 'pointer' }}
//             >
//               <Td>{order.order_id}</Td>
//               <Td>{new Date(order.order_date).toLocaleDateString()}</Td>
//               <Td>{order.product_id} </Td>
//               <Td>{order.products_price}</Td>
//               <Td>{order.order_status}</Td>
//               <Td>{new Date(order.appointment_date).toLocaleDateString()}</Td>
//               {/* <Td>{new Date(order.return_date).toLocaleDateString()}</Td> */}
//               <Td color={order.order_assignment ? 'inherit' : 'red.500'}>
//                 {order.order_assignment || 'Unassigned'}
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

// export default TailoringOrderManagement;


// Version 2 : Enhancement to version 1

import React, { useState, useMemo } from 'react';
import {
  Table, Thead, Tbody, Tr, Th, Td,
  Box, Text, Spinner, Input,
  Select, Badge, Flex, Switch
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useGetAllOrders from '../../hooks/useGetAllOrders';
import { OrderItem } from '../../types';

export const TailoringOrderManagement = () => {
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [sortKey, setSortKey] = useState<keyof OrderItem>('appointment_date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { data: orders = [], isLoading } =
    useGetAllOrders(`/api/cc/tailoring/orders?search=${search}&showAll=${showAll}`);

  const navigate = useNavigate();

  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => {
      const valA = new Date(a[sortKey] as any).getTime();
      const valB = new Date(b[sortKey] as any).getTime();
      return sortOrder === 'asc' ? valA - valB : valB - valA;
    });
  }, [orders, sortKey, sortOrder]);

  const isUrgent = (date: string, status: string) => {
    const now = new Date();
    const appt = new Date(date);
    const diff = (appt.getTime() - now.getTime()) / (1000 * 3600);
    return diff <= 48 && diff > 0 && status !== 'Completed';
  };

  if (isLoading) return <Spinner size="xl" />;

  return (
    <Box p={6}>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>
        Tailoring Order Management
      </Text>

      <Flex mb={4} gap={4}>
        <Input
          placeholder="Search Order ID / Name / Phone / Date"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Switch
          isChecked={showAll}
          onChange={() => setShowAll(!showAll)}
        >
          Show Historical
        </Switch>
      </Flex>

      <Table variant="simple">
        <Thead bg="gray.100">
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer</Th>
            <Th>Appointment</Th>
            <Th>Total</Th>
            <Th>Status</Th>
            <Th>Assigned</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedOrders.map((order) => (
            <Tr
              key={order.order_id}
              bg={
                isUrgent(order.appointment_date, order.order_status)
                  ? 'red.50'
                  : 'white'
              }
              _hover={{ bg: 'gray.50', cursor: 'pointer' }}
              onClick={() =>
                navigate(`/tailoring/orderDetails/${order.order_id}`, { state: { order } })
              }
            >
              <Td>{order.order_id}</Td>
              <Td>
                <Text fontWeight="bold">{order.name}</Text>
                <Text fontSize="sm">{order.phone}</Text>
              </Td>
              <Td>
                {new Date(order.appointment_date).toLocaleString('en-IN', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </Td>
              <Td>₹{order.total_amount}</Td>
              <Td>
                <Badge colorScheme="blue">{order.order_status}</Badge>
              </Td>
              <Td>
                {order.order_assignment || (
                  <Badge colorScheme="red">Unassigned</Badge>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

