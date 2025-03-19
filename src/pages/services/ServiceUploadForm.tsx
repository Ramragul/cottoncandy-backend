// import React, { useState } from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';
// import {
//   Button,
//   Input,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Textarea,
//   Box,
//   Stack,
//   Heading,
// } from '@chakra-ui/react';

// import usePostData from "../../hooks/usePostData";
// import axios from 'axios';

// interface ServiceVariant {
//   variantName: string;
//   description: string;
//   price: number;
// }

// interface FormValues {
//   partnerId: string;
//   serviceId: string;
//   brandUsed: string;
//   willingToTravel: boolean;
//   rules: string;
//   portfolioImages: FileList;
//   variants: ServiceVariant[];
//   paymentPolicy: string;
//   cancellationPolicy: string;
// }

// export const ServiceUploadForm: React.FC = () => {
//     const { postData, data, error, isLoading, responseData } = usePostData('/api/service/upload');

//   const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
//     defaultValues: {
//       variants: [{ variantName: '', description: '', price: 0 }],
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'variants',
//   });

//   const onSubmit = (data: FormValues) => {
//     // Handle form submission logic here
//     console.log(data);
   
//     backendConnection(data)
//   };

//   const backendConnection = async(data) => {

    


//     // // Image Upload to AWS S3 and URL Generation Logic Begins 

//     const formData = new FormData();

//     for (let i = 0; i < data.portfolioImages.length; i++) {
//         formData.append('photos', data.portfolioImages[i]);
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
//         data.portfolioImages = s3Response.data.imageURLs

        

//       } catch (error) {
//         console.error('Error uploading images to AWS S3:', error);
//        // setResponseData(error)
//       }

//         console.log("Portfolio IMage URL :" +data.portfolioImagesURL)
        
//     // // Image upload to AWS S3 and URL Generation Logic Ends
     
//      //setShowAnimation(true);
//      // setAnimationType('loading');

//      await postData(data);

   
//   };

//   return (
//     <Box maxWidth="600px" mx="auto" p={4} borderRadius="lg" boxShadow="lg">
//       <Heading as="h4" size="lg" mb={4}>
//         Register Mehendi Service
//       </Heading>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Stack spacing={4}>
//           <FormControl isInvalid={!!errors.partnerId}>
//             <FormLabel htmlFor="partnerId">Partner ID</FormLabel>
//             <Input
//               id="partnerId"
//               placeholder="Enter Partner ID"
//               {...register('partnerId', { required: 'Partner ID is required' })}
//             />
//             <FormErrorMessage>{errors.partnerId?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.serviceId}>
//             <FormLabel htmlFor="serviceId">Service Type</FormLabel>
//             <Select
//               id="serviceId"
//               placeholder="Select Service Type"
//               {...register('serviceId', { required: 'Please select a service' })}
//             >
//               <option value="1">Mehendi Artist</option>
//               <option value="2">Makeup Artist</option>
//               <option value="3">Photography</option>
//               {/* Add more services as needed */}
//             </Select>
//             <FormErrorMessage>{errors.serviceId?.message}</FormErrorMessage>
//           </FormControl>

//           {/* Dynamic Service Variants Section */}
//           <Box>
//             <Heading as="h5" size="md" mb={2}>
//               Service Variants
//             </Heading>
//             {fields.map((item, index) => (
//               <Box key={item.id} mb={4}>
//                 <FormControl isInvalid={!!errors.variants?.[index]?.variantName}>
//                   <FormLabel htmlFor={`variants.${index}.variantName`}>Variant Name</FormLabel>
//                   <Input
//                     id={`variants.${index}.variantName`}
//                     placeholder="Enter Service Variant Name"
//                     {...register(`variants.${index}.variantName`, { required: 'Variant name is required' })}
//                   />
//                   <FormErrorMessage>{errors.variants?.[index]?.variantName?.message}</FormErrorMessage>
//                 </FormControl>

//                 <FormControl isInvalid={!!errors.variants?.[index]?.description}>
//                   <FormLabel htmlFor={`variants.${index}.description`}>Description</FormLabel>
//                   <Textarea
//                     id={`variants.${index}.description`}
//                     placeholder="Enter Description"
//                     {...register(`variants.${index}.description`, { required: 'Description is required' })}
//                   />
//                   <FormErrorMessage>{errors.variants?.[index]?.description?.message}</FormErrorMessage>
//                 </FormControl>

