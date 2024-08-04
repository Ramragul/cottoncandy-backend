// Version 1 : Working Version 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  GridItem,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { Catalogue } from '../hooks/useDesignCatalogue';

interface Props {
  product: Catalogue;
  productType : string | null;
}

const CatalogueImageCard: React.FC<Props> = ({ product,productType }) => {
  const navigate = useNavigate();
  

  const handleProductClick = (product: Catalogue) => {
    navigate(`/productDetails`, { state: { product , productType } });
  };

  // Split the image URLs by comma and use the first URL
  const firstImageURL = product.ProductImageURL.split(',')[0];

  console.log("FirstImageURL" +firstImageURL)
  console.log("ProductImageURL" +product.ProductImageURL)

  return (
    <GridItem key={product.ProductID} position="relative" m={{ base: 2, md: 0 }}>
      <Box height="0" pt="133.98%" position="relative" onClick={() => handleProductClick(product)}>
        <Image
          src={firstImageURL}
          alt={product.ProductName}
          objectFit="contain"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          borderRadius="md"
        />
      </Box>
      <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={4} borderRadius="md">
        <Text color="pink.900" fontWeight="bold" mb={2} p={2}>{product.ProductName}</Text>
        <Text color="gray.500" p={2}>{product.ProductPrice} INR</Text>
        <Button
          mt={2}
          //bg="black"
          bg="#c32f8c"
          //color="pink.200"
          color="white"
          _hover={{ bg: 'gray.700' }}
          borderRadius="md"
          px={4}
          py={2}
          onClick={() => handleProductClick(product)}
        >
          Rent Now
        </Button>
      </Box>
    </GridItem>
  );
};

export default CatalogueImageCard;


