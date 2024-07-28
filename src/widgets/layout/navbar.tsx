// import React from 'react';
// import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const NavBar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label="Open Menu"
//           display={{ md: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack
//             as="nav"
//             spacing={4}
//             display={{ base: 'none', md: 'flex' }}
//             color="pink.600"
//           >
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }} color="pink.600">
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//             Login
//           </Link>
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//             Cart
//           </Link>
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/search">
//             Search
//           </Link>
//         </HStack>
//       </Flex>

//       {isOpen ? (
//         <Box pb={4} display={{ md: 'none' }}>
//           <Stack as="nav" spacing={4}>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//               Login
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//               Cart
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/search">
//               Search
//             </Link>
//           </Stack>
//         </Box>
//       ) : null}
//     </Box>
//   );
// };

// export default NavBar;

// import React from 'react';
// import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

// const NavBar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label="Open Menu"
//           display={{ md: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack
//             as="nav"
//             spacing={4}
//             display={{ base: 'none', md: 'flex' }}
//             color="pink.600"
//           >
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }} color="pink.600">
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//             Login
//           </Link>
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//             Cart
//           </Link>
//           <InputGroup>
//             <Input placeholder="Search" />
//             <InputRightElement>
//               <SearchIcon color="pink.600" />
//             </InputRightElement>
//           </InputGroup>
//         </HStack>
//       </Flex>

//       {isOpen ? (
//         <Box pb={4} display={{ md: 'none' }}>
//           <Stack as="nav" spacing={4}>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//               Login
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//               Cart
//             </Link>
//             <InputGroup>
//               <Input placeholder="Search" />
//               <InputRightElement>
//                 <SearchIcon color="pink.600" />
//               </InputRightElement>
//             </InputGroup>
//           </Stack>
//         </Box>
//       ) : null}
//     </Box>
//   );
// };

// export default NavBar;


// Version 2 Code

// import React from 'react';
// import {
//   Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
//   useDisclosure,
//   Stack,
//   InputGroup,
//   Input,
//   InputRightElement,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

// const NavBar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color='pink.900'/>}
//           aria-label="Open Menu"
//           display={{ md: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack
//             as="nav"
//             spacing={4}
//             display={{ base: 'none', md: 'flex' }}
//             color="pink.600"
//           >
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }} color="pink.600">
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//             Login
//           </Link>
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//             Cart
//           </Link>
//           <InputGroup maxW="200px">
//             <Input placeholder="Search" />
//             <InputRightElement>
//               <SearchIcon color="pink.600" />
//             </InputRightElement>
//           </InputGroup>
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ md: 'none' }} >
//            <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <Stack as="nav" spacing={4} color='pink.600'>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//               Login
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//               Cart
//             </Link>
//             <InputGroup maxW="200px">
//               <Input placeholder="Search" />
//               <InputRightElement>
//                 <SearchIcon color="pink.600" />
//               </InputRightElement>
//             </InputGroup>
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default NavBar;


// Version 3 Code

// import React from 'react';
// import { FaShoppingCart, FaShopify } from 'react-icons/fa';
// import {
//   Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
//   useDisclosure,
//   Stack,
//   InputGroup,
//   Input,
//   InputRightElement,
//   Icon,
//   Button,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

// const NavBar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color='pink.900' />}
//           aria-label="Open Menu"
//           display={{ base: 'block', lg: 'none' }}  // Changed md to lg
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack
//             as="nav"
//             spacing={4}
//             display={{ base: 'none', lg: 'flex' }}  // Changed md to lg
//             color="pink.600"
//           >
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" display={{ base: 'none', lg: 'flex' }} color="pink.600">

//           {/* <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//             Cart
//           </Link> */}
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//             <Icon as={FaShoppingCart} w={7} h={7}  /> 
//           </Link>

//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login" >
//           <Button
//               mt={2}
//               bg="black"
//               color="pink.200"
//               _hover={{ bg: 'gray.700' }}
//               borderRadius="md"
//               px={4}
//               py={2}
            
