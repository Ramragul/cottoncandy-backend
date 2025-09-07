// Versoin 2 : Working version

// import React from 'react';
// import { Box, Text, Grid, GridItem, VStack } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import TailoringTile from '../assets/homePage/TailoringTile1.jpg'
// import RentalPhoto from '../assets/homePage/RentalPhoto4.jpeg'
// import PurchasePhoto from '../assets/homePage/PurchasePhoto2.jpeg'
// import JewelsPhoto from '../assets/homePage/Jewels.jpeg'
// import MehendiPhoto from '../assets/services/Mehendi.jpg'

// export const Home = () => {

//   const jewelNav = { 
//     pathname: "/rentalCatalogue", 
//     state: {
//       "category" :"Jewels" 
//     }
//   };
//   const clothNav = { 
//     pathname: "/rentalCatalogue", 
//     type: "Cloth" 
//   };

//   return (
//     <Box bg="pink.50" minHeight="100vh" py={10}>
//       {/* Header Description */}
//       <Box textAlign="center" py={10}>
//         <Text fontSize="3xl" fontWeight="bold" color="pink.600">Welcome to Cotton Candy</Text>
//         <Text mt={2} fontSize="lg" fontWeight="bold" color="pink.900">Your one-stop solution for all your fashion needs.</Text>
//       </Box>

//       {/* Image Container for Tailoring and Rental */}
//       <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={16} p={16}>
//         <GridItem>
//           <Link to="/tailoringCatalogue">
//             <Box
//               p={6}
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               textAlign="center"
//               _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
//               height={{ base: "300px", md: "400px" }}
//               backgroundImage={`url(${TailoringTile})`}
//               backgroundSize="cover"
//               backgroundPosition="center"
//             >
//             </Box>
//             <Text fontSize="4xl" fontWeight="bold" color="pink.900" textAlign='center' marginTop={5}>Tailoring</Text>
//           </Link>
//         </GridItem>

//         <GridItem>
//           {/* <Link to="/rentalCatalogue"> */}
//           <Link to = "/service/home">
//             <Box
//               p={6}
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               textAlign="center"
//             _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
//               height={{ base: "300px", md: "400px" }}
//               backgroundImage={`url(${MehendiPhoto})`}
//               backgroundSize="cover"
//               backgroundPosition="center"
//             >    
//             </Box>
//             <Text fontSize="4xl" fontWeight="bold" color="pink.900" textAlign='center' marginTop={5}>Mehendi Service</Text>
//           </Link>
//         </GridItem>

//         <GridItem>
//           {/* <Link to="/rentalCatalogue"> */}
//           <Link to = "/rentalCatalogue?productType=Apparel">
//             <Box
//               p={6}
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               textAlign="center"
//             _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
//               height={{ base: "300px", md: "400px" }}
//               backgroundImage={`url(${RentalPhoto})`}
//               backgroundSize="cover"
//               backgroundPosition="center"
//             >    
//             </Box>
//             <Text fontSize="4xl" fontWeight="bold" color="pink.900" textAlign='center' marginTop={5}>Clothing</Text>
//           </Link>
//         </GridItem>

//         <GridItem>
//           {/* <Link to="/rentalCatalogue"> */}
//           <Link to = "/rentalCatalogue?productType=Jewellery">

          
//             <Box
//               p={6}
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               textAlign="center"
//               _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
//               height={{ base: "300px", md: "400px" }}
//               backgroundImage={`url(${JewelsPhoto})`}
//               backgroundSize="cover"
//               backgroundPosition="center"
//             >
//             </Box>
//             <Text fontSize="4xl" fontWeight="bold" color="pink.900" textAlign='center' marginTop={5}>Fashion Jewellery</Text>
//           </Link>
//         </GridItem>
//       </Grid>

//       {/* Testimonials Section */}
//       <Box p={6} textAlign="center" py={10} backgroundColor="pink.50">
//         <Text fontSize="2xl" fontWeight="bold" color="pink.600">Client Testimonials</Text>
//         <VStack spacing={6} mt={6}>
//           <Box
//             p={4}
//             borderWidth="1px"
//             borderRadius="lg"
//             backgroundColor="white"
//             boxShadow="sm"
//             maxWidth="600px"
//           >
//             <Text fontStyle="italic" color="pink.800">"I really liked all the collections they had in terms of jewellery and also the attires for special occasions. And the price is also very cheap. Great initiative!!"</Text>
//             <Text fontWeight="bold" color="pink.800" mt={2}>- Manoj Kumar</Text>
//           </Box>
//           <Box
//             p={4}
//             borderWidth="1px"
//             borderRadius="lg"
//             backgroundColor="white"
//             boxShadow="sm"
//             maxWidth="600px"
//           >
//             <Text fontStyle="italic" color="pink.800">"As a Mua, I personally loved all the jewelry collections , almost I rented maximum jewelries from cottoncandy , and surely will recommend to all my future clients. ✨"</Text>
//             <Text fontWeight="bold" mt={2} color="pink.800">- Anandhi Chitra</Text>
//           </Box>
//         </VStack>
//       </Box>

