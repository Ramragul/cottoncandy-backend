// import React from 'react';
// import { Box, Flex, Heading, Text, VStack, HStack, Image, Input, Button } from '@chakra-ui/react';
// import { useCart } from '../contexts/CartContext';

// export const CartPage: React.FC = () => {
//   const { cartItems } = useCart();

//   const calculateSubtotal = (item: any) => item.ProductPrice * item.quantity;
//   const calculateGrandTotal = () => cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);

//   return (
//     <Box padding={5}>
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cartItems.length === 0 ? (
//         <Text>Your cart is empty</Text>
//       ) : (
//         <VStack spacing={4} align="stretch">
//           {cartItems.map((item, index) => (
//             <Flex key={index} direction="row" alignItems="center" justifyContent="space-between">
//               <Image src={item.ProductImageURL.split(',')[0]} alt={item.ProductName} boxSize="100px" />
//               <Box flex="2" ml={4}>
//                 <Text fontWeight="bold">{item.ProductName}</Text>
//                 <Text>{item.description}</Text>
//                 <Text>Rent from: {item.deliveryDate?.toLocaleDateString()}</Text>
//                 <Text>Rent to: {item.returnDate?.toLocaleDateString()}</Text>
//                 <Text>Price: {item.ProductPrice}</Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Input type="number" value={item.quantity} min={1} />
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>{item.deposit}</Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>{calculateSubtotal(item)}</Text>
//               </Box>
//             </Flex>
//           ))}
//           <Flex justifyContent="flex-end" mt={4}>
//             <Text fontWeight="bold" fontSize="xl">Grand Total: {calculateGrandTotal()}</Text>
//           </Flex>
//           <Button colorScheme="teal" width="100%">Checkout</Button>
//         </VStack>
//       )}
//     </Box>
//   );
// };

// export default CartPage;


// Version 2 Code 

// import React from 'react';
// import { Box, Flex, Heading, Text, VStack, HStack, Image, Input, Button } from '@chakra-ui/react';
// import { useCart } from '../contexts/CartContext';
// import { useNavigate } from 'react-router-dom';

// export const CartPage: React.FC = () => {
//   const { cartItems, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   const calculateSubtotal = (item: any) => item.ProductPrice * item.quantity;
//   const calculateGrandTotal = () => cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);

//   return (
//     <Box padding={5}>
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cartItems.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <VStack spacing={4}>
//           <Flex justifyContent="space-between" width="100%" fontWeight="bold">
//             <Text flex="1" ml={4}>Product</Text>
//             <Text flex="2" ml={4}>Details</Text>
//             <Text flex="1" ml={4}>Quantity</Text>
//             <Text flex="1" ml={4}>Deposit</Text>
//             <Text flex="1" ml={4}>Subtotal</Text>
//             <Text flex="0.5" ml={4}>Remove</Text>
//           </Flex>
//           {cartItems.map((item) => (
//             <Flex key={item.id} justifyContent="space-between" width="100%" alignItems="center">
//               <Box flex="1" ml={4}>
//                 <Image src={item.ProductImageURL.split(',')[0]} alt={item.ProductName} boxSize="50px" />
//               </Box>
//               <Box flex="2" ml={4}>
//                 <Text>{item.ProductName}</Text>
//                 <Text>Size: {item.selectedSize}</Text>
//                 <Text>Duration: {item.selectedDuration}</Text>
//                 <Text>Rent From: {item.deliveryDate?.toLocaleDateString()}</Text>
//                 <Text>Rent To: {item.returnDate?.toLocaleDateString()}</Text>
//                 <Text>Price: {item.ProductPrice}</Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Input type="number" value={item.quantity} min={1} />
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>{item.deposit}</Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>{calculateSubtotal(item)}</Text>
//               </Box>
//               <Box flex="0.5" ml={4}>
//                 <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
//               </Box>
//             </Flex>
//           ))}
//           <Flex justifyContent="flex-end" mt={4}>
//             <Text fontWeight="bold" fontSize="xl">Grand Total: {calculateGrandTotal()}</Text>
//           </Flex>
//           <HStack width="100%">
//             <Button colorScheme="pink" width="50%" onClick={() => navigate('/products')}>Continue Shopping</Button>
//             <Button colorScheme="teal" width="50%">Checkout</Button>
//           </HStack>
//         </VStack>
//       )}
//     </Box>
//   );
// };

// export default CartPage;

// Version 3 Code

// import React from 'react';
// import { Box, Flex, Heading, Text, VStack, HStack, Image, Input, Button, Select } from '@chakra-ui/react';
// import { useCart } from '../contexts/CartContext';
// import { useNavigate } from 'react-router-dom';

// export const CartPage: React.FC = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const calculateSubtotal = (item: any) => item.price * item.quantity + item.deposit * item.quantity;
//   const calculateGrandTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item), 0);

//   const handleQuantityChange = (id: number, quantity: number) => {
//     updateQuantity(id, quantity);
//   };

//   return (
//     <Box padding={5}>
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <VStack spacing={4}>
//           <Flex justifyContent="space-between" width="100%" fontWeight="bold">
//             <Text flex="1" ml={4}>Product</Text>
//             <Text flex="2" ml={4}>Details</Text>
//             <Text flex="1" ml={4}>Quantity</Text>
//             <Text flex="1" ml={4}>Deposit</Text>
//             <Text flex="1" ml={4}>Subtotal</Text>
//             <Text flex="0.5" ml={4}>Remove</Text>
//           </Flex>
//           {cart.map((item) => (
//             <Flex key={item.id} justifyContent="space-between" width="100%" alignItems="center">
//               <Box flex="1" ml={4}>
//                 <Image src={item.ProductImageURL.split(',')[0]} alt={item.name} boxSize="50px" />
//               </Box>
//               <Box flex="2" ml={4}>
//                 <Text>{item.name}</Text>
//                 <Text>Size: {item.size}</Text>
//                 <Text>Duration: {item.duration}</Text>
//                 <Text>Rent From: {item.deliveryDate?.toLocaleDateString()}</Text>
//                 <Text>Rent To: {item.returnDate?.toLocaleDateString()}</Text>
//                 <Text>Price: {item.price}</Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Select
//                   value={item.quantity}
//                   onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                 >
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   ))}
//                 </Select>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>{item.deposit}</Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>{calculateSubtotal(item)}</Text>
//               </Box>
//               <Box flex="0.5" ml={4}>
//                 <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
//               </Box>
//             </Flex>
//           ))}
//           <Flex justifyContent="flex-end" mt={4} width="100%">
//             <Text fontWeight="bold" fontSize="xl">Grand Total: {calculateGrandTotal()}</Text>
//           </Flex>
//           <HStack width="100%">
//             <Button colorScheme="pink" width="50%" onClick={() => navigate('/products')}>Continue Shopping</Button>
//             <Button colorScheme="teal" width="50%">Checkout</Button>
//           </HStack>
//         </VStack>
//       )}
//     </Box>
//   );
// };