//             >
//              Login
//             </Button>
//           </Link>
//           {/* <InputGroup maxW="200px">
//             <Input placeholder="Search" />
//             <InputRightElement>
//               <SearchIcon color="pink.600" />
//             </InputRightElement>
//           </InputGroup> */}
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ lg: 'none' }} > 
//           {/* <Box fontSize="2xl" fontWeight="bold" color="pink.600">Menu Title</Box> */}
//           <Stack as="nav" spacing={4} color='pink.600'>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//               Login
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//               Cart
//             </Link>
//             <InputGroup maxW="200px">
//               <Input placeholder="Search" />
//               <InputRightElement>
//                 <SearchIcon color="pink.600" />
//               </InputRightElement>
//             </InputGroup>
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default NavBar;


// Version 4 Code - Working Fine , moving to version 5 for session handling

// import React from 'react';
// import { FaShoppingCart, FaShopify } from 'react-icons/fa';
// import {
//   Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
//   useDisclosure,
//   Stack,
//   Button,
//   Text,
//   Badge,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';

// const NavBar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cart } = useCart();

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color='pink.900' />}
//           aria-label="Open Menu"
//           display={{ base: 'block', lg: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack
//             as="nav"
//             spacing={4}
//             display={{ base: 'none', lg: 'flex' }}
//             color="pink.600"
//           >
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" display={{ base: 'none', lg: 'flex' }} color="pink.600">
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//             <Box position="relative">
//               <FaShoppingCart size={24} />
//               {cart.length > 0 && (
//                 <Badge
//                   position="absolute"
//                   top="-1"
//                   right="-1"
//                   fontSize="0.8em"
//                   colorScheme="red"
//                   borderRadius="full"
//                 >
//                   {cart.length}
//                 </Badge>
//               )}
//             </Box>
//           </Link>
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//             <Button
//               mt={2}
//               bg="black"
//               color="pink.200"
//               _hover={{ bg: 'gray.700' }}
//               borderRadius="md"
//               px={4}
//               py={2}
//             >
//               Login
//             </Button>
//           </Link>
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ lg: 'none' }}>
//           <Stack as="nav" spacing={4} color='pink.600'>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//               Login
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//               <Box position="relative">
//                 <FaShoppingCart size={24} />
//                 {cart.length > 0 && (
//                   <Badge
//                     position="absolute"
//                     top="-1"
//                     right="-1"
//                     fontSize="0.8em"
//                     colorScheme="red"
//                     borderRadius="full"
//                   >
//                     {cart.length}
//                   </Badge>
//                 )}
//               </Box>
//             </Link>
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default NavBar;


// Version 5 - Session Handling

// import React from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import {
//   Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
//   useDisclosure,
//   Stack,
//   Button,
//   Badge,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';

// interface NavBarProps {
//   isAuthenticated: boolean; // Pass authentication state from parent component
//   onLogout: () => void; // Callback function for logout action
// }

