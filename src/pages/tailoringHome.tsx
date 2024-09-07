// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Input,
//   FormControl,
//   FormLabel,
//   Textarea,
//   Select,
//   VStack,
//   Heading,
//   Container,
//   Stack,
//   Text,
//   InputGroup,
//   InputLeftAddon,
//   Icon,
//   useColorModeValue,
//   Center,
// } from '@chakra-ui/react';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPencilAlt, FaTshirt } from 'react-icons/fa';

// interface TailoringFormData {
//   name: string;
//   email: string;
//   phone: string;
//   tailoringType: string;
//   customDesign: File | null;
//   address: string;
//   city: string;
//   country: string;
//   pincode: string;
//   orderNotes: string;
// }

// export const TailoringHome: React.FC = () => {
//   const [formData, setFormData] = useState<TailoringFormData>({
//     name: '',
//     email: '',
//     phone: '',
//     tailoringType: '',
//     customDesign: null,
//     address: '',
//     city: '',
//     country: '',
//     pincode: '',
//     orderNotes: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFormData({
//         ...formData,
//         customDesign: e.target.files[0],
//       });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData); // You can replace this with your DB logic
//     alert('Form submitted! Data has been collected.');
//   };

//   return (
//     <Container maxW="container.md" py={10} bgGradient="linear(to-r, pink.100, pink.200)" borderRadius="md" boxShadow="lg">
//       <Box p={8} rounded="md" bg="white" boxShadow="2xl">
//         <Heading as="h2" size="lg" mb={6} textAlign="center" color="pink.600">
//           Tailoring Request Form
//         </Heading>
//         <form onSubmit={handleSubmit}>
//           <VStack spacing={4}>
//             <FormControl isRequired>
//               <FormLabel color="pink.600">Name</FormLabel>
//               <InputGroup>
//                 <InputLeftAddon children={<Icon as={FaUser} color="pink.600" />} />
//                 <Input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} borderColor="pink.500" />
//               </InputGroup>
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="pink.600">Email</FormLabel>
//               <InputGroup>
//                 <InputLeftAddon children={<Icon as={FaEnvelope} color="pink.600" />} />
//                 <Input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} borderColor="pink.500" />
//               </InputGroup>
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="pink.600">Phone</FormLabel>
//               <InputGroup>
//                 <InputLeftAddon children="+91" />
//                 <Input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} borderColor="pink.500" />
//               </InputGroup>
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="pink.600">What would you like to stitch?</FormLabel>
//               <Select name="tailoringType" placeholder="Select option" value={formData.tailoringType} onChange={handleInputChange} borderColor="pink.500">
//                 <option value="blouse">Blouse</option>
//                 <option value="lehenga">Lehenga</option>
//                 <option value="suit">Suit</option>
//                 <option value="shirt">Shirt</option>
//                 <option value="pants">Pants</option>
//               </Select>
//             </FormControl>

//             <FormControl>
//               <FormLabel color="pink.600">Upload Custom Design (Optional)</FormLabel>
//               <Input type="file" onChange={handleFileChange} borderColor="pink.500" />
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="pink.600">Address</FormLabel>
//               <Textarea name="address" placeholder="Enter your address" value={formData.address} onChange={handleInputChange} borderColor="pink.500" />
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="pink.600">City</FormLabel>
//               <Input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleInputChange} borderColor="pink.500" />
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="pink.600">Country</FormLabel>
//               <Input type="text" name="country" placeholder="Enter your country" value={formData.country} onChange={handleInputChange} borderColor="pink.500" />
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="pink.600">Pincode</FormLabel>
//               <Input type="text" name="pincode" placeholder="Enter your pincode" value={formData.pincode} onChange={handleInputChange} borderColor="pink.500" />
//             </FormControl>

//             <FormControl>
//               <FormLabel color="pink.600">Order Notes</FormLabel>
//               <Textarea name="orderNotes" placeholder="Any special instructions?" value={formData.orderNotes} onChange={handleInputChange} borderColor="pink.500" />
//             </FormControl>

//             <Stack direction="row" spacing={4} width="100%" justifyContent="center">
//               <Button type="submit" colorScheme="pink" size="lg" width="100%">
//                 Submit Request
//               </Button>
//             </Stack>
//           </VStack>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default TailoringHome;


// Version 2 



// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Input,
//   FormControl,
//   FormLabel,
//   Textarea,
//   Select,
//   VStack,
//   Heading,
//   Container,
//   Stack,
//   InputGroup,
//   InputLeftElement,
//   Icon,
//   Center,
// } from '@chakra-ui/react';
// import { FaUser, FaEnvelope, FaPhone, FaTshirt, FaMapMarkerAlt, FaStickyNote } from 'react-icons/fa';

// interface TailoringFormData {
//   name: string;
//   email: string;
//   phone: string;
//   tailoringType: string;
//   customDesign: File | null;
//   address: string;
//   city: string;
//   country: string;
//   pincode: string;
//   orderNotes: string;
// }

// export const TailoringHome: React.FC = () => {
//   const [formData, setFormData] = useState<TailoringFormData>({
//     name: '',
//     email: '',
//     phone: '',
//     tailoringType: '',
//     customDesign: null,
//     address: '',
//     city: '',
//     country: '',
//     pincode: '',
//     orderNotes: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFormData({
//         ...formData,
//         customDesign: e.target.files[0],
//       });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData); // Replace this with your DB logic
//     alert('Form submitted! Data has been collected.');
//   };

//   return (
//     <Box
//       minHeight="100vh"
//       bgGradient="linear(to-br, pink.200, purple.300)"
//       py={10}
//       px={5}
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Container maxW="lg" bg="white" boxShadow="2xl" borderRadius="md" p={6}>
//         <Heading
//           as="h2"
//           size="xl"
//           mb={6}
//           textAlign="center"
//           color="purple.600"
//           textTransform="uppercase"
//           letterSpacing="wide"
//         >
//           Tailoring Request Form
//         </Heading>
//         <form onSubmit={handleSubmit}>
//           <VStack spacing={4}>
//             <FormControl isRequired>
//               <FormLabel color="purple.600">Name</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none" children={<Icon as={FaUser} color="purple.600" />} />
//                 <Input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   borderColor="purple.400"
//                   focusBorderColor="purple.600"
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="purple.600">Email</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none" children={<Icon as={FaEnvelope} color="purple.600" />} />
//                 <Input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   borderColor="purple.400"
//                   focusBorderColor="purple.600"
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="purple.600">Phone</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none" children={<Icon as={FaPhone} color="purple.600" />} />
//                 <Input
//                   type="tel"
//                   name="phone"
//                   placeholder="Your Phone Number"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   borderColor="purple.400"
//                   focusBorderColor="purple.600"
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="purple.600">What would you like to stitch?</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none" children={<Icon as={FaTshirt} color="purple.600" />} />
//                 <Select
//                   name="tailoringType"
//                   placeholder="Select Option"
//                   value={formData.tailoringType}
//                   onChange={handleInputChange}
//                   borderColor="purple.400"
//                   focusBorderColor="purple.600"
//                 >
//                   <option value="blouse">Blouse</option>
//                   <option value="lehenga">Lehenga</option>
//                   <option value="suit">Suit</option>
//                   <option value="shirt">Shirt</option>
//                   <option value="pants">Pants</option>
//                 </Select>
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel color="purple.600">Upload Custom Design (Optional)</FormLabel>
//               <Input
//                 type="file"
//                 onChange={handleFileChange}
//                 borderColor="purple.400"
//                 focusBorderColor="purple.600"
//                 py={1}
//               />
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="purple.600">Address</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none" children={<Icon as={FaMapMarkerAlt} color="purple.600" />} />
//                 <Textarea
//                   name="address"
//                   placeholder="Your Address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   borderColor="purple.400"
//                   focusBorderColor="purple.600"
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="purple.600">City</FormLabel>
//               <Input
//                 type="text"
//                 name="city"
//                 placeholder="Your City"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 borderColor="purple.400"
//                 focusBorderColor="purple.600"
//               />
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="purple.600">Country</FormLabel>
//               <Input
//                 type="text"
//                 name="country"
//                 placeholder="Your Country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 borderColor="purple.400"
//                 focusBorderColor="purple.600"
//               />
//             </FormControl>

//             <FormControl isRequired>
//               <FormLabel color="purple.600">Pincode</FormLabel>
//               <Input
//                 type="text"
//                 name="pincode"
//                 placeholder="Your Pincode"
//                 value={formData.pincode}
//                 onChange={handleInputChange}
//                 borderColor="purple.400"
//                 focusBorderColor="purple.600"
//               />
//             </FormControl>

//             <FormControl>
//               <FormLabel color="purple.600">Order Notes</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none" children={<Icon as={FaStickyNote} color="purple.600" />} />
//                 <Textarea
//                   name="orderNotes"
//                   placeholder="Any special instructions?"
//                   value={formData.orderNotes}
//                   onChange={handleInputChange}
//                   borderColor="purple.400"
//                   focusBorderColor="purple.600"
//                 />
//               </InputGroup>
//             </FormControl>

//             <Center>
//               <Button type="submit" colorScheme="pink" size="lg" width="full" mt={4}>
//                 Submit Request
//               </Button>
//             </Center>
//           </VStack>
//         </form>
//       </Container>
//     </Box>
//   );
// };

// export default TailoringHome;



// Version 3 : 

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Input,
//   FormControl,
//   FormLabel,
//   Textarea,
//   Select,
//   VStack,
//   Heading,
//   Container,
//   InputGroup,
//   InputLeftElement,
//   Icon,
//   Grid,
//   GridItem,
//   Text,
//   Divider,
//   HStack,
//   Link,
// } from '@chakra-ui/react';
// import { FaUser, FaEnvelope, FaPhone, FaTshirt, FaMapMarkerAlt, FaStickyNote, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// interface TailoringFormData {
//   name: string;
//   email: string;
//   phone: string;
//   tailoringType: string;
//   customDesign: File | null;
//   address: string;
//   city: string;
//   country: string;
//   pincode: string;
//   orderNotes: string;
// }

// export const TailoringHome: React.FC = () => {
//   const [formData, setFormData] = useState<TailoringFormData>({
//     name: '',
//     email: '',
//     phone: '',
//     tailoringType: '',
//     customDesign: null,
//     address: '',
//     city: '',
//     country: '',
//     pincode: '',
//     orderNotes: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFormData({
//         ...formData,
//         customDesign: e.target.files[0],
//       });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData); // Replace this with your DB logic
//     alert('Form submitted! Data has been collected.');
//   };

//   return (
//     <Box
//       minHeight="100vh"
//       bgGradient="linear(to-br, pink.200, purple.300)"
//       py={10}
//       px={5}
//     >
//       <Container maxW="7xl" bg="transparent">
//         <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={10}>
//           {/* Main Form Area */}
//           <GridItem>
//             <Box bg="white" boxShadow="2xl" borderRadius="md" p={6}>
//               <Heading
//                 as="h2"
//                 size="xl"
//                 mb={6}
//                 textAlign="center"
//                 color="purple.600"
//                 textTransform="uppercase"
//                 letterSpacing="wide"
//               >
//                 Tailoring Request Form
//               </Heading>
//               <form onSubmit={handleSubmit}>
//                 <VStack spacing={4}>
//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Name</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaUser} color="purple.600" />} />
//                       <Input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Email</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaEnvelope} color="purple.600" />} />
//                       <Input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Phone</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaPhone} color="purple.600" />} />
//                       <Input
//                         type="tel"
//                         name="phone"
//                         placeholder="Your Phone Number"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">What would you like to stitch?</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaTshirt} color="purple.600" />} />
//                       <Select
//                         name="tailoringType"
//                         placeholder="Select Option"
//                         value={formData.tailoringType}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       >
//                         <option value="blouse">Blouse</option>
//                         <option value="lehenga">Lehenga</option>
//                         <option value="suit">Suit</option>
//                         <option value="shirt">Shirt</option>
//                         <option value="pants">Pants</option>
//                       </Select>
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel color="purple.600">Upload Custom Design (Optional)</FormLabel>
//                     <Input
//                       type="file"
//                       onChange={handleFileChange}
//                       borderColor="purple.400"
//                       focusBorderColor="purple.600"
//                       py={1}
//                     />
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Address</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaMapMarkerAlt} color="purple.600" />} />
//                       <Textarea
//                         name="address"
//                         placeholder="Your Address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">City</FormLabel>
//                     <Input
//                       type="text"
//                       name="city"
//                       placeholder="Your City"
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       borderColor="purple.400"
//                       focusBorderColor="purple.600"
//                     />
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Country</FormLabel>
//                     <Input
//                       type="text"
//                       name="country"
//                       placeholder="Your Country"
//                       value={formData.country}
//                       onChange={handleInputChange}
//                       borderColor="purple.400"
//                       focusBorderColor="purple.600"
//                     />
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Pincode</FormLabel>
//                     <Input
//                       type="text"
//                       name="pincode"
//                       placeholder="Your Pincode"
//                       value={formData.pincode}
//                       onChange={handleInputChange}
//                       borderColor="purple.400"
//                       focusBorderColor="purple.600"
//                     />
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel color="purple.600">Order Notes</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaStickyNote} color="purple.600" />} />
//                       <Textarea
//                         name="orderNotes"
//                         placeholder="Any special instructions?"
//                         value={formData.orderNotes}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <Button type="submit" colorScheme="pink" size="lg" width="full" mt={4}>
//                     Submit Request
//                   </Button>
//                 </VStack>
//               </form>
//             </Box>
//           </GridItem>

