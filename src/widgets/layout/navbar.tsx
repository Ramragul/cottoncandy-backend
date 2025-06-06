



// Version 1 - Working Code
// import React, { useState } from 'react';
// import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
// import {
//   Box, Flex, HStack, Link, IconButton, useDisclosure, Stack,
//   Badge, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';
// import { useAuth } from '../../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import logo1 from '../../assets/navbar/logo1.jpg';

// const cities = ["New York", "Los Angeles", "Chicago", "Houston"];

// const Navbar: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cartState } = useCart();
//   const { authState, logout } = useAuth();
//   const [selectedCity, setSelectedCity] = useState("City");
//   const navigate = useNavigate();

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
//                 <MenuItem onClick={() => navigate('/account')}>Your Account</MenuItem>
//                 <MenuItem onClick={() => navigate('/orders')}>Your Orders</MenuItem>
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


// Version 12  - Filter component addition for the mobile devices

import React, { useState } from 'react';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import {
  Box, Flex, HStack, Link, IconButton, useDisclosure, Stack,
  Badge, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar, Select
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../assets/navbar/logo1.jpg';
import useCatalogueCategory, { Category } from '../../hooks/useCatalogueCategory';
import FilterSelectComponent from '../../components/FilterSelectComponent';
 //import { keyframes } from '@chakra-ui/react';

const cities = ["Chennai", "Coimbatore", "Trichy"];

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartState } = useCart();
  const { authState, logout } = useAuth();
  const [selectedCity, setSelectedCity] = useState("City");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const navigate = useNavigate();

  const cartLength = cartState.items.length;
  const userRole = authState.userRole;

  console.log("User Role " +userRole)

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    onClose(); // Close menu after selection
  };

  const { data: categories, error, isLoading } = useCatalogueCategory();

  // animation effect

//   const pulseAnimation = keyframes`
//   0%, 100% {
//     transform: scale(1);
//     background-color: #F687B3; // Pink color
//   }
//   50% {
//     transform: scale(1.1); // Slightly larger scale
//     background-color: #F6AD55; // Slightly different color to give a pulsating feel
//   }
// `;

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
          {/* <Menu>
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
          </Menu> */}
        </HStack>
        <HStack spacing={8} alignItems="center" justifyContent={{ base: 'center', lg: 'space-between' }}>
          <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }} color="pink.600">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/">
              Home
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/aboutUs">
              About Us
            </Link>
            <Box>
              <img src={logo1} alt="Cotton Candy Logo" style={{ height: '55px' }} />
            </Box>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/businessPartnerForm">
            Partner With Us
            </Link>
            {/* {(userRole != 'user' && userRole != undefined) && (<Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/adminDashboard"> */}
            {(userRole != 'user' && userRole != undefined) && (<Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/service/partner/landing/page">
            Admin Dashboard
            </Link> ) }
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contactUs">
              Contact Us
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/winner">
              Diwali Giveaway Winner
            </Link>
            {/* {( authState.isAuthenticated && */}
            



