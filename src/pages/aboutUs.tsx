// Version 1 

// import React from 'react';
// import { Box, Text, Heading, Stack, Image, VStack, HStack } from '@chakra-ui/react';

// export const AboutUs: React.FC = () => {
//   return (
//     <Box
//       padding="8"
//       bgGradient="linear(to-r, pink.100, pink.50)"
//       minHeight="100vh"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//     >
//       <Heading as="h1" size="2xl" color="pink.600" marginBottom="6" textAlign="center">
//         About Cotton Candy
//       </Heading>

//       <Stack
//         direction={{ base: 'column', md: 'row' }}
//         spacing="10"
//         align="center"
//         width="full"
//         maxW="1000px"
//         padding="4"
//       >
//         <VStack spacing="4" align="flex-start" width={{ base: '100%', md: '50%' }}>
//           <Text fontSize="lg" color="gray.700">
//             Welcome to Cotton Candy, where we believe in making luxury accessible for everyone. Our mission is to bring
//             elegance and style to your doorstep with our premium collection of clothing and jewelry.
//           </Text>
//           <Text fontSize="lg" color="gray.700">
//             From luxury clothing to exquisite jewelry, our range of products is available for both rent and purchase. We
//             pride ourselves on offering top-notch door-step tailoring services, ensuring the perfect fit for your
//             special occasions.
//           </Text>
//           <Text fontSize="lg" color="gray.700">
//             Our dedicated team is committed to providing exceptional customer service and a seamless experience, from
//             selection to delivery. We are here to make you look and feel your best, effortlessly.
//           </Text>
//         </VStack>

//         <Box width={{ base: '100%', md: '50%' }} display="flex" justifyContent="center">
//           <Image
//             src="https://via.placeholder.com/400"
//             alt="Cotton Candy Luxury"
//             borderRadius="md"
//             boxShadow="lg"
//             width="100%"
//             maxWidth="400px"
//           />
//         </Box>
//       </Stack>

//       <HStack
//         spacing="8"
//         marginTop="10"
//         width="full"
//         maxW="1000px"
//         justifyContent="space-around"
//         padding="4"
//         wrap="wrap"
//       >
//         <Box
//           textAlign="center"
//           padding="4"
//           borderRadius="md"
//           boxShadow="lg"
//           bg="white"
//           width={{ base: 'full', md: '30%' }}
//           marginY={{ base: '4', md: '0' }}
//         >
//           <Image
//             src="https://via.placeholder.com/200"
//             alt="Luxury Clothing"
//             borderRadius="md"
//             boxShadow="md"
//             marginBottom="4"
//           />
//           <Heading size="md" color="pink.600" marginBottom="2">
//             Luxury Clothing
//           </Heading>
//           <Text color="gray.600">
//             Discover our exclusive collection of luxury dresses, tailored to perfection and available for rent or
//             purchase.
//           </Text>
//         </Box>

//         <Box
//           textAlign="center"
//           padding="4"
//           borderRadius="md"
//           boxShadow="lg"
//           bg="white"
//           width={{ base: 'full', md: '30%' }}
//           marginY={{ base: '4', md: '0' }}
//         >
//           <Image
//             src="https://via.placeholder.com/200"
//             alt="Jewelry Collection"
//             borderRadius="md"
//             boxShadow="md"
//             marginBottom="4"
//           />
//           <Heading size="md" color="pink.600" marginBottom="2">
//             Jewelry Collection
//           </Heading>
//           <Text color="gray.600">
//             Elevate your style with our beautiful selection of jewelry, designed to complement your look perfectly.
//           </Text>
//         </Box>

//         <Box
//           textAlign="center"
//           padding="4"
//           borderRadius="md"
//           boxShadow="lg"
//           bg="white"
//           width={{ base: 'full', md: '30%' }}
//           marginY={{ base: '4', md: '0' }}
//         >
//           <Image
//             src="https://via.placeholder.com/200"
//             alt="Door-Step Tailoring"
//             borderRadius="md"
//             boxShadow="md"
//             marginBottom="4"
//           />
//           <Heading size="md" color="pink.600" marginBottom="2">
//             Door-Step Tailoring
//           </Heading>
//           <Text color="gray.600">
//             Enjoy our personalized tailoring services at your doorstep, ensuring the perfect fit for every occasion.
//           </Text>
//         </Box>
//       </HStack>
//     </Box>
//   );
// };