// const NavBar: React.FC<NavBarProps> = ({ isAuthenticated, onLogout }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cart } = useCart();

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color='pink.900' />}
//           aria-label="Open Menu"
//           display={{ base: 'block', lg: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack
//             as="nav"
//             spacing={4}
//             display={{ base: 'none', lg: 'flex' }}
//             color="pink.600"
//           >
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" display={{ base: 'none', lg: 'flex' }} color="pink.600">
//           {isAuthenticated ? (
//             <>
//               <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//                 <Box position="relative">
//                   <FaShoppingCart size={24} />
//                   {cart.length > 0 && (
//                     <Badge
//                       position="absolute"
//                       top="-1"
//                       right="-1"
//                       fontSize="0.8em"
//                       colorScheme="red"
//                       borderRadius="full"
//                     >
//                       {cart.length}
//                     </Badge>
//                   )}
//                 </Box>
//               </Link>
//               <Button
//                 mt={2}
//                 bg="black"
//                 color="pink.200"
//                 _hover={{ bg: 'gray.700' }}
//                 borderRadius="md"
//                 px={4}
//                 py={2}
//                 onClick={onLogout}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//               <Button
//                 mt={2}
//                 bg="black"
//                 color="pink.200"
//                 _hover={{ bg: 'gray.700' }}
//                 borderRadius="md"
//                 px={4}
//                 py={2}
//               >
//                 Login
//               </Button>
//             </Link>
//           )}
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ lg: 'none' }}>
//           <Stack as="nav" spacing={4} color='pink.600'>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             {isAuthenticated ? (
//               <>
//                 <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//                   <Box position="relative">
//                     <FaShoppingCart size={24} />
//                     {cart.length > 0 && (
//                       <Badge
//                         position="absolute"
//                         top="-1"
//                         right="-1"
//                         fontSize="0.8em"
//                         colorScheme="red"
//                         borderRadius="full"
//                       >
//                         {cart.length}
//                       </Badge>
//                     )}
//                   </Box>
//                 </Link>
//                 <Button
//                   mt={2}
//                   bg="black"
//                   color="pink.200"
//                   _hover={{ bg: 'gray.700' }}
//                   borderRadius="md"
//                   px={4}
//                   py={2}
//                   onClick={onLogout}
//                 >
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//                 <Button
//                   mt={2}
//                   bg="black"
//                   color="pink.200"
//                   _hover={{ bg: 'gray.700' }}
//                   borderRadius="md"
//                   px={4}
//                   py={2}
//                 >
//                   Login
//                 </Button>
//               </Link>
//             )}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default NavBar;



// Version 6 - Session Handling with Auth - Working Design

// import React from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Badge, Button } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';
// import { useAuth } from '../../contexts/AuthContext';

// const Navbar: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cartState } = useCart();
//   const { authState, logout } = useAuth();

//   const cartLength = cartState.items.length;

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color="pink.900" />}
//           aria-label="Open Menu"
//           display={{ base: 'block', lg: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" display={{ base: 'none', lg: 'flex' }} color="pink.600">
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//             <Box position="relative">
//               <FaShoppingCart size={24} />
//               {cartLength > 0 && (
//                 <Badge
//                   position="absolute"
//                   top="-1"
//                   right="-1"
//                   fontSize="0.8em"
//                   colorScheme="red"
//                   borderRadius="full"
//                 >
//                   {cartLength}
//                 </Badge>
//               )}
//             </Box>
//           </Link>
//           {authState.isAuthenticated ? (
//             <Button
//               mt={2}
//               bg="black"
//               color="pink.200"
//               _hover={{ bg: 'gray.700' }}
//               borderRadius="md"
//               px={4}
//               py={2}
//               onClick={logout}
//             >
//               Logout
//             </Button>
//           ) : (
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//               <Button
//                 mt={2}
//                 bg="black"
//                 color="pink.200"
//                 _hover={{ bg: 'gray.700' }}
//                 borderRadius="md"
//                 px={4}
//                 py={2}
//               >
//                 Login
//               </Button>
//             </Link>
//           )}
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ lg: 'none' }}>
//           <Stack as="nav" spacing={4} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             {authState.isAuthenticated ? (
//               <Button
//                 mt={2}
//                 bg="black"
//                 color="pink.200"
//                 _hover={{ bg: 'gray.700' }}
//                 borderRadius="md"
//                 px={4}
//                 py={2}
//                 onClick={logout}
//               >
//                 Logout
//               </Button>
//             ) : (
//               <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//                 <Button
//                   mt={2}
//                   bg="black"
//                   color="pink.200"
//                   _hover={{ bg: 'gray.700' }}
//                   borderRadius="md"
//                   px={4}
//                   py={2}
//                 >
//                   Login
//                 </Button>
//               </Link>
//             )}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;



// Version 7 - Similar to version 6, login and logout , account details design enhancements

// import React from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Badge, Button, Menu, MenuButton, MenuList, MenuItem, Avatar, Text } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';
// import { useAuth } from '../../contexts/AuthContext';

// const Navbar: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cartState } = useCart();
//   const { authState, logout } = useAuth();