// export default CartPage;




// Version 4 Code

// import React from 'react';
// import { Box, Flex, Heading, Text, VStack, HStack, Image, Select, Button } from '@chakra-ui/react';
// import { useCart } from '../contexts/CartContext';
// import { useNavigate } from 'react-router-dom';

// export const CartPage: React.FC = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const calculateSubtotal = (item: any) => item.price * item.quantity + item.deposit * item.quantity;
//   const calculateGrandTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item), 0);

//   const handleQuantityChange = (id: number, quantity: number) => {
//     updateQuantity(id, quantity);
//   };

//   return (
//     <Box padding={5}>
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <VStack spacing={4}>
//           <Flex justifyContent="space-between" width="100%" fontWeight="bold">
//             <Text flex="1" ml={4}>Product</Text>
//             <Text flex="2" ml={4}>Details</Text>
//             <Text flex="1" ml={4}>Quantity</Text>
//             <Text flex="1" ml={4}>Deposit</Text>
//             <Text flex="1" ml={4}>Subtotal</Text>
//             <Text flex="0.5" ml={4}>Remove</Text>
//           </Flex>
//           {cart.map((item) => (
//             <Flex key={item.id} justifyContent="space-between" width="100%" alignItems="center">
//               <Box flex="1" ml={4}>
//                 <Image src={item.ProductImageURL.split(',')[0]} alt={item.name} boxSize="50px" />
//               </Box>
//               <Box flex="2" ml={4}>
//                 <Text>{item.name}</Text>
//                 <Text>Size: {item.size}</Text>
//                 <Text>Duration: {item.duration}</Text>
//                 <Text>Rent From: {item.deliveryDate?.toLocaleDateString()}</Text>
//                 <Text>Rent To: {item.returnDate?.toLocaleDateString()}</Text>
//                 <Text>Price: {item.price}</Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Select
//                   value={item.quantity}
//                   onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                 >
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   ))}
//                 </Select>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>{item.deposit}</Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>{calculateSubtotal(item)}</Text>
//               </Box>
//               <Box flex="0.5" ml={4}>
//                 <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
//               </Box>
//             </Flex>
//           ))}
//           <Flex justifyContent="flex-end" mt={4} width="100%">
//             <Text fontWeight="bold" fontSize="xl">Grand Total: {calculateGrandTotal()}</Text>
//           </Flex>
//           <HStack width="100%">
//             <Button colorScheme="pink" width="50%" onClick={() => navigate('/products')}>Continue Shopping</Button>
//             <Button colorScheme="teal" width="50%">Checkout</Button>
//           </HStack>
//         </VStack>
//       )}
//     </Box>
//   );
// };

