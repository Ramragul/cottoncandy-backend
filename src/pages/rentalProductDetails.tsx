// Version 1: Working Version

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Box, Flex, Heading, Text, VStack, HStack, Button, Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, useBreakpointValue, StackDirection } from '@chakra-ui/react';
// import { ChevronRightIcon, ArrowBackIcon } from '@chakra-ui/icons';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import '../css/DatePicker.css';
// import { useCart } from '../contexts/CartContext';
// import ImageSlider from '../components/ImageSlider';

// const sizes = ["XS", "S (36 inch)", "M (38 inch)", "L (40 inch)", "XL (42 inch)", "XXL (44 inch)"];
// //const durations = ["1 day", "2 days", "4 days", "6 days", "8 days", "10 days", "1 week"];
// const durations = [1, 2, 4, 5, 7, 10];

// export const ProductDetails: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product, productType } = location.state || {};
//   const { addToCart } = useCart();
//   const [selectedSize, setSelectedSize] = useState(sizes[0]);
//   const [selectedDuration, setSelectedDuration] = useState(durations[0]);
//   const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
//   const [returnDate, setReturnDate] = useState<Date | null>(null);

//   const isSmallScreen = useBreakpointValue({ base: true, md: false });
//   const buttonStackDirection = useBreakpointValue<StackDirection>({ base: 'row', lg: 'column' });
//   const buttonFlex = useBreakpointValue({ base: '1', lg: '0.45' });
//   const buttonMinWidth = useBreakpointValue({ base: '45%', lg: '100%' });

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: product.ProductID,
//       name: product.ProductName,
//       size: productType === "Jewellery" ? "Free Size" : selectedSize,
//       duration: selectedDuration,
//       deliveryDate,
//       returnDate,
//       quantity: 1,
//       price: product.ProductPrice,
//       imageURL: product.ProductImageURL,
//     };
//     addToCart(cartItem);
//     navigate('/cart');
//   };

//   return (
//     <Box padding={5}>
//       {isSmallScreen ? (
//         <IconButton
//           aria-label="Go back"
//           icon={<ArrowBackIcon />}
//           mb={4}
//           onClick={() => navigate(-1)}
//         />
//       ) : (
//         <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb={4}>
//           <BreadcrumbItem>
//             <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbItem>
//             <BreadcrumbLink onClick={() => navigate('/products')}>Products</BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbItem isCurrentPage>
//             <BreadcrumbLink>{product.ProductName}</BreadcrumbLink>
//           </BreadcrumbItem>
//         </Breadcrumb>
//       )}
//       <Flex direction={{ base: 'column', lg: 'row' }}>
//         <Box flex="1" mr={{ lg: 4 }}>
//           <HStack overflowX="scroll" spacing={4}>
//             {product.ProductImageURL && <ImageSlider imageUrls={product.ProductImageURL.split(',')} />}
//           </HStack>
//         </Box>
//         <VStack flex="1" align="start" padding={5}>
//           <Heading>{product.ProductName}</Heading>
//           <Text>{product.Remarks}</Text> {/* Displaying product description */}
//           <HStack mt={2}>
//             <Text as="s" color="gray.500" fontSize="lg">₹ {product.ProductPurchasePrice}</Text>
//             <Text fontWeight="bold" color="pink.600" fontSize="xl">₹ {product.ProductPrice}</Text>
//           </HStack>
          
//           {productType === 'Apparel' && (
//             <>
//               <Text mt={4} fontWeight="bold">Sizes</Text>
//               <HStack spacing={2} mt={2} wrap="wrap">
//                 {sizes.map(size => (
//                   <Button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     colorScheme={selectedSize === size ? "pink" : "gray"}
//                     size="sm"
//                   >
//                     {size}
//                   </Button>
//                 ))}
//               </HStack>
//             </>
//           )}
          
//           <Text mt={4} fontWeight="bold">Duration</Text>
//           <HStack spacing={2} mt={2} wrap="wrap">
//             {durations.map(duration => (
//               <Button
//                 key={duration}
//                 onClick={() => setSelectedDuration(duration)}
//                 colorScheme={selectedDuration === duration ? "pink" : "gray"}
//                 size="sm"
//               >
//                 {duration}
//               </Button>
//             ))}
//           </HStack>

//           <HStack spacing={4} mt={4} wrap="wrap">
//             <Box>
//               <Text>Delivery Date</Text>
//               <DatePicker
//                 selected={deliveryDate}
//                 onChange={(date: Date | null) => setDeliveryDate(date)}
//                 className="custom-datepicker custom-datepicker__input"
//               />
//             </Box>
//             <Box>
//               <Text>Return Date</Text>
//               <DatePicker
//                 selected={returnDate}
//                 onChange={(date: Date | null) => setReturnDate(date)}
//                 className="custom-datepicker custom-datepicker__input"
//               />
//             </Box>
//           </HStack>

