// Version 1 
// import { useState } from "react";
// import { Box, Button, Image, Input, Select, SimpleGrid, Spinner, Text, VStack, Heading, Flex } from "@chakra-ui/react";
// import useGetData from '../../hooks/useGetData';

// interface Service {
//   service_id: number;
//   service_name: string;
//   service_image: string;
// }

// export const  ServiceLandingPage: React.FC = () => {
//   const { data, error, isLoading } = useGetData<{ services: Service[] }>("/api/cc/services");
//   const [selectedService, setSelectedService] = useState<string>("");
//   const [location, setLocation] = useState<string>("");

//   const handleSearch = () => {
//     console.log("Search for:", selectedService, "in", location);
//   };

//   return (
//     <Box>
//       {/* 🔥 Hero Section */}
//       <Box
//         bgImage="url('https://source.unsplash.com/1600x900/?fashion,beauty')"
//         bgSize="cover"
//         bgPos="center"
//         height="500px"
//         position="relative"
//       >
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           bg="blackAlpha.600"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <VStack spacing={4} textAlign="center" color="white">
//             <Heading size="2xl">Find the Best Services for You</Heading>
//             <Text fontSize="lg">Top-rated professionals in your city</Text>
//             <Flex gap={3} flexWrap="wrap" justifyContent="center">
//               <Select
//                 placeholder="Select Service"
//                 w="250px"
//                 onChange={(e) => setSelectedService(e.target.value)}
//                 bg="white"
//                 color="black"
//               >
//                 {data?.services?.map((service) => (
//                   <option key={service.service_id} value={service.service_name}>
//                     {service.service_name}
//                   </option>
//                 ))}
//               </Select>
//               <Input
//                 placeholder="Enter Location"
//                 w="250px"
//                 bg="white"
//                 color="black"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//               <Button colorScheme="pink" size="lg" onClick={handleSearch}>
//                 Search
//               </Button>
//             </Flex>
//           </VStack>
//         </Box>
//       </Box>

//       {/* 🔹 Service Category Section */}
//       <Box maxW="1200px" mx="auto" p={6} mt={8}>
//         <Heading size="lg" mb={6} textAlign="center">
//           Explore Our Services
//         </Heading>
//         {isLoading ? (
//           <Spinner size="lg" color="pink.500" />
//         ) : error ? (
//           <Text color="red.500">Failed to load services</Text>
//         ) : (
//           <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
//             {data?.services?.map((service) => (
//               <Box
//                 key={service.service_id}
//                 borderRadius="lg"
//                 overflow="hidden"
//                 shadow="lg"
//                 cursor="pointer"
//                 _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
//               >
//                 <Image src={service.service_image} alt={service.service_name} w="100%" h="250px" objectFit="cover" />
//                 <Text fontSize="lg" fontWeight="bold" textAlign="center" p={3} bg="pink.500" color="white">
//                   {service.service_name}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         )}
//       </Box>

//       {/* ⭐ Testimonials Section */}
//       <Box bg="gray.100" py={12} mt={12} textAlign="center">
//         <Heading size="lg">Why Choose Us?</Heading>
//         <Text fontSize="md" color="gray.600" mt={2}>
//           We have partnered with **10,000+ trusted service providers** to bring you the best experience.
//         </Text>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} maxW="900px" mx="auto" mt={8}>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">✨ Verified Professionals</Text>
//             <Text color="gray.600" mt={2}>Hand-picked experts with great customer feedback.</Text>
//           </Box>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">⚡ Quick & Easy Booking</Text>
//             <Text color="gray.600" mt={2}>Book services with a single click, anytime, anywhere.</Text>
//           </Box>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">💯 Satisfaction Guaranteed</Text>
//             <Text color="gray.600" mt={2}>We ensure top quality and customer satisfaction.</Text>
//           </Box>
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// }

// export default ServiceLandingPage;



// Version 2 :

// import { useState } from "react";
// import { Box, Button, Image, Select, SimpleGrid, Spinner, Text, VStack, Heading, Flex, Input, useColorModeValue } from "@chakra-ui/react";
// import useGetData from '../../hooks/useGetData';
// import { AsyncSelect } from "chakra-react-select";