//       {/* Footer */}
//       <Box textAlign="center" py={6} bg="pink.600" color="white">
//         <Text fontSize="lg">Contact Us: 9629705557 | iotprograms@gmail.com</Text>
//         <Text mt={2}>© 2023 Cotton Candy. All rights reserved.</Text>
//       </Box>
//     </Box>
//   );
// };

// export default Home;



// Version 1 :

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



// Version 3 : Clone of 2

// import React from "react";
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   Image,
//   Grid,
//   GridItem,
//   Flex,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import TailoringImg from "../assets/homePage/TailoringTile1.jpg";
// import RentalImg from "../assets/homePage/RentalPhoto4.jpeg";
// import JewelleryImg from "../assets/homePage/Jewels.jpeg";
// import MehendiImg from "../assets/services/Mehendi.jpg";
// import CoverPic1 from "../assets/homePage/cottoncandycoverpic1.jpeg"
// import CoverPic2 from "../assets/homePage/cottoncandycoverpic2.jpeg"
// // Motion Wrapper for animations
// const MotionBox = motion(Box);

// export const Home = () => {
//   return (
//     <Box bg="pink.50" minH="100vh">
//       {/* HERO SECTION */}
//       <Box
//         position="relative"
//         h={{ base: "60vh", md: "80vh" }}
//         bgImage={`url(${CoverPic1})`}
//         bgSize="cover"
//         bgPosition="center"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         textAlign="center"
//       >
//         <Box
//           position="absolute"
//           top={0}
//           left={0}
//           right={0}
//           bottom={0}
//           bg="blackAlpha.600"
//         />
//         <VStack zIndex={2} spacing={4}>
//           <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white">
//             Welcome to Cotton Candy
//           </Text>
//           <Text fontSize={{ base: "lg", md: "2xl" }} color="white">
//             Making luxury fashion affordable for everyone.
//           </Text>
//           <Link to="/rentalCatalogue">
//             <Button size="lg" colorScheme="pink" shadow="lg">
//               Explore Collection
//             </Button>
//           </Link>
//         </VStack>
//       </Box>

//       {/* FEATURED SERVICES - Modern Card Layout */}
//       <Grid
//         templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
//         gap={6}
//         p={10}
//         textAlign="center"
//       >
//         {[
//           { img: TailoringImg, label: "Tailoring", link: "/tailoringCatalogue" },
//           { img: RentalImg, label: "Clothing Rentals", link: "/rentalCatalogue?productType=Apparel" },
//           { img: JewelleryImg, label: "Fashion Jewellery", link: "/rentalCatalogue?productType=Jewellery" },
//           { img: MehendiImg, label: "Mehendi Services", link: "/service/home" },
//         ].map((item, index) => (
//           <GridItem key={index}>
//             <Link to={item.link}>
//               <MotionBox
//                 whileHover={{ scale: 1.05 }}
//                 transition="0.3s"
//                 borderRadius="xl"
//                 overflow="hidden"
//                 shadow="xl"
//                 bg="white"
//                 _hover={{ shadow: "2xl" }}
//               >
//                 <Image src={item.img} alt={item.label} h="250px" w="100%" objectFit="cover" />
//                 <Text fontSize="xl" fontWeight="bold" p={4} color="pink.900">
//                   {item.label}
//                 </Text>
//               </MotionBox>
//             </Link>
//           </GridItem>
//         ))}
//       </Grid>

//       {/* TESTIMONIALS - Auto-Scrolling */}
//       <Box bg="pink.100" py={10}>
//         <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="pink.700">
//           What Our Clients Say
//         </Text>
//         <Flex overflowX="auto" py={6} px={4} gap={4} scrollSnapType="x mandatory">
//           {[
//             { text: "Great jewelry collections at an affordable price!", name: "Manoj Kumar" },
//             { text: "Perfect dresses for my wedding function!", name: "Aditi Singh" },
//             { text: "Mehendi service was amazing!", name: "Sonal Agarwal" },
//           ].map((review, i) => (
//             <MotionBox
//               key={i}
//               minW="300px"
//               bg="white"
//               p={4}
//               shadow="md"
//               borderRadius="lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Text fontStyle="italic">"{review.text}"</Text>
//               <Text fontWeight="bold" mt={2} textAlign="right">
//                 - {review.name}
//               </Text>
//             </MotionBox>
//           ))}
//         </Flex>
//       </Box>

