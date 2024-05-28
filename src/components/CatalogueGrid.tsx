
import useDesignCatalogue from '../hooks/useDesignCatalogue'
import { SimpleGrid, Text } from '@chakra-ui/react';
import CatalogueCard from './CatalogueCard';
import CatalogueCardSkeleton from './CatalogueCardSkeleton';
import CatalogueCardContainer from './CatalogueCardContainer';
import { Category } from '../hooks/useCatalogueCategory';
import { CatalogueQuery } from '../App';


interface Props {
    catalogueQuery : CatalogueQuery

}


const CatalogueGrid = ({catalogueQuery} : Props) => {

    console.log("selected Occasion from Grid Catalogue query object "+catalogueQuery.occasion)
  
    const {data , error, isLoading} = useDesignCatalogue (catalogueQuery);
    const skeletons = [1,2,3,4,5,6]
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1 , md: 2, lg: 3, xl: 5}} padding= "10px" spacing={3}>
    {isLoading && skeletons.map(skeleton => (
    <CatalogueCardContainer key={skeleton}>
        <CatalogueCardSkeleton /> 
    </CatalogueCardContainer>
    ))}
    {data.map(data => (
    <CatalogueCardContainer key={data.ProductID}>
        <CatalogueCard  catalogue={data}/>
    </CatalogueCardContainer>
    ))}
    </SimpleGrid>
{/* { {catalogueData.map(val => <li>{val.ProductId}</li>)} } */}
    </>
  )
}

export default CatalogueGrid