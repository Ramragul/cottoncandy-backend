// Version 1

// import React, { useState } from 'react';
// import {
//     Box,
//     Heading,
//     Text,
//     Button,
//     Input,
//     Select,
//     Checkbox,
//     FormControl,
//     FormLabel,
//     useToast,
//     useDisclosure,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalCloseButton,
//     ModalBody,
//     ModalFooter,
//     Center,
//     Spinner,
//     Stack,
//     Divider,
//     FormErrorMessage,
//     useBreakpointValue,
// } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';  // Correct

// import 'react-datepicker/dist/react-datepicker.css'; // Include react-datepicker CSS

// export const ServiceBookingPage: React.FC = () => {
//     const navigate = useNavigate();
//     const toast = useToast();
//     const { state } = useLocation();
//     const { serviceId, partnerName, variants, policies } = state || {};
    
//     // Local state for form data
//     const [selectedVariant, setSelectedVariant] = useState('');
//     const [serviceDate, setServiceDate] = useState<Date | null>(null);
//     const [eventDate, setEventDate] = useState<Date | null>(null);
//     const [eventType, setEventType] = useState('');
//     const [agreeToPolicies, setAgreeToPolicies] = useState(false);

//     const handleBooking = () => {
//         if (!agreeToPolicies) {
//             toast({
//                 title: 'Error',
//                 description: 'You must agree to the policies before booking.',
//                 status: 'error',
//                 duration: 5000,
//                 isClosable: true,
//             });
//             return;
//         }

//         // Here, you can process the booking logic.
//         toast({
//             title: 'Booking Successful',
//             description: `Your service has been booked successfully with ${partnerName}.`,
//             status: 'success',
//             duration: 5000,
//             isClosable: true,
//         });

//         // Redirect to confirmation or home page
//         navigate('/home');
//     };

//     return (
//         <Box p={6}>
//             <Heading size="lg" mb={4}>Book Service with {partnerName}</Heading>
//             <Divider my={4} />

//             {/* Service ID */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Service ID</FormLabel>
//                 <Input value={serviceId} isReadOnly />
//             </FormControl>

//             {/* Service Variant */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Select Service Variant</FormLabel>
//                 <Select
//                     value={selectedVariant}
//                     onChange={(e) => setSelectedVariant(e.target.value)}
//                     placeholder="Select a variant"
//                 >
//                     {variants.map((variant) => (
//                         <option key={variant.variant_id} value={variant.variant_name}>
//                             {variant.variant_name} - ₹{variant.price}
//                         </option>
//                     ))}
//                 </Select>
//             </FormControl>

//             {/* Service Date */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Service Date & Time</FormLabel>
//                 <DatePicker
//                     selected={serviceDate}
//                     onChange={(date: Date) => setServiceDate(date)}
//                     showTimeSelect
//                     dateFormat="Pp"
//                     placeholderText="Select service date and time"
//                 />
//             </FormControl>

//             {/* Event Type */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Event Type</FormLabel>
//                 <Select
//                     value={eventType}
//                     onChange={(e) => setEventType(e.target.value)}
//                     placeholder="Select event type"
//                 >
//                     <option value="Wedding">Wedding</option>
//                     <option value="Party">Party</option>
//                     <option value="Corporate">Corporate</option>
//                     <option value="Other">Other</option>
//                 </Select>
//             </FormControl>

//             {/* Event Date */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Event Date & Time</FormLabel>
//                 <DatePicker
//                     selected={eventDate}
//                     onChange={(date: Date) => setEventDate(date)}
//                     showTimeSelect
//                     dateFormat="Pp"
//                     placeholderText="Select event date and time"
//                 />
//             </FormControl>

//             {/* Agree to Policies */}
//             <Box mb={4}>
//                 <Checkbox
//                     isChecked={agreeToPolicies}
//                     onChange={() => setAgreeToPolicies(!agreeToPolicies)}
//                     colorScheme="pink"
//                 >
//                     I agree to the{' '}
//                     <Button variant="link" colorScheme="pink" onClick={() => alert(policies)}>
//                         policies and licenses
//                     </Button>
//                 </Checkbox>
//             </Box>

//             {/* Book Button */}
//             <Button
//                 colorScheme="pink"
//                 size="lg"
//                 isFullWidth
//                 isDisabled={!agreeToPolicies}
//                 onClick={handleBooking}
//             >
//                 Book Now
//             </Button>
//         </Box>
//     );
// };

// export default ServiceBookingPage;


// Version 2 : Enhancement and slight design fixes to version 1

