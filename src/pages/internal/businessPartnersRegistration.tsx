import React , {useState , useEffect}  from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhone, FaLocationArrow, FaCalendarAlt, FaLock } from 'react-icons/fa';
import axios from 'axios';
import usePostData from '../../hooks/usePostData';

import Lottie from 'react-lottie';
import successAnimation from '../../animations/success.json';
import errorAnimation from '../../animations/error.json';
import loadingAnimation from '../../animations/loading.json';

export const BusinessPartnerRegistration = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const { postData, data, error, isLoading, responseData } = usePostData('/api/businessPartnerRegistration');

  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);


  useEffect(() => {
    if (responseData) {
      if (responseData.status === 201) {
        
        setAnimationType('success');
        setTimeout(() => {
          navigate('/login'); // Navigate to home page after 3 seconds
        }, 3000);
      } else {
        setAnimationType('error');
      }
    } else if (error) {
      setAnimationType('error');
      setTimeout(() => {
        navigate('/businessPartnerForm'); // Navigate back to checkout page after a few seconds
      }, 3000);
    }
  }, [responseData, error, navigate]);

  const onSubmit = (data) => {
   

   // reset();
    backendConnection(data);


   
  };

  const backendConnection = async(data) => {

    // Image Upload Logic Begins

    const formData = new FormData();

    for (let i = 0; i < data.aadharCard.length; i++) {
        formData.append('photos', data.aadharCard[i]);
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
        data.aadharImageURL = s3Response.data.imageURLs
        data.user_type = "bp"
        data.role = "partner"
        console.log("Custom IMage URL :" +data.aadharImageURL)
        console.log('Form Data:', data);
  } catch (error) {
    console.error('Error uploading images to AWS S3:', error);
   
   // setResponseData(error)
  }
  setShowAnimation(true);
  setAnimationType('loading');
  await postData(data);
  
  }
  return (
    <Box
      maxW="600px"
      mx="auto"
      p={8}
      borderRadius="md"
      boxShadow="lg"
      bg="white"
      mt={10}
      borderColor="#b82d92"
      borderWidth="2px"
    >

{showAnimation && (
        <Box className="animationContainer">
          {animationType === 'loading' && (
            <Lottie options={{ loop: true, autoplay: true, animationData: loadingAnimation }} style={{ width: '150px', height: '150px' }} />
          )}
          {animationType === 'success' && (
            <Box textAlign="center">
              <Lottie options={{ loop: false, autoplay: true, animationData: successAnimation }} style={{ width: '150px', height: '150px' }} />
              <Text>Your account has been successfully created</Text>
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

{!showAnimation && (
        <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          {/* Name */}
          <FormControl isInvalid={errors.name}>
            <FormLabel>Full Name</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="#b82d92" />
              </InputLeftElement>
              <Input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Enter your name"
                borderColor="grey"
                _placeholder={{ color: 'grey' }}
              />
            </InputGroup>
          </FormControl>
          <FormControl isInvalid={errors.name}>
            <FormLabel>Business Name</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="#b82d92" />
              </InputLeftElement>
              <Input
                {...register('businessName', { required: 'Business Name is required' })}
                type="text"
                placeholder="Enter your name"
                borderColor="grey"
                _placeholder={{ color: 'grey' }}
              />
            </InputGroup>
          </FormControl>

          {/* Email */}
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email Address</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaEnvelope color="#b82d92" />
              </InputLeftElement>
              <Input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                placeholder="Enter your email"
                borderColor="grey"
                _placeholder={{ color: 'grey' }}
              />
            </InputGroup>
          </FormControl>

          {/* Contact Number */}
          <FormControl isInvalid={errors.contact}>
            <FormLabel>Contact Number</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaPhone color="#b82d92" />
              </InputLeftElement>
              <Input
                {...register('mobile', {
                  required: 'Contact number is required',
                  minLength: {
                    value: 1,
                    message: 'Contact number should be at least 10 digits',
                  },
                })}
                type="tel"
                placeholder="Enter your contact number"
                borderColor="grey"
                _placeholder={{ color: 'grey' }}
              />
            </InputGroup>
          </FormControl>


          <FormControl>
              <FormLabel>AADHAR Card</FormLabel>
              <Input
              {...register('aadharCard')}
                type="file"
                
                accept="image/*" 
                multiple
                // borderColor="grey"
                
              />
            </FormControl>

          {/* Address */}
          <FormControl isInvalid={errors.address}>
            <FormLabel>Address</FormLabel>
            <Textarea
              {...register('address', { required: 'Address is required' })}
              placeholder="Enter your address"
              borderColor="grey"
              _placeholder={{ color: 'grey' }}
            />
          </FormControl>

          {/* City */}

          <FormControl isInvalid={errors.city}>
            <FormLabel>City</FormLabel>
            <Select
              {...register('city', { required: 'Please select the city' })}
              placeholder="Select City"
              borderColor="grey"
            >
              <option value="trichy">Trichy</option>
              <option value="chennai">Chennai</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="Madurai">Madurai</option>
            </Select>
          </FormControl>

          {/* Pincode   */}

          <FormControl isInvalid={errors.address}>
            <FormLabel>Pincode</FormLabel>
            <Textarea
              {...register('pincode', { required: 'Pincode is required' })}
              placeholder="Enter your pincode"
              borderColor="grey"
              _placeholder={{ color: 'grey' }}
            />
          </FormControl>

          {/* Type of Business Partner */}
          <FormControl isInvalid={errors.partnerType}>
            <FormLabel>Type of Business</FormLabel>
            <Select
              {...register('partnerType', { required: 'Please select the type of business' })}
              placeholder="Select type"
              borderColor="grey"
            >
              <option value="tailor">Tailor</option>
              <option value="jewellery-shop">Jewellery Shop Owner</option>
              <option value="clothing-store">Clothing Store Owner</option>
              <option value="boutique-designer">Boutique Designer (Aari Work)</option>
              <option value="makeup-artist">Makeup Artist</option>
              <option value="mehendi-artist">Mehendi Artist</option>
              <option value="models">Models</option>
            </Select>
          </FormControl>

        

          {/* Availability */}
          <FormControl isInvalid={errors.availability}>
            <FormLabel>Availability</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaCalendarAlt color="#b82d92" />
              </InputLeftElement>
              <Input
                {...register('availability', { required: 'Availability is required' })}
                type="text"
                placeholder="e.g., Weekdays, Weekends"
                borderColor="grey"
                _placeholder={{ color: 'grey' }}
              />
            </InputGroup>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaLock color="#b82d92" />
              </InputLeftElement>
              <Input
                {...register('password', { required: 'Password is required' })}
                type="password"
                placeholder="Create Your Own Password"
                borderColor="grey"
                _placeholder={{ color: 'grey' }}
              />
            </InputGroup>
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            bg="#b82d92"
            color="white"
            _hover={{ bg: '#a81f76' }}
            borderRadius="md"
          >
            Register
          </Button>
        </Stack>
      </form>
      </>
)}
    </Box>
  );
};

export default BusinessPartnerRegistration;