//           {/* Sidebar Area */}
//           <GridItem>
//             <Box bg="white" boxShadow="2xl" borderRadius="md" p={6} color="purple.600">
//               <Heading as="h3" size="lg" mb={4} textAlign="center">
//                 Contact Us
//               </Heading>
//               <Divider borderColor="purple.300" />
//               <Text fontSize="md" mt={4}>
//                 Have any questions or need more details? Feel free to contact us at:
//               </Text>
//               <Text fontSize="lg" mt={2} fontWeight="bold">
//                 Phone: +123 456 7890
//               </Text>
//               <Text fontSize="lg" mt={1} fontWeight="bold">
//                 Email: support@cottoncandy.com
//               </Text>
//               <Divider borderColor="purple.300" my={4} />
//               <Text fontSize="md" mt={4}>
//                 Follow us on social media:
//               </Text>
//               <HStack spacing={4} mt={2}>
//                 <Link href="#" color="purple.500" fontSize="xl"><FaFacebook /></Link>
//                 <Link href="#" color="purple.500" fontSize="xl"><FaTwitter /></Link>
//                 <Link href="#" color="purple.500" fontSize="xl"><FaInstagram /></Link>
//               </HStack>
//               <Divider borderColor="purple.300" my={4} />
//               <Text fontSize="md" mt={4}>
//                 Visit our store for more information:
//               </Text>
//               <Text fontSize="lg" mt={2} fontWeight="bold">
//                 123 Cotton Candy Lane, Fashion City
//               </Text>
//             </Box>
//           </GridItem>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default TailoringHome;



// Version 4 This design is nice

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Input,
//   FormControl,
//   FormLabel,
//   Textarea,
//   Select,
//   VStack,
//   Heading,
//   Container,
//   InputGroup,
//   InputLeftElement,
//   Icon,
//   Grid,
//   GridItem,
//   Text,
//   Divider,
//   HStack,
//   Link,
//   Flex,
//   Spacer,
//   Stack,
// } from '@chakra-ui/react';
// import { FaUser, FaEnvelope, FaPhone, FaTshirt, FaMapMarkerAlt, FaStickyNote, FaFacebook, FaTwitter, FaInstagram, FaClock, FaShippingFast, FaPen, FaCheckCircle } from 'react-icons/fa';

// interface TailoringFormData {
//   name: string;
//   email: string;
//   phone: string;
//   tailoringType: string;
//   customDesign: File | null;
//   address: string;
//   city: string;
//   country: string;
//   pincode: string;
//   orderNotes: string;
// }

// export const TailoringHome: React.FC = () => {
//   const [formData, setFormData] = useState<TailoringFormData>({
//     name: '',
//     email: '',
//     phone: '',
//     tailoringType: '',
//     customDesign: null,
//     address: '',
//     city: '',
//     country: '',
//     pincode: '',
//     orderNotes: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFormData({
//         ...formData,
//         customDesign: e.target.files[0],
//       });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData); // Replace this with your DB logic
//     alert('Form submitted! Data has been collected.');
//   };

//   return (
//     <Box minHeight="100vh" bgGradient="linear(to-br, pink.100, purple.200)">
//       {/* Header Section */}
//       <Flex bg="purple.600" color="white" py={4} px={8} justify="space-between" align="center">
//         <Heading size="lg" letterSpacing="wider">
//           Cotton Candy Tailoring Services
//         </Heading>
//         <Spacer />
//         <HStack spacing={10}>
//           <Text fontSize="md">
//             <Icon as={FaClock} mr={2} />
//             Operational Hours: Mon-Sat, 9AM-6PM
//           </Text>
//           <Text fontSize="md">
//             <Icon as={FaPhone} mr={2} />
//             Call Us: +123 456 7890
//           </Text>
//           <Text fontSize="md">
//             <Icon as={FaEnvelope} mr={2} />
//             Email: support@cottoncandy.com
//           </Text>
//         </HStack>
//       </Flex>

//       {/* Main Content Section */}
//       <Container maxW="7xl" py={10}>
//         <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={10}>
//           {/* Form Section */}
//           <GridItem>
//             <Box bg="white" boxShadow="2xl" borderRadius="md" p={6}>
//               <Heading as="h2" size="xl" mb={6} textAlign="center" color="purple.600">
//                 Tailoring Request Form
//               </Heading>
//               <form onSubmit={handleSubmit}>
//                 <VStack spacing={4}>
//                   {/* Form Controls */}
//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Name</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaUser} color="purple.600" />} />
//                       <Input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Email</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaEnvelope} color="purple.600" />} />
//                       <Input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Phone</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaPhone} color="purple.600" />} />
//                       <Input
//                         type="tel"
//                         name="phone"
//                         placeholder="Your Phone Number"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">What would you like to stitch?</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaTshirt} color="purple.600" />} />
//                       <Select
//                         name="tailoringType"
//                         placeholder="Select Option"
//                         value={formData.tailoringType}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       >
//                         <option value="blouse">Blouse</option>
//                         <option value="lehenga">Lehenga</option>
//                         <option value="suit">Suit</option>
//                         <option value="shirt">Shirt</option>
//                         <option value="pants">Pants</option>
//                       </Select>
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel color="purple.600">Upload Custom Design (Optional)</FormLabel>
//                     <Input
//                       type="file"
//                       onChange={handleFileChange}
//                       borderColor="purple.400"
//                       focusBorderColor="purple.600"
//                       py={1}
//                     />
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Address</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaMapMarkerAlt} color="purple.600" />} />
//                       <Textarea
//                         name="address"
//                         placeholder="Your Address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">City</FormLabel>
//                     <Input
//                       type="text"
//                       name="city"
//                       placeholder="Your City"
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       borderColor="purple.400"
//                       focusBorderColor="purple.600"
//                     />
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Country</FormLabel>
//                     <Input
//                       type="text"
//                       name="country"
//                       placeholder="Your Country"
//                       value={formData.country}
//                       onChange={handleInputChange}
//                       borderColor="purple.400"
//                       focusBorderColor="purple.600"
//                     />
//                   </FormControl>

//                   <FormControl isRequired>
//                     <FormLabel color="purple.600">Pincode</FormLabel>
//                     <Input
//                       type="text"
//                       name="pincode"
//                       placeholder="Your Pincode"
//                       value={formData.pincode}
//                       onChange={handleInputChange}
//                       borderColor="purple.400"
//                       focusBorderColor="purple.600"
//                     />
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel color="purple.600">Order Notes</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none" children={<Icon as={FaStickyNote} color="purple.600" />} />
//                       <Textarea
//                         name="orderNotes"
//                         placeholder="Any special instructions?"
//                         value={formData.orderNotes}
//                         onChange={handleInputChange}
//                         borderColor="purple.400"
//                         focusBorderColor="purple.600"
//                       />
//                     </InputGroup>
//                   </FormControl>

//                   <Button
//                     type="submit"
//                     colorScheme="purple"
//                     size="lg"
//                     w="full"
//                     leftIcon={<FaCheckCircle />}
//                     boxShadow="lg"
//                   >
//                     Submit Request
//                   </Button>
//                 </VStack>
//               </form>
//             </Box>
//           </GridItem>

//           {/* Sidebar Section */}
//           <GridItem display={{ base: 'none', md: 'block' }}>
//             <Box bg="white" boxShadow="2xl" borderRadius="md" p={6} h="full">
//               <Heading as="h3" size="lg" color="purple.600" mb={4}>
//                 How Our Service Works
//               </Heading>
//               <VStack align="start" spacing={4}>
//                 <Flex align="center">
//                   <Icon as={FaCheckCircle} color="purple.600" boxSize={6} mr={2} />
//                   <Text fontSize="md">1. Place Your Order Online.</Text>
//                 </Flex>
//                 <Flex align="center">
//                   <Icon as={FaPen} color="purple.600" boxSize={6} mr={2} />
//                   <Text fontSize="md">2. Our Expert Will Visit Your Home for Material Collection & Measurements.</Text>
//                 </Flex>
//                 <Flex align="center">
//                   <Icon as={FaShippingFast} color="purple.600" boxSize={6} mr={2} />
//                   <Text fontSize="md">3. We Stitch Your Custom Clothing with Precision.</Text>
//                 </Flex>
//                 <Flex align="center">
//                   <Icon as={FaCheckCircle} color="purple.600" boxSize={6} mr={2} />
//                   <Text fontSize="md">4. Ready to Deliver at Your Doorstep!</Text>
//                 </Flex>
//               </VStack>
//               <Divider borderColor="purple.300" my={6} />
//               <Text fontSize="lg" color="purple.600" fontWeight="bold" mb={2}>
//                 Contact Us
//               </Text>
//               <Text fontSize="md" color="gray.700">Email: support@cottoncandy.com</Text>
//               <Text fontSize="md" color="gray.700">Phone: +123 456 7890</Text>
//               <Text fontSize="md" color="gray.700">Operational Hours: Mon-Sat, 9AM-6PM</Text>
//               <Divider borderColor="purple.300" my={6} />
//               <Text fontSize="lg" color="purple.600" fontWeight="bold" mb={2}>
//                 Follow Us
//               </Text>
//               <HStack spacing={4}>
//                 <Link href="#" color="purple.500" fontSize="2xl"><FaFacebook /></Link>
//                 <Link href="#" color="purple.500" fontSize="2xl"><FaTwitter /></Link>
//                 <Link href="#" color="purple.500" fontSize="2xl"><FaInstagram /></Link>
//               </HStack>
//             </Box>
//           </GridItem>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default TailoringHome;


//version 5 : Perfect Design

// import React from 'react';
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   Button,
//   Flex,
//   Icon,
//   useDisclosure,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   HStack,
//   Link,
// } from '@chakra-ui/react';
// import { FaCheckCircle, FaUser, FaShippingFast, FaPhoneAlt, FaEnvelope, FaBars } from 'react-icons/fa';

// export const TailoringHome = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box bg="gray.50" minH="100vh" p={4}>
//       {/* Mobile Header */}
//       <Flex justifyContent="space-between" alignItems="center" bg="purple.600" color="white" p={3}>
//         <Heading size="md">Cotton Candy</Heading>
//         <Flex alignItems="center">
//           <Icon as={FaPhoneAlt} boxSize={5} mr={3} onClick={() => window.location.href = 'tel:+1234567890'} />
//           <Icon as={FaEnvelope} boxSize={5} onClick={() => window.location.href = 'mailto:support@cottoncandy.com'} />
//           <Icon as={FaBars} boxSize={6} ml={4} onClick={onOpen} />
//         </Flex>
//       </Flex>

//       {/* Mobile Drawer Menu */}
//       <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
//           <DrawerBody>
//             <VStack align="start" spacing={4}>
//               <Text fontWeight="bold" color="purple.600">Operational Hours: Mon-Sat, 9AM-6PM</Text>
//               <Accordion allowToggle>
//                 <AccordionItem>
//                   <AccordionButton>
//                     <Box flex="1" textAlign="left">
//                       How Our Service Works
//                     </Box>
//                     <AccordionIcon />
//                   </AccordionButton>
//                   <AccordionPanel pb={4}>
//                     <VStack align="start" spacing={3}>
//                       <Flex align="center">
//                         <Icon as={FaCheckCircle} color="purple.600" boxSize={5} mr={2} />
//                         <Text>1. Place Your Order Online.</Text>
//                       </Flex>
//                       <Flex align="center">
//                         <Icon as={FaUser} color="purple.600" boxSize={5} mr={2} />
//                         <Text>2. Our Expert Will Visit Your Home for Material Collection & Measurements.</Text>
//                       </Flex>
//                       <Flex align="center">
//                         <Icon as={FaShippingFast} color="purple.600" boxSize={5} mr={2} />
//                         <Text>3. We Stitch Your Custom Clothing with Precision.</Text>
//                       </Flex>
//                       <Flex align="center">
//                         <Icon as={FaCheckCircle} color="purple.600" boxSize={5} mr={2} />
//                         <Text>4. Ready to Deliver at Your Doorstep!</Text>
//                       </Flex>
//                     </VStack>
//                   </AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             </VStack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       {/* Main Content Area */}
//       <Container maxW="container.sm" bg="white" boxShadow="md" p={4} mt={4} borderRadius="md">
//         <Heading as="h2" size="lg" color="purple.600" mb={4} textAlign="center">
//           Tailoring Request
//         </Heading>
//         <form>
//           <VStack spacing={4}>
//             <FormControl isRequired>
//               <FormLabel>Full Name</FormLabel>
//               <Input type="text" placeholder="Enter your full name" focusBorderColor="purple.600" />
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Email Address</FormLabel>
//               <Input type="email" placeholder="Enter your email" focusBorderColor="purple.600" />
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Phone Number</FormLabel>
//               <Input type="tel" placeholder="Enter your phone number" focusBorderColor="purple.600" />
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Pickup Address</FormLabel>
//               <Input type="text" placeholder="Enter your address" focusBorderColor="purple.600" />
//             </FormControl>
//             <Button
//               type="submit"
//               colorScheme="purple"
//               size="lg"
//               w="full"
//               leftIcon={<FaCheckCircle />}
//             >
//               Submit Request
//             </Button>
//           </VStack>
//         </form>
//       </Container>

//       {/* Fixed Footer for Mobile */}
//       <Box bg="purple.600" color="white" py={3} position="fixed" bottom="0" width="full" textAlign="center">
//         <Text fontSize="sm">Contact Us: +123 456 7890 | support@cottoncandy.com</Text>
//       </Box>
//     </Box>
//   );
// };

