import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}> Order By : Relevance</MenuButton>
    <MenuList >
        <MenuItem id='Relevance'>Relevance</MenuItem>
        <MenuItem id = 'DateAdded'>Date Added</MenuItem>
        <MenuItem id = 'Name'>Name</MenuItem>
        <MenuItem id = 'ReleaseDate'>Release Date </MenuItem> 
        <MenuItem id = 'Popularity'>Popularity</MenuItem> 
        <MenuItem id = 'AverageRating'>Average Rating</MenuItem> 
    </MenuList>
   </Menu>
  )
}

export default SortSelector