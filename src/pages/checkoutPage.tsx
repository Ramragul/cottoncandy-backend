// Version 8 - Working Code

// import React, { useState, useEffect } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import Lottie from 'react-lottie';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import '../css/CheckoutPage.css'; // Import your CSS file
// import usePostData from '../hooks/usePostData';

// import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';

// interface CheckoutPageProps {
//   cart: {
//     id: number;
//     name: string;
//     price: number;
//     selectedSize: string;
//     selectedDuration: string;
//     quantity: number;
//   }[];
//   totals: {
//     productsPrice: number;
//     securityDeposit: number;
//     totalAmount: number;
//   };
// }


// // ... DeliveryDetails and CheckoutPayload interfaces remain the same ...

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};
//   const { clearCart } = useCart();
//   const { authState } = useAuth();

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

//   const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = async (data: DeliveryDetails) => {
//     const userId = authState.userId;
//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//       userId : userId
//     };

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload);
//   };

//   const handleGoBackToCart = () => {
//     console.log("AuthState Value" +JSON.stringify(authState));
     
//     //console.log("UserId value from CheckoutPage" + userId);
   
//     navigate('/cart'); // Navigate back to cart page
//   };

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         console.log("Response Status Code CO Page :" +responseData.status)
//         clearCart(); 
//         setAnimationType('success');
//         setTimeout(() => {
//         navigate('/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         console.log("Response Status Code CO Page -2:" +responseData.status)
//         setAnimationType('error');
//       }
//     } else if (error) {
//       console.log("Response Status Code CO Page - 3:" +error)
//       setAnimationType('error');
//       setTimeout(() => {
//       navigate('/cart'); // Navigate back to checkout page after a few seconds
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   return (
//     <Box className="checkoutContainer">
//       {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>Your order has been successfully placed!</Text>
//             </Box>
//           )}
//           {animationType === 'error' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>{error?.message || "An error occurred, please try again."}</Text>
//             </Box>
//           )}
//         </Box>
//       )}
//       {!showAnimation && (
//         <>
//           <Box className="checkoutLeft">
//             <Heading mb={4}>Delivery Details</Heading>
//             <VStack spacing={4} align="stretch">
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//                 {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//                 <Input type="text" placeholder="Last Name" {...register('lastName')} />
//               </HStack>
//               <HStack spacing={4}>
//                 <Input type="email" placeholder="Email Address" {...register('email')} />
//                 <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//                 {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//               </HStack>
//               <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//               {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//               <Input type="text" placeholder="Landmark" {...register('landmark')} />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//                 {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//                 <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//                 {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//               </HStack>
//               <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//               <Controller
//                 name="deliveryType"
//                 control={control}
//                 defaultValue="homeDelivery"
//                 rules={{ required: 'Delivery Type is required' }}
//                 render={({ field }) => (
//                   <RadioGroup {...field}>
//                     <VStack spacing={2} align="stretch">
//                       <Text fontWeight="bold">Delivery Type:</Text>
//                       <HStack spacing={4}>
//                         <Radio value="homeDelivery">Home Delivery</Radio>
//                         <Radio value="showroomPickup">Showroom Pickup</Radio>
//                       </HStack>
//                     </VStack>
//                   </RadioGroup>
//                 )}
//               />

//               <Controller
//                 name="returnPickup"
//                 control={control}
//                 render={({ field }) => (
//                   <Checkbox
//                     {...field}
//                     isChecked={field.value}
//                     onChange={(e) => {
//                       field.onChange(e.target.checked);
//                       setIsReturnPickup(e.target.checked);
//                     }}
//                     colorScheme="pink"
//                   >
//                     Return Pick Up Address Different from the Delivery Address
//                   </Checkbox>
//                 )}
//               />

//               {isReturnPickup && (
//                 <>
//                   <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//                   <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//                   <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//                   <HStack spacing={4}>
//                     <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                     <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//                   </HStack>
//                 </>
//               )}

//               <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//                 Back to Cart
//               </Button>
//             </VStack>
//           </Box>

//           <Box className="checkoutRight">
//             <Heading size="md" mb={4}>Cart Totals</Heading>
//             <Box className="cartTotalsContainer">
//               <VStack spacing={2} align="stretch">
//                 {cart.map((item) => (
//                   <HStack key={item.id} justifyContent="space-between">
//                     <Text>{item.name}</Text>
//                     <Text>₹{item.price}</Text>
//                   </HStack>
//                 ))}
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.productsPrice.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.securityDeposit.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.totalAmount.toFixed(2)}</Text>
//                 </HStack>
//               </VStack>
//               <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0}>
//                 Proceed to Booking
//               </Button>
//             </Box>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default CheckoutPage;


