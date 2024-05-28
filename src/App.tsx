
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CatalogueGrid from './components/CatalogueGrid'
import CategoryList from './components/CategoryList'
import { useState } from 'react'
import { Category } from './hooks/useCatalogueCategory'
import OccasionSelector from './components/OccasionSelector'
import SortSelector from './components/SortSelector'

export interface CatalogueQuery {
  category : Category | null
  occasion : string | null
}

function App() {

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
    <CatalogueGrid catalogueQuery={catalogueQuery} />

    </GridItem>
 </Grid>
)
}

export default App
