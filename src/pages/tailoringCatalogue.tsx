// Version 1 : 

// import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
// import NavBar from '../components/NavBar'
// import CatalogueGrid from '../components/CatalogueGrid'
// import CategoryList from '../components/CategoryList'
// import { useState } from 'react'
// import { Category } from '../hooks/useCatalogueCategory'
// import OccasionSelector from '../components/OccasionSelector'
// import SortSelector from '../components/SortSelector'
// import CatalogueImageCard from '../components/CatalogueImageCard'

// import React from 'react'
// import { CatalogueQuery } from "../App";


// import Photo1 from '../assets/rentalPage/photo1.jpg'
// import Photo2 from '../assets/rentalPage/photo2.jpg'
// import Photo3 from '../assets/rentalPage/photo3.jpg'
// import Photo4 from '../assets/rentalPage/photo4.jpg'
// import Photo5 from '../assets/rentalPage/photo5.jpg'




// export const TailoringCatalogue = () => {

//   const [catalogueQuery , setCatalogueQuery] = useState<CatalogueQuery>({} as CatalogueQuery)



// return (

//  <Grid templateAreas={{
//   base: `"nav" "main"`,
//   lg: `"nav nav" "aside main"`
//  }}

//  templateColumns={{
//   base: '1fr',
//   lg: '200px 1fr'
//  }}
//  >
//     <GridItem area="nav">
//     <NavBar />
//     </GridItem>
//     <Show above='lg'>
//     <GridItem area="aside" paddingX={5}>
//     <CategoryList selectedCategory={catalogueQuery.category} onSelectCategory={(category => setCatalogueQuery({...catalogueQuery ,category}))} />
//     </GridItem>
//     </Show>
//     <GridItem area="main" >
//     <HStack spacing={5} paddingLeft={2} marginBottom={5} >
//     <OccasionSelector selectedOccasion={catalogueQuery.occasion} onOccasionSelect={(occasion)=>setCatalogueQuery({...catalogueQuery, occasion})}/>
//     <SortSelector />
//     </HStack>
//     <CatalogueGrid catalogueQuery={catalogueQuery} apiPath={"api/cc/designcatalogue"} />
//     </GridItem>
//  </Grid>
// )
// }

// export default TailoringCatalogue;


// Version 2 -  Enhancements to version 1 with design improvements similar to rental catalogue ui

// import React, { useState } from 'react';
// import NavBar from '../components/NavBar';
// import CatalogueGrid from '../components/CatalogueGrid';
// import OccasionSelector from '../components/OccasionSelector';
// import SortSelector from '../components/SortSelector';
// import FilterComponent from '../components/FilterComponent';
// import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
// import { CatalogueQuery } from '../App';
// import { Category } from '../hooks/useCatalogueCategory';
// import CategorySelector from '../components/CategorySelector';
// import { useLocation } from 'react-router-dom';

// export const TailoringCatalogue: React.FC = () => {
//   const [catalogueQuery, setCatalogueQuery] = useState<CatalogueQuery>({} as CatalogueQuery);

// const location = useLocation ();
// const queryParams = new URLSearchParams(location.search);
// const productType = queryParams.get('productType');

//   const handleCategorySelect = (category: Category) => {
//     setCatalogueQuery({ ...catalogueQuery, category });
//   };

