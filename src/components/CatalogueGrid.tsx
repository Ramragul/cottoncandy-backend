
// import useDesignCatalogue from '../hooks/useDesignCatalogue'
// import { Box, Grid, SimpleGrid, Text } from '@chakra-ui/react';
// // import CatalogueCard from './CatalogueCard';
// import CatalogueCardSkeleton from './CatalogueCardSkeleton';
// import CatalogueCardContainer from './CatalogueCardContainer';
// import { Category } from '../hooks/useCatalogueCategory';
// import { CatalogueQuery } from "../App";
// import React from 'react';
// import CatalogueImageCard from './CatalogueImageCard';



// interface Props {
//     catalogueQuery : CatalogueQuery,
//     apiPath : string

// }


// const CatalogueGrid = ({catalogueQuery , apiPath} : Props ) => {

//     console.log("selected Occasion from Grid Catalogue query object "+catalogueQuery.occasion)
  
//     const {data , error, isLoading} = useDesignCatalogue (catalogueQuery , apiPath );
//     const skeletons = [1,2,3,4,5,6]

//   return (
//     <>
//     {error && <Text>{error}</Text>}

//     <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={8}>
//     {isLoading && skeletons.map(skeleton => (
//     <CatalogueCardContainer key={skeleton}>
//         <CatalogueCardSkeleton /> 
//     </CatalogueCardContainer>
//     ))}
//      </Grid>
    
//     <Box w={{ base: '100%', md: '98%' }}>
//     <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
//     {data.map((product) => ( 
        
//     <CatalogueImageCard product={product} />
//      ))}
//      </Grid>
//     </Box>
//     </>
//   )
// }

// export default CatalogueGrid



// Version 2 - Build Fix

import React from 'react';
import useDesignCatalogue from '../hooks/useDesignCatalogue';
import { Box, Grid, Text } from '@chakra-ui/react';
import CatalogueCardSkeleton from './CatalogueCardSkeleton';
import CatalogueCardContainer from './CatalogueCardContainer';
import CatalogueImageCard from './CatalogueImageCard';
import { CatalogueQuery } from '../App';

interface Props {
  catalogueQuery: CatalogueQuery;
  apiPath: string;
  productType : string | null;
}

const CatalogueGrid: React.FC<Props> = ({ catalogueQuery, apiPath , productType }) => {
  console.log("selected Occasion from Grid Catalogue query object " + catalogueQuery.occasion);

  const { data, error, isLoading } = useDesignCatalogue(catalogueQuery, apiPath,productType);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={8}>
        {isLoading && skeletons.map(skeleton => (
          <CatalogueCardContainer key={skeleton}>
            <CatalogueCardSkeleton />
          </CatalogueCardContainer>
        ))}
      </Grid>

      <Box w={{ base: '100%', md: '98%' }}>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
          {data?.map((product) => (
            <CatalogueImageCard key={product.ProductID} product={product} productType = {productType} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CatalogueGrid;
