// Version 1 : 

// import React, { useState } from 'react';
// import {
//     Box, Heading, Text, Image, Badge, Divider, SimpleGrid, Button,
//     useDisclosure, Collapse, Modal, ModalOverlay, ModalContent, ModalHeader,
//     ModalCloseButton, ModalBody, ModalFooter, Center, Spinner
// } from '@chakra-ui/react';
// import { useLocation, useParams } from 'react-router-dom';
// import useGetData from '../../hooks/useGetData';
// import { useNavigate } from 'react-router-dom';

// export const ServiceDetailsPage: React.FC = () => {
//     const { state: partner } = useLocation();
//     const { pid } = useParams();
//     const { data, error, isLoading } = useGetData(`/api/cc/service/variants?service_id=2&partner_id=${pid}`);
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const [selectedImage, setSelectedImage] = useState<string>('');
//     const [expandedVariantId, setExpandedVariantId] = useState<number | null>(null); // To manage expansion of variant sections
//     const navigate = useNavigate();

//     console.log("Partner details from Main Page " +JSON.stringify(partner))
//     console.log(" details from db hook Page " +JSON.stringify(data))
//     if (isLoading) return <Center><Spinner /></Center>;
//     if (error) return <Text>Error: {error.message}</Text>;
//     if (!data || !data.variants) return <Text>No additional details available</Text>;

//     const handleImageClick = (imageUrl: string) => {
//         setSelectedImage(imageUrl);
//         onOpen();
//     };

//     const handleVariantToggle = (variantId: number) => {
//         setExpandedVariantId(expandedVariantId === variantId ? null : variantId); // Toggle expand/collapse
//     };

//     return (
//         <Box p={6}>
//             {/* Header Section */}
//             <Box display="flex" alignItems="center" justifyContent="center" mb={6}>
//                 <Image
//                     src={partner.image_url.split(",")[0] || "https://via.placeholder.com/300"}
//                     boxSize="250px" // Increased size for header image
//                     borderRadius="md"
//                     mr={6}
//                     objectFit="cover" // Ensures the image fills the space well
//                 />
//                 <Box>
//                     <Heading textAlign="center" mb={2}>{partner.business_name}</Heading>
//                     <Text textAlign="center" fontSize="lg">{partner.address}, {partner.city}, {partner.pincode}</Text>
//                     <Text textAlign="center" fontSize="md">Availability: <Badge colorScheme="green">{partner.availability}</Badge></Text>
//                     <Box display="flex" justifyContent="center" mt={4}>
//                         <Button colorScheme="blue" size="sm" mr={4}>Enquire</Button>
//                         {/* <Button colorScheme="green" size="sm">Book</Button> */}
                      


// <Button
//     colorScheme="pink"
//     size="sm"
//     onClick={() => {
//         navigate('/service/booking', {
//             state: {
//                 serviceType: partner.partner_type,
//                 serviceId: data.service_id,
//                 partnerName: partner.business_name,
//                 partnerId: partner.pid,
//                 variants: data.variants, // Passing all variants for the select option
//                 policies: data.variants[0]?.policies, // Passing partner policies
//             },
//         });
//     }}
// >
//     Book
// </Button>

//                     </Box>
//                 </Box>
//             </Box>



//             <Divider my={4} />

//             {/* Service Offered Section */}
//             <Heading size="md" mb={3}>Service Offered</Heading>
//             <SimpleGrid columns={{ base: 1, md: 1 }} spacing={5}>
//                 {data.variants.map((variant) => (
//                     <Box
//                         key={variant.variant_id}
//                         p={4}
//                         borderWidth="1px"
//                         borderRadius="md"
//                         boxShadow="sm"
//                         onClick={() => handleVariantToggle(variant.variant_id)}
//                     >
//                         <Text fontSize="lg" fontWeight="bold" display="flex" justifyContent="space-between">
//                             {variant.variant_name} <span>₹{variant.price}</span>
//                         </Text>
//                         <Collapse in={expandedVariantId === variant.variant_id}>
//                             <Text fontSize="sm" mt={1}>{variant.description}</Text>
//                             <Text fontSize="sm" fontWeight="bold" mt={1}>Brand Used: {variant.brand_used}</Text>
//                             <Text fontSize="sm" mt={1}>Policies: {variant.policies}</Text>
//                         </Collapse>
//                     </Box>
//                 ))}
//             </SimpleGrid>

//             <Divider my={4} />

