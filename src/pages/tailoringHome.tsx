
// Version 1 : 


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







// Version 2 : Enhancements to version 1 

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   VStack,
//   Heading,
//   Text,
//   Image,
//   Radio,
//   RadioGroup,
//   HStack,
//   Select,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from "@chakra-ui/react";

// import { ChevronDownIcon } from "@chakra-ui/icons";


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

//   const [selectedCity, setSelectedCity] = useState("Chennai");
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

//   const BASE_PRICE = Number(productPrice) || 0;
//   const liningPrice = supportsLining && hasLining ? LINING_PRICE : 0;
//   const speedPrice = SPEED_PRICE_MAP[stitchingSpeed] || 0;
//   const totalAmount = BASE_PRICE + liningPrice + speedPrice;

//   const handleAppointmentDateChange = (date: Date | null) => {
//     if (!date) return;
//     const istDate = new Date(
//       date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
//     );
//     const formatted = istDate.toISOString();
//     setAppointmentDate(formatted);
//     setValue("appointmentDate", formatted);
//   };

//   const setTime = (hour: number, minute: number) => {
//     const date = new Date();
//     date.setHours(hour);
//     date.setMinutes(minute);
//     date.setSeconds(0);
//     date.setMilliseconds(0);
//     return date;
//   };
  
//   const isToday = (date: Date | null) => {
//     if (!date) return false;
//     const today = new Date();
//     return (
//       date.getDate() === today.getDate() &&
//       date.getMonth() === today.getMonth() &&
//       date.getFullYear() === today.getFullYear()
//     );
//   };
  
//   const getRoundedCurrentTime = () => {
//     const now = new Date();
//     const minutes = now.getMinutes();
//     const remainder = minutes % 30;
//     const addMinutes = remainder === 0 ? 0 : 30 - remainder;
  
//     now.setMinutes(minutes + addMinutes);
//     now.setSeconds(0);
//     now.setMilliseconds(0);
  
//     return now;
//   };
  

//   const onSubmit = (data: any) => {
//     setIsSubmitting(true);

//     data.productName = productName;
//     data.productId = productId;
//     data.productImageURL = productImageURL;
//     data.productPrice = BASE_PRICE;
//     data.owningAuthority = owningAuthority;
//     data.stitchType = productCategory;
//     data.city = selectedCity;

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
//       theme: { color: "#f4b6c2" },
//     };

//     const razorpay = new (window as any).Razorpay(options);
//     razorpay.open();
//   };

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

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((i) => (i + 1) % images.length);
//     }, 3500);
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

//   return (
//     <Box minH="100vh" bg="#fafcff" py={12} px={4}>
//       <Box maxW="1100px" mx="auto">
//         {!showAnimation && (
//           <>
//             <Box
//               mb={10}
//               borderRadius="28px"
//               overflow="hidden"
//               boxShadow="0 40px 100px rgba(0,0,0,0.08)"
//             >
//               <Image
//                 src={images[currentImageIndex]}
//                 w="100%"
//                 h={{ base: "240px", md: "340px" }}
//                 objectFit="cover"
//               />
//             </Box>

//             <Flex direction="column">
//               <Box
//                 bg="white"
//                 p={{ base: 6, md: 10 }}
//                 borderRadius="28px"
//                 boxShadow="0 40px 120px rgba(0,0,0,0.06)"
//                 border="1px solid rgba(244,182,194,0.25)"
//               >
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <VStack spacing={7} align="stretch">
//                     <Heading
//                       textAlign="center"
//                       fontSize={{ base: "24px", md: "30px" }}
//                       fontWeight="600"
//                       color="#e48aa1"
//                       letterSpacing="1px"
//                     >
//                       Tailoring Appointment
//                     </Heading>

