// import React from 'react';
// import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
// import CartItem from '../components/CartItem';
// import CartTotals from '../components/CartTotals';
// import  '../css/CartPage.css';

// export const CartPage: React.FC = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const handleContinueShopping = () => {
//     navigate('/products');
//   };

//   const handleCheckout = () => {
//     navigate('/checkout');
//   };

//   return (
//     <Box className="cartContainer">
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <Flex direction={{ base: 'column', md: 'row' }}>
//           <VStack spacing={4} align="stretch" flex="3">
//             {cart.map((item, index) => (
//               <CartItem
//                 key={item.ProductID}
//                 item={item}
//                 onRemove={removeFromCart}
//                 onUpdateQuantity={updateQuantity}
//               />
//             ))}
//           </VStack>
//           <CartTotals
//             cart={cart}
//             onContinueShopping={handleContinueShopping}
//             onCheckout={handleCheckout}
//           />
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;


//Version 2 Code - Data passing machanism to checkout page

// import React from 'react';
// import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
// import CartItem from '../components/CartItem';
// import CartTotals from '../components/CartTotals';
// import '../css/CartPage.css';

// export const CartPage = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate('/checkout', { state: { cart } }); // Pass cart data to CheckoutPage
//   };

//   const handleContinueShopping = () => {
//     navigate('/products');
//   };

//   return (
//     <Box className="cartContainer">
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <Flex direction={{ base: 'column', md: 'row' }}>
//           <VStack spacing={4} align="stretch" flex="3">
//             {cart.map((item, index) => (
//               <CartItem
//                 key={item.ProductID}
//                 item={item}
//                 onRemove={removeFromCart}
//                 onUpdateQuantity={updateQuantity}
//               />
//             ))}
//           </VStack>
//           <CartTotals
//             cart={cart}
//             onContinueShopping={handleContinueShopping}
//             onCheckout={handleCheckout}
//           />
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;


//Version 3 - Cart Page issue fix 

// import React from 'react';
// import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
// import CartItem from '../components/CartItem';
// import CartTotals from '../components/CartTotals';
// import '../css/CartPage.css';

// export const CartPage: React.FC = () => {
//   const { cartState, removeItem } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate('/checkout', { state: { cart: cartState.items } });
//   };

//   const handleContinueShopping = () => {
//     navigate('/products');
//   };

//   if (!cartState || !cartState.items) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box className="cartContainer">
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cartState.items.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <Flex direction={{ base: 'column', md: 'row' }}>
//           <VStack spacing={4} align="stretch" flex="3">
//             {cartState.items.map((item) => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 onRemove={removeItem}
//               />
//             ))}
//           </VStack>
//           <CartTotals
//             cart={cartState.items}
//             onContinueShopping={handleContinueShopping}
//             onCheckout={handleCheckout}
//           />
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;

// Version 4 Cart page (version 2 is working code, 3 doesn't worked properly, images, data , clearing problem  )


// import React from 'react';
// import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
// import CartItem from '../components/CartItem';
// import CartTotals from '../components/CartTotals';
// import '../css/CartPage.css';

// export const CartPage = () => {
//   const { cartState, removeItem } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate('/checkout', { state: { cart: cartState.items } });
//   };

//   const handleContinueShopping = () => {
//     navigate('/products');
//   };

//   console.log('Cart State:', cartState); // Debugging output

//   if (!cartState || !cartState.items) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box className="cartContainer">
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cartState.items.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <Flex direction={{ base: 'column', md: 'row' }}>
//           <VStack spacing={4} align="stretch" flex="3">
//             {cartState.items.map((item) => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 onRemove={() => removeItem(item.id)}
//               />
//             ))}
//           </VStack>
//           <CartTotals
//             cart={cartState.items}
//             onContinueShopping={handleContinueShopping}
//             onCheckout={handleCheckout}
//           />
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;



// Version 5 Code - (Version 4 is working this is trail )

// import React from 'react';
// import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
// import CartItem from '../components/CartItem';
// import CartTotals from '../components/CartTotals';
// import '../css/CartPage.css';

// export const CartPage = () => {
//   const { cartState, removeItem } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate('/checkout', { state: { cart: cartState.items } });
//   };

//   const handleContinueShopping = () => {
//     navigate('/products');
//   };

//   console.log('Cart State:', cartState); // Debugging output

//   if (!cartState || !cartState.items) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box className="cartContainer">
//       <Heading mb={4}>Shopping Cart</Heading>
//       {cartState.items.length === 0 ? (
//         <Text>Your cart is empty.</Text>
//       ) : (
//         <Flex direction={{ base: 'column', md: 'row' }}>
//           <VStack spacing={4} align="stretch" flex="3">
//             {cartState.items.map((item) => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 onRemove={() => removeItem(item.id)}
//               />
//             ))}
//           </VStack>
//           <CartTotals
//             cart={cartState.items}
//             onContinueShopping={handleContinueShopping}
//             onCheckout={handleCheckout}
//           />
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default CartPage;



import React from 'react';
import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
//import CartItem,{ CartItem } from '../components/CartItem';
import CartTotals from '../components/CartTotals';
import '../css/CartPage.css';

export const CartPage = () => {
  const { cartState, removeItem } = useCart();
  const navigate = useNavigate();

  const calculateTotals = () => {
    const productsPrice = cartState.items.reduce((total, item) => total + item.price * item.quantity, 0);
    const securityDeposit = cartState.items.reduce((total, item) => total + item.price * item.quantity, 0); // Example calculation
    const totalAmount = productsPrice + securityDeposit;
    return { productsPrice, securityDeposit, totalAmount };
  };

  const handleCheckout = () => {
    const totals = calculateTotals();
    navigate('/checkout', { state: { cart: cartState.items, totals } });
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  console.log('Cart State:', cartState); // Debugging output

  if (!cartState || !cartState.items) {
    return <div>Loading...</div>;
  }

  return (
    <Box className="cartContainer">
      <Heading mb={4}>Shopping Cart</Heading>
      {cartState.items.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Flex direction={{ base: 'column', md: 'row' }}>
          <VStack spacing={4} align="stretch" flex="3">
            {cartState.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => removeItem(item.id)}
                onUpdateQuantity = {()=>console.log("Updated")}
              />
            ))}
          </VStack>
          <CartTotals
            cart={cartState.items}
            onContinueShopping={handleContinueShopping}
            onCheckout={handleCheckout}
          />
        </Flex>
      )}
    </Box>
  );
};

export default CartPage;


