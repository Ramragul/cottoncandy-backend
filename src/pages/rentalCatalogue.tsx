


// Version 1 


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

// export const RentalCatalogue: React.FC = () => {
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
//         <CatalogueGrid catalogueQuery={catalogueQuery} apiPath={"api/cc/rental/product"} productType={productType} />
//       </GridItem>
//     </Grid>
//   );
// };

// export default RentalCatalogue;


// Version 2 - type field addition 

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
        <CatalogueGrid catalogueQuery={catalogueQuery} apiPath={"api/cc/rental/product"} productType={productType} purchaseType={"rental"}/>
      </GridItem>
    </Grid>
  );
};

export default RentalCatalogue;