//       {/* FOOTER */}
//       <Box textAlign="center" py={6} bg="pink.600" color="white">
//         <Text fontSize="lg">Contact Us: 9629705557 | iotprograms@gmail.com</Text>
//         <Text mt={2}>© 2023 Cotton Candy. All rights reserved.</Text>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


//Version 4 : Clone of 3


import React from "react";
import {
  Box,
  Text,
  VStack,
  Button,
  Image,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TailoringImg from "../assets/homePage/TailoringTile1.jpg";
import RentalImg from "../assets/homePage/RentalPhoto4.jpeg";
import JewelleryImg from "../assets/homePage/Jewels.jpeg";
import MehendiImg from "../assets/services/Mehendi.jpg";
import CoverPic1 from "../assets/homePage/cottoncandycoverpic1.jpeg";
import CoverPic2 from "../assets/homePage/cottoncandycoverpic2.jpeg";
import CoverPic3 from "../assets/homePage/coverpic.jpeg";

// Motion Wrapper for animations
const MotionBox = motion(Box);

export const Home = () => {
  const scrollToFeatureSection = () => {
    document.getElementById("featured-services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box bg="whiteAlpha.100" minH="100vh">
      {/* HERO SECTION */}

      {/* <Box
        position="relative"
        h={{ base: "60vh", md: "80vh" }}
        bgImage={`url(${CoverPic1})`}
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.500"
        />
        <VStack zIndex={2} spacing={4}>
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white">
            Welcome to Cotton Candy
          </Text>
          <Text fontSize={{ base: "lg", md: "2xl" }} color="white">
            Making luxury fashion affordable for everyone.
          </Text>
          <Button size="lg" colorScheme="pink" shadow="lg" onClick={scrollToFeatureSection}>
            Explore Collection
          </Button>
        </VStack>
      </Box> */}

      {/* FEATURED SERVICES - Modern Card Layout */}
      <Grid
        id="featured-services"
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
        p={10}
        textAlign="center"
      >
        {[
          // { img: TailoringImg, label: "Tailoring", link: "/tailoringCatalogue" },
          { img: RentalImg, label: "Clothing Rentals", link: "/rentalCatalogue?productType=Apparel" },
          { img: JewelleryImg, label: "Fashion Jewellery", link: "/rentalCatalogue?productType=Jewellery" },
         // { img: CoverPic2, label: "Fashion Hub", link: "/service/landing/page" },
          { img: "https://snektoawsbucket.s3.amazonaws.com/gb_ground/a9cd2a8e-5d90-4c54-bfba-6c181fdedbe5_Untitled%20design%20%287%29.jpg", label: "Mehendi Service " , link: "/mehendi/service/home" },
        ].map((item, index) => (
          <GridItem key={index}>
            <Link to={item.link}>
              <MotionBox
                whileHover={{ scale: 1.05 }}
                transition="0.3s"
                borderRadius="xl"
                overflow="hidden"
                shadow="xl"
                bg="white"
                _hover={{ shadow: "2xl" }}
              >
                <Image src={item.img} alt={item.label} h="250px" w="100%" objectFit="cover" />
                <Text fontSize="xl" fontWeight="bold" p={4} color="pink.900">
                  {item.label}
                </Text>
              </MotionBox>
            </Link>
          </GridItem>
        ))}
      </Grid>

      {/* TESTIMONIALS - Auto-Scrolling */}
      <Box bg="whiteAlpha.500" py={10}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="pink.700">
          What Our Clients Say
        </Text>
        <Flex overflowX="auto" py={6} px={4} gap={4} scrollSnapType="x mandatory">
          {[
            { text: "Great jewelry collections at an affordable price!", name: "Manoj Kumar" },
            { text: "Perfect dresses for my wedding function!", name: "Aditi Singh" },
            { text: "Mehendi service was amazing!", name: "Sonal Agarwal" },
          ].map((review, i) => (
            <MotionBox
              key={i}
              minW="300px"
              bg="blue.50"
              p={4}
              shadow="md"
              borderRadius="lg"
              whileHover={{ scale: 1.05 }}
            >
              <Text fontStyle="italic">"{review.text}"</Text>
              <Text fontWeight="bold" mt={2} textAlign="right">
                - {review.name}
              </Text>
            </MotionBox>
          ))}
        </Flex>
      </Box>

      {/* FOOTER */}
      <Box textAlign="center" py={6} bg="pink.600" color="white">
        <Text fontSize="lg">Contact Us: 9629705557 | iotprograms@gmail.com</Text>
        <Text mt={2}>© 2023 Cotton Candy. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Home;

