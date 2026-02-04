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
  Button,
  VStack
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

      {/* 🌸 LUXURY HERO */}
      <Box
        position="relative"
        height={{ base: "70vh", lg: "85vh" }}
        backgroundImage="url('/images/tailoring-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          inset="0"
          bg="rgba(0,0,0,0.45)"
        />

        <VStack zIndex={2} spacing={6} textAlign="center" px={6}>
          <Text
            fontSize={{ base: "3xl", lg: "6xl" }}
            fontWeight="bold"
            color="white"
            letterSpacing="wide"
          >
            Bespoke Blouse Couture
          </Text>
          <Text fontSize="lg" color="gray.200" maxW="600px">
            Handcrafted elegance • Aari masterpieces • Perfect custom fit
          </Text>
          <Button
            size="lg"
            bg="pink.500"
            color="white"
            _hover={{ bg: "pink.600" }}
            borderRadius="full"
            px={10}
          >
            Explore Collection
          </Button>
        </VStack>
      </Box>

      {/* MAIN AREA */}
      <Box bg="#fff7fb">
        <Grid
          templateAreas={{
            base: `"main"`,
            lg: `"aside main"`
          }}
          templateColumns={{
            base: '1fr',
            lg: '240px 1fr'
          }}
        >
          {/* Sidebar */}
          <Show above="lg">
            <GridItem area="aside" px={6} pt={16}>
              <FilterComponent
                selectedCategory={catalogueQuery.category}
                onSelectCategory={handleCategorySelect}
                apiPath="/api/cc/categories"
                productType={productType}
              />
            </GridItem>
          </Show>

          <GridItem area="main">

            {/* ✨ GLASS FILTER BAR */}
            <Box
              position="sticky"
              top="70px"
              zIndex={20}
              backdropFilter="blur(14px)"
              bg="rgba(255,255,255,0.85)"
              borderRadius="xl"
              mx={{ base: 3, lg: 10 }}
              mt={-12}
              px={6}
              py={4}
              boxShadow="xl"
            >
              <HStack spacing={6} overflowX="auto">
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

            {/* PRODUCTS */}
            <Box px={{ base: 4, lg: 12 }} py={16}>
              <CatalogueGrid
                catalogueQuery={catalogueQuery}
                apiPath="api/cc/designcatalogue"
                productType={productType}
                purchaseType="tailoring"
              />
            </Box>

            {/* 💎 TRUST BAND */}
            <Box bg="white" py={16} boxShadow="inner">
              <HStack justify="space-evenly" flexWrap="wrap" spacing={10}>
                <Text fontSize="lg">🚚 Free Premium Delivery</Text>
                <Text fontSize="lg">🧵 Tailor Perfect Fit</Text>
                <Text fontSize="lg">🎀 Bridal Specialists</Text>
                <Text fontSize="lg">💬 Personal Style Support</Text>
              </HStack>
            </Box>

          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default TailoringCatalogue;
