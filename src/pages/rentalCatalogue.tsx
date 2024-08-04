
// // import { Box, Grid, GridItem, HStack, Show, Image } from '@chakra-ui/react'
// import NavBar from '../components/NavBar'
// import CatalogueGrid from '../components/CatalogueGrid'
// import CategoryList from '../components/CategoryList'
// import { useState } from 'react'
// import { Category } from '../hooks/useCatalogueCategory'
// import OccasionSelector from '../components/OccasionSelector'
// import SortSelector from '../components/SortSelector'
// import FilterComponent from '../components/FilterComponent'

// import React from 'react'

// import Photo1 from '../assets/rentalPage/photo1.jpg'
// import Photo2 from '../assets/rentalPage/photo2.jpg'
// import Photo3 from '../assets/rentalPage/photo3.jpg'
// import Photo4 from '../assets/rentalPage/photo4.jpg'
// import Photo5 from '../assets/rentalPage/photo5.jpg'
// import Photo6 from '../assets/rentalPage/photo6.jpg'
// import Photo7 from '../assets/rentalPage/photo7.jpg'
// import sharwani from '../assets/rentalPage/sharwani.jpg'
// import blazzer from '../assets/rentalPage/blazzer.jpg'

// import {
//     Box,
//     Flex,
//     Grid,
//     GridItem,
//     Heading,
//     Text,
//     Select,
//     CheckboxGroup,
//     Checkbox,
//     VStack,
//     HStack,
//     Image,
//     useMediaQuery,
//     Button,
//     Show,
//   } from '@chakra-ui/react';
// import CatalogueImageCard from '../components/CatalogueImageCard'
// import { Catalogue } from '../hooks/useDesignCatalogue'
// import { CatalogueQuery } from "../App";

// // export interface CatalogueQuery {
// //   category : Category | null
// //   occasion : string | null
// // }

// export interface Product {
//     id: number;
//     image: string;
//     name: string;
//     price: string;
//   }

//   interface Props {
//     products : Catalogue;
//   }
// // const products: Catalogue[] = [
// //     {
// //       ProductID: "1",
// //       ProductImageURL: Photo1,
// //       ProductName: 'Product 1',
// //       ProductPrice: ''
// //     },
// //     {
// //       ProductID: "2",
// //       ProductImageURL: Photo2,
// //       ProductName: 'Product 2',
// //       ProductPrice: ''
// //     }

    

// //   ];

// export const RentalCatalogue = () => {

//   const [catalogueQuery , setCatalogueQuery] = useState<CatalogueQuery>({} as CatalogueQuery)

//   // const [selectedCategory,setSelectedCategory] = useState<Category | null >(null)
//   // const [selectedOccasion,setSelectedOccasion] = useState <string | null>(null)

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

//         <FilterComponent selectedCategory={catalogueQuery.category} onSelectCategory={(category => setCatalogueQuery({...catalogueQuery ,category}))} />
//     </GridItem>
     
//     </Show>
    
//     <GridItem area="main" >
//     <HStack spacing={5} paddingLeft={2} marginBottom={5} >
//     <OccasionSelector selectedOccasion={catalogueQuery.occasion} onOccasionSelect={(occasion)=>setCatalogueQuery({...catalogueQuery, occasion})}/>
//     <SortSelector />
//     </HStack>
  

// <CatalogueGrid catalogueQuery={catalogueQuery} apiPath={"api/cc/rental/product"} />

//     </GridItem> 

// <GridItem area="main">
//   <HStack spacing={5} paddingLeft={2} marginBottom={5}>
//     <OccasionSelector selectedOccasion={catalogueQuery.occasion} onOccasionSelect={(occasion) => setCatalogueQuery({ ...catalogueQuery, occasion })} />
//     <SortSelector />
//   </HStack>

// </GridItem>

//  </Grid>
// )
// }

// export default RentalCatalogue;


// Version 2 - Type Mismatch fix for the Build Fix


import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import CatalogueGrid from '../components/CatalogueGrid';
import OccasionSelector from '../components/OccasionSelector';
import SortSelector from '../components/SortSelector';
import FilterComponent from '../components/FilterComponent';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { CatalogueQuery } from '../App';
import { Category } from '../hooks/useCatalogueCategory';
import CategorySelector from '../components/CategorySelector';
import { useLocation } from 'react-router-dom';

export const RentalCatalogue: React.FC = () => {
  const [catalogueQuery, setCatalogueQuery] = useState<CatalogueQuery>({} as CatalogueQuery);

const location = useLocation ();
const queryParams = new URLSearchParams(location.search);
const productType = queryParams.get('productType');

  const handleCategorySelect = (category: Category) => {
    setCatalogueQuery({ ...catalogueQuery, category });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={5}>
          <FilterComponent
            selectedCategory={catalogueQuery.category}
            onSelectCategory={handleCategorySelect}
            apiPath = {"/api/cc/categories"}
            productType = {productType}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
        <Show below='lg'>
        <CategorySelector
            selectedCategory={catalogueQuery.category}
            //onCategorySelect={(category) => setCatalogueQuery({ ...catalogueQuery, category })}
            onCategorySelect={(category) => setCatalogueQuery({ ...catalogueQuery, category })}
            productType={productType}
            apiPath = {"/api/cc/categories"}
            />
            </Show>
          <OccasionSelector
            selectedOccasion={catalogueQuery.occasion}
            onOccasionSelect={(occasion) => setCatalogueQuery({ ...catalogueQuery, occasion })}
          />
          <Show above='lg'>
          <SortSelector />
          </Show>
        </HStack>
        <CatalogueGrid catalogueQuery={catalogueQuery} apiPath={"api/cc/rental/product"} productType={productType} />
      </GridItem>
    </Grid>
  );
};

export default RentalCatalogue;