// export default TailoringHome;




//Version 6 : 

// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Flex,
//   Icon,
//   useBreakpointValue,
//   Divider,
//   IconButton,
//   useDisclosure,
//   Slide,
//   InputGroup,
//   InputLeftElement,
//   useDisclosure as useDisclosureForMobile
// } from '@chakra-ui/react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaTag, FaUpload, FaUser, FaBars, FaTimes,FaShippingFast } from 'react-icons/fa';
// import { HiOutlineLocationMarker } from 'react-icons/hi';
// import { IoMdMail } from 'react-icons/io';
// import { BiTime } from 'react-icons/bi';
// import { RiUpload2Line } from 'react-icons/ri';

// export const TailoringHome: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Container maxW="container.xl" py={8} bg="gray.50">
//       <Flex direction={{ base: 'column', md: 'row' }} spacing={8} position="relative">
//         {/* Left Side - Form */}
//         <Box flex="1" bg="white" borderRadius="md" boxShadow="lg" p={6} mb={{ base: 8, md: 0 }}>
//           <Heading as="h2" size="lg" mb={4} color="purple.600">
//             Tailoring Service Request
//           </Heading>
//           <VStack spacing={4} align="stretch">
//             <FormControl id="name">
//               <FormLabel>Name</FormLabel>
//               <InputGroup>
//                 <InputLeftElement children={<Icon as={FaUser} color="purple.500" />} />
//                 <Input placeholder="Your Name" variant="outline" />
//               </InputGroup>
//             </FormControl>
//             <FormControl id="email">
//               <FormLabel>Email</FormLabel>
//               <InputGroup>
//                 <InputLeftElement children={<Icon as={IoMdMail} color="purple.500" />} />
//                 <Input type="email" placeholder="Your Email" variant="outline" />
//               </InputGroup>
//             </FormControl>
//             <FormControl id="phone">
//               <FormLabel>Phone</FormLabel>
//               <InputGroup>
//                 <InputLeftElement children={<Icon as={FaPhoneAlt} color="purple.500" />} />
//                 <Input type="tel" placeholder="Your Phone Number" variant="outline" />
//               </InputGroup>
//             </FormControl>
//             <FormControl id="item">
//               <FormLabel>What you need to stitch?</FormLabel>
//               <InputGroup>
//                 <InputLeftElement children={<Icon as={FaTag} color="purple.500" />} />
//                 <Input placeholder="e.g., Blouse" variant="outline" />
//               </InputGroup>
//             </FormControl>
//             <FormControl id="design">
//               <FormLabel>Custom Design Upload (if any)</FormLabel>
//               <InputGroup>
//                 <InputLeftElement children={<Icon as={RiUpload2Line} color="purple.500" />} />
//                 <Input type="file" variant="outline" />
//               </InputGroup>
//             </FormControl>
//             <FormControl id="address">
//               <FormLabel>Address</FormLabel>
//               <InputGroup>
//                 <InputLeftElement children={<Icon as={HiOutlineLocationMarker} color="purple.500" />} />
//                 <Input placeholder="Your Address" variant="outline" />
//               </InputGroup>
//             </FormControl>
//             <FormControl id="city">
//               <FormLabel>City</FormLabel>
//               <Input placeholder="City" variant="outline" />
//             </FormControl>
//             <FormControl id="country">
//               <FormLabel>Country</FormLabel>
//               <Input placeholder="Country" variant="outline" />
//             </FormControl>
//             <FormControl id="pincode">
//               <FormLabel>Pincode</FormLabel>
//               <Input placeholder="Pincode" variant="outline" />
//             </FormControl>
//             <FormControl id="order-notes">
//               <FormLabel>Order Notes</FormLabel>
//               <Input placeholder="Any special instructions?" variant="outline" />
//             </FormControl>
//             <Button colorScheme="purple" size="lg">Submit</Button>
//           </VStack>
//         </Box>

//         {/* Right Side - How We Work */}
//         {!isMobile && (
//           <Box flex="1" borderRadius="md" boxShadow="lg" p={6} ml={8}>
//             <Heading as="h2" size="lg" mb={4}>
//               How We Work
//             </Heading>
//             <Text mb={4} color="purple.700">
//               <Icon as={FaMapMarkerAlt} mr={2} /> 1. Place your order.
//             </Text>
//             <Text mb={4} color="purple.700">
//               <Icon as={FaUser} mr={2} /> 2. Our fashion expert will visit your home for material collection and measurements.
//             </Text>
//             <Text mb={4} color="purple.700">
//               <Icon as={FaTag} mr={2} /> 3. We will craft and stitch your item.
//             </Text>
//             <Text mb={4} color="purple.700">
//               <Icon as={FaShippingFast} mr={2} /> 4. Delivery right to your doorstep.
//             </Text>
//             <Divider my={4} />
//             <Heading as="h3" size="md" mb={2}>
//               Contact Us
//             </Heading>
//             <Text mb={2} color="purple.700">
//               <Icon as={FaPhoneAlt} mr={2} /> Phone: +1 234 567 890
//             </Text>
//             <Text mb={2} color="purple.700">
//               <Icon as={IoMdMail} mr={2} /> Email: support@cottoncandy.com
//             </Text>
//             <Heading as="h3" size="md" mb={2}>
//               Operational Hours
//             </Heading>
//             <Text color="purple.700">
//               <Icon as={BiTime} mr={2} /> Mon - Fri: 9 AM - 6 PM
//             </Text>
//             <Text color="purple.700">
//               <Icon as={BiTime} mr={2} /> Sat - Sun: 10 AM - 4 PM
//             </Text>
//           </Box>
//         )}
//       </Flex>

//       {/* Mobile Sliding Menu */}
//       {isMobile && (
//         <>
//           <IconButton
//             icon={<Icon as={FaBars} />}
//             aria-label="Open Menu"
//             variant="outline"
//             colorScheme="purple"
//             onClick={onOpen}
//             position="fixed"
//             top={4}
//             right={4}
//             zIndex="popover"
//           />
//           <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
//             <Box
//               w="300px"
//               bg="purple.700"
//               color="white"
//               p={6}
//               position="fixed"
//               top={0}
//               right={0}
//               height="100vh"
//               overflowY="auto"
//               transition="transform 0.3s ease"
//               transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
//             >
//               <IconButton
//                 icon={<Icon as={FaTimes} />}
//                 aria-label="Close Menu"
//                 variant="outline"
//                 colorScheme="white"
//                 onClick={onClose}
//                 position="absolute"
//                 top={4}
//                 right={4}
//                 zIndex="modal"
//               />
//               <Heading as="h2" size="lg" mb={4}>
//                 How We Work
//               </Heading>
//               <Text mb={4}>
//                 <Icon as={FaMapMarkerAlt} mr={2} /> 1. Place your order.
//               </Text>
//               <Text mb={4}>
//                 <Icon as={FaUser} mr={2} /> 2. Our fashion expert will visit your home for material collection and measurements.
//               </Text>
//               <Text mb={4}>
//                 <Icon as={FaTag} mr={2} /> 3. We will craft and stitch your item.
//               </Text>
//               <Text mb={4}>
//                 <Icon as={FaShippingFast} mr={2} /> 4. Delivery right to your doorstep.
//               </Text>
//               <Divider my={4} />
//               <Heading as="h3" size="md" mb={2}>
//                 Contact Us
//               </Heading>
//               <Text mb={2}>
//                 <Icon as={FaPhoneAlt} mr={2} /> Phone: +1 234 567 890
//               </Text>
//               <Text mb={2}>
//                 <Icon as={IoMdMail} mr={2} /> Email: support@cottoncandy.com
//               </Text>
//               <Heading as="h3" size="md" mb={2}>
//                 Operational Hours
//               </Heading>
//               <Text>
//                 <Icon as={BiTime} mr={2} /> Mon - Fri: 9 AM - 6 PM
//               </Text>
//               <Text>
//                 <Icon as={BiTime} mr={2} /> Sat - Sun: 10 AM - 4 PM
//               </Text>
//             </Box>
//           </Slide>
//         </>
//       )}
//     </Container>
//   );
// };

// export default TailoringHome;



// Version 7 

// import React from 'react';
// import {
//   Box,
//   Flex,
//   VStack,
//   Input,
//   Button,
//   Text,
//   Icon,
//   Image,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   InputGroup,
//   InputLeftElement,
// } from '@chakra-ui/react';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaCity, FaClock } from 'react-icons/fa';
// import TailoringPhoto from '../assets/homePage/TailoringPhoto.jpeg';

// export const TailoringHome = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Flex direction={{ base: 'column', lg: 'row' }} padding="4" justifyContent="space-between">
//       {/* Main Form */}
//       <Box width={{ base: '100%', lg: '60%' }} padding="4">
//         <Text fontSize="2xl" fontWeight="bold" marginBottom="4">Book Appointment</Text>
//         <VStack spacing="4">
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <Icon as={FaUser} color="gray.300" />
//             </InputLeftElement>
//             <Input type="text" placeholder="Name" />
//           </InputGroup>
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <Icon as={FaEnvelope} color="gray.300" />
//             </InputLeftElement>
//             <Input type="email" placeholder="Email" />
//           </InputGroup>
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <Icon as={FaPhone} color="gray.300" />
//             </InputLeftElement>
//             <Input type="phone" placeholder="Phone" />
//           </InputGroup>
//           {/* Additional fields... */}
//         </VStack>
//         <Button marginTop="4" colorScheme="pink">Submit</Button>
//       </Box>

//       {/* Right Side for Larger Devices */}
//       <Box display={{ base: 'none', lg: 'block' }} width="35%" padding="4">
//         <Image src={TailoringPhoto} alt="Tailoring" borderRadius="md" marginBottom="4" />
//         <Box padding="4" boxShadow="md" borderRadius="md" border="1px solid #E2E8F0">
//           <Text fontSize="lg" fontWeight="bold">How We Work</Text>
//           <Text>1. Place your order.</Text>
//           <Text>2. Our fashion expert visits your home.</Text>
//           <Text>3. Tailoring and doorstep delivery.</Text>
//         </Box>
//         <Box padding="4" boxShadow="md" borderRadius="md" border="1px solid #E2E8F0" marginTop="4">
//           <Text fontSize="lg" fontWeight="bold">Operational Hours</Text>
//           <Text>Monday - Saturday: 9 AM - 7 PM</Text>
//           <Text>Sunday: Closed</Text>
//         </Box>
//         <Box padding="4" boxShadow="md" borderRadius="md" border="1px solid #E2E8F0" marginTop="4">
//           <Text fontSize="lg" fontWeight="bold">Contact Us</Text>
//           <Text>Phone: +91-1234567890</Text>
//           <Text>Email: support@cottoncandy.com</Text>
//         </Box>
//       </Box>

//       {/* Sliding Menu for Mobile */}
//       <Box display={{ base: 'block', lg: 'none' }} position="fixed" top="30px" right="16px">
//         {/* <Button onClick={onOpen} colorScheme="pink" marginTop="4">How We Work</Button> */}

//         <Text
//   onClick={onOpen}
//   color="pink.500"
//   cursor="pointer"
//   fontSize="lg"
//   fontWeight="bold"
//   marginTop="4"
//   _hover={{ textDecoration: 'underline', color: 'pink.700' }}
// >
//   How We Work
// </Text>


//         <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader borderBottomWidth="1px">How We Work</DrawerHeader>
//             <DrawerBody>
//               <Text fontSize="lg" fontWeight="bold">1. Place your order.</Text>
//               <Text>2. Our fashion expert visits your home.</Text>
//               <Text>3. Tailoring and doorstep delivery.</Text>
//               <Text marginTop="4" fontSize="lg" fontWeight="bold">Operational Hours</Text>
//               <Text>Monday - Saturday: 9 AM - 7 PM</Text>
//               <Text marginBottom="4">Sunday: Closed</Text>
//               <Text fontSize="lg" fontWeight="bold">Contact Us</Text>
//               <Text>Phone: +91-1234567890</Text>
//               <Text>Email: support@cottoncandy.com</Text>
//             </DrawerBody>
//           </DrawerContent>
//         </Drawer>
//       </Box>
//     </Flex>
//   );
// };

// export default TailoringHome;


// Version 8 


// import React from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Select,
//   Stack,
//   Text,
//   useMediaQuery,
// } from "@chakra-ui/react";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaCity,
//   FaHome,
//   FaTag,
// } from "react-icons/fa";

// import '../css/TailoringHome.css'

// import city1 from '../assets/cities/city1.jpg'
// import city2 from '../assets/cities/city2.jpg'
// import city3 from '../assets/cities/city3.jpg'

// export const TailoringHome = () => {
//   const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

//   const scrollToForm = () => {
//     const formSection = document.getElementById("booking-form");
//     formSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <Box width="100%" bg="white" color="gray.700">
//       {/* Promotion Banner */}
//       <Box bg="pink.500" color="white" p={2} textAlign="center" fontWeight="bold">
//         Promotion Offer: Hurry Up! Tailoring Service Free, Login to avail this offer.
//       </Box>

//       {/* How We Work Section */}
//       <Container maxW="container.xl" py={8}>
//         <Heading as="h2" size="xl" color="pink.500" textAlign="center" mb={4}>
//           How We Work
//         </Heading>
//         <Text fontSize="lg" textAlign="center" mb={8}>
//           Discover our seamless process of providing luxury doorstep tailoring service.
//         </Text>

