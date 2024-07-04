
// import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
// import NavBar from './components/NavBar'
// import CatalogueGrid from './components/CatalogueGrid'
// import CategoryList from './components/CategoryList'
// import { useState } from 'react'
 import { Category } from './hooks/useCatalogueCategory'
// import OccasionSelector from './components/OccasionSelector'
// import SortSelector from './components/SortSelector'
// import { Routes, Route, Navigate } from "react-router-dom";

export interface CatalogueQuery {
  category : Category | null
  occasion : string | null
}

// function App() {

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
//     <CategoryList selectedCategory={catalogueQuery.category} onSelectCategory={(category => setCatalogueQuery({...catalogueQuery ,category}))} />
//     </GridItem>
//     </Show>
//     <GridItem area="main" >
//     <HStack spacing={5} paddingLeft={2} marginBottom={5} >
//     <OccasionSelector selectedOccasion={catalogueQuery.occasion} onOccasionSelect={(occasion)=>setCatalogueQuery({...catalogueQuery, occasion})}/>
//     <SortSelector />
//     </HStack>
//     <CatalogueGrid catalogueQuery={catalogueQuery} />

//     </GridItem>
//  </Grid>
// )
// }

// export default App


import {Routes, Route, Navigate } from "react-router-dom";
import {TailoringCatalogue} from "./pages/tailoringCatalogue";
import routes from "./routes";
import { CartProvider } from './contexts/CartContext';
import React from "react";
import Navbar from "./widgets/layout/navbar";
import { Box } from '@chakra-ui/react'
import ImageCarousel from './components/ImageCarousel';

function App () {
  return (
    <>
   <Box>
    
    {/* <TailoringCatalogue /> */}
    <Navbar />
    
    <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      </Box>
    </>
  )
}

export default App