// import React, { useState } from 'react';
// import {
//     Box,
//     Heading,
//     Text,
//     Button,
//     Input,
//     Select,
//     Checkbox,
//     FormControl,
//     FormLabel,
//     useToast,
//     Divider,
//     VStack,
//     Center,
//     Spinner,
// } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker'; // Correct import
// import 'react-datepicker/dist/react-datepicker.css'; // Include react-datepicker CSS

// export const ServiceBookingPage: React.FC = () => {
//     const navigate = useNavigate();
//     const toast = useToast();
//     const { state } = useLocation();
//     const { serviceId, partnerName, variants, policies } = state || {};

//     // Local state for form data
//     const [selectedVariant, setSelectedVariant] = useState('');
//     const [serviceDate, setServiceDate] = useState<Date | null>(null);
//     const [eventDate, setEventDate] = useState<Date | null>(null);
//     const [eventType, setEventType] = useState('');
//     const [agreeToPolicies, setAgreeToPolicies] = useState(false);
    
//     // New fields
//     const [address, setAddress] = useState('');
//     const [pincode, setPincode] = useState('');
//     const [city, setCity] = useState('');
//     const [contactNumber, setContactNumber] = useState('');
//     const [email, setEmail] = useState('');

//     const handleBooking = () => {
//         if (!agreeToPolicies) {
//             toast({
//                 title: 'Error',
//                 description: 'You must agree to the policies before booking.',
//                 status: 'error',
//                 duration: 5000,
//                 isClosable: true,
//             });
//             return;
//         }

//         // Capture all fields and prepare data to send to the backend (you will handle the API part later)
//         const bookingData = {
//             serviceId,
//             partnerName,
//             selectedVariant,
//             serviceDate,
//             eventDate,
//             eventType,
//             address,
//             pincode,
//             city,
//             contactNumber,
//             email,
//         };

//         // For now, show a success toast (You can replace this with actual API call later)
//         toast({
//             title: 'Booking Successful',
//             description: `Your service has been booked successfully with ${partnerName}.`,
//             status: 'success',
//             duration: 5000,
//             isClosable: true,
//         });

//         // Redirect to confirmation or home page
//         navigate('/home');
//     };

//     return (
//         <Box p={6} maxW="lg" mx="auto">
//             <Heading size="lg" mb={4}>Book Service with {partnerName}</Heading>
//             <Divider my={4} />

//             {/* Service ID */}
//             {/* <FormControl isRequired mb={4}>
//                 <FormLabel>Service ID</FormLabel>
//                 <Input value={serviceId} isReadOnly />
//             </FormControl> */}

//             {/* Service Variant */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Select Service Variant</FormLabel>
//                 <Select
//                     value={selectedVariant}
//                     onChange={(e) => setSelectedVariant(e.target.value)}
//                     placeholder="Select a variant"
//                 >
//                     {variants.map((variant) => (
//                         <option key={variant.variant_id} value={variant.variant_name}>
//                             {variant.variant_name} - ₹{variant.price}
//                         </option>
//                     ))}
//                 </Select>
//             </FormControl>

//             {/* Service Date */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Service Date & Time</FormLabel>
//                 <Box width="100%" mb={2}>
//                     <DatePicker
//                         selected={serviceDate}
//                         onChange={(date: Date) => setServiceDate(date)}
//                         showTimeSelect
//                         dateFormat="Pp"
//                         placeholderText="Select service date and time"
//                         className="datepicker"
//                         style={{ width: '100%' }}
//                     />
//                 </Box>
//             </FormControl>

//             {/* Event Type */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Event Type</FormLabel>
//                 <Select
//                     value={eventType}
//                     onChange={(e) => setEventType(e.target.value)}
//                     placeholder="Select event type"
//                 >
//                     <option value="Wedding">Wedding</option>
//                     <option value="Party">Party</option>
//                     <option value="Corporate">Corporate</option>
//                     <option value="Other">Other</option>
//                 </Select>
//             </FormControl>

//             {/* Event Date */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Event Date & Time</FormLabel>
//                 <Box width="100%" mb={2}>
//                     <DatePicker
//                         selected={eventDate}
//                         onChange={(date: Date) => setEventDate(date)}
//                         showTimeSelect
//                         dateFormat="Pp"
//                         placeholderText="Select event date and time"
//                         style={{ width: '100%' }}
//                     />
//                 </Box>
//             </FormControl>

//             {/* Address */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Address</FormLabel>
//                 <Input
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     placeholder="Enter your address"
//                 />
//             </FormControl>