//         {/* Image Scroller for All Devices */}
//         <Flex justifyContent="center" alignItems="center">
//           <Box
//             width="80%"
//             height="300px"
//             overflow="hidden"
//             borderRadius="md"
//             boxShadow="md"
//             position="relative"
//           >
//             <Flex
//               position="absolute"
//               width="300%"
//               height="100%"
//               animation="scrollingImages 20s linear infinite"
//             >
//               <Box
//                 width="33.33%"
//                 bg="pink.300"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <img
//                   src={city1}
//                   alt="Step 1"
//                   style={{ height: "100%", width: "100%", objectFit: "cover" }}
//                 />
//               </Box>
//               <Box
//                 width="33.33%"
//                 bg="pink.200"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <img
//                   src={city2}
//                   alt="Step 2"
//                   style={{ height: "100%", width: "100%", objectFit: "cover" }}
//                 />
//               </Box>
//               <Box
//                 width="33.33%"
//                 bg="pink.300"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <img
//                   src={city3}
//                   alt="Step 3"
//                   style={{ height: "100%", width: "100%", objectFit: "cover" }}
//                 />
//               </Box>
//             </Flex>
//           </Box>
//         </Flex>

//         <Button
//           onClick={scrollToForm}
//           colorScheme="pink"
//           size="lg"
//           mt={4}
//           mx="auto"
//           display="block"
//         >
//           Book Tailoring Appointment
//         </Button>
//       </Container>

//       {/* Booking Form Section */}
//       <Container id="booking-form" maxW="container.md" py={8} mt={8}>
//         <Heading as="h3" size="lg" mb={6} textAlign="center">
//           Book Your Tailoring Appointment
//         </Heading>
//         <Stack spacing={4}>
//           {/* Name Field */}
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <FaUser color="gray.400" />
//             </InputLeftElement>
//             <Input type="text" placeholder="Your Name" focusBorderColor="pink.500" />
//           </InputGroup>

//           {/* Email Field */}
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <FaEnvelope color="gray.400" />
//             </InputLeftElement>
//             <Input type="email" placeholder="Your Email" focusBorderColor="pink.500" />
//           </InputGroup>

//           {/* Phone Field */}
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <FaPhone color="gray.400" />
//             </InputLeftElement>
//             <Input type="tel" placeholder="Your Phone" focusBorderColor="pink.500" />
//           </InputGroup>

//           {/* Address Field */}
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <FaMapMarkerAlt color="gray.400" />
//             </InputLeftElement>
//             <Input type="text" placeholder="Your Address" focusBorderColor="pink.500" />
//           </InputGroup>

//           {/* City Field */}
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <FaCity color="gray.400" />
//             </InputLeftElement>
//             <Input type="text" placeholder="City" focusBorderColor="pink.500" />
//           </InputGroup>

//           {/* Country Field */}
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <FaHome color="gray.400" />
//             </InputLeftElement>
//             <Input type="text" placeholder="Country" focusBorderColor="pink.500" />
//           </InputGroup>

//           {/* Pincode Field */}
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <FaMapMarkerAlt color="gray.400" />
//             </InputLeftElement>
//             <Input type="text" placeholder="Pincode" focusBorderColor="pink.500" />
//           </InputGroup>

//           {/* What to Stitch Field */}
//           <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <FaTag color="gray.400" />
//             </InputLeftElement>
//             <Select placeholder="What to Stitch" focusBorderColor="pink.500">
//               <option value="kurta">Kurta</option>
//               <option value="lehenga">Lehenga</option>
//               <option value="blouse">Blouse</option>
//               <option value="suit">Suit</option>
//               <option value="sherwani">Sherwani</option>
//             </Select>
//           </InputGroup>

//           {/* Order Notes */}
//           <Input type="text" placeholder="Order Notes" focusBorderColor="pink.500" />

//           {/* Submit Button */}
//           <Button colorScheme="pink" size="lg" width="100%" mt={4}>
//             Submit
//           </Button>
//         </Stack>
//       </Container>

//       {/* Contact & Operational Info Section for Larger Devices */}
//       {isLargerThan768 && (
//         <Container maxW="container.xl" py={8} textAlign="center">
//           <Heading as="h4" size="md" mb={4}>
//             Contact Us
//           </Heading>
//           <Text fontSize="lg">
//             Phone: +123-456-7890 | Email: support@cottoncandy.com
//           </Text>
//           <Text fontSize="md" mt={2}>
//             Operational Hours: Mon-Sat, 9 AM - 6 PM
//           </Text>
//         </Container>
//       )}
//     </Box>
//   );
// };

// export default TailoringHome;


// Version 9 

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   Image,
//   Input,
//   Select,
//   Text,
//   VStack,
//   HStack,
//   Icon,
// } from "@chakra-ui/react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import city1 from "../assets/cities/city1.jpg";
// import city2 from "../assets/cities/city2.jpg";
// import city3 from "../assets/cities/city3.jpg";

// const images = [city1, city2, city3];

// export const TailoringHome = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   const scrollToForm = () => {
//     const formElement = document.getElementById("bookingForm");
//     if (formElement) {
//       formElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <Box>
//       {/* Header Section */}
//       <Box bg="pink.300" py="2" textAlign="center" color="white">
//         <Text fontSize="lg">🚀 Promotion Offer: Tailoring Service Free! Login to avail this offer.</Text>
//       </Box>

//       {/* Image Carousel */}
//       <Flex
//         width="100%"
//         height={{ base: "200px", md: "400px" }}
//         overflow="hidden"
//         position="relative"
//         justifyContent="center"
//         alignItems="center"
//         boxShadow="md"
//         bg="gray.100"
//       >
//         <Image
//           src={images[currentIndex]}
//           alt={`City ${currentIndex + 1}`}
//           objectFit="cover"
//           width="100%"
//           height="100%"
//           borderRadius="md"
//         />
//       </Flex>

//       {/* "How We Work" Section */}
//       <VStack spacing={4} p={4} textAlign="center">
//         <Text fontSize="2xl" fontWeight="bold" color="pink.500">
//           How We Work
//         </Text>
//         <Text fontSize="lg" color="gray.600">
//           Place your order online, our fashion expert visits your home for material collection and measurements, crafts your garment to perfection, and delivers it back to your doorstep.
//         </Text>
//         <Button onClick={scrollToForm} colorScheme="pink" mt={4}>
//           Book Tailoring Appointment
//         </Button>
//       </VStack>

//       {/* Booking Form */}
//       <Box id="bookingForm" p={6} bg="gray.50" borderRadius="md" boxShadow="lg" mt={6}>
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="pink.500">
//           Book Tailoring Appointment
//         </Text>
//         <VStack spacing={4}>
//           <HStack spacing={4} width="100%">
//             <Box flex="1">
//               <Input placeholder="Name" variant="filled" size="lg" />
//             </Box>
//             <Box flex="1">
//               <Input placeholder="Email" variant="filled" size="lg" />
//             </Box>
//           </HStack>
//           <HStack spacing={4} width="100%">
//             <Box flex="1">
//               <Input placeholder="Phone" variant="filled" size="lg" />
//             </Box>
//             <Box flex="1">
//               <Select placeholder="What do you need to stitch?" variant="filled" size="lg">
//                 <option value="blouse">Blouse</option>
//                 <option value="pants">Pants</option>
//                 <option value="suit">Suit</option>
//                 {/* Add more options as needed */}
//               </Select>
//             </Box>
//           </HStack>
//           <Input placeholder="Address" variant="filled" size="lg" />
//           <HStack spacing={4} width="100%">
//             <Box flex="1">
//               <Input placeholder="City" variant="filled" size="lg" />
//             </Box>
//             <Box flex="1">
//               <Input placeholder="Country" variant="filled" size="lg" />
//             </Box>
//           </HStack>
//           <HStack spacing={4} width="100%">
//             <Box flex="1">
//               <Input placeholder="Pincode" variant="filled" size="lg" />
//             </Box>
//             <Box flex="1">
//               <Input placeholder="Order Notes" variant="filled" size="lg" />
//             </Box>
//           </HStack>
//           <Button colorScheme="pink" size="lg" width="full">
//             Submit
//           </Button>
//         </VStack>
//       </Box>

//       {/* Contact and Operational Info */}
//       <VStack mt={6} p={4} textAlign="center" spacing={3}>
//         <Text fontSize="lg" fontWeight="bold" color="pink.500">
//           Contact Us
//         </Text>
//         <Flex justifyContent="center" alignItems="center">
//           <Icon as={FaPhone} mr={2} color="pink.500" />
//           <Text>+1-234-567-890</Text>
//         </Flex>
//         <Flex justifyContent="center" alignItems="center">
//           <Icon as={FaEnvelope} mr={2} color="pink.500" />
//           <Text>support@cottoncandy.com</Text>
//         </Flex>
//         <Flex justifyContent="center" alignItems="center">
//           <Icon as={FaMapMarkerAlt} mr={2} color="pink.500" />
//           <Text>9:00 AM - 6:00 PM, Monday to Friday</Text>
//         </Flex>
//       </VStack>
//     </Box>
//   );
// };

// export default TailoringHome;


// import React from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Divider,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
// import Slider from "react-slick";
// import city1 from "../assets/cities/city1.jpg";
// import city2 from "../assets/cities/city2.jpg";
// import city3 from "../assets/cities/city3.jpg";

// export const TailoringHome = () => {
//   // Smooth scroll to form
//   const scrollToForm = () => {
//     const formSection = document.getElementById("bookingForm");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Settings for the react-slick slider
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false, // Hide arrows for a cleaner look
//     pauseOnHover: false, // Continue sliding even if hovered
//   };

//   return (
//     <Box p={5} maxWidth="1200px" margin="auto">
//       {/* Scrolling Animated Banner */}
//       <Box bg="pink.500" color="white" p={2} textAlign="center" mb={5}>
//         <marquee>All Tailoring Services Free Until Nov 15, 2024! Book Now!</marquee>
//       </Box>

//       {/* Auto-scrolling Image Carousel */}
//       <Box mb={5} maxWidth="600px" margin="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
//         <Slider {...sliderSettings}>
//           <Box>
//             <Image src={city1} alt="Tailoring Service" borderRadius="md" objectFit="cover" width="100%" height="300px" />
//           </Box>
//           <Box>
//             <Image src={city2} alt="Tailoring Service" borderRadius="md" objectFit="cover" width="100%" height="300px" />
//           </Box>
//           <Box>
//             <Image src={city3} alt="Tailoring Service" borderRadius="md" objectFit="cover" width="100%" height="300px" />
//           </Box>
//         </Slider>
//       </Box>

//       {/* Book Appointment Button */}
//       <Box textAlign="center" mb={5}>
//         <Button onClick={scrollToForm} colorScheme="pink" size="lg">
//           Book Tailoring Appointment
//         </Button>
//       </Box>

//       <Flex direction={{ base: "column", lg: "row" }} gap={6}>
//         {/* Left Column: Form */}
//         <Box flex="1" p={5} boxShadow="lg" borderRadius="md" bg="white" id="bookingForm">
//           <VStack spacing={4} align="stretch">
//             <Heading as="h2" size="lg" textAlign="center" mb={5} color="pink.500">
//               Tailoring Appointment Form
//             </Heading>

//             <FormControl>
//               <FormLabel>
//                 <FaUser /> Name
//               </FormLabel>
//               <Input type="text" placeholder="Enter your name" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>
//                 <FaEnvelope /> Email
//               </FormLabel>
//               <Input type="email" placeholder="Enter your email" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>
//                 <FaPhone /> Phone
//               </FormLabel>
//               <Input type="tel" placeholder="Enter your phone number" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>What to Stitch</FormLabel>
//               <Select placeholder="Select option">
//                 <option value="blouse">Blouse</option>
//                 <option value="suit">Suit</option>
//                 <option value="dress">Dress</option>
//               </Select>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Custom Design (Optional)</FormLabel>
//               <Input type="file" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>
//                 <FaMapMarkerAlt /> Address
//               </FormLabel>
//               <Textarea placeholder="Enter your address" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>City</FormLabel>
//               <Input type="text" placeholder="Enter your city" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Country</FormLabel>
//               <Input type="text" placeholder="Enter your country" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Pincode</FormLabel>
//               <Input type="text" placeholder="Enter your pincode" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Order Notes</FormLabel>
//               <Textarea placeholder="Enter any additional notes" />
//             </FormControl>

//             <Button colorScheme="pink" size="lg" width="full">
//               Submit
//             </Button>
//           </VStack>
//         </Box>

//         {/* Right Column for Larger Devices */}
//         <Box
//           flex="1"
//           p={5}
//           boxShadow="lg"
//           borderRadius="md"
//           bg="white"
//           display={{ base: "none", lg: "block" }}
//           maxWidth="400px"
//         >
//           {/* Tailoring Image */}
//           <Image src={city1} alt="Tailoring Service" borderRadius="md" mb={5} />

//           {/* Contact Info */}
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             Contact Info
//           </Heading>
//           <Text>
//             <FaPhone /> +91 12345 67890
//           </Text>
//           <Text>
//             <FaEnvelope /> support@cottoncandy.com
//           </Text>

//           <Divider my={3} />

//           {/* Operational Hours */}
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             Operational Hours
//           </Heading>
//           <Text>
//             <FaClock /> Monday - Saturday: 9:00 AM - 8:00 PM
//           </Text>
//           <Text>Sunday: Closed</Text>