// interface Service {
//   service_id: number;
//   service_name: string;
//   service_image: string;
// }

// const locations = [
//   { label: "Mumbai", value: "mumbai" },
//   { label: "Delhi", value: "delhi" },
//   { label: "Bangalore", value: "bangalore" },
//   { label: "Kolkata", value: "kolkata" },
// ];

// export const ServiceLandingPage = () =>  {
//   const { data, error, isLoading } = useGetData<{ services: Service[] }>("/api/cc/services");
//   const [selectedService, setSelectedService] = useState<string>("");
//   const [selectedLocation, setSelectedLocation] = useState<{ label: string; value: string } | null>(null);

//   const bgColor = useColorModeValue("pink.500", "gray.700");
  
//   const handleSearch = () => {
//     console.log("Search for:", selectedService, "in", selectedLocation?.value);
//   };

//   return (
//     <Box>
//       {/* 🔥 Hero Section */}
//       <Box
//         bgGradient="linear(to-r, pink.400, pink.600)"
//         height={{ base: "auto", md: "500px" }}
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         py={{ base: 10, md: 0 }}
//       >
//         <VStack spacing={4} textAlign="center" color="white" px={6}>
//           <Heading size="2xl">Find the Best Services for You</Heading>
//           <Text fontSize="lg">Top-rated professionals in your city</Text>
//           <Flex direction={{ base: "column", md: "row" }} gap={3} alignItems="center" w={{ base: "100%", md: "auto" }}>
//             <Select
//               placeholder="Select Service"
//               w={{ base: "100%", md: "250px" }}
//               onChange={(e) => setSelectedService(e.target.value)}
//               bg="white"
//               color="black"
//             >
//               {data?.services?.map((service) => (
//                 <option key={service.service_id} value={service.service_name}>
//                   {service.service_name}
//                 </option>
//               ))}
//             </Select>
//             <AsyncSelect
//               placeholder="Select Location"
//               loadOptions={(inputValue, callback) => {
//                 const filtered = locations.filter((loc) => loc.label.toLowerCase().includes(inputValue.toLowerCase()));
//                 callback(filtered);
//               }}
//               onChange={(value) => setSelectedLocation(value)}
//               defaultOptions={locations}
//               styles={{ container: (base) => ({ ...base, width: "100%" }) }}
//             />
//             <Button colorScheme="blackAlpha" size="lg" bg={bgColor} onClick={handleSearch}>
//               Search
//             </Button>
//           </Flex>
//         </VStack>
//       </Box>

//       {/* 🔹 Service Category Section */}
//       <Box maxW="1200px" mx="auto" p={6} mt={8}>
//         <Heading size="lg" mb={6} textAlign="center">
//           Explore Our Services
//         </Heading>
//         {isLoading ? (
//           <Spinner size="lg" color="pink.500" />
//         ) : error ? (
//           <Text color="red.500">Failed to load services</Text>
//         ) : (
//           <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
//             {data?.services?.map((service) => (
//               <Box
//                 key={service.service_id}
//                 borderRadius="lg"
//                 overflow="hidden"
//                 shadow="lg"
//                 cursor="pointer"
//                 _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
//               >
//                 <Image src={service.service_image} alt={service.service_name} w="100%" h="250px" objectFit="cover" />
//                 <Text fontSize="lg" fontWeight="bold" textAlign="center" p={3} bg="pink.500" color="white">
//                   {service.service_name}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default ServiceLandingPage;



// Version 3 : hero section is not mobile resonsive, and text colour in the hero section is not visible clearly, apart from this good code


// import { useState } from "react";
// import { Box, Button, Image, Heading, Text, VStack, SimpleGrid, Spinner, Flex } from "@chakra-ui/react";
// import { Select as ChakraSelect } from "chakra-react-select";
// import useGetData from '../../hooks/useGetData';

// interface Service {
//   service_id: number;
//   service_name: string;
//   service_image: string;
// }

