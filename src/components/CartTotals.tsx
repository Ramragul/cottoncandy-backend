import React from 'react';
import { Box, VStack, HStack, Heading, Text, Button } from '@chakra-ui/react';
import '../css/CartPage.css';

interface CartTotalsProps {
  cart: CartItem[];
  onContinueShopping: () => void;
  onCheckout: () => void;
}

const CartTotals: React.FC<CartTotalsProps> = ({ cart, onContinueShopping, onCheckout }) => {
  const calculateSubtotal = (item: CartItem) => item.price * item.quantity;
  const calculateDeposit = (item: CartItem) => item.price * item.quantity;
  const calculateGrandTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item) + calculateDeposit(item), 0);

  return (
    <Box className="cartTotalsContainer">
      <Heading className="cartTotalsHeading">Cart Totals</Heading>
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
        <Button colorScheme="pink" width="50%" onClick={onContinueShopping}>
          Continue Shopping
        </Button>
        <Button colorScheme="teal" width="50%" onClick={onCheckout}>
          Checkout
        </Button>
      </HStack>
    </Box>
  );
};

export default CartTotals;
