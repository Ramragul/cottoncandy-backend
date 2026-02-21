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


// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   Image,
//   Select,
//   Input,
//   Button,
//   Grid,
//   Badge,
//   Stack,
//   Flex,
//   Divider,
//   Spinner,
//   useToast
// } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import usePatchData from '../../hooks/usePatchData';
// import { useAuth } from '../../contexts/AuthContext';
// import Lottie from 'react-lottie';
// import successAnimation from '../../animations/success.json';
// import loadingAnimation from '../../animations/loading.json';

// const STATUS_FLOW = [
//   'Created',
//   'Processing',
//   'Stitching',
//   'Quality Check',
//   'Ready',
//   'Delivered',
//   'Completed'
// ];

// export const TailoringOrderManagementDetails = () => {
//   const { authState } = useAuth();
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const toast = useToast();

//   const order = state?.order;

//   const { patchData, isLoading, responseData, error } =
//     usePatchData(`/api/tailoring/orders/${order.order_id}/update`);

//   const [status, setStatus] = useState(order.order_status);
//   const [assignment, setAssignment] = useState(order.order_assignment || '');
//   const [appointmentDate, setAppointmentDate] = useState(
//     order.appointment_date
//       ? new Date(order.appointment_date).toISOString().slice(0,16)
//       : ''
//   );

//   const [showSuccess, setShowSuccess] = useState(false);

//   // 🔥 HANDLE UPDATE
//   const handleSave = () => {
//     patchData({
//       orderStatus: status,
//       orderAssignment: assignment,
//       appointmentDate: appointmentDate,
//       updatedBy: authState?.userId
//     });
//   };

//   // 🔥 SUCCESS HANDLER
//   useEffect(() => {
//     if (responseData?.status === 200) {
//       setShowSuccess(true);
//       setTimeout(() => {
//         navigate(-1);
//       }, 2500);
//     }

//     if (error) {
//       toast({
//         title: "Update Failed",
//         description: error,
//         status: "error",
//         duration: 4000,
//         isClosable: true
//       });
//     }
//   }, [responseData, error]);

//   // 🔥 DATE MIN (TODAY)
//   const minDateTime = new Date().toISOString().slice(0,16);

//   if (!order) return <Spinner size="xl" />;

//   return (
//     <Box p={{ base:4, md:8 }} maxW="1200px" mx="auto">

//       {/* BACK BUTTON */}
//       <Button mb={6} onClick={()=>navigate(-1)}>
//         ← Back
//       </Button>

//       <Text fontSize="3xl" fontWeight="bold" mb={8}>
//         Order #{order.order_id}
//       </Text>

//       <Grid templateColumns={{ base:'1fr', md:'1fr 1fr' }} gap={8}>

//         {/* PRODUCT SECTION */}
//         <Box bg="white" p={6} borderRadius="2xl" boxShadow="xl">
//           <Image
//             src={order.product_image_url}
//             borderRadius="lg"
//             mb={4}
//           />

//           <Text fontWeight="bold">
//             Product ID: {order.product_id}
//           </Text>

//           <Text mt={2}>
//             Stitch Option: {order.stitch_option}
//           </Text>

//           {order.has_lining === 1 && (
//             <Badge mt={2} colorScheme="purple">
//               Lining + ₹{order.lining_price}
//             </Badge>
//           )}

//           {Number(order.speed_price) > 0 && (
//             <Badge mt={2} ml={2} colorScheme="blue">
//               {order.stitching_speed} + ₹{order.speed_price}
//             </Badge>
//           )}

//           <Divider my={4} />

//           <Text fontWeight="bold">Appointment</Text>

//           <Input
//             type="datetime-local"
//             value={appointmentDate}
//             min={minDateTime}
//             onChange={(e)=>setAppointmentDate(e.target.value)}
//             mt={2}
//           />

//           <Text fontSize="sm" color="gray.500" mt={2}>
//             Allowed time: 10 AM – 7 PM only
//           </Text>

//           <Text mt={4}>
//             Order Created:
//             {new Date(order.order_date).toLocaleString('en-IN',{
//               dateStyle:'medium',
//               timeStyle:'short'
//             })}
//           </Text>
//         </Box>

//         {/* CUSTOMER SECTION */}
//         <Box bg="white" p={6} borderRadius="2xl" boxShadow="xl">
//           <Text fontWeight="bold" mb={3}>
//             Customer Details
//           </Text>

//           <Text><b>Name:</b> {order.name}</Text>
//           <Text><b>Phone:</b> {order.phone}</Text>
//           <Text><b>Email:</b> {order.email}</Text>
//           <Text>
//             <b>Address:</b> {order.address}, {order.city} - {order.pincode}
//           </Text>