// Version 9 - (version 8 is working ) , this revision has some fix related to build 

// import React, { useState, useEffect } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import Lottie from 'react-lottie';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import '../css/CheckoutPage.css'; // Import your CSS file
// import usePostData from '../hooks/usePostData';

// import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';

// interface CheckoutPageProps {
//   cart: {
//     id: number;
//     name: string;
//     price: number;
//     selectedSize: string;
//     selectedDuration: string;
//     quantity: number;
//   }[];
//   totals: {
//     productsPrice: number;
//     securityDeposit: number;
//     totalAmount: number;
//   };
// }

// interface LocationState {
//   cart: CheckoutPageProps['cart'];
//   totals: CheckoutPageProps['totals'];
// }


// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: 'homeDelivery' | 'showroomPickup';
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }


// // ... DeliveryDetails and CheckoutPayload interfaces remain the same ...

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   //const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   //const location = useLocation<LocationState>();
//   //const location = useLocation() as LocationState;

//   const location = useLocation();
//   const state = location.state as LocationState;



//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};
//   const { clearCart } = useCart();
//   const { authState } = useAuth();

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

//   const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = async (data: DeliveryDetails) => {
//     const userId = authState.userId;
//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//       userId : userId
//     };

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload);
//   };

//   const handleGoBackToCart = () => {
//     console.log("AuthState Value" +JSON.stringify(authState));
     
//     //console.log("UserId value from CheckoutPage" + userId);
   
//     navigate('/cart'); // Navigate back to cart page
//   };

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         console.log("Response Status Code CO Page :" +responseData.status)
//         clearCart(); 
//         setAnimationType('success');
//         setTimeout(() => {
//         navigate('/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         console.log("Response Status Code CO Page -2:" +responseData.status)
//         setAnimationType('error');
//       }
//     } else if (error) {
//       console.log("Response Status Code CO Page - 3:" +error)
//       setAnimationType('error');
//       setTimeout(() => {
//       navigate('/cart'); // Navigate back to checkout page after a few seconds
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   return (
//     <Box className="checkoutContainer">
//       {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>Your order has been successfully placed!</Text>
//             </Box>
//           )}
//           {animationType === 'error' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} style={{ width: '150px', height: '150px' }} />
//               {/* <Text>{error?.message || "An error occurred, please try again."}</Text> */}
//               <Text>{error || "An error occurred, please try again."}</Text>
//             </Box>
//           )}
//         </Box>
//       )}
//       {!showAnimation && (
//         <>
//           <Box className="checkoutLeft">
//             <Heading mb={4}>Delivery Details</Heading>
//             <VStack spacing={4} align="stretch">
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//                 {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//                 <Input type="text" placeholder="Last Name" {...register('lastName')} />
//               </HStack>
//               <HStack spacing={4}>
//                 <Input type="email" placeholder="Email Address" {...register('email')} />
//                 <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//                 {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//               </HStack>
//               <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//               {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//               <Input type="text" placeholder="Landmark" {...register('landmark')} />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//                 {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//                 <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//                 {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//               </HStack>
//               <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//               <Controller
//                 name="deliveryType"
//                 control={control}
//                 defaultValue="homeDelivery"
//                 rules={{ required: 'Delivery Type is required' }}
//                 render={({ field }) => (
//                   <RadioGroup {...field}>
//                     <VStack spacing={2} align="stretch">
//                       <Text fontWeight="bold">Delivery Type:</Text>
//                       <HStack spacing={4}>
//                         <Radio value="homeDelivery">Home Delivery</Radio>
//                         <Radio value="showroomPickup">Showroom Pickup</Radio>
//                       </HStack>
//                     </VStack>
//                   </RadioGroup>
//                 )}
//               />

// <Controller
//   name="returnPickup"
//   control={control}
//   render={({ field }) => (
//     <Checkbox
//       isChecked={field.value as boolean} // Ensure field.value is treated as boolean
//       onChange={(e) => {
//         const checked = e.target.checked;
//         field.onChange(checked); // Update form state
//         setIsReturnPickup(checked); // Update local state
//       }}
//       colorScheme="pink"
//       // Explicitly spread only the required properties
//       // {...field} // Avoid spreading field directly
//     >
//       Return Pick Up Address Different from the Delivery Address
//     </Checkbox>
//   )}
// />


//               {isReturnPickup && (
//                 <>
//                   <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//                   <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//                   <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//                   <HStack spacing={4}>
//                     <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                     <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//                   </HStack>
//                 </>
//               )}

//               <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//                 Back to Cart
//               </Button>
//             </VStack>
//           </Box>

//           <Box className="checkoutRight">
//             <Heading size="md" mb={4}>Cart Totals</Heading>
//             <Box className="cartTotalsContainer">
//               <VStack spacing={2} align="stretch">
//                 {/* {cart.map((item) => ( */}
//                 {cart.map((item: CheckoutPageProps['cart'][number]) => (
//                   <HStack key={item.id} justifyContent="space-between">
//                     <Text>{item.name}</Text>
//                     <Text>₹{item.price}</Text>
//                   </HStack>
//                 ))}
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.productsPrice.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.securityDeposit.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.totalAmount.toFixed(2)}</Text>
//                 </HStack>
//               </VStack>
//               <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0}>
//                 Proceed to Booking
//               </Button>
//             </Box>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default CheckoutPage;