//                     {productName && (
//                       <Flex
//                         gap={5}
//                         p={5}
//                         borderRadius="20px"
//                         bg="#ffffff"
//                         boxShadow="0 15px 40px rgba(0,0,0,0.05)"
//                         align="center"
//                       >
//                         <Image
//                           src={productImageURL}
//                           boxSize="90px"
//                           borderRadius="16px"
//                           objectFit="cover"
//                         />
//                         <Text fontWeight="500" fontSize="lg">
//                           {productName}
//                         </Text>
//                       </Flex>
//                     )}

//                     {/* CUSTOMIZATION BLOCK */}
//                     {(supportsLining || supportsRapidStitching) && (
//   <Box
//     p={{ base: 6, md: 8 }}
//     borderRadius="24px"
//     bg="linear-gradient(145deg, #fff9fc, #f5fbff)"
//     border="1px solid #f1f5f9"
//     boxShadow="0 20px 60px rgba(0,0,0,0.05)"
//   >
//                   <VStack spacing={6} align="stretch">

//                     {supportsLining && (
//                       <FormControl>
//                         <FormLabel fontWeight="600" fontSize="md">
//                           Lining Upgrade
//                         </FormLabel>
//                         <RadioGroup
//                           value={hasLining ? "yes" : "no"}
//                           onChange={(v) => setHasLining(v === "yes")}
//                         >
//                           <HStack spacing={8}>
//                             <Radio value="no">Without lining</Radio>
//                             <Radio value="yes" colorScheme="pink">
//                               With lining (+₹300)
//                             </Radio>
//                           </HStack>
//                         </RadioGroup>
//                       </FormControl>
//                     )}

//                     {supportsRapidStitching && (
//                       <FormControl>
//                         <FormLabel fontWeight="600" fontSize="md">
//                           Delivery Priority
//                         </FormLabel>
//                         <RadioGroup
//                           value={stitchingSpeed}
//                           onChange={(v: any) => setStitchingSpeed(v)}
//                         >
//                           <VStack align="start" spacing={3}>
//                             <Radio value="standard">
//                               Standard – 5–7 Days
//                             </Radio>
//                             <Radio value="express" colorScheme="blue">
//                               Express – Next Day (+₹499)
//                             </Radio>
//                             <Radio value="rapid" colorScheme="pink">
//                               Rapid – 2 Hour Delivery (+₹999)
//                             </Radio>
//                           </VStack>
//                         </RadioGroup>
//                       </FormControl>
//                     )}

//                   </VStack>
//                 </Box>
//                )}


//                     <Box
//                       p={6}
//                       borderRadius="22px"
//                       bg="linear-gradient(145deg,#fff7fb,#f0f8ff)"
//                       boxShadow="0 15px 35px rgba(0,0,0,0.05)"
//                     >
//                       <HStack justify="space-between">
//                         <Text fontSize="lg">Total Amount</Text>
//                         <Text
//                           fontSize="2xl"
//                           fontWeight="600"
//                           color="#e48aa1"
//                         >
//                           ₹{totalAmount}
//                         </Text>
//                       </HStack>
//                     </Box>

//                     <FormControl>
//                       <FormLabel>Name</FormLabel>
//                       <Input
//                         {...register("name")}
//                         required
//                         borderRadius="14px"
//                         border="1px solid #e8edf3"
//                         _focus={{
//                           borderColor: "#f4b6c2",
//                           boxShadow: "0 0 0 1px #f4b6c2",
//                         }}
//                       />
//                     </FormControl>

//                     <FormControl>
//                       <FormLabel>Email</FormLabel>
//                       <Input
//                         {...register("email")}
//                         required
//                         borderRadius="14px"
//                         border="1px solid #e8edf3"
//                         _focus={{
//                           borderColor: "#bde0fe",
//                           boxShadow: "0 0 0 1px #bde0fe",
//                         }}
//                       />
//                     </FormControl>