//           <Divider my={4} />

//           <Text fontWeight="bold">Payment</Text>
//           <Badge
//             mt={2}
//             colorScheme={order.payment_status === 'Paid' ? 'green' : 'red'}
//           >
//             {order.payment_status || 'Unpaid'}
//           </Badge>

//           <Divider my={4} />

//           <Text fontWeight="bold">Customizations</Text>

//           {order.customizations?.length > 0 ? (
//             <Stack mt={3} spacing={3}>
//               {order.customizations.map((c:any)=>(
//                 <Flex key={c.customizationId}
//                   p={3}
//                   border="1px solid"
//                   borderColor="gray.200"
//                   borderRadius="lg"
//                   align="center"
//                   gap={4}
//                 >
//                   <Image
//                     src={c.image}
//                     boxSize="60px"
//                     borderRadius="md"
//                   />
//                   <Box>
//                     <Text fontWeight="600">{c.name}</Text>
//                     <Badge colorScheme="green">
//                       + ₹{c.priceAdjustment}
//                     </Badge>
//                   </Box>
//                 </Flex>
//               ))}
//             </Stack>
//           ) : (
//             <Text mt={2} color="gray.500">
//               No customizations selected
//             </Text>
//           )}
//         </Box>
//       </Grid>

//       {/* STATUS & ASSIGNMENT */}
//       <Box mt={10} bg="white" p={6} borderRadius="2xl" boxShadow="xl">

//         <Text fontWeight="bold" mb={4}>
//           Workflow Management
//         </Text>

//         <Select
//           value={status}
//           onChange={(e)=>setStatus(e.target.value)}
//         >
//           {STATUS_FLOW.map((s)=>(
//             <option key={s}>{s}</option>
//           ))}
//         </Select>

//         <Input
//           mt={4}
//           placeholder="Assign Tailor"
//           value={assignment}
//           onChange={(e)=>setAssignment(e.target.value)}
//         />

//         <Button
//           mt={6}
//           colorScheme="teal"
//           width="100%"
//           onClick={handleSave}
//           isDisabled={isLoading}
//         >
//           {isLoading ? <Spinner size="sm" /> : "Update Order"}
//         </Button>
//       </Box>

//       {/* SUCCESS ANIMATION */}
//       {showSuccess && (
//         <Box textAlign="center" mt={8}>
//           <Lottie
//             options={{
//               loop:false,
//               autoplay:true,
//               animationData:successAnimation
//             }}
//             height={150}
//             width={150}
//           />
//           <Text mt={2} color="green.500">
//             Order Updated Successfully
//           </Text>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default TailoringOrderManagementDetails;


// Version 3 : Enhancement to version 2

import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Image,
  Select,
  Input,
  Button,
  Grid,
  Badge,
  Stack,
  Flex,
  Divider,
  Spinner,
  useToast,
  VStack,
  HStack
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import usePatchData from '../../hooks/usePatchData';
import { useAuth } from '../../contexts/AuthContext';
import Lottie from 'react-lottie';
import successAnimation from '../../animations/success.json';

const STATUS_FLOW = [
  'Created',
  'Processing',
  'Stitching',
  'Quality Check',
  'Ready',
  'Delivered',
  'Completed'
];