// export default CartPage;


// Version 5 Code

// import React from 'react';
// import { Box, Flex, Heading, Text, VStack, HStack, Image, Input, Button } from '@chakra-ui/react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';

// export const CartPage: React.FC = () => {
//   const { cart, removeFromCart, getTotalItems } = useCart();
//   const navigate = useNavigate();

//   const calculateSubtotal = (item: any) => item.ProductPrice * item.quantity;
//   const calculateGrandTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item), 0);

//   const handleContinueShopping = () => {
//     navigate('/products'); // Replace with your actual product listing page route
//   };

//   const handleCheckout = () => {
//     // Implement your checkout logic here
//     alert('Implement your checkout logic here');
//   };

//   return (
//     <Box padding={5}>
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <VStack spacing={4} align="stretch">
//           {cart.map((item) => (
//             <Flex key={item.id} justifyContent="space-between" alignItems="center">
//               <Box flex="1" mr={4}>
//                 <Image src={item.ProductImageURL} alt={item.ProductName} boxSize="100px" />
//               </Box>
//               <Box flex="3" ml={4}>
//                 <Text>{item.ProductName}</Text>
//                 <Text>Size: {item.selectedSize}</Text>
//                 <Text>Duration: {item.selectedDuration}</Text>
//                 <Text>Price: ${item.ProductPrice}</Text>
//                 <Text mt={2}>
//                   <Button size="sm" colorScheme="red" onClick={() => removeFromCart(item.ProductID)}>
//                     Remove
//                   </Button>
//                 </Text>
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Input type="number" value={item.quantity} min={1} />
//               </Box>
//               <Box flex="1" ml={4}>
//                 <Text>Subtotal: ${calculateSubtotal(item)}</Text>
//               </Box>
//             </Flex>
//           ))}
//           <Flex justifyContent="flex-end" mt={4}>
//             <Text fontWeight="bold" fontSize="xl">Grand Total: ${calculateGrandTotal()}</Text>
//           </Flex>
//           <HStack mt={4} spacing={4}>
//             <Button colorScheme="pink" width="50%" onClick={handleContinueShopping}>
//               Continue Shopping
//             </Button>
//             <Button colorScheme="teal" width="50%" onClick={handleCheckout}>
//               Checkout
//             </Button>
//           </HStack>
//         </VStack>
//       )}
//     </Box>
//   );
// };