//             {/* Pincode */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Pincode</FormLabel>
//                 <Input
//                     value={pincode}
//                     onChange={(e) => setPincode(e.target.value)}
//                     placeholder="Enter your pincode"
//                     type="number"
//                 />
//             </FormControl>

//             {/* City */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>City</FormLabel>
//                 <Input
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     placeholder="Enter your city"
//                 />
//             </FormControl>

//             {/* Contact Number */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Contact Number</FormLabel>
//                 <Input
//                     value={contactNumber}
//                     onChange={(e) => setContactNumber(e.target.value)}
//                     placeholder="Enter your contact number"
//                     type="tel"
//                 />
//             </FormControl>

//             {/* Email */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     type="email"
//                 />
//             </FormControl>

//             {/* Agree to Policies */}
//             <Box mb={4}>
//                 <Checkbox
//                     isChecked={agreeToPolicies}
//                     onChange={() => setAgreeToPolicies(!agreeToPolicies)}
//                     colorScheme="pink"
//                 >
//                     I agree to the{' '}
//                     <Button variant="link" colorScheme="pink" onClick={() => alert(policies)}>
//                         policies and licenses
//                     </Button>
//                 </Checkbox>
//             </Box>

//             {/* Book Button */}
//             <Button
//                 colorScheme="pink"
//                 size="lg"
//                 isFullWidth
//                 isDisabled={!agreeToPolicies}
//                 onClick={handleBooking}
//             >
//                 Book Now
//             </Button>
//         </Box>
//     );
// };

// export default ServiceBookingPage;


// Version 3 : Enhancement to version 2

// import React, { useState } from 'react';
// import {
//     Box,
//     Heading,
//     Text,
//     Button,
//     Input,
//     Select,
//     Checkbox,
//     FormControl,
//     FormLabel,
//     useToast,
//     Divider,
//     Grid,
//     GridItem,
//     Center,
//     Spinner,
// } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker'; // Correct import
// import 'react-datepicker/dist/react-datepicker.css'; // Include react-datepicker CSS

// export const ServiceBookingPage: React.FC = () => {
//     const navigate = useNavigate();
//     const toast = useToast();
//     const { state } = useLocation();
//     const { serviceId, partnerName, variants, policies } = state || {};

//     // Local state for form data
//     const [selectedVariant, setSelectedVariant] = useState('');
//     const [serviceDate, setServiceDate] = useState<Date | null>(null);
//     const [eventDate, setEventDate] = useState<Date | null>(null);
//     const [eventType, setEventType] = useState('');
//     const [agreeToPolicies, setAgreeToPolicies] = useState(false);

//     // New fields
//     const [address, setAddress] = useState('');
//     const [pincode, setPincode] = useState('');
//     const [city, setCity] = useState('');
//     const [contactNumber, setContactNumber] = useState('');
//     const [email, setEmail] = useState('');

//     const handleBooking = () => {
//         if (!agreeToPolicies) {
//             toast({
//                 title: 'Error',
//                 description: 'You must agree to the policies before booking.',
//                 status: 'error',
//                 duration: 5000,
//                 isClosable: true,
//             });
//             return;
//         }

//         // Capture all fields and prepare data to send to the backend (you will handle the API part later)
//         const bookingData = {
//             serviceId,
//             partnerName,
//             selectedVariant,
//             serviceDate,
//             eventDate,
//             eventType,
//             address,
//             pincode,
//             city,
//             contactNumber,
//             email,
//         };

//         // For now, show a success toast (You can replace this with actual API call later)
//         toast({
//             title: 'Booking Successful',
//             description: `Your service has been booked successfully with ${partnerName}.`,
//             status: 'success',
//             duration: 5000,
//             isClosable: true,
//         });

//         // Redirect to confirmation or home page
//         navigate('/home');
//     };

//     return (
//         <Box p={6} maxW="lg" mx="auto">
//             <Heading size="lg" mb={4}>Book Service with {partnerName}</Heading>
//             <Divider my={4} />

//             {/* Service ID */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Service ID</FormLabel>
//                 <Input value={serviceId} isReadOnly />
//             </FormControl>

//             {/* Service Variant */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Select Service Variant</FormLabel>
//                 <Select
//                     value={selectedVariant}
//                     onChange={(e) => setSelectedVariant(e.target.value)}
//                     placeholder="Select a variant"
//                 >
//                     {variants.map((variant) => (
//                         <option key={variant.variant_id} value={variant.variant_name}>
//                             {variant.variant_name} - ₹{variant.price}
//                         </option>
//                     ))}
//                 </Select>
//             </FormControl>

