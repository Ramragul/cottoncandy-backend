// import React from 'react'
// import { Catalogue } from '../hooks/useDesignCatalogue'
// import { Card, CardBody, Heading, Image,Box, Grid, GridItem, Button, Text } from '@chakra-ui/react'

// interface Props {
//     catalogue : Catalogue
// }

// const CatalogueCard = ({catalogue}: Props) => {
//   return (
//     <Card >
//     <Image src = {catalogue.ProductImageURL} objectFit="cover"/>
//     <CardBody>
//         <Heading fontSize='2xl'>{catalogue.ProductName}</Heading>
//     </CardBody>
//     </Card>



//   )
// }

// export default CatalogueCard


import React from 'react';
import { Catalogue } from '../hooks/useDesignCatalogue';
import { Box, Grid, GridItem, Image, Text, Button, VStack } from '@chakra-ui/react';

interface Props {
  catalogue: Catalogue;
}



const CatalogueCard = ({ catalogue }: Props) => {
  return (
    // <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
      <GridItem key={catalogue.ProductID}>


         <Box position="relative" borderRadius="md" overflow="hidden" boxShadow="md">
          <Image
            src={catalogue.ProductImageURL}
            alt={catalogue.ProductName}
            objectFit="cover"
            width="100%"
            height="100%"
            //position="absolute"
            // top="0"
            // left="0"
            // borderRadius="md"
          />
          <VStack
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            p={4}
            spacing={2}
            align="start"
          >
            <Text fontSize="xl" fontWeight="bold">{catalogue.ProductName}</Text>
            <Text fontSize="sm">{catalogue.ProductID}</Text>
            <Button
              mt={2}
              bg="pink.600"
              color="white"
              _hover={{ bg: 'pink.700' }}
              borderRadius="md"
              px={4}
              py={2}
            >
              Rent Now
            </Button>
          </VStack>
        </Box> 
      </GridItem>
    // </Grid>
  );
};

export default CatalogueCard;
