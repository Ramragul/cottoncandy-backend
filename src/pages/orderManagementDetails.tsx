// Version 1 

// import React, { useState } from 'react';
// import { Box, Text, Spinner, FormLabel, Input, Button, Select } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { OrderItem } from '../types';

// export const OrderManagementDetails = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const order = location.state?.order as OrderItem;

//     const [orderStatus, setOrderStatus] = useState(order?.order_status || '');
//     const [orderAssignment, setOrderAssignment] = useState(order?.order_assignment || '');

//     const handleSave = () => {
//         // Logic to update the order's status and assignment
//         console.log('Saving order:', { orderStatus, orderAssignment });
//     };

//     if (!order) return <Spinner size="xl" />;

//     return (
//         <Box padding="4">
//             <Button mb="4" onClick={() => navigate('/orders')}>Back to Order Management</Button>
//             <Text fontSize="2xl" fontWeight="bold" mb="4">Order Details: {order?.order_id}</Text>
//             <Box mb="4">
//                 <FormLabel>Order Status</FormLabel>
//                 <Select value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
//                     <option value="Created">Created</option>
//                     <option value="Processing">Processing</option>
//                     <option value="Couriered">Couriered</option>
//                     <option value="Delivered">Delivered</option>
//                     <option value="Completed">Completed</option>
//                 </Select>
//             </Box>
//             <Box mb="4">
//                 <FormLabel>Assigned To</FormLabel>
//                 <Input value={orderAssignment} onChange={(e) => setOrderAssignment(e.target.value)} />
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Order Date:</Text> {new Date(order.order_date).toLocaleDateString()}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Delivery Date:</Text> {new Date(order.delivery_date).toLocaleDateString()}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Return Date:</Text> {new Date(order.return_date).toLocaleDateString()}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Total Amount:</Text> {order.total_amount}
//             </Box>
//             <Button colorScheme="teal" onClick={handleSave}>Save</Button>
//         </Box>
//     );
// };

// export default OrderManagementDetails;


// Version 2 : Enhancement to version 1 with many field additions

// import React, { useState } from 'react';
// import { Box, Text, Spinner, FormLabel, Input, Button, Select, Image } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { OrderItem } from '../types';

// export const OrderManagementDetails = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const order = location.state?.order as OrderItem;

//     const [orderStatus, setOrderStatus] = useState(order?.order_status || '');
//     const [orderAssignment, setOrderAssignment] = useState(order?.order_assignment || '');

//     const handleSave = () => {
//         // Logic to update the order's status and assignment
//         console.log('Saving order:', { orderStatus, orderAssignment });
//     };

//     if (!order) return <Spinner size="xl" />;

//     return (
//         <Box padding="4">
//             <Button mb="4" onClick={() => navigate('/orders')}>Back to Order Management</Button>
//             <Text fontSize="2xl" fontWeight="bold" mb="4">Order Details: {order?.order_id}</Text>

//             {/* Order Status and Assignment */}
//             <Box mb="4">
//                 <FormLabel>Order Status</FormLabel>
//                 <Select value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
//                     <option value="Created">Created</option>
//                     <option value="Processing">Processing</option>
//                     <option value="Couriered">Couriered</option>
//                     <option value="Delivered">Delivered</option>
//                     <option value="Completed">Completed</option>
//                 </Select>
//             </Box>
//             <Box mb="4">
//                 <FormLabel>Assigned To</FormLabel>
//                 <Input value={orderAssignment} onChange={(e) => setOrderAssignment(e.target.value)} />
//             </Box>

//             {/* Order Details */}
//             <Box mb="4">
//                 <Text fontWeight="bold">Order Date:</Text> {new Date(order.order_date).toLocaleDateString()}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Products Price:</Text> ₹{order.products_price}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Security Deposit:</Text> ₹{order.security_deposit}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Total Amount:</Text> ₹{order.total_amount}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Delivery Date:</Text> {new Date(order.delivery_date).toLocaleDateString()}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Return Date:</Text> {new Date(order.return_date).toLocaleDateString()}
//             </Box>

//             {/* Product Details */}
//             <Box mb="4">
//                 <Text fontWeight="bold">Product Name:</Text> {order.product_name}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Size:</Text> {order.size}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Duration:</Text> {order.duration} days
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Quantity:</Text> {order.quantity}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Product Price:</Text> ₹{order.price}
//             </Box>

//             {/* Display Product Image */}
//             <Box mb="4">
//                 <Text fontWeight="bold">Product Image:</Text>
//                 <Image src={order.image_url} alt="Product Image" boxSize="150px" />
//             </Box>

//             {/* Delivery Details */}
//             <Box mb="4">
//                 <Text fontWeight="bold">Delivery Address:</Text> {`${order.first_name} ${order.last_name}, ${order.address}, ${order.city}, ${order.pincode}`}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Email:</Text> {order.email}
//             </Box>
//             <Box mb="4">
//                 <Text fontWeight="bold">Mobile Number:</Text> {order.mobile_number}
//             </Box>

