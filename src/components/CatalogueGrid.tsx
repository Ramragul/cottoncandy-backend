

// Version 1  - Working version , moderate design

// import React from 'react';
// import useDesignCatalogue from '../hooks/useDesignCatalogue';
// import { Box, Grid, Text } from '@chakra-ui/react';
// import CatalogueCardSkeleton from './CatalogueCardSkeleton';
// import CatalogueCardContainer from './CatalogueCardContainer';
// import CatalogueImageCard from './CatalogueImageCard';
// import { CatalogueQuery } from '../App';

// interface Props {
//   catalogueQuery: CatalogueQuery;
//   apiPath: string;
//   productType : string | null;
//   purchaseType : string | null;
// }

// const CatalogueGrid: React.FC<Props> = ({ catalogueQuery, apiPath , productType , purchaseType }) => {
//   console.log("selected Occasion from Grid Catalogue query object " + catalogueQuery.occasion);

//   const { data, error, isLoading } = useDesignCatalogue(catalogueQuery, apiPath,productType);
//   const skeletons = [1, 2, 3, 4, 5, 6];

//   purchaseType = (purchaseType == "rental") ? 'Rent Now' : "Stitch Now"

//   return (
//     <>
//       {error && <Text>{error}</Text>}

//       <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={8}>
//         {isLoading && skeletons.map(skeleton => (
//           <CatalogueCardContainer key={skeleton}>
//             <CatalogueCardSkeleton />
//           </CatalogueCardContainer>
//         ))}
//       </Grid>

//       <Box w={{ base: '100%', md: '98%' }}>
//         <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
//           {data?.map((product) => (
//             //<CatalogueImageCard key={product.ProductID} product={product} productType = {productType} purchaseType = {purchaseType} />
//            (product.ProductStatus == 'Active') ? <CatalogueImageCard key={product.ProductID} product={product} productType = {productType} purchaseType = {purchaseType} /> : null
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default CatalogueGrid;



// Version 2 : Enhancement to version 1 with design updates

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
  purchaseType : string | null;
}

const CatalogueGrid: React.FC<Props> = ({ catalogueQuery, apiPath , productType , purchaseType }) => {
  console.log("selected Occasion from Grid Catalogue query object " + catalogueQuery.occasion);

  const { data, error, isLoading } = useDesignCatalogue(catalogueQuery, apiPath,productType);
  const skeletons = [1, 2, 3, 4, 5, 6];

  purchaseType = (purchaseType == "rental") ? 'Rent Now' : "Stitch Now"

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
      <Grid
  templateColumns={{
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)'
  }}
  gap={10}
>

          {data?.map((product) => (
            //<CatalogueImageCard key={product.ProductID} product={product} productType = {productType} purchaseType = {purchaseType} />
           (product.ProductStatus == 'Active') ? <CatalogueImageCard key={product.ProductID} product={product} productType = {productType} purchaseType = {purchaseType} /> : null
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CatalogueGrid;