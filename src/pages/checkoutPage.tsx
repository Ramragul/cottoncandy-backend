// import React, { useState } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import '../css/CheckoutPage.css'; // Import your CSS file

// export const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);

//   const handleProceedToBooking = () => {
//     // Implement logic to proceed to booking
//     alert('Proceed to booking logic here');
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   return (
//     <Box className="checkoutContainer">
//       <Box className="checkoutLeft">
//         <Heading mb={4}>Delivery Details</Heading>
//         <VStack spacing={4} align="stretch">
//           <HStack spacing={4}>
//             <Input type="text" placeholder="First Name" />
//             <Input type="text" placeholder="Last Name" />
//           </HStack>
//           <HStack spacing={4}>
//             <Input type="email" placeholder="Email Address" />
//             <Input type="tel" placeholder="Mobile Number" />
//           </HStack>
//           <Input type="text" placeholder="Address" />
//           <Input type="text" placeholder="Landmark" />
//           <HStack spacing={4}>
//             <Input type="text" placeholder="City" />
//             <Input type="text" placeholder="Pincode" />
//           </HStack>
//           <Input type="text" placeholder="Order Notes" />

//           <RadioGroup defaultValue="homeDelivery">
//             <VStack spacing={2} align="stretch">
//               <Text fontWeight="bold">Delivery Type:</Text>
//               <HStack spacing={4}>
//                 <Radio value="homeDelivery">Home Delivery</Radio>
//                 <Radio value="showroomPickup">Showroom Pickup</Radio>
//               </HStack>
//             </VStack>
//           </RadioGroup>

//           <Checkbox
//             onChange={(e) => setIsReturnPickup(e.target.checked)}
//             isChecked={isReturnPickup}
//             colorScheme="pink"
//           >
//             Return Pick Up Address Different from the Delivery Address
//           </Checkbox>

//           {isReturnPickup && (
//             <>
//               <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//               <Input type="text" placeholder="Return Address" />
//               <Input type="text" placeholder="Return Landmark" />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="Return City" />
//                 <Input type="text" placeholder="Return Pincode" />
//               </HStack>
//             </>
//           )}

//           <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//             Back to Cart
//           </Button>
//         </VStack>
//       </Box>

//       <Box className="checkoutRight">
//         <Heading size="md" mb={4}>Cart Totals</Heading>
//         {/* Insert Cart Totals component or similar structure */}
//         {/* Replace below with actual Cart Totals implementation */}
//         <Box className="cartTotalsContainer">
//           <VStack spacing={2} align="stretch">
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//               <Text fontWeight="bold" color="pink.500">$100</Text> {/* Replace with actual calculated price */}
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//               <Text fontWeight="bold" color="pink.500">$50</Text> {/* Replace with actual calculated deposit */}
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//               <Text fontWeight="bold" color="pink.500">$150</Text> {/* Replace with actual calculated total */}
//             </HStack>
//           </VStack>
//           <Button colorScheme="pink" width="100%" onClick={handleProceedToBooking}>
//             Proceed to Booking
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CheckoutPage;


// Version 2 Code - Product Details Extraction logic from CartPage

// import React, { useState } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../css/CheckoutPage.css'; // Import your CSS file

// interface CheckoutPageProps {
//   cart: {
//     ProductID: number;
//     ProductName: string;
//     ProductPrice: number;
//     selectedSize: string;
//     selectedDuration: string;
//     quantity: number;
//   }[];
// }

// export const CheckoutPage: React.FC<CheckoutPageProps> = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart'] }>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const { cart } = location.state || { cart: [] }; // Retrieve cart data from location state

//   console.log ("Product Details from Checkout Page" +JSON.stringify(cart))

//   const handleProceedToBooking = () => {
//     // Implement logic to proceed to booking
//     alert('Proceed to booking logic here');
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   return (
//     <Box className="checkoutContainer">
//       <Box className="checkoutLeft">
//         <Heading mb={4}>Delivery Details</Heading>
//         <VStack spacing={4} align="stretch">
//           <HStack spacing={4}>
//             <Input type="text" placeholder="First Name" />
//             <Input type="text" placeholder="Last Name" />
//           </HStack>
//           <HStack spacing={4}>
//             <Input type="email" placeholder="Email Address" />
//             <Input type="tel" placeholder="Mobile Number" />
//           </HStack>
//           <Input type="text" placeholder="Address" />
//           <Input type="text" placeholder="Landmark" />
//           <HStack spacing={4}>
//             <Input type="text" placeholder="City" />
//             <Input type="text" placeholder="Pincode" />
//           </HStack>
//           <Input type="text" placeholder="Order Notes" />

//           <RadioGroup defaultValue="homeDelivery">
//             <VStack spacing={2} align="stretch">
//               <Text fontWeight="bold">Delivery Type:</Text>
//               <HStack spacing={4}>
//                 <Radio value="homeDelivery">Home Delivery</Radio>
//                 <Radio value="showroomPickup">Showroom Pickup</Radio>
//               </HStack>
//             </VStack>
//           </RadioGroup>

//           <Checkbox
//             onChange={(e) => setIsReturnPickup(e.target.checked)}
//             isChecked={isReturnPickup}
//             colorScheme="pink"
//           >
//             Return Pick Up Address Different from the Delivery Address
//           </Checkbox>

//           {isReturnPickup && (
//             <>
//               <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//               <Input type="text" placeholder="Return Address" />
//               <Input type="text" placeholder="Return Landmark" />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="Return City" />
//                 <Input type="text" placeholder="Return Pincode" />
//               </HStack>
//             </>
//           )}

//           <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//             Back to Cart
//           </Button>
//         </VStack>
//       </Box>

//       <Box className="checkoutRight">
//         <Heading size="md" mb={4}>Cart Totals</Heading>
//         <Box className="cartTotalsContainer">
//           <VStack spacing={2} align="stretch">
//             {cart.map((item, index) => (
//               <HStack key={item.id} justifyContent="space-between">
//                 <Text>{item.name}</Text>
//                 <Text>${item.price}</Text>
//               </HStack>
//             ))}
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//               <Text fontWeight="bold" color="pink.500"></Text> {/* Replace with actual calculated price */}
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//               <Text fontWeight="bold" color="pink.500">$50</Text> {/* Replace with actual calculated deposit */}
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//               <Text fontWeight="bold" color="pink.500">$150</Text> {/* Replace with actual calculated total */}
//             </HStack>
//           </VStack>
//           <Button colorScheme="pink" width="100%" onClick={handleProceedToBooking}>
//             Proceed to Booking
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CheckoutPage;


// Version 3 Code (Version 2 is not displaying cart total properly)

// import React, { useState, useEffect } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../css/CheckoutPage.css'; // Import your CSS file

// interface CheckoutPageProps {
//   cart: {
//     id: number;
//     name: string;
//     price: number;
//     selectedSize: string;
//     selectedDuration: string;
//     quantity: number;
//   }[];
// }

// export const CheckoutPage: React.FC<CheckoutPageProps> = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart'] }>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const { cart } = location.state || { cart: [] }; // Retrieve cart data from location state

//   console.log("Product Details from Checkout Page", JSON.stringify(cart));

//   const calculateTotal = () => {
//     const productsPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const securityDeposit = 50; // Example value
//     const totalAmount = productsPrice + securityDeposit;
//     return { productsPrice, securityDeposit, totalAmount };
//   };

//   const { productsPrice, securityDeposit, totalAmount } = calculateTotal();

//   const handleProceedToBooking = () => {
//     // Implement logic to proceed to booking
//     alert('Proceed to booking logic here');
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   return (
//     <Box className="checkoutContainer">
//       <Box className="checkoutLeft">
//         <Heading mb={4}>Delivery Details</Heading>
//         <VStack spacing={4} align="stretch">
//           <HStack spacing={4}>
//             <Input type="text" placeholder="First Name" />
//             <Input type="text" placeholder="Last Name" />
//           </HStack>
//           <HStack spacing={4}>
//             <Input type="email" placeholder="Email Address" />
//             <Input type="tel" placeholder="Mobile Number" />
//           </HStack>
//           <Input type="text" placeholder="Address" />
//           <Input type="text" placeholder="Landmark" />
//           <HStack spacing={4}>
//             <Input type="text" placeholder="City" />
//             <Input type="text" placeholder="Pincode" />
//           </HStack>
//           <Input type="text" placeholder="Order Notes" />

//           <RadioGroup defaultValue="homeDelivery">
//             <VStack spacing={2} align="stretch">
//               <Text fontWeight="bold">Delivery Type:</Text>
//               <HStack spacing={4}>
//                 <Radio value="homeDelivery">Home Delivery</Radio>
//                 <Radio value="showroomPickup">Showroom Pickup</Radio>
//               </HStack>
//             </VStack>
//           </RadioGroup>

//           <Checkbox
//             onChange={(e) => setIsReturnPickup(e.target.checked)}
//             isChecked={isReturnPickup}
//             colorScheme="pink"
//           >
//             Return Pick Up Address Different from the Delivery Address
//           </Checkbox>

//           {isReturnPickup && (
//             <>
//               <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//               <Input type="text" placeholder="Return Address" />
//               <Input type="text" placeholder="Return Landmark" />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="Return City" />
//                 <Input type="text" placeholder="Return Pincode" />
//               </HStack>
//             </>
//           )}

//           <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//             Back to Cart
//           </Button>
//         </VStack>
//       </Box>

//       <Box className="checkoutRight">
//         <Heading size="md" mb={4}>Cart Totals</Heading>
//         <Box className="cartTotalsContainer">
//           <VStack spacing={2} align="stretch">
//             {cart.map((item) => (
//               <HStack key={item.id} justifyContent="space-between">
//                 <Text>{item.name}</Text>
//                 <Text>${item.price}</Text>
//               </HStack>
//             ))}
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//               <Text fontWeight="bold" color="pink.500">${productsPrice.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//               <Text fontWeight="bold" color="pink.500">${securityDeposit.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//               <Text fontWeight="bold" color="pink.500">${totalAmount.toFixed(2)}</Text>
//             </HStack>
//           </VStack>
//           <Button colorScheme="pink" width="100%" onClick={handleProceedToBooking}>
//             Proceed to Booking
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CheckoutPage;

// Version 4 Code (Enhancement to version 3 , security deposit minor bug fix) working code

// import React, { useState } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../css/CheckoutPage.css'; // Import your CSS file

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

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};

//   console.log("Cart Value from Checkout Page", JSON.stringify(cart));
//   console.log("Totals Value from Checkout Page", JSON.stringify(totals));

//   const handleProceedToBooking = () => {
//     // Implement logic to proceed to booking
//     alert('Proceed to booking logic here');
//     console.log("Cart Products" +JSON.stringify(cart))
//     console.log("Totals Checkout "+JSON.stringify(totals))
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   return (
//     <Box className="checkoutContainer">
//       <Box className="checkoutLeft">
//         <Heading mb={4}>Delivery Details</Heading>
//         <VStack spacing={4} align="stretch">
//           <HStack spacing={4}>
//             <Input type="text" placeholder="First Name" />
//             <Input type="text" placeholder="Last Name" />
//           </HStack>
//           <HStack spacing={4}>
//             <Input type="email" placeholder="Email Address" />
//             <Input type="tel" placeholder="Mobile Number" />
//           </HStack>
//           <Input type="text" placeholder="Address" />
//           <Input type="text" placeholder="Landmark" />
//           <HStack spacing={4}>
//             <Input type="text" placeholder="City" />
//             <Input type="text" placeholder="Pincode" />
//           </HStack>
//           <Input type="text" placeholder="Order Notes" />

//           <RadioGroup defaultValue="homeDelivery">
//             <VStack spacing={2} align="stretch">
//               <Text fontWeight="bold">Delivery Type:</Text>
//               <HStack spacing={4}>
//                 <Radio value="homeDelivery">Home Delivery</Radio>
//                 <Radio value="showroomPickup">Showroom Pickup</Radio>
//               </HStack>
//             </VStack>
//           </RadioGroup>

//           <Checkbox
//             onChange={(e) => setIsReturnPickup(e.target.checked)}
//             isChecked={isReturnPickup}
//             colorScheme="pink"
//           >
//             Return Pick Up Address Different from the Delivery Address
//           </Checkbox>

//           {isReturnPickup && (
//             <>
//               <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//               <Input type="text" placeholder="Return Address" />
//               <Input type="text" placeholder="Return Landmark" />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="Return City" />
//                 <Input type="text" placeholder="Return Pincode" />
//               </HStack>
//             </>
//           )}

//           <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//             Back to Cart
//           </Button>
//         </VStack>
//       </Box>

//       <Box className="checkoutRight">
//         <Heading size="md" mb={4}>Cart Totals</Heading>
//         <Box className="cartTotalsContainer">
//           <VStack spacing={2} align="stretch">
//             {cart.map((item) => (
//               <HStack key={item.id} justifyContent="space-between">
//                 <Text>{item.name}</Text>
//                 <Text>${item.price}</Text>
//               </HStack>
//             ))}
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
//             </HStack>
//           </VStack>
//           <Button colorScheme="pink" width="100%" onClick={handleProceedToBooking}>
//             Proceed to Booking
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CheckoutPage;


// Version 5 Code - Enhancement to Version 4 - has delivery details data object to store in db

// import React, { useState } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import '../css/CheckoutPage.css'; // Import your CSS file

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

// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark?: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: string;
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};
  
//   const { register, handleSubmit, watch, formState: { errors } } = useForm<DeliveryDetails>();

//   const onSubmit = (data: DeliveryDetails) => {
//     console.log("Delivery Details: ", JSON.stringify(data));
//     console.log("Cart Totals " +JSON.stringify(cart));
//     console.log("Totals "+JSON.stringify(totals));
//     // Implement logic to proceed to booking with the collected data
//     alert('Proceed to booking logic here');
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   return (
//     <Box className="checkoutContainer">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Box className="checkoutLeft">
//           <Heading mb={4}>Delivery Details</Heading>
//           <VStack spacing={4} align="stretch">
//             <HStack spacing={4}>
//               <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//               {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//               <Input type="text" placeholder="Last Name" {...register('lastName')} />
//             </HStack>
//             <HStack spacing={4}>
//               <Input type="email" placeholder="Email Address" {...register('email')} />
//               <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//               {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//             </HStack>
//             <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//             {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//             <Input type="text" placeholder="Landmark" {...register('landmark')} />
//             <HStack spacing={4}>
//               <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//               {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//               <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//               {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//             </HStack>
//             <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//             <RadioGroup defaultValue="homeDelivery" {...register('deliveryType', { required: 'Delivery Type is required' })}>
//               <VStack spacing={2} align="stretch">
//                 <Text fontWeight="bold">Delivery Type:</Text>
//                 <HStack spacing={4}>
//                   <Radio value="homeDelivery">Home Delivery</Radio>
//                   <Radio value="showroomPickup">Showroom Pickup</Radio>
//                 </HStack>
//               </VStack>
//             </RadioGroup>

//             <Checkbox
//               onChange={(e) => setIsReturnPickup(e.target.checked)}
//               isChecked={isReturnPickup}
//               colorScheme="pink"
//               {...register('returnPickup')}
//             >
//               Return Pick Up Address Different from the Delivery Address
//             </Checkbox>

//             {isReturnPickup && (
//               <>
//                 <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//                 <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//                 <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//                 <HStack spacing={4}>
//                   <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                   <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//                 </HStack>
//               </>
//             )}

//             <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//               Back to Cart
//             </Button>
//           </VStack>
//         </Box>

//         <Box className="checkoutRight">
//           <Heading size="md" mb={4}>Cart Totals</Heading>
//           <Box className="cartTotalsContainer">
//             <VStack spacing={2} align="stretch">
//               {cart.map((item) => (
//                 <HStack key={item.id} justifyContent="space-between">
//                   <Text>{item.name}</Text>
//                   <Text>${item.price}</Text>
//                 </HStack>
//               ))}
//               <HStack justifyContent="space-between">
//                 <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//                 <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
//               </HStack>
//               <HStack justifyContent="space-between">
//                 <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//                 <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
//               </HStack>
//               <HStack justifyContent="space-between">
//                 <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//                 <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
//               </HStack>
//             </VStack>
//             <Button colorScheme="pink" width="100%" type="submit" isDisabled={Object.keys(errors).length > 0}>
//               Proceed to Booking
//             </Button>
//           </Box>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default CheckoutPage;


// Version 6 , State Handling instead of form  - Working Code


// import React, { useState } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import '../css/CheckoutPage.css'; // Import your CSS file

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

// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark?: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: string;
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);

//   const onSubmit = (data: DeliveryDetails) => {
//     // console.log("Delivery Details: ", JSON.stringify(data));
//     // console.log("Cart Totals " + JSON.stringify(cart));
//     // console.log("Totals " + JSON.stringify(totals));
//     // Implement logic to proceed to booking with the collected data

//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//     };
//     console.log("Payload Complete Data "+JSON.stringify(payload))
//     alert('Proceed to booking logic here');
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   return (
//     <Box className="checkoutContainer">
//       <Box className="checkoutLeft">
//         <Heading mb={4}>Delivery Details</Heading>
//         <VStack spacing={4} align="stretch">
//           <HStack spacing={4}>
//             <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//             {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//             <Input type="text" placeholder="Last Name" {...register('lastName')} />
//           </HStack>
//           <HStack spacing={4}>
//             <Input type="email" placeholder="Email Address" {...register('email')} />
//             <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//             {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//           </HStack>
//           <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//           {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//           <Input type="text" placeholder="Landmark" {...register('landmark')} />
//           <HStack spacing={4}>
//             <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//             {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//             <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//             {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//           </HStack>
//           <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//           <Controller
//             name="deliveryType"
//             control={control}
//             defaultValue="homeDelivery"
//             rules={{ required: 'Delivery Type is required' }}
//             render={({ field }) => (
//               <RadioGroup {...field}>
//                 <VStack spacing={2} align="stretch">
//                   <Text fontWeight="bold">Delivery Type:</Text>
//                   <HStack spacing={4}>
//                     <Radio value="homeDelivery">Home Delivery</Radio>
//                     <Radio value="showroomPickup">Showroom Pickup</Radio>
//                   </HStack>
//                 </VStack>
//               </RadioGroup>
//             )}
//           />

//           <Controller
//             name="returnPickup"
//             control={control}
//             render={({ field }) => (
//               <Checkbox
//                 {...field}
//                 isChecked={field.value}
//                 onChange={(e) => {
//                   field.onChange(e.target.checked);
//                   setIsReturnPickup(e.target.checked);
//                 }}
//                 colorScheme="pink"
//               >
//                 Return Pick Up Address Different from the Delivery Address
//               </Checkbox>
//             )}
//           />

//           {isReturnPickup && (
//             <>
//               <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//               <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//               <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                 <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//               </HStack>
//             </>
//           )}

//           <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//             Back to Cart
//           </Button>
//         </VStack>
//       </Box>

//       <Box className="checkoutRight">
//         <Heading size="md" mb={4}>Cart Totals</Heading>
//         <Box className="cartTotalsContainer">
//           <VStack spacing={2} align="stretch">
//             {cart.map((item) => (
//               <HStack key={item.id} justifyContent="space-between">
//                 <Text>{item.name}</Text>
//                 <Text>${item.price}</Text>
//               </HStack>
//             ))}
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
//             </HStack>
//           </VStack>
//           <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0}>
//             Proceed to Booking
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CheckoutPage;


// Version 7 - Posting Data to DB using Hooks (Note : Version 6 is a working code)

// import React, { useState } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import '../css/CheckoutPage.css'; // Import your CSS file
// import usePostData from '../hooks/usePostData';

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

// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark?: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: string;
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }

// export interface CheckoutPayload {
//   deliveryDetails: DeliveryDetails;
//   cart: cart[];
//   totals: totals;
// }

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);

//   const { data, error, isLoading, postData ,responseData} = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = (data: DeliveryDetails) => {
//     // console.log("Delivery Details: ", JSON.stringify(data));
//     // console.log("Cart Totals " + JSON.stringify(cart));
//     // console.log("Totals " + JSON.stringify(totals));
//     // Implement logic to proceed to booking with the collected data

//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//     };
//    // console.log("Payload Complete Data "+JSON.stringify(payload))
//     postData(payload);
//     console.log("Results" +JSON.stringify(responseData));
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   return (
//     <Box className="checkoutContainer">
//       <Box className="checkoutLeft">
//         <Heading mb={4}>Delivery Details</Heading>
//         <VStack spacing={4} align="stretch">
//           <HStack spacing={4}>
//             <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//             {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//             <Input type="text" placeholder="Last Name" {...register('lastName')} />
//           </HStack>
//           <HStack spacing={4}>
//             <Input type="email" placeholder="Email Address" {...register('email')} />
//             <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//             {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//           </HStack>
//           <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//           {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//           <Input type="text" placeholder="Landmark" {...register('landmark')} />
//           <HStack spacing={4}>
//             <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//             {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//             <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//             {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//           </HStack>
//           <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//           <Controller
//             name="deliveryType"
//             control={control}
//             defaultValue="homeDelivery"
//             rules={{ required: 'Delivery Type is required' }}
//             render={({ field }) => (
//               <RadioGroup {...field}>
//                 <VStack spacing={2} align="stretch">
//                   <Text fontWeight="bold">Delivery Type:</Text>
//                   <HStack spacing={4}>
//                     <Radio value="homeDelivery">Home Delivery</Radio>
//                     <Radio value="showroomPickup">Showroom Pickup</Radio>
//                   </HStack>
//                 </VStack>
//               </RadioGroup>
//             )}
//           />

//           <Controller
//             name="returnPickup"
//             control={control}
//             render={({ field }) => (
//               <Checkbox
//                 {...field}
//                 isChecked={field.value}
//                 onChange={(e) => {
//                   field.onChange(e.target.checked);
//                   setIsReturnPickup(e.target.checked);
//                 }}
//                 colorScheme="pink"
//               >
//                 Return Pick Up Address Different from the Delivery Address
//               </Checkbox>
//             )}
//           />

//           {isReturnPickup && (
//             <>
//               <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//               <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//               <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                 <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//               </HStack>
//             </>
//           )}

//           <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//             Back to Cart
//           </Button>
//         </VStack>
//       </Box>

//       <Box className="checkoutRight">
//         <Heading size="md" mb={4}>Cart Totals</Heading>
//         <Box className="cartTotalsContainer">
//           <VStack spacing={2} align="stretch">
//             {cart.map((item) => (
//               <HStack key={item.id} justifyContent="space-between">
//                 <Text>{item.name}</Text>
//                 <Text>${item.price}</Text>
//               </HStack>
//             ))}
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
//             </HStack>
//           </VStack>
//           <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0}>
//             Proceed to Booking
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CheckoutPage;


// Version 8 : Note Version 7 is working code, this is an an await response data enhancement 

// import React, { useState, useEffect } from 'react';
// import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import '../css/CheckoutPage.css'; // Import your CSS file
// import usePostData from '../hooks/usePostData';

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

// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark?: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: string;
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }

// export interface CheckoutPayload {
//   deliveryDetails: DeliveryDetails;
//   cart: CheckoutPageProps['cart'];
//   totals: CheckoutPageProps['totals'];
// }

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);