// Version 10 - Version 9 is working version, this is shipping free addition

// import React, { useState, useEffect } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button , Badge} from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import Lottie from 'react-lottie';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import '../css/CheckoutPage.css'; // Import your CSS file
// import usePostData from '../hooks/usePostData';

// import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';

// import { keyframes } from '@emotion/react';

// const bounceAnimation = keyframes`
//   0%, 100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.2);
//   }
// `;

// interface CheckoutPageProps {
//   cart: {
//     id: number;
//     name: string;
//     price: number;
//     selectedSize: string;
//     selectedDuration: string;
//     quantity: number;
//   }[];
//   totals: {
//     productsPrice: number;
//     securityDeposit: number;
//     totalAmount: number;
//   };
// }

// interface LocationState {
//   cart: CheckoutPageProps['cart'];
//   totals: CheckoutPageProps['totals'];
// }


// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: 'homeDelivery' | 'showroomPickup';
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }


// // ... DeliveryDetails and CheckoutPayload interfaces remain the same ...

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   //const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   //const location = useLocation<LocationState>();
//   //const location = useLocation() as LocationState;

//   const location = useLocation();
//   const state = location.state as LocationState;



//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};
//   const { clearCart } = useCart();
//   const { authState } = useAuth();

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

//   const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = async (data: DeliveryDetails) => {
//     const userId = authState.userId;
//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//       userId : userId
//     };

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload);
//   };

//   const handleGoBackToCart = () => {
//     console.log("AuthState Value" +JSON.stringify(authState));
     
//     //console.log("UserId value from CheckoutPage" + userId);
   