//                 <FormControl isInvalid={!!errors.variants?.[index]?.price}>
//                   <FormLabel htmlFor={`variants.${index}.price`}>Price (INR)</FormLabel>
//                   <Input
//                     type="number"
//                     id={`variants.${index}.price`}
//                     placeholder="Enter Price"
//                     {...register(`variants.${index}.price`, { required: 'Price is required', valueAsNumber: true })}
//                   />
//                   <FormErrorMessage>{errors.variants?.[index]?.price?.message}</FormErrorMessage>
//                 </FormControl>

//                 <Button mt={2} colorScheme="red" onClick={() => remove(index)}>
//                   Remove Variant
//                 </Button>
//               </Box>
//             ))}
//             <Button colorScheme="teal" onClick={() => append({ variantName: '', description: '', price: 0 })}>
//               Add Variant
//             </Button>
//           </Box>

//           {/* <FormControl isInvalid={!!errors.brandUsed}>
//             <FormLabel htmlFor="brandUsed">Brand Used</FormLabel>
//             <Input
//               id="brandUsed"
//               placeholder="Enter Brand Used"
//               {...register('brandUsed', { required: 'Brand is required' })}
//             />
//             <FormErrorMessage>{errors.brandUsed?.message}</FormErrorMessage>
//           </FormControl> */}

//           <FormControl isInvalid={!!errors.brandUsed}>
//             <FormLabel htmlFor="brandUsed">Brand Used</FormLabel>
//             <Select
//               id="brandUsed"
//               placeholder="Select a brand"
//               bgColor="pink.200"
//               {...register('brandUsed', { required: 'Please select an option' })}
//             >
//               <option value="maccosmetics">MAC Cosmetics</option>
//               <option value="hudabeauty">Huda Beauty</option>
//               <option value="bobbibrown">Bobbi Brown</option>
//               <option value="anastasiabeverlyhills">Anastasia Beverly Hills</option>
//               <option value="charlottetilbury">Charlotte Tilbury</option>
//               <option value="dior">Dior</option>
//               <option value="chanel">Chanel</option>
//               <option value="makeupforever">Makeup Forever</option>
//               <option value="smashbox">Smashbox</option>
//               <option value="fentybeauty">Fenty Beauty</option>
//               <option value="tooFaced">Too Faced</option>
//               <option value="tarte">Tarte</option>
//               <option value="morphe">Morphe</option>
//               <option value="nars">NARS</option>
//               <option value="benefit">Benefit Cosmetics</option>
//               <option value="esteeLauder">Estée Lauder</option>
//               <option value="sugar">Sugar Cosmetics</option>
//               <option value="kaybeauty">Kay Beauty</option>
//               <option value="forever52">Forever 52</option>
//               <option value="inglot">Inglot</option>
//               <option value="lakme">Lakmé</option>
//               <option value="colorbar">Colorbar</option>
//               <option value="kryolan">Kryolan</option>
//               <option value="kryolan">Other</option>

              
//             </Select>
//             <FormErrorMessage>{errors.brandUsed?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.willingToTravel}>
//             <FormLabel htmlFor="willingToTravel">Willing to Travel</FormLabel>
//             <Select
//               id="willingToTravel"
//               placeholder="Select an option"
//               {...register('willingToTravel', { required: 'Please select an option' })}
//             >
//               <option value={true}>Yes</option>
//               <option value={false}>No</option>
//             </Select>
//             <FormErrorMessage>{errors.willingToTravel?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.paymentPolicy}>
//             <FormLabel htmlFor="paymentPolicy">Payment Policy</FormLabel>
//             <Select
//               id="paymentPolicy"
//               placeholder="Select an option"
//               bgColor="pink.200"
//               {...register('paymentPolicy', { required: 'Please select an option' })}
//             >
//               <option value="0">Book now, pay later – No advance required</option>
//               <option value="10">10% advance while booking</option>
//               <option value="20">20% advance while booking</option>
//               <option value="30">30% advance while booking</option>
//               <option value="40">40% advance while booking</option>
//               <option value="50">50% advance while booking</option>
//               <option value="60">60% advance while booking</option>
//               <option value="70">70% advance while booking</option>
//               <option value="80">80% advance while booking</option>
//               <option value="90">90% advance while booking</option>
//               <option value="100">Full payment while booking</option>
              
