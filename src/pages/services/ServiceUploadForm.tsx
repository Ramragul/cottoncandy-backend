import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Textarea,
  Box,
  Stack,
  Heading,
} from '@chakra-ui/react';

import usePostData from "../../hooks/usePostData";
import axios from 'axios';

interface ServiceVariant {
  variantName: string;
  description: string;
  price: number;
}

interface FormValues {
  partnerId: string;
  serviceId: string;
  brandUsed: string;
  willingToTravel: boolean;
  rules: string;
  portfolioImages: FileList;
  variants: ServiceVariant[];
}

export const ServiceUploadForm: React.FC = () => {
    const { postData, data, error, isLoading, responseData } = usePostData('/api/service/upload');

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      variants: [{ variantName: '', description: '', price: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variants',
  });

  const onSubmit = (data: FormValues) => {
    // Handle form submission logic here
    console.log(data);
   
    backendConnection(data)
  };

  const backendConnection = async(data) => {

    


    // // Image Upload to AWS S3 and URL Generation Logic Begins 

    const formData = new FormData();

    for (let i = 0; i < data.portfolioImages.length; i++) {
        formData.append('photos', data.portfolioImages[i]);
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
        data.portfolioImages = s3Response.data.imageURLs

        

      } catch (error) {
        console.error('Error uploading images to AWS S3:', error);
       // setResponseData(error)
      }

        console.log("Portfolio IMage URL :" +data.portfolioImagesURL)
        
    // // Image upload to AWS S3 and URL Generation Logic Ends
     
     //setShowAnimation(true);
     // setAnimationType('loading');

     await postData(data);

   
  };

  return (
    <Box maxWidth="600px" mx="auto" p={4} borderRadius="lg" boxShadow="lg">
      <Heading as="h4" size="lg" mb={4}>
        Register Mehendi Service
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={!!errors.partnerId}>
            <FormLabel htmlFor="partnerId">Partner ID</FormLabel>
            <Input
              id="partnerId"
              placeholder="Enter Partner ID"
              {...register('partnerId', { required: 'Partner ID is required' })}
            />
            <FormErrorMessage>{errors.partnerId?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.serviceId}>
            <FormLabel htmlFor="serviceId">Service Type</FormLabel>
            <Select
              id="serviceId"
              placeholder="Select Service Type"
              {...register('serviceId', { required: 'Please select a service' })}
            >
              <option value="1">Mehendi Artist</option>
              <option value="2">Makeup Artist</option>
              <option value="3">Photography</option>
              {/* Add more services as needed */}
            </Select>
            <FormErrorMessage>{errors.serviceId?.message}</FormErrorMessage>
          </FormControl>

          {/* Dynamic Service Variants Section */}
          <Box>
            <Heading as="h5" size="md" mb={2}>
              Service Variants
            </Heading>
            {fields.map((item, index) => (
              <Box key={item.id} mb={4}>
                <FormControl isInvalid={!!errors.variants?.[index]?.variantName}>
                  <FormLabel htmlFor={`variants.${index}.variantName`}>Variant Name</FormLabel>
                  <Input
                    id={`variants.${index}.variantName`}
                    placeholder="Enter Service Variant Name"
                    {...register(`variants.${index}.variantName`, { required: 'Variant name is required' })}
                  />
                  <FormErrorMessage>{errors.variants?.[index]?.variantName?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.variants?.[index]?.description}>
                  <FormLabel htmlFor={`variants.${index}.description`}>Description</FormLabel>
                  <Textarea
                    id={`variants.${index}.description`}
                    placeholder="Enter Description"
                    {...register(`variants.${index}.description`, { required: 'Description is required' })}
                  />
                  <FormErrorMessage>{errors.variants?.[index]?.description?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.variants?.[index]?.price}>
                  <FormLabel htmlFor={`variants.${index}.price`}>Price (INR)</FormLabel>
                  <Input
                    type="number"
                    id={`variants.${index}.price`}
                    placeholder="Enter Price"
                    {...register(`variants.${index}.price`, { required: 'Price is required', valueAsNumber: true })}
                  />
                  <FormErrorMessage>{errors.variants?.[index]?.price?.message}</FormErrorMessage>
                </FormControl>

                <Button mt={2} colorScheme="red" onClick={() => remove(index)}>
                  Remove Variant
                </Button>
              </Box>
            ))}
            <Button colorScheme="teal" onClick={() => append({ variantName: '', description: '', price: 0 })}>
              Add Variant
            </Button>
          </Box>

          <FormControl isInvalid={!!errors.brandUsed}>
            <FormLabel htmlFor="brandUsed">Brand Used</FormLabel>
            <Input
              id="brandUsed"
              placeholder="Enter Brand Used"
              {...register('brandUsed', { required: 'Brand is required' })}
            />
            <FormErrorMessage>{errors.brandUsed?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.willingToTravel}>
            <FormLabel htmlFor="willingToTravel">Willing to Travel</FormLabel>
            <Select
              id="willingToTravel"
              placeholder="Select an option"
              {...register('willingToTravel', { required: 'Please select an option' })}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Select>
            <FormErrorMessage>{errors.willingToTravel?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.rules}>
            <FormLabel htmlFor="rules">Rules</FormLabel>
            <Textarea
              id="rules"
              placeholder="Enter Rules"
              {...register('rules', { required: 'Rules are required' })}
            />
            <FormErrorMessage>{errors.rules?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.portfolioImages}>
            <FormLabel htmlFor="portfolio-images">Upload Portfolio Images</FormLabel>
            <Input
              type="file"
              accept="image/*"
              multiple
              {...register('portfolioImages', { required: 'At least one image is required' })}
              style={{ display: 'none' }}
              id="portfolio-images"
            />
            <Button as="label" htmlFor="portfolio-images" variant="solid" colorScheme="teal">
              Choose Images
            </Button>
            <FormErrorMessage>{errors.portfolioImages?.message}</FormErrorMessage>
          </FormControl>

          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ServiceUploadForm;
