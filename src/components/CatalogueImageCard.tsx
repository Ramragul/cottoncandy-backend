// Version 1 : Working Version 

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   GridItem,
//   Text,
//   Image,
//   Button,
// } from '@chakra-ui/react';
// import { Catalogue } from '../hooks/useDesignCatalogue';

// interface Props {
//   product: Catalogue;
//   productType : string | null;
// }

// const CatalogueImageCard: React.FC<Props> = ({ product,productType }) => {
//   const navigate = useNavigate();
  

//   const handleProductClick = (product: Catalogue) => {
//     navigate(`/productDetails`, { state: { product , productType } });
//   };

//   // Split the image URLs by comma and use the first URL
//   const firstImageURL = product.ProductImageURL.split(',')[0];

//   console.log("FirstImageURL" +firstImageURL)
//   console.log("ProductImageURL" +product.ProductImageURL)

//   return (
//     <GridItem key={product.ProductID} position="relative" m={{ base: 2, md: 0 }}>
//       <Box height="0" pt="133.98%" position="relative" onClick={() => handleProductClick(product)}>
//         <Image
//           src={firstImageURL}
//           alt={product.ProductName}
//           objectFit="contain"
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           borderRadius="md"
//         />
//       </Box>
//       <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={4} borderRadius="md">
//         <Text color="pink.900" fontWeight="bold" mb={2} p={2}>{product.ProductName}</Text>
//         <Text color="gray.500" p={2}>₹ {product.ProductPrice} </Text>
//         <Button
//           mt={2}
//           //bg="black"
//           bg="#c32f8c"
//           //color="pink.200"
//           color="white"
//           _hover={{ bg: 'gray.700' }}
//           borderRadius="md"
//           px={4}
//           py={2}
//           onClick={() => handleProductClick(product)}
//         >
//           Rent Now
//         </Button>
//       </Box>
//     </GridItem>
//   );
// };

// export default CatalogueImageCard;


// Version 2 : Version 1 is working version, this is an enhancment to it , discount strike addition

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, GridItem, Text, Image, Button, HStack } from '@chakra-ui/react';
// import { Catalogue } from '../hooks/useDesignCatalogue';

// interface Props {
//   product: Catalogue;
//   productType: string | null;
// }

// const CatalogueImageCard: React.FC<Props> = ({ product, productType }) => {
//   const navigate = useNavigate();

//   const handleProductClick = (product: Catalogue) => {
//     navigate(`/productDetails`, { state: { product, productType } });
//   };

//   // Split the image URLs by comma and use the first URL
//   const firstImageURL = product.ProductImageURL.split(',')[0];

//   return (
//     <GridItem key={product.ProductID} position="relative" m={{ base: 2, md: 0 }}>
//       <Box height="0" pt="133.98%" position="relative" onClick={() => handleProductClick(product)}>
//         <Image
//           src={firstImageURL}
//           alt={product.ProductName}
//           objectFit="contain"
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           borderRadius="md"
//         />
//       </Box>
//       <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={4} borderRadius="md">
//         <Text color="pink.900" fontWeight="bold" mb={2} p={2}>{product.ProductName}</Text>
//         <HStack>
//           <Text as="s" color="gray.500" p={2} fontSize="lg">₹ {product.ProductPurchasePrice}</Text>
//           <Text color="pink.900" fontWeight="bold" p={2} fontSize="xl">₹ {product.ProductPrice}</Text>
//         </HStack>
//         <Button
//           mt={2}
//           bg="#c32f8c"
//           color="white"
//           _hover={{ bg: 'gray.700' }}
//           borderRadius="md"
//           px={4}
//           py={2}
//           onClick={() => handleProductClick(product)}
//         >
//           Rent Now
//         </Button>
//       </Box>
//     </GridItem>
//   );
// };

// export default CatalogueImageCard;



