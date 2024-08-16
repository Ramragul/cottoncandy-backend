// Version 1 : 


// import React from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td, Box, Text, Spinner } from '@chakra-ui/react';
// import useGetAllOrders from '../hooks/useGetAllOrders';

// interface OrderItem {
//     order_id: number;
//     order_date: string;
//     products_price: string;
//     security_deposit: string;
//     total_amount: string;
//     order_status: string;
//     order_assignment: string | null;
//     product_id: number;
//     product_name: string;
//     size: string;
//     duration: string;
//     delivery_date: string;
//     return_date: string;
//     quantity: number;
//     price: string;
//     image_url: string;
//     delivery_id: number;
//     first_name: string;
//     last_name: string;
//     address: string;
//     city: string;
//     pincode: string;
//     email: string;
//     mobile_number: string;
//     return_address: string | null;
//     return_city: string | null;
//     return_pincode: string | null;
// }

// export const OrderManagement = () => {
//     const { data: orders = [], error, isLoading } = useGetAllOrders('api/cc/orders');

//     if (isLoading) return <Spinner size="xl" />;
//     if (error) return <Text color="red.500">Failed to load orders</Text>;

//     // Group orders by order_id
//     const groupedOrders = orders.reduce((acc: Record<number, OrderItem[]>, order: OrderItem) => {
//         if (!acc[order.order_id]) {
//             acc[order.order_id] = [];
//         }
//         acc[order.order_id].push(order);
//         return acc;
//     }, {});

//     return (
//         <Box padding="4">
//             <Text fontSize="2xl" fontWeight="bold" mb="4">Order Management</Text>
//             <Table variant="striped" colorScheme="teal">
//                 <Thead>
//                     <Tr>
//                         <Th>Order ID</Th>
//                         <Th>Order Date</Th>
//                         <Th>Products</Th>
//                         <Th>Total Amount</Th>
//                         <Th>Status</Th>
//                     </Tr>
//                 </Thead>
//                 <Tbody>
//                     {Object.keys(groupedOrders).map((orderId) => {
//                         const orderGroup = groupedOrders[orderId];
//                         return orderGroup.map((order, index) => (
//                             <Tr key={order.product_id}>
//                                 {index === 0 && (
//                                     <>
//                                         <Td rowSpan={orderGroup.length}>{order.order_id}</Td>
//                                         <Td rowSpan={orderGroup.length}>{new Date(order.order_date).toLocaleDateString()}</Td>
//                                     </>
//                                 )}
//                                 <Td>{order.product_name} (x{order.quantity})</Td>
//                                 {index === 0 && (
//                                     <>
//                                         <Td rowSpan={orderGroup.length}>{order.total_amount}</Td>
//                                         <Td rowSpan={orderGroup.length}>{order.order_status}</Td>
//                                     </>
//                                 )}
//                             </Tr>
//                         ));
//                     })}
//                 </Tbody>
//             </Table>
//         </Box>
//     );
// };

// export default OrderManagement;


// Version 2 : Enhancement to version 1

// import React, { useState } from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td, Box, Text, Spinner, Select, Input, Button } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import useGetAllOrders from '../hooks/useGetAllOrders';
// import { OrderItem } from '../types';

// export const OrderManagement = () => {
//     const { data: orders = [], error, isLoading } = useGetAllOrders('api/cc/orders');
//     const [sortKey, setSortKey] = useState<keyof OrderItem>('order_date');
//     const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
//     const [searchOrderId, setSearchOrderId] = useState('');
//     const navigate = useNavigate();

//     if (isLoading) return <Spinner size="xl" />;
//     if (error) return <Text color="red.500">Failed to load orders</Text>;

//     // Filter orders based on search input
//     const filteredOrders = orders.filter(order => 
//         order.order_id.toString().includes(searchOrderId)
//     );

//     // Sorting logic
//     const sortedOrders = filteredOrders.sort((a, b) => {
//         const valueA = new Date(a[sortKey] as string).getTime();
//         const valueB = new Date(b[sortKey] as string).getTime();
//         return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
//     });

//     const handleSortChange = (key: keyof OrderItem) => {
//         if (sortKey === key) {
//             setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortKey(key);
//             setSortOrder('asc');
//         }
//     };

