// import React from "react";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Textarea,
//   Button,
//   VStack,
//   useToast,
// } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";

// export const ServiceBookingPage = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const toast = useToast();

//   const onSubmit = (data) => {
//     // Call your backend API with the form data
//     console.log("Form submitted successfully:", data);
//     toast({
//       title: "Service booked.",
//       description: "We've received your service booking request.",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//   };

//   const services = ["Tailoring", "Jewelry Rental", "Alterations"];
//   const variants = ["Basic", "Premium", "Luxury"];

//   return (
//     <Box
//       maxWidth="600px"
//       margin="auto"
//       padding="4"
//       boxShadow="lg"
//       borderRadius="md"
//       bg="white"
//     >
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <VStack spacing={4}>
//           {/* Full Name */}
//           <FormControl isRequired>
//             <FormLabel>Full Name</FormLabel>
//             <Input
//               {...register("fullName", { required: "Full Name is required" })}
//               placeholder="Enter your full name"
//             />
//             {errors.fullName && <p>{errors.fullName.message}</p>}
//           </FormControl>

//           {/* Address */}
//           <FormControl isRequired>
//             <FormLabel>Address</FormLabel>
//             <Textarea
//               {...register("address", { required: "Address is required" })}
//               placeholder="Enter your address"
//             />
//             {errors.address && <p>{errors.address.message}</p>}
//           </FormControl>

//           {/* Pincode */}
//           <FormControl isRequired>
//             <FormLabel>Pincode</FormLabel>
//             <Input
//               {...register("pincode", { required: "Pincode is required" })}
//               placeholder="Enter your pincode"
//             />
//             {errors.pincode && <p>{errors.pincode.message}</p>}
//           </FormControl>

//           {/* Contact Number */}
//           <FormControl isRequired>
//             <FormLabel>Contact Number</FormLabel>
//             <Input
//               {...register("contactNumber", {
//                 required: "Contact Number is required",
//                 pattern: {
//                   value: /^[0-9]{10}$/,
//                   message: "Invalid contact number",
//                 },
//               })}
//               placeholder="Enter your contact number"
//             />
//             {errors.contactNumber && <p>{errors.contactNumber.message}</p>}
//           </FormControl>

//           {/* Email */}
//           <FormControl isRequired>
//             <FormLabel>Email</FormLabel>
//             <Input
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
//                   message: "Invalid email address",
//                 },
//               })}
//               placeholder="Enter your email"
//             />
//             {errors.email && <p>{errors.email.message}</p>}
//           </FormControl>

//           {/* Appointment Date */}
//           <FormControl isRequired>
//             <FormLabel>Appointment Date</FormLabel>
//             <Input
//               type="date"
//               {...register("appointmentDate", { required: "Date is required" })}
//             />
//             {errors.appointmentDate && <p>{errors.appointmentDate.message}</p>}
//           </FormControl>

//           {/* Remarks */}
//           <FormControl>
//             <FormLabel>Remarks</FormLabel>
//             <Textarea {...register("remarks")} placeholder="Additional remarks" />
//           </FormControl>

//           {/* Service Selection */}
//           <FormControl isRequired>
//             <FormLabel>Select Service</FormLabel>
//             <Select
//               {...register("selectedService", { required: "Service is required" })}
//               placeholder="Select service"
//             >
//               {services.map((service, index) => (
//                 <option key={index} value={service}>
//                   {service}
//                 </option>
//               ))}
//             </Select>
//             {errors.selectedService && <p>{errors.selectedService.message}</p>}
//           </FormControl>

//           {/* Variant Selection */}
//           <FormControl isRequired>
//             <FormLabel>Select Variant</FormLabel>
//             <Select
//               {...register("selectedVariant", { required: "Variant is required" })}
//               placeholder="Select variant"
//             >
//               {variants.map((variant, index) => (
//                 <option key={index} value={variant}>
//                   {variant}
//                 </option>
//               ))}
//             </Select>
//             {errors.selectedVariant && <p>{errors.selectedVariant.message}</p>}
//           </FormControl>

//           {/* Submit Button */}
//           <Button type="submit" colorScheme="pink" width="full">
//             Book Service
//           </Button>
//         </VStack>
//       </form>
//     </Box>
//   );
// };

// export default ServiceBookingPage;



// Version 2 - Service Booking Page with more design 

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
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe, FaInstagram } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/DatePicker.css';
import usePostData from "../../hooks/usePostData";
import { useForm , Controller } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';


import doorstepConsultation from "../../assets/services/Mehendi1.jpg";
import measurementsCollection from "../../assets/services/Mehendi2.jpg";
import doorstepDelivery from "../../assets/services/Mehendi3.jpg";
import axios from "axios";

import Lottie from 'react-lottie';
import successAnimation from '../../animations/success.json';
import errorAnimation from '../..//animations/error.json';
import loadingAnimation from '../../animations/loading.json';

