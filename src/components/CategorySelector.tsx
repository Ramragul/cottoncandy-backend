// import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
// import React from 'react'
// import {BsChevronDown} from 'react-icons/bs'
// import useCatalogueCategory, { Category } from '../hooks/useCatalogueCategory';

// interface Props {
//     onCategorySelect : (category : Category) => void
//     selectedCategory: Category | null;
// }

// interface categoryType {
// id : string | null
// categoryValue : string | null
// }

// const CategorySelector = ({onCategorySelect,selectedCategory}: Props) => {

// //const occasionType = ['All','Ethnic','Formal','Party','General']

// const { data: categories, error, isLoading } = useCatalogueCategory();



// console.log("SelectedOccasion From Occasion pring :" +selectedCategory)
//   return (
//    <Menu>
//     <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedCategory ? selectedCategory : 'occasion' } </MenuButton>
//     <MenuList >
//         {/* <MenuItem id='Ethnic'>Ethnic</MenuItem>
//         <MenuItem id = 'Formal'>Formal</MenuItem>
//         <MenuItem id = 'Party'>Party </MenuItem>
//         <MenuItem id = 'General'>General </MenuItem> */}
//         {categories.map((category) => (
//             <MenuItem key= {category.CategoryID} onClick={()=> onCategorySelect(category.CategoryID)}>{category.CategoryName}</MenuItem>
//         ))}
//     </MenuList>
//    </Menu>
//   )
// }

// export default CategorySelector;


// Version 2 - Type script fix

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import useCatalogueCategory, { Category } from '../hooks/useCatalogueCategory';

interface Props {
    onCategorySelect: (category: Category) => void;
    selectedCategory: Category | null;
}
// interface Props {
//     onCategorySelect: (categoryName: string) => void;
//     selectedCategory: string | null;
// }

const CategorySelector = ({ onCategorySelect, selectedCategory }: Props) => {
    const { data: categories, error, isLoading } = useCatalogueCategory();

    // Handle error and loading states
    if (isLoading) return <Button isLoading>Loading...</Button>;
    if (error) return <Button colorScheme="red">Error loading categories</Button>;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedCategory ? selectedCategory.CategoryName : 'Select Category'}
            </MenuButton>
            <MenuList>
                {categories.map((category) => (
                    <MenuItem key={category.CategoryID} onClick={() => onCategorySelect(category)}>
                        {category.CategoryName}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default CategorySelector;
