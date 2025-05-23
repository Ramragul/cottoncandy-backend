


// Version 2 Enhancement to version 1 with details page data passing logic - working code

// ServiceHomePage.tsx - Modified to pass selected partner details dynamically

import React, { useState } from 'react';
import { Box, Heading, Center, Input, SimpleGrid, Image, Text, Badge, Divider, Button, Flex, Spinner } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

export const ServiceHomePage: React.FC = () => {
    const { state: service } = useLocation();
    // const { data, error, isLoading } = useGetData("/api/cc/service/variants?service_id=1");
    const { data, error, isLoading } = useGetData(`/api/cc/service/variants?service_id=${service.service_id}`);
    console.log("Testing 1.3")

    const { data: serviceData, error: serviceError, isLoading: serviceIsLoading } = useGetData("/api/cc/services");
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");


    console.log("State value from landing page :" + JSON.stringify(service))

    if (isLoading) return <Center><Spinner /></Center>;
    if (error) return <Text>Error: {error.message}</Text>;
    if (!data || !data.partners) return <Text>No data available</Text>;

    console.log("service Data received from new api :" + JSON.stringify(serviceData));

    const filteredPartners = data.partners.filter(partner =>
        partner.business_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box p={6}>
            <Heading mb={4} textAlign="center">Our Makeup Partners</Heading>
            <Center mb={4}>
                <Input
                    placeholder="Search for a service partner..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    width={{ base: "100%", md: "50%" }}
                    boxShadow="sm"
                />
            </Center>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={6}>
                {filteredPartners.map((partner) => {
                    const imageUrls = partner.image_url ? partner.image_url.split(",") : [];
                    return (
                        <Box key={partner.pid} p={4} borderWidth="1px" borderRadius="md" boxShadow="md" textAlign="center">
                            {/* <Image src={imageUrls[0] || "https://via.placeholder.com/150"} alt={partner.business_name} boxSize="200px" borderRadius="10px" mx="auto" w="99%"  objectFit="cover" mb={3} /> */}
                            <Image
                                src={imageUrls[0] || "https://via.placeholder.com/150"}
                                alt={partner.business_name}
                                boxSize="320px" // Slightly increased size 
                                borderRadius="10px"
                                // mx="auto" 
                                w="100%"
                                h="350px"
                                objectFit="cover"
                                mb={3}
                                cursor="pointer" // Makes it clickable
                                onClick={() => navigate(`/service/details/${partner.pid}`, { state: { partner, service } })}
                            />



                            <Text fontSize="lg" fontWeight="bold">{partner.business_name}</Text>
                            {/* <Text fontSize="sm">{partner.city}, {partner.pincode}</Text> */}
                            <Text fontSize="sm">{partner.city}</Text>
                            <Text fontSize="sm">Availability: <Badge colorScheme="green">{partner.availability}</Badge></Text>
                            <Divider my={2} />
                            <Flex mt={3} justify="center">
                                <Button colorScheme="pink" size="sm" onClick={() => navigate(`/service/details/${partner.pid}`, { state: { partner, service } })}>Enquire</Button>
                            </Flex>
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
};

export default ServiceHomePage;