// Version 3 : Version 2 and 1 is the working version. this is design enhancement to



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   GridItem,
//   Text,
//   Image,
//   Button,
//   Badge,
//   Flex,
// } from '@chakra-ui/react';
// import { Catalogue } from '../hooks/useDesignCatalogue';

// interface Props {
//   product: Catalogue;
//   productType: string | null;
// }

// const CatalogueImageCard: React.FC<Props> = ({ product, productType }) => {
//   const navigate = useNavigate();

//   const handleProductClick = (product: Catalogue) => {
//     navigate(`/productDetails`, { state: { product, productType } });
//   };

//   const firstImageURL = product.ProductImageURL.split(',')[0];

//   return (
//     <GridItem key={product.ProductID} position="relative" m={{ base: 2, md: 0 }}>
//       <Box height="0" pt="133.98%" position="relative" onClick={() => handleProductClick(product)}>
//         <Image
//           src={firstImageURL}
//           alt={product.ProductName}
//           objectFit="cover"
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           borderRadius="md"
//         />
//         {/* Rent Tag */}
//         <Badge
//           position="absolute"
//           top={2}
//           left={2}
//           colorScheme="pink"
//           fontSize="0.9em"
//           px={2}
//           py={1}
//           borderRadius="md"
//         >
//           Rent
//         </Badge>
//       </Box>
//       <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={4} borderRadius="md">
//         <Text color="pink.900" fontWeight="bold" mb={2} p={2}>{product.ProductName}</Text>
        
//         <Flex alignItems="center">
//           <Text color="gray.500" p={2} fontSize="lg" fontWeight="bold" mr={2}>₹ {product.ProductPrice}</Text>
//           <Text as="del" color="gray.400" fontSize="sm">₹ {product.ProductPurchasePrice}</Text>
//         </Flex>
        
//         <Button
//           mt={2}
//           bg="#c32f8c"
//           color="white"
//           _hover={{ bg: 'gray.700' }}
//           borderRadius="md"
//           px={4}
//           py={2}
//           onClick={() => handleProductClick(product)}
//         >
//           Rent Now
//         </Button>
//       </Box>
//     </GridItem>
//   );
// };

// export default CatalogueImageCard;


// Version 3 : 2 and 1 are working versions,


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, GridItem, Text, Image, Button, HStack } from '@chakra-ui/react';
// import { Catalogue } from '../hooks/useDesignCatalogue';

// interface Props {
//   product: Catalogue;
//   productType: string | null;
// }

// const CatalogueImageCard: React.FC<Props> = ({ product, productType }) => {
//   const navigate = useNavigate();

//   const handleProductClick = (product: Catalogue) => {
//     navigate(`/productDetails`, { state: { product, productType } });
//   };

//   // Split the image URLs by comma and use the first URL
//   const firstImageURL = product.ProductImageURL.split(',')[0];

//   return (
//     <GridItem key={product.ProductID} position="relative" m={{ base: 2, md: 0 }}>
//       <Box height="0" pt="133.98%" position="relative" onClick={() => handleProductClick(product)}>
//         <Image
//           src={firstImageURL}
//           alt={product.ProductName}
//           objectFit="contain"
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           borderRadius="md"
//         />
//       </Box>
//       <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={4} borderRadius="md">
//         <Text color="pink.900" fontWeight="bold" mb={2} p={2}>{product.ProductName}</Text>
//         <HStack>
//           <Text as="s" color="gray.500" p={2} fontSize="lg">₹ {product.ProductPurchasePrice}</Text>
//           <Text color="pink.900" fontWeight="bold" p={2} fontSize="xl">₹ {product.ProductPrice}</Text>
//         </HStack>
//         <Button
//           mt={2}
//           bg="#c32f8c"
//           color="white"
//           _hover={{ bg: 'gray.700' }}
//           borderRadius="md"
//           px={4}
//           py={2}
//           onClick={() => handleProductClick(product)}
//         >
//           Rent Now
//         </Button>
//       </Box>
//     </GridItem>
//   );
// };