//           <Divider my={3} />

//           {/* User Reviews */}
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             What Our Customers Say
//           </Heading>
//           <Text fontStyle="italic">
//             "Amazing tailoring service! They came to my doorstep and did a fantastic job." - Priya S.
//           </Text>
//           <Text fontStyle="italic">
//             "The fitting was perfect, and I loved the convenience of home service." - Anil K.
//           </Text>
//         </Box>
//       </Flex>

//       {/* Footer Section for Smaller Devices */}
//       <Box display={{ base: "block", lg: "none" }} p={5} mt={5} boxShadow="lg" borderRadius="md" bg="white">
//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           Contact Info
//         </Heading>
//         <Text>
//           <FaPhone /> +91 12345 67890
//         </Text>
//         <Text>
//           <FaEnvelope /> support@cottoncandy.com
//         </Text>

//         <Divider my={3} />

//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           Operational Hours
//         </Heading>
//         <Text>
//           <FaClock /> Monday - Saturday: 9:00 AM - 8:00 PM
//         </Text>
//         <Text>Sunday: Closed</Text>

//         <Divider my={3} />

//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           What Our Customers Say
//         </Heading>
//         <Text fontStyle="italic">
//           "Amazing tailoring service! They came to my doorstep and did a fantastic job." - Priya S.
//         </Text>
//         <Text fontStyle="italic">
//           "The fitting was perfect, and I loved the convenience of home service." - Anil K.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default TailoringHome;

// Version 10 : except input fields, all designs are good


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Divider,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
// import city1 from "../assets/cities/city1.jpg";
// import city2 from "../assets/cities/city2.jpg";
// import city3 from "../assets/cities/city3.jpg";

// export const TailoringHome = () => {
//   // State for image slider
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [city1, city2, city3];

//   // Effect to change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   // Smooth scroll to form
//   const scrollToForm = () => {
//     const formSection = document.getElementById("bookingForm");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <Box p={5} maxWidth="1200px" margin="auto">
//       {/* Scrolling Animated Banner */}
//       <Box bg="pink.500" color="white" p={2} textAlign="center" mb={5}>
//         <marquee>All Tailoring Services Free Until Nov 15, 2024! Book Now!</marquee>
//       </Box>

//       {/* Image Slider for 'How We Work' Section */}
//       <Box mb={5} maxWidth="900px" margin="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
//         <Image
//           src={images[currentImageIndex]}
//           alt="How We Work"
//           borderRadius="md"
//           objectFit="cover"
//           width="100%"
//           height="300px"
//           transition="opacity 1s ease-in-out"
//         />
//       </Box>

//       {/* Book Appointment Button */}
//       <Box textAlign="center" mb={5} marginTop={3}>
//         <Button onClick={scrollToForm} colorScheme="pink" size="lg">
//           Book Tailoring Appointment
//         </Button>
//       </Box>

//       <Flex direction={{ base: "column", lg: "row" }} gap={6}>
//         {/* Left Column: Form */}
//         <Box flex="1" p={5} boxShadow="lg" borderRadius="md" bg="white" id="bookingForm">
//           <VStack spacing={4} align="stretch">
//             <Heading as="h2" size="lg" textAlign="center" mb={5} color="pink.500">
//               Tailoring Appointment Form
//             </Heading>

//             <FormControl>
//               <FormLabel>
//                 <FaUser /> Name
//               </FormLabel>
//               <Input type="text" placeholder="Enter your name" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>
//                 <FaEnvelope /> Email
//               </FormLabel>
//               <Input type="email" placeholder="Enter your email" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>
//                 <FaPhone /> Phone
//               </FormLabel>
//               <Input type="tel" placeholder="Enter your phone number" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>What to Stitch</FormLabel>
//               <Select placeholder="Select option">
//                 <option value="blouse">Blouse</option>
//                 <option value="suit">Suit</option>
//                 <option value="dress">Dress</option>
//               </Select>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Custom Design (Optional)</FormLabel>
//               <Input type="file" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>
//                 <FaMapMarkerAlt /> Address
//               </FormLabel>
//               <Textarea placeholder="Enter your address" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>City</FormLabel>
//               <Input type="text" placeholder="Enter your city" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Country</FormLabel>
//               <Input type="text" placeholder="Enter your country" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Pincode</FormLabel>
//               <Input type="text" placeholder="Enter your pincode" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Order Notes</FormLabel>
//               <Textarea placeholder="Enter any additional notes" />
//             </FormControl>

//             <Button colorScheme="pink" size="lg" width="full">
//               Submit
//             </Button>
//           </VStack>
//         </Box>

//         {/* Right Column for Larger Devices */}
//         <Box
//           flex="1"
//           p={5}
//           boxShadow="lg"
//           borderRadius="md"
//           bg="white"
//           display={{ base: "none", lg: "block" }}
//           maxWidth="400px"
//         >
//           {/* Tailoring Image */}
//           <Image src={city1} alt="Tailoring Service" borderRadius="md" mb={5} />

//           {/* Contact Info */}
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             Contact Info
//           </Heading>
//           <Text>
//             <FaPhone /> +91 12345 67890
//           </Text>
//           <Text>
//             <FaEnvelope /> support@cottoncandy.com
//           </Text>

//           <Divider my={3} />

//           {/* Operational Hours */}
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             Operational Hours
//           </Heading>
//           <Text>
//             <FaClock /> Monday - Saturday: 9:00 AM - 8:00 PM
//           </Text>
//           <Text>Sunday: Closed</Text>

//           <Divider my={3} />

//           {/* User Reviews */}
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             What Our Customers Say
//           </Heading>
//           <Text fontStyle="italic">
//             "Amazing tailoring service! They came to my doorstep and did a fantastic job." - Priya S.
//           </Text>
//           <Text fontStyle="italic">
//             "The fitting was perfect, and I loved the convenience of home service." - Anil K.
//           </Text>
//         </Box>
//       </Flex>

//       {/* Footer Section for Smaller Devices */}
//       <Box display={{ base: "block", lg: "none" }} p={5} mt={5} boxShadow="lg" borderRadius="md" bg="white">
//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           Contact Info
//         </Heading>
//         <Text>
//           <FaPhone /> +91 12345 67890
//         </Text>
//         <Text>
//           <FaEnvelope /> support@cottoncandy.com
//         </Text>

//         <Divider my={3} />

//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           Operational Hours
//         </Heading>
//         <Text>
//           <FaClock /> Monday - Saturday: 9:00 AM - 8:00 PM
//         </Text>
//         <Text>Sunday: Closed</Text>

//         <Divider my={3} />

//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           What Our Customers Say
//         </Heading>
//         <Text fontStyle="italic">
//           "Amazing tailoring service! They came to my doorstep and did a fantastic job." - Priya S.
//         </Text>
//         <Text fontStyle="italic">
//           "The fitting was perfect, and I loved the convenience of home service." - Anil K.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default TailoringHome;



// Version 11 : 

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Select,
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Divider,
//   Alert,
//   AlertIcon,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
// import { MdCheckCircle } from "react-icons/md";
// import city1 from "../assets/cities/city1.jpg";
// import city2 from "../assets/cities/city2.jpg";
// import city3 from "../assets/cities/city3.jpg";

// export const TailoringHome = () => {
//   // State for image slider
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [city1, city2, city3];

//   // Effect to change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   // Smooth scroll to form
//   const scrollToForm = () => {
//     const formSection = document.getElementById("bookingForm");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <Box p={5} maxWidth="1200px" margin="auto">
//       {/* Header Banner with Offer */}
//       <Alert status="success" variant="solid" mb={5} borderRadius="md">
//         <AlertIcon />
//         All Tailoring Services Free Until Nov 15, 2024! Book Now!
//       </Alert>

//       {/* Image Slider for 'How We Work' Section */}
//       <Box mb={5} maxWidth="900px" margin="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
//         <Image
//           src={images[currentImageIndex]}
//           alt="How We Work"
//           borderRadius="md"
//           objectFit="cover"
//           width="100%"
//           height="300px"
//           transition="opacity 1s ease-in-out"
//         />
//       </Box>

//       {/* Book Appointment Button */}
//       <Box textAlign="center" mb={5} marginTop={3}>
//         <Button onClick={scrollToForm} colorScheme="pink" size="lg">
//           Book Tailoring Appointment
//         </Button>
//       </Box>

//       <Flex direction={{ base: "column", lg: "row" }} gap={6}>
//         {/* Left Column: Form */}
//         <Box flex="1" p={5} boxShadow="lg" borderRadius="md" bg="white" id="bookingForm">
//           <VStack spacing={4} align="stretch">
//             <Heading as="h2" size="lg" textAlign="center" mb={5} color="pink.500">
//               Tailoring Appointment Form
//             </Heading>

//             <FormControl>
//               <FormLabel>Name</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaUser color="gray.300" />
//                 </InputLeftElement>
//                 <Input type="text" placeholder="Enter your name" />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Email</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaEnvelope color="gray.300" />
//                 </InputLeftElement>
//                 <Input type="email" placeholder="Enter your email" />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Phone</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaPhone color="gray.300" />
//                 </InputLeftElement>
//                 <Input type="tel" placeholder="Enter your phone number" />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>What to Stitch</FormLabel>
//               <Select placeholder="Select option">
//                 <option value="blouse">Blouse</option>
//                 <option value="suit">Suit</option>
//                 <option value="dress">Dress</option>
//               </Select>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Custom Design (Optional)</FormLabel>
//               <Input type="file" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Address</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaMapMarkerAlt color="gray.300" />
//                 </InputLeftElement>
//                 <Textarea placeholder="Enter your address" />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>City</FormLabel>
//               <Input type="text" placeholder="Enter your city" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Country</FormLabel>
//               <Input type="text" placeholder="Enter your country" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Pincode</FormLabel>
//               <Input type="text" placeholder="Enter your pincode" />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Order Notes</FormLabel>
//               <Textarea placeholder="Enter any additional notes" />
//             </FormControl>

//             <Button colorScheme="pink" size="lg" width="full">
//               Submit
//             </Button>
//           </VStack>
//         </Box>

//         {/* Right Column for Larger Devices */}
//         <Box
//           flex="1"
//           p={5}
//           boxShadow="lg"
//           borderRadius="md"
//           bg="white"
//           display={{ base: "none", lg: "block" }}
//           maxWidth="400px"
//         >
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             How We Work
//           </Heading>
//           <Text mb={3}>
//             At Cotton Candy, we bring the luxury of custom tailoring to your doorstep. Here’s how it works:
//           </Text>
//           <VStack align="start" spacing={3}>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Schedule your appointment online or via phone.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Our tailor visits you for measurements and fabric selection.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Garments are stitched to perfection and delivered to your address.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>We offer free alterations for perfect fits.</Text>
//             </Flex>
//           </VStack>
//         </Box>
//       </Flex>

//       {/* Footer Section for Smaller Devices */}
//       <Box display={{ base: "block", lg: "none" }} p={5} mt={5} boxShadow="lg" borderRadius="md" bg="white">
//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           How We Work
//         </Heading>
//         <Text mb={3}>
//           At Cotton Candy, we bring the luxury of custom tailoring to your doorstep. Here’s how it works:
//         </Text>
//         <VStack align="start" spacing={3}>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text ml={2}>Schedule your appointment online or via phone.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text ml={2}>Our tailor visits you for measurements and fabric selection.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text ml={2}>Garments are stitched to perfection and delivered to your address.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text ml={2}>We offer free alterations for perfect fits.</Text>
//           </Flex>
//         </VStack>
//       </Box>
//     </Box>
//   );
// };

// export default TailoringHome;




// Version 12 , 11 is all good , this is just few enhancements like operational hours addition, contact info addition etc




// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Select,
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Divider,
//   Alert,
//   AlertIcon,
//   useToast,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";
// import { MdCheckCircle } from "react-icons/md";

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import '../css/DatePicker.css';


// import city1 from "../assets/cities/city1.jpg";
// import city2 from "../assets/cities/city2.jpg";
// import city3 from "../assets/cities/city3.jpg";

// export const TailoringHome = () => {
//   // State for image slider
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [city1, city2, city3];

//   // State for form data
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     stitchOption: "",
//     customDesign: null,
//     address: "",
//     city: "",
//     // country: "",
//     pincode: "",
//     orderNotes: "",
//   });

//   const toast = useToast(); // Chakra UI toast for notifications

//   // Effect to change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   // Smooth scroll to form
//   const scrollToForm = () => {
//     const formSection = document.getElementById("bookingForm");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value, // Handle file input separately
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store the formData object in DB or send to backend API
//     // Mock API call or logic to handle form data
//     console.log("Form Data Submitted:", formData);

//     // Show success toast notification
//     toast({
//       title: "Appointment Booked",
//       description: "Your tailoring appointment has been successfully booked.",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//     });

//     // Clear form fields after submission
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       stitchOption: "",
//       customDesign: null,
//       address: "",
//       city: "",
//       // country: "",
//       pincode: "",
//       orderNotes: "",
//     });
//   };

//   return (
//     <Box p={5} maxWidth="1200px" margin="auto">
//       {/* Header Banner with Offer */}
//       <Alert status="success" variant="solid" mb={5} borderRadius="md">
//         <AlertIcon />
//         All Tailoring Services Free Until Nov 15, 2024! Book Now!
//       </Alert>