//             {/* Layout for Date Picker and Other Fields */}
//             <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} mb={4}>
//                 {/* Service Date */}
//                 <GridItem>
//                     <FormControl isRequired>
//                         <FormLabel>Service Date & Time</FormLabel>
//                         <Box width="100%" mb={2}>
//                             <DatePicker
//                                 selected={serviceDate}
//                                 onChange={(date: Date) => setServiceDate(date)}
//                                 showTimeSelect
//                                 dateFormat="Pp"
//                                 placeholderText="Select service date and time"
//                                 style={{ width: '100%' }}
//                             />
//                         </Box>
//                     </FormControl>
//                 </GridItem>

//                 {/* Event Date */}
//                 <GridItem>
//                     <FormControl isRequired>
//                         <FormLabel>Event Date & Time</FormLabel>
//                         <Box width="100%" mb={2}>
//                             <DatePicker
//                                 selected={eventDate}
//                                 onChange={(date: Date) => setEventDate(date)}
//                                 showTimeSelect
//                                 dateFormat="Pp"
//                                 placeholderText="Select event date and time"
//                                 style={{ width: '100%' }}
//                             />
//                         </Box>
//                     </FormControl>
//                 </GridItem>
//             </Grid>

//             {/* Event Type */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Event Type</FormLabel>
//                 <Select
//                     value={eventType}
//                     onChange={(e) => setEventType(e.target.value)}
//                     placeholder="Select event type"
//                 >
//                     <option value="Wedding">Wedding</option>
//                     <option value="Party">Party</option>
//                     <option value="Corporate">Corporate</option>
//                     <option value="Other">Other</option>
//                 </Select>
//             </FormControl>

//             {/* Address */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Address</FormLabel>
//                 <Input
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     placeholder="Enter your address"
//                 />
//             </FormControl>

//             {/* Pincode */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Pincode</FormLabel>
//                 <Input
//                     value={pincode}
//                     onChange={(e) => setPincode(e.target.value)}
//                     placeholder="Enter your pincode"
//                     type="number"
//                 />
//             </FormControl>

//             {/* City */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>City</FormLabel>
//                 <Input
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     placeholder="Enter your city"
//                 />
//             </FormControl>

//             {/* Contact Number */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Contact Number</FormLabel>
//                 <Input
//                     value={contactNumber}
//                     onChange={(e) => setContactNumber(e.target.value)}
//                     placeholder="Enter your contact number"
//                     type="tel"
//                 />
//             </FormControl>

//             {/* Email */}
//             <FormControl isRequired mb={4}>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     type="email"
//                 />
//             </FormControl>

//             {/* Agree to Policies */}
//             <Box mb={4}>
//                 <Checkbox
//                     isChecked={agreeToPolicies}
//                     onChange={() => setAgreeToPolicies(!agreeToPolicies)}
//                     colorScheme="pink"
//                 >
//                     I agree to the{' '}
//                     <Button variant="link" colorScheme="pink" onClick={() => alert(policies)}>
//                         policies and licenses
//                     </Button>
//                 </Checkbox>
//             </Box>

//             {/* Book Button */}
//             <Button
//                 colorScheme="pink"
//                 size="lg"
//                 isFullWidth
//                 isDisabled={!agreeToPolicies}
//                 onClick={handleBooking}
//             >
//                 Book Now
//             </Button>
//         </Box>
//     );
// };

// export default ServiceBookingPage;



// Version 4 : Enhancement to 3

// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Select, Checkbox, Text, VStack, Grid, GridItem, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export const ServiceBookingPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     serviceId: '',
//     serviceProvider: '',
//     variant: '',
//     serviceDate: new Date(),
//     eventType: '',
//     eventDate: new Date(),
//     address: '',
//     city: '',
//     pincode: '',
//     contactNumber: '',
//     email: '',
//     agree: false
//   });

//   const [showPolicies, setShowPolicies] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheckboxChange = () => {
//     setFormData({ ...formData, agree: !formData.agree });
//   };

//   const handleDateChange = (date: Date, name: string) => {
//     setFormData({ ...formData, [name]: date });
//   };

//   const handleBookClick = () => {
//     // Handle form submission (you can handle the API call here)
//     console.log(formData);
//   };