//           <Stack direction={buttonStackDirection} spacing={4} mt={4} width="100%">
//             <Box flex={buttonFlex} minWidth={buttonMinWidth}>
//               <Button colorScheme="pink" width="100%" onClick={handleAddToCart}>Add to Cart</Button>
//             </Box>
//             <Box flex={buttonFlex} minWidth={buttonMinWidth}>
//               <Button colorScheme="teal" width="100%" onClick={handleAddToCart}>Rent Now</Button>
//             </Box>
//           </Stack>
//         </VStack>
//       </Flex>
//     </Box>
//   );
// };

// export default ProductDetails;



// Version 2 - 1 is working , this is multi image display enhancements, and return date auto selection functionalitiy addition 

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Image,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronRightIcon, ArrowBackIcon, ChevronLeftIcon, ChevronRightIcon as RightArrow } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DatePicker.css';
import { useCart } from '../contexts/CartContext';

const sizes = ['XS', 'S (36 inch)', 'M (38 inch)', 'L (40 inch)', 'XL (42 inch)', 'XXL (44 inch)'];
const durations = [1, 2, 4, 5, 7, 10];

export const RentalProductDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, productType , purchaseType} = location.state || {};

   console.log("Purchase Type from Details Page" +purchaseType)
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedDuration, setSelectedDuration] = useState(durations[0]);
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(
    product?.ProductImageURL ? product.ProductImageURL.split(',')[0] : null
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const buttonStackDirection = useBreakpointValue<StackDirection>({ base: 'row', lg: 'column' });
  const buttonFlex = useBreakpointValue({ base: '1', lg: '0.45' });
  const buttonMinWidth = useBreakpointValue({ base: '45%', lg: '100%' });

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.ProductID,
      name: product.ProductName,
      size: productType === 'Jewellery' ? 'Free Size' : selectedSize,
      duration: selectedDuration,
      deliveryDate,
      returnDate,
      quantity: 1,
      price: product.ProductPrice,
      imageURL: product.ProductImageURL,
    };
    addToCart(cartItem);
    navigate('/cart');
  };

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
    onOpen();
  };

  const calculateReturnDate = (startDate: Date | null, duration: number) => {
    if (!startDate) return null;
    const returnDate = new Date(startDate);
    returnDate.setDate(returnDate.getDate() + duration);
    return returnDate;
  };

  const handleDeliveryDateChange = (date: Date | null) => {
    if (!date) return;
    const istDate = new Date(date);
    istDate.setHours(istDate.getHours() + 5);
    istDate.setMinutes(istDate.getMinutes() + 30);
    setDeliveryDate(istDate);
    setReturnDate(calculateReturnDate(istDate, selectedDuration));
  };

  const handleDurationChange = (duration: number) => {
    setSelectedDuration(duration);
    if (deliveryDate) {
      setReturnDate(calculateReturnDate(deliveryDate, duration));
    }
  };

  return (
    <Box padding={5}>
      {isSmallScreen ? (
        <IconButton
          aria-label="Go back"
          icon={<ArrowBackIcon />}
          mb={4}
          onClick={() => navigate(-1)}
        />
      ) : (
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb={4}>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/products')}>Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{product.ProductName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
      <Flex direction={{ base: 'column', lg: 'row' }}>
        {/* Image Display Section */}
        <Box flex="1" mr={{ lg: 4 }} position="relative">
          {isSmallScreen ? (
            <Box position="relative">
              <Image
                src={currentImage}
                alt="Selected Product Image"
                borderRadius="md"
                boxShadow="md"
                width="100%"
                height="auto"
              />
              <IconButton
                aria-label="Previous image"
                icon={<ChevronLeftIcon />}
                position="absolute"
                left="2"
                top="50%"
                transform="translateY(-50%)"
                onClick={() => {
                  const images = product.ProductImageURL.split(',');
                  const currentIndex = images.indexOf(currentImage!);
                  const prevIndex = (currentIndex - 1 + images.length) % images.length;
                  setCurrentImage(images[prevIndex]);
                }}
                backgroundColor="rgba(0, 0, 0, 0.5)"
                color="white"
                _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                borderRadius="full"
              />
              <IconButton
                aria-label="Next image"
                icon={<RightArrow />}
                position="absolute"
                right="2"
                top="50%"
                transform="translateY(-50%)"
                onClick={() => {
                  const images = product.ProductImageURL.split(',');
                  const currentIndex = images.indexOf(currentImage!);
                  const nextIndex = (currentIndex + 1) % images.length;
                  setCurrentImage(images[nextIndex]);
                }}
                backgroundColor="rgba(0, 0, 0, 0.5)"
                color="white"
                _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                borderRadius="full"
              />
            </Box>
          ) : (
            // <Flex>
            //   <Box width="30%" maxWidth="200px" padding="2" borderRight="1px solid lightgray">
            //     <VStack spacing={4}>
            //       {product.ProductImageURL &&
            //         product.ProductImageURL.split(',').map((url, index) => (
            //           <Image
            //             key={index}
            //             src={url}
            //             alt={`Product Image ${index + 1}`}
            //             onClick={() => setCurrentImage(url)}
            //             cursor="pointer"
            //             borderRadius="md"
            //             boxShadow="md"
            //             width="100%"
            //             height="auto"
            //             maxHeight="120px" // Ensuring max height for all images
            //             objectFit="cover"
            //             border={currentImage === url ? '2px solid pink' : 'none'}
            //           />
            //         ))}
            //     </VStack>
            //   </Box>
            //   <Image src={currentImage} alt="Selected Product Image" borderRadius="md" boxShadow="md" flex="1" />
            // </Flex>

            <Flex direction={{ base: 'column', md: 'row' }}>
  <Box 
    width={{ base: '100%', md: '25%' }} 
    maxWidth="100px" 
    padding="2" 
    borderRight={{ md: '1px solid lightgray' }}
    overflow="auto"
  >
    <VStack spacing={2} align="flex-start">
      {product.ProductImageURL &&
        product.ProductImageURL.split(',').map((url, index) => (
          <Box
            key={index}
            borderRadius="md"
            border={currentImage === url ? '2px solid pink' : '1px solid lightgray'}
            overflow="hidden"
            width="100%"
            height="80px"
            boxShadow="sm"
            cursor="pointer"
            onClick={() => setCurrentImage(url)}
          >
            <Image
              src={url}
              alt={`Product Image ${index + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        ))}
    </VStack>
  </Box>
  <Box flex="1" display="flex" justifyContent="center" alignItems="center">
    <Image
      src={currentImage}
      alt="Selected Product Image"
      borderRadius="md"
      boxShadow="md"
      width="100%"
      maxHeight="600px" // Larger main image with a max height
      objectFit="contain"
    />
  </Box>
</Flex>

            
          )}
        </Box>

        {/* Product Details Section */}
        <VStack flex="1" align="start" padding={5}>
          <Heading>{product.ProductName}</Heading>
          <Text>{product.Remarks}</Text>
          <HStack mt={2}>
            <Text as="s" color="gray.500" fontSize="lg">
              ₹ {product.ProductPurchasePrice}
            </Text>
            <Text fontWeight="bold" color="pink.600" fontSize="xl">
              ₹ {product.ProductPrice}
            </Text>
          </HStack>

          {productType === 'Apparel' && (
            <>
              <Text mt={4} fontWeight="bold">
                Sizes
              </Text>
              <HStack spacing={2} mt={2} wrap="wrap">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    colorScheme={selectedSize === size ? 'pink' : 'gray'}
                    size="sm"
                  >
                    {size}
                  </Button>
                ))}
              </HStack>
            </>
          )}

          <Text mt={4} fontWeight="bold">
            Duration
          </Text>
          <HStack spacing={2} mt={2}>
            {durations.map((duration) => (
              <Button
                key={duration}
                onClick={() => handleDurationChange(duration)}
                colorScheme={selectedDuration === duration ? 'pink' : 'gray'}
                size="sm"
              >
                {duration} {duration === 1 ? 'Day' : 'Days'}
              </Button>
            ))}
          </HStack>

          <HStack mt={4} width="100%">
            <Box>
              <Text fontWeight="bold">Delivery Date</Text>
              <DatePicker
                selected={deliveryDate}
                onChange={handleDeliveryDateChange}
                className="custom-datepicker custom-datepicker__input"
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
              />
            </Box>

            <Box>
              <Text fontWeight="bold">Return Date</Text>
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                className="custom-datepicker custom-datepicker__input"
                readOnly
                dateFormat="dd/MM/yyyy"
              />
            </Box>
          </HStack>

          <Stack direction={buttonStackDirection} spacing={4} mt={6} width="100%">
            <Button colorScheme="pink" width={buttonMinWidth} onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button colorScheme="pink" width={buttonMinWidth} variant="outline" onClick={handleAddToCart}>
              Rent Now
            </Button>
          </Stack>
        </VStack>
      </Flex>

      {/* Modal for larger image on click */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={currentImage} alt="Larger view of selected image" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};