//   const cartLength = cartState.items.length;

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color="pink.900" />}
//           aria-label="Open Menu"
//           display={{ base: 'block', lg: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" display={{ base: 'none', lg: 'flex' }} color="pink.600">
//           <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//             <Box position="relative">
//               <FaShoppingCart size={24} />
//               {cartLength > 0 && (
//                 <Badge
//                   position="absolute"
//                   top="-1"
//                   right="-1"
//                   fontSize="0.8em"
//                   colorScheme="red"
//                   borderRadius="full"
//                 >
//                   {cartLength}
//                 </Badge>
//               )}
//             </Box>
//           </Link>
//           {authState.isAuthenticated ? (
//             <Menu>
//               <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
//                 <Avatar size="sm" name={authState.username} />
//               </MenuButton>
//               <MenuList>
//                 <Box px={4} py={3}>
//                   <Text fontWeight="bold">{authState.username}</Text>
//                 </Box>
//                 <MenuItem as={Link} href="/account">My Account</MenuItem>
//                 <MenuItem as={Link} href="/orders">Order History</MenuItem>
//                 <MenuItem as={Link} href="/settings">Settings</MenuItem>
//                 <MenuItem onClick={logout}>Logout</MenuItem>
//               </MenuList>
//             </Menu>
//           ) : (
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//               <Button
//                 mt={2}
//                 bg="black"
//                 color="pink.200"
//                 _hover={{ bg: 'gray.700' }}
//                 borderRadius="md"
//                 px={4}
//                 py={2}
//               >
//                 Hi, Login
//               </Button>
//             </Link>
//           )}
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ lg: 'none' }}>
//           <Stack as="nav" spacing={4} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             {authState.isAuthenticated ? (
//               <>
//                 <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/account">
//                   My Account
//                 </Link>
//                 <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/orders">
//                   Order History
//                 </Link>
//                 <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/settings">
//                   Settings
//                 </Link>
//                 <Button
//                   mt={2}
//                   bg="black"
//                   color="pink.200"
//                   _hover={{ bg: 'gray.700' }}
//                   borderRadius="md"
//                   px={4}
//                   py={2}
//                   onClick={logout}
//                 >
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
//                 <Button
//                   mt={2}
//                   bg="black"
//                   color="pink.200"
//                   _hover={{ bg: 'gray.700' }}
//                   borderRadius="md"
//                   px={4}
//                   py={2}
//                 >
//                   Hi, Login
//                 </Button>
//               </Link>
//             )}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;



// Version 8 -- version 7 and 6 are working, 8 is design enhancement of 7

// import React, { useState } from 'react';
// import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
// import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Badge, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';
// import { useAuth } from '../../contexts/AuthContext';

// const Navbar: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cartState } = useCart();
//   const { authState, logout } = useAuth();

//   const cartLength = cartState.items.length;

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color="pink.900" />}
//           aria-label="Open Menu"
//           display={{ base: 'block', lg: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center">
//           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
//           <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" color="pink.600">
//           {cartLength > 0 && (
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//               <Box position="relative">
//                 <FaShoppingCart size={24} />
//                 {cartLength > 0 && (
//                   <Badge
//                     position="absolute"
//                     top="-1"
//                     right="-1"
//                     fontSize="0.8em"
//                     colorScheme="red"
//                     borderRadius="full"
//                   >
//                     {cartLength}
//                   </Badge>
//                 )}
//               </Box>
//             </Link>
//           )}
//           {authState.isAuthenticated ? (
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded="md"
//                 variant="link"
//                 cursor="pointer"
//                 minW={0}
//               >
//                 <FaUserCircle size={24} />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>Your Account</MenuItem>
//                 <MenuItem>Your Orders</MenuItem>
//                 <MenuItem>Settings</MenuItem>
//                 <MenuDivider />
//                 <MenuItem onClick={logout}>Logout</MenuItem>
//               </MenuList>
//             </Menu>
//           ) : (
//             <Link href="/login" display="flex" alignItems="center">
//               <Box as={FaUserCircle} size={24} mr={2} color="pink.600" />
//               <Box fontSize="md" fontWeight="bold" color="pink.600">
//                 Hi, Login
//               </Box>
//             </Link>
//           )}
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ lg: 'none' }}>
//           <Stack as="nav" spacing={4} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             {authState.isAuthenticated ? (
//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded="md"
//                   variant="link"
//                   cursor="pointer"
//                   minW={0}
//                 >
//                   <FaUserCircle size={24} />
//                 </MenuButton>
//                 <MenuList>
//                   <MenuItem>Your Account</MenuItem>
//                   <MenuItem>Your Orders</MenuItem>
//                   <MenuItem>Settings</MenuItem>
//                   <MenuDivider />
//                   <MenuItem onClick={logout}>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             ) : (
//               <Link href="/login" display="flex" alignItems="center">
//                 <Box as={FaUserCircle} size={24} mr={2} color="pink.600" />
//                 <Box fontSize="md" fontWeight="bold" color="pink.600">
//                   Hi, Login
//                 </Box>
//               </Link>
//             )}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;


