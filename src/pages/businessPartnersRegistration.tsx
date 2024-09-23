import React from 'react';
import { useForm } from 'react-hook-form';
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
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhone, FaLocationArrow, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

export const BusinessPartnerRegistration = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
   
    toast({
      title: 'Registration Successful!',
      description: "We've received your details and will contact you shortly.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });
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
        console.log("Custom IMage URL :" +data.aadharImageURL)
        console.log('Form Data:', data);
  } catch (error) {
    console.error('Error uploading images to AWS S3:', error);
   // setResponseData(error)
  }
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
                {...register('contact', {
                  required: 'Contact number is required',
                  minLength: {
                    value: 10,
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
    </Box>
  );
};

export default BusinessPartnerRegistration;