// export default CartPage;


// Version 6 Code  - this code is really good,few corrections in smaller devices


// import React from 'react';
// import { Box, Flex, Heading, Text, VStack, HStack, Image, Input, Button } from '@chakra-ui/react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';

// export const CartPage: React.FC = () => {
//   const { cart, removeFromCart, getTotalItems, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const calculateSubtotal = (item: any) => item.ProductPrice * item.quantity;
//   const calculateDeposit = (item: any) => item.ProductPrice * item.quantity;
//   const calculateGrandTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item) + calculateDeposit(item), 0);

//   const handleContinueShopping = () => {
//     navigate('/products'); // Replace with your actual product listing page route
//   };

//   const handleCheckout = () => {
//     // Implement your checkout logic here
//     alert('Implement your checkout logic here');
//   };

//   return (
//     <Box padding={5}>
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <Flex direction={{ base: 'column', md: 'row' }}>
//           <VStack spacing={4} align="stretch" flex="3">
//             {cart.map((item) => (
//               <Flex key={item.ProductID} justifyContent="space-between" alignItems="center" wrap="wrap">
//                 <Box flex={{ base: '100%', md: '1' }} mr={4}>
//                   <Image src={item.ProductImageURL} alt={item.ProductName} boxSize="100px" />
//                 </Box>
//                 <Box flex={{ base: '100%', md: '3' }} ml={4}>
//                   <Text>{item.ProductName}</Text>
//                   <Text>Size: {item.selectedSize}</Text>
//                   <Text>Duration: {item.selectedDuration}</Text>
//                   <Text>Price: ${item.ProductPrice}</Text>
//                 </Box>
//                 <Box flex={{ base: '100%', md: '1' }} ml={4} mt={{ base: 2, md: 0 }}>
//                   <Input
//                     type="number"
//                     value={item.quantity}
//                     min={1}
//                     onChange={(e) => updateQuantity(item.ProductID, parseInt(e.target.value))}
//                     width="60px"
//                     bg="pink.100"
//                   />
//                 </Box>
//                 <Box flex={{ base: '100%', md: '1' }} ml={4} mt={{ base: 2, md: 0 }}>
//                   <Text>Deposit: ${calculateDeposit(item)}</Text>
//                 </Box>
//                 <Box flex={{ base: '100%', md: '1' }} ml={4} mt={{ base: 2, md: 0 }}>
//                   <Text>Subtotal: ${calculateSubtotal(item)}</Text>
//                 </Box>
//                 <Box flex={{ base: '100%', md: '1' }} ml={4} mt={{ base: 2, md: 0 }}>
//                   <Button size="sm" colorScheme="red" onClick={() => removeFromCart(item.ProductID)}>
//                     Remove
//                   </Button>
//                 </Box>
//               </Flex>
//             ))}
//           </VStack>
//           <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }} border="1px solid" borderColor="pink.500" p={4}>
//             <Heading size="md" mb={4}>Cart Totals</Heading>
//             <VStack spacing={2} align="stretch">
//               <HStack justifyContent="space-between">
//                 <Text>Products Price:</Text>
//                 <Text fontWeight="bold">${cart.reduce((total, item) => total + calculateSubtotal(item), 0)}</Text>
//               </HStack>
//               <HStack justifyContent="space-between">
//                 <Text>Security Deposit:</Text>
//                 <Text fontWeight="bold">${cart.reduce((total, item) => total + calculateDeposit(item), 0)}</Text>
//               </HStack>
//               <HStack justifyContent="space-between">
//                 <Text>Total Amount:</Text>
//                 <Text fontWeight="bold">${calculateGrandTotal()}</Text>
//               </HStack>
//             </VStack>
//             <HStack mt={4} spacing={4}>
//               <Button colorScheme="pink" width="50%" onClick={handleContinueShopping}>
//                 Continue Shopping
//               </Button>
//               <Button colorScheme="teal" width="50%" onClick={handleCheckout}>
//                 Checkout
//               </Button>
//             </HStack>
//           </Box>
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;