//                     <FormControl>
//                       <FormLabel>Phone</FormLabel>
//                       <Input
//                         {...register("phone")}
//                         required
//                         borderRadius="14px"
//                         border="1px solid #e8edf3"
//                         _focus={{
//                           borderColor: "#f4b6c2",
//                           boxShadow: "0 0 0 1px #f4b6c2",
//                         }}
//                       />
//                     </FormControl>

//                     <FormControl>
//                       <FormLabel>Address</FormLabel>
//                       <Textarea
//                         {...register("address")}
//                         required
//                         borderRadius="14px"
//                         border="1px solid #e8edf3"
//                         _focus={{
//                           borderColor: "#bde0fe",
//                           boxShadow: "0 0 0 1px #bde0fe",
//                         }}
//                       />
//                     </FormControl>

                   


//                   <FormControl>
//                     <FormLabel
//                       fontSize="sm"
//                       fontWeight="600"
//                       color="gray.600"
//                     >
//                       City
//                     </FormLabel>

//                     <Menu>
//                       <MenuButton
//                         as={Button}
//                         rightIcon={<ChevronDownIcon />}
//                         height="58px"
//                         borderRadius="18px"
//                         bg="white"
//                         border="1px solid #edf2f7"
//                         fontWeight="500"
//                         _hover={{ bg: "white", borderColor: "#dbeafe" }}
//                         _focus={{ borderColor: "#f4b6c2", boxShadow: "0 0 0 1px #f4b6c2" }}
//                         width="100%"
//                         textAlign="left"
//                       >
//                         {selectedCity}
//                       </MenuButton>

//                       <MenuList
//                         borderRadius="18px"
//                         boxShadow="0 20px 60px rgba(0,0,0,0.08)"
//                         border="1px solid #f1f5f9"
//                         py={2}
//                       >
//                         <MenuItem
//                           borderRadius="12px"
//                           _hover={{ bg: "#fdf2f8" }}
//                           onClick={() => setSelectedCity("Chennai")}
//                         >
//                           Chennai
//                         </MenuItem>

//                         {/* Future Cities */}
                        
//                         <MenuItem
//                           borderRadius="12px"
//                           _hover={{ bg: "#fdf2f8" }}
//                           onClick={() => setSelectedCity("Coimbatore")}
//                         >
//                           Coimbatore
//                         </MenuItem>

//                         <MenuItem
//                           borderRadius="12px"
//                           _hover={{ bg: "#fdf2f8" }}
//                           onClick={() => setSelectedCity("Banglore")}
//                         >
//                           Banglore
//                         </MenuItem>

//                         <MenuItem
//                           borderRadius="12px"
//                           _hover={{ bg: "#fdf2f8" }}
//                           onClick={() => setSelectedCity("Trichy")}
//                         >
//                           Trichy
//                         </MenuItem>
                       
//                       </MenuList>
//                     </Menu>
//                   </FormControl>


//                     <FormControl>
//                       <FormLabel>Pincode</FormLabel>
//                       <Input
//                         {...register("pincode")}
//                         required
//                         borderRadius="14px"
//                         border="1px solid #e8edf3"
//                         _focus={{
//                           borderColor: "#bde0fe",
//                           boxShadow: "0 0 0 1px #bde0fe",
//                         }}
//                       />
//                     </FormControl>



// <FormControl>
//   <FormLabel fontWeight="500">Appointment Date & Time</FormLabel>

