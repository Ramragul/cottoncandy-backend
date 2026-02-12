



// Version 1

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
// import { useAuth } from '../contexts/AuthContext';

// export const TailoringHome = () => {
//   // State for image slider
 
//   const navigate = useNavigate();
//   const {authState} = useAuth();

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
//   const [isSubmitting, setIsSubmitting] = useState(false); // State to track button status
//   const [paymentType, setPaymentType] = useState("");
//   //setShowAnimation(false);

//   const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/tailoringOrder');

//   // Date Picker Function 

//   const onSubmit =  (data) => {
//     setIsSubmitting(true);

//     data.productName = (productName) ? productName : "";
//     data.productImageURL = (productImageURL) ? productImageURL : "";
//     data.productId = (productId) ? productId : "";
//     data.owningAuthority = (owningAuthority) ? owningAuthority : "";
//     data.productPrice = (productPrice) ?  productPrice : "";
//     data.stitchType = (productCategory) ? productCategory : "";


//     console.log("Payment Type value after submit is :" +data.paymentType);
//     setPaymentType(data.paymentType)

  
 

//     // if (productName && productImageURL)

//     //   {
//     //     data.productName = productName;
//     //     data.productImageURL = productImageURL
//     //   }
//       console.log("Appointment Data from Form: ", data.appointmentDate);
//     backendConnection(data);
//     //setAlert(true);
// };


// const handlePayment = async (cc_order) => {
   
//   var amount = 1;
//   console.log("Amount from Handle Payment function" +JSON.stringify(amount))

//   // Create order from your backend
//   const response = await fetch("https://admee.in:3003/api/cc/create-order", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ amount }),
//   });

//   const { orderId } = await response.json();
//   console.log("Order Created:", orderId);
//   setIsSubmitting(false); 

//   const options = {
//     //key: "rzp_test_ibKEA4VVo2kkgV", // Use test key
//     key: "rzp_live_eRPZbHTMQV50Ws", // live 
//     amount: amount * 100,
//     currency: "INR",
//     name: "Cotton Candy",
//     description: "Tailoring Order Payment",
//     order_id: orderId, // Order ID from backend
//     // handler: (response: { razorpay_payment_id: any }) => {
//     //   alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//     // },

//     handler: async (response) => {
//       if (response.razorpay_payment_id) {
//         console.log("✅ Payment Successful:", response);
//         console.log("Order ID value inside handler function :"+cc_order);

//         // Send payment details to backend for order update
//         const updateResponse = await fetch(`https://admee.in:3003/api/cc/order/${cc_order}/payment`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             orderId: orderId, // Backend Order ID
//             paymentScenario: "tailoring",
//             paymentId: response.razorpay_payment_id, // Razorpay Payment ID
//             signature: response.razorpay_signature, // Razorpay Signature
//           }),
//         });

//         const result = await updateResponse.json();
//         console.log("result from update response" +JSON.stringify(result))
//         console.log("Result Status" +updateResponse.status)
//         if (updateResponse.status === 200) {
//           //alert("🎉 Payment Successful! Order updated.");
//          // clearCart(); 
//           setShowAnimation(true);
//           setAnimationType('success');
//           setTimeout(() => {
//             navigate('/home'); // Navigate to home page after 3 seconds
//           }, 2000);
//         } else {
//           alert("⚠️ Payment successful but order update failed. Contact support Team.");
//         }
//       } else {
//         alert("⚠️ Payment failed! Try again.");
//       }
//     },

//     prefill: {
//       name: (authState.userName) ? authState.userName : "User",
//       email: (authState.userEmail) ? authState.userEmail : "user mail",
//       contact: "9566",
//     },
//     theme: { color: "#b365c7" },
//   };

//   if (!window.Razorpay) {
//     alert("Razorpay SDK failed to load. Please check your connection.");
//     return;
//   }

//   const razorpay = new window.Razorpay(options);
//   razorpay.open();
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

//   // Razor pay sdk 

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   // Effect to change image every 3 seconds
//   useEffect(() => {
//     setShowAnimation(false);
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   // useEffect(() => {
//   //   if (responseData) {
//   //     console.log("Response Data Status Value : "+responseData.status)
//   //     if (responseData.status === 201) {
       
//   //       setAnimationType('success');
//   //       setTimeout(() => {
//   //         navigate('/home'); // Navigate to home page after 3 seconds
//   //       }, 3000);
//   //     } else {
//   //       setAnimationType('error');
//   //       setTimeout(() => {
//   //         navigate('/home'); // Navigate back to checkout page after a few seconds
//   //       }, 3000);
       
//   //     }
//   //   } else if (error) {
//   //     setAnimationType('error');
//   //     setTimeout(() => {
//   //       navigate('/home'); // Navigate back to checkout page after a few seconds
//   //     }, 3000);
     
//   //   }
//   // }, [responseData, error, navigate]);


//   useEffect(() => {
//     if (responseData) {
//       console.log("Response Data " +JSON.stringify(responseData))
//       if (responseData.status === 201) {

//         console.log("Payment Type inside use effect boss" +paymentType)
//         if(paymentType === "payNow")
//         {
//         handlePayment(responseData.orderId);
//         }
//         else if (paymentType === "cod")
//         {
//         //  clearCart(); 
//          setShowAnimation(true)
//          setAnimationType('success');
//          setTimeout(() => {
//            navigate('/home'); // Navigate to home page after 3 seconds
//          }, 3000);
//         }
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         navigate('/tailoringHome'); // Navigate back to checkout page after a few seconds
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
//       //setShowAnimation(true);
//       //setAnimationType('loading');

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

//             {/* <FormControl>
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
//             </FormControl> */}

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

//             <Button type="submit" colorScheme="pink" size="lg" width="full" isDisabled={isSubmitting}>
           
//               {isSubmitting ? "Processing..." : "Place Order"}
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



