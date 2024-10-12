import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const ServiceBookingPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    // Call your backend API with the form data
    console.log("Form submitted successfully:", data);
    toast({
      title: "Service booked.",
      description: "We've received your service booking request.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const services = ["Tailoring", "Jewelry Rental", "Alterations"];
  const variants = ["Basic", "Premium", "Luxury"];

  return (
    <Box
      maxWidth="600px"
      margin="auto"
      padding="4"
      boxShadow="lg"
      borderRadius="md"
      bg="white"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {/* Full Name */}
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              {...register("fullName", { required: "Full Name is required" })}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </FormControl>

          {/* Address */}
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Textarea
              {...register("address", { required: "Address is required" })}
              placeholder="Enter your address"
            />
            {errors.address && <p>{errors.address.message}</p>}
          </FormControl>

          {/* Pincode */}
          <FormControl isRequired>
            <FormLabel>Pincode</FormLabel>
            <Input
              {...register("pincode", { required: "Pincode is required" })}
              placeholder="Enter your pincode"
            />
            {errors.pincode && <p>{errors.pincode.message}</p>}
          </FormControl>

          {/* Contact Number */}
          <FormControl isRequired>
            <FormLabel>Contact Number</FormLabel>
            <Input
              {...register("contactNumber", {
                required: "Contact Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid contact number",
                },
              })}
              placeholder="Enter your contact number"
            />
            {errors.contactNumber && <p>{errors.contactNumber.message}</p>}
          </FormControl>

          {/* Email */}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </FormControl>

          {/* Appointment Date */}
          <FormControl isRequired>
            <FormLabel>Appointment Date</FormLabel>
            <Input
              type="date"
              {...register("appointmentDate", { required: "Date is required" })}
            />
            {errors.appointmentDate && <p>{errors.appointmentDate.message}</p>}
          </FormControl>

          {/* Remarks */}
          <FormControl>
            <FormLabel>Remarks</FormLabel>
            <Textarea {...register("remarks")} placeholder="Additional remarks" />
          </FormControl>

          {/* Service Selection */}
          <FormControl isRequired>
            <FormLabel>Select Service</FormLabel>
            <Select
              {...register("selectedService", { required: "Service is required" })}
              placeholder="Select service"
            >
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </Select>
            {errors.selectedService && <p>{errors.selectedService.message}</p>}
          </FormControl>

          {/* Variant Selection */}
          <FormControl isRequired>
            <FormLabel>Select Variant</FormLabel>
            <Select
              {...register("selectedVariant", { required: "Variant is required" })}
              placeholder="Select variant"
            >
              {variants.map((variant, index) => (
                <option key={index} value={variant}>
                  {variant}
                </option>
              ))}
            </Select>
            {errors.selectedVariant && <p>{errors.selectedVariant.message}</p>}
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" colorScheme="pink" width="full">
            Book Service
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ServiceBookingPage;
