import React from 'react';
import { Box, Text, Grid, GridItem, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import TailoringPhoto from '../assets/homePage/TailoringPhoto.jpeg'
import RentalPhoto from '../assets/homePage/RentalPhoto4.jpeg'
import PurchasePhoto from '../assets/homePage/PurchasePhoto2.jpeg'
import JewelsPhoto from '../assets/homePage/Jewels.jpeg'
import MehendiPhoto from '../assets/services/Mehendi.jpg'

export const Home = () => {

  const jewelNav = { 
    pathname: "/rentalCatalogue", 
    state: {
      "category" :"Jewels" 
    }
  };
  const clothNav = { 
    pathname: "/rentalCatalogue", 
    type: "Cloth" 
  };

  return (
    <Box bg="pink.50" minHeight="100vh" py={10}>
      {/* Header Description */}
      <Box textAlign="center" py={10}>
        <Text fontSize="3xl" fontWeight="bold" color="pink.600">Welcome to Cotton Candy</Text>
        <Text mt={2} fontSize="lg" fontWeight="bold" color="pink.900">Your one-stop solution for all your fashion needs.</Text>
      </Box>

      {/* Image Container for Tailoring and Rental */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={16} p={16}>
        {/* <GridItem>
          <Link to="/tailoringCatalogue">
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              textAlign="center"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
              height={{ base: "300px", md: "400px" }}
              backgroundImage={`url(${TailoringPhoto})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
            </Box>
            <Text fontSize="4xl" fontWeight="bold" color="pink.900" textAlign='center' marginTop={5}>Tailoring</Text>
          </Link>
        </GridItem> */}

        <GridItem>
          {/* <Link to="/rentalCatalogue"> */}
          <Link to = "/service/home">
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              textAlign="center"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
              height={{ base: "300px", md: "400px" }}
              backgroundImage={`url(${MehendiPhoto})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >    
            </Box>
            <Text fontSize="4xl" fontWeight="bold" color="pink.900" textAlign='center' marginTop={5}>Mehendi Service</Text>
          </Link>
        </GridItem>

        <GridItem>
          {/* <Link to="/rentalCatalogue"> */}
          <Link to = "/rentalCatalogue?productType=Apparel">
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              textAlign="center"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
              height={{ base: "300px", md: "400px" }}
              backgroundImage={`url(${RentalPhoto})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >    
            </Box>
            <Text fontSize="4xl" fontWeight="bold" color="pink.900" textAlign='center' marginTop={5}>Clothing</Text>
          </Link>
        </GridItem>

        <GridItem>
          {/* <Link to="/rentalCatalogue"> */}
          <Link to = "/rentalCatalogue?productType=Jewellery">

          
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              textAlign="center"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
              height={{ base: "300px", md: "400px" }}
              backgroundImage={`url(${JewelsPhoto})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
            </Box>
            <Text fontSize="4xl" fontWeight="bold" color="pink.900" textAlign='center' marginTop={5}>Fashion Jewellery</Text>
          </Link>
        </GridItem>
      </Grid>

      {/* Testimonials Section */}
      <Box p={6} textAlign="center" py={10} backgroundColor="pink.50">
        <Text fontSize="2xl" fontWeight="bold" color="pink.600">Client Testimonials</Text>
        <VStack spacing={6} mt={6}>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            backgroundColor="white"
            boxShadow="sm"
            maxWidth="600px"
          >
            <Text fontStyle="italic" color="pink.800">"Cotton Candy made my wedding day special with their beautiful rental dresses!"</Text>
            <Text fontWeight="bold" color="pink.800" mt={2}>- Happy Client</Text>
          </Box>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            backgroundColor="white"
            boxShadow="sm"
            maxWidth="600px"
          >
            <Text fontStyle="italic" color="pink.800">"Their tailoring services are top-notch and very reliable!"</Text>
            <Text fontWeight="bold" mt={2} color="pink.800">- Satisfied Customer</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box textAlign="center" py={6} bg="pink.600" color="white">
        <Text fontSize="lg">Contact Us: 9629705557 | iotprograms@gmail.com</Text>
        <Text mt={2}>© 2023 Cotton Candy. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Home;

// import React from 'react';
// import { Box, Flex, VStack, Text, SimpleGrid, Image, useBreakpointValue } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// //import NavBar from '../widgets/layout/navbar'; // Ensure to import your NavBar component

// export const Home = () => {
//   return (
//     <>
//       <Box bg="pink.50" >
//       <Box textAlign="center" py={10} px={6} >
//         <Text fontSize="4xl" fontWeight="bold" color="pink.600">
//           Welcome to Cotton Candy
//         </Text>
//         <Text mt={2} color="pink.400">
//           Your one-stop destination for Tailoring and Rental Services
//         </Text>
//       </Box>
//       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={6} py={10}>
//         <Link to="/tailoringCatalogue" style={{ textDecoration: 'none' }}>
//           <VStack 
//             boxShadow="lg" 
//             borderRadius="lg" 
//             p={10} 
//             align="center" 
//             //bg="black"
//             _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
//           >
//             <Image src="../src/assets/homepage/TailoringPhoto.jpeg" boxSize="100%"  />
//           </VStack>
//           <Text fontSize="3xl" fontWeight="bold" color="pink.700" marginTop={5} align='center'>Tailoring</Text>
//         </Link>
//         <Link to="/rentalCatalogue" style={{ textDecoration: 'none' }}>
//           <VStack 
//             boxShadow="lg" 
//             borderRadius="lg" 
//             p={10} 
//             align="center" 
//             //bg="pink.100"
//             _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
//           >
//             <Image src="../src/assets/homepage/RentalPhoto.jpeg" boxSize="100%" />
//           </VStack>
//           <Text fontSize="3xl" fontWeight="bold" color="pink.700" marginTop={5} align='center'>Rent</Text>
//         </Link>
//       </SimpleGrid>
//       <Box textAlign="center" py={10} px={6} bg="white">
//         <Text fontSize="3xl" fontWeight="bold" color="pink.600">Testimonials</Text>
//         <Text mt={2} color="pink.400">
//           Hear from our satisfied customers!
//         </Text>
//       </Box>
//       <Box textAlign="center" py={10} px={6} >
//         <Text fontSize="xl" color="pink.600">"Amazing service and quality!" - Jane Doe</Text>
//         <Text fontSize="xl" color="pink.600">"Highly recommend for any event!" - John Smith</Text>
//       </Box>
//       <Box textAlign="center" py={10} px={6} bg="pink.600" color="white">
//         <Text fontSize="xl" fontWeight="bold">Contact Us</Text>
//         <Text>Email: contact@cottoncandy.com</Text>
//         <Text>Phone: (123) 456-7890</Text>
//         <Flex justify="center" mt={4}>
//           <Link href="https://www.facebook.com" isExternal mx={2}>
//             <Text color="white">Facebook</Text>
//           </Link>
//           <Link href="https://www.instagram.com" isExternal mx={2}>
//             <Text color="white">Instagram</Text>
//           </Link>
//           <Link href="https://www.twitter.com" isExternal mx={2}>
//             <Text color="white">Twitter</Text>
//           </Link>
//         </Flex>
//       </Box>
//       </Box>
//     </>
//   );
// };

// export default Home;
