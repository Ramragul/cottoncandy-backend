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

// FULL SMART TABLE VERSION
// (clean and optimized)

import React, { useState, useMemo } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Badge,
  Flex,
  Switch,
  Text,
  Stack,
  Select,
  useBreakpointValue,
} from '@chakra-ui/react';
import useGetAllOrders from '../../hooks/useGetAllOrders';
import { useNavigate } from 'react-router-dom';
import { OrderItem } from '../../types/OrderItem';

export const TailoringOrderManagement = () => {
  const { data: orders = [] } =
    useGetAllOrders('/api/cc/tailoring/orders?showAll=true');

  const [search, setSearch] = useState('');
  const [showHistorical, setShowHistorical] = useState(false);
  const [sortBy, setSortBy] = useState('appointment_date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // 🔥 FILTER + SEARCH + HISTORY
  const filteredOrders = useMemo(() => {
    let filtered = orders;

    if (showHistorical) {
      filtered = filtered.filter(
        (o: OrderItem) => o.order_status === 'Completed'
      );
    } else {
      filtered = filtered.filter(
        (o: OrderItem) =>
          o.order_status !== 'Completed' &&
          o.order_status !== 'Cancelled'
      );
    }

    if (search.trim()) {
      const keyword = search.toLowerCase();
      filtered = filtered.filter((o: OrderItem) =>
        o.order_id.toString().includes(keyword) ||
        o.name?.toLowerCase().includes(keyword) ||
        o.phone?.toLowerCase().includes(keyword)
      );
    }

    // 🔥 SORTING
    filtered.sort((a: any, b: any) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy.includes('date')) {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      }

      if (sortOrder === 'asc') return valA > valB ? 1 : -1;
      return valA < valB ? 1 : -1;
    });

    return filtered;
  }, [orders, search, showHistorical, sortBy, sortOrder]);

  // 🔥 URGENCY
  const getUrgencyLevel = (order: OrderItem) => {
    const diff =
      (new Date(order.appointment_date).getTime() - new Date().getTime()) /
      (1000 * 3600);

    if (diff <= 24 && diff > 0) return 'critical';
    if (diff <= 48 && diff > 0) return 'warning';
    return 'normal';
  };

  const getLeftBorderColor = (order: OrderItem) => {
    const urgency = getUrgencyLevel(order);

    if (
      order.order_status === 'Created' &&
      !order.order_assignment &&
      urgency === 'critical'
    )
      return 'red.500';

    if (urgency === 'critical') return 'red.400';
    if (urgency === 'warning') return 'orange.400';
    return 'teal.400';
  };

  return (
    <Box p={{ base: 4, md: 8 }}>
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Tailoring Order Management
      </Text>

      {/* 🔥 CONTROLS */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        mb={8}
      >
        <Input
          placeholder="Search Order ID / Name / Phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          bg="white"
          borderRadius="lg"
        />

        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          maxW="200px"
        >
          <option value="appointment_date">Sort by Appointment</option>
          <option value="order_date">Sort by Created Date</option>
          <option value="total_amount">Sort by Amount</option>
        </Select>

        <Select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value as 'asc' | 'desc')
          }
          maxW="150px"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>

        <Flex align="center" gap={2}>
          <Switch
            isChecked={showHistorical}
            onChange={() => setShowHistorical(!showHistorical)}
          />
          <Text>Show Completed Only</Text>
        </Flex>
      </Flex>

      {/* 🔥 TABLE */}
      <Box
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
        overflow="hidden"
      >
        <Table variant="unstyled">
          <Thead bg="gray.50">
            <Tr>
              <Th>ID</Th>
              <Th>Customer</Th>
              <Th>Appointment</Th>
              <Th>Total</Th>
              <Th>Status</Th>
              <Th>Assigned</Th>
              <Th>Payment</Th>
            </Tr>
          </Thead>

          <Tbody>
            {filteredOrders.map((o: OrderItem) => (
              <Tr
                key={o.order_id}
                borderBottom="1px solid"
                borderColor="gray.100"
                _hover={{ bg: 'gray.50', cursor: 'pointer' }}
                onClick={() =>
                  navigate(
                    `/tailoring/orderDetails/${o.order_id}`,
                    { state: { order: o } }
                  )
                }
              >
                <Td borderLeft="6px solid" borderColor={getLeftBorderColor(o)}>
                  #{o.order_id}
                </Td>

                <Td>
                  <Text fontWeight="600">{o.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {o.phone}
                  </Text>
                </Td>

                <Td>
                  {new Date(o.appointment_date).toLocaleString(
                    'en-IN',
                    { dateStyle: 'medium', timeStyle: 'short' }
                  )}
                </Td>

                <Td fontWeight="bold">₹{o.total_amount}</Td>

                <Td>
                  <Badge
                    px={3}
                    py={1}
                    borderRadius="full"
                    colorScheme="purple"
                  >
                    {o.order_status}
                  </Badge>

                  {getUrgencyLevel(o) === 'critical' && (
                    <Badge ml={2} colorScheme="red">
                      URGENT
                    </Badge>
                  )}
                </Td>

                <Td>
                  {o.order_assignment ? (
                    <Badge colorScheme="blue">
                      {o.order_assignment}
                    </Badge>
                  ) : (
                    <Badge colorScheme="red">
                      Not Assigned
                    </Badge>
                  )}
                </Td>

                <Td>
                  <Badge
                    colorScheme={
                      o.payment_status === 'Paid'
                        ? 'green'
                        : 'orange'
                    }
                  >
                    {o.payment_status || 'Unpaid'}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default TailoringOrderManagement;