// Version 2 : 1 is the working version, this is adding lining and rapid delivery options


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
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Divider,
//   Alert,
//   AlertIcon,
//   Radio,
//   RadioGroup,
//   HStack,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaClock, FaGlobe } from "react-icons/fa";
// import { MdCheckCircle } from "react-icons/md";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "../css/DatePicker.css";

// import { useForm, Controller } from "react-hook-form";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// import Lottie from "react-lottie";
// import successAnimation from "../animations/success.json";
// import errorAnimation from "../animations/error.json";
// import loadingAnimation from "../animations/loading.json";

// import { useAuth } from "../contexts/AuthContext";
// import usePostData from "../hooks/usePostData";

// import doorstepConsultation from "../assets/tailoring/tailoring1.jpg";
// import measurementsCollection from "../assets/tailoring/tailoring2.jpg";
// import doorstepDelivery from "../assets/tailoring/tailoring3.jpg";

// /* ================= PRICING CONFIG ================= */

// const LINING_PRICE = 300;

// const SPEED_PRICE_MAP = {
//   standard: 0,
//   express: 499,
//   rapid: 999,
// };

// /* ================================================== */

// export const TailoringHome = () => {
//   const navigate = useNavigate();
//   const { authState } = useAuth();
//   const location = useLocation();

//   /* ---------- DATA FROM PREVIOUS PAGE ---------- */
//   const {
//     productName = "",
//     productId = "",
//     productCategory = "",
//     productImageURL = "",
//     owningAuthority = "",
//     productPrice = 0,
//     supportsLining = false,
//     supportsRapidStitching = false,
//   } = location.state || {};

//   const { register, handleSubmit, setValue, control } = useForm();

//   /* ---------- STATE ---------- */
//   const [appointmentDate, setAppointmentDate] = useState<string | null>(null);

//   const [hasLining, setHasLining] = useState(false);
//   const [stitchingSpeed, setStitchingSpeed] =
//     useState<"standard" | "express" | "rapid">("standard");

//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] =
//     useState<"success" | "error" | "loading" | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [paymentType, setPaymentType] = useState("");

//   const images = [doorstepConsultation, measurementsCollection, doorstepDelivery];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const { postData, responseData, error } =
//     usePostData("/api/cc/tailoringOrder");

//   /* ---------- PRICE CALCULATION (AUTO) ---------- */
//   const BASE_PRICE = Number(productPrice) || 0;
//   const liningPrice = supportsLining && hasLining ? LINING_PRICE : 0;
//   const speedPrice = SPEED_PRICE_MAP[stitchingSpeed] || 0;
//   const totalAmount = BASE_PRICE + liningPrice + speedPrice;

//   /* ---------- DATE HANDLER ---------- */
//   const handleAppointmentDateChange = (date: Date | null) => {
//     if (!date) return;
//     const istDate = new Date(
//       date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
//     );
//     const formatted = istDate.toISOString();
//     setAppointmentDate(formatted);
//     setValue("appointmentDate", formatted);
//   };

//   /* ---------- SUBMIT ---------- */
//   const onSubmit = (data: any) => {
//     setIsSubmitting(true);

//     data.productName = productName;
//     data.productId = productId;
//     data.productImageURL = productImageURL;
//     data.productPrice = BASE_PRICE;
//     data.owningAuthority = owningAuthority;
//     data.stitchType = productCategory;

//     data.hasLining = supportsLining ? hasLining : false;
//     data.liningPrice = liningPrice;

//     data.stitchingSpeed = supportsRapidStitching
//       ? stitchingSpeed
//       : "standard";
//     data.speedPrice = speedPrice;

//     data.totalAmount = totalAmount;

//     setPaymentType(data.paymentType);

//     backendConnection(data);
//   };

//   /* ---------- PAYMENT ---------- */
//   const handlePayment = async (cc_order: number) => {
//     const amount = totalAmount;

//     const response = await fetch(
//       "https://admee.in:3003/api/cc/create-order",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount }),
//       }
//     );

//     const { orderId } = await response.json();

//     const options = {
//       key: "rzp_live_eRPZbHTMQV50Ws",
//       amount: amount * 100,
//       currency: "INR",
//       name: "Cotton Candy",
//       description: "Tailoring Order Payment",
//       order_id: orderId,
//       handler: async (response: any) => {
//         if (response.razorpay_payment_id) {
//           await fetch(
//             `https://admee.in:3003/api/cc/order/${cc_order}/payment`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 orderId,
//                 paymentScenario: "tailoring",
//                 paymentId: response.razorpay_payment_id,
//                 signature: response.razorpay_signature,
//               }),
//             }
//           );
//           setShowAnimation(true);
//           setAnimationType("success");
//           setTimeout(() => navigate("/home"), 2000);
//         }
//       },
//       prefill: {
//         name: authState?.userName || "User",
//         email: authState?.userEmail || "user@email.com",
//         contact: "9000000000",
//       },
//       theme: { color: "#b365c7" },
//     };

//     const razorpay = new (window as any).Razorpay(options);
//     razorpay.open();
//   };

//   /* ---------- BACKEND ---------- */
//   const backendConnection = async (data: any) => {
//     if (data.customDesignImage?.length) {
//       const formData = new FormData();
//       for (let file of data.customDesignImage) {
//         formData.append("photos", file);
//       }
//       const s3Response = await axios.post(
//         "https://admee.in:3003/aws/upload",
//         formData
//       );
//       data.customDesignImage = s3Response.data.imageURLs;
//     }
//     await postData(data);
//   };

//   /* ---------- EFFECTS ---------- */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((i) => (i + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (responseData?.status === 201) {
//       if (paymentType === "payNow") {
//         handlePayment(responseData.orderId);
//       } else {
//         setShowAnimation(true);
//         setAnimationType("success");
//         setTimeout(() => navigate("/home"), 2000);
//       }
//     }
//     if (error) setAnimationType("error");
//   }, [responseData, error]);

