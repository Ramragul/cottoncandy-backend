
// import { Box, Grid, GridItem, HStack, Show, Image } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import CatalogueGrid from '../components/CatalogueGrid'
import CategoryList from '../components/CategoryList'
import { useState } from 'react'
import { Category } from '../hooks/useCatalogueCategory'
import OccasionSelector from '../components/OccasionSelector'
import SortSelector from '../components/SortSelector'
import FilterComponent from '../components/FilterComponent'

import React from 'react'

import Photo1 from '../assets/rentalPage/photo1.jpg'
import Photo2 from '../assets/rentalPage/photo2.jpg'
import Photo3 from '../assets/rentalPage/photo3.jpg'
import Photo4 from '../assets/rentalPage/photo4.jpg'
import Photo5 from '../assets/rentalPage/photo5.jpg'
import Photo6 from '../assets/rentalPage/photo6.jpg'
import Photo7 from '../assets/rentalPage/photo7.jpg'
import sharwani from '../assets/rentalPage/sharwani.jpg'
import blazzer from '../assets/rentalPage/blazzer.jpg'

import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    Select,
    CheckboxGroup,
    Checkbox,
    VStack,
    HStack,
    Image,
    useMediaQuery,
    Button,
    Show,
  } from '@chakra-ui/react';
import CatalogueImageCard from '../components/CatalogueImageCard'
import { Catalogue } from '@/hooks/useDesignCatalogue'

export interface CatalogueQuery {
  category : Category | null
  occasion : string | null
}

export interface Product {
    id: number;
    image: string;
    name: string;
    price: string;
  }

  interface Props {
    products : Catalogue;
  }
const products: Catalogue[] = [
    {
      ProductID: "1",
      ProductImageURL: Photo1,
      ProductName: 'Product 1',
    },
    {
      ProductID: "2",
      ProductImageURL: Photo2,
      ProductName: 'Product 2',
    },
    {
      ProductID: "3",
      ProductImageURL: Photo3,
      ProductName: 'Product 3',
    },
    {
      ProductID: "4",
      ProductImageURL: Photo4,
      ProductName: 'Product 4',
    },
    
    // Add more products here
  ];

export const RentalCatalogue = () => {

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
    {/* <CategoryList selectedCategory={catalogueQuery.category} onSelectCategory={(category => setCatalogueQuery({...catalogueQuery ,category}))} /> */}
    {/* <Box w="20%" display={{ base: 'none', md: 'block' }} pr={4}>
         
          <VStack align="start">
          <Heading size="md" mb={4} color="pink.800" alignItems='center'>Filters</Heading>
            <CheckboxGroup colorScheme="pink" >
              <Checkbox value="wedding"color="pink.600">Wedding</Checkbox>
              <Checkbox value="party">Party</Checkbox>
              <Checkbox value="graduation">Graduation</Checkbox>
              <Checkbox value="formal">Formal</Checkbox>
            </CheckboxGroup>
          </VStack>
        </Box> */}

        <FilterComponent />
    </GridItem>
     

    </Show>
    
    <GridItem area="main" >
    <HStack spacing={5} paddingLeft={2} marginBottom={5} >
    <OccasionSelector selectedOccasion={catalogueQuery.occasion} onOccasionSelect={(occasion)=>setCatalogueQuery({...catalogueQuery, occasion})}/>
    <SortSelector />
    </HStack>
    {/* <CatalogueGrid catalogueQuery={catalogueQuery} /> */}



{/* <Box w={{ base: '100%', md: '98%' }}>
<Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
{products.map((product) => ( 
    <CatalogueImageCard product={product} />
   ))}
  </Grid>
  </Box> */}

<CatalogueGrid catalogueQuery={catalogueQuery} apiPath={"api/cc/rental/product"} />

  
    {/* <Box w={{ base: '100%', md: '98%' }}>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
            {products.map((product) => (
              <GridItem key={product.id} position="relative">
                <Box height="0" pt="133.98%" position="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    objectFit="cover"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                
                  />
                </Box>
                <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={4}>
                  <Text color="pink.900" fontWeight="bold" mb={2}  p={2} borderRadius="lg">{product.name}</Text>
                  <Text color="gray.500"  p={2} borderRadius="lg">{product.price}</Text>
                  <Button
                    mt={2}
                    bg="black"
                    color="pink.200"
                    _hover={{ bg: 'gray.700' }}
                    borderRadius="md"
                    px={4}
                    py={2}
                    >
                    Rent Now
                    </Button>

                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box> */}

    </GridItem> 

<GridItem area="main">
  <HStack spacing={5} paddingLeft={2} marginBottom={5}>
    <OccasionSelector selectedOccasion={catalogueQuery.occasion} onOccasionSelect={(occasion) => setCatalogueQuery({ ...catalogueQuery, occasion })} />
    <SortSelector />
  </HStack>
  {/* <CatalogueGrid catalogueQuery={catalogueQuery} /> */}
  {/* <Box w={{ base: '100%', md: '98%' }} px={{ base: 4, md: 0 }}>
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
      {products.map((product) => (
        <GridItem key={product.id} position="relative" m={{ base: 2, md: 0 }}>
          <Box height="0" pt="133.98%" position="relative">
            <Image
              src={product.image}
              alt={product.name}
              objectFit="cover"
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              borderRadius="md"
            />
          </Box>
          <Box position="relative" bottom="0" left="0" right="0" bg="rgba(255, 255, 255, 0.0)" p={4} borderRadius="md">
            <Text color="pink.900" fontWeight="bold" mb={2} p={2}>{product.name}</Text>
            <Text color="gray.500" p={2}>{product.price}</Text>
            <Button
              mt={2}
              bg="black"
              color="pink.200"
              _hover={{ bg: 'gray.700' }}
              borderRadius="md"
              px={4}
              py={2}
            >
              Rent Now
            </Button>
          </Box>
        </GridItem>
      ))}
    </Grid>
  </Box> */}
</GridItem>

 </Grid>
)
}

export default RentalCatalogue;