// export default AboutUs;



// Version 2 

// import React from 'react';
// import { Box, Text, Heading, Stack, Image, VStack, HStack, Button } from '@chakra-ui/react';

// export const AboutUs: React.FC = () => {
//   return (
//     <Box bg="gray.50" padding="8" minHeight="100vh">
//       {/* Hero Section */}
//       <Box
//         bgImage="url('https://via.placeholder.com/1200x400')"
//         bgPosition="center"
//         bgSize="cover"
//         bgRepeat="no-repeat"
//         height={{ base: '200px', md: '400px' }}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         borderRadius="md"
//         boxShadow="lg"
//         marginBottom="8"
//       >
//         <Heading
//           as="h1"
//           size={{ base: 'lg', md: '2xl' }}
//           color="white"
//           textShadow="2px 2px 8px rgba(0, 0, 0, 0.7)"
//         >
//           Welcome to Cotton Candy
//         </Heading>
//       </Box>

//       {/* About Content Section */}
//       <VStack spacing="8" align="center" maxW="800px" margin="auto" marginBottom="12">
//         <Text fontSize="lg" color="gray.700" textAlign="center">
//           At Cotton Candy, we bring luxury to your doorstep. Whether you're looking for premium clothing, exquisite
//           jewelry, or personalized tailoring services, we've got you covered. Our mission is to make luxury affordable
//           and accessible, transforming your fashion dreams into reality.
//         </Text>
//         <Button colorScheme="pink" size="lg" variant="outline">
//           Explore Our Services
//         </Button>
//       </VStack>

//       {/* Services Section */}
//       <HStack
//         spacing="8"
//         justify="center"
//         wrap="wrap"
//         padding="4"
//         marginBottom="12"
//       >
//         <Box
//           textAlign="center"
//           padding="6"
//           borderRadius="lg"
//           boxShadow="md"
//           bg="white"
//           width={{ base: 'full', md: '30%' }}
//           marginY={{ base: '4', md: '0' }}
//           _hover={{ boxShadow: 'xl', transform: 'scale(1.05)', transition: 'all 0.3s ease' }}
//         >
//           <Image
//             src="https://via.placeholder.com/200"
//             alt="Luxury Clothing"
//             borderRadius="md"
//             boxShadow="sm"
//             marginBottom="4"
//           />
//           <Heading size="md" color="pink.500" marginBottom="2">
//             Luxury Clothing
//           </Heading>
//           <Text color="gray.600">
//             Rent or purchase from our exclusive collection of designer dresses.
//           </Text>
//         </Box>

//         <Box
//           textAlign="center"
//           padding="6"
//           borderRadius="lg"
//           boxShadow="md"
//           bg="white"
//           width={{ base: 'full', md: '30%' }}
//           marginY={{ base: '4', md: '0' }}
//           _hover={{ boxShadow: 'xl', transform: 'scale(1.05)', transition: 'all 0.3s ease' }}
//         >
//           <Image
//             src="https://via.placeholder.com/200"
//             alt="Jewelry Collection"
//             borderRadius="md"
//             boxShadow="sm"
//             marginBottom="4"
//           />
//           <Heading size="md" color="pink.500" marginBottom="2">
//             Exquisite Jewelry
//           </Heading>
//           <Text color="gray.600">
//             Discover our stunning jewelry pieces, perfect for any occasion.
//           </Text>
//         </Box>

//         <Box
//           textAlign="center"
//           padding="6"
//           borderRadius="lg"
//           boxShadow="md"
//           bg="white"
//           width={{ base: 'full', md: '30%' }}
//           marginY={{ base: '4', md: '0' }}
//           _hover={{ boxShadow: 'xl', transform: 'scale(1.05)', transition: 'all 0.3s ease' }}
//         >
//           <Image
//             src="https://via.placeholder.com/200"
//             alt="Door-Step Tailoring"
//             borderRadius="md"
//             boxShadow="sm"
//             marginBottom="4"
//           />
//           <Heading size="md" color="pink.500" marginBottom="2">
//             Door-Step Tailoring
//           </Heading>
//           <Text color="gray.600">
//             Enjoy bespoke tailoring services, right at your doorstep.
//           </Text>
//         </Box>
//       </HStack>