//     navigate('/cart'); // Navigate back to cart page
//   };

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         console.log("Response Status Code CO Page :" +responseData.status)
//         clearCart(); 
//         setAnimationType('success');
//         setTimeout(() => {
//         navigate('/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         console.log("Response Status Code CO Page -2:" +responseData.status)
//         setAnimationType('error');
//       }
//     } else if (error) {
//       console.log("Response Status Code CO Page - 3:" +error)
//       setAnimationType('error');
//       setTimeout(() => {
//       navigate('/cart'); // Navigate back to checkout page after a few seconds
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   return (
//     <Box className="checkoutContainer">
//       {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>Your order has been successfully placed!</Text>
//             </Box>
//           )}
//           {animationType === 'error' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} style={{ width: '150px', height: '150px' }} />
//               {/* <Text>{error?.message || "An error occurred, please try again."}</Text> */}
//               <Text>{error || "An error occurred, please try again."}</Text>
//             </Box>
//           )}
//         </Box>
//       )}
//       {!showAnimation && (
//         <>
//           <Box className="checkoutLeft">
//             <Heading mb={4}>Delivery Details</Heading>
//             <VStack spacing={4} align="stretch">
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//                 {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//                 <Input type="text" placeholder="Last Name" {...register('lastName')} />
//               </HStack>
//               <HStack spacing={4}>
//                 <Input type="email" placeholder="Email Address" {...register('email')} />
//                 <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//                 {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//               </HStack>
//               <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//               {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//               <Input type="text" placeholder="Landmark" {...register('landmark')} />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//                 {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//                 <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//                 {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//               </HStack>
//               <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//               <Controller
//                 name="deliveryType"
//                 control={control}
//                 defaultValue="homeDelivery"
//                 rules={{ required: 'Delivery Type is required' }}
//                 render={({ field }) => (
//                   <RadioGroup {...field}>
//                     <VStack spacing={2} align="stretch">
//                       <Text fontWeight="bold">Delivery Type:</Text>
//                       <HStack spacing={4}>
//                         <Radio value="homeDelivery">Home Delivery</Radio>
//                         <Radio value="showroomPickup">Showroom Pickup</Radio>
//                       </HStack>
//                     </VStack>
//                   </RadioGroup>
//                 )}
//               />

// <Controller
//   name="returnPickup"
//   control={control}
//   render={({ field }) => (
//     <Checkbox
//       isChecked={field.value as boolean} // Ensure field.value is treated as boolean
//       onChange={(e) => {
//         const checked = e.target.checked;
//         field.onChange(checked); // Update form state
//         setIsReturnPickup(checked); // Update local state
//       }}
//       colorScheme="pink"
//       // Explicitly spread only the required properties
//       // {...field} // Avoid spreading field directly
//     >
//       Return Pick Up Address Different from the Delivery Address
//     </Checkbox>
//   )}
// />


//               {isReturnPickup && (
//                 <>
//                   <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//                   <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//                   <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//                   <HStack spacing={4}>
//                     <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                     <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//                   </HStack>
//                 </>
//               )}

//               {/* <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//                 Back to Cart
//               </Button> */}
//             </VStack>
//           </Box>

//           <Box className="checkoutRight">
//             <Heading size="md" mb={4}>Cart Totals</Heading>
//             <Box className="cartTotalsContainer">
//               <VStack spacing={2} align="stretch">
//                 {/* {cart.map((item) => ( */}
//                 {cart.map((item: CheckoutPageProps['cart'][number]) => (
//                   <HStack key={item.id} justifyContent="space-between">
//                     <Text>{item.name}</Text>
//                     <Text>₹{item.price}</Text>
//                   </HStack>
//                 ))}
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.productsPrice.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.securityDeposit.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.totalAmount.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between" mt={4}>
//             <Badge
//               colorScheme="green"
//               fontSize="lg"
//               p={2}
//               borderRadius="md"
//               animation={`₹{bounceAnimation} 1s infinite`}
//             >
//               Free Delivery
//             </Badge>
//           </HStack>

//               </VStack>
//               <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0}>
//                 Proceed to Booking
//               </Button>
//             </Box>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default CheckoutPage;


// Version 11 - Version 10 is a working version. This rev has design enhancment for mobile devices

// import React, { useState, useEffect } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button, Badge, useBreakpointValue } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import Lottie from 'react-lottie';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import '../css/CheckoutPage.css'; // Import your CSS file
// import usePostData from '../hooks/usePostData';
// import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';
// import { keyframes } from '@emotion/react';

// const bounceAnimation = keyframes`
//   0%, 100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.2);
//   }
// `;

// interface CheckoutPageProps {
//   cart: {
//     id: number;
//     name: string;
//     price: number;
//     selectedSize: string;
//     selectedDuration: string;
//     quantity: number;
//   }[];
//   totals: {
//     productsPrice: number;
//     securityDeposit: number;
//     totalAmount: number;
//   };
// }

// interface LocationState {
//   cart: CheckoutPageProps['cart'];
//   totals: CheckoutPageProps['totals'];
// }

// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: 'homeDelivery' | 'showroomPickup';
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const state = location.state as LocationState;
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = state || {};
//   const { clearCart } = useCart();
//   const { authState } = useAuth();

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

//   const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = async (data: DeliveryDetails) => {
//     const userId = authState.userId;
//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//       userId: userId
//     };

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload);
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         clearCart();
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         navigate('/cart'); // Navigate back to checkout page after a few seconds
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   // Define responsive column layout
//   const columnLayout = useBreakpointValue({ base: 'column', md: 'row' });