// export const ServiceLandingPage: React.FC = () => {
//   const { data, error, isLoading } = useGetData<{ services: Service[] }>('/api/cc/services');
//   const [selectedService, setSelectedService] = useState<string>('');
//   const [location, setLocation] = useState<{ label: string; value: string } | null>(null);

//   const handleSearch = () => {
//     console.log('Search for:', selectedService, 'in', location?.value);
//   };

//   const locationOptions = [
//     { label: 'New York', value: 'new-york' },
//     { label: 'Los Angeles', value: 'los-angeles' },
//     { label: 'Chicago', value: 'chicago' },
//     { label: 'Houston', value: 'houston' }
//   ];

//   return (
//     <Box>
//       {/* 🔥 Hero Section */}
//       <Box
//         bgGradient="linear(to-r, pink.400, purple.500)"
//         height="500px"
//         position="relative"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <VStack spacing={4} textAlign="center" color="white">
//           <Heading size="2xl">Find the Best Services for You</Heading>
//           <Text fontSize="lg">Top-rated professionals in your city</Text>
//           <Flex gap={3} flexWrap="wrap" justifyContent="center">
//             <ChakraSelect
//               options={data?.services?.map(service => ({ label: service.service_name, value: service.service_name }))}
//               placeholder="Select Service"
//               onChange={(option) => setSelectedService(option?.value || '')}
//               size="lg"
//               chakraStyles={{ container: (provided) => ({ ...provided, width: '250px' }) }}
//             />
//             <ChakraSelect
//               options={locationOptions}
//               placeholder="Select Location"
//               onChange={setLocation}
//               size="lg"
//               chakraStyles={{ container: (provided) => ({ ...provided, width: '250px' }) }}
//             />
//             <Button colorScheme="whiteAlpha" size="lg" onClick={handleSearch} _hover={{ bg: 'pink.300' }}>
//               Search
//             </Button>
//           </Flex>
//         </VStack>
//       </Box>

//       {/* 🔹 Service Category Section */}
//       <Box maxW="1200px" mx="auto" p={6} mt={8}>
//         <Heading size="lg" mb={6} textAlign="center">
//           Explore Our Services
//         </Heading>
//         {isLoading ? (
//           <Spinner size="lg" color="pink.500" />
//         ) : error ? (
//           <Text color="red.500">Failed to load services</Text>
//         ) : (
//           <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
//             {data?.services?.map((service) => (
//               <Box
//                 key={service.service_id}
//                 borderRadius="lg"
//                 overflow="hidden"
//                 shadow="lg"
//                 cursor="pointer"
//                 _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
//               >
//                 <Image src={service.service_image} alt={service.service_name} w="100%" h="250px" objectFit="cover" />
//                 <Text fontSize="lg" fontWeight="bold" textAlign="center" p={3} bg="pink.500" color="white">
//                   {service.service_name}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         )}
//       </Box>

//       {/* ⭐ Why Choose Us Section */}
//       <Box bg="gray.100" py={12} mt={12} textAlign="center">
//         <Heading size="lg">Why Choose Us?</Heading>
//         <Text fontSize="md" color="gray.600" mt={2}>
//           We have partnered with **10,000+ trusted service providers** to bring you the best experience.
//         </Text>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} maxW="900px" mx="auto" mt={8}>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">✨ Verified Professionals</Text>
//             <Text color="gray.600" mt={2}>Hand-picked experts with great customer feedback.</Text>
//           </Box>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">⚡ Quick & Easy Booking</Text>
//             <Text color="gray.600" mt={2}>Book services with a single click, anytime, anywhere.</Text>
//           </Box>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">💯 Satisfaction Guaranteed</Text>
//             <Text color="gray.600" mt={2}>We ensure top quality and customer satisfaction.</Text>
//           </Box>
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default ServiceLandingPage;


// Version 4 

// import { useState } from "react";
// import { Box, Button, Image, Heading, Text, VStack, SimpleGrid, Spinner, Flex } from "@chakra-ui/react";
// import { Select as ChakraSelect } from "chakra-react-select";
// import useGetData from '../../hooks/useGetData';

