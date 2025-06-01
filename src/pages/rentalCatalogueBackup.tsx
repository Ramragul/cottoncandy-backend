// import React from 'react';
// import {
//   Box,
//   Flex,
//   Grid,
//   GridItem,
//   Heading,
//   Text,
//   Select,
//   CheckboxGroup,
//   Checkbox,
//   VStack,
//   HStack,
//   Image,
//   useMediaQuery,
// } from '@chakra-ui/react';

// import Photo1 from '../assets/rentalPage/photo1.jpg'
// import Photo2 from '../assets/rentalPage/photo2.jpg'

// interface Product {
//   id: number;
//   image: string;
//   name: string;
//   price: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     image: Photo1,
//     name: 'Product 1',
//     price: '$100',
//   },
//   {
//     id: 2,
//     image: Photo2,
//     name: 'Product 2',
//     price: '$150',
//   },
//   // Add more products here
// ];

// export const RentalCatalogue: React.FC = () => {
//   const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

//   return (
//     <Box p={4}>
//       <Heading mb={4}>Rental Page</Heading>

//       {/* Sort Categories */}
//       <HStack spacing={4} mb={4}>
//         <Text>Sort by:</Text>
//         <Select placeholder="Select option">
//           <option value="priceLowHigh">Price: Low to High</option>
//           <option value="priceHighLow">Price: High to Low</option>
//           <option value="newArrivals">New Arrivals</option>
//         </Select>
//       </HStack>

//       <Flex>
//         {/* Filters */}
//         <Box w="20%" display={{ base: 'none', md: 'block' }} pr={4}>
//           <Heading size="md" mb={4}>Filters</Heading>
//           <VStack align="start">
//             <CheckboxGroup colorScheme="pink">
//               <Checkbox value="wedding">Wedding</Checkbox>
//               <Checkbox value="party">Party</Checkbox>
//               <Checkbox value="graduation">Graduation</Checkbox>
//               <Checkbox value="formal">Formal</Checkbox>
//             </CheckboxGroup>
//           </VStack>
//         </Box>

//         {/* Product Grid */}
//         <Box w={{ base: '100%', md: '80%' }}>
//           <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={4}>
//             {products.map((product) => (
//               <GridItem key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
//                 <Image src={product.image} alt={product.name} mb={4} />
//                 <Text fontWeight="bold" mb={2}>{product.name}</Text>
//                 <Text color="gray.500">{product.price}</Text>
//               </GridItem>
//             ))}
//           </Grid>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default RentalCatalogue;

// import React from 'react';
// import {
//   Box,
//   Flex,
//   Grid,
//   GridItem,
//   Heading,
//   Text,
//   Select,
//   CheckboxGroup,
//   Checkbox,
//   VStack,
//   HStack,
//   Image,
//   useMediaQuery,
// } from '@chakra-ui/react';
// import Photo1 from '../assets/rentalPage/photo1.jpg'
// import Photo2 from '../assets/rentalPage/photo2.jpg'
// interface Product {
//   id: number;
//   image: string;
//   name: string;
//   price: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     image: Photo1,
//     name: 'Product 1',
//     price: '$100',
//   },
//   {
//     id: 2,
//     image: Photo2,
//     name: 'Product 2',
//     price: '$150',
//   },
//   // Add more products here
// ];

// export const RentalCatalogue: React.FC = () => {
//   const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

//   return (
//     <Box p={4}>
//       <Heading mb={4}>Rental Page</Heading>

//       {/* Sort Categories */}
//       <HStack spacing={4} mb={4}>
//         <Text>Sort by:</Text>
//         <Select placeholder="Select option">
//           <option value="priceLowHigh">Price: Low to High</option>
//           <option value="priceHighLow">Price: High to Low</option>
//           <option value="newArrivals">New Arrivals</option>
//         </Select>
//       </HStack>

//       <Flex>
//         {/* Filters */}
//         <Box w="20%" display={{ base: 'none', md: 'block' }} pr={4}>
//           <Heading size="md" mb={4}>Filters</Heading>
//           <VStack align="start">
//             <CheckboxGroup colorScheme="pink">
//               <Checkbox value="wedding">Wedding</Checkbox>
//               <Checkbox value="party">Party</Checkbox>
//               <Checkbox value="graduation">Graduation</Checkbox>
//               <Checkbox value="formal">Formal</Checkbox>
//             </CheckboxGroup>
//           </VStack>
//         </Box>

