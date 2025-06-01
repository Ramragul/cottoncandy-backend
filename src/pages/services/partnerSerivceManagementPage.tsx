// Version 1 :

// import { useState } from "react";
// import { 
//   Box, Button, Input, VStack, Text, Heading, Card, CardBody, SimpleGrid, Divider, Collapse, IconButton 
// } from "@chakra-ui/react";
// import { ChevronDownIcon, ChevronUpIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
// import useGetData from "../../hooks/useGetData";
// import { useAuth } from "../../contexts/AuthContext";
// import React from "react";
// import usePostData from "../../hooks/usePostData";

// export const PartnerServiceManagementPage = () => {
//   const { authState } = useAuth();
//   const { data, error, isLoading } = useGetData(`/api/cc/partner/services?partner_id=${authState.pId}`);

//   const [selectedService, setSelectedService] = useState<any | null>(null);
//   const [editableData, setEditableData] = useState<any>({});
//   const [openVariants, setOpenVariants] = useState<{ [key: number]: boolean }>({});
//   const [deletedVariants, setDeletedVariants] = useState<any[]>([]); 
//   const { postData, data : postingData, error: postingError, isLoading : postingIsLoading, responseData } = usePostData('/api/cc/partner/services');

//   // Select a service to edit
//   const handleSelectService = (service: any) => {
//     setSelectedService(service);
//     setEditableData(service);
//     setDeletedVariants([]);
//   };

//   // Handle service input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
//     setEditableData({ ...editableData, [key]: e.target.value });
//   };

//   // Handle variant field changes
//   const handleVariantChange = (variantIndex: number, field: string, value: string) => {
//     const updatedVariants = [...(editableData.variants || [])];
//     updatedVariants[variantIndex] = { ...updatedVariants[variantIndex], [field]: value };
//     setEditableData({ ...editableData, variants: updatedVariants });
//   };

//   // Toggle variant visibility
//   const toggleVariant = (index: number) => {
//     setOpenVariants((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   // Delete a variant
//   const handleDeleteVariant = (variantIndex: number) => {
//     const variantToDelete = editableData.variants[variantIndex];

//     // Store deleted variant separately
//     setDeletedVariants([...deletedVariants, variantToDelete]);

//     // Remove from list
//     const updatedVariants = editableData.variants.filter((_, index) => index !== variantIndex);
//     setEditableData({ ...editableData, variants: updatedVariants });
//   };

//   // Add a new variant
//   const handleAddVariant = () => {
//     const newVariant = {
//       variant_name: "",
//       price: "",
//       description: "",
//     };

//     setEditableData({ ...editableData, variants: [...(editableData.variants || []), newVariant] });
//   };

//   // Save changes (captures updates & deletions)
//   const handleSaveChanges = async () => {
//     const payload = {
//       ...editableData,
//       deletedVariants, 
//     };

//     console.log("Captured Data for Backend:", JSON.stringify(payload));
//     alert("Changes captured! Check console for details.");
//     backendConnection(payload);
//   };

//   const backendConnection = async(data) => {

//     // // Image upload to AWS S3 and URL Generation Logic Ends
//     // setShowAnimation(true);
//     // setAnimationType('loading');
//     console.log("Inside Post Data logic boss")
//    await postData(data);
//    toast({
//     title: 'Booking Successful',
//     description: `Your service has been booked successfully with ${partnerName}.`,
//     status: 'success',
//     duration: 5000,
//     isClosable: true,
// });
//   };

//   return (
//     <Box p={6} maxW="900px" mx="auto">
//       <Heading mb={4} textAlign="center" color="pink.600">
//         Partner Service Management
//       </Heading>

//       {isLoading && <Text>Loading...</Text>}
//       {error && <Text color="red.500">Error loading services.</Text>}

