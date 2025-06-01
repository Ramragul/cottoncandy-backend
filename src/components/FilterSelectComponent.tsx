import React from 'react';
import { Select } from '@chakra-ui/react';
import useCatalogueCategory, { Category } from '../hooks/useCatalogueCategory';

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const FilterSelectComponent: React.FC<Props> = ({ onSelectCategory, selectedCategory }) => {
  const { data: categories, error, isLoading } = useCatalogueCategory();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <Select
      placeholder="Select category"
      onChange={(e) => {
        const selectedId = e.target.value;
        const selectedCategory = categories.find(cat => cat.CategoryID === selectedId);
        if (selectedCategory) {
          onSelectCategory(selectedCategory);
        }
      }}
      value={selectedCategory?.CategoryID || ''}
    >
      {categories.map((category) => (
        <option key={category.CategoryID} value={category.CategoryID}>
          {category.CategoryName}
        </option>
      ))}
    </Select>
  );
};

export default FilterSelectComponent;