//     return (
//         <Box padding="4">
//             <Text fontSize="2xl" fontWeight="bold" mb="4">Order Management</Text>
//             <Box mb="4" display="flex" justifyContent="space-between">
//                 <Input 
//                     placeholder="Search by Order ID" 
//                     value={searchOrderId} 
//                     onChange={(e) => setSearchOrderId(e.target.value)} 
//                     width="300px"
//                     mr="4"
//                 />
//                 <Select width="200px" onChange={(e) => handleSortChange(e.target.value as keyof OrderItem)}>
//                     <option value="order_date">Order Date</option>
//                     <option value="delivery_date">Delivery Date</option>
//                     <option value="return_date">Return Date</option>
//                 </Select>
//             </Box>
//             <Table variant="striped" colorScheme="teal">
//                 <Thead>
//                     <Tr>
//                         <Th>Order ID</Th>
//                         <Th onClick={() => handleSortChange('order_date')}>Order Date</Th>
//                         <Th>Products</Th>
//                         <Th>Total Amount</Th>
//                         <Th>Status</Th>
//                         <Th onClick={() => handleSortChange('delivery_date')}>Delivery Date</Th>
//                         <Th onClick={() => handleSortChange('return_date')}>Return Date</Th>
//                         <Th>Assigned To</Th>
//                     </Tr>
//                 </Thead>
//                 <Tbody>
//                     {sortedOrders.map((order) => (
//                         <Tr 
//                             key={order.product_id} 
//                             onClick={() => navigate(`/ordersDetails/${order.order_id}`, { state: { order } })} 
//                             style={{ cursor: 'pointer' }}
//                         >
//                             <Td>{order.order_id}</Td>
//                             <Td>{new Date(order.order_date).toLocaleDateString()}</Td>
//                             <Td>{order.product_name} (x{order.quantity})</Td>
//                             <Td>{order.total_amount}</Td>
//                             <Td>{order.order_status}</Td>
//                             <Td>{new Date(order.delivery_date).toLocaleDateString()}</Td>
//                             <Td>{new Date(order.return_date).toLocaleDateString()}</Td>
//                             <Td>{order.order_assignment || 'Unassigned'}</Td>
//                         </Tr>
//                     ))}
//                 </Tbody>
//             </Table>
//         </Box>
//     );
// };

// export default OrderManagement;



// Version 3 Enhancement to version 2

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
// import useGetAllOrders from '../hooks/useGetAllOrders';
// import { OrderItem } from '../types';

// export const OrderManagement = () => {
//   const { data: orders = [], error, isLoading } = useGetAllOrders('api/cc/orders');
//   const [sortKey, setSortKey] = useState<keyof OrderItem>('order_date');
//   const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
//   const [searchOrderId, setSearchOrderId] = useState('');
//   const navigate = useNavigate();
//   const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

//   if (isLoading) return <Spinner size="xl" />;
//   if (error) return <Text color="red.500">Failed to load orders</Text>;

//   // Filter orders based on search input
//   const filteredOrders = orders.filter((order) =>
//     order.order_id.toString().includes(searchOrderId)
//   );

//   // Sorting logic
//   const sortedOrders = filteredOrders.sort((a, b) => {
//     const valueA = a[sortKey];
//     const valueB = b[sortKey];

//     if (typeof valueA === 'string' && typeof valueB === 'string') {
//       return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
//     }

//     if (typeof valueA === 'number' && typeof valueB === 'number') {
//       return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
//     }

//     if (valueA instanceof Date && valueB instanceof Date) {
//       return sortOrder === 'asc'
//         ? new Date(valueA).getTime() - new Date(valueB).getTime()
//         : new Date(valueB).getTime() - new Date(valueA).getTime();
//     }

//     return 0; // Default case (if none of the above types match)
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
//     navigate(`/orderDetails/${order.order_id}`, { state: { order } });
//   };

//   return (
//     <Box padding={isSmallScreen ? '2' : '4'}>
//       <Text fontSize={isSmallScreen ? 'xl' : '2xl'} fontWeight="bold" mb="4">
//         Order Management
//       </Text>
//       <Box
//         mb="4"
//         display="flex"
//         flexDirection={isSmallScreen ? 'column' : 'row'}
//         justifyContent="space-between"
//         alignItems={isSmallScreen ? 'flex-start' : 'center'}
//       >
//         <Input
//           placeholder="Search by Order ID"
//           value={searchOrderId}
//           onChange={(e) => setSearchOrderId(e.target.value)}
//           width={isSmallScreen ? '100%' : '300px'}
//           mb={isSmallScreen ? '2' : '0'}
//           mr={isSmallScreen ? '0' : '4'}
//         />
//         <Select
//           width={isSmallScreen ? '100%' : '200px'}
//           onChange={(e) => handleSortChange(e.target.value as keyof OrderItem)}
//         >
//           <option value="order_date">Order Date</option>
//           <option value="delivery_date">Delivery Date</option>
//           <option value="return_date">Return Date</option>
//           <option value="order_id">Order ID</option>
//           <option value="total_amount">Total Amount</option>
//           <option value="order_status">Status</option>
//           <option value="order_assignment">Assigned To</option>
//         </Select>
//       </Box>