// Version 7 Code  -- All code similar to version 6 but few enhancments in version 8

// import React from 'react';
// import { Box, Flex, Heading, Text, VStack, HStack, Image, Input, Button } from '@chakra-ui/react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';

// export const CartPage: React.FC = () => {
//   const { cart, removeFromCart, getTotalItems, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const calculateSubtotal = (item: any) => item.ProductPrice * item.quantity;
//   const calculateDeposit = (item: any) => item.ProductPrice * item.quantity;
//   const calculateGrandTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item) + calculateDeposit(item), 0);

//   const handleContinueShopping = () => {
//     navigate('/products'); // Replace with your actual product listing page route
//   };

//   const handleCheckout = () => {
//     // Implement your checkout logic here
//     alert('Implement your checkout logic here');
//   };

//   return (
//     <Box padding={5}>
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <Flex direction={{ base: 'column', md: 'row' }}>
//           <VStack spacing={4} align="stretch" flex="3">
//             {cart.map((item) => (
//               <Flex key={item.ProductID} wrap="wrap" mb={4} align="center">
//                 <Box flex={{ base: '0 0 100px', md: '1' }} mr={4}>
//                   <Image src={item.ProductImageURL} alt={item.ProductName} boxSize="100px" />
//                 </Box>
//                 <Box flex="3" ml={4}>
//                   <Text>{item.ProductName}</Text>
//                   <Text>Size: {item.selectedSize}</Text>
//                   <Text>Duration: {item.selectedDuration}</Text>
//                   <Text>Price: ${item.ProductPrice}</Text>
//                 </Box>
//                 <Box flex="1" ml={4} mt={{ base: 2, md: 0 }}>
//                   <Input
//                     type="number"
//                     value={item.quantity}
//                     min={1}
//                     onChange={(e) => updateQuantity(item.ProductID, parseInt(e.target.value))}
//                     width="60px"
//                     bg="pink.100"
//                   />
//                 </Box>
//                 <Box flex="1" ml={4} mt={{ base: 2, md: 0 }}>
//                   <Text>Deposit: ${calculateDeposit(item)}</Text>
//                 </Box>
//                 <Box flex="1" ml={4} mt={{ base: 2, md: 0 }}>
//                   <Text>Subtotal: ${calculateSubtotal(item)}</Text>
//                 </Box>
//                 <Box flex="1" ml={4} mt={{ base: 2, md: 0 }}>
//                   <Button size="sm" colorScheme="red" onClick={() => removeFromCart(item.ProductID)}>
//                     Remove
//                   </Button>
//                 </Box>
//               </Flex>
//             ))}
//           </VStack>
//           <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }} border="1px solid" borderColor="pink.500" p={4}>
//             <Heading size="md" mb={4}>Cart Totals</Heading>
//             <VStack spacing={2} align="stretch">
//               <HStack justifyContent="space-between">
//                 <Text>Products Price:</Text>
//                 <Text fontWeight="bold">${cart.reduce((total, item) => total + calculateSubtotal(item), 0)}</Text>
//               </HStack>
//               <HStack justifyContent="space-between">
//                 <Text>Security Deposit:</Text>
//                 <Text fontWeight="bold">${cart.reduce((total, item) => total + calculateDeposit(item), 0)}</Text>
//               </HStack>
//               <HStack justifyContent="space-between">
//                 <Text>Total Amount:</Text>
//                 <Text fontWeight="bold">${calculateGrandTotal()}</Text>
//               </HStack>
//             </VStack>
//             <HStack mt={4} spacing={4}>
//               <Button colorScheme="pink" width="50%" onClick={handleContinueShopping}>
//                 Continue Shopping
//               </Button>
//               <Button colorScheme="teal" width="50%" onClick={handleCheckout}>
//                 Checkout
//               </Button>
//             </HStack>
//           </Box>
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;