//   /* ---------- UI ---------- */
//   return (
//     <Box p={5} maxW="1200px" mx="auto">
//       {!showAnimation && (
//         <>
//           {/* <Alert status="success" mb={5}>
//             <AlertIcon />
//             Best Service at an Affordable Price!
//           </Alert> */}

//           {/* <Box mb={5}>
//             <Image
//               src={images[currentImageIndex]}
//               height="300px"
//               width="100%"
//               objectFit="cover"
//               borderRadius="md"
//             />
//           </Box> */}
//           <Box
//             mb={5}
//             mx={{ base: "-20px", md: "0" }} // removes side padding on mobile
//           >
//             <Image
//               src={images[currentImageIndex]}
//               w="100%"
//               h={{ base: "220px", md: "300px" }}
//               objectFit="cover"
//               borderRadius={{ base: "0", md: "12px" }}
//             />
//           </Box>


//           <Flex gap={6} direction={{ base: "column", lg: "row" }}>
//             <Box flex="1" bg="white" p={5} borderRadius="lg">
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <VStack spacing={4} align="stretch">
//                   <Heading size="lg" textAlign="center" color="pink.500">
//                     Tailoring Appointment
//                   </Heading>

//                   {/* Selected Product */}
//                   {productName && (
//                     <Flex gap={4} p={3} border="1px solid #eee" borderRadius="md">
//                       <Image
//                         src={productImageURL}
//                         boxSize="70px"
//                         objectFit="cover"
//                       />
//                       <Text fontWeight="bold">{productName}</Text>
//                     </Flex>
//                   )}

//                   {/* 🧵 Lining */}
//                   {supportsLining && (
//                     <FormControl>
//                       <FormLabel fontWeight="bold">Lining</FormLabel>
//                       <RadioGroup
//                         value={hasLining ? "yes" : "no"}
//                         onChange={(v) => setHasLining(v === "yes")}
//                       >
//                         <HStack>
//                           <Radio value="no">Without lining</Radio>
//                           <Radio value="yes">With lining (+₹300)</Radio>
//                         </HStack>
//                       </RadioGroup>
//                     </FormControl>
//                   )}

//                   {/* ⚡ Speed */}
//                   {supportsRapidStitching && (
//                     <FormControl>
//                       <FormLabel fontWeight="bold">Stitching Speed</FormLabel>
//                       <RadioGroup
//                         value={stitchingSpeed}
//                         onChange={(v: any) => setStitchingSpeed(v)}
//                       >
//                         <VStack align="start">
//                           <Radio value="standard">Standard – Delivered in 5–7 Days</Radio>
//                           <Radio value="express">Express – Next Day Delivery (+₹499)</Radio>
//                           <Radio value="rapid">Rapid – 2 Hour Delivery (+₹999)</Radio>
//                         </VStack>
//                       </RadioGroup>
//                     </FormControl>
//                   )}

//                   {/* PRICE SUMMARY */}
//                   <Box p={4} bg="pink.50" borderRadius="md">
//                     <HStack justify="space-between">
//                       <Text>Total Amount</Text>
//                       <Text fontWeight="bold" color="pink.600">
//                         ₹{totalAmount}
//                       </Text>
//                     </HStack>
//                   </Box>

//                   {/* EXISTING FORM FIELDS CONTINUE BELOW (UNCHANGED) */}
//                   <FormControl>
//                     <FormLabel>Name</FormLabel>
//                     <Input {...register("name")} required />
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel>Email</FormLabel>
//                     <Input {...register("email")} required />
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel>Phone</FormLabel>
//                     <Input {...register("phone")} required />
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel>Address</FormLabel>
//                     <Textarea {...register("address")} required />
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel>Appointment Date</FormLabel>
//                     <Controller
//                       name="appointmentDate"
//                       control={control}
//                       render={() => (
//                         <DatePicker
//                           selected={appointmentDate ? new Date(appointmentDate) : null}
//                           onChange={handleAppointmentDateChange}
//                           minDate={new Date()}
//                           dateFormat="dd/MM/yyyy"
//                         />
//                       )}
//                     />
//                   </FormControl>

//                   <Controller
//                     name="paymentType"
//                     control={control}
//                     defaultValue="cod"
//                     render={({ field }) => (
//                       <RadioGroup {...field}>
//                         <HStack>
//                           <Radio value="payNow">Pay Now</Radio>
//                           <Radio value="cod">Cash on Delivery</Radio>
//                         </HStack>
//                       </RadioGroup>
//                     )}
//                   />

//                   <Button
//                     type="submit"
//                     colorScheme="pink"
//                     isDisabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Processing..." : "Place Order"}
//                   </Button>
//                 </VStack>
//               </form>
//             </Box>
//           </Flex>
//         </>
//       )}

//       {showAnimation && (
//         <Box textAlign="center">
//           <Lottie
//             options={{
//               loop: false,
//               autoplay: true,
//               animationData:
//                 animationType === "success"
//                   ? successAnimation
//                   : errorAnimation,
//             }}
//             height={150}
//           />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default TailoringHome;



// Version 3 : Design Enhancement Version to 2 -> working version 

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
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Divider,
//   Alert,
//   AlertIcon,
//   Radio,
//   RadioGroup,
//   HStack,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope, FaPhone, FaClock, FaGlobe } from "react-icons/fa";
// import { MdCheckCircle } from "react-icons/md";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "../css/DatePicker.css";

// import { useForm, Controller } from "react-hook-form";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// import Lottie from "react-lottie";
// import successAnimation from "../animations/success.json";
// import errorAnimation from "../animations/error.json";
// import loadingAnimation from "../animations/loading.json";

// import { useAuth } from "../contexts/AuthContext";
// import usePostData from "../hooks/usePostData";

// import doorstepConsultation from "../assets/tailoring/tailoring1.jpg";
// import measurementsCollection from "../assets/tailoring/tailoring2.jpg";
// import doorstepDelivery from "../assets/tailoring/tailoring3.jpg";