//             {/* Brand Used Section */}
//             <Box mt={6}>
//                 <Heading size="md" mb={3}>Brands Used</Heading>
//                 <Text>{data.variants[0]?.brand_used || 'No Brands Specified'}</Text>
//             </Box>

//             <Divider my={4} />

//             {/* Policies Section */}
//             <Box mt={6}>
//                 <Heading size="md" mb={3}>Policies</Heading>
//                 <Text>{data.variants[0]?.policies || 'No Policies Specified'}</Text>
//             </Box>

//             <Divider my={4} />

//             {/* Album Section */}
//             <Heading size="md" mb={3}>Portfolio Images</Heading>
//             <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
//                 {partner.image_url.split(",").map((imageUrl, index) => (
//                     <Box key={index} onClick={() => handleImageClick(imageUrl)}>
//                         <Image
//                             src={imageUrl}
//                             alt={`Portfolio Image ${index + 1}`}
//                             boxSize="100%"
//                             objectFit="cover"
//                             borderRadius="md"
//                             cursor="pointer"
//                         />
//                     </Box>
//                 ))}
//             </SimpleGrid>

//             {/* Modal for Enlarged Image */}
//             <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Portfolio Image</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <Image src={selectedImage} alt="Enlarged Image" boxSize="100%" />
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button colorScheme="blue" onClick={onClose}>Close</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>

//             {/* Back Button */}
//             <Box mt={6}>
//                 <Button colorScheme="teal" onClick={() => window.history.back()}>Back to Service Home</Button>
//             </Box>
//         </Box>
//     );
// };

// export default ServiceDetailsPage;


// Version 2 : Design Enhancement

// import React, { useState } from 'react';
// import {
//     Box, Heading, Text, Image, Badge, Divider, SimpleGrid, Button,
//     useDisclosure, Collapse, Modal, ModalOverlay, ModalContent, ModalHeader,
//     ModalCloseButton, ModalBody, ModalFooter, Center, Spinner
// } from '@chakra-ui/react';
// import { useLocation, useParams } from 'react-router-dom';
// import useGetData from '../../hooks/useGetData';
// import { useNavigate } from 'react-router-dom';

// export const ServiceDetailsPage: React.FC = () => {
//    // const { state: partner } = useLocation();
//     const { state: {partner,service} } = useLocation();
//     console.log("Service vlaue from detail page" +service);
    
//     const { pid } = useParams();
//     const { data, error, isLoading } = useGetData(`/api/cc/service/variants?service_id=${service.service_id}&partner_id=${pid}`);
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const [selectedImage, setSelectedImage] = useState<string>('');
//     const [expandedVariantId, setExpandedVariantId] = useState<number | null>(null); // To manage expansion of variant sections
//     const navigate = useNavigate();

//     console.log("Partner details from Main Page " +JSON.stringify(partner))
//     console.log(" details from db hook Page " +JSON.stringify(data))
//     if (isLoading) return <Center><Spinner /></Center>;
//     if (error) return <Text>Error: {error.message}</Text>;
//     if (!data || !data.variants) return <Text>No additional details available</Text>;

//     const handleImageClick = (imageUrl: string) => {
//         setSelectedImage(imageUrl);
//         onOpen();
//     };

//     const handleVariantToggle = (variantId: number) => {
//         setExpandedVariantId(expandedVariantId === variantId ? null : variantId); // Toggle expand/collapse
//     };

//     return (
//         <Box p={6}>
//             {/* Header Section */}
//             <Box 
//     display="flex" 
//     flexDirection={{ base: "column", md: "row" }} 
//     alignItems="center" 
//     justifyContent="center" 
//     maxW={{ base: "100%", md: "75%" }} // 75% width on larger screens
//     mx="auto" // Center the box
//     mb={6} 
//     p={4} 
//     boxShadow="lg" // Slight shadow for a premium look
//     borderRadius="lg"
// >
//     {/* Image Section */}
//     <Image
//         src={partner.image_url.split(",")[0] || "https://via.placeholder.com/300"}
//         boxSize={{ base: "200px", md: "300px" }} // Bigger image for large screens
//         flex="1" // Allows image to occupy space equally
//         borderRadius="2xl" // Extra rounded corners for elegance
//         objectFit="contain"
//         mb={{ base: 4, md: 0 }}
//         mr={{ md: 6 }}
//         p={2} // Adds slight padding to the image
//         bg="white" // Background to make it pop
//     />