// Version 8  - All Good in this vesion, Version 9 is an enhanced version of 8 with border separator for each items 

// import React from 'react';
// import { Box, Flex, Heading, Text, VStack, HStack, Image, Input, Button } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';

// interface CartItem {
//   ProductID: number;
//   ProductName: string;
//   ProductPrice: number;
//   ProductImageURL: string;
//   selectedSize: string;
//   selectedDuration: string;
//   quantity: number;
// }

// export const CartPage: React.FC = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const calculateSubtotal = (item: CartItem) => item.ProductPrice * item.quantity;
//   const calculateDeposit = (item: CartItem) => item.ProductPrice * item.quantity;
//   const calculateGrandTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item) + calculateDeposit(item), 0);

//   const handleContinueShopping = () => {
//     navigate('/products');
//   };

//   const handleCheckout = () => {
//     alert('Implement your checkout logic here');
//   };

//   return (
//     <Box padding={5}>
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <Flex direction={{ base: 'column', md: 'row' }}>
//           <VStack spacing={4} align="stretch" flex="3">
//             {cart.map((item) => (
//               <Flex key={item.ProductID} wrap="wrap" mb={4} align="center">
//                 <Box flex={{ base: '0 0 100px', md: '1' }} mr={4}>
//                   <Image src={item.ProductImageURL} alt={item.ProductName} boxSize="100px" />
//                 </Box>
//                 <Box flex="3" ml={4}>
//                   <Text>{item.ProductName}</Text>
//                   <Text>Size: {item.selectedSize}</Text>
//                   <Text>Duration: {item.selectedDuration}</Text>
//                   <Text>Price: ${item.ProductPrice}</Text>
//                   <Text>Deposit: ${calculateDeposit(item)}</Text>
//                   <Text mt={2}>
//                     <Button size="sm" colorScheme="red" onClick={() => removeFromCart(item.ProductID)}>
//                       Remove
//                     </Button>
//                   </Text>
//                 </Box>
//                 <Box flex="1" ml={4} mt={{ base: 2, md: 0 }}>
//                   <Input
//                     type="number"
//                     value={item.quantity}
//                     min={1}
//                     onChange={(e) => updateQuantity(item.ProductID, parseInt(e.target.value))}
//                     width="60px"
//                     border="1px solid black"
//                   />
//                 </Box>
//                 <Box flex="1" ml={4} mt={{ base: 2, md: 0 }}>
//                   <Text fontWeight="bold" color="pink.500">Subtotal: ${calculateSubtotal(item)}</Text>
//                 </Box>
//               </Flex>
//             ))}
//           </VStack>
//           <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }} border="1px solid" borderColor="pink.500" p={4}>
//             <Heading size="md" mb={4}>Cart Totals</Heading>
//             <VStack spacing={2} align="stretch">
//               <HStack justifyContent="space-between">
//                 <Text fontWeight="bold" color="pink.500">Products Price:</Text>
//                 <Text fontWeight="bold" color="pink.500">${cart.reduce((total, item) => total + calculateSubtotal(item), 0)}</Text>
//               </HStack>
//               <HStack justifyContent="space-between">
//                 <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
//                 <Text fontWeight="bold" color="pink.500">${cart.reduce((total, item) => total + calculateDeposit(item), 0)}</Text>
//               </HStack>
//               <HStack justifyContent="space-between">
//                 <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
//                 <Text fontWeight="bold" color="pink.500">${calculateGrandTotal()}</Text>
//               </HStack>
//             </VStack>
//             <HStack mt={4} spacing={4}>
//               <Button colorScheme="pink" width="50%" onClick={handleContinueShopping}>
//                 Continue Shopping
//               </Button>
//               <Button colorScheme="teal" width="50%" onClick={handleCheckout}>
//                 Checkout
//               </Button>
//             </HStack>
//           </Box>
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;