// /* ================= PRICING CONFIG ================= */

// const LINING_PRICE = 300;

// const SPEED_PRICE_MAP = {
//   standard: 0,
//   express: 499,
//   rapid: 999,
// };

// /* ================================================== */

// export const TailoringHome = () => {
//   const navigate = useNavigate();
//   const { authState } = useAuth();
//   const location = useLocation();

//   /* ---------- DATA FROM PREVIOUS PAGE ---------- */
//   const {
//     productName = "",
//     productId = "",
//     productCategory = "",
//     productImageURL = "",
//     owningAuthority = "",
//     productPrice = 0,
//     supportsLining = false,
//     supportsRapidStitching = false,
//   } = location.state || {};

//   const { register, handleSubmit, setValue, control } = useForm();

//   /* ---------- STATE ---------- */
//   const [appointmentDate, setAppointmentDate] = useState<string | null>(null);

//   const [hasLining, setHasLining] = useState(false);
//   const [stitchingSpeed, setStitchingSpeed] =
//     useState<"standard" | "express" | "rapid">("standard");

//   const [showAnimation, setShowAnimation] = useState(false);
//   const [animationType, setAnimationType] =
//     useState<"success" | "error" | "loading" | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [paymentType, setPaymentType] = useState("");

//   const images = [doorstepConsultation, measurementsCollection, doorstepDelivery];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const { postData, responseData, error } =
//     usePostData("/api/cc/tailoringOrder");

//   /* ---------- PRICE CALCULATION (AUTO) ---------- */
//   const BASE_PRICE = Number(productPrice) || 0;
//   const liningPrice = supportsLining && hasLining ? LINING_PRICE : 0;
//   const speedPrice = SPEED_PRICE_MAP[stitchingSpeed] || 0;
//   const totalAmount = BASE_PRICE + liningPrice + speedPrice;

//   /* ---------- DATE HANDLER ---------- */
//   const handleAppointmentDateChange = (date: Date | null) => {
//     if (!date) return;
//     const istDate = new Date(
//       date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
//     );
//     const formatted = istDate.toISOString();
//     setAppointmentDate(formatted);
//     setValue("appointmentDate", formatted);
//   };

//   /* ---------- SUBMIT ---------- */
//   const onSubmit = (data: any) => {
//     setIsSubmitting(true);

//     data.productName = productName;
//     data.productId = productId;
//     data.productImageURL = productImageURL;
//     data.productPrice = BASE_PRICE;
//     data.owningAuthority = owningAuthority;
//     data.stitchType = productCategory;

//     data.hasLining = supportsLining ? hasLining : false;
//     data.liningPrice = liningPrice;

//     data.stitchingSpeed = supportsRapidStitching
//       ? stitchingSpeed
//       : "standard";
//     data.speedPrice = speedPrice;

//     data.totalAmount = totalAmount;

//     setPaymentType(data.paymentType);

//     backendConnection(data);
//   };

//   /* ---------- PAYMENT ---------- */
//   const handlePayment = async (cc_order: number) => {
//     const amount = totalAmount;

//     const response = await fetch(
//       "https://admee.in:3003/api/cc/create-order",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount }),
//       }
//     );

//     const { orderId } = await response.json();

//     const options = {
//       key: "rzp_live_eRPZbHTMQV50Ws",
//       amount: amount * 100,
//       currency: "INR",
//       name: "Cotton Candy",
//       description: "Tailoring Order Payment",
//       order_id: orderId,
//       handler: async (response: any) => {
//         if (response.razorpay_payment_id) {
//           await fetch(
//             `https://admee.in:3003/api/cc/order/${cc_order}/payment`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 orderId,
//                 paymentScenario: "tailoring",
//                 paymentId: response.razorpay_payment_id,
//                 signature: response.razorpay_signature,
//               }),
//             }
//           );
//           setShowAnimation(true);
//           setAnimationType("success");
//           setTimeout(() => navigate("/home"), 2000);
//         }
//       },
//       prefill: {
//         name: authState?.userName || "User",
//         email: authState?.userEmail || "user@email.com",
//         contact: "9000000000",
//       },
//       theme: { color: "#b365c7" },
//     };

//     const razorpay = new (window as any).Razorpay(options);
//     razorpay.open();
//   };

//   /* ---------- BACKEND ---------- */
//   const backendConnection = async (data: any) => {
//     if (data.customDesignImage?.length) {
//       const formData = new FormData();
//       for (let file of data.customDesignImage) {
//         formData.append("photos", file);
//       }
//       const s3Response = await axios.post(
//         "https://admee.in:3003/aws/upload",
//         formData
//       );
//       data.customDesignImage = s3Response.data.imageURLs;
//     }
//     await postData(data);
//   };

//   /* ---------- EFFECTS ---------- */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((i) => (i + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (responseData?.status === 201) {
//       if (paymentType === "payNow") {
//         handlePayment(responseData.orderId);
//       } else {
//         setShowAnimation(true);
//         setAnimationType("success");
//         setTimeout(() => navigate("/home"), 2000);
//       }
//     }
//     if (error) setAnimationType("error");
//   }, [responseData, error]);

//   /* ---------- UI ---------- */
//   return (
//     <Box
//       minH="100vh"
//       bg="linear-gradient(135deg, #f9fcff 0%, #ffffff 40%, #fff5f9 100%)"
//       py={10}
//       px={4}
//     >
//       {!showAnimation && (
//         <>
//           {/* HERO IMAGE */}
//           <Box
//             mb={8}
//             maxW="1200px"
//             mx="auto"
//             borderRadius="20px"
//             overflow="hidden"
//             boxShadow="0 20px 60px rgba(0,0,0,0.08)"
//           >
//             <Image
//               src={images[currentImageIndex]}
//               w="100%"
//               h={{ base: "240px", md: "340px" }}
//               objectFit="cover"
//               transition="all 0.5s ease"
//             />
//           </Box>
  
