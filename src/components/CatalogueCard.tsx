// Version 1 : working version, but design is not up to the mark

// import React from 'react';
// import { Catalogue } from '../hooks/useDesignCatalogue';
// import { Box, Grid, GridItem, Image, Text, Button, VStack } from '@chakra-ui/react';

// interface Props {
//   catalogue: Catalogue;
// }



// const CatalogueCard = ({ catalogue }: Props) => {
//   return (
//     // <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
//       <GridItem key={catalogue.ProductID}>


//          <Box position="relative" borderRadius="md" overflow="hidden" boxShadow="md">
//           <Image
//             src={catalogue.ProductImageURL}
//             alt={catalogue.ProductName}
//             objectFit="cover"
//             width="100%"
//             height="100%"
//             //position="absolute"
//             // top="0"
//             // left="0"
//             // borderRadius="md"
//           />
//           <VStack
//             position="absolute"
//             bottom={0}
//             left={0}
//             right={0}
//             bg="rgba(0, 0, 0, 0.5)"
//             color="white"
//             p={4}
//             spacing={2}
//             align="start"
//           >
//             <Text fontSize="xl" fontWeight="bold">{catalogue.ProductName}</Text>
//             <Text fontSize="sm">{catalogue.ProductID}</Text>
//             <Button
//               mt={2}
//               bg="pink.600"
//               color="white"
//               _hover={{ bg: 'pink.700' }}
//               borderRadius="md"
//               px={4}
//               py={2}
//             >
//               Rent Now
//             </Button>
//           </VStack>
//         </Box> 
//       </GridItem>
//     // </Grid>
//   );
// };

// export default CatalogueCard;



// Version 2 : design enhancement to version 1

import React from 'react';
import { Catalogue } from '../hooks/useDesignCatalogue';
import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Badge
} from '@chakra-ui/react';

interface Props {
  catalogue: Catalogue;
  purchaseType?: string | null;
}

const CatalogueCard = ({ catalogue, purchaseType }: Props) => {
  return (
    <Box
      role="group"
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="0 15px 40px rgba(0,0,0,0.06)"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.12)"
      }}
    >
      {/* IMAGE AREA */}
      <Box position="relative" overflow="hidden">
        <Image
          src={catalogue.ProductImageURL}
          alt={catalogue.ProductName}
          objectFit="cover"
          w="100%"
          h="340px"
          transition="transform 0.4s ease"
          _groupHover={{ transform: "scale(1.06)" }}
        />

        {/* CATEGORY BADGE */}
        <Badge
          position="absolute"
          top="12px"
          left="12px"
          bg="skyblue.400"
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          letterSpacing="wide"
        >
          {catalogue.CategoryName || "Design"}
        </Badge>
      </Box>

      {/* CONTENT AREA */}
      <VStack align="start" spacing={2} p={5}>
        <Text fontWeight="semibold" fontSize="lg" color="gray.800">
          {catalogue.ProductName}
        </Text>

        <HStack w="100%" justify="space-between">
          <Text fontWeight="bold" fontSize="md" color="pink.600">
            ₹ {catalogue.ProductPrice}
          </Text>

          <Button
            size="sm"
            bg="pink.500"
            color="white"
            borderRadius="full"
            _hover={{ bg: "pink.600" }}
            px={5}
          >
            {purchaseType}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CatalogueCard;