//             {/* Return Address */}
//             <Box mb="4">
//                 <Text fontWeight="bold">Return Address:</Text> {`${order.return_address}, ${order.return_city}, ${order.return_pincode}`}
//             </Box>

//             <Button colorScheme="teal" onClick={handleSave}>Save</Button>
//         </Box>
//     );
// };

// export default OrderManagementDetails;



import React, { useState } from 'react';
import { Box, Text, Spinner, FormLabel, Input, Button, Select, Image, Grid, Stack, Divider } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderItem } from '../types';
import usePostData from '../hooks/usePostData';
import usePatchData from '../hooks/usePatchData';
import { useAuth } from '../contexts/AuthContext';

export const OrderManagementDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {authState} = useAuth();
    const order = location.state?.order as OrderItem;

    const orderId = order?.order_id;

    const { patchData, data, error, isLoading, responseData } = usePatchData(`/api/orders/${orderId}/update`);

    const [orderStatus, setOrderStatus] = useState(order?.order_status || '');
    const [orderAssignment, setOrderAssignment] = useState(order?.order_assignment || '');

    const handleSave = () => {
        console.log('Saving order:', { orderStatus, orderAssignment });
        var data  = {}
        data.orderStatus = orderStatus;
        data.orderAssignment = orderAssignment;
        data.updatedBy = authState?.userId;
        console.log ("Data value" +JSON.stringify(data))
         patchData(data);
    };

    if (!order) return <Spinner size="xl" />;

    // Extract the first image from the comma-separated image_url
    const firstImageUrl = order.image_url.split(',')[0];

    return (
        <Box padding="4" maxW="1200px" margin="auto">
            <Button mb="4" onClick={() => navigate('/orders')}>Back to Order Management</Button>
            <Text fontSize="2xl" fontWeight="bold" mb="6" textAlign="center">Order Details: {order?.order_id}</Text>

            <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} mb={6}>
                {/* Product Section */}
                <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
                    <Text fontSize="lg" fontWeight="bold" mb="4">Product Details</Text>
                    <Image src={firstImageUrl} alt="Product Image" boxSize="150px" borderRadius="md" objectFit="cover" />
                    <Text mt="4"><strong>Name:</strong> {order.product_name}</Text>
                    <Text><strong>Size:</strong> {order.size}</Text>
                    <Text><strong>Duration:</strong> {order.duration} days</Text>
                    <Text><strong>Quantity:</strong> {order.quantity}</Text>
                    <Text><strong>Price per item:</strong> ₹{order.price}</Text>
                </Box>

                {/* Order Info */}
                <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
                    <Text fontSize="lg" fontWeight="bold" mb="4">Order Info</Text>
                    <Text><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</Text>
                    <Text><strong>Delivery Date:</strong> {new Date(order.delivery_date).toLocaleDateString()}</Text>
                    <Text><strong>Return Date:</strong> {new Date(order.return_date).toLocaleDateString()}</Text>
                    <Text><strong>Total Amount:</strong> ₹{order.total_amount}</Text>
                    <Text><strong>Products Price:</strong> ₹{order.products_price}</Text>
                    <Text><strong>Security Deposit:</strong> ₹{order.security_deposit}</Text>
                </Box>
            </Grid>

            <Grid templateColumns={['1fr', '1fr 1fr']} gap={6}>
                {/* Delivery Details */}
                <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
                    <Text fontSize="lg" fontWeight="bold" mb="4">Delivery Details</Text>
                    <Text><strong>Delivery Address:</strong> {`${order.first_name} ${order.last_name}, ${order.address}, ${order.city}, ${order.pincode}`}</Text>
                    <Text><strong>Email:</strong> {order.email}</Text>
                    <Text><strong>Mobile Number:</strong> {order.mobile_number}</Text>
                </Box>

                {/* Return Address */}
                <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
                    <Text fontSize="lg" fontWeight="bold" mb="4">Return Details</Text>
                    <Text><strong>Return Address:</strong> {`${order.return_address}, ${order.return_city}, ${order.return_pincode}`}</Text>
                </Box>
            </Grid>

            {/* Order Status and Assignment */}
            <Stack spacing={6} mt="8">
                <Divider />
                <Box>
                    <FormLabel fontWeight="bold">Order Status</FormLabel>
                    <Select value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
                        <option value="Created">Created</option>
                        <option value="Processing">Processing</option>
                        <option value="Couriered">Couriered</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Completed">Completed</option>
                    </Select>
                </Box>
                <Box>
                    <FormLabel fontWeight="bold">Assigned To</FormLabel>
                    <Input value={orderAssignment} onChange={(e) => setOrderAssignment(e.target.value)} />
                </Box>
            </Stack>

            <Button mt="8" colorScheme="teal" size="lg" width="100%" onClick={handleSave}>Save Changes</Button>
        </Box>
    );
};

export default OrderManagementDetails;