//           <Flex
//             maxW="1200px"
//             mx="auto"
//             direction={{ base: "column", lg: "row" }}
//             gap={8}
//           >
//             <Box
//               flex="1"
//               bg="rgba(255,255,255,0.85)"
//               backdropFilter="blur(10px)"
//               borderRadius="24px"
//               p={{ base: 6, md: 10 }}
//               boxShadow="0 30px 80px rgba(0,0,0,0.06)"
//               border="1px solid rgba(255,192,203,0.2)"
//             >
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <VStack spacing={6} align="stretch">
//                   <Heading
//                     size="lg"
//                     textAlign="center"
//                     bgGradient="linear(to-r, pink.400, blue.400)"
//                     bgClip="text"
//                     fontWeight="extrabold"
//                     letterSpacing="wide"
//                   >
//                     Premium Tailoring Appointment
//                   </Heading>
  
//                   {/* PRODUCT DISPLAY */}
//                   {productName && (
//                     <Flex
//                       gap={5}
//                       p={4}
//                       borderRadius="16px"
//                       bg="white"
//                       boxShadow="0 10px 40px rgba(0,0,0,0.05)"
//                       align="center"
//                     >
//                       <Image
//                         src={productImageURL}
//                         boxSize="90px"
//                         borderRadius="12px"
//                         objectFit="cover"
//                       />
//                       <Box>
//                         <Text fontSize="sm" color="gray.500">
//                           Selected Design
//                         </Text>
//                         <Text fontWeight="bold" fontSize="lg">
//                           {productName}
//                         </Text>
//                       </Box>
//                     </Flex>
//                   )}
  
//                   {/* LINING */}
//                   {supportsLining && (
//                     <FormControl>
//                       <FormLabel fontWeight="semibold">
//                         Lining Enhancement
//                       </FormLabel>
//                       <RadioGroup
//                         value={hasLining ? "yes" : "no"}
//                         onChange={(v) => setHasLining(v === "yes")}
//                       >
//                         <HStack spacing={6}>
//                           <Radio value="no">Without lining</Radio>
//                           <Radio value="yes" colorScheme="pink">
//                             With premium lining (+₹300)
//                           </Radio>
//                         </HStack>
//                       </RadioGroup>
//                     </FormControl>
//                   )}
  
//                   {/* SPEED */}
//                   {supportsRapidStitching && (
//                     <FormControl>
//                       <FormLabel fontWeight="semibold">
//                         Delivery Priority
//                       </FormLabel>
//                       <RadioGroup
//                         value={stitchingSpeed}
//                         onChange={(v: any) => setStitchingSpeed(v)}
//                       >
//                         <VStack align="start" spacing={3}>
//                           <Radio value="standard">
//                             Standard – 5–7 Days
//                           </Radio>
//                           <Radio value="express" colorScheme="blue">
//                             Express – Next Day (+₹499)
//                           </Radio>
//                           <Radio value="rapid" colorScheme="pink">
//                             Rapid – 2 Hours (+₹999)
//                           </Radio>
//                         </VStack>
//                       </RadioGroup>
//                     </FormControl>
//                   )}
  
//                   {/* PRICE CARD */}
//                   <Box
//                     p={6}
//                     borderRadius="18px"
//                     bgGradient="linear(to-r, pink.50, blue.50)"
//                     boxShadow="0 15px 40px rgba(0,0,0,0.05)"
//                   >
//                     <HStack justify="space-between">
//                       <Text fontSize="lg" fontWeight="medium">
//                         Total Investment
//                       </Text>
//                       <Text
//                         fontSize="2xl"
//                         fontWeight="extrabold"
//                         bgGradient="linear(to-r, pink.500, blue.500)"
//                         bgClip="text"
//                       >
//                         ₹{totalAmount}
//                       </Text>
//                     </HStack>
//                   </Box>
  
//                   {/* FORM FIELDS */}
//                   <FormControl>
//                     <FormLabel>Full Name</FormLabel>
//                     <Input
//                       {...register("name")}
//                       required
//                       borderRadius="12px"
//                       focusBorderColor="pink.400"
//                     />
//                   </FormControl>
  
//                   <FormControl>
//                     <FormLabel>Email Address</FormLabel>
//                     <Input
//                       {...register("email")}
//                       required
//                       borderRadius="12px"
//                       focusBorderColor="blue.400"
//                     />
//                   </FormControl>
  
//                   <FormControl>
//                     <FormLabel>Phone Number</FormLabel>
//                     <Input
//                       {...register("phone")}
//                       required
//                       borderRadius="12px"
//                       focusBorderColor="pink.400"
//                     />
//                   </FormControl>
  
//                   <FormControl>
//                     <FormLabel>Complete Address</FormLabel>
//                     <Textarea
//                       {...register("address")}
//                       required
//                       borderRadius="12px"
//                       focusBorderColor="blue.400"
//                     />
//                   </FormControl>
  
//                   <FormControl>
//                     <FormLabel>Appointment Date</FormLabel>
//                     <Controller
//                       name="appointmentDate"
//                       control={control}
//                       render={() => (
//                         <DatePicker
//                           selected={
//                             appointmentDate
//                               ? new Date(appointmentDate)
//                               : null
//                           }
//                           onChange={handleAppointmentDateChange}
//                           minDate={new Date()}
//                           dateFormat="dd/MM/yyyy"
//                         />
//                       )}
//                     />
//                   </FormControl>
  
//                   <Controller
//                     name="paymentType"
//                     control={control}
//                     defaultValue="cod"
//                     render={({ field }) => (
//                       <RadioGroup {...field}>
//                         <HStack spacing={8}>
//                           <Radio value="payNow" colorScheme="pink">
//                             Pay Now
//                           </Radio>
//                           <Radio value="cod" colorScheme="blue">
//                             Cash on Delivery
//                           </Radio>
//                         </HStack>
//                       </RadioGroup>
//                     )}
//                   />
  