//   <Box
//     border="1px solid #e8edf3"
//     borderRadius="14px"
//     px={4}
//     py={3}
//     bg="white"
//     display="flex"
//     alignItems="center"
//     _focusWithin={{
//       borderColor: "#f4b6c2",
//       boxShadow: "0 0 0 1px #f4b6c2",
//     }}
//   >
//     <Controller
//       name="appointmentDate"
//       control={control}
//       render={() => (
//       <DatePicker
//         selected={
//           appointmentDate
//             ? new Date(appointmentDate)
//             : null
//         }
//         onChange={handleAppointmentDateChange}
//         minDate={new Date()}
//         dateFormat="dd/MM/yyyy h:mm aa"
//         showTimeSelect
//         timeIntervals={30}
//         timeCaption="Time"
//         minTime={
//           isToday(
//             appointmentDate ? new Date(appointmentDate) : null
//           )
//             ? new Date(
//                 Math.max(
//                   getRoundedCurrentTime().getTime(),
//                   setTime(10, 0).getTime()
//                 )
//               )
//             : setTime(10, 0)
//         }
//         maxTime={setTime(19, 0)}
//         placeholderText="Select your preferred date & time"
//         className="premium-datepicker"
//       />
//       )}
//     />
//   </Box>
// </FormControl>



//                     <Controller
//                       name="paymentType"
//                       control={control}
//                       defaultValue="cod"
//                       render={({ field }) => (
//                         <RadioGroup {...field}>
//                           <HStack spacing={10}>
//                             <Radio value="payNow" colorScheme="pink">
//                               Pay Now
//                             </Radio>
//                             <Radio value="cod" colorScheme="blue">
//                               Cash on Delivery
//                             </Radio>
//                           </HStack>
//                         </RadioGroup>
//                       )}
//                     />

//                     <Button
//                       type="submit"
//                       size="lg"
//                       borderRadius="18px"
//                       bg="#e48aa1"
//                       color="white"
//                       _hover={{
//                         bg: "#d97790",
//                         transform: "translateY(-2px)",
//                         boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
//                       }}
//                       transition="all 0.3s ease"
//                       isDisabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Processing..." : "Place Order"}
//                     </Button>
//                   </VStack>
//                 </form>
//               </Box>
//             </Flex>
//           </>
//         )}

//         {showAnimation && (
//           <Box textAlign="center" mt={20}>
//             <Lottie
//               options={{
//                 loop: false,
//                 autoplay: true,
//                 animationData:
//                   animationType === "success"
//                     ? successAnimation
//                     : errorAnimation,
//               }}
//               height={170}
//             />
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default TailoringHome;



// Version 3 : Enhancements to Version 2

// FULL WORKING TAILORING HOME WITH CUSTOMIZATION SUPPORT

// FULL WORKING TAILORING HOME WITH CUSTOMIZATION (SAFE VERSION)

// COMPLETE PREMIUM TAILORING HOME WITH CUSTOMIZATION

import React, { useState, useEffect, useMemo } from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
  Badge,
  Divider
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/DatePicker.css";

import { useForm, Controller } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import successAnimation from "../animations/success.json";
import errorAnimation from "../animations/error.json";
import { useAuth } from "../contexts/AuthContext";
import usePostData from "../hooks/usePostData";

const LINING_PRICE = 300;