// Version 9 - Enhancement of version 8 (Version 7 is working code )

// import React from 'react';
// import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
// import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Badge, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon,ChevronDownIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';
// import { useAuth } from '../../contexts/AuthContext';
// import logo1 from '../../assets/navbar/logo1.jpg'
// import logo2 from '../../assets/navbar/logo2.jpg'
// import logo3 from '../../assets/navbar/logo3.jpg'

// const Navbar: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cartState } = useCart();
//   const { authState, logout } = useAuth();

//   const cartLength = cartState.items.length;

//   console.log("Cart Item Length :" +cartLength)

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color="pink.900" />}
//           aria-label="Open Menu"
//           display={{ base: 'block', lg: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
        
//         <HStack spacing={8} alignItems="center" display={{ base: 'none', lg: 'flex' }}>
//           <Link 
//           >
//             City <ChevronDownIcon />
//           </Link>
//         </HStack>
      
//           <HStack spacing={8} alignItems="center" justifyContent="center">
//           <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Box>
//               <img src={logo1} alt="Cotton Candy Logo" style={{ height: '55px' }} /> {/* Add your logo image here */}
//             </Box>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" color="pink.600">
//           {cartLength > 0 && (
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//               <Box position="relative">
//                 <FaShoppingCart size={24} />
//                 {cartLength > 0 && (
//                   <Badge
//                     position="absolute"
//                     top="-1"
//                     right="-1"
//                     fontSize="0.8em"
//                     colorScheme="red"
//                     borderRadius="full"
//                   >
//                     {cartLength}
//                   </Badge>
//                 )}
//               </Box>
//             </Link>
//           )}
//           {authState.isAuthenticated ? (
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded="full"
//                 variant="link"
//                 cursor="pointer"
//                 minW={0}
//               >
//                 <Avatar size="sm" name={authState.username} bg="pink.600" />
//               </MenuButton>
//               <MenuList>
//                 <Box textAlign="center" p={2}>
//                   <Avatar size="md" name={authState.username} bg="pink.600" />
//                   <Box mt={2} fontWeight="bold">{authState.username}</Box>
//                 </Box>
//                 <MenuDivider />
//                 <MenuItem>Your Account</MenuItem>
//                 <MenuItem>Your Orders</MenuItem>
//                 <MenuItem>Settings</MenuItem>
//                 <MenuDivider />
//                 <MenuItem onClick={logout} as={Button} variant="solid" colorScheme="pink">Logout</MenuItem>
//               </MenuList>
//             </Menu>
//           ) : (
//             <Link href="/login" display="flex" alignItems="center">
//               <Box as={FaRegUserCircle} size={24} mr={2} color="pink.600" />
//               <Box fontSize="md" fontWeight="bold" color="pink.600">
//                 Login
//               </Box>
//             </Link>
//           )}
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ lg: 'none' }}>
//           <Stack as="nav" spacing={4} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             {authState.isAuthenticated && (
//               <Button
//                 mt={2}
//                 bg="black"
//                 color="pink.200"
//                 _hover={{ bg: 'gray.700' }}
//                 borderRadius="md"
//                 px={4}
//                 py={2}
//                 onClick={logout}
//               >
//                 Logout
//               </Button>
//             )}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;