//                   <Button
//                     type="submit"
//                     size="lg"
//                     borderRadius="16px"
//                     bgGradient="linear(to-r, pink.400, blue.400)"
//                     color="white"
//                     _hover={{
//                       bgGradient:
//                         "linear(to-r, pink.500, blue.500)",
//                       transform: "translateY(-2px)",
//                       boxShadow:
//                         "0 15px 40px rgba(0,0,0,0.15)",
//                     }}
//                     transition="all 0.3s ease"
//                     isDisabled={isSubmitting}
//                   >
//                     {isSubmitting
//                       ? "Processing..."
//                       : "Confirm Luxury Stitching"}
//                   </Button>
//                 </VStack>
//               </form>
//             </Box>
//           </Flex>
//         </>
//       )}
  
//       {showAnimation && (
//         <Box textAlign="center" mt={20}>
//           <Lottie
//             options={{
//               loop: false,
//               autoplay: true,
//               animationData:
//                 animationType === "success"
//                   ? successAnimation
//                   : errorAnimation,
//             }}
//             height={170}
//           />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default TailoringHome;



// Version 4 : Enhancements to version 2 

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  Image,
  Radio,
  RadioGroup,
  HStack,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/DatePicker.css";

import { useForm, Controller } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import Lottie from "react-lottie";
import successAnimation from "../animations/success.json";
import errorAnimation from "../animations/error.json";
import loadingAnimation from "../animations/loading.json";

import { useAuth } from "../contexts/AuthContext";
import usePostData from "../hooks/usePostData";

import doorstepConsultation from "../assets/tailoring/tailoring1.jpg";
import measurementsCollection from "../assets/tailoring/tailoring2.jpg";
import doorstepDelivery from "../assets/tailoring/tailoring3.jpg";

/* ================= PRICING CONFIG ================= */

const LINING_PRICE = 300;

const SPEED_PRICE_MAP = {
  standard: 0,
  express: 499,
  rapid: 999,
};

/* ================================================== */

