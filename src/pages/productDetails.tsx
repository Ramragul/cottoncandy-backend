// Version 6 Code with Shopping cart issue fix

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Box, Flex, Heading, Text, VStack, HStack, Button, Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, useBreakpointValue } from '@chakra-ui/react';
// import { ChevronRightIcon, ArrowBackIcon } from '@chakra-ui/icons';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import '../css/DatePicker.css';
// import { useCart } from '../contexts/CartContext';
// import ImageSlider from '../components/ImageSlider';

// const sizes = ["XS", "S (36 inch)", "M (38 inch)", "L (40 inch)", "XL (42 inch)", "XXL (44 inch)"];
// const durations = ["1 day", "2 days", "4 days", "6 days", "8 days", "10 days", "1 week"];
// const ProductImageURL = "https://picsum.photos/seed/picsum/200/300,https://picsum.photos/id/237/200/300,https://picsum.photos/200/300?grayscale,http://img.youtube.com/vi/EqWRZrupLrI/0.jpg";

// export const ProductDetails: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product } = location.state || {};
//   const { addToCart } = useCart();
//   const [selectedSize, setSelectedSize] = useState(sizes[0]);
//   const [selectedDuration, setSelectedDuration] = useState(durations[0]);
//   const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
//   const [returnDate, setReturnDate] = useState<Date | null>(null);

//   const isSmallScreen = useBreakpointValue({ base: true, md: false });
//   const buttonStackDirection = useBreakpointValue({ base: 'row', lg: 'column' });
//   const buttonFlex = useBreakpointValue({ base: '1', lg: '0.45' });
//   const buttonMinWidth = useBreakpointValue({ base: '45%', lg: '100%' });

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart(product, selectedSize, selectedDuration, deliveryDate, returnDate);
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
//             {product.ProductImageURL && <ImageSlider imageUrls={ProductImageURL.split(',')} />}
//           </HStack>
//         </Box>
//         <VStack flex="1" align="start" padding={5}>
//           <Heading>{product.ProductName}</Heading>
//           <Text>{product.description}</Text>
//           <Text fontWeight="bold" color="pink.600">{product.ProductPrice}</Text>

//           <Text mt={4} fontWeight="bold">Sizes</Text>
//           <HStack spacing={2} mt={2} wrap="wrap">
//             {sizes.map(size => (
//               <Button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 colorScheme={selectedSize === size ? "pink" : "gray"}
//                 size="sm"
//               >
//                 {size}
//               </Button>
//             ))}
//           </HStack>

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
//                 onChange={(date: Date) => setDeliveryDate(date)}
//                 className="custom-datepicker custom-datepicker__input"
//               />
//             </Box>
//             <Box>
//               <Text>Return Date</Text>
//               <DatePicker
//                 selected={returnDate}
//                 onChange={(date: Date) => setReturnDate(date)}
//                 className="custom-datepicker custom-datepicker__input"
//               />
//             </Box>
//           </HStack>

//           <Stack direction={buttonStackDirection} spacing={4} mt={4} width="100%">
//             <Box flex={buttonFlex} minWidth={buttonMinWidth}>
//               <Button colorScheme="pink" width="100%" onClick={handleAddToCart}>Add to Cart</Button>
//             </Box>
//             <Box flex={buttonFlex} minWidth={buttonMinWidth}>
//               <Button colorScheme="teal" width="100%">Rent Now</Button>
//             </Box>
//           </Stack>
//         </VStack>
//       </Flex>
//     </Box>
//   );
// };

// export default ProductDetails;