// interface Service {
//   service_id: number;
//   service_name: string;
//   service_image: string;
// }

// export const ServiceLandingPage: React.FC = () => {
//   const { data, error, isLoading } = useGetData<{ services: Service[] }>('/api/cc/services');
//   const [selectedService, setSelectedService] = useState<string>('');
//   const [location, setLocation] = useState<{ label: string; value: string } | null>(null);

//   const handleSearch = () => {
//     console.log('Search for:', selectedService, 'in', location?.value);
//   };

//   const locationOptions = [
//     { label: 'New York', value: 'new-york' },
//     { label: 'Los Angeles', value: 'los-angeles' },
//     { label: 'Chicago', value: 'chicago' },
//     { label: 'Houston', value: 'houston' }
//   ];

//   return (
//     <Box>
//       {/* 🔥 Hero Section */}
//       <Box
//         bgGradient="linear(to-r, pink.500, purple.600)"
//         height={{ base: "auto", md: "500px" }}
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         textAlign="center"
//         py={{ base: 10, md: 0 }}
//       >
//         <VStack spacing={4} color="white">
//           <Heading size="2xl" fontWeight="bold">Find the Best Services for You</Heading>
//           <Text fontSize="lg">Top-rated professionals in your city</Text>
//           <Flex
//             direction={{ base: "column", md: "row" }}
//             gap={3}
//             flexWrap="wrap"
//             justifyContent="center"
//             w="full"
//             maxW="700px"
//           >
//             <ChakraSelect
//               options={data?.services?.map(service => ({ label: service.service_name, value: service.service_name }))}
//               placeholder="Select Service"
//               onChange={(option) => setSelectedService(option?.value || '')}
//               size="md"
//               isSearchable
//               chakraStyles={{ container: (provided) => ({ ...provided, width: '100%', md: '250px' }) }}
//             />
//             <ChakraSelect
//               options={locationOptions}
//               placeholder="Select Location"
//               onChange={setLocation}
//               size="md"
//               isSearchable
//               chakraStyles={{ container: (provided) => ({ ...provided, width: '100%', md: '250px' }) }}
//             />
//             <Button colorScheme="whiteAlpha" size="md" onClick={handleSearch} _hover={{ bg: 'pink.300' }} w="100%" md="auto">
//               Search
//             </Button>
//           </Flex>
//         </VStack>
//       </Box>

//       {/* 🔹 Service Category Section */}
//       <Box maxW="1200px" mx="auto" p={6} mt={8}>
//         <Heading size="lg" mb={6} textAlign="center">
//           Explore Our Services
//         </Heading>
//         {isLoading ? (
//           <Spinner size="lg" color="pink.500" />
//         ) : error ? (
//           <Text color="red.500">Failed to load services</Text>
//         ) : (
//           <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
//             {data?.services?.map((service) => (
//               <Box
//                 key={service.service_id}
//                 borderRadius="lg"
//                 overflow="hidden"
//                 shadow="lg"
//                 cursor="pointer"
//                 _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
//               >
//                 <Image src={service.service_image} alt={service.service_name} w="100%" h="250px" objectFit="cover" />
//                 <Text fontSize="lg" fontWeight="bold" textAlign="center" p={3} bg="pink.500" color="white">
//                   {service.service_name}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         )}
//       </Box>

//       {/* ⭐ Why Choose Us Section */}
//       <Box bg="gray.100" py={12} mt={12} textAlign="center">
//         <Heading size="lg">Why Choose Us?</Heading>
//         <Text fontSize="md" color="gray.600" mt={2}>
//           We have partnered with **10,000+ trusted service providers** to bring you the best experience.
//         </Text>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} maxW="900px" mx="auto" mt={8}>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">✨ Verified Professionals</Text>
//             <Text color="gray.600" mt={2}>Hand-picked experts with great customer feedback.</Text>
//           </Box>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">⚡ Quick & Easy Booking</Text>
//             <Text color="gray.600" mt={2}>Book services with a single click, anytime, anywhere.</Text>
//           </Box>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">💯 Satisfaction Guaranteed</Text>
//             <Text color="gray.600" mt={2}>We ensure top quality and customer satisfaction.</Text>
//           </Box>
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default ServiceLandingPage;


