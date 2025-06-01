import { Box } from '@chakra-ui/react'
import React from 'react'
import { ReactNode } from 'react'

interface Props {
    children : ReactNode
}

const CatalogueCardContainer = ({children}: Props) => {
  return (
   <Box borderRadius={10} overflow='hidden'> 
   {children}
   </Box>
  )
}

export default CatalogueCardContainer