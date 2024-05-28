
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CatalogueGrid from './components/CatalogueGrid'
import CategoryList from './components/CategoryList'
import { useState } from 'react'
import { Category } from './hooks/useCatalogueCategory'
import OccasionSelector from './components/OccasionSelector'

interface catalogueQuery {
  category : Category | null
  occasion : string | null
}

function App() {

  const [catalogueQuery , setCatalogueQuery] = useState<catalogueQuery>({} as catalogueQuery)

  const [selectedCategory,setSelectedCategory] = useState<Category | null >(null)
  const [selectedOccasion,setSelectedOccasion] = useState <string | null>(null)

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
    <CategoryList selectedCategory={selectedCategory} onSelectCategory={(category => setSelectedCategory(category))} />
    </GridItem>
    </Show>
    <GridItem area="main" >
    <OccasionSelector selectedOccasion={selectedOccasion} onOccasionSelect={(val)=>setSelectedOccasion(val)}/>
    <CatalogueGrid selectedOccasion= {selectedOccasion} selectedCategory={selectedCategory} />

    </GridItem>
 </Grid>
)
}

export default App
