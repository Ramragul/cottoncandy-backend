import React from 'react';
import { Box, Flex, Text, Image, Input, Button, Divider } from '@chakra-ui/react';
import '../css/CartPage.css';

interface CartItemProps {
  item: CartItem;
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
  const calculateSubtotal = (item: CartItem) => item.price * item.quantity;
  const calculateDeposit = (item: CartItem) => item.price * item.quantity;
  console.log("Item from Cart Component 77:" +JSON.stringify(item ))
  return (
    <Box className="cartItemBox">
      <Flex className="cartItemFlex">
        <Box className="cartItemImage">
          <Image src={item.imageURL} alt={item.ProductName} boxSize="100px" />
        </Box>
        <Box className="cartItemDetails">
          <Text>{item.name}</Text>
          <Text>Size: {item.size}</Text>
          <Text>Duration: {item.duration}</Text>
          <Text>Price: ${item.price}</Text>
          <Text>Deposit: ${calculateDeposit(item)}</Text>
          <Text mt={2}>
            <Button size="sm" colorScheme="red" onClick={() => onRemove(item.ProductID)}>
              Remove
            </Button>
          </Text>
        </Box>
        <Box className="cartItemQuantity">
          <Input
            type="number"
            value={item.quantity}
            min={1}
            onChange={(e) => onUpdateQuantity(item.ProductID, parseInt(e.target.value))}
            width="60px"
            border="1px solid black"
          />
        </Box>
        <Box className="cartItemSubtotal">
          <Text>Subtotal: ${calculateSubtotal(item)}</Text>
        </Box>
      </Flex>
      <Divider mt={4} />
    </Box>
  );
};

export default CartItem;
