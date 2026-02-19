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
  Text,
  Stack,
  Select,
  Switch,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
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
  const [activeTab, setActiveTab] =
    useState<'all' | 'urgent' | 'today' | 'unassigned'>('all');

  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // 🔥 CLEAN PULSE ANIMATION
  const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  `;

  // 🔥 URGENCY
  const getUrgencyLevel = (order: OrderItem) => {
    const diff =
      (new Date(order.appointment_date).getTime() - new Date().getTime()) /
      (1000 * 3600);

    if (diff <= 24 && diff > 0) return 'critical';
    if (diff <= 48 && diff > 0) return 'warning';
    return 'normal';
  };

  // 🔥 FILTER + SEARCH + SORT
  const filteredOrders = useMemo(() => {
    let filtered = orders;

    // Completed toggle
    if (showHistorical) {
      filtered = filtered.filter(
        (o) => o.order_status === 'Completed'
      );
    } else {
      filtered = filtered.filter(
        (o) =>
          o.order_status !== 'Completed' &&
          o.order_status !== 'Cancelled'
      );
    }

    // Tabs
    if (activeTab === 'urgent') {
      filtered = filtered.filter(
        (o) => getUrgencyLevel(o) === 'critical'
      );
    }

    if (activeTab === 'today') {
      filtered = filtered.filter(
        (o) =>
          new Date(o.appointment_date).toDateString() ===
          new Date().toDateString()
      );
    }

    if (activeTab === 'unassigned') {
      filtered = filtered.filter(
        (o) => !o.order_assignment
      );
    }

    // Search
    if (search.trim()) {
      const keyword = search.toLowerCase();
      filtered = filtered.filter(
        (o) =>
          o.order_id.toString().includes(keyword) ||
          o.name?.toLowerCase().includes(keyword) ||
          o.phone?.toLowerCase().includes(keyword)
      );
    }

    // Sort
    filtered.sort((a: any, b: any) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy.includes('date')) {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      }

      return sortOrder === 'asc'
        ? valA > valB ? 1 : -1
        : valA < valB ? 1 : -1;
    });

    return filtered;
  }, [orders, search, showHistorical, sortBy, sortOrder, activeTab]);

  return (
    <Box p={{ base: 4, md: 8 }}>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>
        Tailoring Order Management
      </Text>

      {/* 🔥 TABS */}
      <Flex gap={3} mb={6} wrap="wrap">
        {['all', 'urgent', 'today', 'unassigned'].map((tab) => (
          <Button
            key={tab}
            size="sm"
            borderRadius="full"
            variant={activeTab === tab ? 'solid' : 'outline'}
            colorScheme="purple"
            onClick={() =>
              setActiveTab(tab as any)
            }
          >
            {tab.toUpperCase()}
          </Button>
        ))}
      </Flex>

      {/* 🔥 CONTROLS */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        mb={6}
      >
        <Input
          placeholder="Search Order ID / Name / Phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          bg="white"
        />

        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          maxW={{ base: '100%', md: '200px' }}
        >
          <option value="appointment_date">Appointment</option>
          <option value="order_date">Created Date</option>
          <option value="total_amount">Amount</option>
        </Select>

        <Select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value as any)
          }
          maxW={{ base: '100%', md: '150px' }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>

        <Flex align="center" gap={2}>
          <Switch
            isChecked={showHistorical}
            onChange={() =>
              setShowHistorical(!showHistorical)
            }
          />
          <Text>Completed Only</Text>
        </Flex>
      </Flex>

      {/* 🔥 MOBILE VIEW */}
      {isMobile ? (
        <Stack spacing={4}>
          {filteredOrders.map((o) => {
            const urgency = getUrgencyLevel(o);

            return (
              <Box
                key={o.order_id}
                p={4}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                border="1px solid"
                borderColor="gray.200"
                cursor="pointer"
                onClick={() =>
                  navigate(
                    `/tailoring/orderDetails/${o.order_id}`,
                    { state: { order: o } }
                  )
                }
              >
                <Flex justify="space-between">
                  <Text fontWeight="bold">
                    #{o.order_id}
                  </Text>
                  <Text fontWeight="bold">
                    {o.stitch_option}
                  </Text>

                  {urgency === 'critical' && (
                    <Box
                      animation={`${pulse} 1s infinite`}
                    >
                      <Badge colorScheme="red">
                        URGENT
                      </Badge>
                    </Box>
                  )}
                </Flex>

                <Text mt={2}>{o.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {o.phone}
                </Text>

                <Text mt={2}>
                  {new Date(
                    o.appointment_date
                  ).toLocaleString('en-IN', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </Text>

                <Flex mt={2} gap={2} wrap="wrap">
                  <Badge colorScheme="purple">
                    {o.order_status}
                  </Badge>

                  {!o.order_assignment && (
                    <Badge colorScheme="orange">
                      Not Assigned
                    </Badge>
                  )}
                </Flex>
              </Box>
            );
          })}
        </Stack>
      ) : (
        /* 🔥 DESKTOP TABLE */
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="xl"
          overflow="hidden"
        >
          <Table variant="simple">
            <Thead bg="gray.50">
              <Tr>
                <Th>ID</Th>
                <Th>Customer</Th>
                <Th>Type</Th>
                <Th>Appointment</Th>
                <Th>Status</Th>
                <Th>Assigned</Th>
              </Tr>
            </Thead>

            <Tbody>
              {filteredOrders.map((o) => {
                const urgency = getUrgencyLevel(o);

                return (
                  <Tr
                    key={o.order_id}
                    cursor="pointer"
                    borderBottom="2px solid"
                    borderColor="gray.100"
                    _hover={{
                      bg: 'gray.50',
                      transform: 'scale(1.002)',
                      transition: '0.2s',
                    }}
                    onClick={() =>
                      navigate(
                        `/tailoring/orderDetails/${o.order_id}`,
                        { state: { order: o } }
                      )
                    }
                  >
                    <Td fontWeight="600">
                      #{o.order_id}
                    </Td>

                    <Td>
                      <Text fontWeight="500">
                        {o.name}
                      </Text>
                      <Text
                        fontSize="sm"
                        color="gray.500"
                      >
                        {o.phone}
                      </Text>
                    </Td>

                    <Td fontWeight="600">
                      {o.stitch_option}
                    </Td>

                    <Td>
                      {new Date(
                        o.appointment_date
                      ).toLocaleString('en-IN', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </Td>

                    <Td>
                      <Badge colorScheme="purple">
                        {o.order_status}
                      </Badge>

                      {urgency === 'critical' && (
                        <Box
                          as="span"
                          ml={2}
                          animation={`${pulse} 1s infinite`}
                        >
                          <Badge colorScheme="red">
                            URGENT
                          </Badge>
                        </Box>
                      )}
                    </Td>

                    <Td>
                      {o.order_assignment || (
                        <Badge colorScheme="orange">
                          Not Assigned
                        </Badge>
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default TailoringOrderManagement;