export const TailoringHome = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const location = useLocation();

  const {
    productName = "",
    productId = "",
    productCategory = "",
    productImageURL = "",
    owningAuthority = "",
    productPrice = 0,
    supportsLining = false,
    supportsRapidStitching = false,
  } = location.state || {};

  const { register, handleSubmit, setValue, control } = useForm();

  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [appointmentDate, setAppointmentDate] = useState<string | null>(null);
  const [hasLining, setHasLining] = useState(false);
  const [stitchingSpeed, setStitchingSpeed] =
    useState<"standard" | "express" | "rapid">("standard");

  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] =
    useState<"success" | "error" | "loading" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentType, setPaymentType] = useState("");

  const images = [doorstepConsultation, measurementsCollection, doorstepDelivery];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { postData, responseData, error } =
    usePostData("/api/cc/tailoringOrder");

  const BASE_PRICE = Number(productPrice) || 0;
  const liningPrice = supportsLining && hasLining ? LINING_PRICE : 0;
  const speedPrice = SPEED_PRICE_MAP[stitchingSpeed] || 0;
  const totalAmount = BASE_PRICE + liningPrice + speedPrice;

  const handleAppointmentDateChange = (date: Date | null) => {
    if (!date) return;
    const istDate = new Date(
      date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );
    const formatted = istDate.toISOString();
    setAppointmentDate(formatted);
    setValue("appointmentDate", formatted);
  };

  const setTime = (hour: number, minute: number) => {
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  };
  
  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  
  const getRoundedCurrentTime = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const remainder = minutes % 30;
    const addMinutes = remainder === 0 ? 0 : 30 - remainder;
  
    now.setMinutes(minutes + addMinutes);
    now.setSeconds(0);
    now.setMilliseconds(0);
  
    return now;
  };
  

  const onSubmit = (data: any) => {
    setIsSubmitting(true);

    data.productName = productName;
    data.productId = productId;
    data.productImageURL = productImageURL;
    data.productPrice = BASE_PRICE;
    data.owningAuthority = owningAuthority;
    data.stitchType = productCategory;
    data.city = selectedCity;

    data.hasLining = supportsLining ? hasLining : false;
    data.liningPrice = liningPrice;

    data.stitchingSpeed = supportsRapidStitching
      ? stitchingSpeed
      : "standard";
    data.speedPrice = speedPrice;

    data.totalAmount = totalAmount;

    setPaymentType(data.paymentType);
    backendConnection(data);
  };

  const handlePayment = async (cc_order: number) => {
    const amount = totalAmount;

    const response = await fetch(
      "https://admee.in:3003/api/cc/create-order",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      }
    );

    const { orderId } = await response.json();

    const options = {
      key: "rzp_live_eRPZbHTMQV50Ws",
      amount: amount * 100,
      currency: "INR",
      name: "Cotton Candy",
      description: "Tailoring Order Payment",
      order_id: orderId,
      handler: async (response: any) => {
        if (response.razorpay_payment_id) {
          await fetch(
            `https://admee.in:3003/api/cc/order/${cc_order}/payment`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId,
                paymentScenario: "tailoring",
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            }
          );
          setShowAnimation(true);
          setAnimationType("success");
          setTimeout(() => navigate("/home"), 2000);
        }
      },
      prefill: {
        name: authState?.userName || "User",
        email: authState?.userEmail || "user@email.com",
        contact: "9000000000",
      },
      theme: { color: "#f4b6c2" },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  const backendConnection = async (data: any) => {
    if (data.customDesignImage?.length) {
      const formData = new FormData();
      for (let file of data.customDesignImage) {
        formData.append("photos", file);
      }
      const s3Response = await axios.post(
        "https://admee.in:3003/aws/upload",
        formData
      );
      data.customDesignImage = s3Response.data.imageURLs;
    }
    await postData(data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (responseData?.status === 201) {
      if (paymentType === "payNow") {
        handlePayment(responseData.orderId);
      } else {
        setShowAnimation(true);
        setAnimationType("success");
        setTimeout(() => navigate("/home"), 2000);
      }
    }
    if (error) setAnimationType("error");
  }, [responseData, error]);

  return (
    <Box minH="100vh" bg="#fafcff" py={12} px={4}>
      <Box maxW="1100px" mx="auto">
        {!showAnimation && (
          <>
            <Box
              mb={10}
              borderRadius="28px"
              overflow="hidden"
              boxShadow="0 40px 100px rgba(0,0,0,0.08)"
            >
              <Image
                src={images[currentImageIndex]}
                w="100%"
                h={{ base: "240px", md: "340px" }}
                objectFit="cover"
              />
            </Box>

            <Flex direction="column">
              <Box
                bg="white"
                p={{ base: 6, md: 10 }}
                borderRadius="28px"
                boxShadow="0 40px 120px rgba(0,0,0,0.06)"
                border="1px solid rgba(244,182,194,0.25)"
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <VStack spacing={7} align="stretch">
                    <Heading
                      textAlign="center"
                      fontSize={{ base: "24px", md: "30px" }}
                      fontWeight="600"
                      color="#e48aa1"
                      letterSpacing="1px"
                    >
                      Tailoring Appointment
                    </Heading>

                    {productName && (
                      <Flex
                        gap={5}
                        p={5}
                        borderRadius="20px"
                        bg="#ffffff"
                        boxShadow="0 15px 40px rgba(0,0,0,0.05)"
                        align="center"
                      >
                        <Image
                          src={productImageURL}
                          boxSize="90px"
                          borderRadius="16px"
                          objectFit="cover"
                        />
                        <Text fontWeight="500" fontSize="lg">
                          {productName}
                        </Text>
                      </Flex>
                    )}
{/* 
                    {supportsLining && (
                      <FormControl>
                        <FormLabel fontWeight="500">Lining</FormLabel>
                        <RadioGroup
                          value={hasLining ? "yes" : "no"}
                          onChange={(v) => setHasLining(v === "yes")}
                        >
                          <HStack spacing={8}>
                            <Radio value="no">Without lining</Radio>
                            <Radio value="yes" colorScheme="pink">
                              With lining (+₹300)
                            </Radio>
                          </HStack>
                        </RadioGroup>
                      </FormControl>
                    )}

                    {supportsRapidStitching && (
                      <FormControl>
                        <FormLabel fontWeight="500">Stitching Speed</FormLabel>
                        <RadioGroup
                          value={stitchingSpeed}
                          onChange={(v: any) => setStitchingSpeed(v)}
                        >
                          <VStack align="start" spacing={3}>
                            <Radio value="standard">Standard – 5–7 Days</Radio>
                            <Radio value="express" colorScheme="blue">
                              Express – Next Day (+₹499)
                            </Radio>
                            <Radio value="rapid" colorScheme="pink">
                              Rapid – 2 Hour Delivery (+₹999)
                            </Radio>
                          </VStack>
                        </RadioGroup>
                      </FormControl>
                    )} */}

                    {/* CUSTOMIZATION BLOCK */}
                    {(supportsLining || supportsRapidStitching) && (
  <Box
    p={{ base: 6, md: 8 }}
    borderRadius="24px"
    bg="linear-gradient(145deg, #fff9fc, #f5fbff)"
    border="1px solid #f1f5f9"
    boxShadow="0 20px 60px rgba(0,0,0,0.05)"
  >
                  <VStack spacing={6} align="stretch">

                    {supportsLining && (
                      <FormControl>
                        <FormLabel fontWeight="600" fontSize="md">
                          Lining Upgrade
                        </FormLabel>
                        <RadioGroup
                          value={hasLining ? "yes" : "no"}
                          onChange={(v) => setHasLining(v === "yes")}
                        >
                          <HStack spacing={8}>
                            <Radio value="no">Without lining</Radio>
                            <Radio value="yes" colorScheme="pink">
                              With lining (+₹300)
                            </Radio>
                          </HStack>
                        </RadioGroup>
                      </FormControl>
                    )}

                    {supportsRapidStitching && (
                      <FormControl>
                        <FormLabel fontWeight="600" fontSize="md">
                          Delivery Priority
                        </FormLabel>
                        <RadioGroup
                          value={stitchingSpeed}
                          onChange={(v: any) => setStitchingSpeed(v)}
                        >
                          <VStack align="start" spacing={3}>
                            <Radio value="standard">
                              Standard – 5–7 Days
                            </Radio>
                            <Radio value="express" colorScheme="blue">
                              Express – Next Day (+₹499)
                            </Radio>
                            <Radio value="rapid" colorScheme="pink">
                              Rapid – 2 Hour Delivery (+₹999)
                            </Radio>
                          </VStack>
                        </RadioGroup>
                      </FormControl>
                    )}

                  </VStack>
                </Box>
               )}


                    <Box
                      p={6}
                      borderRadius="22px"
                      bg="linear-gradient(145deg,#fff7fb,#f0f8ff)"
                      boxShadow="0 15px 35px rgba(0,0,0,0.05)"
                    >
                      <HStack justify="space-between">
                        <Text fontSize="lg">Total Amount</Text>
                        <Text
                          fontSize="2xl"
                          fontWeight="600"
                          color="#e48aa1"
                        >
                          ₹{totalAmount}
                        </Text>
                      </HStack>
                    </Box>

                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        {...register("name")}
                        required
                        borderRadius="14px"
                        border="1px solid #e8edf3"
                        _focus={{
                          borderColor: "#f4b6c2",
                          boxShadow: "0 0 0 1px #f4b6c2",
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        {...register("email")}
                        required
                        borderRadius="14px"
                        border="1px solid #e8edf3"
                        _focus={{
                          borderColor: "#bde0fe",
                          boxShadow: "0 0 0 1px #bde0fe",
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Phone</FormLabel>
                      <Input
                        {...register("phone")}
                        required
                        borderRadius="14px"
                        border="1px solid #e8edf3"
                        _focus={{
                          borderColor: "#f4b6c2",
                          boxShadow: "0 0 0 1px #f4b6c2",
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Address</FormLabel>
                      <Textarea
                        {...register("address")}
                        required
                        borderRadius="14px"
                        border="1px solid #e8edf3"
                        _focus={{
                          borderColor: "#bde0fe",
                          boxShadow: "0 0 0 1px #bde0fe",
                        }}
                      />
                    </FormControl>

                    {/* <FormControl>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="600"
                      color="gray.600"
                      letterSpacing="0.5px"
                    >
                      City
                    </FormLabel>

                    <Box position="relative">
                      <Select
                        {...register("city")}
                        defaultValue="Chennai"
                        height="58px"
                        borderRadius="18px"
                        bg="white"
                        border="1px solid #edf2f7"
                        fontSize="15px"
                        fontWeight="500"
                        _hover={{
                          borderColor: "#dbeafe",
                        }}
                        _focus={{
                          borderColor: "#f4b6c2",
                          boxShadow: "0 0 0 1px #f4b6c2",
                        }}
                        sx={{
                          appearance: "none",
                        }}
                      >
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Bangalore">Bangalore</option>
                      </Select>

                
                      <Box
                        position="absolute"
                        right="16px"
                        top="50%"
                        transform="translateY(-50%)"
                        pointerEvents="none"
                        color="gray.400"
                        fontSize="14px"
                      >
                        ▾
                      </Box>
                    </Box>
                  </FormControl> */}


                  <FormControl>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="600"
                      color="gray.600"
                    >
                      City
                    </FormLabel>

                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        height="58px"
                        borderRadius="18px"
                        bg="white"
                        border="1px solid #edf2f7"
                        fontWeight="500"
                        _hover={{ bg: "white", borderColor: "#dbeafe" }}
                        _focus={{ borderColor: "#f4b6c2", boxShadow: "0 0 0 1px #f4b6c2" }}
                        width="100%"
                        textAlign="left"
                      >
                        {selectedCity}
                      </MenuButton>

                      <MenuList
                        borderRadius="18px"
                        boxShadow="0 20px 60px rgba(0,0,0,0.08)"
                        border="1px solid #f1f5f9"
                        py={2}
                      >
                        <MenuItem
                          borderRadius="12px"
                          _hover={{ bg: "#fdf2f8" }}
                          onClick={() => setSelectedCity("Chennai")}
                        >
                          Chennai
                        </MenuItem>

                        {/* Future Cities */}
                        {/* 
                        <MenuItem
                          borderRadius="12px"
                          _hover={{ bg: "#fdf2f8" }}
                          onClick={() => setSelectedCity("Coimbatore")}
                        >
                          Coimbatore
                        </MenuItem>
                        */}
                      </MenuList>
                    </Menu>
                  </FormControl>


                    <FormControl>
                      <FormLabel>Pincode</FormLabel>
                      <Input
                        {...register("pincode")}
                        required
                        borderRadius="14px"
                        border="1px solid #e8edf3"
                        _focus={{
                          borderColor: "#bde0fe",
                          boxShadow: "0 0 0 1px #bde0fe",
                        }}
                      />
                    </FormControl>

                    {/* <FormControl>
                      <FormLabel>Appointment Date</FormLabel>
                      <Controller
                        name="appointmentDate"
                        control={control}
                        render={() => (
                          <DatePicker
                            selected={
                              appointmentDate
                                ? new Date(appointmentDate)
                                : null
                            }
                            onChange={handleAppointmentDateChange}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                          />
                        )}
                      />
                    </FormControl> */}

<FormControl>
  <FormLabel fontWeight="500">Appointment Date & Time</FormLabel>

  <Box
    border="1px solid #e8edf3"
    borderRadius="14px"
    px={4}
    py={3}
    bg="white"
    display="flex"
    alignItems="center"
    _focusWithin={{
      borderColor: "#f4b6c2",
      boxShadow: "0 0 0 1px #f4b6c2",
    }}
  >
    <Controller
      name="appointmentDate"
      control={control}
      render={() => (
      <DatePicker
        selected={
          appointmentDate
            ? new Date(appointmentDate)
            : null
        }
        onChange={handleAppointmentDateChange}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy h:mm aa"
        showTimeSelect
        timeIntervals={30}
        timeCaption="Time"
        minTime={
          isToday(
            appointmentDate ? new Date(appointmentDate) : null
          )
            ? new Date(
                Math.max(
                  getRoundedCurrentTime().getTime(),
                  setTime(10, 0).getTime()
                )
              )
            : setTime(10, 0)
        }
        maxTime={setTime(19, 0)}
        placeholderText="Select your preferred date & time"
        className="premium-datepicker"
      />
      )}
    />
  </Box>
</FormControl>



                    <Controller
                      name="paymentType"
                      control={control}
                      defaultValue="cod"
                      render={({ field }) => (
                        <RadioGroup {...field}>
                          <HStack spacing={10}>
                            <Radio value="payNow" colorScheme="pink">
                              Pay Now
                            </Radio>
                            <Radio value="cod" colorScheme="blue">
                              Cash on Delivery
                            </Radio>
                          </HStack>
                        </RadioGroup>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      borderRadius="18px"
                      bg="#e48aa1"
                      color="white"
                      _hover={{
                        bg: "#d97790",
                        transform: "translateY(-2px)",
                        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                      }}
                      transition="all 0.3s ease"
                      isDisabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Flex>
          </>
        )}

        {showAnimation && (
          <Box textAlign="center" mt={20}>
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData:
                  animationType === "success"
                    ? successAnimation
                    : errorAnimation,
              }}
              height={170}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TailoringHome;