//         {/* Product Grid */}
//         <Box w={{ base: '100%', md: '80%' }}>
//           <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
//             {products.map((product) => (
//               <GridItem key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
//                 <Box height="0" pt="133.98%" position="relative" mb={4}>
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     objectFit="cover"
//                     position="absolute"
//                     top="0"
//                     left="0"
//                     width="100%"
//                     height="100%"
//                   />
//                 </Box>
//                 <Box bg="rgba(255, 255, 255, 0.8)" p={4} borderRadius="lg">
//                   <Text fontWeight="bold" mb={2}>{product.name}</Text>
//                   <Text color="gray.500">{product.price}</Text>
//                 </Box>
//               </GridItem>
//             ))}
//           </Grid>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default RentalCatalogue;


// import React from 'react';
// import {
//   Box,
//   Flex,
//   Grid,
//   GridItem,
//   Heading,
//   Text,
//   Select,
//   CheckboxGroup,
//   Checkbox,
//   VStack,
//   HStack,
//   Image,
//   useMediaQuery,
//   Button,
// } from '@chakra-ui/react';
// import Photo1 from '../assets/rentalPage/photo1.jpg'
// import Photo2 from '../assets/rentalPage/photo2.jpg'
// import Photo3 from '../assets/rentalPage/photo3.jpg'
// import Photo4 from '../assets/rentalPage/photo4.jpg'
// import Photo5 from '../assets/rentalPage/photo5.jpg'
// import Photo6 from '../assets/rentalPage/photo6.jpg'
// import Photo7 from '../assets/rentalPage/photo7.jpg'
// interface Product {
//   id: number;
//   image: string;
//   name: string;
//   price: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     image: Photo1,
//     name: 'Product 1',
//     price: '$100',
//   },
//   {
//     id: 2,
//     image: Photo2,
//     name: 'Product 2',
//     price: '$150',
//   },
//   {
//     id: 3,
//     image: Photo3,
//     name: 'Product 3',
//     price: '$150',
//   },
//   {
//     id: 4,
//     image: Photo4,
//     name: 'Product 4',
//     price: '$150',
//   },
//   {
//     id: 5,
//     image: Photo5,
//     name: 'Product 5',
//     price: '$150',
//   },
//   {
//     id: 6,
//     image: Photo6,
//     name: 'Product 2',
//     price: '$150',
//   },
//   {
//     id: 7,
//     image: Photo7,
//     name: 'Product 2',
//     price: '$150',
//   },
//   // Add more products here
// ];

// export const RentalCatalogue: React.FC = () => {
//   const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

//   return (
//     <Box p={4} bg="white">
//       <Heading mb={4}>Rental Page</Heading>

//       {/* Sort Categories */}
//       <HStack spacing={4} mb={4}>
//         <Text color="pink.800">Sort by:</Text>
//         <Select placeholder="Select option">
//           <option value="priceLowHigh">Price: Low to High</option>
//           <option value="priceHighLow">Price: High to Low</option>
//           <option value="newArrivals">New Arrivals</option>
//         </Select>
//       </HStack>

//       <Flex>
//         {/* Filters */}
//         <Box w="20%" display={{ base: 'none', md: 'block' }} pr={4}>
//           <Heading size="md" mb={4} color="pink.800">Filters</Heading>
//           <VStack align="start">
//             <CheckboxGroup colorScheme="pink" >
//               <Checkbox value="wedding"color="pink.600">Wedding</Checkbox>
//               <Checkbox value="party">Party</Checkbox>
//               <Checkbox value="graduation">Graduation</Checkbox>
//               <Checkbox value="formal">Formal</Checkbox>
//             </CheckboxGroup>
//           </VStack>
//         </Box>

//         {/* Product Grid */}
//         <Box w={{ base: '100%', md: '80%' }}>
//           <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
//             {products.map((product) => (
//               <GridItem key={product.id} position="relative">
//                 <Box height="0" pt="133.98%" position="relative">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     objectFit="cover"
//                     position="absolute"
//                     top="0"
//                     left="0"
//                     width="100%"
//                     height="100%"
//                   />
//                 </Box>
//                 <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={4}>
//                   <Text color="pink.900" fontWeight="bold" mb={2}  p={2} borderRadius="lg">{product.name}</Text>
//                   <Text color="gray.500"  p={2} borderRadius="lg">{product.price}</Text>
//                   <Button
//                     mt={2}
//                     bg="black"
//                     color="pink.200"
//                     _hover={{ bg: 'gray.700' }}
//                     borderRadius="md"
//                     px={4}
//                     py={2}
//                     >
//                     Rent Now
//                     </Button>

//                 </Box>
//               </GridItem>
//             ))}
//           </Grid>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default RentalCatalogue;
