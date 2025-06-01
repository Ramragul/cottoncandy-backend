// import React from 'react';
// import { Box, Button, Heading, Image, Text, Flex, useColorMode, useBreakpointValue, HStack } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// export const MehendiHomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const { colorMode } = useColorMode();
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   const images = [
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/a9cd2a8e-5d90-4c54-bfba-6c181fdedbe5_Untitled%20design%20%287%29.jpg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/56852fee-5909-4272-99a3-08e717218756_Untitled%20design%20%285%29.jpg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/f2a139b3-5840-41c4-823d-9093dc83be24_Untitled%20design%20%288%29.jpg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/aeaf2e75-9023-4bc3-b9f0-b27322885494_Untitled%20design%20%284%29.jpg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/202e132c-0964-4abf-8cca-083342af34f2_Untitled%20design%20%2810%29.jpg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/5c61d32c-96e3-472f-89b9-003398625f3b_Untitled%20design%20%286%29.jpg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/4ead41ec-dbaf-4d98-8d42-57517c915e17_Untitled%20design%20%289%29.jpg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/7e3870d0-6f97-4c52-93cd-3a76278f929f_Untitled%20design%20%2811%29.jpg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/e8f95287-6e13-4334-be04-4c89136595a5_ce07f3c9-a685-4a57-817b-7ca00129b823.jpeg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/3b016f75-e8f3-4c04-b620-79ae29dd4eeb_7581e2ca-9a2a-4d4d-a21a-7ef27340114d.jpeg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/751eab51-151a-4311-9cd4-2dcfbd5c9093_fe208e28-c999-4628-bf3e-225ff32d2193.jpeg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/adfee021-c5db-4f8c-9a1e-f25d78becd24_3dcebbb3-c5e3-427f-a4df-6c67d277acf2.jpeg',
//     'https://snektoawsbucket.s3.amazonaws.com/gb_ground/10686766-7cf2-403d-8e27-95ee1b2cbbf5_990e166e-dcf3-442b-ae22-6ace09406e25.jpeg',

//   ];

//   return (
//     <Box
//       maxW="1200px"
//       mx="auto"
//       py={10}
//       px={isMobile ? 4 : 8}
//       textAlign="center"
//       bg={colorMode === 'light' ? 'white' : 'gray.800'}
//     >
//       <Heading as="h1" fontSize="4xl" color="pink.500" mb={4}>
//         Diwali Mehendi Offer - Starting from Just ₹99!
//       </Heading>
//       <Text fontSize="lg" color="gray.600" mb={6}>
//         Hurry up! Promotion ends soon. Don't miss out on this festive offer!
//       </Text>

//       {/* Scrollable Image Portfolio */}
//       <Box overflowX="auto" mb={8} py={4} px={2}>
//         <HStack spacing={4} minWidth="800px">
//           {images.map((src, index) => (
//             <Box
//               key={index}
//               flexShrink={0}
//               width="250px"
//               height="350px"
//               overflow="hidden"
//               borderRadius="lg"
//               boxShadow="lg"
//               border="2px solid"
//               borderColor="pink.400"
//             >
//               <Image
//                 src={src}
//                 alt={`Mehendi design ${index + 1}`}
//                 objectFit="cover"
//                 width="100%"
//                 height="100%"
//                 transition="transform 0.3s ease"
//                 _hover={{ transform: 'scale(1.05)' }}
//               />
//             </Box>
//           ))}
//         </HStack>
//       </Box>

//       {/* Call to Action */}
//       <Flex justifyContent="center" mb={8}>
//         <Button
//           colorScheme="pink"
//           size="lg"
//           onClick={() => navigate('/mehendi/service/booking')}
//           _hover={{ bg: 'pink.400' }}
//         >
//           Book Now 
//           {/* Book Now for ₹99 */}
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default MehendiHomePage;


// Version 2 with service variants

import React from 'react';
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Flex,
  useColorMode,
  useBreakpointValue,
  HStack,
  VStack,
  Stack,
  SimpleGrid,
  Divider,
  Badge,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import FullMehendi from "../../assets/mehendi/fullbridalMehendi.jpg";
import PalmMehendi from "../../assets/mehendi/palmMehendi.jpg";
import LegMehendi from "../../assets/mehendi/legMehendi.jpg";
import ArabicWristMehendi from "../../assets/mehendi/arabicWrist.jpg";
import WristMehendi from "../../assets/mehendi/wristMehendi.jpg";
import BangleMehendi from "../../assets/mehendi/bangleMehendi.jpg"
import BridalMehendi from "../../assets/mehendi/bridalMehendi.jpg";
import GuestMehendi from "../../assets/mehendi/guestMehendi.jpg";

export const MehendiHomePage: React.FC = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const images = [
    // (Your existing image links remain unchanged)
  ];

  const variants = [
    { name: 'Arabic Mehendi – Palm Only', price: 150 },
    { name: 'Arabic Mehendi – Up to Wrist', price: 200 },
    { name: 'Arabic Mehendi – Up to Bangle Line', price: 500 },
    { name: 'Arabic Mehendi – Up to Elbow Line', price: 800 },
    { name: 'Bridal Mehendi – Palm Only', price: 600 },
    { name: 'Bridal Mehendi – Up to Wrist Line', price: 900 },
    { name: 'Bridal Mehendi – Up to Bangle Line', price: 1200 },
    { name: 'Bridal Mehendi – Up to Elbow', price: 1500 },
    { name: 'Simple Leg Mehendi', price: 296 },
    { name: 'Leg Mehendi – Up to Anklet Line', price: 600 },
    { name: 'Leg Mehendi – Above Anklet Line', price: 800 },
    { name: 'Full Bridal Mehendi (Hands & Legs – Up to Elbow)', price: 1800 },
  ];

  return (
    <Box
      maxW="1200px"
      mx="auto"
      py={10}
      px={isMobile ? 4 : 8}
      textAlign="center"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
    >
      <Heading as="h1" fontSize="4xl" color="pink.500" mb={4}>
         Mehendi Starting from Just ₹199!
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
      Service at your doorstep — we use only natural, skin-friendly mehendi for a safe and beautiful experience.
      </Text>

      {/* Scrollable Image Portfolio */}
      <Box overflowX="auto" mb={8} py={4} px={2}>
        <HStack spacing={4} minWidth="800px">
          {images.map((src, index) => (
            <Box
              key={index}
              flexShrink={0}
              width="250px"
              height="350px"
              overflow="hidden"
              borderRadius="lg"
              boxShadow="lg"
              border="2px solid"
              borderColor="pink.400"
            >
              <Image
                src={src}
                alt={`Mehendi design ${index + 1}`}
                objectFit="cover"
                width="100%"
                height="100%"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.05)' }}
              />
            </Box>
          ))}
        </HStack>
      </Box>

      {/* Service Variants */}
{/* Mehendi Variant Showcase */}
<Box mb={10} textAlign="left">
  <Heading as="h2" fontSize="2xl" color="pink.500" mb={4}>
    Available Mehendi Variants
  </Heading>
  <Box overflowX="auto" py={2} px={1}>
    <HStack spacing={4} minWidth="800px">
      {[
        {
          name: 'Guest Mehendi',
          price: 199,
         // img: 'https://snektoawsbucket.s3.amazonaws.com/gb_ground/aeaf2e75-9023-4bc3-b9f0-b27322885494_Untitled%20design%20%284%29.jpg',
          img: GuestMehendi,
        },
        // {
        //   name: 'Arabic – Up to Wrist',
        //   price: 200,
        //  img: ArabicWristMehendi,
        // },
        {
          name: 'Bridal – Palm Only',
          price: 299,
          // img: 'https://snektoawsbucket.s3.amazonaws.com/gb_ground/adfee021-c5db-4f8c-9a1e-f25d78becd24_3dcebbb3-c5e3-427f-a4df-6c67d277acf2.jpeg',
          img: PalmMehendi,
        },
        {
          name: 'Bridal – Up to Bangle',
          price: 999,
          img : BangleMehendi,
        },
        {
          name: 'Bridal – Elbow Length',
          price: 1499,
          img: 'https://snektoawsbucket.s3.amazonaws.com/gb_ground/a9cd2a8e-5d90-4c54-bfba-6c181fdedbe5_Untitled%20design%20%287%29.jpg',
          // img: 'https://snektoawsbucket.s3.amazonaws.com/gb_ground/f2a139b3-5840-41c4-823d-9093dc83be24_Untitled%20design%20%288%29.jpg',
        },
        {
          name: 'Leg',
          price: 399,
          img: LegMehendi,
        },
        {
          name: 'Full Bridal – Hand + Leg',
          price: 1799,
         // img: 'https://snektoawsbucket.s3.amazonaws.com/gb_ground/3b016f75-e8f3-4c04-b620-79ae29dd4eeb_7581e2ca-9a2a-4d4d-a21a-7ef27340114d.jpeg',
          img: BridalMehendi,
        },
      ].map((variant, index) => (
        <Box
          key={index}
          width="250px"
          height="350px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          border="2px solid"
          borderColor="pink.400"
          position="relative"
          flexShrink={0}
        >
          <Image
            src={variant.img}
            alt={variant.name}
            objectFit="cover"
            width="100%"
            height="100%"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
          />
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            bg="rgba(255,255,255,0.9)"
            px={3}
            py={2}
            textAlign="left"
          >
            <Text fontWeight="bold" fontSize="md" color="pink.600">
              {variant.name}
            </Text>
            <Text fontSize="sm" color="gray.700">
              ₹{variant.price}
            </Text>
          </Box>
        </Box>
      ))}
    </HStack>
  </Box>
</Box>


      {/* Call to Action */}
      <Flex justifyContent="center" mb={8}>
        <Button
          colorScheme="pink"
          size="lg"
          onClick={() => navigate('/mehendi/service/booking')}
          _hover={{ bg: 'pink.400' }}
        >
          Book Now
        </Button>
      </Flex>
    </Box>
  );
};

export default MehendiHomePage;