//       {/* Service List */}
//       <SimpleGrid columns={[1, 2, 3]} spacing={4} mb={6}>
//         {!isLoading &&
//           !error &&
//           data?.services?.map((service: any) => (
//             <Card
//               key={service.id}
//               onClick={() => handleSelectService(service)}
//               cursor="pointer"
//               _hover={{ bg: "pink.100" }}
//               border="1px solid"
//               borderColor="pink.300"
//               shadow="md"
//             >
//               <CardBody>
//                 <Heading size="sm" color="pink.800">
//                   {service.service_name}
//                 </Heading>
//                 <Text fontSize="sm" color="gray.600">
//                   {service.description || "No description available"}
//                 </Text>
//               </CardBody>
//             </Card>
//           ))}
//       </SimpleGrid>

//       {/* Editable Form */}
//       {selectedService && (
//         <Box p={5} border="1px solid" borderColor="pink.400" borderRadius="md" shadow="md">
//           <Heading size="md" color="pink.700" mb={4}>
//             Edit Service Details
//           </Heading>
//           <VStack spacing={3} align="stretch">
//             {Object.entries(editableData)
//               .filter(([key]) => key !== "variants") 
//               .map(([key, value]) => (
//                 <Box key={key}>
//                   <Text fontWeight="bold" color="pink.800">
//                     {key}
//                   </Text>
//                   <Input
//                     type="text"
//                     value={value}
//                     onChange={(e) => handleInputChange(e, key)}
//                     bg="gray.100"
//                     _focus={{ borderColor: "pink.400" }}
//                   />
//                 </Box>
//               ))}
//           </VStack>

//           <Divider my={4} />

//           {/* Variants Section */}
//           <Box>
//             <Heading size="md" color="pink.700" mb={3}>
//               Variants
//             </Heading>
//             <Button 
//               leftIcon={<AddIcon />} 
//               colorScheme="pink" 
//               onClick={handleAddVariant} 
//               mb={3}
//             >
//               Add Variant
//             </Button>

//             {editableData.variants && editableData.variants.length > 0 && 
//               editableData.variants.map((variant: any, variantIndex: number) => (
//                 <Box key={variantIndex} p={3} border="1px solid" borderColor="pink.300" borderRadius="md" mb={3}>
//                   <Box display="flex" justifyContent="space-between" alignItems="center">
//                     <Heading size="sm" color="pink.800">
//                       Variant {variantIndex + 1}
//                     </Heading>
//                     <Box>
//                       <IconButton
//                         aria-label="Delete variant"
//                         icon={<DeleteIcon />}
//                         onClick={() => handleDeleteVariant(variantIndex)}
//                         size="sm"
//                         colorScheme="red"
//                         mr={2}
//                       />
//                       <IconButton
//                         aria-label="Toggle variant"
//                         icon={openVariants[variantIndex] ? <ChevronUpIcon /> : <ChevronDownIcon />}
//                         onClick={() => toggleVariant(variantIndex)}
//                         size="sm"
//                       />
//                     </Box>
//                   </Box>

//                   <Collapse in={openVariants[variantIndex]}>
//                     <VStack spacing={3} align="stretch" mt={3}>
//                       {Object.entries(variant).map(([field, value]) => (
//                         <Box key={field}>
//                           <Text fontWeight="bold" color="pink.700">
//                             {field}
//                           </Text>
//                           <Input
//                             type="text"
//                             value={value}
//                             onChange={(e) => handleVariantChange(variantIndex, field, e.target.value)}
//                             bg="gray.100"
//                             _focus={{ borderColor: "pink.400" }}
//                           />
//                         </Box>
//                       ))}
//                     </VStack>
//                   </Collapse>
//                 </Box>
//               ))}
//           </Box>

//           <Divider my={4} />
//           <Button colorScheme="pink" onClick={handleSaveChanges} w="full">
//             Save Changes
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default PartnerServiceManagementPage;



// Version 2  - Working Version