// Version 7 Code - Shopping cart issue fix (Version 6 worked fine for auth logic but only problem is cart page)

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, Text, VStack, HStack, Button, Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, useBreakpointValue,StackDirection } from '@chakra-ui/react';
import { ChevronRightIcon, ArrowBackIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DatePicker.css';
import { useCart } from '../contexts/CartContext';
import ImageSlider from '../components/ImageSlider';

const sizes = ["XS", "S (36 inch)", "M (38 inch)", "L (40 inch)", "XL (42 inch)", "XXL (44 inch)"];
const durations = ["1 day", "2 days", "4 days", "6 days", "8 days", "10 days", "1 week"];
const ProductImageURL = "https://picsum.photos/seed/picsum/200/300,https://picsum.photos/id/237/200/300,https://picsum.photos/200/300?grayscale,http://img.youtube.com/vi/EqWRZrupLrI/0.jpg";

export const ProductDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product , productType } = location.state || {};
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedDuration, setSelectedDuration] = useState(durations[0]);
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  // const buttonStackDirection = useBreakpointValue({ base: 'row', lg: 'column' });
  const buttonStackDirection = useBreakpointValue<StackDirection>({ base: 'row', lg: 'column' });

  const buttonFlex = useBreakpointValue({ base: '1', lg: '0.45' });
  const buttonMinWidth = useBreakpointValue({ base: '45%', lg: '100%' });

  if (!product) {
    return <div>Product not found</div>;
  }



  const handleAddToCart = () => {


    const cartItem = {
      id : product.ProductID,
      //id: new Date().getTime(), // Ensure unique ID for each item
      name: product.ProductName,
      size: (productType == "Jewellery") ? "Free Size" : selectedSize,
      duration: selectedDuration,
      deliveryDate,
      returnDate,
      quantity: 1,
      price: product.ProductPrice,
      imageURL : product.ProductImageURL,
    };
    addToCart(cartItem);
    navigate('/cart');
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
        <Box flex="1" mr={{ lg: 4 }}>
          <HStack overflowX="scroll" spacing={4}>
            {product.ProductImageURL && <ImageSlider imageUrls={product.ProductImageURL.split(',')} />}
          </HStack>
        </Box>
        <VStack flex="1" align="start" padding={5}>
          <Heading>{product.ProductName}</Heading>
          <Text>{product.description}</Text>
          <Text fontWeight="bold" color="pink.600">{product.ProductPrice}</Text>
          
          {productType === 'Apparel' && (
            <>
          <Text mt={4} fontWeight="bold">Sizes</Text>
          <HStack spacing={2} mt={2} wrap="wrap">
            {sizes.map(size => (
              <Button
                key={size}
                onClick={() => setSelectedSize(size)}
                colorScheme={selectedSize === size ? "pink" : "gray"}
                size="sm"
              >
                {size}
              </Button>
            ))}
          </HStack>
          </>
          )}
          <Text mt={4} fontWeight="bold">Duration</Text>
          <HStack spacing={2} mt={2} wrap="wrap">
            {durations.map(duration => (
              <Button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                colorScheme={selectedDuration === duration ? "pink" : "gray"}
                size="sm"
              >
                {duration}
              </Button>
            ))}
          </HStack>

          <HStack spacing={4} mt={4} wrap="wrap">
            <Box>
              <Text>Delivery Date</Text>
              <DatePicker
                selected={deliveryDate}
                onChange={(date: Date | null) => setDeliveryDate(date)}
                className="custom-datepicker custom-datepicker__input"
              />
            </Box>
            <Box>
              <Text>Return Date</Text>
              <DatePicker
                selected={returnDate}
                onChange={(date: Date | null) => setReturnDate(date)}
                className="custom-datepicker custom-datepicker__input"
              />
            </Box>
          </HStack>

          <Stack direction={buttonStackDirection} spacing={4} mt={4} width="100%">
            <Box flex={buttonFlex} minWidth={buttonMinWidth}>
              <Button colorScheme="pink" width="100%" onClick={handleAddToCart}>Add to Cart</Button>
            </Box>
            <Box flex={buttonFlex} minWidth={buttonMinWidth}>
              <Button colorScheme="teal" width="100%" onClick={handleAddToCart}>Rent Now</Button>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProductDetails;