export const TailoringOrderManagementDetails = () => {
  const { authState } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const order = state?.order;

  const { patchData, isLoading, responseData, error } =
    usePatchData(`/api/tailoring/orders/${order.order_id}/update`);

  const [status, setStatus] = useState(order.order_status);
  const [assignment, setAssignment] = useState(order.order_assignment || '');
  const [appointmentDate, setAppointmentDate] = useState(
    order.appointment_date
      ? new Date(order.appointment_date).toISOString().slice(0, 16)
      : ''
  );

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    patchData({
      orderStatus: status,
      orderAssignment: assignment,
      appointmentDate,
      updatedBy: authState?.userId
    });
  };

  useEffect(() => {
    if (responseData?.status === 200) {
      setShowSuccess(true);
      setTimeout(() => navigate(-1), 2500);
    }

    if (error) {
      toast({
        title: "Update Failed",
        description: error,
        status: "error",
        duration: 4000,
        isClosable: true
      });
    }
  }, [responseData, error]);

  if (!order) return <Spinner size="xl" />;

  const basePrice = Number(order.products_price || 0);
  const liningPrice = order.has_lining === 1 ? Number(order.lining_price || 0) : 0;
  const speedPrice = Number(order.speed_price || 0);
  const totalAmount = Number(order.total_amount || 0);

  return (
    <Box p={{ base: 4, md: 8 }} maxW="1200px" mx="auto">

      <Button mb={6} onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Order #{order.order_id}
      </Text>

      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>

        {/* PRODUCT & PRICE SECTION */}
        <Box bg="white" p={6} borderRadius="2xl" boxShadow="lg">

          <Image src={order.product_image_url} borderRadius="xl" mb={4} />

          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Product Pricing Breakdown
          </Text>

          <Stack spacing={2}>
            <HStack justify="space-between">
              <Text>Base Product Price</Text>
              <Text>₹ {basePrice.toFixed(2)}</Text>
            </HStack>

            {liningPrice > 0 && (
              <HStack justify="space-between">
                <Text>Lining</Text>
                <Text>₹ {liningPrice.toFixed(2)}</Text>
              </HStack>
            )}

            {speedPrice > 0 && order.stitching_speed !== "standard" && (
              <HStack justify="space-between">
                <Text>
                  Stitching Speed ({order.stitching_speed})
                </Text>
                <Text>₹ {speedPrice.toFixed(2)}</Text>
              </HStack>
            )}

            {order.customizations?.length > 0 &&
              order.customizations.map((c: any) => (
                <HStack key={c.customizationId} justify="space-between">
                  <Text>{c.name}</Text>
                  <Text>₹ {Number(c.priceAdjustment).toFixed(2)}</Text>
                </HStack>
              ))
            }

            <Divider />

            <HStack justify="space-between" fontWeight="bold" fontSize="lg">
              <Text>Total Amount</Text>
              <Text color="green.600">
                ₹ {totalAmount.toFixed(2)}
              </Text>
            </HStack>
          </Stack>

          <Divider my={6} />

          {/* RESCHEDULE SECTION */}
          <Text fontWeight="bold" mb={2}>
            Reschedule Appointment
          </Text>

          <Input
            type="datetime-local"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />

          <Text fontSize="sm" color="gray.500" mt={2}>
            Allowed time: 10 AM – 7 PM only
          </Text>
        </Box>

        {/* CUSTOMER & PAYMENT SECTION */}
        <Box bg="white" p={6} borderRadius="2xl" boxShadow="lg">

          <Text fontWeight="bold" mb={4}>
            Customer Details
          </Text>

          <VStack align="start" spacing={1}>
            <Text><b>Name:</b> {order.name}</Text>
            <Text><b>Phone:</b> {order.phone}</Text>
            <Text><b>Email:</b> {order.email}</Text>
            <Text>
              <b>Address:</b> {order.address}, {order.city} - {order.pincode}
            </Text>
          </VStack>

          <Divider my={6} />

          <Text fontWeight="bold" mb={2}>
            Payment Details
          </Text>

          <Stack spacing={2}>
            <HStack justify="space-between">
              <Text>Status</Text>
              <Badge
                colorScheme={order.payment_status === 'Paid' ? 'green' : 'red'}
              >
                {order.payment_status || 'Unpaid'}
              </Badge>
            </HStack>

            <HStack justify="space-between">
              <Text>Payment Type</Text>
              <Text>{order.payment_type || 'N/A'}</Text>
            </HStack>

            <HStack justify="space-between">
              <Text>Payment Source</Text>
              <Text>{order.payment_source || 'N/A'}</Text>
            </HStack>

            <HStack justify="space-between">
              <Text>Payment ID</Text>
              <Text fontSize="sm">{order.payment_id || 'N/A'}</Text>
            </HStack>
          </Stack>
        </Box>
      </Grid>

      {/* WORKFLOW SECTION */}
      <Box mt={10} bg="white" p={6} borderRadius="2xl" boxShadow="lg">

        <Text fontWeight="bold" mb={4}>
          Workflow Management
        </Text>

        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          {STATUS_FLOW.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </Select>

        <Input
          mt={4}
          placeholder="Assign Tailor"
          value={assignment}
          onChange={(e) => setAssignment(e.target.value)}
        />

        <Button
          mt={6}
          colorScheme="teal"
          width="100%"
          onClick={handleSave}
          isDisabled={isLoading}
        >
          {isLoading ? <Spinner size="sm" /> : "Update Order"}
        </Button>
      </Box>

      {/* FULL SCREEN SUCCESS OVERLAY */}
      {showSuccess && (
        <Flex
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0,0,0,0.6)"
          backdropFilter="blur(6px)"
          justify="center"
          align="center"
          zIndex="9999"
          direction="column"
        >
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: successAnimation
            }}
            height={200}
            width={200}
          />
          <Text mt={4} color="white" fontSize="xl">
            Order Updated Successfully
          </Text>
        </Flex>
      )}

    </Box>
  );
};

export default TailoringOrderManagementDetails;