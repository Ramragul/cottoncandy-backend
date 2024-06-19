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



import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon color='pink.900'/>}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            color="pink.600"
          >
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
          </HStack>
        </HStack>
        <HStack spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }} color="pink.600">
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
            Login
          </Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
            Cart
          </Link>
          <InputGroup maxW="200px">
            <Input placeholder="Search" />
            <InputRightElement>
              <SearchIcon color="pink.600" />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }} >
           <Box fontSize="2xl" fontWeight="bold" color="pink.600">Cotton Candy</Box>
          <Stack as="nav" spacing={4} color='pink.600'>
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
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/login">
              Login
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/cart">
              Cart
            </Link>
            <InputGroup maxW="200px">
              <Input placeholder="Search" />
              <InputRightElement>
                <SearchIcon color="pink.600" />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
