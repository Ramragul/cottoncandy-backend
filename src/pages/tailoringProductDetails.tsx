// Version 1 

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   IconButton,
//   Image,
//   useBreakpointValue,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
// } from '@chakra-ui/react';
// import { ChevronRightIcon, ArrowBackIcon, ChevronLeftIcon, ChevronRightIcon as RightArrow } from '@chakra-ui/icons';

// export const TailoringProductDetails: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product , productType  } = location.state || {};
//   const [currentImage, setCurrentImage] = useState<string | null>(
//     product?.ProductImageURL ? product.ProductImageURL.split(',')[0] : null
//   );
// const productId = product.ProductID;
// const productName = product.ProductName;
// const productCategory = product.ProductCategory;
// const productImageURL = product.ProductImageURL;
// const owningAuthority = product.OwningAuthority;
// const productPrice = product.ProductPrice;
// const supportsLining = product.SupportsLining;
// const supportsRapidStitching  = product.SupportsRapidStitching;


// //("Product Category Value from tailoring product details page " +productCategory)
// console.log("Owning Authority from  Product Details Page" +owningAuthority)
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const isSmallScreen = useBreakpointValue({ base: true, md: false });

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleImageClick = (image: string) => {
//     setCurrentImage(image);
//     onOpen();
//   };

// const handleClick = () => {
//   navigate('/tailoringHome' , {state: {productName , productId , productCategory, productImageURL, owningAuthority, productPrice, supportsLining, supportsRapidStitching}})
// }

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
//         {/* Image Display Section */}
//         <Box flex="1" mr={{ lg: 4 }} position="relative">
//           {isSmallScreen ? (
//             <Box position="relative">
//               <Image
//                 src={currentImage}
//                 alt="Selected Product Image"
//                 borderRadius="md"
//                 boxShadow="md"
//                 width="100%"
//                 height="auto"
//               />
//               <IconButton
//                 aria-label="Previous image"
//                 icon={<ChevronLeftIcon />}
//                 position="absolute"
//                 left="2"
//                 top="50%"
//                 transform="translateY(-50%)"
//                 onClick={() => {
//                   const images = product.ProductImageURL.split(',');
//                   const currentIndex = images.indexOf(currentImage!);
//                   const prevIndex = (currentIndex - 1 + images.length) % images.length;
//                   setCurrentImage(images[prevIndex]);
//                 }}
//                 backgroundColor="rgba(0, 0, 0, 0.5)"
//                 color="white"
//                 _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
//                 borderRadius="full"
//               />
//               <IconButton
//                 aria-label="Next image"
//                 icon={<RightArrow />}
//                 position="absolute"
//                 right="2"
//                 top="50%"
//                 transform="translateY(-50%)"
//                 onClick={() => {
//                   const images = product.ProductImageURL.split(',');
//                   const currentIndex = images.indexOf(currentImage!);
//                   const nextIndex = (currentIndex + 1) % images.length;
//                   setCurrentImage(images[nextIndex]);
//                 }}
//                 backgroundColor="rgba(0, 0, 0, 0.5)"
//                 color="white"
//                 _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
//                 borderRadius="full"
//               />
//             </Box>
//           ) : (
//             <Flex direction={{ base: 'column', md: 'row' }}>
//               <Box
//                 width={{ base: '100%', md: '25%' }}
//                 maxWidth="100px"
//                 padding="2"
//                 borderRight={{ md: '1px solid lightgray' }}
//                 overflow="auto"
//               >
//                 <VStack spacing={2} align="flex-start">
//                   {product.ProductImageURL &&
//                     product.ProductImageURL.split(',').map((url, index) => (
//                       <Box
//                         key={index}
//                         borderRadius="md"
//                         border={currentImage === url ? '2px solid pink' : '1px solid lightgray'}
//                         overflow="hidden"
//                         width="100%"
//                         height="80px"
//                         boxShadow="sm"
//                         cursor="pointer"
//                         onClick={() => setCurrentImage(url)}
//                       >
//                         <Image
//                           src={url}
//                           alt={`Product Image ${index + 1}`}
//                           width="100%"
//                           height="100%"
//                           objectFit="cover"
//                         />
//                       </Box>
//                     ))}
//                 </VStack>
//               </Box>
//               <Box flex="1" display="flex" justifyContent="center" alignItems="center">
//                 <Image
//                   src={currentImage}
//                   alt="Selected Product Image"
//                   borderRadius="md"
//                   boxShadow="md"
//                   width="100%"
//                   maxHeight="600px"
//                   objectFit="contain"
//                 />
//               </Box>
//             </Flex>
//           )}
//         </Box>

//         {/* Product Details Section */}
//         <VStack flex="1" align="start" padding={5}>
//           <Heading>{product.ProductName}</Heading>
//           <Text>{product.Remarks}</Text>
//           <HStack mt={2}>
//             <Text as="s" color="gray.500" fontSize="lg">
//               ₹ {product.ProductPurchasePrice}
//             </Text>
//             <Text fontWeight="bold" color="pink.600" fontSize="xl">
//               ₹ {product.ProductPrice}
//             </Text>
//           </HStack>

//           {/* Tab Menu for Detailed Work Descriptions */}
//           <Tabs mt={4} width="100%">
//             <TabList>
//               <Tab>Design Details</Tab>
//               <Tab>Work Description</Tab>
//               <Tab>Alterations</Tab>
//             </TabList>

//             <TabPanels>
//               <TabPanel>
//                 <Text>{product.ProductDesignDetails}</Text>
//               </TabPanel>
//               <TabPanel>
//                 <Text>{product.ProductWorkDescription}.</Text>
//               </TabPanel>
//               <TabPanel>
//                 <Text>{product.ProductAlterations}</Text>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>

//           <Button colorScheme="pink" mt={4} onClick={handleClick}>
         
//             Book Tailoring Service
//           </Button>
//         </VStack>
//       </Flex>

//       {/* Modal for larger image on click */}
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalCloseButton />
//           <ModalBody>
//             <Image src={currentImage} alt="Larger view of selected image" />
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };



// Version 2 : Clone of version 1 with product customisation feature addition 

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  Spinner
} from '@chakra-ui/react';
import axios from 'axios';

export const TailoringProductDetails: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { productId } = location.state || {};

  const [product, setProduct] = useState<any>(null);
  const [customizations, setCustomizations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get('https://admee.in:3003/api/cc/tailoring/productDetails', {
        params: { productId }
      });

      setProduct(response.data.product);
      setCustomizations(response.data.customizations);
      setLoading(false);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  if (!product) return <div>Product not found</div>;

  const handleClick = () => {
    navigate('/tailoringHome', {
      state: {
        productName: product.ProductName,
        productId: product.ProductID,
        productCategory: product.ProductCategory,
        productImageURL: product.ProductImageURL,
        owningAuthority: product.OwningAuthority,
        productPrice: product.ProductPrice,
        supportsLining: product.SupportsLining,
        supportsRapidStitching: product.SupportsRapidStitching,
        customizations: customizations   // 👈 pass customization
      }
    });
  };

  return (
    <Box p={10}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={10}>

        {/* Image */}
        <Box flex="1">
          <Image
            src={product.ProductImageURL.split(',')[0]}
            borderRadius="xl"
            boxShadow="md"
          />
        </Box>

        {/* Details */}
        <VStack flex="1" align="start" spacing={4}>

          <Heading>{product.ProductName}</Heading>
          <Text>{product.Remarks}</Text>

          <Text fontSize="xl" fontWeight="bold" color="pink.600">
            ₹ {product.ProductPrice}
          </Text>

          {/* 🔥 Customization Preview */}
          {customizations.map(category => (
            <Box key={category.CategoryID} width="100%" mt={4}>
              <Heading size="sm" mb={3}>
                Available {category.CategoryName}
              </Heading>

              <HStack spacing={4} overflowX="auto">
                {category.Options.map((option: any) => (
                  <Box
                    key={option.CustomizationID}
                    borderRadius="lg"
                    border="1px solid #eee"
                    minW="120px"
                    overflow="hidden"
                  >
                    <Image
                      src={option.CustomizationImageURL}
                      height="100px"
                      objectFit="cover"
                    />
                    <Box p={2}>
                      <Text fontSize="sm">
                        {option.CustomizationName}
                      </Text>
                      {option.PriceAdjustment > 0 && (
                        <Text fontSize="xs" color="pink.500">
                          +₹{option.PriceAdjustment}
                        </Text>
                      )}
                    </Box>
                  </Box>
                ))}
              </HStack>
            </Box>
          ))}

          <Button colorScheme="pink" mt={6} onClick={handleClick}>
            Customize & Book
          </Button>

        </VStack>
      </Flex>
    </Box>
  );
};