//     {/* Content Section */}
//     <Box 
//         flex="1" 
//         textAlign={{ base: "center", md: "left" }} 
//     > 
//         <Heading fontSize={{ base: "lg", md: "2xl" }} mb={2}>
//             {partner.business_name}
//         </Heading>
//         <Text fontSize="lg" color="gray.600">
//             {partner.address}, {partner.city}, {partner.pincode}
//         </Text>
//         <Text fontSize="md" mt={2}>
//             Availability: <Badge colorScheme="green">{partner.availability}</Badge>
//         </Text>

//         {/* Buttons Section */}
//         <Box display="flex" justifyContent={{ base: "center", md: "flex-start" }} mt={4}>
//             <Button 
//                 colorScheme="blue" 
//                 size="md" 
//                 mr={4} 
//                 fontWeight="bold" 
//                 _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
//             >
//                 Enquire
//             </Button>
            
//             <Button
//                 bgGradient="linear(to-r, pink.400, pink.600)" // Beautiful gradient effect
//                 color="white"
//                 size="md"
//                 px={6} // More padding for a premium feel
//                 fontWeight="bold"
//                 _hover={{ transform: "scale(1.08)", transition: "0.2s", bgGradient: "linear(to-r, pink.500, pink.700)" }}
//                 boxShadow="xl"
//                 onClick={() => {
//                     navigate('/service/booking', {
//                         state: {
//                             serviceType: partner.partner_type,
//                             serviceId: data.service_id,
//                             partnerName: partner.business_name,
//                             partnerId: partner.pid,
//                             variants: data.variants,
//                             policies: data.variants[0]?.policies,
//                         },
//                     });
//                 }}
//             >
//                 ✨ Book Now
//             </Button>
//         </Box>
//     </Box>
// </Box>




//             <Divider my={4} />

//             {/* Service Offered Section */}
//             <Heading size="md" mb={3}>Service Offered</Heading>
//             <SimpleGrid columns={{ base: 1, md: 1 }} spacing={5}>
//                 {data.variants.map((variant) => (
//                     <Box
//                         key={variant.variant_id}
//                         p={4}
//                         borderWidth="1px"
//                         borderRadius="md"
//                         boxShadow="sm"
//                         onClick={() => handleVariantToggle(variant.variant_id)}
//                     >
//                         <Text fontSize="lg" fontWeight="bold" display="flex" justifyContent="space-between">
//                             {variant.variant_name} <span>₹{variant.price}</span>
//                         </Text>
//                         <Collapse in={expandedVariantId === variant.variant_id}>
//                             <Text fontSize="sm" mt={1}>{variant.description}</Text>
//                             <Text fontSize="sm" fontWeight="bold" mt={1}>Brand Used: {variant.brand_used}</Text>
//                             <Text fontSize="sm" mt={1}>Policies: {variant.policies}</Text>
//                         </Collapse>
//                     </Box>
//                 ))}
//             </SimpleGrid>

//             <Divider my={4} />

//             {/* Brand Used Section */}
//             <Box mt={6}>
//                 <Heading size="md" mb={3}>Brands Used</Heading>
//                 <Text>{data.variants[0]?.brand_used || 'No Brands Specified'}</Text>
//             </Box>

//             <Divider my={4} />

//             {/* Policies Section */}
//             <Box mt={6}>
//                 <Heading size="md" mb={3}>Policies</Heading>
//                 <Text>{data.variants[0]?.policies || 'No Policies Specified'}</Text>
//             </Box>

//             <Divider my={4} />

//             {/* Album Section */}

//             <Heading size="md" mb={3}>Portfolio Images</Heading>

// {/* Scrollable Album for Small Screens (One Image at a Time) */}
// <Box 
//     display={{ base: "flex", md: "none" }} 
//     overflowX="auto" 
//     py={2} 
//     px={1} 
//     scrollSnapType="x mandatory"
//     css={{
//         "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for a cleaner look
//         scrollbarWidth: "none",
//     }}
// >
//     {partner.image_url.split(",").map((imageUrl, index) => (
//         <Box 
//             key={index} 
//             minW="100%" // Only one image visible at a time
//             borderRadius="xl" 
//             overflow="hidden" 
//             boxShadow="lg"
//             mx={2}
//             scrollSnapAlign="center"
//             cursor="pointer"
//             transition="transform 0.2s ease-in-out"
//             _hover={{ transform: "scale(1.05)" }}
//             onClick={() => handleImageClick(imageUrl)}
//         >
//             <Image
//                 src={imageUrl}
//                 alt={`Portfolio Image ${index + 1}`}
//                 w="100%"
//                 h="250px"
//                 objectFit="cover"
//             />
//         </Box>
//     ))}
// </Box>