// Version 10 - Version 9 is working version, this is an enhancemnt of city link modal addition and logo in the smaller devices changes


// import React, { useState } from 'react';
// import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
// import {
//   Box, Flex, HStack, Link, IconButton, useDisclosure, Stack,
//   Badge, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';
// import { useAuth } from '../../contexts/AuthContext';
// import logo1 from '../../assets/navbar/logo1.jpg';

// const cities = ["New York", "Los Angeles", "Chicago", "Houston"];

// const Navbar: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cartState } = useCart();
//   const { authState, logout } = useAuth();
//   const [selectedCity, setSelectedCity] = useState("City");

//   const cartLength = cartState.items.length;

//   const handleCitySelect = (city: string) => {
//     setSelectedCity(city);
//   };

//   return (
//     <Box bg="white" px={4} boxShadow="md">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon color="pink.900" />}
//           aria-label="Open Menu"
//           display={{ base: 'block', lg: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems="center" display={{ base: 'none', lg: 'flex' }}>
//           <Menu>
//             <MenuButton as={Link} _hover={{ textDecoration: 'none' }}>
//               {selectedCity} <ChevronDownIcon />
//             </MenuButton>
//             <MenuList>
//               {cities.map((city) => (
//                 <MenuItem key={city} onClick={() => handleCitySelect(city)}>
//                   {city}
//                 </MenuItem>
//               ))}
//             </MenuList>
//           </Menu>
//         </HStack>
//         <HStack spacing={8} alignItems="center" justifyContent={{ base: 'center', lg: 'space-between' }}>
//           <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Box>
//               <img src={logo1} alt="Cotton Candy Logo" style={{ height: '55px' }} />
//             </Box>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} alignItems="center" color="pink.600">
//           {cartLength > 0 && (
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
//               <Box position="relative">
//                 <FaShoppingCart size={24} />
//                 {cartLength > 0 && (
//                   <Badge
//                     position="absolute"
//                     top="-1"
//                     right="-1"
//                     fontSize="0.8em"
//                     colorScheme="red"
//                     borderRadius="full"
//                   >
//                     {cartLength}
//                   </Badge>
//                 )}
//               </Box>
//             </Link>
//           )}
//           {authState.isAuthenticated ? (
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded="full"
//                 variant="link"
//                 cursor="pointer"
//                 minW={0}
//               >
//                 <Avatar size="sm" name={authState.userName} bg="pink.600" />
//               </MenuButton>
//               <MenuList>
//                 <Box textAlign="center" p={2}>
//                   <Avatar size="md" name={authState.userName} bg="pink.600" />
//                   <Box mt={2} fontWeight="bold">{authState.userName}</Box>
//                 </Box>
//                 <MenuDivider />
//                 <MenuItem>Your Account</MenuItem>
//                 <MenuItem>Your Orders</MenuItem>
//                 <MenuItem>Settings</MenuItem>
//                 <MenuDivider />
//                 <MenuItem onClick={logout} as={Button} variant="solid" colorScheme="pink">Logout</MenuItem>
//               </MenuList>
//             </Menu>
//           ) : (
//             <Link href="/login" display="flex" alignItems="center">
//               <Box as={FaRegUserCircle} size={24} mr={2} color="pink.600" />
//               <Box fontSize="md" fontWeight="bold" color="pink.600">
//                 Login
//               </Box>
//             </Link>
//           )}
//         </HStack>
//       </Flex>

