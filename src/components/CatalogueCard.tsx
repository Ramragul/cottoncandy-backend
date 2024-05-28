import React from 'react'
import { Catalogue } from '../hooks/useDesignCatalogue'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

interface Props {
    catalogue : Catalogue
}

const CatalogueCard = ({catalogue}: Props) => {
  return (
    <Card >
    <Image src = {catalogue.ProductImageURL}/>
    <CardBody>
        <Heading fontSize='2xl'>{catalogue.ProductName}</Heading>
    </CardBody>
    </Card>
  )
}

export default CatalogueCard