//       {/* Image Slider for 'How We Work' Section */}
//       <Box mb={5} maxWidth="900px" margin="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
//         <Image
//           src={images[currentImageIndex]}
//           alt="How We Work"
//           borderRadius="md"
//           objectFit="cover"
//           width="100%"
//           height="300px"
//           transition="opacity 1s ease-in-out"
//         />
//       </Box>

//       {/* Book Appointment Button */}
//       <Box textAlign="center" mb={5} marginTop={3}>
//         <Button onClick={scrollToForm} colorScheme="pink" size="lg">
//           Book Tailoring Appointment
//         </Button>
//       </Box>

//       <Flex direction={{ base: "column", lg: "row" }} gap={6}>
//         {/* Left Column: Form */}
//         <Box flex="1" p={5} boxShadow="lg" borderRadius="md" bg="white" id="bookingForm">
//           <VStack spacing={4} align="stretch" as="form" onSubmit={handleSubmit}>
//             <Heading as="h2" size="lg" textAlign="center" mb={5} color="pink.500">
//               Tailoring Appointment Form
//             </Heading>

//             <FormControl>
//               <FormLabel >Name</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaUser color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter your name"
//                   required
//                   // borderColor="grey"
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Email</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaEnvelope color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Enter your email"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Phone</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaPhone color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="Enter your phone number"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>What to Stitch</FormLabel>
//               <Select
//                 name="stitchOption"
//                 value={formData.stitchOption}
//                 onChange={handleInputChange}
//                 placeholder="Select option"
//                 // borderColor="grey"
//                 required
//               >
//                 <option value="blouse">Blouse</option>
//                 <option value="suit">Suit</option>
//                 <option value="dress">Dress</option>
//               </Select>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Custom Design (Optional)</FormLabel>
//               <Input
//                 type="file"
//                 name="customDesign"
//                 onChange={handleInputChange}
//                 // borderColor="grey"
                
//               />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Address</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   {/* <FaMapMarkerAlt color="gray.300" /> */}
//                 </InputLeftElement>
//                 <Textarea
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   placeholder="Enter your address"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>City</FormLabel>
//               <Input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 placeholder="Enter your city"
//                 // borderColor="grey"
//                 required
//               />
//             </FormControl>

//             {/* <FormControl>
//               <FormLabel>Country</FormLabel>
//               <Input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 placeholder="Enter your country"
//                 required
//               />
//             </FormControl> */}

//             <FormControl>
//               <FormLabel>Pincode</FormLabel>
//               <Input
//                 type="text"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleInputChange}
//                 placeholder="Enter your pincode"
//                 // borderColor="grey"
//                 required
//               />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Order Notes</FormLabel>
//               <Textarea
//                 name="orderNotes"
//                 value={formData.orderNotes}
//                 onChange={handleInputChange}
//                 placeholder="Enter any additional notes"
//                 // borderColor="grey"
//               />
//             </FormControl>

//             <Button type="submit" colorScheme="pink" size="lg" width="full">
//               Submit
//             </Button>
//           </VStack>
//         </Box>

//         {/* Right Column for Larger Devices */}
//         <Box
//           flex="1"
//           p={5}
//           boxShadow="lg"
//           borderRadius="md"
//           bg="white"
//           display={{ base: "none", lg: "block" }}
//           maxWidth="400px"
//         >
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             How We Work
//           </Heading>
//           <Text mb={3}>
//             At Cotton Candy, we bring the luxury of custom tailoring to your doorstep. Here’s how it works:
//           </Text>
//           <VStack align="start" spacing={2}>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Book your appointment online.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Our tailor visits your location for measurements.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Your custom dress is delivered within 7 days.</Text>
//             </Flex>
//           </VStack>

//           {/* Operation Hours */}

//           {/* <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//             Operation Hours
//           </Heading>
//           <Text mb={2}>
//             <FaClock /> Monday - Friday: 10:00 AM - 6:00 PM
//           </Text>
//           <Text mb={2}>
//             <FaClock /> Saturday: 11:00 AM - 4:00 PM
//           </Text>
//           <Text mb={2}>
//             <FaClock /> Sunday: Closed
//           </Text> */}

//           <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Operation Hours
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text ml={2}>Monday - Friday: 10:00 AM - 6:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="orange" />
//             <Text align = 'start' color = "red" ml={2}>Sunday: Closed</Text>
//           </Flex>
//         </VStack>

//           {/* Contact Information */}
//           {/* <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//             Contact Us
//           </Heading>
//           <Text mb={2}>
//             <FaPhone /> +1 (555) 123-4567
//           </Text>
//           <Text mb={2}>
//             <FaEnvelope /> support@cottoncandy.com
//           </Text> */}


//         <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Contact Us
//         </Heading>

//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaPhone color="#b82d92" />
//             <Text ml={2}>9629705557</Text>
//           </Flex>
//           <Flex align="center">
//             <FaEnvelope color="#b82d92" />
//             <Text align='start' ml={2}>support@cottoncandy.com</Text>
//           </Flex>
//           <Flex align="center">
//             <FaGlobe color="#b82d92" />
//             <Text align = 'start' ml={2}>India , UK , UAE</Text>
//           </Flex>
//         </VStack>

//         </Box>
//       </Flex>

//       {/* Footer for Smaller Devices */}
//       <Box
//         display={{ base: "block", lg: "none" }}
//         mt={6}
//         p={5}
//         boxShadow="lg"
//         borderRadius="md"
//         bg="white"
//         textAlign="center"
//       >
//         <Divider mb={4} />
//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           How We Work
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text ml={2}>Book your appointment online.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text align='start' ml={2}>Our tailor visits your location for measurements.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text align = 'start' ml={2}>Your custom dress is delivered within 7 days.</Text>
//           </Flex>
//         </VStack>

//          {/* Operational Hours */}
//          <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Operation Hours
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text ml={2}>Monday - Friday: 10:00 AM - 6:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="orange" />
//             <Text align = 'start' ml={2} color='red'>Sunday: Closed</Text>
//           </Flex>
//         </VStack>


//         {/* Contact Information  */}

//         <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Contact Us
//         </Heading>

//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaPhone color="#b82d92" />
//             <Text ml={2}>9629705557</Text>
//           </Flex>
//           <Flex align="center">
//             <FaEnvelope color="#b82d92" />
//             <Text align='start' ml={2}>support@cottoncandy.com</Text>
//           </Flex>
//           <Flex align="center">
//             <FaGlobe color="#b82d92" />
//             <Text align = 'start' ml={2}>India , UK , UAE</Text>
//           </Flex>
//         </VStack>

//       </Box>
//     </Box>
//   );
// };



// Version 12 

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Select,
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Divider,
//   Alert,
//   AlertIcon,
//   useToast,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";
// import { MdCheckCircle } from "react-icons/md";

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import '../css/DatePicker.css';
// import usePostData from "../hooks/usePostData";
// import { useForm } from "react-hook-form";


// import city1 from "../assets/cities/city1.jpg";
// import city2 from "../assets/cities/city2.jpg";
// import city3 from "../assets/cities/city3.jpg";
// import axios from "axios";

// export const TailoringHome = () => {
//   // State for image slider

//   //const { register, handleSubmit } = useForm();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [city1, city2, city3];

//   const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

//   const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/tailoringOrder');

//   // Date Picker Function 

//   const handleAppointmentDateChange = (date: Date | null) => {
//     if (!date) return;
//     const istDate = new Date(date);
//     istDate.setHours(istDate.getHours() + 5);
//     istDate.setMinutes(istDate.getMinutes() + 30);
//     setAppointmentDate(istDate);
//    // setReturnDate(calculateReturnDate(istDate, selectedDuration));

//    setFormData((prevData) => ({
//     ...prevData,
//     appointmentDate: istDate
//   }));
//   };

//   // State for form data
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     stitchOption: "",
//     customDesign: [],
//     address: "",
//     city: "",
//     // country: "",
//     pincode: "",
//     orderNotes: "",
//     appointmentDate : null,
//   });

//   const toast = useToast(); // Chakra UI toast for notifications