//       {/* Testimonials Section */}
//       <VStack spacing="6" align="center" bg="white" padding="8" borderRadius="md" boxShadow="md" maxW="800px" margin="auto">
//         <Heading as="h2" size="lg" color="pink.600">
//           What Our Customers Say
//         </Heading>
//         <Text fontSize="md" color="gray.700" fontStyle="italic">
//           "Cotton Candy has redefined luxury for me. The door-step tailoring service is a game-changer, and their jewelry
//           collection is simply stunning!"
//         </Text>
//         <Text fontSize="sm" color="gray.500">
//           - Priya Sharma
//         </Text>
//       </VStack>
//     </Box>
//   );
// };

// export default AboutUs;



// Version 3 

import React from 'react';
import { Box, Text, Heading, VStack, HStack, Button, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const AboutUs: React.FC = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <Box bg="gray.50" padding="8" minHeight="100vh">
      {/* Hero Section */}
      <Box
        bg="pink.500"
        height={{ base: '200px', md: '300px' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
        boxShadow="lg"
        marginBottom="8"
      >
        <Heading
          as="h1"
          size={{ base: 'lg', md: '2xl' }}
          color="white"
          textAlign="center"
        >
          Welcome to Cotton Candy
        </Heading>
      </Box>

      {/* About Content Section */}
      <Container centerContent maxW="container.md" marginBottom="12">
        <Text fontSize="lg" color="gray.700" textAlign="center" marginBottom="4">
          At Cotton Candy, we bring luxury to your doorstep. Whether you're looking for premium clothing, exquisite
          jewelry, or personalized tailoring services, we've got you covered. Our mission is to make luxury affordable
          and accessible, transforming your fashion dreams into reality.
        </Text>
        <Button colorScheme="pink" size="lg" variant="solid" onClick={handleClick}>
          Explore Our Services
        </Button>
      </Container>

      {/* Services Section */}
      <HStack
        spacing="8"
        justify="center"
        wrap="wrap"
        padding="4"
        marginBottom="12"
      >
        <Box
          textAlign="center"
          padding="6"
          borderRadius="lg"
          boxShadow="md"
          bg="white"
          width={{ base: 'full', md: '30%' }}
          marginY={{ base: '4', md: '0' }}
          _hover={{ boxShadow: 'xl', transform: 'scale(1.05)', transition: 'all 0.3s ease' }}
        >
          <Heading size="md" color="pink.500" marginBottom="2">
            Luxury Clothing
          </Heading>
          <Text color="gray.600">
            Rent or purchase from our exclusive collection of designer dresses.
          </Text>
        </Box>

        <Box
          textAlign="center"
          padding="6"
          borderRadius="lg"
          boxShadow="md"
          bg="white"
          width={{ base: 'full', md: '30%' }}
          marginY={{ base: '4', md: '0' }}
          _hover={{ boxShadow: 'xl', transform: 'scale(1.05)', transition: 'all 0.3s ease' }}
        >
          <Heading size="md" color="pink.500" marginBottom="2">
            Exquisite Jewelry
          </Heading>
          <Text color="gray.600">
            Discover our stunning jewelry pieces, perfect for any occasion.
          </Text>
        </Box>

        <Box
          textAlign="center"
          padding="6"
          borderRadius="lg"
          boxShadow="md"
          bg="white"
          width={{ base: 'full', md: '30%' }}
          marginY={{ base: '4', md: '0' }}
          _hover={{ boxShadow: 'xl', transform: 'scale(1.05)', transition: 'all 0.3s ease' }}
        >
          <Heading size="md" color="pink.500" marginBottom="2">
            Door-Step Fashion
          </Heading>
          <Text color="gray.600">
            Enjoy bespoke fashion services, right at your doorstep.
          </Text>
        </Box>
      </HStack>

      {/* Testimonials Section */}
      <VStack
        spacing="6"
        align="center"
        bg="white"
        padding="8"
        borderRadius="md"
        boxShadow="md"
        maxW="800px"
        margin="auto"
      >
        <Heading as="h2" size="lg" color="pink.600">
          What Our Customers Say
        </Heading>
        <Text fontSize="md" color="gray.700" fontStyle="italic">
          "Impressive and elegant collections …☺️✨"
        </Text>
        <Text fontSize="sm" color="gray.500">
          - Manisha
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