// Version 9 

import React from 'react';
import { Box, Flex, Heading, Text, VStack, HStack, Image, Input, Button, Divider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface CartItem {
  ProductID: number;
  ProductName: string;
  ProductPrice: number;
  ProductImageURL: string;
  selectedSize: string;
  selectedDuration: string;
  quantity: number;
}

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const calculateSubtotal = (item: CartItem) => item.ProductPrice * item.quantity;
  const calculateDeposit = (item: CartItem) => item.ProductPrice * item.quantity;
  const calculateGrandTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item) + calculateDeposit(item), 0);

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Implement your checkout logic here');
  };

  return (
    <Box padding={5}>
      <Heading mb={4}>Shopping Cart</Heading>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Flex direction={{ base: 'column', md: 'row' }}>
          <VStack spacing={4} align="stretch" flex="3">
            {cart.map((item, index) => (
              <Box key={item.ProductID} borderWidth="1px" borderRadius="md" p={4} mb={4}>
                <Flex wrap="wrap" align="center">
                  <Box flex={{ base: '0 0 100px', md: '1' }} mr={4}>
                    <Image src={item.ProductImageURL} alt={item.ProductName} boxSize="100px" />
                  </Box>
                  <Box flex="3" ml={4}>
                    <Text>{item.ProductName}</Text>
                    <Text>Size: {item.selectedSize}</Text>
                    <Text>Duration: {item.selectedDuration}</Text>
                    <Text>Price: ${item.ProductPrice}</Text>
                    <Text>Deposit: ${calculateDeposit(item)}</Text>
                    <Text mt={2}>
                      <Button size="sm" colorScheme="red" onClick={() => removeFromCart(item.ProductID)}>
                        Remove
                      </Button>
                    </Text>
                  </Box>
                  <Box flex="1" ml={4} mt={{ base: 2, md: 0 }}>
                    <Input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) => updateQuantity(item.ProductID, parseInt(e.target.value))}
                      width="60px"
                      border="1px solid black"
                    />
                  </Box>
                  <Box flex="1" ml={4} mt={{ base: 2, md: 0 }}>
                    <Text fontWeight="bold" color="pink.500">Subtotal: ${calculateSubtotal(item)}</Text>
                  </Box>
                </Flex>
                {index < cart.length - 1 && <Divider mt={4} />}
              </Box>
            ))}
          </VStack>
          <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }} border="1px solid" borderColor="pink.500" p={4}>
            <Heading size="md" mb={4}>Cart Totals</Heading>
            <VStack spacing={2} align="stretch">
              <HStack justifyContent="space-between">
                <Text fontWeight="bold" color="pink.500">Products Price:</Text>
                <Text fontWeight="bold" color="pink.500">${cart.reduce((total, item) => total + calculateSubtotal(item), 0)}</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text fontWeight="bold" color="pink.500">Security Deposit:</Text>
                <Text fontWeight="bold" color="pink.500">${cart.reduce((total, item) => total + calculateDeposit(item), 0)}</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text fontWeight="bold" color="pink.500">Total Amount:</Text>
                <Text fontWeight="bold" color="pink.500">${calculateGrandTotal()}</Text>
              </HStack>
            </VStack>
            <HStack mt={4} spacing={4}>
              <Button colorScheme="pink" width="50%" onClick={handleContinueShopping}>
                Continue Shopping
              </Button>
              <Button colorScheme="teal" width="50%" onClick={handleCheckout}>
                Checkout
              </Button>
            </HStack>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default CartPage;