{/* <Link
  px={{ base: 2, md: 3 }}   // Smaller padding for mobile
  py={{ base: 1, md: 2 }}   // Smaller padding for mobile
  rounded="full"
  bg="pink.400"
  color="white"
  fontWeight="bold"
 // animation={`${pulseAnimation} 2s infinite`}  // Pulsating animation
  _hover={{ 
    textDecoration: 'none', 
    bg: 'pink.500',
    transform: 'scale(1.1)',  // Slightly larger on hover
  }}
  _active={{ 
    bg: 'pink.600', 
    transform: 'scale(0.98)'  // Slightly smaller on active click
  }}
  href="/spinwheel"
  transition="all 0.2s ease-in-out"
  boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
  textAlign="center"
  mx="auto"  // Center the link on mobile devices
  maxW={{ base: '80%', md: 'auto' }} // Restrict max width on mobile
  display="inline-block" // Keeps the element inline and prevents it from taking full width
>
  🎉 Play & Win 🎉
</Link>             */}
            
          </HStack>
        </HStack>

        <HStack display={{ lg: 'none' }} >
        <Box >
        <img src={logo1} alt="Cotton Candy Logo" style={{ height: '55px' }} />
            </Box>
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
                <MenuItem onClick={() => navigate('/yourOrders')}>Your Orders</MenuItem>
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
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/aboutUs">
              About Us
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/businessPartnerForm">
             Partner With Us
            </Link>
            {/* {(userRole != 'user') && (<Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/adminDashboard"> */}
            {(userRole != 'user') && (<Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/service/partner/landing/page">
            Admin Dashboard
            </Link> ) }
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/contactUs">
              Contact Us
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'pink.100' }} href="/winner">
              Diwali Giveaway Winner
            </Link>
            {/* <Menu>
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
            </Menu> */}

  {/* <Link
  px={{ base: 2, md: 3 }}   // Smaller padding for mobile
  py={{ base: 1, md: 2 }}   // Smaller padding for mobile
  rounded="full"
  bg="pink.400"
  color="white"
  fontWeight="bold"
  animation={`${pulseAnimation} 2s infinite`}  // Pulsating animation
  _hover={{ 
    textDecoration: 'none', 
    bg: 'pink.500',
    transform: 'scale(1.1)',  // Slightly larger on hover
  }}
  _active={{ 
    bg: 'pink.600', 
    transform: 'scale(0.98)'  // Slightly smaller on active click
  }}
  href="/spinwheel"
  transition="all 0.2s ease-in-out"
  boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
  textAlign="center"
  mx="auto"  // Center the link on mobile devices
  maxW={{ base: '80%', md: 'auto' }} // Restrict max width on mobile
  display="inline-block" // Keeps the element inline and prevents it from taking full width
>
  🎉 Play & Win 🎉
</Link> */}

     
            {/* <FilterSelectComponent
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            /> */}
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



// Version 13  - Enhancement to Version 12 (Version 12 worked well)

// import React, { useState } from 'react';
// import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
// import {
//   Box, Flex, HStack, Link, IconButton, useDisclosure, Stack,
//   Badge, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar, Select
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import { useCart } from '../../contexts/CartContext';
// import { useAuth } from '../../contexts/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo1 from '../../assets/navbar/logo1.jpg';
// import FilterSelectComponent from '../../components/FilterSelectComponent';
// import useCatalogueCategory, { Category } from '../../hooks/useCatalogueCategory';

// const cities = ["New York", "Los Angeles", "Chicago", "Houston"];

// const Navbar: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cartState } = useCart();
//   const { authState, logout } = useAuth();
//   const [selectedCity, setSelectedCity] = useState("City");
//   const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
//   const navigate = useNavigate();
//   const location = useLocation(); // Get current location

//   const cartLength = cartState.items.length;

//   const handleCitySelect = (city: string) => {
//     setSelectedCity(city);
//   };

//   const handleSelectCategory = (category: Category) => {
//     setSelectedCategory(category);
//     onClose(); // Close menu after selection
//   };

//   const { data: categories, error, isLoading } = useCatalogueCategory();

//   // Determine if current path is /rentalCatalogue
//   const isRentalCataloguePage = location.pathname === '/rentalCatalogue';

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
//           {isRentalCataloguePage && (
//             <FilterSelectComponent
//               onSelectCategory={handleSelectCategory}
//               selectedCategory={selectedCategory}
//             />
//           )}
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
//                 <MenuItem onClick={() => navigate('/account')}>Your Account</MenuItem>
//                 <MenuItem onClick={() => navigate('/orders')}>Your Orders</MenuItem>
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
//             {isRentalCataloguePage && (
//               <FilterSelectComponent
//                 onSelectCategory={handleSelectCategory}
//                 selectedCategory={selectedCategory}
//               />
//             )}
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