//       {isOpen && (
//         <Box pb={4} display={{ lg: 'none' }}>
//           <Stack as="nav" spacing={4} color="pink.600">
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
//               Home
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
//               About Us
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
//               Our Services
//             </Link>
//             <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
//               Contact Us
//             </Link>
//             <Menu>
//               <MenuButton as={Link} _hover={{ textDecoration: 'none' }}>
//                 {selectedCity} <ChevronDownIcon />
//               </MenuButton>
//               <MenuList>
//                 {cities.map((city) => (
//                   <MenuItem key={city} onClick={() => handleCitySelect(city)}>
//                     {city}
//                   </MenuItem>
//                 ))}
//               </MenuList>
//             </Menu>
//             {authState.isAuthenticated && (
//               <Button
//                 mt={2}
//                 bg="black"
//                 color="pink.200"
//                 _hover={{ bg: 'gray.700' }}
//                 borderRadius="md"
//                 px={4}
//                 py={2}
//                 onClick={logout}
//               >
//                 Logout
//               </Button>
//             )}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;



// Version 11 - Version 10 is working revision,this is an ehancement with your orders /account navigation 

import React, { useState } from 'react';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import {
  Box, Flex, HStack, Link, IconButton, useDisclosure, Stack,
  Badge, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../assets/navbar/logo1.jpg';

const cities = ["New York", "Los Angeles", "Chicago", "Houston"];

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartState } = useCart();
  const { authState, logout } = useAuth();
  const [selectedCity, setSelectedCity] = useState("City");
  const navigate = useNavigate();

  const cartLength = cartState.items.length;

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <Box bg="white" px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon color="pink.900" />}
          aria-label="Open Menu"
          display={{ base: 'block', lg: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center" display={{ base: 'none', lg: 'flex' }}>
          <Menu>
            <MenuButton as={Link} _hover={{ textDecoration: 'none' }}>
              {selectedCity} <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              {cities.map((city) => (
                <MenuItem key={city} onClick={() => handleCitySelect(city)}>
                  {city}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
        <HStack spacing={8} alignItems="center" justifyContent={{ base: 'center', lg: 'space-between' }}>
          <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }} color="pink.600">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
              Home
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
              About Us
            </Link>
            <Box>
              <img src={logo1} alt="Cotton Candy Logo" style={{ height: '55px' }} />
            </Box>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
              Our Services
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
              Contact Us
            </Link>
          </HStack>
        </HStack>
        <HStack spacing={4} alignItems="center" color="pink.600">
          {cartLength > 0 && (
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
              <Box position="relative">
                <FaShoppingCart size={24} />
                {cartLength > 0 && (
                  <Badge
                    position="absolute"
                    top="-1"
                    right="-1"
                    fontSize="0.8em"
                    colorScheme="red"
                    borderRadius="full"
                  >
                    {cartLength}
                  </Badge>
                )}
              </Box>
            </Link>
          )}
          {authState.isAuthenticated ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar size="sm" name={authState.userName} bg="pink.600" />
              </MenuButton>
              <MenuList>
                <Box textAlign="center" p={2}>
                  <Avatar size="md" name={authState.userName} bg="pink.600" />
                  <Box mt={2} fontWeight="bold">{authState.userName}</Box>
                </Box>
                <MenuDivider />
                <MenuItem onClick={() => navigate('/account')}>Your Account</MenuItem>
                <MenuItem onClick={() => navigate('/orders')}>Your Orders</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout} as={Button} variant="solid" colorScheme="pink">Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link href="/login" display="flex" alignItems="center">
              <Box as={FaRegUserCircle} size={24} mr={2} color="pink.600" />
              <Box fontSize="md" fontWeight="bold" color="pink.600">
                Login
              </Box>
            </Link>
          )}
        </HStack>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ lg: 'none' }}>
          <Stack as="nav" spacing={4} color="pink.600">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
              Home
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/about">
              About Us
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/services">
              Our Services
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contact">
              Contact Us
            </Link>
            <Menu>
              <MenuButton as={Link} _hover={{ textDecoration: 'none' }}>
                {selectedCity} <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                {cities.map((city) => (
                  <MenuItem key={city} onClick={() => handleCitySelect(city)}>
                    {city}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {authState.isAuthenticated && (
              <Button
                mt={2}
                bg="black"
                color="pink.200"
                _hover={{ bg: 'gray.700' }}
                borderRadius="md"
                px={4}
                py={2}
                onClick={logout}
              >
                Logout
              </Button>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