//       {isSmallScreen ? (
//         <Stack spacing={4}>
//           {sortedOrders.map((order) => (
//             <Box
//               key={order.order_id}
//               padding="4"
//               borderWidth="1px"
//               borderRadius="lg"
//               onClick={() => handleRowClick(order)}
//               cursor="pointer"
//               _hover={{ bg: 'gray.100' }}
//             >
//               <Text>
//                 <strong>Order ID:</strong> {order.order_id}
//               </Text>
//               <Text>
//                 <strong>Order Date:</strong>{' '}
//                 {new Date(order.order_date).toLocaleDateString()}
//               </Text>
//               <Text>
//                 <strong>Products:</strong> {order.product_name} (x{order.quantity})
//               </Text>
//               <Text>
//                 <strong>Total Amount:</strong> {order.total_amount}
//               </Text>
//               <Text>
//                 <strong>Status:</strong> {order.order_status}
//               </Text>
//               <Text>
//                 <strong>Delivery Date:</strong>{' '}
//                 {new Date(order.delivery_date).toLocaleDateString()}
//               </Text>
//               <Text>
//                 <strong>Return Date:</strong>{' '}
//                 {new Date(order.return_date).toLocaleDateString()}
//               </Text>
//               <Text color={order.order_assignment ? 'black' : 'red'}>
//                 <strong>Assigned To:</strong> {order.order_assignment || 'Unassigned'}
//               </Text>
//             </Box>
//           ))}
//         </Stack>
//       ) : (
//         <Table variant="striped" colorScheme="teal">
//           <Thead>
//             <Tr>
//               <Th onClick={() => handleSortChange('order_id')}>Order ID</Th>
//               <Th onClick={() => handleSortChange('order_date')}>Order Date</Th>
//               <Th>Products</Th>
//               <Th onClick={() => handleSortChange('total_amount')}>Total Amount</Th>
//               <Th onClick={() => handleSortChange('order_status')}>Status</Th>
//               <Th onClick={() => handleSortChange('delivery_date')}>Delivery Date</Th>
//               <Th onClick={() => handleSortChange('return_date')}>Return Date</Th>
//               <Th onClick={() => handleSortChange('order_assignment')}>Assigned To</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {sortedOrders.map((order) => (
//               <Tr
//                 key={order.order_id}
//                 onClick={() => handleRowClick(order)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <Td>{order.order_id}</Td>
//                 <Td>{new Date(order.order_date).toLocaleDateString()}</Td>
//                 <Td>{order.product_name} (x{order.quantity})</Td>
//                 <Td>{order.total_amount}</Td>
//                 <Td>{order.order_status}</Td>
//                 <Td>{new Date(order.delivery_date).toLocaleDateString()}</Td>
//                 <Td>{new Date(order.return_date).toLocaleDateString()}</Td>
//                 <Td color={order.order_assignment ? 'black' : 'red'}>
//                   {order.order_assignment || 'Unassigned'}
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       )}
//     </Box>
//   );
// };

// export default OrderManagement;



import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Spinner,
  Select,
  Input,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useGetAllOrders from '../hooks/useGetAllOrders';
import { OrderItem } from '../types';

export const OrderManagement = () => {
  const { data: orders = [], error, isLoading } = useGetAllOrders('api/cc/orders');
  const [sortKey, setSortKey] = useState<keyof OrderItem>('order_date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchOrderId, setSearchOrderId] = useState('');
  const navigate = useNavigate();
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Failed to load orders</Text>;

  // Filter orders based on search input
  const filteredOrders = orders.filter(order =>
    order.order_id.toString().includes(searchOrderId)
  );

  // Sorting logic
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
    }

    return 0;
  });

  const handleSortChange = (key: keyof OrderItem) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handleRowClick = (order: OrderItem) => {
    navigate(`/orderDetails/${order.order_id}`, { state: { order } });
  };

  return (
    <Box padding="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Order Management</Text>
      <Box mb="4" display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap="4">
        <Input 
          placeholder="Search by Order ID" 
          value={searchOrderId} 
          onChange={(e) => setSearchOrderId(e.target.value)} 
          width={isSmallScreen ? '100%' : '300px'}
        />
        <Select 
          width={isSmallScreen ? '100%' : '200px'} 
          onChange={(e) => handleSortChange(e.target.value as keyof OrderItem)}
          placeholder="Sort by"
        >
          <option value="order_date">Order Date</option>
          <option value="delivery_date">Delivery Date</option>
          <option value="return_date">Return Date</option>
        </Select>
      </Box>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th onClick={() => handleSortChange('order_date')}>Order Date</Th>
            <Th>Products</Th>
            <Th>Total Amount</Th>
            <Th>Status</Th>
            <Th onClick={() => handleSortChange('delivery_date')}>Delivery Date</Th>
            <Th onClick={() => handleSortChange('return_date')}>Return Date</Th>
            <Th>Assigned To</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedOrders.map((order) => (
            <Tr 
              key={order.order_id} 
              onClick={() => handleRowClick(order)} 
              style={{ cursor: 'pointer' }}
            >
              <Td>{order.order_id}</Td>
              <Td>{new Date(order.order_date).toLocaleDateString()}</Td>
              <Td>{order.product_name} (x{order.quantity})</Td>
              <Td>{order.total_amount}</Td>
              <Td>{order.order_status}</Td>
              <Td>{new Date(order.delivery_date).toLocaleDateString()}</Td>
              <Td>{new Date(order.return_date).toLocaleDateString()}</Td>
              <Td color={order.order_assignment ? 'inherit' : 'red.500'}>
                {order.order_assignment || 'Unassigned'}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrderManagement;