// Version 5 : Enhancement of Version 4



// import { useState } from "react";
// import { Box, Button, Image, Heading, Text, VStack, SimpleGrid, Spinner, Flex } from "@chakra-ui/react";
// import { Select as ChakraSelect } from "chakra-react-select";
// import useGetData from '../../hooks/useGetData';

// interface Service {
//   service_id: number;
//   service_name: string;
//   service_image: string;
// }

// export const ServiceLandingPage: React.FC = () => {
//   const { data, error, isLoading } = useGetData<{ services: Service[] }>('/api/cc/services');
//   const [selectedService, setSelectedService] = useState<string>('');
//   const [location, setLocation] = useState<{ label: string; value: string } | null>(null);

//   const handleSearch = () => {
//     console.log('Search for:', selectedService, 'in', location?.value);
//   };

//   const locationOptions = [
//     { label: 'New York', value: 'new-york' },
//     { label: 'Los Angeles', value: 'los-angeles' },
//     { label: 'Chicago', value: 'chicago' },
//     { label: 'Houston', value: 'houston' }
//   ];

//   return (
//     <Box>
//       {/* 🔥 Hero Section */}
//       <Box
//         bgGradient="linear(to-r, pink.500, purple.600)"
//         height={{ base: "auto", md: "500px" }}
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         textAlign="center"
//         py={{ base: 10, md: 0 }}
//       >
//         <VStack spacing={4} color="white">
//           <Heading size="2xl" fontWeight="bold">Find the Best Services for You</Heading>
//           <Text fontSize="lg">Top-rated professionals in your city</Text>
//           <Flex 
//   gap={3} 
//   flexWrap="wrap" 
//   justifyContent="center" 
//   width="100%" 
//   px={{ base: 4, md: 0 }} // Adds left-right padding on mobile
// >
//   <ChakraSelect
//     options={data?.services?.map(service => ({ label: service.service_name, value: service.service_name }))}
//     placeholder="Select Service"
//     onChange={(option) => setSelectedService(option?.value || '')}
//     size="md"
//     isSearchable
//     chakraStyles={{
//       container: (provided) => ({
//         ...provided,
//         width: '100%',
//         maxWidth: '250px',
//       }),
//       control: (provided) => ({
//         ...provided,
//         bg: "white",
//         color: "black",
//         borderColor: "gray.300",
//         _hover: { borderColor: "pink.400" },
//       }),
//       menu: (provided) => ({
//         ...provided,
//         bg: "white",
//         zIndex: 10, // Ensures dropdown is visible
//         border: "1px solid gray",
//         boxShadow: "lg",
//       }),
//       option: (provided, { isSelected }) => ({
//         ...provided,
//         color: isSelected ? "white" : "black",
//         bg: isSelected ? "pink.400" : "white",
//         _hover: { bg: "pink.100" },
//       }),
//       placeholder: (provided) => ({
//         ...provided,
//         color: "gray.600",
//       }),
//       singleValue: (provided) => ({
//         ...provided,
//         color: "black",
//       }),
//     }}
//   />
//   <ChakraSelect
//     options={locationOptions}
//     placeholder="Select Location"
//     onChange={setLocation}
//     size="md"
//     isSearchable
//     chakraStyles={{
//       container: (provided) => ({
//         ...provided,
//         width: '100%',
//         maxWidth: '250px',
//       }),
//       control: (provided) => ({
//         ...provided,
//         bg: "white",
//         color: "black",
//         borderColor: "gray.300",
//         _hover: { borderColor: "pink.400" },
//       }),
//       menu: (provided) => ({
//         ...provided,
//         bg: "white",
//         zIndex: 10,
//         border: "1px solid gray",
//         boxShadow: "lg",
//       }),
//       option: (provided, { isSelected }) => ({
//         ...provided,
//         color: isSelected ? "white" : "black",
//         bg: isSelected ? "pink.400" : "white",
//         _hover: { bg: "pink.100" },
//       }),
//       placeholder: (provided) => ({
//         ...provided,
//         color: "gray.600",
//       }),
//       singleValue: (provided) => ({
//         ...provided,
//         color: "black",
//       }),
//     }}
//   />