const SPEED_PRICE_MAP = {
  standard: 0,
  express: 499,
  rapid: 999,
};

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
    customizations = [],
  } = location.state || {};

  const { register, handleSubmit, setValue, control } = useForm();

  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [appointmentDate, setAppointmentDate] = useState<string | null>(null);
  const [hasLining, setHasLining] = useState(false);
  const [stitchingSpeed, setStitchingSpeed] =
    useState<"standard" | "express" | "rapid">("standard");

  const [selectedCustomizations, setSelectedCustomizations] =
    useState<{ [key: number]: number }>({});

  const [showCustomization, setShowCustomization] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] =
    useState<"success" | "error" | null>(null);

  const { postData, responseData, error } =
    usePostData("/api/cc/tailoringOrder");

  /* ================= PRICE CALCULATION ================= */

  const BASE_PRICE = Number(productPrice) || 0;

  const liningPrice = supportsLining && hasLining ? LINING_PRICE : 0;
  const speedPrice = SPEED_PRICE_MAP[stitchingSpeed] || 0;

  const customizationPrice = useMemo(() => {
    return customizations.reduce((total: number, category: any) => {
      const selectedId = selectedCustomizations[category.CategoryID];
      if (!selectedId) return total;

      const option = category.Options.find(
        (opt: any) => opt.CustomizationID === selectedId
      );

      return total + (option?.PriceAdjustment || 0);
    }, 0);
  }, [selectedCustomizations, customizations]);

  const totalAmount =
    BASE_PRICE + liningPrice + speedPrice + customizationPrice;

  /* ===================================================== */

  const toggleCustomization = () =>
    setShowCustomization((prev) => !prev);

  const handleCustomizationClick = (
    categoryId: number,
    customizationId: number
  ) => {
    setSelectedCustomizations((prev) => {
      const alreadySelected = prev[categoryId] === customizationId;

      if (alreadySelected) {
        const updated = { ...prev };
        delete updated[categoryId];
        return updated;
      }

      return {
        ...prev,
        [categoryId]: customizationId,
      };
    });
  };

  const handleAppointmentDateChange = (date: Date | null) => {
    if (!date) return;
    const formatted = date.toISOString();
    setAppointmentDate(formatted);
    setValue("appointmentDate", formatted);
  };

  const onSubmit = (data: any) => {

    data.productId = productId;
    data.productImageURL = productImageURL;
    data.productPrice = BASE_PRICE;
    data.owningAuthority = owningAuthority;
    data.stitchType = productCategory;
    data.city = selectedCity;

    data.hasLining = hasLining;
    data.liningPrice = liningPrice;

    data.stitchingSpeed = stitchingSpeed;
    data.speedPrice = speedPrice;

    data.totalAmount = totalAmount;
    data.selectedCustomizations = Object.values(selectedCustomizations);

    postData(data);
  };

  useEffect(() => {
    if (responseData?.status === 201) {
      setShowAnimation(true);
      setAnimationType("success");
      setTimeout(() => navigate("/home"), 2000);
    }
    if (error) setAnimationType("error");
  }, [responseData, error]);

  return (
    <Box minH="100vh" bg="#fafcff" py={12} px={4}>
      <Box maxW="1100px" mx="auto">

        {!showAnimation && (

          <Box
            bg="white"
            p={{ base: 6, md: 10 }}
            borderRadius="28px"
            boxShadow="0 40px 120px rgba(0,0,0,0.06)"
          >

            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={8} align="stretch">

                <Heading textAlign="center" color="#e48aa1">
                  Tailoring Appointment
                </Heading>

                {/* PRODUCT */}
                {productName && (
                  <Flex gap={5} p={5} borderRadius="20px" bg="#fff7fb">
                    <Image
                      src={productImageURL}
                      boxSize="90px"
                      borderRadius="16px"
                      objectFit="cover"
                    />
                    <Text fontWeight="600" fontSize="lg">
                      {productName}
                    </Text>
                  </Flex>
                )}

                {/* LINING */}
                {supportsLining && (
                  <FormControl>
                    <FormLabel>Lining</FormLabel>
                    <RadioGroup
                      value={hasLining ? "yes" : "no"}
                      onChange={(v) => setHasLining(v === "yes")}
                    >
                      <HStack>
                        <Radio value="no">Without lining</Radio>
                        <Radio value="yes" colorScheme="pink">
                          With lining (+₹300)
                        </Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                )}

                {/* SPEED */}
                {supportsRapidStitching && (
                  <FormControl>
                    <FormLabel>Delivery Speed</FormLabel>
                    <RadioGroup
                      value={stitchingSpeed}
                      onChange={(v: any) => setStitchingSpeed(v)}
                    >
                      <VStack align="start">
                        <Radio value="standard">Standard</Radio>
                        <Radio value="express">Express (+₹499)</Radio>
                        <Radio value="rapid">Rapid (+₹999)</Radio>
                      </VStack>
                    </RadioGroup>
                  </FormControl>
                )}

                <Divider />

                {/* CUSTOMIZATION BUTTON */}
                {customizations.length > 0 && (
                  <Button
                    onClick={toggleCustomization}
                    size="md"
                    borderRadius="full"
                    bg="linear-gradient(135deg,#f4b6c2,#bde0fe)"
                    color="white"
                    _hover={{ opacity: 0.9 }}
                  >
                    {showCustomization
                      ? "Hide Custom Designs"
                      : "Explore Design Customizations"}
                  </Button>
                )}

                {/* CUSTOMIZATION SECTION */}
                <Collapse in={showCustomization} animateOpacity>
                  <VStack spacing={6} mt={4}>
                    {customizations.map((category: any) => (
                      <Box key={category.CategoryID} w="100%">
                        <FormLabel fontWeight="600">
                          {category.CategoryName}
                        </FormLabel>

                        <HStack overflowX="auto" spacing={4}>
                          {category.Options.map((option: any) => {

                            const isSelected =
                              selectedCustomizations[
                                category.CategoryID
                              ] === option.CustomizationID;

                            return (
                              <Box
                                key={option.CustomizationID}
                                minW="150px"
                                borderRadius="16px"
                                overflow="hidden"
                                border={
                                  isSelected
                                    ? "3px solid #e48aa1"
                                    : "1px solid #edf2f7"
                                }
                                cursor="pointer"
                                onClick={() =>
                                  handleCustomizationClick(
                                    category.CategoryID,
                                    option.CustomizationID
                                  )
                                }
                              >
                                <Image
                                  src={option.CustomizationImageURL}
                                  h="120px"
                                  objectFit="cover"
                                />
                                <Box p={3}>
                                  <Text fontSize="sm">
                                    {option.CustomizationName}
                                  </Text>
                                  {option.PriceAdjustment > 0 && (
                                    <Badge colorScheme="pink">
                                      +₹{option.PriceAdjustment}
                                    </Badge>
                                  )}
                                </Box>
                              </Box>
                            );
                          })}
                        </HStack>
                      </Box>
                    ))}
                  </VStack>
                </Collapse>

                {/* USER DETAILS */}
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input {...register("name")} required />
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input {...register("email")} required />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input {...register("phone")} required />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea {...register("address")} required />
                </FormControl>

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
                        
                        <MenuItem
                          borderRadius="12px"
                          _hover={{ bg: "#fdf2f8" }}
                          onClick={() => setSelectedCity("Coimbatore")}
                        >
                          Coimbatore
                        </MenuItem>

                        <MenuItem
                          borderRadius="12px"
                          _hover={{ bg: "#fdf2f8" }}
                          onClick={() => setSelectedCity("Banglore")}
                        >
                          Banglore
                        </MenuItem>

                        <MenuItem
                          borderRadius="12px"
                          _hover={{ bg: "#fdf2f8" }}
                          onClick={() => setSelectedCity("Trichy")}
                        >
                          Trichy
                        </MenuItem>
                       
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

                {/* APPOINTMENT */}
                <FormControl>
                  <FormLabel>Appointment Date & Time</FormLabel>
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
                        showTimeSelect
                        dateFormat="dd/MM/yyyy h:mm aa"
                      />
                    )}
                  />
                </FormControl>

                {/* TOTAL */}
                <Box
                  p={6}
                  borderRadius="20px"
                  bg="linear-gradient(135deg,#fff7fb,#f0f8ff)"
                >
                  <HStack justify="space-between">
                    <Text fontSize="lg">Total Amount</Text>
                    <Text fontSize="2xl" fontWeight="bold" color="#e48aa1">
                      ₹{totalAmount}
                    </Text>
                  </HStack>
                </Box>

                <Button
                  type="submit"
                  size="lg"
                  borderRadius="20px"
                  bg="#e48aa1"
                  color="white"
                >
                  Place Order
                </Button>

              </VStack>
            </form>
          </Box>
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