//   return (
//     <Box p={6} maxW="1200px" mx="auto">
//       <VStack spacing={4} align="flex-start">
//         <FormControl>
//           <FormLabel>Service ID</FormLabel>
//           <Input type="text" name="serviceId" value={formData.serviceId} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Service Provider</FormLabel>
//           <Input type="text" name="serviceProvider" value={formData.serviceProvider} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Variant</FormLabel>
//           <Select name="variant" value={formData.variant} onChange={handleInputChange}>
//             <option value="">Select Variant</option>
//             {/* These should be dynamically rendered from the state passed down */}
//             <option value="variant1">Variant 1</option>
//             <option value="variant2">Variant 2</option>
//           </Select>
//         </FormControl>

//         <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} width="100%">
//           <GridItem>
//             <FormControl>
//               <FormLabel>Service Date</FormLabel>
//               <DatePicker
//                 selected={formData.serviceDate}
//                 onChange={(date) => handleDateChange(date, 'serviceDate')}
//                 dateFormat="yyyy-MM-dd"
//                 showTimeSelect
//                 timeIntervals={15}
//                 timeFormat="HH:mm"
//                 className="chakra-datepicker"
//                 wrapperClassName="chakra-datepicker-wrapper"
//                 popperPlacement="auto"
//                 popperModifiers={{
//                   preventOverflow: {
//                     enabled: true,
//                     boundariesElement: 'viewport',
//                   },
//                 }}
//               />
//             </FormControl>
//           </GridItem>
//           <GridItem>
//             <FormControl>
//               <FormLabel>Event Type</FormLabel>
//               <Input type="text" name="eventType" value={formData.eventType} onChange={handleInputChange} />
//             </FormControl>
//           </GridItem>
//         </Grid>

//         <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} width="100%">
//           <GridItem>
//             <FormControl>
//               <FormLabel>Event Date</FormLabel>
//               <DatePicker
//                 selected={formData.eventDate}
//                 onChange={(date) => handleDateChange(date, 'eventDate')}
//                 dateFormat="yyyy-MM-dd"
//                 showTimeSelect
//                 timeIntervals={15}
//                 timeFormat="HH:mm"
//                 className="chakra-datepicker"
//                 wrapperClassName="chakra-datepicker-wrapper"
//                 popperPlacement="auto"
//                 popperModifiers={{
//                   preventOverflow: {
//                     enabled: true,
//                     boundariesElement: 'viewport',
//                   },
//                 }}
//               />
//             </FormControl>
//           </GridItem>

//           <GridItem>
//             <FormControl>
//               <FormLabel>Address</FormLabel>
//               <Input type="text" name="address" value={formData.address} onChange={handleInputChange} />
//             </FormControl>
//           </GridItem>
//         </Grid>

//         <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} width="100%">
//           <GridItem>
//             <FormControl>
//               <FormLabel>City</FormLabel>
//               <Input type="text" name="city" value={formData.city} onChange={handleInputChange} />
//             </FormControl>
//           </GridItem>

//           <GridItem>
//             <FormControl>
//               <FormLabel>Pincode</FormLabel>
//               <Input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} />
//             </FormControl>
//           </GridItem>
//         </Grid>

//         <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} width="100%">
//           <GridItem>
//             <FormControl>
//               <FormLabel>Contact Number</FormLabel>
//               <Input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
//             </FormControl>
//           </GridItem>

//           <GridItem>
//             <FormControl>
//               <FormLabel>Email</FormLabel>
//               <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//             </FormControl>
//           </GridItem>
//         </Grid>

//         <FormControl>
//           <Checkbox isChecked={formData.agree} onChange={handleCheckboxChange}>
//             Agree to the <Button variant="link" color="pink.500" onClick={() => setShowPolicies(true)}>policies</Button> and license.
//           </Checkbox>
//         </FormControl>

//         <Button 
//           colorScheme="pink" 
//           onClick={handleBookClick} 
//           isDisabled={!formData.agree} 
//           width="100%"
//         >
//           Book
//         </Button>
//       </VStack>

//       {/* Policies Modal */}
//       {showPolicies && (
//         <Box 
//           position="fixed" top="0" left="0" right="0" bottom="0" 
//           bg="rgba(0, 0, 0, 0.5)" display="flex" justifyContent="center" alignItems="center"
//           onClick={() => setShowPolicies(false)}
//         >
//           <Box bg="white" p={6} borderRadius="md" width="80%" maxW="600px" onClick={(e) => e.stopPropagation()}>
//             <Text fontSize="lg" mb={4}>Partner Policies</Text>
//             <Text mb={4}>{formData.policies}</Text>
//             <Button colorScheme="pink" onClick={() => setShowPolicies(false)} width="100%">
//               Close
//             </Button>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ServiceBookingPage;



