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
import FilterComponent from '../components/FilterComponent';
import {
  Grid,
  GridItem,
  HStack,
  Show,
  Box,
  Text,
  Button
} from '@chakra-ui/react';
import { CatalogueQuery } from '../App';
import { Category } from '../hooks/useCatalogueCategory';
import CategorySelector from '../components/CategorySelector';
import { useLocation } from 'react-router-dom';

export const TailoringCatalogue: React.FC = () => {
  const [catalogueQuery, setCatalogueQuery] = useState<CatalogueQuery>({} as CatalogueQuery);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productType = queryParams.get('productType');

  const handleCategorySelect = (category: Category) => {
    setCatalogueQuery({ ...catalogueQuery, category });
  };

  return (
    <>
      <NavBar />

      {/* 🌸 HERO SECTION */}
      <Box
        bgGradient="linear(to-r, pink.50, white)"
        py={16}
        px={{ base: 6, lg: 20 }}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <Text fontSize={{ base: '3xl', lg: '5xl' }} fontWeight="bold" color="pink.600">
          Tailored Elegance, Made for You ✨
        </Text>
        <Text mt={4} fontSize="lg" color="gray.600">
          Designer Blouses • Aari Works • Custom Fit Perfection
        </Text>
        <Button
          mt={6}
          size="lg"
          bg="pink.500"
          color="white"
          _hover={{ bg: 'pink.600' }}
          borderRadius="full"
        >
          Explore Designs
        </Button>
      </Box>

      {/* 📐 MAIN LAYOUT */}
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`
        }}
        templateColumns={{
          base: '1fr',
          lg: '220px 1fr'
        }}
      >
        {/* 🧵 DESKTOP FILTER SIDEBAR */}
        <Show above="lg">
          <GridItem area="aside" px={6} pt={10}>
            <FilterComponent
              selectedCategory={catalogueQuery.category}
              onSelectCategory={handleCategorySelect}
              apiPath="/api/cc/categories"
              productType={productType}
            />
          </GridItem>
        </Show>

        {/* 🛍 MAIN CONTENT */}
        <GridItem area="main">
          {/* ✨ FLOATING FILTER BAR */}
          <Box
            position="sticky"
            top="70px"
            zIndex={10}
            bg="white"
            px={4}
            py={3}
            boxShadow="lg"
            borderRadius="xl"
            mx={{ base: 3, lg: 10 }}
            mt={-8}
          >
            <HStack spacing={4} overflowX="auto">
              <Show below="lg">
                <CategorySelector
                  selectedCategory={catalogueQuery.category}
                  onCategorySelect={handleCategorySelect}
                  productType={productType}
                  apiPath="/api/cc/categories"
                />
              </Show>

              <OccasionSelector
                selectedOccasion={catalogueQuery.occasion}
                onOccasionSelect={(occasion) =>
                  setCatalogueQuery({ ...catalogueQuery, occasion })
                }
              />

              <Show above="lg">
                <SortSelector />
              </Show>
            </HStack>
          </Box>

          {/* 🛍 PRODUCT GRID */}
          <Box px={{ base: 4, lg: 10 }} py={10}>
            <CatalogueGrid
              catalogueQuery={catalogueQuery}
              apiPath="api/cc/designcatalogue"
              productType={productType}
              purchaseType="tailoring"
            />
          </Box>

          {/* 💖 TRUST SECTION */}
          <Box bg="pink.50" py={12} mt={10}>
            <HStack justify="space-around" flexWrap="wrap" spacing={8}>
              <Text fontWeight="medium">🚚 Free Delivery</Text>
              <Text fontWeight="medium">🧵 Perfect Fitting Guarantee</Text>
              <Text fontWeight="medium">🎀 Custom Stitching</Text>
              <Text fontWeight="medium">💬 WhatsApp Support</Text>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default TailoringCatalogue;
