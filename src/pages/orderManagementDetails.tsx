import React, { useState } from 'react';
import { Box, Text, Spinner, FormLabel, Input, Button, Select } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderItem } from '../types';

export const OrderManagementDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const order = location.state?.order as OrderItem;

    const [orderStatus, setOrderStatus] = useState(order?.order_status || '');
    const [orderAssignment, setOrderAssignment] = useState(order?.order_assignment || '');

    const handleSave = () => {
        // Logic to update the order's status and assignment
        console.log('Saving order:', { orderStatus, orderAssignment });
    };

    if (!order) return <Spinner size="xl" />;

    return (
        <Box padding="4">
            <Button mb="4" onClick={() => navigate('/orders')}>Back to Order Management</Button>
            <Text fontSize="2xl" fontWeight="bold" mb="4">Order Details: {order?.order_id}</Text>
            <Box mb="4">
                <FormLabel>Order Status</FormLabel>
                <Select value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
                    <option value="Created">Created</option>
                    <option value="Processing">Processing</option>
                    <option value="Couriered">Couriered</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Completed">Completed</option>
                </Select>
            </Box>
            <Box mb="4">
                <FormLabel>Assigned To</FormLabel>
                <Input value={orderAssignment} onChange={(e) => setOrderAssignment(e.target.value)} />
            </Box>
            <Box mb="4">
                <Text fontWeight="bold">Order Date:</Text> {new Date(order.order_date).toLocaleDateString()}
            </Box>
            <Box mb="4">
                <Text fontWeight="bold">Delivery Date:</Text> {new Date(order.delivery_date).toLocaleDateString()}
            </Box>
            <Box mb="4">
                <Text fontWeight="bold">Return Date:</Text> {new Date(order.return_date).toLocaleDateString()}
            </Box>
            <Box mb="4">
                <Text fontWeight="bold">Total Amount:</Text> {order.total_amount}
            </Box>
            <Button colorScheme="teal" onClick={handleSave}>Save</Button>
        </Box>
    );
};

export default OrderManagementDetails;
