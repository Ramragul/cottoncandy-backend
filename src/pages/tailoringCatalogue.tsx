
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import CatalogueGrid from '../components/CatalogueGrid'
import CategoryList from '../components/CategoryList'
import { useState } from 'react'
import { Category } from '../hooks/useCatalogueCategory'
import OccasionSelector from '../components/OccasionSelector'
import SortSelector from '../components/SortSelector'
import CatalogueImageCard from '../components/CatalogueImageCard'

import React from 'react'


import Photo1 from '../assets/rentalPage/photo1.jpg'
import Photo2 from '../assets/rentalPage/photo2.jpg'
import Photo3 from '../assets/rentalPage/photo3.jpg'
import Photo4 from '../assets/rentalPage/photo4.jpg'
import Photo5 from '../assets/rentalPage/photo5.jpg'


const products: Product[] = [
  {
    id: 1,
    image: Photo1,
    name: 'Product 1',
    price: '$100',
  },
  {
    id: 2,
    image: Photo2,
    name: 'Product 2',
    price: '$150',
  },
  {
    id: 3,
    image: Photo3,
    name: 'Product 3',
    price: '$150',
  },
  {
    id: 4,
    image: Photo4,
    name: 'Product 4',
    price: '$150',
  },
];


export interface CatalogueQuery {
  category : Category | null
  occasion : string | null
}

export const TailoringCatalogue = () => {

  const [catalogueQuery , setCatalogueQuery] = useState<CatalogueQuery>({} as CatalogueQuery)

  // const [selectedCategory,setSelectedCategory] = useState<Category | null >(null)
  // const [selectedOccasion,setSelectedOccasion] = useState <string | null>(null)

return (

 <Grid templateAreas={{
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
    <CategoryList selectedCategory={catalogueQuery.category} onSelectCategory={(category => setCatalogueQuery({...catalogueQuery ,category}))} />
    </GridItem>
    </Show>
    <GridItem area="main" >
    <HStack spacing={5} paddingLeft={2} marginBottom={5} >
    <OccasionSelector selectedOccasion={catalogueQuery.occasion} onOccasionSelect={(occasion)=>setCatalogueQuery({...catalogueQuery, occasion})}/>
    <SortSelector />
    </HStack>
    <CatalogueGrid catalogueQuery={catalogueQuery} apiPath={"api/cc/designcatalogue"} />
    
    {/* <Box w={{ base: '100%', md: '98%' }}>
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
    {products.map((product) => ( 
    <CatalogueImageCard product={product} />
     ))}
    </Grid>
    </Box> */}

    </GridItem>
 </Grid>
)
}

export default TailoringCatalogue;