// import { useState } from "react";
// import { 
//   Box, Button, Input, VStack, Text, Heading, Card, CardBody, SimpleGrid, Divider, Collapse, IconButton 
// } from "@chakra-ui/react";
// import { ChevronDownIcon, ChevronUpIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
// import useGetData from "../../hooks/useGetData";
// import { useAuth } from "../../contexts/AuthContext";
// import React from "react";
// import usePostData from "../../hooks/usePostData";

// export const PartnerServiceManagementPage = () => {
//   const { authState } = useAuth();
//   const { data, error, isLoading } = useGetData(`/api/cc/partner/services?partner_id=${authState.pId}`);
//   const { postData, data : postingData, error: postingError, isLoading : postingIsLoading, responseData } = usePostData('/api/cc/partner/services');

//   const [selectedService, setSelectedService] = useState<any | null>(null);
//   const [editableData, setEditableData] = useState<any>({});
//   const [openVariants, setOpenVariants] = useState<{ [key: number]: boolean }>({});
//   const [deletedVariants, setDeletedVariants] = useState<any[]>([]);
//   const [modifiedVariants, setModifiedVariants] = useState<any[]>([]);

//   // Select a service to edit
//   const handleSelectService = (service: any) => {
//     setSelectedService(service);
//     setEditableData(service);
//     setDeletedVariants([]);
//     setModifiedVariants([]);
//   };

//   // Handle input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
//     setEditableData({ ...editableData, [key]: e.target.value });
//   };

//   // Handle variant field changes
//   const handleVariantChange = (variantIndex: number, field: string, value: string) => {
//     const updatedVariants = [...(editableData.variants || [])];
//     const originalVariant = updatedVariants[variantIndex];

//     updatedVariants[variantIndex] = { ...originalVariant, [field]: value };

//     setEditableData({ ...editableData, variants: updatedVariants });

//     // If the variant is already modified, update it, otherwise add it
//     setModifiedVariants((prev) => {
//       const existingIndex = prev.findIndex((v) => v.variant_id === originalVariant.variant_id);
//       if (existingIndex !== -1) {
//         const updatedModifiedVariants = [...prev];
//         updatedModifiedVariants[existingIndex] = updatedVariants[variantIndex];
//         return updatedModifiedVariants;
//       } else {
//         return [...prev, updatedVariants[variantIndex]];
//       }
//     });
//   };

//   // Toggle variant visibility
//   const toggleVariant = (index: number) => {
//     setOpenVariants((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   // Delete a variant
//   const handleDeleteVariant = (variantIndex: number) => {
//     const variantToDelete = editableData.variants[variantIndex];

//     setDeletedVariants([...deletedVariants, variantToDelete]);

//     const updatedVariants = editableData.variants.filter((_, index) => index !== variantIndex);
//     setEditableData({ ...editableData, variants: updatedVariants });

//     // Remove from modified variants if it's deleted
//     setModifiedVariants((prev) => prev.filter((v) => v.variant_id !== variantToDelete.variant_id));
//   };

//   // Add a new variant
//   const handleAddVariant = () => {
//     const newVariant = {
//       variant_id: `temp_${Date.now()}`, // Temporary ID for frontend tracking
//       variant_name: "",
//       price: "",
//       description: "",
//     };

//     setEditableData({ ...editableData, variants: [...(editableData.variants || []), newVariant] });
//   };

//   // Save changes (captures updates, modifications & deletions)
//   const handleSaveChanges = async () => {
//     const payload = {
//       // ...editableData,
//       deletedVariants,
//       modifiedVariants, 
//     };

//     console.log("Captured Data for Backend:", payload);
//     //alert("Changes captured! Check console for details.");
//     backendConnection(payload);
//   };


//     const backendConnection = async(data) => {

//     // // Image upload to AWS S3 and URL Generation Logic Ends
//     // setShowAnimation(true);
//     // setAnimationType('loading');
//     console.log("Inside Post Data logic boss")
//    await postData(data);
//    toast({
//     title: 'Booking Successful',
//     description: `Your service has been modified successfully  ${authState.pId}.`,
//     status: 'success',
//     duration: 5000,
//     isClosable: true,
// });
//   };