//             </Select>
//             <FormErrorMessage>{errors.paymentPolicy?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.paymentPolicy}>
//             <FormLabel htmlFor="cancellationPolicy">Cancellation Policy</FormLabel>
//             <Select
//               id="cancellationPolicy"
//               placeholder="Select an option"
//               bgColor="purple.200"
//               {...register('cancellationPolicy', { required: 'Please select an option' })}
//             >
//             <option value="No refund if canceled within 24 hours | 50% refund if canceled before 48 hours">No refund if canceled within 24 hours | 50% refund if canceled before 48 hours</option>
//             <option value="Non-refundable after booking confirmation | No refund within 7 days of service">Non-refundable after booking confirmation | No refund within 7 days of service</option>
//             <option value="Full refund if canceled at least 3 days before | 20% cancellation charge within 72 hours">Full refund if canceled at least 3 days before | 20% cancellation charge within 72 hours</option>
//             <option value="50% refund if canceled at least 5 days before | No refund within 48 hours of service">50% refund if canceled at least 5 days before | No refund within 48 hours of service</option>
//             <option value="Full refund minus processing fee if canceled before 3 days | 30% refund within 24 hours">Full refund minus processing fee if canceled before 3 days | 30% refund within 24 hours</option>
//             <option value="80% refund if canceled at least 2 days before | No refund within 24 hours">80% refund if canceled at least 2 days before | No refund within 24 hours</option>
//             <option value="100% refund if canceled at least 7 days before | 40% refund if canceled within 3 days">100% refund if canceled at least 7 days before | 40% refund if canceled within 3 days</option>
//             </Select>
//             <FormErrorMessage>{errors.paymentPolicy?.message}</FormErrorMessage>
//           </FormControl>

//           {/* <FormControl isInvalid={!!errors.rules}>
//             <FormLabel htmlFor="rules">Rules</FormLabel>
//             <Textarea
//               id="rules"
//               placeholder="Enter Rules"
//               {...register('rules', { required: 'Rules are required' })}
//             />
//             <FormErrorMessage>{errors.rules?.message}</FormErrorMessage>
//           </FormControl> */}

//           <FormControl isInvalid={!!errors.portfolioImages}>
//             <FormLabel htmlFor="portfolio-images">Upload Portfolio Images</FormLabel>
//             <Input
//               type="file"
//               accept="image/*"
//               multiple
//               {...register('portfolioImages', { required: 'At least one image is required' })}
//               style={{ display: 'none' }}
//               id="portfolio-images"
//             />
//             <Button as="label" htmlFor="portfolio-images" variant="solid" colorScheme="teal">
//               Choose Images
//             </Button>
//             <FormErrorMessage>{errors.portfolioImages?.message}</FormErrorMessage>
//           </FormControl>

//           <Button colorScheme="teal" type="submit">
//             Submit
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default ServiceUploadForm;



// Version 2 : Enhancement to version 1

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
  paymentPolicy: string;
  refundPolicy: string;
  finalPaymentDueOn: string;
}

