// Version 1 : Working Version


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
// import { useNavigate, useLocation } from 'react-router-dom';


// import city1 from "../assets/cities/city1.jpg";
// import city2 from "../assets/cities/city2.jpg";
// import city3 from "../assets/cities/city3.jpg";
// import axios from "axios";

// import Lottie from 'react-lottie';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';

// export const TailoringHome = () => {
//   // State for image slider
 
//   const navigate = useNavigate();

//   const location = useLocation();

//   // const {productName , productId , productCategory ,productImageURL} = location.state || null

//   const { 
//     productName = '', 
//     productId = '', 
//     productCategory = '', 
//     productImageURL = '' 
//   } = location.state || {};
  

//   console.log("Proudct Name and ID from tailoring booking page "+productName + "," +productId + "," +productCategory)
//   const { register, handleSubmit, setValue ,control} = useForm();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [city1, city2, city3];

//   const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   //setShowAnimation(false);

//   const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/tailoringOrder');

//   // Date Picker Function 

//   const onSubmit =  (data) => {
//     console.log("Data from Form: ", data);
//     backendConnection(data);
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
//     setShowAnimation(false);
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   useEffect(() => {
//     if (responseData) {
//       console.log("Response Data Status Value : "+responseData.status)
//       if (responseData.status === 201) {
       
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//         setTimeout(() => {
//           navigate('/home'); // Navigate back to checkout page after a few seconds
//         }, 3000);
       
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         navigate('/home'); // Navigate back to checkout page after a few seconds
//       }, 3000);
     
//     }
//   }, [responseData, error, navigate]);

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
//       setShowAnimation(true);
//       setAnimationType('loading');

//      await postData(data);

   
//   };

//   return (
//     <Box p={5} maxWidth="1200px" margin="auto">
//             {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>Your order has been successfully placed!</Text>
//             </Box>
//           )}
//           {animationType === 'error' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>{error || "An error occurred, please try again."}</Text>
//             </Box>
//           )}
//         </Box>
//       )}
//       {/* Header Banner with Offer */}
//       {!showAnimation && (
//         <>
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

//            {/* {productName && <FormControl>
//               <FormLabel >Selected Product</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaUser color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                 {...register('selctedProduct')}
//                   type="text"
//                   name="name"
//                   //value={formData.name}
//                   //onChange={handleInputChange}
//                   placeholder={productName}
//                   isReadOnly
//                   required
//                   // borderColor="grey"
//                 />
//               </InputGroup>
//             </FormControl> } */}

// {/* <FormControl display="flex" alignItems="center">
//   <FormLabel flexShrink={0} mr={4}>
//     Selected Product
//   </FormLabel>
//   <InputGroup flex="1">
//     <InputLeftElement pointerEvents="none">
//       <FaUser color="#b82d92" />
//     </InputLeftElement>
//     <Input
//       {...register('selectedProduct')}
//       type="text"
//       name="name"
//       placeholder={productName}
//       isReadOnly
//       required
//     />
//   </InputGroup>
//   {productImageURL && (
//     <Box ml={4} flexShrink={0}>
//       <Image 
//         src={productImageURL} 
//         alt={productName} 
//         boxSize="50px" 
//         borderRadius="md" 
//         objectFit="cover"
//       />
//     </Box>
//   )}
// </FormControl> */}


// <Box>
//       {/* Title */}
//       <Heading as="h3" size="md" mb={2} color="#b82d92">
//         Selected Item
//       </Heading>

//       {/* Product Display */}
//       <Flex
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={4}
//         boxShadow="md"
//         bg="white"
//         alignItems="center"
//         gap={4}
//       >
//         {/* Product Image */}
//         <Image
//           src={productImageURL}
//           alt={productName}
//           boxSize="80px"
//           objectFit="cover"
//           borderRadius="md"
//         />

//         {/* Product Name */}
//         <Text fontWeight="bold" fontSize="lg" color="#b82d92">
//           {productName}
//         </Text>
//       </Flex>
//     </Box>



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
//       </>
//       )}
//     </Box>
//   );
// };




// Version 2 : clone of version 1

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
//   Radio, 
//   RadioGroup,
//   HStack,
 
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";
// import { MdCheckCircle } from "react-icons/md";

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import '../css/DatePicker.css';
// import usePostData from "../hooks/usePostData";
// import { useForm , Controller } from "react-hook-form";
// import { useNavigate, useLocation } from 'react-router-dom';


// import doorstepConsultation from "../assets/tailoring/tailoring1.jpg";
// import measurementsCollection from "../assets/tailoring/tailoring2.jpg";
// import doorstepDelivery from "../assets/tailoring/tailoring3.jpg";
// import axios from "axios";

// import Lottie from 'react-lottie';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';

// export const TailoringHome = () => {
//   // State for image slider
 
//   const navigate = useNavigate();

//   const location = useLocation();

//   // const {productName , productId , productCategory ,productImageURL} = location.state || null

//   const { 
//     productName = '', 
//     productId = '', 
//     productCategory = '', 
//     productImageURL = '' ,
//     owningAuthority = '',
//     productPrice = ''
//   } = location.state || {};
  

//   console.log("Proudct Name and ID from tailoring booking page "+productName + "," +productId + "," +productCategory)
//   const { register, handleSubmit, setValue ,control} = useForm();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [doorstepConsultation, measurementsCollection, doorstepDelivery];

//   //const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
//   const [appointmentDate, setAppointmentDate] = useState<string | null>(null);

//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   //setShowAnimation(false);

//   const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/tailoringOrder');

//   // Date Picker Function 

//   const onSubmit =  (data) => {

//     data.productName = (productName) ? productName : "";
//     data.productImageURL = (productImageURL) ? productImageURL : "";
//     data.productId = (productId) ? productId : "";
//     data.owningAuthority = (owningAuthority) ? owningAuthority : "";
//     data.productPrice = (productPrice) ?  productPrice : "";

//     console.log("Payment Type value after submit is :" +data.paymentType);

  
 

//     // if (productName && productImageURL)

//     //   {
//     //     data.productName = productName;
//     //     data.productImageURL = productImageURL
//     //   }
//       console.log("Appointment Data from Form: ", data.appointmentDate);
//     backendConnection(data);
//     //setAlert(true);
// };

 

//   // const handleAppointmentDateChange = (date: Date | null) => {
//   //   if (!date) return;
  
//   //   const istDate = new Date(date);
//   //   istDate.setHours(istDate.getHours() + 5);
//   //   istDate.setMinutes(istDate.getMinutes() + 30);
  
//   //   setAppointmentDate(istDate); // Update local state
//   //   setValue('appointmentDate', istDate); // Update React Hook Form state
//   // };

//   const handleAppointmentDateChange = (date: Date | null) => {
//     if (!date) return;
  
//     // Convert the date to IST timezone
//     const istDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));

//     const formattedISTDate = istDate.toISOString();
  
//     setAppointmentDate(formattedISTDate); // Update local state
//     setValue('appointmentDate', formattedISTDate); // Update React Hook Form state
//   };
  


//   const toast = useToast(); // Chakra UI toast for notifications

//   // Effect to change image every 3 seconds
//   useEffect(() => {
//     setShowAnimation(false);
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   useEffect(() => {
//     if (responseData) {
//       console.log("Response Data Status Value : "+responseData.status)
//       if (responseData.status === 201) {
       
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//         setTimeout(() => {
//           navigate('/home'); // Navigate back to checkout page after a few seconds
//         }, 3000);
       
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         navigate('/home'); // Navigate back to checkout page after a few seconds
//       }, 3000);
     
//     }
//   }, [responseData, error, navigate]);

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
//       setShowAnimation(true);
//       setAnimationType('loading');

//      await postData(data);

   
//   };

//   return (
//     <Box p={5} maxWidth="1200px" margin="auto">
//             {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
//             <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>Your order has been successfully placed!</Text>
//             </Box>
//           )}
//           {animationType === 'error' && (
//             <Box textAlign="center">
//               <Lottie options={{ loop: false, autoplay: true, animationData: errorAnimation }} style={{ width: '150px', height: '150px' }} />
//               <Text>{error || "An error occurred, please try again."}</Text>
//             </Box>
//           )}
//         </Box>
//       )}
//       {/* Header Banner with Offer */}
//       {!showAnimation && (
//         <>
//       <Alert status="success" variant="solid" mb={5} borderRadius="md">
//         <AlertIcon />
//         Best Service at an Affordable Price! Book Now!
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

//            {/* {productName && <FormControl>
//               <FormLabel >Selected Product</FormLabel>
//               <InputGroup>
//                 <InputLeftElement pointerEvents="none">
//                   <FaUser color="#b82d92" />
//                 </InputLeftElement>
//                 <Input
//                 {...register('selctedProduct')}
//                   type="text"
//                   name="name"
//                   //value={formData.name}
//                   //onChange={handleInputChange}
//                   placeholder={productName}
//                   isReadOnly
//                   required
//                   // borderColor="grey"
//                 />
//               </InputGroup>
//             </FormControl> } */}


// {productName && productImageURL &&
// <FormControl>
// <Box>
//       {/* Title */}
//       <Heading as="h3" size="md" mb={2} color="#b82d92">
//         Selected Item
//       </Heading>

//       {/* Product Display */}
//       <Flex
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={4}
//         boxShadow="md"
//         bg="white"
//         alignItems="center"
//         gap={4}
//       >
//         {/* Product Image */}
//         <Image
       
//           src={productImageURL}
//           alt={productName}
//           boxSize="80px"
//           objectFit="cover"
//           borderRadius="md"
//         />

//         {/* Product Name */}
//         <Text fontWeight="bold" fontSize="lg" color="#b82d92" >
       
//           {productName}
//         </Text>
//       </Flex>
//     </Box>
//     </FormControl> }


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
//                 {...register('phone')}
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

//             <FormControl>
//             <Controller
//                 name="paymentType"
//                 control={control}
//                 defaultValue="cod"
//                 rules={{ required: 'Payment Type is required' }}
//                 render={({ field }) => (
//                   <RadioGroup {...field}
                  
//                   >
//                     <VStack spacing={2} align="stretch">
//                       <Text fontWeight="bold">Payment Type:</Text>
//                       <HStack spacing={4}>
//                         <Radio value="payNow">Card / UPI / NetBanking</Radio>
//                         <Radio value="cod">Cash on Delivery</Radio>
                        
//                       </HStack>
//                     </VStack>
//                   </RadioGroup>
//                 )}
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
//       </>
//       )}
//     </Box>
//   );
// };




// Version 3 : 2 is the working version, this is enhancment with payment option

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
  Radio, 
  RadioGroup,
  HStack,
 
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DatePicker.css';
import usePostData from "../hooks/usePostData";
import { useForm , Controller } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';


import doorstepConsultation from "../assets/tailoring/tailoring1.jpg";
import measurementsCollection from "../assets/tailoring/tailoring2.jpg";
import doorstepDelivery from "../assets/tailoring/tailoring3.jpg";
import axios from "axios";

import Lottie from 'react-lottie';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import loadingAnimation from '../animations/loading.json';
import { useAuth } from '../contexts/AuthContext';

export const TailoringHome = () => {
  // State for image slider
 
  const navigate = useNavigate();
  const {authState} = useAuth();

  const location = useLocation();

  // const {productName , productId , productCategory ,productImageURL} = location.state || null

  const { 
    productName = '', 
    productId = '', 
    productCategory = '', 
    productImageURL = '' ,
    owningAuthority = '',
    productPrice = ''
  } = location.state || {};
  

  console.log("Proudct Name and ID from tailoring booking page "+productName + "," +productId + "," +productCategory)
  const { register, handleSubmit, setValue ,control} = useForm();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [doorstepConsultation, measurementsCollection, doorstepDelivery];

  //const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
  const [appointmentDate, setAppointmentDate] = useState<string | null>(null);

  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track button status
  const [paymentType, setPaymentType] = useState("");
  //setShowAnimation(false);

  const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/tailoringOrder');

  // Date Picker Function 

  const onSubmit =  (data) => {
    setIsSubmitting(true);

    data.productName = (productName) ? productName : "";
    data.productImageURL = (productImageURL) ? productImageURL : "";
    data.productId = (productId) ? productId : "";
    data.owningAuthority = (owningAuthority) ? owningAuthority : "";
    data.productPrice = (productPrice) ?  productPrice : "";
    data.stitchType = (productCategory) ? productCategory : "";


    console.log("Payment Type value after submit is :" +data.paymentType);
    setPaymentType(data.paymentType)

  
 

    // if (productName && productImageURL)

    //   {
    //     data.productName = productName;
    //     data.productImageURL = productImageURL
    //   }
      console.log("Appointment Data from Form: ", data.appointmentDate);
    backendConnection(data);
    //setAlert(true);
};


const handlePayment = async (cc_order) => {
   
  var amount = 1;
  console.log("Amount from Handle Payment function" +JSON.stringify(amount))

  // Create order from your backend
  const response = await fetch("https://admee.in:3003/api/cc/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  const { orderId } = await response.json();
  console.log("Order Created:", orderId);
  setIsSubmitting(false); 

  const options = {
    //key: "rzp_test_ibKEA4VVo2kkgV", // Use test key
    key: "rzp_live_eRPZbHTMQV50Ws", // live 
    amount: amount * 100,
    currency: "INR",
    name: "Cotton Candy",
    description: "Tailoring Order Payment",
    order_id: orderId, // Order ID from backend
    // handler: (response: { razorpay_payment_id: any }) => {
    //   alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
    // },

    handler: async (response) => {
      if (response.razorpay_payment_id) {
        console.log("✅ Payment Successful:", response);
        console.log("Order ID value inside handler function :"+cc_order);

        // Send payment details to backend for order update
        const updateResponse = await fetch(`https://admee.in:3003/api/cc/order/${cc_order}/payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: orderId, // Backend Order ID
            paymentScenario: "tailoring",
            paymentId: response.razorpay_payment_id, // Razorpay Payment ID
            signature: response.razorpay_signature, // Razorpay Signature
          }),
        });

        const result = await updateResponse.json();
        console.log("result from update response" +JSON.stringify(result))
        console.log("Result Status" +updateResponse.status)
        if (updateResponse.status === 200) {
          //alert("🎉 Payment Successful! Order updated.");
         // clearCart(); 
          setShowAnimation(true);
          setAnimationType('success');
          setTimeout(() => {
            navigate('/home'); // Navigate to home page after 3 seconds
          }, 2000);
        } else {
          alert("⚠️ Payment successful but order update failed. Contact support Team.");
        }
      } else {
        alert("⚠️ Payment failed! Try again.");
      }
    },

    prefill: {
      name: (authState.userName) ? authState.userName : "User",
      email: (authState.userEmail) ? authState.userEmail : "user mail",
      contact: "9566",
    },
    theme: { color: "#b365c7" },
  };

  if (!window.Razorpay) {
    alert("Razorpay SDK failed to load. Please check your connection.");
    return;
  }

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};

 

  // const handleAppointmentDateChange = (date: Date | null) => {
  //   if (!date) return;
  
  //   const istDate = new Date(date);
  //   istDate.setHours(istDate.getHours() + 5);
  //   istDate.setMinutes(istDate.getMinutes() + 30);
  
  //   setAppointmentDate(istDate); // Update local state
  //   setValue('appointmentDate', istDate); // Update React Hook Form state
  // };

  const handleAppointmentDateChange = (date: Date | null) => {
    if (!date) return;
  
    // Convert the date to IST timezone
    const istDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));

    const formattedISTDate = istDate.toISOString();
  
    setAppointmentDate(formattedISTDate); // Update local state
    setValue('appointmentDate', formattedISTDate); // Update React Hook Form state
  };
  


  const toast = useToast(); // Chakra UI toast for notifications

  // Razor pay sdk 

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Effect to change image every 3 seconds
  useEffect(() => {
    setShowAnimation(false);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // useEffect(() => {
  //   if (responseData) {
  //     console.log("Response Data Status Value : "+responseData.status)
  //     if (responseData.status === 201) {
       
  //       setAnimationType('success');
  //       setTimeout(() => {
  //         navigate('/home'); // Navigate to home page after 3 seconds
  //       }, 3000);
  //     } else {
  //       setAnimationType('error');
  //       setTimeout(() => {
  //         navigate('/home'); // Navigate back to checkout page after a few seconds
  //       }, 3000);
       
  //     }
  //   } else if (error) {
  //     setAnimationType('error');
  //     setTimeout(() => {
  //       navigate('/home'); // Navigate back to checkout page after a few seconds
  //     }, 3000);
     
  //   }
  // }, [responseData, error, navigate]);


  useEffect(() => {
    if (responseData) {
      console.log("Response Data " +JSON.stringify(responseData))
      if (responseData.status === 201) {

        console.log("Payment Type inside use effect boss" +paymentType)
        if(paymentType === "payNow")
        {
        handlePayment(responseData.orderId);
        }
        else if (paymentType === "cod")
        {
        //  clearCart(); 
         setShowAnimation(true)
         setAnimationType('success');
         setTimeout(() => {
           navigate('/home'); // Navigate to home page after 3 seconds
         }, 3000);
        }
      } else {
        setAnimationType('error');
      }
    } else if (error) {
      setAnimationType('error');
      setTimeout(() => {
        navigate('/tailoringHome'); // Navigate back to checkout page after a few seconds
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
      //setShowAnimation(true);
      //setAnimationType('loading');

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
        Best Service at an Affordable Price! Book Now!
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

           {/* {productName && <FormControl>
              <FormLabel >Selected Product</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaUser color="#b82d92" />
                </InputLeftElement>
                <Input
                {...register('selctedProduct')}
                  type="text"
                  name="name"
                  //value={formData.name}
                  //onChange={handleInputChange}
                  placeholder={productName}
                  isReadOnly
                  required
                  // borderColor="grey"
                />
              </InputGroup>
            </FormControl> } */}


{productName && productImageURL &&
<FormControl>
<Box>
      {/* Title */}
      <Heading as="h3" size="md" mb={2} color="#b82d92">
        Selected Item
      </Heading>

      {/* Product Display */}
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        boxShadow="md"
        bg="white"
        alignItems="center"
        gap={4}
      >
        {/* Product Image */}
        <Image
       
          src={productImageURL}
          alt={productName}
          boxSize="80px"
          objectFit="cover"
          borderRadius="md"
        />

        {/* Product Name */}
        <Text fontWeight="bold" fontSize="lg" color="#b82d92" >
       
          {productName}
        </Text>
      </Flex>
    </Box>
    </FormControl> }


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
                {...register('phone')}
                  type="tel"
                  
                  placeholder="Enter your phone number"
                  // borderColor="grey"
                  required
                />
              </InputGroup>
            </FormControl>

            {/* <FormControl>
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
            </FormControl> */}

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

            <FormControl>
            <Controller
                name="paymentType"
                control={control}
                defaultValue="cod"
                rules={{ required: 'Payment Type is required' }}
                render={({ field }) => (
                  <RadioGroup {...field}
                  
                  >
                    <VStack spacing={2} align="stretch">
                      <Text fontWeight="bold">Payment Type:</Text>
                      <HStack spacing={4}>
                        <Radio value="payNow">Card / UPI / NetBanking</Radio>
                        <Radio value="cod">Cash on Delivery</Radio>
                        
                      </HStack>
                    </VStack>
                  </RadioGroup>
                )}
              />
            </FormControl>

            <Button type="submit" colorScheme="pink" size="lg" width="full" isDisabled={isSubmitting}>
           
              {isSubmitting ? "Processing..." : "Place Order"}
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