//   return (
//     <Box p={6} maxW="900px" mx="auto">
//       <Heading mb={4} textAlign="center" color="pink.600">
//         Partner Service Management
//       </Heading>

//       {isLoading && <Text>Loading...</Text>}
//       {error && <Text color="red.500">Error loading services.</Text>}

//       {/* Service List */}
//       <SimpleGrid columns={[1, 2, 3]} spacing={4} mb={6}>
//         {!isLoading &&
//           !error &&
//           data?.services?.map((service: any) => (
//             <Card
//               key={service.id}
//               onClick={() => handleSelectService(service)}
//               cursor="pointer"
//               _hover={{ bg: "pink.100" }}
//               border="1px solid"
//               borderColor="pink.300"
//               shadow="md"
//             >
//               <CardBody>
//                 <Heading size="sm" color="pink.800">
//                   {service.service_name}
//                 </Heading>
//                 <Text fontSize="sm" color="gray.600">
//                   {service.description || "No description available"}
//                 </Text>
//               </CardBody>
//             </Card>
//           ))}
//       </SimpleGrid>

//       {/* Editable Form */}
//       {selectedService && (
//         <Box p={5} border="1px solid" borderColor="pink.400" borderRadius="md" shadow="md">
//           <Heading size="md" color="pink.700" mb={4}>
//             Edit Service Details
//           </Heading>
//           <VStack spacing={3} align="stretch">
//             {Object.entries(editableData)
//               .filter(([key]) => key !== "variants") 
//               .map(([key, value]) => (
//                 <Box key={key}>
//                   <Text fontWeight="bold" color="pink.800">
//                     {key}
//                   </Text>
//                   <Input
//                     type="text"
//                     value={value}
//                     onChange={(e) => handleInputChange(e, key)}
//                     bg="gray.100"
//                     _focus={{ borderColor: "pink.400" }}
//                   />
//                 </Box>
//               ))}
//           </VStack>

//           <Divider my={4} />

//           {/* Variants Section */}
//           <Box>
//             <Heading size="md" color="pink.700" mb={3}>
//               Variants
//             </Heading>
//             <Button 
//               leftIcon={<AddIcon />} 
//               colorScheme="pink" 
//               onClick={handleAddVariant} 
//               mb={3}
//             >
//               Add Variant
//             </Button>

//             {editableData.variants && editableData.variants.length > 0 && 
//               editableData.variants.map((variant: any, variantIndex: number) => (
//                 <Box key={variantIndex} p={3} border="1px solid" borderColor="pink.300" borderRadius="md" mb={3}>
//                   <Box display="flex" justifyContent="space-between" alignItems="center">
//                     <Heading size="sm" color="pink.800">
//                       Variant {variantIndex + 1}
//                     </Heading>
//                     <Box>
//                       <IconButton
//                         aria-label="Delete variant"
//                         icon={<DeleteIcon />}
//                         onClick={() => handleDeleteVariant(variantIndex)}
//                         size="sm"
//                         colorScheme="red"
//                         mr={2}
//                       />
//                       <IconButton
//                         aria-label="Toggle variant"
//                         icon={openVariants[variantIndex] ? <ChevronUpIcon /> : <ChevronDownIcon />}
//                         onClick={() => toggleVariant(variantIndex)}
//                         size="sm"
//                       />
//                     </Box>
//                   </Box>

//                   <Collapse in={openVariants[variantIndex]}>
//                     <VStack spacing={3} align="stretch" mt={3}>
//                       {Object.entries(variant).map(([field, value]) => (
//                         <Box key={field}>
//                           <Text fontWeight="bold" color="pink.700">
//                             {field}
//                           </Text>
//                           <Input
//                             type="text"
//                             value={value}
//                             onChange={(e) => handleVariantChange(variantIndex, field, e.target.value)}
//                             bg="gray.100"
//                             _focus={{ borderColor: "pink.400" }}
//                           />
//                         </Box>
//                       ))}
//                     </VStack>
//                   </Collapse>
//                 </Box>
//               ))}
//           </Box>

