// Version 1

// import { useState } from 'react';
// import { Box, Heading, VStack, Stack, Text, Flex, useRadio, useRadioGroup, Icon, List, Image, HStack, Button, ListItem } from '@chakra-ui/react';
// import { FaDoorOpen, FaBirthdayCake, FaGraduationCap, FaUserTie } from 'react-icons/fa';
// import React from 'react';

// import useCatalogueCategory, { Category } from '../hooks/useCatalogueCategory'

// import blazzer from '../assets/rentalPage/blazzer.jpg'
// import indowest from '../assets/rentalPage/indowest.jpg'
// import pyjama from '../assets/rentalPage/pyjama.jpg'
// import sharwani from '../assets/rentalPage/sharwani.jpg'
// import suits from '../assets/rentalPage/suits.jpg'

// interface Product {
//     id: number;
//     image: string;
//     CategoryName: string;
//     price: string;
//   }
//   interface Props {
//     onSelectCategory : (category : Product) => void;
//     selectedCategory : Category | null;
// }
//   const products: Product[] = [
//     {
//       id: 1,
//       image: blazzer,
//       CategoryName: 'Blazzer',
//       price: '$100',
//     },
//     {
//       id: 2,
//       image: indowest,
//       CategoryName: 'Indo West',
//       price: '$150',
//     },
//     {
//       id: 3,
//       image: pyjama,
//       CategoryName: 'Pyjama',
//       price: '$150',
//     },
//     {
//       id: 4,
//       image: sharwani,
//       CategoryName: 'Sharwani',
//       price: '$150',
//     },
//     {
//       id: 5,
//       image: suits,
//       CategoryName: 'Suits',
//       price: '$150',
//     },
//     // Add more products here
//   ];

// // const FilterCard = ({ children, icon, ...props }) => {
// //   const { getInputProps, getCheckboxProps } = useRadio(props);

// //   const input = getInputProps();
// //   const checkbox = getCheckboxProps();


    


// //   }

// //   return (
// //     <Box as="label" w="100%">
// //       <input {...input} />
// //       <Flex
// //         {...checkbox}
// //         cursor="pointer"
// //         borderWidth="1px"
// //         borderRadius="md"
// //         boxShadow="md"
// //         _checked={{
// //           bg: "pink.600",
// //           color: "white",
// //           borderColor: "pink.600",
// //         }}
// //         _focus={{
// //           boxShadow: "outline",
// //         }}
// //         px={5}
// //         py={3}
// //         alignItems="center"
// //       >
// //         <Icon as={icon} mr={3} />
// //         {children}
// //       </Flex>
// //     </Box>
// //   );
// // };

// const FilterComponent = ({onSelectCategory,selectedCategory} : Props) => {
// //   const options = [
// //     { value: 'wedding', label: 'Wedding', icon: FaDoorOpen },
// //     { value: 'party', label: 'Party', icon: FaBirthdayCake },
// //     { value: 'graduation', label: 'Graduation', icon: FaGraduationCap },
// //     { value: 'formal', label: 'Formal', icon: FaUserTie },
// //   ];

// //   const { getRootProps, getRadioProps } = useRadioGroup({
// //     name: 'filter',
// //     defaultValue: 'wedding',
// //     onChange: console.log,
// //   });

// //   const group = getRootProps();

// //   return (
// //     <Box w="20%" display={{ base: 'none', md: 'block' }} pr={4}>
// //       <VStack align="start">
// //         <Heading size="md" mb={4} color="pink.800">Filters</Heading>
// //         <Stack {...group} spacing={3} w="100%">
// //           {options.map(({ value, label, icon }) => {
// //             const radio = getRadioProps({ value });
// //             return (
// //               <FilterCard key={value} {...radio} icon={icon}>
// //                 <Text>{label}</Text>
// //               </FilterCard>
// //             );
// //           })}
// //         </Stack>
// //       </VStack>
// //     </Box>
// //   );

// return(
// <>
// <Heading size="md" mb={4} color="pink.800">Filters</Heading>    
// <List>
// {products.map(val=> (
// <ListItem key={val.id} paddingY='5px' marginTop='20px'> 
 
// <HStack>
//     <Image boxSize='50px' borderRadius={8} src = {val.image}></Image>
//     {/* <Button fontWeight={(val.CategoryName === selectedCategory?.CategoryName) ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={()=>onSelectCategory(val)}>{val.name}</Button> */}
//     {/* <Button fontWeight= 'bold' color='pink.900' fontSize='lg' variant='link' onClick={()=>console.log("Selected FIlter" +val)}>{val.name}</Button> */}
//     <Button fontWeight={(val.CategoryName === selectedCategory?.CategoryName) ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={()=>onSelectCategory(val)}>{val.CategoryName}</Button>
// </HStack>
// </ListItem>))}
// </List>
// </>
// );
// };


// export default FilterComponent;


// Version 2 - Build Fix

// import { useState } from 'react';
// import { Box, Heading, VStack, Text, Image, HStack, Button, List, ListItem } from '@chakra-ui/react';
// import React from 'react';
// import useCatalogueCategory, { Category } from '../hooks/useCatalogueCategory';

// interface Props {
//   onSelectCategory: (category: Category) => void;
//   selectedCategory: Category | null;
// }

// const FilterComponent: React.FC<Props> = ({ onSelectCategory, selectedCategory }) => {
//   const { data: categories, error, isLoading } = useCatalogueCategory();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading categories</div>;

//   return (
//     <>
//       <Heading size="md" mb={4} color="pink.800">Filters</Heading>
//       <List>
//         {categories.map((category) => (
//           <ListItem key={category.CategoryID} paddingY='5px' marginTop='20px'>
//             <HStack>
//               <Image boxSize='50px' borderRadius={8} src={category.CategoryImageURL} alt={category.CategoryName} />
//               <Button
//                 fontWeight={(category.CategoryID === selectedCategory?.CategoryID) ? 'bold' : 'normal'}
//                 fontSize='lg'
//                 variant='link'
//                 onClick={() => onSelectCategory(category)}
//               >
//                 {category.CategoryName}
//               </Button>
//             </HStack>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default FilterComponent;


// Version 3 , Version 2 is working version, this is an enhanced version with jewellery category addition

import { useState } from 'react';
import { Box, Heading, VStack, Text, Image, HStack, Button, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import useCatalogueCategory, { Category } from '../hooks/useCatalogueCategory';

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
  apiPath : string ;
  productType : string | null;
}

const FilterComponent: React.FC<Props> = ({ onSelectCategory, selectedCategory,productType , apiPath}) => {
  const { data: categories, error, isLoading } = useCatalogueCategory(apiPath,productType);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <>
      <Heading size="md" mb={4} color="pink.800">Filters</Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category.CategoryID} paddingY='5px' marginTop='20px'>
            <HStack>
              <Image boxSize='50px' borderRadius={8} src={category.CategoryImageURL} alt={category.CategoryName} />
              <Button
                fontWeight={(category.CategoryID === selectedCategory?.CategoryID) ? 'bold' : 'normal'}
                fontSize='lg'
                variant='link'
                onClick={() => onSelectCategory(category)}
              >
                {category.CategoryName}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FilterComponent;