// {/* Grid Layout for Larger Screens */}
// <SimpleGrid 
//     columns={{ sm: 2, md: 3, lg: 4 }} 
//     spacing={4} 
//     display={{ base: "none", md: "grid" }}
// >
//     {partner.image_url.split(",").map((imageUrl, index) => (
//         <Box 
//             key={index} 
//             borderRadius="xl" 
//             overflow="hidden" 
//             boxShadow="xl"
//             cursor="pointer"
//             transition="transform 0.2s ease-in-out"
//             _hover={{ transform: "scale(1.05)" }}
//             onClick={() => handleImageClick(imageUrl)}
//         >
//             <Image
//                 src={imageUrl}
//                 alt={`Portfolio Image ${index + 1}`}
//                 w="100%"
//                 h="200px"
//                 objectFit="cover"
//             />
//         </Box>
//     ))}
// </SimpleGrid>


//             {/* Modal for Enlarged Image */}
//             <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Portfolio Image</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <Image src={selectedImage} alt="Enlarged Image" boxSize="100%" />
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button colorScheme="blue" onClick={onClose}>Close</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>

//             {/* Back Button */}
//             <Box mt={6}>
//                 <Button colorScheme="teal" onClick={() => window.history.back()}>Back to Service Home</Button>
//             </Box>
//         </Box>
//     );
// };

// export default ServiceDetailsPage;



// Version 3 : Enhancement to version 2

import React, { useState } from 'react';
import {
    Box, Heading, Text, Image, Badge, Divider, SimpleGrid, Button,
    useDisclosure, Collapse, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter, Center, Spinner
} from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import { useNavigate } from 'react-router-dom';

