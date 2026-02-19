// Version 1 : Working Version 

// import React, { useState , useEffect} from 'react';
// import { Box, Text, Spinner, FormLabel, Input, Button, Select, Image, Grid, Stack, Divider } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { OrderItem } from '../../types';
// import usePostData from '../../hooks/usePostData';
// import usePatchData from '../../hooks/usePatchData';
// import { useAuth } from '../../contexts/AuthContext';

// import Lottie from 'react-lottie';
// import successAnimation from '../..//animations/success.json';
// import errorAnimation from '../../animations/error.json';
// import loadingAnimation from '../../animations/loading.json';

// export const TailoringOrderManagementDetails = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     const {authState} = useAuth();
//     const order = location.state?.order as OrderItem;

//     const orderId = order?.order_id;

//     const { patchData, data, error, isLoading, responseData } = usePatchData(`/api/tailoring/orders/${orderId}/update`);

//     const [orderStatus, setOrderStatus] = useState(order?.order_status || '');
//     const [orderAssignment, setOrderAssignment] = useState(order?.order_assignment || '');

//     const [showAnimation, setShowAnimation] = useState(false);
//     const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

//     const handleSave = () => {
//         console.log('Saving order:', { orderStatus, orderAssignment });
//         var data  = {}
//         data.orderStatus = orderStatus;
//         data.orderAssignment = orderAssignment;
//         data.updatedBy = authState?.userId;
//         console.log ("Data value" +JSON.stringify(data))
//         setShowAnimation(true);
//         setAnimationType('loading');
//          patchData(data);
//     };

//     useEffect(() => {
//         if (responseData) {
//           if (responseData.status === 201) {
            
//             setAnimationType('success');
//             setTimeout(() => {
//               navigate('/tailoring/orders'); // Navigate to home page after 3 seconds
//             }, 3000);
//           } else {
//             setAnimationType('error');
//           }
//         } else if (error) {
//           setAnimationType('error');
//           setTimeout(() => {
//             navigate('/tailoring/orders'); // Navigate back to checkout page after a few seconds
//           }, 3000);
//         }
//       }, [responseData, error, navigate]);

//     if (!order) return <Spinner size="xl" />;

//     // Extract the first image from the comma-separated image_url
//     //const firstImageUrl = order.product_image_url.split(',')[0];
//     const firstImageUrl = order.product_image_url;

//     return (
//         <Box padding="4" maxW="1200px" margin="auto">

// {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>order has been updated successfully!</Text>
//             </Box>
//           )}
//           {animationType === 'error' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>{error || "An error occurred, please try again."}</Text>
//             </Box>
//           )}
//         </Box>
//       )}
//       {!showAnimation && (
//         <>
//             <Button mb="4" onClick={() => navigate('/orders')}>Back to Order Management</Button>
//             <Text fontSize="2xl" fontWeight="bold" mb="6" textAlign="center">Order Details: {order?.order_id}</Text>

//             <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} mb={6}>
//                 {/* Product Section */}
//                 <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
//                     <Text fontSize="lg" fontWeight="bold" mb="4">Product Details</Text>
//                     <Image src={firstImageUrl} alt="Product Image" boxSize="150px" borderRadius="md" objectFit="cover" />
//                     <Text mt="4"><strong>Product ID:</strong> {order.product_id}</Text>
//                     <Text fontSize="lg" fontWeight="bold" mb="4">Order Info</Text>
//                     <Text><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</Text>
//                     <Text><strong>Appointment Date:</strong> {new Date(order.appointment_date).toLocaleDateString()}</Text>
//                     <Text><strong>Amount:</strong> ₹{order.products_price}</Text>
                    
//                 </Box>

//                 <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
//                     <Text fontSize="lg" fontWeight="bold" mb="4">Delivery Details</Text>
//                     <Text><strong>Delivery Address:</strong> {`${order.name}, ${order.address}, ${order.city}, ${order.pincode}`}</Text>
//                     <Text><strong>Email:</strong> {order.email}</Text>
//                     <Text><strong>Mobile Number:</strong> {order.phone}</Text>
//                 </Box>

//                 {/* Order Info */}
//                 {/* <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
//                     <Text fontSize="lg" fontWeight="bold" mb="4">Order Info</Text>
//                     <Text><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</Text>
//                     <Text><strong>Appointment Date:</strong> {new Date(order.appointment_date).toLocaleDateString()}</Text>
//                     <Text><strong>Return Date:</strong> {new Date(order.return_date).toLocaleDateString()}</Text>
                    
//                     <Text><strong>Amount:</strong> ₹{order.products_price}</Text>
                   
//                 </Box> */}
//             </Grid>



//             {/* Order Status and Assignment */}
//             <Stack spacing={6} mt="8">
//                 <Divider />
//                 <Box>
//                     <FormLabel fontWeight="bold">Order Status</FormLabel>
//                     <Select value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
//                         <option value="Created">Created</option>
//                         <option value="Processing">Processing</option>
//                         <option value="Couriered">Couriered</option>
//                         <option value="Delivered">Delivered</option>
//                         <option value="Completed">Completed</option>
//                     </Select>
//                 </Box>
//                 <Box>
//                     <FormLabel fontWeight="bold">Assigned To</FormLabel>
//                     <Input value={orderAssignment} onChange={(e) => setOrderAssignment(e.target.value)} />
//                 </Box>
//             </Stack>