//   return (
//     <Box className="checkoutContainer">
//       {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>Your order has been successfully placed!</Text>
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
//           <Box className="checkoutLeft">
//             <Heading mb={4}>Delivery Details</Heading>
//             <VStack spacing={4} align="stretch">
//               <VStack spacing={4} align="stretch" direction={columnLayout}>
//                 <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//                 {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//                 <Input type="text" placeholder="Last Name" {...register('lastName')} />
//               </VStack>
//               <VStack spacing={4} align="stretch" direction={columnLayout}>
//                 <Input type="email" placeholder="Email Address" {...register('email')} />
//                 <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//                 {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//               </VStack>
//               <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//               {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//               <Input type="text" placeholder="Landmark" {...register('landmark')} />
//               <VStack spacing={4} align="stretch" direction={columnLayout}>
//                 <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//                 {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//                 <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//                 {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//               </VStack>
//               <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//               <Controller
//                 name="deliveryType"
//                 control={control}
//                 defaultValue="homeDelivery"
//                 rules={{ required: 'Delivery Type is required' }}
//                 render={({ field }) => (
//                   <RadioGroup {...field}>
//                     <VStack spacing={2} align="stretch">
//                       <Text fontWeight="bold">Delivery Type:</Text>
//                       <HStack spacing={4}>
//                         <Radio value="homeDelivery">Home Delivery</Radio>
//                         <Radio value="showroomPickup">Showroom Pickup</Radio>
//                       </HStack>
//                     </VStack>
//                   </RadioGroup>
//                 )}
//               />

//               <Controller
//                 name="returnPickup"
//                 control={control}
//                 render={({ field }) => (
//                   <Checkbox
//                     isChecked={field.value as boolean}
//                     onChange={(e) => {
//                       const checked = e.target.checked;
//                       field.onChange(checked);
//                       setIsReturnPickup(checked);
//                     }}
//                     colorScheme="pink"
//                   >
//                     Return Pick Up Address Different from the Delivery Address
//                   </Checkbox>
//                 )}
//               />

//               {isReturnPickup && (
//                 <>
//                   <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//                   <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//                   <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//                   <VStack spacing={4} align="stretch" direction={columnLayout}>
//                     <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                     <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//                   </VStack>
//                 </>
//               )}

//               <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0}>
//                 Proceed to Booking
//               </Button>
//             </VStack>
//           </Box>

//           <Box className="checkoutRight" mt={4}>
//             <Heading mb={4}>Order Summary</Heading>
//             <VStack spacing={4} align="stretch">
//               {cart.map((item) => (
//                 <Box key={item.id} p={4} borderWidth="1px" borderRadius="md">
//                   <Text fontWeight="bold">{item.name}</Text>
//                   <Text>Size: {item.selectedSize}</Text>
//                   <Text>Duration: {item.selectedDuration}</Text>
//                   <Text>Quantity: {item.quantity}</Text>
//                   {/* <Text>Price: ₹{item.price.toFixed(2)}</Text> */}
//                   <Text>Price: ₹{item.price}</Text>
//                 </Box>
//               ))}
//               <Box p={4} borderWidth="1px" borderRadius="md">
//                 <Text fontWeight="bold">Total:</Text>
//                 <Text>Products Price: ₹{totals.productsPrice.toFixed(2)}</Text>
//                 <Text>Security Deposit: ₹{totals.securityDeposit.toFixed(2)}</Text>
//                 <Text fontWeight="bold">Grand Total: ₹{totals.totalAmount.toFixed(2)}</Text>
//               </Box>
//               <Badge colorScheme="pink" variant="solid">
//                 Free Delivery
//               </Badge>
//             </VStack>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };


// Version 12 : Version 10 is the working version, this is an enhancement to 10 . Free Delivery option animation fix


// import React, { useState, useEffect } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button, Badge, Center } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import Lottie from 'react-lottie';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import '../css/CheckoutPage.css'; // Import your CSS file
// import usePostData from '../hooks/usePostData';

// import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';

// import { keyframes } from '@emotion/react';

// // Bounce animation definition
// const bounceAnimation = keyframes`
//   0%, 100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.2);
//   }
// `;

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const state = location.state as LocationState;

//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};
//   const { clearCart } = useCart();
//   const { authState } = useAuth();

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

//   const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = async (data: DeliveryDetails) => {
//     const userId = authState.userId;
//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//       userId : userId
//     };

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload);
//   };

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         clearCart(); 
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         navigate('/cart'); // Navigate back to checkout page after a few seconds
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   return (
//     <Center>
//     <Box className="checkoutContainer">
//       {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>Your order has been successfully placed!</Text>
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
//           <Box className="checkoutLeft">
//             <Heading mb={4}>Delivery Details</Heading>
//             <VStack spacing={4} align="stretch">
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//                 {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//                 <Input type="text" placeholder="Last Name" {...register('lastName')} />
//               </HStack>
//               <HStack spacing={4}>
//                 <Input type="email" placeholder="Email Address" {...register('email')} />
//                 <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//                 {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//               </HStack>
//               <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//               {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//               <Input type="text" placeholder="Landmark" {...register('landmark')} />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//                 {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//                 <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//                 {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//               </HStack>
//               <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//               <Controller
//                 name="deliveryType"
//                 control={control}
//                 defaultValue="homeDelivery"
//                 rules={{ required: 'Delivery Type is required' }}
//                 render={({ field }) => (
//                   <RadioGroup {...field}>
//                     <VStack spacing={2} align="stretch">
//                       <Text fontWeight="bold">Delivery Type:</Text>
//                       <HStack spacing={4}>
//                         <Radio value="homeDelivery">Home Delivery</Radio>
//                         <Radio value="showroomPickup">Showroom Pickup</Radio>
//                       </HStack>
//                     </VStack>
//                   </RadioGroup>
//                 )}
//               />

//               <Controller
//                 name="returnPickup"
//                 control={control}
//                 render={({ field }) => (
//                   <Checkbox
//                     isChecked={field.value as boolean} // Ensure field.value is treated as boolean
//                     onChange={(e) => {
//                       const checked = e.target.checked;
//                       field.onChange(checked); // Update form state
//                       setIsReturnPickup(checked); // Update local state
//                     }}
//                     colorScheme="pink"
//                   >
//                     Return Pick Up Address Different from the Delivery Address
//                   </Checkbox>
//                 )}
//               />

//               {isReturnPickup && (
//                 <>
//                   <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//                   <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//                   <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//                   <HStack spacing={4}>
//                     <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                     <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//                   </HStack>
//                 </>
//               )}
//             </VStack>
//           </Box>

//           <Box className="checkoutRight">
//             <Heading size="md" mb={4}>Cart Totals</Heading>
//             <Box className="cartTotalsContainer">
//               <VStack spacing={2} align="stretch">
//                 {cart.map((item: CheckoutPageProps['cart'][number]) => (
//                   <HStack key={item.id} justifyContent="space-between">
//                     <Text>{item.name}</Text>
//                     <Text>₹{item.price}</Text>
//                   </HStack>
//                 ))}
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.productsPrice.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.securityDeposit.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//                   <Text fontWeight="bold" color="pink.500">₹{totals.totalAmount.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="flex-start">
//                   <Badge
//                     colorScheme="green"
//                     fontSize="sm"
//                     p={1}
//                     borderRadius="full"
//                     boxShadow="md"
//                     animation={`${bounceAnimation} 1.5s infinite`}
//                   >
//                     Free Delivery!
//                   </Badge>
//                 </HStack>
//               </VStack>
//             </Box>
//             <Button
//               type="submit"
//               mt={4}
//               colorScheme="pink"
//               w="100%"
//               onClick={handleSubmit(onSubmit)}
//             >
//               Place Order
//             </Button>
//           </Box>
//         </>
//       )}
//     </Box>
//     </Center>
//   );
// };

// export default CheckoutPage;



// Version 13 : Clone of Version 12 , Paymment Integration

import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button, Badge, Center } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Lottie from 'react-lottie';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import loadingAnimation from '../animations/loading.json';
import '../css/CheckoutPage.css'; // Import your CSS file
import usePostData from '../hooks/usePostData';