// Version 5 : Enhancement to Version 4

// import React, { useState, useEffect } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Select, Checkbox, Text, VStack } from '@chakra-ui/react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useLocation } from 'react-router-dom';

// export const ServiceBookingPage: React.FC = () => {
//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     serviceId: '',
//     serviceProvider: '',
//     variant: '',
//     serviceDate: new Date(),
//     eventType: '',
//     eventDate: new Date(),
//     address: '',
//     city: '',
//     pincode: '',
//     contactNumber: '',
//     email: '',
//     agree: false
//   });

//   const [showPolicies, setShowPolicies] = useState(false);

//   // Set initial form data from the location state (previous page)
//   useEffect(() => {
//     if (location.state) {
//       setFormData(prevState => ({
//         ...prevState,
//         serviceId: location.state.serviceId,
//         serviceProvider: location.state.serviceProvider,
//         variant: location.state.variant,
//         // Optionally: Set other fields from location.state if you pass additional data
//       }));
//     }
//   }, [location.state]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheckboxChange = () => {
//     setFormData({ ...formData, agree: !formData.agree });
//   };

//   const handleDateChange = (date: Date, name: string) => {
//     setFormData({ ...formData, [name]: date });
//   };

//   const handleBookClick = () => {
//     // Handle form submission (you can handle the API call here)
//     console.log(formData);
//   };

//   return (
//     <Box p={6} maxW="1200px" mx="auto">
//       <VStack spacing={4} align="flex-start">
//         <FormControl>
//           <FormLabel>Service ID</FormLabel>
//           <Input type="text" name="serviceId" value={formData.serviceId} onChange={handleInputChange} isReadOnly />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Service Provider</FormLabel>
//           <Input type="text" name="serviceProvider" value={formData.serviceProvider} onChange={handleInputChange} isReadOnly />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Variant</FormLabel>
//           <Select name="variant" value={formData.variant} onChange={handleInputChange}>
//             <option value="">Select Variant</option>
//             <option value="variant1">Variant 1</option>
//             <option value="variant2">Variant 2</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <FormLabel>Service Date</FormLabel>
//           <DatePicker
//             selected={formData.serviceDate}
//             onChange={(date) => handleDateChange(date, 'serviceDate')}
//             dateFormat="yyyy-MM-dd HH:mm"
//             showTimeSelect
//             timeIntervals={15}
//             timeFormat="HH:mm"
//             className="chakra-datepicker"
//             wrapperClassName="chakra-datepicker-wrapper"
//             popperPlacement="auto"
//             popperModifiers={{
//               preventOverflow: {
//                 enabled: true,
//                 boundariesElement: 'viewport',
//               },
//             }}
//             customInput={<Input />}
//           />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Event Type</FormLabel>
//           <Select name="eventType" value={formData.eventType} onChange={handleInputChange}>
//             <option value="">Select Event Type</option>
//             <option value="Wedding">Wedding</option>
//             <option value="Party">Party</option>
//             <option value="Corporate">Corporate</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <FormLabel>Event Date</FormLabel>
//           <DatePicker
//             selected={formData.eventDate}
//             onChange={(date) => handleDateChange(date, 'eventDate')}
//             dateFormat="yyyy-MM-dd HH:mm"
//             showTimeSelect
//             timeIntervals={15}
//             timeFormat="HH:mm"
//             className="chakra-datepicker"
//             wrapperClassName="chakra-datepicker-wrapper"
//             popperPlacement="auto"
//             popperModifiers={{
//               preventOverflow: {
//                 enabled: true,
//                 boundariesElement: 'viewport',
//               },
//             }}
//             customInput={<Input />}
//           />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Address</FormLabel>
//           <Input type="text" name="address" value={formData.address} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>City</FormLabel>
//           <Input type="text" name="city" value={formData.city} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Pincode</FormLabel>
//           <Input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Contact Number</FormLabel>
//           <Input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Email</FormLabel>
//           <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl>
//           <Checkbox isChecked={formData.agree} onChange={handleCheckboxChange}>
//             Agree to the <Button variant="link" color="pink.500" onClick={() => setShowPolicies(true)}>policies</Button> and license.
//           </Checkbox>
//         </FormControl>

//         <Button 
//           colorScheme="pink" 
//           onClick={handleBookClick} 
//           isDisabled={!formData.agree} 
//           width="100%"
//         >
//           Book
//         </Button>
//       </VStack>

