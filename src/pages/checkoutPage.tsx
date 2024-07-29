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
//                     <Text>${item.price}</Text>
//                   </HStack>
//                 ))}
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//                   <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//                   <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//                   <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
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
//                     <Text>${item.price}</Text>
//                   </HStack>
//                 ))}
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//                   <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//                   <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
//                 </HStack>
//                 <HStack justifyContent="space-between">
//                   <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//                   <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
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

import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button , Badge} from '@chakra-ui/react';
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

const bounceAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

interface CheckoutPageProps {
  cart: {
    id: number;
    name: string;
    price: number;
    selectedSize: string;
    selectedDuration: string;
    quantity: number;
  }[];
  totals: {
    productsPrice: number;
    securityDeposit: number;
    totalAmount: number;
  };
}

interface LocationState {
  cart: CheckoutPageProps['cart'];
  totals: CheckoutPageProps['totals'];
}


interface DeliveryDetails {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  orderNotes?: string;
  deliveryType: 'homeDelivery' | 'showroomPickup';
  returnPickup: boolean;
  returnAddress?: string;
  returnLandmark?: string;
  returnCity?: string;
  returnPincode?: string;
}


// ... DeliveryDetails and CheckoutPayload interfaces remain the same ...

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  //const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
  //const location = useLocation<LocationState>();
  //const location = useLocation() as LocationState;

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

  const onSubmit = async (data: DeliveryDetails) => {
    const userId = authState.userId;
    const payload = {
      deliveryDetails: data,
      cart: cart,
      totals: totals,
      userId : userId
    };

    setShowAnimation(true);
    setAnimationType('loading');
    await postData(payload);
  };

  const handleGoBackToCart = () => {
    console.log("AuthState Value" +JSON.stringify(authState));
     
    //console.log("UserId value from CheckoutPage" + userId);
   
    navigate('/cart'); // Navigate back to cart page
  };

  useEffect(() => {
    if (responseData) {
      if (responseData.status === 201) {
        console.log("Response Status Code CO Page :" +responseData.status)
        clearCart(); 
        setAnimationType('success');
        setTimeout(() => {
        navigate('/home'); // Navigate to home page after 3 seconds
        }, 3000);
      } else {
        console.log("Response Status Code CO Page -2:" +responseData.status)
        setAnimationType('error');
      }
    } else if (error) {
      console.log("Response Status Code CO Page - 3:" +error)
      setAnimationType('error');
      setTimeout(() => {
      navigate('/cart'); // Navigate back to checkout page after a few seconds
      }, 3000);
    }
  }, [responseData, error, navigate]);

  return (
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
              {/* <Text>{error?.message || "An error occurred, please try again."}</Text> */}
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
      // Explicitly spread only the required properties
      // {...field} // Avoid spreading field directly
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

              {/* <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
                Back to Cart
              </Button> */}
            </VStack>
          </Box>

          <Box className="checkoutRight">
            <Heading size="md" mb={4}>Cart Totals</Heading>
            <Box className="cartTotalsContainer">
              <VStack spacing={2} align="stretch">
                {/* {cart.map((item) => ( */}
                {cart.map((item: CheckoutPageProps['cart'][number]) => (
                  <HStack key={item.id} justifyContent="space-between">
                    <Text>{item.name}</Text>
                    <Text>${item.price}</Text>
                  </HStack>
                ))}
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold" color="pink.500">Products Price:</Text>
                  <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
                  <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
                  <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between" mt={4}>
            <Badge
              colorScheme="green"
              fontSize="lg"
              p={2}
              borderRadius="md"
              animation={`${bounceAnimation} 1s infinite`}
            >
              Free Delivery
            </Badge>
          </HStack>
          <HStack justifyContent="space-between" mt={4}>
            <Badge
              colorScheme="Yellow"
              fontSize="lg"
              p={2}
              borderRadius="md"
              animation={`${bounceAnimation} 1s infinite`}
            >
              Cash on Delivery
            </Badge>
          </HStack>

              </VStack>
              <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0}>
                Proceed to Booking
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CheckoutPage;

