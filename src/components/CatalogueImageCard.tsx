import React from 'react'

import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    Select,
    CheckboxGroup,
    Checkbox,
    VStack,
    HStack,
    Image,
    useMediaQuery,
    Button,
    Show,
  } from '@chakra-ui/react';
import { Product } from '@/pages/rentalCatalogue';
import { Catalogue } from '@/hooks/useDesignCatalogue';

//   interface Props {
//     product: Product;
//   }

  interface Props {
    product : Catalogue
  }
  

const CatalogueImageCard = ({product} : Props) => {
  return (
   <>
     {/* <Box w={{ base: '100%', md: '98%' }} px={{ base: 4, md: 0 }}>
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}> */}
      {/* {products.map((product) => ( */}
        <GridItem key={product.ProductID} position="relative" m={{ base: 2, md: 0 }}>
          <Box height="0" pt="133.98%" position="relative">
            <Image
              src={product.ProductImageURL}
              alt={product.ProductName}
              objectFit="cover"
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
              bg="black"
              color="pink.200"
              _hover={{ bg: 'gray.700' }}
              borderRadius="md"
              px={4}
              py={2}
            >
              Rent Now
            </Button>
          </Box>
        </GridItem>
       {/* ))} */}
    {/* </Grid>
  </Box> */}
   </>
  )
}

export default CatalogueImageCard