//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "aside main"`
//       }}
//       templateColumns={{
//         base: '1fr',
//         lg: '200px 1fr'
//       }}
//     >
//       <GridItem area="nav">
//         <NavBar />
//       </GridItem>
//       <Show above='lg'>
//         <GridItem area="aside" paddingX={5}>
//           <FilterComponent
//             selectedCategory={catalogueQuery.category}
//             onSelectCategory={handleCategorySelect}
//             apiPath = {"/api/cc/categories"}
//             productType = {productType}
//           />
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <HStack spacing={5} paddingLeft={2} marginBottom={5}>
//         <Show below='lg'>
//         <CategorySelector
//             selectedCategory={catalogueQuery.category}
//             //onCategorySelect={(category) => setCatalogueQuery({ ...catalogueQuery, category })}
//             onCategorySelect={(category) => setCatalogueQuery({ ...catalogueQuery, category })}
//             productType={productType}
//             apiPath = {"/api/cc/categories"}
//             />
//             </Show>
//           <OccasionSelector
//             selectedOccasion={catalogueQuery.occasion}
//             onOccasionSelect={(occasion) => setCatalogueQuery({ ...catalogueQuery, occasion })}
//           />
//           <Show above='lg'>
//           <SortSelector />
//           </Show>
//         </HStack>
//         <CatalogueGrid catalogueQuery={catalogueQuery} apiPath={"api/cc/designcatalogue"} productType={productType} purchaseType = {"tailoring"} />
//       </GridItem>
//     </Grid>
//   );
// };

// export default TailoringCatalogue;



// Version 3 : Enhancements to version 2

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import CatalogueGrid from '../components/CatalogueGrid';
import OccasionSelector from '../components/OccasionSelector';
import SortSelector from '../components/SortSelector';
import {
  Grid,
  GridItem,
  HStack,
  Show,
  Box,
  Text,
  VStack
} from '@chakra-ui/react';
import { CatalogueQuery } from '../App';
import { useLocation } from 'react-router-dom';

export const TailoringCatalogue: React.FC = () => {
  const [catalogueQuery, setCatalogueQuery] = useState<CatalogueQuery>({} as CatalogueQuery);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productType = queryParams.get('productType');

  return (
    <>
      <NavBar />

      {/* 🌸 COLLECTION HEADER */}
      <Box bg="white" pt={14} pb={8} borderBottom="1px solid #f1f1f1">
        <Box maxW="1400px" mx="auto" px={6}>
          <VStack align="start" spacing={2}>
            <Text
              fontSize={{ base: "2xl", lg: "4xl" }}
              fontWeight="bold"
              color="pink.600"
            >
              Blouse Design Collection
            </Text>
            <Text color="gray.500">
              Explore handcrafted Aari works, designer blouses and custom stitching styles
            </Text>
          </VStack>
        </Box>
      </Box>

      {/* 🌷 MAIN AREA */}
      <Box bg="#f9fcff" py={12}>
        <Box maxW="1400px" mx="auto" px={6}>

          {/* ✨ FILTER / CONTROL BAR */}
          <Box
            position="sticky"
            top="70px"
            zIndex={20}
            bg="white"
            borderRadius="xl"
            px={6}
            py={4}
            boxShadow="sm"
            mb={10}
          >
            <HStack spacing={6} overflowX="auto">
              <OccasionSelector
                selectedOccasion={catalogueQuery.occasion}
                onOccasionSelect={(occasion) =>
                  setCatalogueQuery({ ...catalogueQuery, occasion })
                }
              />
              <SortSelector />
            </HStack>
          </Box>

          {/* 🛍 PRODUCTS */}
          <Box
            bg="white"
            borderRadius="3xl"
            p={{ base: 4, lg: 10 }}
            boxShadow="0 25px 60px rgba(0,0,0,0.04)"
          >
            <CatalogueGrid
              catalogueQuery={catalogueQuery}
              apiPath="api/cc/designcatalogue"
              productType={productType}
              purchaseType="tailoring"
            />
          </Box>

          {/* 💎 TRUST STRIP */}
          <Box mt={16} textAlign="center">
            <HStack justify="space-evenly" flexWrap="wrap" spacing={10}>
              <Text color="pink.600">🚚 Free Delivery</Text>
              <Text color="skyblue.500">🧵 Perfect Custom Fit</Text>
              <Text color="pink.600">🎀 Bridal Specialists</Text>
              <Text color="skyblue.500">💬 Personal Support</Text>
            </HStack>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default TailoringCatalogue;