//   const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = async (data: DeliveryDetails) => {
//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//     };

//     await postData(payload);
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   useEffect(() => {
//     if (responseData) {
//       console.log("Results:", JSON.stringify(responseData));
//       // Optionally handle any additional logic with responseData
//     }
//   }, [responseData]);

//   return (
//     <Box className="checkoutContainer">
//       <Box className="checkoutLeft">
//         <Heading mb={4}>Delivery Details</Heading>
//         <VStack spacing={4} align="stretch">
//           <HStack spacing={4}>
//             <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//             {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//             <Input type="text" placeholder="Last Name" {...register('lastName')} />
//           </HStack>
//           <HStack spacing={4}>
//             <Input type="email" placeholder="Email Address" {...register('email')} />
//             <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//             {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//           </HStack>
//           <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//           {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//           <Input type="text" placeholder="Landmark" {...register('landmark')} />
//           <HStack spacing={4}>
//             <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//             {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//             <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//             {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//           </HStack>
//           <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//           <Controller
//             name="deliveryType"
//             control={control}
//             defaultValue="homeDelivery"
//             rules={{ required: 'Delivery Type is required' }}
//             render={({ field }) => (
//               <RadioGroup {...field}>
//                 <VStack spacing={2} align="stretch">
//                   <Text fontWeight="bold">Delivery Type:</Text>
//                   <HStack spacing={4}>
//                     <Radio value="homeDelivery">Home Delivery</Radio>
//                     <Radio value="showroomPickup">Showroom Pickup</Radio>
//                   </HStack>
//                 </VStack>
//               </RadioGroup>
//             )}
//           />

//           <Controller
//             name="returnPickup"
//             control={control}
//             render={({ field }) => (
//               <Checkbox
//                 {...field}
//                 isChecked={field.value}
//                 onChange={(e) => {
//                   field.onChange(e.target.checked);
//                   setIsReturnPickup(e.target.checked);
//                 }}
//                 colorScheme="pink"
//               >
//                 Return Pick Up Address Different from the Delivery Address
//               </Checkbox>
//             )}
//           />

//           {isReturnPickup && (
//             <>
//               <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//               <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//               <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                 <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//               </HStack>
//             </>
//           )}

//           <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//             Back to Cart
//           </Button>
//         </VStack>
//       </Box>

//       <Box className="checkoutRight">
//         <Heading size="md" mb={4}>Cart Totals</Heading>
//         <Box className="cartTotalsContainer">
//           <VStack spacing={2} align="stretch">
//             {cart.map((item) => (
//               <HStack key={item.id} justifyContent="space-between">
//                 <Text>{item.name}</Text>
//                 <Text>${item.price}</Text>
//               </HStack>
//             ))}
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
//             </HStack>
//           </VStack>
//           <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0}>
//             Proceed to Booking
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CheckoutPage;



// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Heading,
//   VStack,
//   HStack,
//   Text,
//   Input,
//   Radio,
//   RadioGroup,
//   Checkbox,
//   Button,
//   Alert,
//   AlertIcon,
//   Spinner,
// } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import '../css/CheckoutPage.css'; // Import your CSS file
// import usePostData from '../hooks/usePostData';

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

// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark?: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: string;
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }

// export interface CheckoutPayload {
//   deliveryDetails: DeliveryDetails;
//   cart: CheckoutPageProps['cart'];
//   totals: CheckoutPageProps['totals'];
// }

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = async (data: DeliveryDetails) => {
//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
//     };

//     await postData(payload);
//   };

//   const handleGoBackToCart = () => {
//     navigate('/cart'); // Navigate back to cart page
//   };

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         setSuccessMessage(`Order ID: ${responseData.orderId} - Success!`);
//         setTimeout(() => {
//           setSuccessMessage('');
//           navigate('/'); // Navigate to home page
//         }, 3000);
//       } else {
//         setErrorMessage('Error: Please book again.');
//       }
//     }
//   }, [responseData]);

//   return (
//     <Box className="checkoutContainer">
//       <Box className="checkoutLeft">
//         <Heading mb={4}>Delivery Details</Heading>
//         <VStack spacing={4} align="stretch">
//           <HStack spacing={4}>
//             <Input type="text" placeholder="First Name" {...register('firstName', { required: 'First Name is required' })} />
//             {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
//             <Input type="text" placeholder="Last Name" {...register('lastName')} />
//           </HStack>
//           <HStack spacing={4}>
//             <Input type="email" placeholder="Email Address" {...register('email')} />
//             <Input type="tel" placeholder="Mobile Number" {...register('mobileNumber', { required: 'Mobile Number is required' })} />
//             {errors.mobileNumber && <Text color="red.500">{errors.mobileNumber.message}</Text>}
//           </HStack>
//           <Input type="text" placeholder="Address" {...register('address', { required: 'Address is required' })} />
//           {errors.address && <Text color="red.500">{errors.address.message}</Text>}
//           <Input type="text" placeholder="Landmark" {...register('landmark')} />
//           <HStack spacing={4}>
//             <Input type="text" placeholder="City" {...register('city', { required: 'City is required' })} />
//             {errors.city && <Text color="red.500">{errors.city.message}</Text>}
//             <Input type="text" placeholder="Pincode" {...register('pincode', { required: 'Pincode is required' })} />
//             {errors.pincode && <Text color="red.500">{errors.pincode.message}</Text>}
//           </HStack>
//           <Input type="text" placeholder="Order Notes" {...register('orderNotes')} />

//           <Controller
//             name="deliveryType"
//             control={control}
//             defaultValue="homeDelivery"
//             rules={{ required: 'Delivery Type is required' }}
//             render={({ field }) => (
//               <RadioGroup {...field}>
//                 <VStack spacing={2} align="stretch">
//                   <Text fontWeight="bold">Delivery Type:</Text>
//                   <HStack spacing={4}>
//                     <Radio value="homeDelivery">Home Delivery</Radio>
//                     <Radio value="showroomPickup">Showroom Pickup</Radio>
//                   </HStack>
//                 </VStack>
//               </RadioGroup>
//             )}
//           />

//           <Controller
//             name="returnPickup"
//             control={control}
//             render={({ field }) => (
//               <Checkbox
//                 {...field}
//                 isChecked={field.value}
//                 onChange={(e) => {
//                   field.onChange(e.target.checked);
//                   setIsReturnPickup(e.target.checked);
//                 }}
//                 colorScheme="pink"
//               >
//                 Return Pick Up Address Different from the Delivery Address
//               </Checkbox>
//             )}
//           />

//           {isReturnPickup && (
//             <>
//               <Heading mt={4} mb={2}>Return Pick Up Address</Heading>
//               <Input type="text" placeholder="Return Address" {...register('returnAddress')} />
//               <Input type="text" placeholder="Return Landmark" {...register('returnLandmark')} />
//               <HStack spacing={4}>
//                 <Input type="text" placeholder="Return City" {...register('returnCity')} />
//                 <Input type="text" placeholder="Return Pincode" {...register('returnPincode')} />
//               </HStack>
//             </>
//           )}

//           <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
//             Back to Cart
//           </Button>
//         </VStack>
//       </Box>

//       <Box className="checkoutRight">
//         <Heading size="md" mb={4}>Cart Totals</Heading>
//         <Box className="cartTotalsContainer">
//           <VStack spacing={2} align="stretch">
//             {cart.map((item) => (
//               <HStack key={item.id} justifyContent="space-between">
//                 <Text>{item.name}</Text>
//                 <Text>${item.price}</Text>
//               </HStack>
//             ))}
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.productsPrice.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.securityDeposit.toFixed(2)}</Text>
//             </HStack>
//             <HStack justifyContent="space-between">
//               <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//               <Text fontWeight="bold" color="pink.500">${totals.totalAmount.toFixed(2)}</Text>
//             </HStack>
//           </VStack>
//           <Button colorScheme="pink" width="100%" onClick={handleSubmit(onSubmit)} isDisabled={Object.keys(errors).length > 0 || isLoading}>
//             Proceed to Booking
//           </Button>

//           {isLoading && (
//             <Spinner
//               thickness="4px"
//               speed="0.65s"
//               emptyColor="gray.200"
//               size="lg"
//               mt={4}
//               color="pink.500"
//             />
//           )}
//         </Box>

//         {/* Show Success Message */}
//         {successMessage && (
//           <Alert status="success" mt={4}>
//             <AlertIcon />
//             {successMessage}
//           </Alert>
//         )}

//         {/* Show Error Message */}
//         {errorMessage && (
//           <Alert status="error" mt={4}>
//             <AlertIcon />
//             {errorMessage}
//           </Alert>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default CheckoutPage;



// Animation working code

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

// interface DeliveryDetails {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   address: string;
//   landmark?: string;
//   city: string;
//   pincode: string;
//   orderNotes?: string;
//   deliveryType: string;
//   returnPickup: boolean;
//   returnAddress?: string;
//   returnLandmark?: string;
//   returnCity?: string;
//   returnPincode?: string;
// }

// export interface CheckoutPayload {
//   deliveryDetails: DeliveryDetails;
//   cart: CheckoutPageProps['cart'];
//   totals: CheckoutPageProps['totals'];
// }

// export const CheckoutPage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
//   const { cart = [], totals = { productsPrice: 0, securityDeposit: 0, totalAmount: 0 } } = location.state || {};

//   const { register, handleSubmit, control, formState: { errors } } = useForm<DeliveryDetails>();
//   const [isReturnPickup, setIsReturnPickup] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

//   const { data, error, isLoading, postData, responseData } = usePostData<{ deliveryDetails: DeliveryDetails, cart: typeof cart, totals: typeof totals }>('/api/cc/order');

//   const onSubmit = async (data: DeliveryDetails) => {
//     const payload = {
//       deliveryDetails: data,
//       cart: cart,
//       totals: totals,
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
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//     }
//   }, [responseData, error, navigate]);

//   return (
//     <Box className="checkoutContainer">
//       {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} />
//               <Text>Your order has been successfully placed!</Text>
//             </Box>
//           )}
//           {animationType === 'error' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} />
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



import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, HStack, Text, Input, Radio, RadioGroup, Checkbox, Button } from '@chakra-ui/react';
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

// ... DeliveryDetails and CheckoutPayload interfaces remain the same ...

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation<{ cart: CheckoutPageProps['cart']; totals: CheckoutPageProps['totals'] }>();
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
     
    console.log("UserId value from CheckoutPage" + userId);
   
    navigate('/cart'); // Navigate back to cart page
  };

  useEffect(() => {
    if (responseData) {
      if (responseData.status === 201) {
        clearCart(); 
        setAnimationType('success');
        setTimeout(() => {
          navigate('/home'); // Navigate to home page after 3 seconds
        }, 3000);
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
              <Text>{error?.message || "An error occurred, please try again."}</Text>
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
                    {...field}
                    isChecked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                      setIsReturnPickup(e.target.checked);
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

              <Button colorScheme="pink" width="100%" onClick={handleGoBackToCart}>
                Back to Cart
              </Button>
            </VStack>
          </Box>

          <Box className="checkoutRight">
            <Heading size="md" mb={4}>Cart Totals</Heading>
            <Box className="cartTotalsContainer">
              <VStack spacing={2} align="stretch">
                {cart.map((item) => (
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