//       {/* Policies Modal */}
//       {showPolicies && (
//         <Box 
//           position="fixed" top="0" left="0" right="0" bottom="0" 
//           bg="rgba(0, 0, 0, 0.5)" display="flex" justifyContent="center" alignItems="center"
//           onClick={() => setShowPolicies(false)}
//         >
//           <Box bg="white" p={6} borderRadius="md" width="80%" maxW="600px" onClick={(e) => e.stopPropagation()}>
//             <Text fontSize="lg" mb={4}>Partner Policies</Text>
//             <Text mb={4}>{formData.policies}</Text>
//             <Button colorScheme="pink" onClick={() => setShowPolicies(false)} width="100%">
//               Close
//             </Button>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ServiceBookingPage;


// Version 6 : Enhancement to 3



import React, { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    Input,
    Select,
    Checkbox,
    FormControl,
    FormLabel,
    useToast,
    Divider,
    Grid,
    GridItem,
    Center,
    Spinner,
    Textarea,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth } from '../../contexts/AuthContext';
import usePostData from '../../hooks/usePostData';

export const ServiceBookingPage: React.FC = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const { state } = useLocation();
    const { serviceType,serviceId, partnerName, variants, policies,partnerId } = state || {};

    // Local state for form data
    //const [selectedVariant, setSelectedVariant] = useState('');
    const [serviceDate, setServiceDate] = useState<Date | null>(null);
    const [serviceTime, setServiceTime] = useState<string>('');
    const [eventDate, setEventDate] = useState<Date | null>(null);
    const [eventTime, setEventTime] = useState<string>('');
    const [eventType, setEventType] = useState('');
    const [agreeToPolicies, setAgreeToPolicies] = useState(false);
    const { authState } = useAuth();

    // New fields
    const [address, setAddress] = useState('');
    const [clientName, setClientName] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [orderNotes, setOrderNotes] = useState('');
    const [selectedVariant, setSelectedVariant] = useState<{ name: string; price: number; id:number } | null>(null);
    const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/service/booking');

    const handleBooking = () => {
        
        if (!agreeToPolicies) {
            toast({
                title: 'Error',
                description: 'You must agree to the policies before booking.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        // Capture all fields and prepare data to send to the backend (you will handle the API part later)

        console.log("Partner ID :" +partnerId)
        const bookingData = {
            serviceId,
            serviceType,
            partnerId,
            partnerName,
            clientName,
            userId : authState?.userId || '',
            selectedVariantName: selectedVariant?.name || '',
            selectedVariantPrice: selectedVariant?.price || 0,
            selectedVariantId: selectedVariant?.id || '',
            serviceDate,
            serviceTime,
            eventDate,
            eventTime,
            eventType,
            address,
            pincode,
            city,
            contactNumber,
            email,
            orderNotes,
        };

        console.log("Booking Data" +JSON.stringify(bookingData))
        backendConnection(bookingData);

        // For now, show a success toast (You can replace this with actual API call later)


        // Redirect to confirmation or home page
        navigate('/home');
    };

    const backendConnection = async(data) => {

        // // Image upload to AWS S3 and URL Generation Logic Ends
        // setShowAnimation(true);
        // setAnimationType('loading');
        console.log("Inside Post Data logic boss")
       await postData(data);
       toast({
        title: 'Booking Successful',
        description: `Your service has been booked successfully with ${partnerName}.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
    });
      };
    return (
        <Box p={6} maxW="lg" mx="auto">
            <Heading size="lg" mb={4}>Book Service with {partnerName}</Heading>
            <Divider my={4} />

            {/* Service ID */}
            <FormControl isRequired mb={4}>
                <FormLabel>Service Type</FormLabel>
                <Input value={serviceType} isReadOnly bgColor="pink.500" color="white"/>
            </FormControl>

            {/* Service Variant */}
            {/* <FormControl isRequired mb={4}>
                <FormLabel>Select Service Variant</FormLabel>
                <Select
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    placeholder="Select a variant"
                >
                    {variants.map((variant) => (
                        <option key={variant.variant_id} value={variant.variant_name-variant.price}>
                            {variant.variant_name} - ₹{variant.price}
                        </option>
                    ))}
                </Select>
            </FormControl> */}

            <FormControl isRequired mb={4}>
                <FormLabel>Select Service Variant</FormLabel>
                <Select
                    value={selectedVariant ? selectedVariant.name : ''}
                    onChange={(e) => {
                        const selected = variants.find(variant => variant.variant_name === e.target.value);
                        if (selected) {
                            setSelectedVariant({ name: selected.variant_name, price: selected.price, id:selected.variant_id });
                        }
                    }}
                    placeholder="Select a variant"
                >
                    {variants.map((variant) => (
                        <option key={variant.variant_id} value={variant.variant_name}>
                            {variant.variant_name} - ₹{variant.price}
                        </option>
                    ))}
                </Select>
            </FormControl>

            {/* Client Name */}
            <FormControl isRequired mb={4}>
                <FormLabel>Name</FormLabel>
                <Input
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter your Name"
            />
            </FormControl>


            {/* Layout for Date Picker and Other Fields */}
            <Grid templateColumns={['1fr', '1fr', '1fr 1fr']} gap={6} mb={4}>
                {/* Service Date */}
                <GridItem w="100%" minWidth="250px">
                    <FormControl isRequired>
                        <FormLabel>Service Date</FormLabel>
                        <Box width="100%" mb={2}>
                            <DatePicker
                                selected={serviceDate}
                                onChange={(date: Date) => setServiceDate(date)}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Select service date"
                                style={{ width: '100%' }}
                            />
                        </Box>
                    </FormControl>
                </GridItem>

                {/* Service Time */}
                <GridItem w="100%" minWidth="250px">
                    <FormControl isRequired>
                        <FormLabel>Service Time</FormLabel>
                        <Input
                            value={serviceTime}
                            onChange={(e) => setServiceTime(e.target.value)}
                            placeholder="Select service time (HH:MM)"
                            type="time"
                            width="100%"
                        />
                    </FormControl>
                </GridItem>
            </Grid>

            {/* Event Date */}
            <Grid templateColumns={['1fr', '1fr', '1fr 1fr']} gap={6} mb={4}>
                {/* Service Date */}
                <GridItem w="100%" minWidth="250px">
            <FormControl isRequired mb={4}>
                <FormLabel>Event Date</FormLabel>
                <Box width="100%" mb={2}>
                    <DatePicker
                        selected={eventDate}
                        onChange={(date: Date) => setEventDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select event date"
                        style={{ width: '100%' }}
                    />
                </Box>
            </FormControl>
            </GridItem>

            {/* Event Time */}
            <GridItem w="100%" minWidth="250px">
            <FormControl isRequired mb={4}>
                <FormLabel>Event Time</FormLabel>
                <Input
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    placeholder="Select event time (HH:MM)"
                    type="time"
                    width="100%"
                />
            </FormControl>
            </GridItem>
            </Grid>

            {/* Event Type */}
            <FormControl isRequired mb={4}>
                <FormLabel>Event Type</FormLabel>
                <Select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    placeholder="Select event type"
                >
                    <option value="Wedding">Wedding</option>
                    <option value="Party">Party</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Other">Other</option>
                </Select>
            </FormControl>

            {/* Address */}
            <FormControl isRequired mb={4}>
                <FormLabel>Address</FormLabel>
                <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                />
            </FormControl>

            {/* Pincode */}
            <FormControl isRequired mb={4}>
                <FormLabel>Pincode</FormLabel>
                <Input
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter your pincode"
                    type="number"
                />
            </FormControl>

            {/* City */}
            <FormControl isRequired mb={4}>
                <FormLabel>City</FormLabel>
                <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city"
                />
            </FormControl>

            {/* Contact Number */}
            <FormControl isRequired mb={4}>
                <FormLabel>Contact Number</FormLabel>
                <Input
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="Enter your contact number"
                    type="tel"
                />
            </FormControl>

            {/* Email */}
            <FormControl isRequired mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    type="email"
                />
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel>Order Notes</FormLabel>
                <Textarea
                    value={orderNotes}
                    rows={4}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Say something about your event"
                   
                />
            </FormControl>

            {/* Agree to Policies */}
            <Box mb={4}>
                <Checkbox
                    isChecked={agreeToPolicies}
                    onChange={() => setAgreeToPolicies(!agreeToPolicies)}
                    colorScheme="pink"
                >
                    I agree to the{' '}
                    <Button variant="link" colorScheme="pink" onClick={() => alert(policies)}>
                        policies and licenses
                    </Button>
                </Checkbox>
            </Box>

            {/* Book Button */}
            <Button
                colorScheme="pink"
                size="lg"
                isFullWidth
                isDisabled={!agreeToPolicies}
                onClick={handleBooking}
            >
                Book Now
            </Button>
        </Box>
    );
};

export default ServiceBookingPage;