// export default CatalogueImageCard;


// Version 4 : Design Enhancement to version 3

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, GridItem, Text, Image, Button, HStack } from '@chakra-ui/react';
// import { Catalogue } from '../hooks/useDesignCatalogue';

// interface Props {
//   product: Catalogue;
//   productType: string | null;
// }

// const CatalogueImageCard: React.FC<Props> = ({ product, productType }) => {
//   const navigate = useNavigate();

//   const handleProductClick = (product: Catalogue) => {
//     navigate(`/productDetails`, { state: { product, productType } });
//   };

//   // Split the image URLs by comma and use the first URL
//   const firstImageURL = product.ProductImageURL.split(',')[0];

//   return (
//     <GridItem key={product.ProductID} position="relative" m={{ base: 2, md: 0 }}>
//       <Box height="0" pt="100%" position="relative" onClick={() => handleProductClick(product)}>
//         <Image
//           src={firstImageURL}
//           alt={product.ProductName}
//           objectFit="contain"
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           borderRadius="md"
//         />
//       </Box>
//       <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={3} borderRadius="md" mt="-8px">
//         <Text color="pink.900" fontWeight="bold" mb={1} p={2}>{product.ProductName}</Text>
//         <HStack>
//           <Text as="s" color="gray.500" p={2} fontSize="lg">₹ {product.ProductPurchasePrice}</Text>
//           <Text color="pink.900" fontWeight="bold" p={2} fontSize="xl">₹ {product.ProductPrice}</Text>
//         </HStack>
//         <Button
//           mt={2}
//           bg="#c32f8c"
//           color="white"
//           _hover={{ bg: 'gray.700' }}
//           borderRadius="md"
//           px={4}
//           py={2}
//           onClick={() => handleProductClick(product)}
//         >
//           Rent Now
//         </Button>
//       </Box>
//     </GridItem>
//   );
// };

// export default CatalogueImageCard;



// Version 5 - Enhancement to version 4

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, GridItem, Text, Image, Button, HStack } from '@chakra-ui/react';
import { Catalogue } from '../hooks/useDesignCatalogue';

interface Props {
  product: Catalogue;
  productType: string | null;
  purchaseType: string | null
}

const CatalogueImageCard: React.FC<Props> = ({ product, productType , purchaseType}) => {
  const navigate = useNavigate();

  const navigationURL = (purchaseType == 'Rent Now') ? `/rentalProductDetails` : `/tailoringProductDetails`

  const handleProductClick = (product: Catalogue) => {
    // navigate(`/productDetails`, { state: { product, productType ,purchaseType } });
    navigate(navigationURL, { state: { product, productType ,purchaseType } });
  };

  // Split the image URLs by comma and use the first URL
  const firstImageURL = product.ProductImageURL.split(',')[0];

  return (
    <GridItem key={product.ProductID} position="relative" m={{ base: 2, md: 0 }}>
      <Box height="0" pt="100%" position="relative" onClick={() => handleProductClick(product)}>
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
      <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={3} borderRadius="md" mt="-8px">
        <Text color="pink.900" fontWeight="bold" mb={1} p={2}>{product.ProductName}</Text>
        <HStack>
          <Text as="s" color="gray.500" p={2} fontSize="lg">₹ {product.ProductPurchasePrice}</Text>
          <Text color="pink.900" fontWeight="bold" p={2} fontSize="xl">₹ {product.ProductPrice}</Text>
        </HStack>
        <Button
          mt={2}
          bg="#c32f8c"
          color="white"
          _hover={{ bg: 'gray.700' }}
          borderRadius="md"
          px={4}
          py={2}
          onClick={() => handleProductClick(product)}
        >
          {purchaseType}
        </Button>
      </Box>
    </GridItem>
  );
};

export default CatalogueImageCard;









