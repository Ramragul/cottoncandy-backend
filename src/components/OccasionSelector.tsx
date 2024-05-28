import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

interface Props {
    onOccasionSelect : (occasion : string) => void
    selectedOccasion : string | null 
}

interface occasionType {
id : string | null
occasionValue : string | null
}

const OccasionSelector = ({onOccasionSelect,selectedOccasion}: Props) => {

//const occasionType = ['All','Ethnic','Formal','Party','General']

const occasionType = [{
id : '',
occasionValue : 'All'
},
{
id : 'Ethnic',
occasionValue : 'Ethnic'
},
{
id : 'Formal',
occasionValue : 'Formal'
},
{
id : 'Party',
occasionValue : 'Party'
},
{
id : 'General',
occasionValue : 'General'
},
]

console.log("SelectedOccasion From Occasion pring :" +selectedOccasion)
  return (
   <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedOccasion ? selectedOccasion : 'occasion' } </MenuButton>
    <MenuList >
        {/* <MenuItem id='Ethnic'>Ethnic</MenuItem>
        <MenuItem id = 'Formal'>Formal</MenuItem>
        <MenuItem id = 'Party'>Party </MenuItem>
        <MenuItem id = 'General'>General </MenuItem> */}
        {occasionType.map((occasionType) => (
            <MenuItem key= {occasionType.id} onClick={()=> onOccasionSelect(occasionType.id)}>{occasionType.occasionValue}</MenuItem>
        ))}
    </MenuList>
   </Menu>
  )
}

export default OccasionSelector