//             <Button mt="8" colorScheme="teal" size="lg" width="100%" onClick={handleSave}>Save Changes</Button>
//             </>
//             )}
//         </Box>
//     );
// };

// export default TailoringOrderManagementDetails;


// Version 2 : Enhancement to version 1


import React, { useState , useEffect} from 'react';
import { Box, Text, Spinner, FormLabel, Input, Button, Select, Image, Grid, Stack, Divider } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderItem } from '../../types';
import usePostData from '../../hooks/usePostData';
import usePatchData from '../../hooks/usePatchData';
import { useAuth } from '../../contexts/AuthContext';

import Lottie from 'react-lottie';
import successAnimation from '../..//animations/success.json';
import errorAnimation from '../../animations/error.json';
import loadingAnimation from '../../animations/loading.json';

export const TailoringOrderManagementDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {authState} = useAuth();
    const order = location.state?.order as OrderItem;

    const orderId = order?.order_id;

    const { patchData, data, error, isLoading, responseData } = usePatchData(`/api/tailoring/orders/${orderId}/update`);

    const [orderStatus, setOrderStatus] = useState(order?.order_status || '');
    const [orderAssignment, setOrderAssignment] = useState(order?.order_assignment || '');

    const [showAnimation, setShowAnimation] = useState(false);
    const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

    const handleSave = () => {
        console.log('Saving order:', { orderStatus, orderAssignment });
        var data  = {}
        data.orderStatus = orderStatus;
        data.orderAssignment = orderAssignment;
        data.updatedBy = authState?.userId;
        console.log ("Data value" +JSON.stringify(data))
        setShowAnimation(true);
        setAnimationType('loading');
         patchData(data);
    };

    const formatDateTime = (dateStr: string) => {
      return new Date(dateStr).toLocaleString('en-IN', {
        dateStyle: 'full',
        timeStyle: 'short',
      });
    };
    

    useEffect(() => {
        if (responseData) {
          if (responseData.status === 201) {
            
            setAnimationType('success');
            setTimeout(() => {
              navigate('/tailoring/orders'); // Navigate to home page after 3 seconds
            }, 3000);
          } else {
            setAnimationType('error');
          }
        } else if (error) {
          setAnimationType('error');
          setTimeout(() => {
            navigate('/tailoring/orders'); // Navigate back to checkout page after a few seconds
          }, 3000);
        }
      }, [responseData, error, navigate]);

    if (!order) return <Spinner size="xl" />;

    // Extract the first image from the comma-separated image_url
    //const firstImageUrl = order.product_image_url.split(',')[0];
    const firstImageUrl = order.product_image_url;

    return (
        <Box padding="4" maxW="1200px" margin="auto">

{showAnimation && (
        <Box className="animationContainer">
          {animationType === 'loading' && (
            <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
          )}
          {animationType === 'success' && (
            <Box textAlign="center">
              <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
              <Text>order has been updated successfully!</Text>
            </Box>
          )}
          {animationType === 'error' && (
            <Box textAlign="center">
              <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} style={{ width: '150px', height: '150px' }} />
              <Text>{error || "An error occurred, please try again."}</Text>
            </Box>
          )}
        </Box>
      )}
      {!showAnimation && (
        <>
            <Button mb="4" onClick={() => navigate('/orders')}>Back to Order Management</Button>
            <Text fontSize="2xl" fontWeight="bold" mb="6" textAlign="center">Order Details: {order?.order_id}</Text>

            <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} mb={6}>
                {/* Product Section */}
                <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
                    <Text fontSize="lg" fontWeight="bold" mb="4">Product Details</Text>
                    <Image src={firstImageUrl} alt="Product Image" boxSize="150px" borderRadius="md" objectFit="cover" />
                    <Text mt="4"><strong>Product ID:</strong> {order.product_id}</Text>
                    <Text fontSize="lg" fontWeight="bold" mb="4">Order Info</Text>
                    <Text><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</Text>
                    <Text><strong>Appointment Date:</strong> {new Date(order.appointment_date).toLocaleDateString()}</Text>
                    <Text><strong>Amount:</strong> ₹{order.products_price}</Text>
                    {order.has_lining === 1 && (
                    <Text><strong>Lining:</strong> ₹{order.lining_price}</Text>
                  )}

                  {Number(order.speed_price) > 0 && (
                    <Text><strong>Speed Upgrade:</strong> {order.stitching_speed} (+₹{order.speed_price})</Text>
                  )}

                </Box>

                <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
                    <Text fontSize="lg" fontWeight="bold" mb="4">Delivery Details</Text>
                    <Text><strong>Delivery Address:</strong> {`${order.name}, ${order.address}, ${order.city}, ${order.pincode}`}</Text>
                    <Text><strong>Email:</strong> {order.email}</Text>
                    <Text><strong>Mobile Number:</strong> {order.phone}</Text>
                </Box>

                {/* Order Info */}
                {/* <Box boxShadow="md" borderRadius="lg" p="6" bg="white">
                    <Text fontSize="lg" fontWeight="bold" mb="4">Order Info</Text>
                    <Text><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</Text>
                    <Text><strong>Appointment Date:</strong> {new Date(order.appointment_date).toLocaleDateString()}</Text>
                    <Text><strong>Return Date:</strong> {new Date(order.return_date).toLocaleDateString()}</Text>
                    
                    <Text><strong>Amount:</strong> ₹{order.products_price}</Text>
                   
                </Box> */}
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
            </>
            )}
        </Box>
    );
};

export default TailoringOrderManagementDetails;