export const ServiceUploadForm: React.FC = () => {
    const { postData, data, error, isLoading, responseData } = usePostData('/api/service/upload');

  const { register, handleSubmit, control, formState: { errors },watch } = useForm<FormValues>({
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

  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const selectedBrand = watch('brandUsed'); // Watch the selected brand

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

          {/* <FormControl isInvalid={!!errors.brandUsed}>
            <FormLabel htmlFor="brandUsed">Brand Used</FormLabel>
            <Input
              id="brandUsed"
              placeholder="Enter Brand Used"
              {...register('brandUsed', { required: 'Brand is required' })}
            />
            <FormErrorMessage>{errors.brandUsed?.message}</FormErrorMessage>
          </FormControl> */}

          <FormControl isInvalid={!!errors.brandUsed}>
            <FormLabel htmlFor="brandUsed">Brand Used</FormLabel>
            <Select
              id="brandUsed"
              placeholder="Select a brand"
              bgColor="blue.200"
              {...register('brandUsed', { required: 'Please select an option' })}
              onChange={(e) => {
                const value = e.target.value;
                setIsOtherSelected(value === 'other');
                setValue('brandUsed', value); // Update brandUsed value
              }}
            >
              <option value="maccosmetics">MAC Cosmetics</option>
              <option value="hudabeauty">Huda Beauty</option>
              <option value="bobbibrown">Bobbi Brown</option>
              <option value="anastasiabeverlyhills">Anastasia Beverly Hills</option>
              <option value="charlottetilbury">Charlotte Tilbury</option>
              <option value="dior">Dior</option>
              <option value="chanel">Chanel</option>
              <option value="makeupforever">Makeup Forever</option>
              <option value="smashbox">Smashbox</option>
              <option value="fentybeauty">Fenty Beauty</option>
              <option value="tooFaced">Too Faced</option>
              <option value="tarte">Tarte</option>
              <option value="morphe">Morphe</option>
              <option value="nars">NARS</option>
              <option value="benefit">Benefit Cosmetics</option>
              <option value="esteeLauder">Estée Lauder</option>
              <option value="sugar">Sugar Cosmetics</option>
              <option value="kaybeauty">Kay Beauty</option>
              <option value="forever52">Forever 52</option>
              <option value="inglot">Inglot</option>
              <option value="lakme">Lakmé</option>
              <option value="colorbar">Colorbar</option>
              <option value="kryolan">Kryolan</option>
              <option value="other">Other</option>

              
            </Select>

            {isOtherSelected && (
        <Input
          id="otherBrand"
          placeholder="Enter brand name"
          bgColor="pink.100"
          mt={2}
          {...register('brandUsed', { required: 'Please enter a brand name' })}
        />
      )}
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

          <FormControl isInvalid={!!errors.paymentPolicy}>
            <FormLabel htmlFor="paymentPolicy">Payment Policy</FormLabel>
            <Select
              id="paymentPolicy"
              placeholder="Select an option"
              bgColor="pink.200"
              {...register('paymentPolicy', { required: 'Please select an option' })}
            >
              <option value="0">Book now, pay later – No advance required</option>
              <option value="10">10% advance while booking</option>
              <option value="20">20% advance while booking</option>
              <option value="30">30% advance while booking</option>
              <option value="40">40% advance while booking</option>
              <option value="50">50% advance while booking</option>
              <option value="60">60% advance while booking</option>
              <option value="70">70% advance while booking</option>
              <option value="80">80% advance while booking</option>
              <option value="90">90% advance while booking</option>
              <option value="100">Full payment while booking</option>
              
            </Select>
            <FormErrorMessage>{errors.paymentPolicy?.message}</FormErrorMessage>
          </FormControl>
          

          <FormControl isInvalid={!!errors.finalPaymentDueOn}>
            <FormLabel htmlFor="finalPaymentDueOn">Final Payment Due on</FormLabel>
            <Select
              id="finalPaymentDueOn"
              placeholder="Select an option"
              bgColor="blue.300"
              {...register('finalPaymentDueOn', { required: 'Please select an option' })}
            >
            <option value="onEventDay">On event day</option>
            <option value="afterEvent">After event</option>
            <option value="afterService">After service</option>
            <option value="1DayBefore">1 day before event</option>
            <option value="3DaysBefore">3 days before event</option>
            <option value="7DaysBefore">7 days before event</option>
            <option value="atBooking">At the time of booking</option>
            <option value="within24HoursAfter">Within 24 hours after service</option>

            </Select>
            <FormErrorMessage>{errors.finalPaymentDueOn?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.paymentPolicy}>
            <FormLabel htmlFor="refundPolicy">Cancellation Policy</FormLabel>
            <Select
              id="refundPolicy"
              placeholder="Select an option"
              bgColor="purple.200"
              {...register('refundPolicy', { required: 'Please select an option' })}
            >
            <option value="No refund if canceled within 24 hours | 50% refund if canceled before 48 hours">No refund if canceled within 24 hours | 50% refund if canceled before 48 hours</option>
            <option value="Non-refundable after booking confirmation | No refund within 7 days of service">Non-refundable after booking confirmation | No refund within 7 days of service</option>
            <option value="Full refund if canceled at least 3 days before | 20% cancellation charge within 72 hours">Full refund if canceled at least 3 days before | 20% cancellation charge within 72 hours</option>
            <option value="50% refund if canceled at least 5 days before | No refund within 48 hours of service">50% refund if canceled at least 5 days before | No refund within 48 hours of service</option>
            <option value="Full refund minus processing fee if canceled before 3 days | 30% refund within 24 hours">Full refund minus processing fee if canceled before 3 days | 30% refund within 24 hours</option>
            <option value="80% refund if canceled at least 2 days before | No refund within 24 hours">80% refund if canceled at least 2 days before | No refund within 24 hours</option>
            <option value="100% refund if canceled at least 7 days before | 40% refund if canceled within 3 days">100% refund if canceled at least 7 days before | 40% refund if canceled within 3 days</option>
            </Select>
            <FormErrorMessage>{errors.refundPolicy?.message}</FormErrorMessage>
          </FormControl>

          {/* <FormControl isInvalid={!!errors.rules}>
            <FormLabel htmlFor="rules">Rules</FormLabel>
            <Textarea
              id="rules"
              placeholder="Enter Rules"
              {...register('rules', { required: 'Rules are required' })}
            />
            <FormErrorMessage>{errors.rules?.message}</FormErrorMessage>
          </FormControl> */}

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