//   // Effect to change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   // Smooth scroll to form
//   const scrollToForm = () => {
//     const formSection = document.getElementById("bookingForm");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value, // Handle file input separately
    
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async(e) => {
//     // e.preventDefault();
//     // // Store the formData object in DB or send to backend API
//     // // Mock API call or logic to handle form data
//     // console.log("Form Data Submitted:", formData);

//     // // Image Upload to AWS S3 and URL Generation Logic Begins 

//     // const formDataPhotos = new FormData();

//     // if(formData.customDesign) {

//     //   console.log("Inside AWS S3")

//     // for (let i = 0; i < (formData.customDesign.length || 0); i++) {
//     //     formDataPhotos.append('photos', formData.customDesign[i]);
//     // }

//     // console.log("Backend Data Object:" +formDataPhotos);
//     // for (let pair of formDataPhotos.entries()) {
//     //     console.log(pair[0] + ', ' + pair[1]);
//     // }

//     // try {
//     //     const s3Response = await axios.post("https://admee.in:3003/aws/upload", formDataPhotos, {
//     //         headers: {
//     //             'Content-Type': 'multipart/form-data',
//     //             "Access-Control-Allow-Origin": "*",
//     //             "Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"
//     //         }
//     //     });
//     //     console.log(s3Response.data);
//     //     const concatImageURLS = s3Response.data.imageURLs

//     //     console.log("Image URL : "+concatImageURLS)

//     //   } catch (error) {
//     //     console.error("Error checking user status:", error);
//     //   }

//     // }
//     // // Image upload to AWS S3 and URL Generation Logic Ends

//     // postData(formData);

//     // // Show success toast notification
//     // toast({
//     //   title: "Appointment Booked",
//     //   description: "Your tailoring appointment has been successfully booked.",
//     //   status: "success",
//     //   duration: 5000,
//     //   isClosable: true,
//     //   position: "top",
//     // });

//     // // Clear form fields after submission
//     // setFormData({
//     //   name: "",
//     //   email: "",
//     //   phone: "",
//     //   stitchOption: "",
//     //   customDesign: [],
//     //   address: "",
//     //   city: "",
//     //   // country: "",
//     //   pincode: "",
//     //   orderNotes: "",
//     //   appointmentDate: null,
//     // });
//   };

//   return (
//     <Box p={5} maxWidth="1200px" margin="auto">
//       {/* Header Banner with Offer */}
//       <Alert status="success" variant="solid" mb={5} borderRadius="md">
//         <AlertIcon />
//         All Tailoring Services Free Until Nov 15, 2024! Book Now!
//       </Alert>

//       {/* Image Slider for 'How We Work' Section */}
//       <Box mb={5} maxWidth="900px" margin="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
//         <Image
//           src={images[currentImageIndex]}
//           alt="How We Work"
//           borderRadius="md"
//           objectFit="cover"
//           width="100%"
//           height="300px"
//           transition="opacity 1s ease-in-out"
//         />
//       </Box>

//       {/* Book Appointment Button */}
//       <Box textAlign="center" mb={5} marginTop={3}>
//         <Button onClick={scrollToForm} colorScheme="pink" size="lg">
//           Book Tailoring Appointment
//         </Button>
//       </Box>

//       <Flex direction={{ base: "column", lg: "row" }} gap={6}>
//         {/* Left Column: Form */}
//         <Box flex="1" p={5} boxShadow="lg" borderRadius="md" bg="white" id="bookingForm">
//           <VStack spacing={4} align="stretch" as="form" onSubmit={handleSubmit}>
//             <Heading as="h2" size="lg" textAlign="center" mb={5} color="pink.500">
//               Tailoring Appointment Form
//             </Heading>

//             <FormControl>
//               <FormLabel >Name</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaUser color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter your name"
//                   required
//                   // borderColor="grey"
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Email</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaEnvelope color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Enter your email"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Phone</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaPhone color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="Enter your phone number"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>What to Stitch</FormLabel>
//               <Select
//                 name="stitchOption"
//                 value={formData.stitchOption}
//                 onChange={handleInputChange}
//                 placeholder="Select option"
//                 // borderColor="grey"
//                 required
//               >
//                 <option value="blouse">Blouse</option>
//                 <option value="suit">Suit</option>
//                 <option value="dress">Dress</option>
//               </Select>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Custom Design (Optional)</FormLabel>
//               <Input
//                 type="file"
//                 name="customDesign"
//                 onChange={handleInputChange}
//                 accept="image/*" 
//                 multiple
//                 // borderColor="grey"
                
//               />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Address</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   {/* <FaMapMarkerAlt color="gray.300" /> */}
//                 </InputLeftElement>
//                 <Textarea
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   placeholder="Enter your address"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>City</FormLabel>
//               <Input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 placeholder="Enter your city"
//                 // borderColor="grey"
//                 required
//               />
//             </FormControl>

//             {/* <FormControl>
//               <FormLabel>Country</FormLabel>
//               <Input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 placeholder="Enter your country"
//                 required
//               />
//             </FormControl> */}

//             <FormControl>
//               <FormLabel>Pincode</FormLabel>
//               <Input
//                 type="text"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleInputChange}
//                 placeholder="Enter your pincode"
//                 // borderColor="grey"
//                 required
//               />
//             </FormControl>

//             <FormControl>
//             <FormLabel fontWeight="bold">Appointment Date</FormLabel>
//               <DatePicker
//                 selected={appointmentDate}
//                 onChange={handleAppointmentDateChange}
//                 className="custom-datepicker custom-datepicker__input"
//                 minDate={new Date()}
//                 dateFormat="dd/MM/yyyy"
//                 value = {formData.appointmentDate}
//               />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Order Notes</FormLabel>
//               <Textarea
//                 name="orderNotes"
//                 value={formData.orderNotes}
//                 onChange={handleInputChange}
//                 placeholder="Enter any additional notes"
//                 // borderColor="grey"
//               />
//             </FormControl>

//             <Button type="submit" colorScheme="pink" size="lg" width="full">
//               Submit
//             </Button>
//           </VStack>
//         </Box>

//         {/* Right Column for Larger Devices */}
//         <Box
//           flex="1"
//           p={5}
//           boxShadow="lg"
//           borderRadius="md"
//           bg="white"
//           display={{ base: "none", lg: "block" }}
//           maxWidth="400px"
//         >
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             How We Work
//           </Heading>
//           <Text mb={3}>
//             At Cotton Candy, we bring the luxury of custom tailoring to your doorstep. Here’s how it works:
//           </Text>
//           <VStack align="start" spacing={2}>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Book your appointment online.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Our tailor visits your location for measurements.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Your custom dress is delivered within 7 days.</Text>
//             </Flex>
//           </VStack>

//           {/* Operation Hours */}

//           {/* <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//             Operation Hours
//           </Heading>
//           <Text mb={2}>
//             <FaClock /> Monday - Friday: 10:00 AM - 6:00 PM
//           </Text>
//           <Text mb={2}>
//             <FaClock /> Saturday: 11:00 AM - 4:00 PM
//           </Text>
//           <Text mb={2}>
//             <FaClock /> Sunday: Closed
//           </Text> */}

//           <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Operation Hours
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text ml={2}>Monday - Friday: 10:00 AM - 6:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="orange" />
//             <Text align = 'start' color = "red" ml={2}>Sunday: Closed</Text>
//           </Flex>
//         </VStack>

//           {/* Contact Information */}
//           {/* <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//             Contact Us
//           </Heading>
//           <Text mb={2}>
//             <FaPhone /> +1 (555) 123-4567
//           </Text>
//           <Text mb={2}>
//             <FaEnvelope /> support@cottoncandy.com
//           </Text> */}


//         <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Contact Us
//         </Heading>

//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaPhone color="#b82d92" />
//             <Text ml={2}>9629705557</Text>
//           </Flex>
//           <Flex align="center">
//             <FaEnvelope color="#b82d92" />
//             <Text align='start' ml={2}>support@cottoncandy.com</Text>
//           </Flex>
//           <Flex align="center">
//             <FaGlobe color="#b82d92" />
//             <Text align = 'start' ml={2}>India , UK , UAE</Text>
//           </Flex>
//         </VStack>

//         </Box>
//       </Flex>

//       {/* Footer for Smaller Devices */}
//       <Box
//         display={{ base: "block", lg: "none" }}
//         mt={6}
//         p={5}
//         boxShadow="lg"
//         borderRadius="md"
//         bg="white"
//         textAlign="center"
//       >
//         <Divider mb={4} />
//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           How We Work
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text ml={2}>Book your appointment online.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text align='start' ml={2}>Our tailor visits your location for measurements.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text align = 'start' ml={2}>Your custom dress is delivered within 7 days.</Text>
//           </Flex>
//         </VStack>

//          {/* Operational Hours */}
//          <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Operation Hours
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text ml={2}>Monday - Friday: 10:00 AM - 6:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="orange" />
//             <Text align = 'start' ml={2} color='red'>Sunday: Closed</Text>
//           </Flex>
//         </VStack>


//         {/* Contact Information  */}

//         <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Contact Us
//         </Heading>

//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaPhone color="#b82d92" />
//             <Text ml={2}>9629705557</Text>
//           </Flex>
//           <Flex align="center">
//             <FaEnvelope color="#b82d92" />
//             <Text align='start' ml={2}>support@cottoncandy.com</Text>
//           </Flex>
//           <Flex align="center">
//             <FaGlobe color="#b82d92" />
//             <Text align = 'start' ml={2}>India , UK , UAE</Text>
//           </Flex>
//         </VStack>

//       </Box>
//     </Box>
//   );
// };


// Version 13  , Working version

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Select,
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Divider,
//   Alert,
//   AlertIcon,
//   useToast,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";
// import { MdCheckCircle } from "react-icons/md";

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import '../css/DatePicker.css';
// import usePostData from "../hooks/usePostData";
// import { useForm , Controller } from "react-hook-form";


// import city1 from "../assets/cities/city1.jpg";
// import city2 from "../assets/cities/city2.jpg";
// import city3 from "../assets/cities/city3.jpg";
// import axios from "axios";

// export const TailoringHome = () => {
//   // State for image slider

//   const { register, handleSubmit, setValue ,control} = useForm();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [city1, city2, city3];

//   const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

//   const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/tailoringOrder');

//   // Date Picker Function 

//   const onSubmit = async (data) => {
//     console.log("Data from Form: ", data);
//    await backendConnection(data);
//     //setAlert(true);
// };

 

//   const handleAppointmentDateChange = (date: Date | null) => {
//     if (!date) return;
  
//     const istDate = new Date(date);
//     istDate.setHours(istDate.getHours() + 5);
//     istDate.setMinutes(istDate.getMinutes() + 30);
  
//     setAppointmentDate(istDate); // Update local state
//     setValue('appointmentDate', istDate); // Update React Hook Form state
//   };


//   const toast = useToast(); // Chakra UI toast for notifications

//   // Effect to change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   // Smooth scroll to form
//   const scrollToForm = () => {
//     const formSection = document.getElementById("bookingForm");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value, // Handle file input separately
    
//     }));
//   };

//   // Handle form submission
//   const backendConnection = async(data) => {

    


//     // // Image Upload to AWS S3 and URL Generation Logic Begins 

//     const formData = new FormData();

//     for (let i = 0; i < data.customDesignImage.length; i++) {
//         formData.append('photos', data.customDesignImage[i]);
//     }

//     console.log("Backend Data Object:");
//     for (let pair of formData.entries()) {
//         console.log(pair[0] + ', ' + pair[1]);
//     }

//     try {
//         const s3Response = await axios.post("https://admee.in:3003/aws/upload", formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 "Access-Control-Allow-Origin": "*",
//                 "Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"
//             }
//         });
//         console.log(s3Response.data);
//         data.customDesignImage = s3Response.data.imageURLs

        

//       } catch (error) {
//         console.error('Error uploading images to AWS S3:', error);
//        // setResponseData(error)
//       }

//         console.log("Custom IMage URL :" +data.customDesignImage)
        
//     // // Image upload to AWS S3 and URL Generation Logic Ends

//      postData(data);

   
//   };

//   return (
//     <Box p={5} maxWidth="1200px" margin="auto">
//       {/* Header Banner with Offer */}
//       <Alert status="success" variant="solid" mb={5} borderRadius="md">
//         <AlertIcon />
//         All Tailoring Services Free Until Nov 15, 2024! Book Now!
//       </Alert>

//       {/* Image Slider for 'How We Work' Section */}
//       <Box mb={5} maxWidth="900px" margin="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
//         <Image
//           src={images[currentImageIndex]}
//           alt="How We Work"
//           borderRadius="md"
//           objectFit="cover"
//           width="100%"
//           height="300px"
//           transition="opacity 1s ease-in-out"
//         />
//       </Box>

//       {/* Book Appointment Button */}
//       <Box textAlign="center" mb={5} marginTop={3}>
//         <Button onClick={scrollToForm} colorScheme="pink" size="lg">
//           Book Tailoring Appointment
//         </Button>
//       </Box>

//       <Flex direction={{ base: "column", lg: "row" }} gap={6}>
//         {/* Left Column: Form */}
        
//         <Box flex="1" p={5} boxShadow="lg" borderRadius="md" bg="white" id="bookingForm">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* <VStack spacing={4} align="stretch" as="form" onSubmit={handleSubmit}> */}
//           <VStack spacing={4} align="stretch">
//             <Heading as="h2" size="lg" textAlign="center" mb={5} color="pink.500">
//               Tailoring Appointment Form
//             </Heading>

//             <FormControl>
//               <FormLabel >Name</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaUser color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                 {...register('name')}
//                   type="text"
//                   name="name"
//                   //value={formData.name}
//                   //onChange={handleInputChange}
//                   placeholder="Enter your name"
//                   required
//                   // borderColor="grey"
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Email</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaEnvelope color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                 {...register('email')}
//                   type="email"
//                   name="email"
                 
//                   placeholder="Enter your email"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Phone</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaPhone color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                 {...register('phoneNumber')}
//                   type="tel"
                  
//                   placeholder="Enter your phone number"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>What to Stitch</FormLabel>
//               <Select
//               {...register('stitchType')}
               
//                 placeholder="Select option"
//                 // borderColor="grey"
//                 required
//               >
//                 <option value="blouse">Blouse</option>
//                 <option value="suit">Suit</option>
//                 <option value="dress">Dress</option>
//               </Select>
//             </FormControl>

//             <FormControl>
//               <FormLabel>Custom Design (Optional)</FormLabel>
//               <Input
//               {...register('customDesignImage')}
//                 type="file"
                
//                 accept="image/*" 
//                 multiple
//                 // borderColor="grey"
                
//               />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Address</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   {/* <FaMapMarkerAlt color="gray.300" /> */}
//                 </InputLeftElement>
//                 <Textarea
//                 {...register('address')}
                 
//                   placeholder="Enter your address"
//                   // borderColor="grey"
//                   required
//                 />
//               </InputGroup>
//             </FormControl>

//             <FormControl>
//               <FormLabel>City</FormLabel>
//               <Input
//               {...register('city')}
//                 type="text"
                
//                 placeholder="Enter your city"
//                 // borderColor="grey"
//                 required
//               />
//             </FormControl>

//             {/* <FormControl>
//               <FormLabel>Country</FormLabel>
//               <Input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 placeholder="Enter your country"
//                 required
//               />
//             </FormControl> */}

//             <FormControl>
//               <FormLabel>Pincode</FormLabel>
//               <Input
//               {...register('pincode')}
//                 type="text"
                
//                 placeholder="Enter your pincode"
//                 // borderColor="grey"
//                 required
//               />
//             </FormControl>

//             <FormControl>
//               <FormLabel fontWeight="bold">Appointment Date</FormLabel>
//               <Controller
//                 control={control}
//                 name="appointmentDate"
//                 defaultValue={appointmentDate}
//                 render={({ field: { onChange, value } }) => (
//                   <DatePicker
//                     selected={value}
//                     onChange={(date) => {
//                       handleAppointmentDateChange(date);
//                       onChange(date); // update the form state
//                     }}
//                     className="custom-datepicker custom-datepicker__input"
//                     minDate={new Date()}
//                     dateFormat="dd/MM/yyyy"
//                   />
//                 )}
//               />
//             </FormControl>

//             <FormControl>
//               <FormLabel>Order Notes</FormLabel>
//               <Textarea
//               {...register('orderNotes')}
//                 placeholder="Enter any additional notes"
//                 // borderColor="grey"
//               />
//             </FormControl>

//             <Button type="submit" colorScheme="pink" size="lg" width="full">
//               Submit
//             </Button>
//           </VStack>
//         </form>
//         </Box>

//         {/* Right Column for Larger Devices */}
//         <Box
//           flex="1"
//           p={5}
//           boxShadow="lg"
//           borderRadius="md"
//           bg="white"
//           display={{ base: "none", lg: "block" }}
//           maxWidth="400px"
//         >
//           <Heading as="h3" size="md" mb={3} color="pink.500">
//             How We Work
//           </Heading>
//           <Text mb={3}>
//             At Cotton Candy, we bring the luxury of custom tailoring to your doorstep. Here’s how it works:
//           </Text>
//           <VStack align="start" spacing={2}>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Book your appointment online.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Our tailor visits your location for measurements.</Text>
//             </Flex>
//             <Flex align="center">
//               <MdCheckCircle color="green" />
//               <Text ml={2}>Your custom dress is delivered within 7 days.</Text>
//             </Flex>
//           </VStack>
        

//           {/* Operation Hours */}

//           {/* <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//             Operation Hours
//           </Heading>
//           <Text mb={2}>
//             <FaClock /> Monday - Friday: 10:00 AM - 6:00 PM
//           </Text>
//           <Text mb={2}>
//             <FaClock /> Saturday: 11:00 AM - 4:00 PM
//           </Text>
//           <Text mb={2}>
//             <FaClock /> Sunday: Closed
//           </Text> */}

//           <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Operation Hours
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text ml={2}>Monday - Friday: 10:00 AM - 6:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="orange" />
//             <Text align = 'start' color = "red" ml={2}>Sunday: Closed</Text>
//           </Flex>
//         </VStack>


//         <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Contact Us
//         </Heading>

//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaPhone color="#b82d92" />
//             <Text ml={2}>9629705557</Text>
//           </Flex>
//           <Flex align="center">
//             <FaEnvelope color="#b82d92" />
//             <Text align='start' ml={2}>support@cottoncandy.com</Text>
//           </Flex>
//           <Flex align="center">
//             <FaGlobe color="#b82d92" />
//             <Text align = 'start' ml={2}>India , UK , UAE</Text>
//           </Flex>
//         </VStack>

//         </Box>
//       </Flex>

//       {/* Footer for Smaller Devices */}
//       <Box
//         display={{ base: "block", lg: "none" }}
//         mt={6}
//         p={5}
//         boxShadow="lg"
//         borderRadius="md"
//         bg="white"
//         textAlign="center"
//       >
//         <Divider mb={4} />
//         <Heading as="h3" size="md" mb={3} color="pink.500">
//           How We Work
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text ml={2}>Book your appointment online.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text align='start' ml={2}>Our tailor visits your location for measurements.</Text>
//           </Flex>
//           <Flex align="center">
//             <MdCheckCircle color="green" />
//             <Text align = 'start' ml={2}>Your custom dress is delivered within 7 days.</Text>
//           </Flex>
//         </VStack>

//          {/* Operational Hours */}
//          <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Operation Hours
//         </Heading>
//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text ml={2}>Monday - Friday: 10:00 AM - 6:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="green" />
//             <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
//           </Flex>
//           <Flex align="center">
//             <FaClock color="orange" />
//             <Text align = 'start' ml={2} color='red'>Sunday: Closed</Text>
//           </Flex>
//         </VStack>


//         {/* Contact Information  */}

//         <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
//           Contact Us
//         </Heading>

//         <VStack align="start" spacing={2} mb={4}>
//           <Flex align="center">
//             <FaPhone color="#b82d92" />
//             <Text ml={2}>9629705557</Text>
//           </Flex>
//           <Flex align="center">
//             <FaEnvelope color="#b82d92" />
//             <Text align='start' ml={2}>support@cottoncandy.com</Text>
//           </Flex>
//           <Flex align="center">
//             <FaGlobe color="#b82d92" />
//             <Text align = 'start' ml={2}>India , UK , UAE</Text>
//           </Flex>
//         </VStack>

//       </Box>
//     </Box>
//   );
// };



// Version 14 : Clone of 13 with error handlings and Lottie animations


import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Textarea,
  VStack,
  Heading,
  Text,
  Image,
  Divider,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DatePicker.css';
import usePostData from "../hooks/usePostData";
import { useForm , Controller } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';


import city1 from "../assets/cities/city1.jpg";
import city2 from "../assets/cities/city2.jpg";
import city3 from "../assets/cities/city3.jpg";
import axios from "axios";

import Lottie from 'react-lottie';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import loadingAnimation from '../animations/loading.json';

export const TailoringHome = () => {
  // State for image slider
 
  const navigate = useNavigate();

  const { register, handleSubmit, setValue ,control} = useForm();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [city1, city2, city3];

  const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
  //setShowAnimation(false);

  const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/tailoringOrder');

  // Date Picker Function 

  const onSubmit =  (data) => {
    console.log("Data from Form: ", data);
    backendConnection(data);
    //setAlert(true);
};

 

  const handleAppointmentDateChange = (date: Date | null) => {
    if (!date) return;
  
    const istDate = new Date(date);
    istDate.setHours(istDate.getHours() + 5);
    istDate.setMinutes(istDate.getMinutes() + 30);
  
    setAppointmentDate(istDate); // Update local state
    setValue('appointmentDate', istDate); // Update React Hook Form state
  };


  const toast = useToast(); // Chakra UI toast for notifications

  // Effect to change image every 3 seconds
  useEffect(() => {
    setShowAnimation(false);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  useEffect(() => {
    if (responseData) {
      console.log("Response Data Status Value : "+responseData.status)
      if (responseData.status === 201) {
       
        setAnimationType('success');
        setTimeout(() => {
          navigate('/home'); // Navigate to home page after 3 seconds
        }, 3000);
      } else {
        setAnimationType('error');
        setTimeout(() => {
          navigate('/home'); // Navigate back to checkout page after a few seconds
        }, 3000);
       
      }
    } else if (error) {
      setAnimationType('error');
      setTimeout(() => {
        navigate('/home'); // Navigate back to checkout page after a few seconds
      }, 3000);
     
    }
  }, [responseData, error, navigate]);

  // Smooth scroll to form
  const scrollToForm = () => {
    const formSection = document.getElementById("bookingForm");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Handle file input separately
    
    }));
  };

  // Handle form submission
  const backendConnection = async(data) => {

    


    // // Image Upload to AWS S3 and URL Generation Logic Begins 

    const formData = new FormData();

    for (let i = 0; i < data.customDesignImage.length; i++) {
        formData.append('photos', data.customDesignImage[i]);
    }

    console.log("Backend Data Object:");
    for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

    try {
        const s3Response = await axios.post("https://admee.in:3003/aws/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"
            }
        });
        console.log(s3Response.data);
        data.customDesignImage = s3Response.data.imageURLs

        

      } catch (error) {
        console.error('Error uploading images to AWS S3:', error);
       // setResponseData(error)
      }

        console.log("Custom IMage URL :" +data.customDesignImage)
        
    // // Image upload to AWS S3 and URL Generation Logic Ends
      setShowAnimation(true);
      setAnimationType('loading');

     await postData(data);

   
  };

  return (
    <Box p={5} maxWidth="1200px" margin="auto">
            {showAnimation && (
        <Box className="animationContainer">
          {animationType === 'loading' && (
            <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
          )}
          {animationType === 'success' && (
            <Box textAlign="center">
              <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
              <Text>Your order has been successfully placed!</Text>
            </Box>
          )}
          {animationType === 'error' && (
            <Box textAlign="center">
              <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} style={{ width: '150px', height: '150px' }} />
              <Text>{error || "An error occurred, please try again."}</Text>
            </Box>
          )}
        </Box>
      )}
      {/* Header Banner with Offer */}
      {!showAnimation && (
        <>
      <Alert status="success" variant="solid" mb={5} borderRadius="md">
        <AlertIcon />
        All Tailoring Services Free Until Nov 15, 2024! Book Now!
      </Alert>

      {/* Image Slider for 'How We Work' Section */}
      <Box mb={5} maxWidth="900px" margin="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
        <Image
          src={images[currentImageIndex]}
          alt="How We Work"
          borderRadius="md"
          objectFit="cover"
          width="100%"
          height="300px"
          transition="opacity 1s ease-in-out"
        />
      </Box>

      {/* Book Appointment Button */}
      <Box textAlign="center" mb={5} marginTop={3}>
        <Button onClick={scrollToForm} colorScheme="pink" size="lg">
          Book Tailoring Appointment
        </Button>
      </Box>

      <Flex direction={{ base: "column", lg: "row" }} gap={6}>
        {/* Left Column: Form */}
        
        <Box flex="1" p={5} boxShadow="lg" borderRadius="md" bg="white" id="bookingForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <VStack spacing={4} align="stretch" as="form" onSubmit={handleSubmit}> */}
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="lg" textAlign="center" mb={5} color="pink.500">
              Tailoring Appointment Form
            </Heading>

            <FormControl>
              <FormLabel >Name</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaUser color="#b82d92" />
                </InputLeftElement>
                <Input
                {...register('name')}
                  type="text"
                  name="name"
                  //value={formData.name}
                  //onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  // borderColor="grey"
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaEnvelope color="#b82d92" />
                </InputLeftElement>
                <Input
                {...register('email')}
                  type="email"
                  name="email"
                 
                  placeholder="Enter your email"
                  // borderColor="grey"
                  required
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaPhone color="#b82d92" />
                </InputLeftElement>
                <Input
                {...register('phoneNumber')}
                  type="tel"
                  
                  placeholder="Enter your phone number"
                  // borderColor="grey"
                  required
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel>What to Stitch</FormLabel>
              <Select
              {...register('stitchType')}
               
                placeholder="Select option"
                // borderColor="grey"
                required
              >
                <option value="blouse">Blouse</option>
                <option value="suit">Suit</option>
                <option value="dress">Dress</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Custom Design (Optional)</FormLabel>
              <Input
              {...register('customDesignImage')}
                type="file"
                
                accept="image/*" 
                multiple
                // borderColor="grey"
                
              />
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  {/* <FaMapMarkerAlt color="gray.300" /> */}
                </InputLeftElement>
                <Textarea
                {...register('address')}
                 
                  placeholder="Enter your address"
                  // borderColor="grey"
                  required
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
              {...register('city')}
                type="text"
                
                placeholder="Enter your city"
                // borderColor="grey"
                required
              />
            </FormControl>

            {/* <FormControl>
              <FormLabel>Country</FormLabel>
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter your country"
                required
              />
            </FormControl> */}

            <FormControl>
              <FormLabel>Pincode</FormLabel>
              <Input
              {...register('pincode')}
                type="text"
                
                placeholder="Enter your pincode"
                // borderColor="grey"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="bold">Appointment Date</FormLabel>
              <Controller
                control={control}
                name="appointmentDate"
                defaultValue={appointmentDate}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    selected={value}
                    onChange={(date) => {
                      handleAppointmentDateChange(date);
                      onChange(date); // update the form state
                    }}
                    className="custom-datepicker custom-datepicker__input"
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Order Notes</FormLabel>
              <Textarea
              {...register('orderNotes')}
                placeholder="Enter any additional notes"
                // borderColor="grey"
              />
            </FormControl>

            <Button type="submit" colorScheme="pink" size="lg" width="full">
              Submit
            </Button>
          </VStack>
        </form>
        </Box>

        {/* Right Column for Larger Devices */}
        <Box
          flex="1"
          p={5}
          boxShadow="lg"
          borderRadius="md"
          bg="white"
          display={{ base: "none", lg: "block" }}
          maxWidth="400px"
        >
          <Heading as="h3" size="md" mb={3} color="pink.500">
            How We Work
          </Heading>
          <Text mb={3}>
            At Cotton Candy, we bring the luxury of custom tailoring to your doorstep. Here’s how it works:
          </Text>
          <VStack align="start" spacing={2}>
            <Flex align="center">
              <MdCheckCircle color="green" />
              <Text ml={2}>Book your appointment online.</Text>
            </Flex>
            <Flex align="center">
              <MdCheckCircle color="green" />
              <Text ml={2}>Our tailor visits your location for measurements.</Text>
            </Flex>
            <Flex align="center">
              <MdCheckCircle color="green" />
              <Text ml={2}>Your custom dress is delivered within 7 days.</Text>
            </Flex>
          </VStack>
        

          {/* Operation Hours */}

          {/* <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
            Operation Hours
          </Heading>
          <Text mb={2}>
            <FaClock /> Monday - Friday: 10:00 AM - 6:00 PM
          </Text>
          <Text mb={2}>
            <FaClock /> Saturday: 11:00 AM - 4:00 PM
          </Text>
          <Text mb={2}>
            <FaClock /> Sunday: Closed
          </Text> */}

          <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
          Operation Hours
        </Heading>
        <VStack align="start" spacing={2} mb={4}>
          <Flex align="center">
            <FaClock color="green" />
            <Text ml={2}>Monday - Friday: 10:00 AM - 6:00 PM</Text>
          </Flex>
          <Flex align="center">
            <FaClock color="green" />
            <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
          </Flex>
          <Flex align="center">
            <FaClock color="orange" />
            <Text align = 'start' color = "red" ml={2}>Sunday: Closed</Text>
          </Flex>
        </VStack>


        <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
          Contact Us
        </Heading>

        <VStack align="start" spacing={2} mb={4}>
          <Flex align="center">
            <FaPhone color="#b82d92" />
            <Text ml={2}>9629705557</Text>
          </Flex>
          <Flex align="center">
            <FaEnvelope color="#b82d92" />
            <Text align='start' ml={2}>support@cottoncandy.com</Text>
          </Flex>
          <Flex align="center">
            <FaGlobe color="#b82d92" />
            <Text align = 'start' ml={2}>India , UK , UAE</Text>
          </Flex>
        </VStack>

        </Box>
      </Flex>

      {/* Footer for Smaller Devices */}
      <Box
        display={{ base: "block", lg: "none" }}
        mt={6}
        p={5}
        boxShadow="lg"
        borderRadius="md"
        bg="white"
        textAlign="center"
      >
        <Divider mb={4} />
        <Heading as="h3" size="md" mb={3} color="pink.500">
          How We Work
        </Heading>
        <VStack align="start" spacing={2} mb={4}>
          <Flex align="center">
            <MdCheckCircle color="green" />
            <Text ml={2}>Book your appointment online.</Text>
          </Flex>
          <Flex align="center">
            <MdCheckCircle color="green" />
            <Text align='start' ml={2}>Our tailor visits your location for measurements.</Text>
          </Flex>
          <Flex align="center">
            <MdCheckCircle color="green" />
            <Text align = 'start' ml={2}>Your custom dress is delivered within 7 days.</Text>
          </Flex>
        </VStack>

         {/* Operational Hours */}
         <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
          Operation Hours
        </Heading>
        <VStack align="start" spacing={2} mb={4}>
          <Flex align="center">
            <FaClock color="green" />
            <Text ml={2}>Monday - Friday: 10:00 AM - 6:00 PM</Text>
          </Flex>
          <Flex align="center">
            <FaClock color="green" />
            <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
          </Flex>
          <Flex align="center">
            <FaClock color="orange" />
            <Text align = 'start' ml={2} color='red'>Sunday: Closed</Text>
          </Flex>
        </VStack>


        {/* Contact Information  */}

        <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
          Contact Us
        </Heading>

        <VStack align="start" spacing={2} mb={4}>
          <Flex align="center">
            <FaPhone color="#b82d92" />
            <Text ml={2}>9629705557</Text>
          </Flex>
          <Flex align="center">
            <FaEnvelope color="#b82d92" />
            <Text align='start' ml={2}>support@cottoncandy.com</Text>
          </Flex>
          <Flex align="center">
            <FaGlobe color="#b82d92" />
            <Text align = 'start' ml={2}>India , UK , UAE</Text>
          </Flex>
        </VStack>

      </Box>
      </>
      )}
    </Box>
  );
};