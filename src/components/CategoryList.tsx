import React from 'react'
import useCatalogueCategory, { Category } from '../hooks/useCatalogueCategory'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';


interface Props {
    onSelectCategory : (category : Category) => void;
    selectedCategory : Category | null;
}


const CategoryList = ({onSelectCategory,selectedCategory} : Props) => {

    const {data, isLoading,error} = useCatalogueCategory();

    if (isLoading) return <Spinner />
    if (error) return null
  return (
   
   <List>
    {data.map(val=> (
    <ListItem key={val.CategoryID} paddingY='5px'> 
    <HStack>
        <Image boxSize='32px' borderRadius={8} src = {val.CategoryImageURL}></Image>
        <Button fontWeight={(val.CategoryName === selectedCategory?.CategoryName) ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={()=>onSelectCategory(val)}>{val.CategoryName}</Button>
    </HStack>
    </ListItem>))}
   </List>
  )
}

export default CategoryList