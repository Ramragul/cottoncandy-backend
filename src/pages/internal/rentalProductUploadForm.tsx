import React, { useState, useRef , useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
  Alert,
  AlertIcon,
  Heading,
  Text
} from "@chakra-ui/react";

import Lottie from 'react-lottie';
import successAnimation from '../../animations/success.json';
import errorAnimation from '../../animations/error.json';
import loadingAnimation from '../../animations/loading.json';

import usePostData from "../../hooks/usePostData";

import { useAuth } from '../../contexts/AuthContext';


export const RentalProductUploadForm = () => {
    const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
 // const [responseData, setResponseData] = useState('');
 // const [responseStatus, setResponseStatus] = useState('');
  const [selectedProductCategories, setSelectedProductCategories] = useState([]);
  const { authState } = useAuth();

  const userId = authState.userId;
  const pId = authState.pId;
  
  console.log("Pid Value" +pId);

  const productPriceBand = ["A", "B", "C", "D", "E", "F", "G"];
  const productType = ["Apparel", "Jewellery"];
  const productCategory = [
    { "id": 1, "name": "Blazer" },
    { "id": 2, "name": "IndoWestern" },
    { "id": 3, "name": "Pyjama" },
    { "id": 4, "name": "Sherwani" },
    { "id": 5, "name": "Suits" },
    { "id": 6, "name": "Lehenga" },
    { "id": 7, "name": "Choker" },
    { "id": 8, "name": "Bangles" },
    { "id": 9, "name": "BridalSet" },
    { "id": 9, "name": "Victorian Bridal Set" },
  ];
  const productUsageOccasion = ["Party", "Festival", "Wedding", "Celebrations", "Casual", "Formal", "Regular", "Trendy", "Traditional", "Glamour", "Bridal"];

  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);

  const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/rental/product/upload');




  useEffect(() => {
    if (responseData) {
      if (responseData.status === 201) {
        
        setAnimationType('success');
        setTimeout(() => {
          navigate('/adminDashboard'); // Navigate to home page after 3 seconds
        }, 3000);
      } else {
        setAnimationType('error');
      }
    } else if (error) {
      setAnimationType('error');
      setTimeout(() => {
        navigate('/rentalProductUpload'); // Navigate back to checkout page after a few seconds
      }, 3000);
    }
  }, [responseData, error, navigate]);


  const handleProductUsageOccasionCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedProductCategories([...selectedProductCategories, value]);
    } else {
      setSelectedProductCategories(selectedProductCategories.filter((category) => category !== value));
    }
  };

  const onSubmit = async (data) => {
    console.log("Form Data: ", data);
    await backendConnection(data);
    //setAlert(true);
  };

  const backendConnection = async (data) => {
    const formData = new FormData();
    for (let i = 0; i < data.photos.length; i++) {
      formData.append('photos', data.photos[i]);
    }

    try {
      const s3Response = await axios.post("https://admee.in:3003/aws/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"
        }
      });

      data.productImageURL = s3Response.data.imageURLs;
      console.log("Image URL " +data.productImageURL)
    }catch (error) {
        console.error('Error uploading images to AWS S3:', error);
        //setResponseData(error);
        //setResponseStatus(false);
    }

    setShowAnimation(true);
    setAnimationType('loading');

    data.owningAuthority = pId;
    await postData(data);
      

    //   let dataObj = {
    //     productImageURL: concatImageURLS,
    //     productName: data.productName,
    //     productType: data.productType,
    //     productBrandName: data.productBrandName,
    //     productUsageGender: data.productUsageGender,
    //     productUsageOccasion: data.productUsageOccasion,
    //     productOrigin: data.productOrigin,
    //     productCategory: data.productCategory,
    //     productPriceBand: data.productPriceBand,
    //     productPrice: data.productPrice,
    //     productPurchasePrice: data.productPurchasePrice,
    //     productAvailability: data.productAvailability,
    //     remarks: data.remarks,
    //   };

    //   console.log("Full Data Created", JSON.stringify(dataObj));
    //   const dbResponse = await axios.post("https://admee.in:3003/api/cc/rental/product/upload", dataObj, {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"
    //     }
    //   });

    //   setResponseStatus(dbResponse.status === 200);
    //   setResponseData(dbResponse.data);
    
    
  };



  return (
    <Box maxW="600px" mx="auto" p={5} mt={10} borderWidth={1} borderRadius="md" boxShadow="lg">
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

    {!showAnimation && (
        <>
      <Heading as="h2" size="lg" mb={6} textAlign="center" color="pink.500">
        Design Catalogue Data Upload Form
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4}>
          <FormLabel>Product Photos</FormLabel>
          <Input {...register('photos')} type="file" accept="image/*" multiple />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Product Name</FormLabel>
          <Input {...register('productName')} type="text" placeholder="Enter Product Name" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Product Type</FormLabel>
          <Select {...register('productType')} placeholder="Select Product Type">
            {productType.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Brand Name</FormLabel>
          <Input {...register('productBrandName')} type="text" placeholder="Enter Brand Name" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Product Origin</FormLabel>
          <Input {...register('productOrigin')} type="text" placeholder="Enter Product Origin" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Product Category</FormLabel>
          <Select {...register('productCategory')} placeholder="Select Product Category">
            {productCategory.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Product Usage Gender</FormLabel>
          <Input {...register('productUsageGender')} type="text" placeholder="Enter Gender" />
        </FormControl>
        {/* <FormControl mb={4}>
          <FormLabel>Product Usage Occasion</FormLabel>
          <CheckboxGroup>
            <Stack spacing={2}>
              {productUsageOccasion.map((occasion, index) => (
                <Checkbox key={index} value={occasion} onChange={handleProductUsageOccasionCheckboxChange} {...register('productUsageOccasion')}>
                  {occasion}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </FormControl> */}
<FormControl>
<div className="form-group">
                    <FormLabel>Product Usage Occasion</FormLabel>
                    {productUsageOccasion.map((option, index) => (
                    <div key={index}>
                        <label>
                        <input
                            type="checkbox"
                            value={option}
                            onChange={handleProductUsageOccasionCheckboxChange}
                            {...register('productUsageOccasion')}
                        />
                        {option}
                        </label>
                    </div>
                    ))}
                   </div>
                   </FormControl>

        <FormControl mb={4}>
          <FormLabel>Price Band</FormLabel>
          <Select {...register('productPriceBand')} placeholder="Select Price Band">
            {productPriceBand.map((band, index) => (
              <option key={index} value={band}>{band}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Product Purchase Price</FormLabel>
          <Input {...register('productPurchasePrice')} type="text" placeholder="Enter Purchase Price" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Product Rental Price</FormLabel>
          <Input {...register('productPrice')} type="text" placeholder="Enter Rental Price" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Remarks</FormLabel>
          <Textarea {...register('remarks')} placeholder="Enter any remarks" rows={5} />
        </FormControl>
        <Button colorScheme="pink" type="submit" width="full" mt={4}>
          Upload Product
        </Button>
      </form>
      </>
    )}
    </Box>
  );
};

export default RentalProductUploadForm;