//          <Button colorScheme="whiteAlpha" size="lg" onClick={handleSearch} _hover={{ bg: 'pink.300' }}>
//            Search
//           </Button>
// </Flex>

//         </VStack>
//       </Box>

//       {/* 🔹 Service Category Section */}
//       <Box maxW="1200px" mx="auto" p={6} mt={8}>
//         <Heading size="lg" mb={6} textAlign="center">
//           Explore Our Services
//         </Heading>
//         {isLoading ? (
//           <Spinner size="lg" color="pink.500" />
//         ) : error ? (
//           <Text color="red.500">Failed to load services</Text>
//         ) : (
//           <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
//             {data?.services?.map((service) => (
//               <Box
//                 key={service.service_id}
//                 borderRadius="lg"
//                 overflow="hidden"
//                 shadow="lg"
//                 cursor="pointer"
//                 _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
//               >
//                 <Image src={service.service_image} alt={service.service_name} w="100%" h="250px" objectFit="cover" />
//                 <Text fontSize="lg" fontWeight="bold" textAlign="center" p={3} bg="pink.500" color="white">
//                   {service.service_name}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         )}
//       </Box>

//       {/* ⭐ Why Choose Us Section */}
//       <Box bg="gray.100" py={12} mt={12} textAlign="center">
//         <Heading size="lg">Why Choose Us?</Heading>
//         <Text fontSize="md" color="gray.600" mt={2}>
//           We have partnered with **10,000+ trusted service providers** to bring you the best experience.
//         </Text>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} maxW="900px" mx="auto" mt={8}>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">✨ Verified Professionals</Text>
//             <Text color="gray.600" mt={2}>Hand-picked experts with great customer feedback.</Text>
//           </Box>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">⚡ Quick & Easy Booking</Text>
//             <Text color="gray.600" mt={2}>Book services with a single click, anytime, anywhere.</Text>
//           </Box>
//           <Box bg="white" p={6} shadow="md" borderRadius="lg">
//             <Text fontSize="xl" fontWeight="bold">💯 Satisfaction Guaranteed</Text>
//             <Text color="gray.600" mt={2}>We ensure top quality and customer satisfaction.</Text>
//           </Box>
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default ServiceLandingPage;


// version 6 : Enhancement to 5 with navigation logic

import { useState } from "react";
import { Box, Button, Image, Heading, Text, VStack, SimpleGrid, Spinner, Flex } from "@chakra-ui/react";
import { Select as ChakraSelect } from "chakra-react-select";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import useGetData from '../../hooks/useGetData';

interface Service {
  service_id: number;
  service_name: string;
  service_image: string;
}