import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

import { keyframes } from '@emotion/react';

// Bounce animation definition
const bounceAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};
  const { clearCart } = useCart();
  const { authState } = useAuth();

  const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
  const [isReturnPickup, setIsReturnPickup] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

  const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track button status
  const [paymentType, setPaymentType] = useState("");
  
  const onSubmit = async (data: DeliveryDetails) => {
    setIsSubmitting(true);
     console.log("User Selected PaymentType is "+data.paymentType);
     setPaymentType(data.paymentType)
    const userId = authState.userId;
    const payload = {
      deliveryDetails: data,
      cart: cart,
      totals: totals,
      userId : userId
    };
   
    await postData(payload);
   
    
  };

  const handlePayment = async (cc_order) => {
   
    var amount = totals;
    console.log("Amount from Handle Payment function" +JSON.stringify(amount))

    // Create order from your backend
    const response = await fetch("https://admee.in:3003/api/cc/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const { orderId } = await response.json();
    console.log("Order Created:", orderId);
    setIsSubmitting(false); 

    const options = {
      //key: "rzp_test_ibKEA4VVo2kkgV", // Use test key
      key: "rzp_live_eRPZbHTMQV50Ws", // live 
      amount: amount * 100,
      currency: "INR",
      name: "Cotton Candy",
      description: "Order Payment",
      order_id: orderId, // Order ID from backend
      // handler: (response: { razorpay_payment_id: any }) => {
      //   alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      // },

      handler: async (response) => {
        if (response.razorpay_payment_id) {
          console.log("✅ Payment Successful:", response);
          console.log("Order ID value inside handler function :"+cc_order);

          // Send payment details to backend for order update
          const updateResponse = await fetch(`https://admee.in:3003/api/cc/order/${cc_order}/payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: orderId, // Backend Order ID
              paymentId: response.razorpay_payment_id, // Razorpay Payment ID
              signature: response.razorpay_signature, // Razorpay Signature
              paymentScenario: "rental"
            }),
          });

          const result = await updateResponse.json();
          console.log("result from update response" +JSON.stringify(result))
          console.log("Result Status" +updateResponse.status)
          if (updateResponse.status === 200) {
            //alert("🎉 Payment Successful! Order updated.");
            clearCart(); 
            setShowAnimation(true);
            setAnimationType('success');
            setTimeout(() => {
              navigate('/home'); // Navigate to home page after 3 seconds
            }, 2000);
          } else {
            alert("⚠️ Payment successful but order update failed. Contact support Team.");
          }
        } else {
          alert("⚠️ Payment failed! Try again.");
        }
      },

      prefill: {
        name: (authState.userName) ? authState.userName : "User",
        email: (authState.userEmail) ? authState.userEmail : "user mail",
        contact: "9566",
      },
      theme: { color: "#b365c7" },
    };

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (responseData) {
      console.log("Response Data " +JSON.stringify(responseData))
      if (responseData.status === 201) {

        console.log("Payment Type inside use effect boss" +paymentType)
        if(paymentType === "payNow")
        {
        handlePayment(responseData.orderId);
        }
        else if (paymentType === "cod")
        {
         clearCart(); 
         setShowAnimation(true)
         setAnimationType('success');
         setTimeout(() => {
           navigate('/home'); // Navigate to home page after 3 seconds
         }, 3000);
        }
      } else {
        setAnimationType('error');
      }
    } else if (error) {
      setAnimationType('error');
      setTimeout(() => {
        navigate('/cart'); // Navigate back to checkout page after a few seconds
      }, 3000);
    }
  }, [responseData, error, navigate]);

  return (
    <Center>
    <Box className="checkoutContainer">
      {showAnimation && (
        <Box className="animationContainer">
          {animationType === 'loading' && (
            <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
          )}
          {animationType === 'success' && (
            <Box textAlign="center">
              <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
              <Text>Your order has been successfully placed!</Text>
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
          <Box className="checkoutLeft">
            <Heading mb={4}>Delivery Details</Heading>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
                {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
                <Input type="text" placeholder="Last Name" {...register('lastName')} />
              </HStack>
              <HStack spacing={4}>
                <Input type="email" placeholder="Email Address" {...register('email')} />
                <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
                {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
              </HStack>
              <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
              {errors.address && <Text color="red.500">{errors.address.message}</Text>}
              <Input type="text" placeholder="Landmark" {...register('landmark')} />
              <HStack spacing={4}>
                <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
                {errors.city && <Text color="red.500">{errors.city.message}</Text>}
                <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
                {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
              </HStack>
              <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

              <Controller
                name="deliveryType"
                control={control}
                defaultValue="homeDelivery"
                rules={{ required: 'Delivery Type is required' }}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <VStack spacing={2} align="stretch">
                      <Text fontWeight="bold">Delivery Type:</Text>
                      <HStack spacing={4}>
                        <Radio value="homeDelivery">Home Delivery</Radio>
                        <Radio value="showroomPickup">Showroom Pickup</Radio>
                      </HStack>
                    </VStack>
                  </RadioGroup>
                )}
              />

              <Controller
                name="returnPickup"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isChecked={field.value as boolean} // Ensure field.value is treated as boolean
                    onChange={(e) => {
                      const checked = e.target.checked;
                      field.onChange(checked); // Update form state
                      setIsReturnPickup(checked); // Update local state
                    }}
                    colorScheme="pink"
                  >
                    Return Pick Up Address Different from the Delivery Address
                  </Checkbox>
                )}
              />



              {isReturnPickup && (
                <>
                  <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
                  <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
                  <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
                  <HStack spacing={4}>
                    <Input type="text" placeholder="Return City" {...register('returnCity')} />
                    <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
                  </HStack>
                </>
              )}


              <Controller
                name="paymentType"
                control={control}
                defaultValue="cod"
                rules={{ required: 'Payment Type is required' }}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <VStack spacing={2} align="stretch">
                      <Text fontWeight="bold">Payment Type:</Text>
                      <HStack spacing={4}>
                        <Radio value="payNow">Card / UPI / NetBanking</Radio>
                        <Radio value="cod">Cash on Delivery</Radio>
                        
                      </HStack>
                    </VStack>
                  </RadioGroup>
                )}
              />

              
            </VStack>
          </Box>

          <Box className="checkoutRight">
            <Heading size="md" mb={4}>Cart Totals</Heading>
            <Box className="cartTotalsContainer">
              <VStack spacing={2} align="stretch">
                {cart.map((item: CheckoutPageProps['cart'][number]) => (
                  <HStack key={item.id} justifyContent="space-between">
                    <Text>{item.name}</Text>
                    <Text>₹{item.price}</Text>
                  </HStack>
                ))}
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold" color="pink.500">Products Price:</Text>
                  <Text fontWeight="bold" color="pink.500">₹{totals.productsPrice.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold" color="pink.500">Handling Fee:</Text>
                  <Text fontWeight="bold" color="pink.500">₹{totals.handlingFee}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
                  <Text fontWeight="bold" color="pink.500">₹{totals.securityDeposit.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
                  <Text fontWeight="bold" color="pink.500">₹{totals.totalAmount.toFixed(2)}</Text>
                </HStack>
                {/* <HStack justifyContent="flex-start">
                  <Badge
                    colorScheme="green"
                    fontSize="sm"
                    p={1}
                    borderRadius="full"
                    boxShadow="md"
                    animation={`${bounceAnimation} 1.5s infinite`}
                  >
                    Free Delivery!
                  </Badge>
                </HStack> */}
              </VStack>
            </Box>
            <Button
              type="submit"
              mt={4}
              colorScheme="pink"
              w="100%"
              onClick={handleSubmit(onSubmit)}
              isDisabled={isSubmitting} // Disable while submitting
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </Box>
        </>
      )}
    </Box>
    </Center>
  );
};

export default CheckoutPage;
