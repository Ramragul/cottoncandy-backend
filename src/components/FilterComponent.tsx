// import { useState } from 'react';
// import { Box, Heading, VStack, Stack, Text, useRadio, useRadioGroup } from '@chakra-ui/react';
// import React from 'react';

// const FilterCard = ({ children, ...props }) => {
//   const { getInputProps, getCheckboxProps } = useRadio(props);

//   const input = getInputProps();
//   const checkbox = getCheckboxProps();

//   return (
//     <Box as="label">
//       <input {...input} />
//       <Box
//         {...checkbox}
//         cursor="pointer"
//         borderWidth="1px"
//         borderRadius="md"
//         boxShadow="md"
//         _checked={{
//           bg: "pink.600",
//           color: "white",
//           borderColor: "pink.600",
//         }}
//         _focus={{
//           boxShadow: "outline",
//         }}
//         px={5}
//         py={3}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// };

// const FilterComponent = () => {
//   const options = ['Wedding', 'Party', 'Graduation', 'Formal'];
//   const { getRootProps, getRadioProps } = useRadioGroup({
//     name: 'filter',
//     defaultValue: 'Wedding',
//     onChange: console.log,
//   });

//   const group = getRootProps();

//   return (
//     <Box w="20%" display={{ base: 'none', md: 'block' }} pr={4}>
//       <VStack align="start">
//         <Heading size="md" mb={4} color="pink.800">Filters</Heading>
//         <Stack {...group}>
//           {options.map((value) => {
//             const radio = getRadioProps({ value });
//             return (
//               <FilterCard key={value} {...radio}>
//                 <Text>{value}</Text>
//               </FilterCard>
//             );
//           })}
//         </Stack>
//       </VStack>
//     </Box>
//   );
// };

// export default FilterComponent;


import { useState } from 'react';
import { Box, Heading, VStack, Stack, Text, Flex, useRadio, useRadioGroup, Icon, List, Image, HStack, Button, ListItem } from '@chakra-ui/react';
import { FaDoorOpen, FaBirthdayCake, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import React from 'react';

import blazzer from '../assets/rentalPage/blazzer.jpg'
import indowest from '../assets/rentalPage/indowest.jpg'
import pyjama from '../assets/rentalPage/pyjama.jpg'
import sharwani from '../assets/rentalPage/sharwani.jpg'
import suits from '../assets/rentalPage/suits.jpg'

interface Product {
    id: number;
    image: string;
    name: string;
    price: string;
  }

  const products: Product[] = [
    {
      id: 1,
      image: blazzer,
      name: 'Blazzer',
      price: '$100',
    },
    {
      id: 2,
      image: indowest,
      name: 'Indo West',
      price: '$150',
    },
    {
      id: 3,
      image: pyjama,
      name: 'Pyjama',
      price: '$150',
    },
    {
      id: 4,
      image: sharwani,
      name: 'Sharwani',
      price: '$150',
    },
    {
      id: 5,
      image: suits,
      name: 'Suits',
      price: '$150',
    },
    // Add more products here
  ];

// const FilterCard = ({ children, icon, ...props }) => {
//   const { getInputProps, getCheckboxProps } = useRadio(props);

//   const input = getInputProps();
//   const checkbox = getCheckboxProps();


    


//   }

//   return (
//     <Box as="label" w="100%">
//       <input {...input} />
//       <Flex
//         {...checkbox}
//         cursor="pointer"
//         borderWidth="1px"
//         borderRadius="md"
//         boxShadow="md"
//         _checked={{
//           bg: "pink.600",
//           color: "white",
//           borderColor: "pink.600",
//         }}
//         _focus={{
//           boxShadow: "outline",
//         }}
//         px={5}
//         py={3}
//         alignItems="center"
//       >
//         <Icon as={icon} mr={3} />
//         {children}
//       </Flex>
//     </Box>
//   );
// };

const FilterComponent = () => {
//   const options = [
//     { value: 'wedding', label: 'Wedding', icon: FaDoorOpen },
//     { value: 'party', label: 'Party', icon: FaBirthdayCake },
//     { value: 'graduation', label: 'Graduation', icon: FaGraduationCap },
//     { value: 'formal', label: 'Formal', icon: FaUserTie },
//   ];

//   const { getRootProps, getRadioProps } = useRadioGroup({
//     name: 'filter',
//     defaultValue: 'wedding',
//     onChange: console.log,
//   });

//   const group = getRootProps();

//   return (
//     <Box w="20%" display={{ base: 'none', md: 'block' }} pr={4}>
//       <VStack align="start">
//         <Heading size="md" mb={4} color="pink.800">Filters</Heading>
//         <Stack {...group} spacing={3} w="100%">
//           {options.map(({ value, label, icon }) => {
//             const radio = getRadioProps({ value });
//             return (
//               <FilterCard key={value} {...radio} icon={icon}>
//                 <Text>{label}</Text>
//               </FilterCard>
//             );
//           })}
//         </Stack>
//       </VStack>
//     </Box>
//   );

return(
<>
<Heading size="md" mb={4} color="pink.800">Filters</Heading>    
<List>
{products.map(val=> (
<ListItem key={val.id} paddingY='5px' marginTop='20px'> 
 
<HStack>
    <Image boxSize='50px' borderRadius={8} src = {val.image}></Image>
    {/* <Button fontWeight={(val.CategoryName === selectedCategory?.CategoryName) ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={()=>onSelectCategory(val)}>{val.name}</Button> */}
    <Button fontWeight= 'bold' color='pink.900' fontSize='lg' variant='link' onClick={()=>console.log("Selected FIlter" +val)}>{val.name}</Button>
</HStack>
</ListItem>))}
</List>
</>
);
};


export default FilterComponent;