//           <Divider my={4} />
//           <Button colorScheme="pink" onClick={handleSaveChanges} w="full">
//             Save Changes
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default PartnerServiceManagementPage;
// function toast(arg0: { title: string; description: string; status: string; duration: number; isClosable: boolean; }) {
//   throw new Error("Function not implemented.");
// }




// Version 3 : enhancement to 2


import { useState } from "react";
import { 
  Box, Button, Input, VStack, Text, Heading, Card, CardBody, SimpleGrid, Divider, Collapse, IconButton , Image
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import useGetData from "../../hooks/useGetData";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";
import usePostData from "../../hooks/usePostData";

export const PartnerServiceManagementPage = () => {
  const { authState } = useAuth();
  const { data, error, isLoading } = useGetData(`/api/cc/partner/services?partner_id=${authState.pId}`);
  const { postData, data : postingData, error: postingError, isLoading : postingIsLoading, responseData } = usePostData('/api/cc/partner/services');

  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [editableData, setEditableData] = useState<any>({});
  const [openVariants, setOpenVariants] = useState<{ [key: number]: boolean }>({});
  const [deletedVariants, setDeletedVariants] = useState<any[]>([]);
  const [modifiedVariants, setModifiedVariants] = useState<any[]>([]);

  var service_id = "";

  // Select a service to edit
  const handleSelectService = (service: any) => {
    
    setSelectedService(service);
    setEditableData(service);
    setDeletedVariants([]);
    setModifiedVariants([]);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setEditableData({ ...editableData, [key]: e.target.value });
  };

  // Handle variant field changes
  const handleVariantChange = (variantIndex: number, field: string, value: string) => {
    const updatedVariants = [...(editableData.variants || [])];
    const originalVariant = updatedVariants[variantIndex];

    updatedVariants[variantIndex] = { ...originalVariant, [field]: value };

    setEditableData({ ...editableData, variants: updatedVariants });

    // If the variant is already modified, update it, otherwise add it
    setModifiedVariants((prev) => {
      const existingIndex = prev.findIndex((v) => v.variant_id === originalVariant.variant_id);
      if (existingIndex !== -1) {
        const updatedModifiedVariants = [...prev];
        updatedModifiedVariants[existingIndex] = updatedVariants[variantIndex];
        return updatedModifiedVariants;
      } else {
        return [...prev, updatedVariants[variantIndex]];
      }
    });
  };

  // Toggle variant visibility
  const toggleVariant = (index: number) => {
    setOpenVariants((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Delete a variant
  const handleDeleteVariant = (variantIndex: number) => {
    const variantToDelete = editableData.variants[variantIndex];

    setDeletedVariants([...deletedVariants, variantToDelete]);

    const updatedVariants = editableData.variants.filter((_, index) => index !== variantIndex);
    setEditableData({ ...editableData, variants: updatedVariants });

    // Remove from modified variants if it's deleted
    setModifiedVariants((prev) => prev.filter((v) => v.variant_id !== variantToDelete.variant_id));
  };

  // Add a new variant
  const handleAddVariant = () => {
    const newVariant = {
      // variant_id: `temp_${Date.now()}`, // Temporary ID for frontend tracking
      variant_id: "",
      variant_name: "",
      price: "",
      description: "",
    };

    setEditableData({ ...editableData, variants: [...(editableData.variants || []), newVariant] });
  };

  // Save changes (captures updates, modifications & deletions)
  const handleSaveChanges = async () => {
   var partner_id = authState.pId;
   service_id = selectedService.service_id
   
    const payload = {
      // ...editableData,
      deletedVariants,
      modifiedVariants, 
      partner_id,
      service_id,
     
    };

    console.log("Captured Data for Backend:", payload);
    //alert("Changes captured! Check console for details.");
    backendConnection(payload);
  };


    const backendConnection = async(data) => {

    // // Image upload to AWS S3 and URL Generation Logic Ends
    // setShowAnimation(true);
    // setAnimationType('loading');
    console.log("Inside Post Data logic boss")
   await postData(data);
   toast({
    title: 'Booking Successful',
    description: `Your service has been modified successfully  ${authState.pId}.`,
    status: 'success',
    duration: 5000,
    isClosable: true,
});
  };

  return (
    <Box p={6} maxW="900px" mx="auto">
      <Heading mb={4} textAlign="center" color="pink.600">
        Partner Service Management
      </Heading>

      {isLoading && <Text>Loading...</Text>}
      {error && <Text color="red.500">Error loading services.</Text>}

      {/* Service List */}
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mb={6}>
        {!isLoading &&
          !error &&
          data?.services?.map((service: any) => (
            <Card
              key={service.id}
              onClick={() => handleSelectService(service)}
              cursor="pointer"
              _hover={{ bg: "pink.100" }}
              border="1px solid"
              borderColor="pink.300"
              shadow="md"
            >
              <CardBody>
                <Heading size="sm" color="pink.800">
                  {service.service_name}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {service.description || "No description available"}
                </Text>
              </CardBody>
            </Card>
          ))}
      </SimpleGrid>

  



      {/* Editable Form */}

      {selectedService && (
        <Box p={5} border="1px solid" borderColor="pink.400" borderRadius="md" shadow="md">
          <Heading size="md" color="pink.700" mb={4}>
            Edit Service Details
          </Heading>

          <Divider my={4} />

          {/* Variants Section */}
          <Box>
            <Heading size="md" color="pink.700" mb={3}>
              Variants
            </Heading>
            <Button 
              leftIcon={<AddIcon />} 
              colorScheme="pink" 
              onClick={handleAddVariant} 
              mb={3}
            >
              Add Variant
            </Button>

            {editableData.variants && editableData.variants.length > 0 && 
              editableData.variants.map((variant: any, variantIndex: number) => (
                <Box key={variantIndex} p={3} border="1px solid" borderColor="pink.300" borderRadius="md" mb={3}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Heading size="sm" color="pink.800">
                      Variant {variantIndex + 1}
                    </Heading>
                    <Box>
                      <IconButton
                        aria-label="Delete variant"
                        icon={<DeleteIcon />}
                        onClick={() => handleDeleteVariant(variantIndex)}
                        size="sm"
                        colorScheme="red"
                        mr={2}
                      />
                      <IconButton
                        aria-label="Toggle variant"
                        icon={openVariants[variantIndex] ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        onClick={() => toggleVariant(variantIndex)}
                        size="sm"
                      />
                    </Box>
                  </Box>

                  <Collapse in={openVariants[variantIndex]}>
                    <VStack spacing={3} align="stretch" mt={3}>
                      {/* {Object.entries(variant).map(([field, value]) => ( */}
                      {Object.entries(variant).filter(([field]) => field !== "variant_id") .map(([field, value]) => (
                        <Box key={field}>
                          <Text fontWeight="bold" color="pink.700">
                            {field}
                          </Text>
                          <Input
                            type="text"
                            value={value}
                            onChange={(e) => handleVariantChange(variantIndex, field, e.target.value)}
                            bg="gray.100"
                            _focus={{ borderColor: "pink.400" }}
                          />
                        </Box>
                      ))}
                    </VStack>
                  </Collapse>
                </Box>
              ))}
          </Box>

          <Divider my={4} />
          <Button colorScheme="pink" onClick={handleSaveChanges} w="full">
            Save Changes
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PartnerServiceManagementPage;
function toast(arg0: { title: string; description: string; status: string; duration: number; isClosable: boolean; }) {
  throw new Error("Function not implemented.");
}