import { useAuth } from '../../contexts/AuthContext';

export const MehendiServiceBookingPage = () => {
  // State for image slider
 
  const { authState } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  // const {productName , productId , productCategory ,productImageURL} = location.state || null

  const { 
    productName = '', 
    productId = '', 
    productCategory = '', 
    productImageURL = '' ,
    owningAuthority = ''
  } = location.state || {};
  
  const userId = authState.userId;

  // console.log("Proudct Name and ID from tailoring booking page "+productName + "," +productId + "," +productCategory)
  const { register, handleSubmit, setValue ,control} = useForm();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [doorstepConsultation, measurementsCollection, doorstepDelivery];

  //const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
  const [appointmentDate, setAppointmentDate] = useState<string | null>(null);

  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
  //setShowAnimation(false);

  const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/mehendi/service/booking');

  // Date Picker Function 

  const onSubmit =  (data) => {

  //   const [variantType, variantPrice] = data.variant.split('-');
  // console.log('Type:', variantType);
  // console.log('Price:', variantPrice);

  
    data.serviceId = 1
    data.variantId = 1
    data.bookingStatus = 'pending';
    data.userId = userId;
    


  
 

    // if (productName && productImageURL)

    //   {
    //     data.productName = productName;
    //     data.productImageURL = productImageURL
    //   }
      console.log("Appointment Data from Form: ", data.appointmentDate);
      console.log("Prepared Data " +JSON.stringify(data))
    backendConnection(data);
    //setAlert(true);
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
      console.log("Response Order Id : "+responseData.orderId)
      if (responseData.status === 201) {
       
        setAnimationType('success');
        setTimeout(() => {
          navigate('/home'); // Navigate to home page after 3 seconds
        }, 7000);
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
  // const handleInputChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: files ? files[0] : value, // Handle file input separately
    
  //   }));
  // };

  // Handle form submission
  const backendConnection = async(data) => {

    



        
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
              <Text>
  Your order has been successfully placed! Please check your email for more details regarding your order. 
  If you have any further questions or need assistance, feel free to reach out to us at support@cottoncandy.co.in or call us at +91 9788875557.
</Text>

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
        Elegant & Affordable Mehendi at Your Doorstep – Starting from Just ₹199! 💫

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
          Book Mehendi Service 
        </Button>
      </Box>

      <Flex direction={{ base: "column", lg: "row" }} gap={6}>
        {/* Left Column: Form */}
        
        <Box flex="1" p={5} boxShadow="lg" borderRadius="md" bg="white" id="bookingForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <VStack spacing={4} align="stretch" as="form" onSubmit={handleSubmit}> */}
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="lg" textAlign="center" mb={5} color="pink.500">
              Mehendi Service Booking 
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
                {...register('phoneNumber')}
                  type="tel"
                  
                  placeholder="Enter your phone number"
                  // borderColor="grey"
                  required
                />
              </InputGroup>
            </FormControl>

           {/* Variant and price */}
           <FormControl>
          <FormLabel>Variant</FormLabel>
          <Select
            {...register('variant')}
            placeholder="Select variant"
            required
          >
            <option value="guest-199">Guest Mehendi - ₹199</option>
            <option value="bridalPalm-299">Bridal Palm Only - ₹299</option>
            <option value="bridalBangle-899">Bridal Up to Bangle - ₹899</option>
            <option value="bridalElbow-1099">Bridal Up to Elbow - ₹1099</option>
            <option value="Leg-399">Leg - ₹399</option>
            <option value="bridalFull-1799">Full Bridal Hand and Leg - ₹1799</option>
          </Select>
        </FormControl>


            <FormControl>
              <FormLabel>City</FormLabel>
              <Select
              {...register('city')}
               
                placeholder="Select option"
                // borderColor="grey"
                required
              >
                <option value="chennai">Chennai</option>
                <option value="trichy">Trichy</option>
                <option value="madurai">Madurai</option>
                <option value="coimbatore">Coimbatore</option>
                <option value="Tirunelveli">Tirunelveli</option>
                {/* <option value="suit">Suit</option>
                <option value="dress">Dress</option> */}
              </Select>
            </FormControl>

            {/* <FormControl>
              <FormLabel>Custom Design (Optional)</FormLabel>
              <Input
              {...register('customDesignImage')}
                type="file"
                
                accept="image/*" 
                multiple
                // borderColor="grey"
                
              />
            </FormControl> */}

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
              <FormLabel fontWeight="bold">Service Date</FormLabel>
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

            <FormControl >
              <FormLabel >Preferred Time</FormLabel>
              <Select bgColor='pink.50'
              {...register('serviceTime')}
               
                placeholder="Select Preferred Service Time"
                // borderColor="grey"
                required
                
              >
                <option value="9 am">9 am</option>
                <option value="10 am">10 am</option>
                <option value="11 am">11 am</option>
                <option value="12 pm">12 pm</option>
                <option value="1 pm">1 pm</option>
                <option value="2 pm">2 pm</option>
                <option value="3 pm">3 pm</option>
                <option value="4 pm">4 pm</option>
                <option value="5 pm">5 pm</option>
                <option value="6 pm">6 pm</option>
                <option value="7 pm">7 pm</option>
                {/* <option value="suit">Suit</option>
                <option value="dress">Dress</option> */}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Booking Notes</FormLabel>
              <Textarea
              {...register('remarks')}
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
            At Cotton Candy, we make it easy to get beautiful Mehendi designs at your convenience:
          </Text>
          <VStack align="start" spacing={2}>
            <Flex align="center">
              <MdCheckCircle color="green" />
              <Text ml={2}>Book your service online with just a few clicks.</Text>
            </Flex>
            <Flex align="center">
              <MdCheckCircle color="green" />
              <Text ml={2}>Our skilled Mehendi artist visits your location to create stunning designs.
              </Text>
            </Flex>
            <Flex align="center">
              <MdCheckCircle color="green" />
              <Text ml={2}>Enjoy your perfect Mehendi, all in the comfort of your home.</Text>
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
            <Text ml={2}>Monday - Sunday: 10:00 AM - 7:00 PM</Text>
          </Flex>
          {/* <Flex align="center">
            <FaClock color="green" />
            <Text align='start' ml={2}>Saturday: 9:00 AM - 7:00 PM</Text>
          </Flex>
          <Flex align="center">
            <FaClock color="orange" />
            <Text align = 'start' color = "red" ml={2}>Sunday: Closed</Text>
          </Flex> */}
        </VStack>


        <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
          Contact Us
        </Heading>

        <VStack align="start" spacing={2} mb={4}>
          <Flex align="center">
            <FaPhone color="#b82d92" />
            {/* <Text ml={2}>9629705557</Text> */}
            <Text ml={2}>9788875557</Text>
          </Flex>
          <Flex align="center">
            <FaEnvelope color="#b82d92" />
            <Text align='start' ml={2}>support@cottoncandy.co.in</Text>
          </Flex>
          <Flex align="center">
            <FaGlobe color="#b82d92" />
            <Text align = 'start' ml={2}>India , UK , UAE</Text>
          </Flex>
          <Flex align="center" as="a" href="https://instagram.com/cottoncandy_insta" target="_blank" rel="noopener noreferrer">
          <FaInstagram color="#b82d92" />
          <Text align="start" ml={2}>@cottoncandy_insta</Text>
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
            <Text ml={2}>Book your service online with just a few clicks.</Text>
          </Flex>
          <Flex align="center">
            <MdCheckCircle color="green" />
            <Text align='start' ml={2}>Our skilled Mehendi artist visits your location to create stunning designs.</Text>
          </Flex>
          <Flex align="center">
            <MdCheckCircle color="green" />
            <Text align = 'start' ml={2}>Enjoy your perfect Mehendi, all in the comfort of your home.</Text>
          </Flex>
        </VStack>

         {/* Operational Hours */}
         <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
          Operation Hours
        </Heading>
        <VStack align="start" spacing={2} mb={4}>
          <Flex align="center">
            <FaClock color="green" />
            <Text ml={2}>Monday - Sunday: 10:00 AM - 7:00 PM</Text>
          </Flex>
          {/* <Flex align="center">
            <FaClock color="green" />
            <Text align='start' ml={2}>Saturday: 11:00 AM - 4:00 PM</Text>
          </Flex>
          <Flex align="center">
            <FaClock color="orange" />
            <Text align = 'start' ml={2} color='red'>Sunday: Closed</Text>
          </Flex> */}
        </VStack>


        {/* Contact Information  */}

        <Heading as="h3" size="md" mt={6} mb={3} color="pink.500">
          Contact Us
        </Heading>

        <VStack align="start" spacing={2} mb={4}>
          <Flex align="center">
            <FaPhone color="#b82d92" />
            {/* <Text ml={2}>9629705557</Text> */}
            <Text ml={2}>9788875557</Text>
          </Flex>
          <Flex align="center">
            <FaEnvelope color="#b82d92" />
            <Text align='start' ml={2}>support@cottoncandy.co.in</Text>
          </Flex>
          <Flex align="center">
            <FaGlobe color="#b82d92" />
            <Text align = 'start' ml={2}>India , UK , UAE</Text>
          </Flex>
          
          <Flex align="center" as="a" href="https://instagram.com/cottoncandy_insta" target="_blank" rel="noopener noreferrer">
          <FaInstagram color="#b82d92" />
          <Text align="start" ml={2}>@cottoncandy_insta</Text>
        </Flex>

        </VStack>

      </Box>
      </>
      )}
    </Box>
  );
};