export const ServiceDetailsPage: React.FC = () => {
   // const { state: partner } = useLocation();
    const { state: {partner,service} } = useLocation();
    console.log("Service vlaue from detail page" +service);
    
    const { pid } = useParams();
    const { data, error, isLoading } = useGetData(`/api/cc/service/variants?service_id=${service.service_id}&partner_id=${pid}`);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [expandedVariantId, setExpandedVariantId] = useState<number | null>(null); // To manage expansion of variant sections
    const navigate = useNavigate();

    console.log("Partner details from Main Page " +JSON.stringify(partner))
    console.log(" details from db hook Page " +JSON.stringify(data))
    if (isLoading) return <Center><Spinner /></Center>;
    if (error) return <Text>Error: {error.message}</Text>;
    if (!data || !data.variants) return <Text>No additional details available</Text>;

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        onOpen();
    };

    const handleVariantToggle = (variantId: number) => {
        setExpandedVariantId(expandedVariantId === variantId ? null : variantId); // Toggle expand/collapse
    };

    return (
        <Box p={6}>
            {/* Header Section */}
            <Box 
    display="flex" 
    flexDirection={{ base: "column", md: "row" }} 
    alignItems="center" 
    justifyContent="center" 
    maxW={{ base: "100%", md: "75%" }} 
    mx="auto"
    mb={6} 
    p={6} // Increased padding for better spacing
    py={8} // More vertical padding to make it taller
    minH={{ base: "auto", md: "350px" }} // Minimum height to make it vertically bigger
    boxShadow="lg"
    borderRadius="xl"
    bg="white"
>
    {/* Image Section */}
    <Image
        src={partner.image_url.split(",")[0] || "https://via.placeholder.com/300"}
        boxSize={{ base: "220px", md: "320px" }} // Bigger image for large screens
        flexShrink={0} // Prevent shrinking
        borderRadius="3xl" // Extra rounded corners
        objectFit="fill" // Better fit for various image types
        mb={{ base: 4, md: 0 }}
        mr={{ md: 6 }}
        p={3} // Slight padding to separate from bg
        bg="gray.100"
        boxShadow="md"
    />

    {/* Content Section */}
    <Box flex="1" textAlign={{ base: "center", md: "left" }}>
        <Heading fontSize={{ base: "xl", md: "2xl" }} mb={3}>
            {partner.business_name}
        </Heading>
        <Text fontSize="lg" color="gray.600">
            {partner.address}, {partner.city}, {partner.pincode}
        </Text>
        <Text fontSize="md" mt={3}>
            Availability: <Badge colorScheme="green" fontSize="sm">{partner.availability}</Badge>
        </Text>

        {/* Buttons Section */}
        <Box display="flex" justifyContent={{ base: "center", md: "flex-start" }} mt={5}>
            <Button 
                colorScheme="blue" 
                size="md" 
                mr={4} 
                fontWeight="bold" 
                _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
            >
                Enquire
            </Button>
            
            <Button
                bgGradient="linear(to-r, pink.400, pink.600)"
                color="white"
                size="md"
                px={6}
                py={2} // Slightly bigger button
                fontWeight="bold"
                _hover={{ transform: "scale(1.08)", transition: "0.2s", bgGradient: "linear(to-r, pink.500, pink.700)" }}
                boxShadow="xl"
                onClick={() => {
                    navigate('/service/booking', {
                        state: {
                            serviceType: partner.partner_type,
                            serviceId: data.service_id,
                            partnerName: partner.business_name,
                            partnerId: partner.pid,
                            variants: data.variants,
                            policies: data.variants[0]?.policies,
                        },
                    });
                }}
            >
                ✨ Book Now
            </Button>
        </Box>
    </Box>
</Box>




            <Divider my={4} />

            {/* Service Offered Section */}
            <Heading size="md" mb={3}>Service Offered</Heading>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={5}>
                {data.variants.map((variant) => (
                    <Box
                        key={variant.variant_id}
                        p={4}
                        borderWidth="1px"
                        borderRadius="md"
                        boxShadow="sm"
                        onClick={() => handleVariantToggle(variant.variant_id)}
                    >
                        <Text fontSize="lg" fontWeight="bold" display="flex" justifyContent="space-between">
                            {variant.variant_name} <span>₹{variant.price}</span>
                        </Text>
                        <Collapse in={expandedVariantId === variant.variant_id}>
                            <Text fontSize="sm" mt={1}>{variant.description}</Text>
                            <Text fontSize="sm" fontWeight="bold" mt={1}>Brand Used: {variant.brand_used}</Text>
                            <Text fontSize="sm" mt={1}>Policies: {variant.policies}</Text>
                        </Collapse>
                    </Box>
                ))}
            </SimpleGrid>

            <Divider my={4} />

            {/* Brand Used Section */}
            <Box mt={6}>
                <Heading size="md" mb={3}>Brands Used</Heading>
                <Text>{data.variants[0]?.brand_used || 'No Brands Specified'}</Text>
            </Box>

            <Divider my={4} />

            {/* Policies Section */}
            <Box mt={6}>
                <Heading size="md" mb={3}>Policies</Heading>
                <Text>{data.variants[0]?.policies || 'No Policies Specified'}</Text>
            </Box>

            <Divider my={4} />

            {/* Album Section */}

            <Heading size="md" mb={3}>Portfolio Images</Heading>

{/* Scrollable Album for Small Screens (One Image at a Time) */}
<Box 
    display={{ base: "flex", md: "none" }} 
    overflowX="auto" 
    py={2} 
    px={1} 
    scrollSnapType="x mandatory"
    css={{
        "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for a cleaner look
        scrollbarWidth: "none",
    }}
>
    {partner.image_url.split(",").map((imageUrl, index) => (
        <Box 
            key={index} 
            minW="100%" // Only one image visible at a time
            borderRadius="xl" 
            overflow="hidden" 
            boxShadow="lg"
            mx={2}
            scrollSnapAlign="center"
            cursor="pointer"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => handleImageClick(imageUrl)}
        >
            <Image
                src={imageUrl}
                alt={`Portfolio Image ${index + 1}`}
                w="100%"
                h="250px"
                objectFit="cover"
            />
        </Box>
    ))}
</Box>

{/* Grid Layout for Larger Screens */}
<SimpleGrid 
    columns={{ sm: 2, md: 3, lg: 4 }} 
    spacing={4} 
    display={{ base: "none", md: "grid" }}
>
    {partner.image_url.split(",").map((imageUrl, index) => (
        <Box 
            key={index} 
            borderRadius="xl" 
            overflow="hidden" 
            boxShadow="xl"
            cursor="pointer"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => handleImageClick(imageUrl)}
        >
            <Image
                src={imageUrl}
                alt={`Portfolio Image ${index + 1}`}
                w="150%"
                h="300px"
                objectFit="cover"
            />
        </Box>
    ))}
</SimpleGrid>


            {/* Modal for Enlarged Image */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Portfolio Image</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={selectedImage} alt="Enlarged Image" boxSize="100%" />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Back Button */}
            <Box mt={6}>
                <Button colorScheme="teal" onClick={() => window.history.back()}>Back to Service Home</Button>
            </Box>
        </Box>
    );
};

export default ServiceDetailsPage;