export const ServiceLandingPage: React.FC = () => {
  const { data, error, isLoading } = useGetData<{ services: Service[] }>('/api/cc/services');
  const [selectedService, setSelectedService] = useState<string>('');
  const [location, setLocation] = useState<{ label: string; value: string } | null>(null);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  // 🔥 Function to navigate to /service/home when Search button is clicked
  const handleSearch = () => {
    const selectedServiceData = data?.services?.find(service => service.service_name === selectedService);
    if (selectedServiceData) {
      navigate('/service/home', {
        state: {
          service_id: selectedServiceData.service_id,
          service_name: selectedServiceData.service_name,
          service_image: selectedServiceData.service_image,
        }
      });
    }
  };

  // 🔥 Function to navigate when clicking a service image
  const handleServiceClick = (service: Service) => {
    navigate('/service/home', {
      state: {
        service_id: service.service_id,
        service_name: service.service_name,
        service_image: service.service_image,
      }
    });
  };

  const locationOptions = [
    { label: 'New York', value: 'new-york' },
    { label: 'Los Angeles', value: 'los-angeles' },
    { label: 'Chicago', value: 'chicago' },
    { label: 'Houston', value: 'houston' }
  ];

  return (
    <Box>
      {/* 🔥 Hero Section */}
      <Box
        bgGradient="linear(to-r, pink.500, purple.600)"
        height={{ base: "auto", md: "500px" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        py={{ base: 10, md: 0 }}
      >
        <VStack spacing={4} color="white">
          <Heading size="2xl" fontWeight="bold">Find the Best Services for You</Heading>
          <Text fontSize="lg">Top-rated professionals in your city</Text>
          <Flex 
            gap={3} 
            flexWrap="wrap" 
            justifyContent="center" 
            width="100%" 
            px={{ base: 4, md: 0 }} // Adds left-right padding on mobile
          >
            <ChakraSelect
    options={data?.services?.map(service => ({ label: service.service_name, value: service.service_name }))}
    placeholder="Select Service"
    onChange={(option) => setSelectedService(option?.value || '')}
    size="md"
    isSearchable
    chakraStyles={{
      container: (provided) => ({
        ...provided,
        width: '100%',
        maxWidth: '250px',
      }),
      control: (provided) => ({
        ...provided,
        bg: "white",
        color: "black",
        borderColor: "gray.300",
        _hover: { borderColor: "pink.400" },
      }),
      menu: (provided) => ({
        ...provided,
        bg: "white",
        zIndex: 10, // Ensures dropdown is visible
        border: "1px solid gray",
        boxShadow: "lg",
      }),
      option: (provided, { isSelected }) => ({
        ...provided,
        color: isSelected ? "white" : "black",
        bg: isSelected ? "pink.400" : "white",
        _hover: { bg: "pink.100" },
      }),
      placeholder: (provided) => ({
        ...provided,
        color: "gray.600",
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "black",
      }),
    }}
  />
  <ChakraSelect
    options={locationOptions}
    placeholder="Select Location"
    onChange={setLocation}
    size="md"
    isSearchable
    chakraStyles={{
      container: (provided) => ({
        ...provided,
        width: '100%',
        maxWidth: '250px',
      }),
      control: (provided) => ({
        ...provided,
        bg: "white",
        color: "black",
        borderColor: "gray.300",
        _hover: { borderColor: "pink.400" },
      }),
      menu: (provided) => ({
        ...provided,
        bg: "white",
        zIndex: 10,
        border: "1px solid gray",
        boxShadow: "lg",
      }),
      option: (provided, { isSelected }) => ({
        ...provided,
        color: isSelected ? "white" : "black",
        bg: isSelected ? "pink.400" : "white",
        _hover: { bg: "pink.100" },
      }),
      placeholder: (provided) => ({
        ...provided,
        color: "gray.600",
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "black",
      }),
    }}
  />
            <Button 
              colorScheme="whiteAlpha" 
              size="lg" 
              onClick={handleSearch} 
              _hover={{ bg: 'pink.300' }}
            >
              Search
            </Button>
          </Flex>
        </VStack>
      </Box>

      {/* 🔹 Service Category Section */}
      <Box maxW="1200px" mx="auto" p={6} mt={8}>
        <Heading size="lg" mb={6} textAlign="center">
          Explore Our Services
        </Heading>
        {isLoading ? (
          <Spinner size="lg" color="pink.500" />
        ) : error ? (
          <Text color="red.500">Failed to load services</Text>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {data?.services?.map((service) => (
              <Box
                key={service.service_id}
                borderRadius="lg"
                overflow="hidden"
                shadow="lg"
                cursor="pointer"
                _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
                onClick={() => handleServiceClick(service)} // ✅ Click to navigate
              >
                <Image src={service.service_image} alt={service.service_name} w="100%" h="250px" objectFit="cover" />
                <Text fontSize="lg" fontWeight="bold" textAlign="center" p={3} bg="pink.500" color="white">
                  {service.service_name}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default ServiceLandingPage;
