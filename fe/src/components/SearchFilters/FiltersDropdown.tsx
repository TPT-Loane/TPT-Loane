import React from 'react';
import {
  Button, Checkbox, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Category } from '../../utils';
import { HomeContext } from '../../pages/Home';
import { useGetCategoriesQuery } from '../../generated/graphql';

interface Props {
  activeFilters: Array<number> // Currently as array of category ids.
}

const FiltersDropdown: React.FC<Props> = ({ activeFilters }: Props): JSX.Element => {
  const { setFilters } = React.useContext(HomeContext);
  const categoriesQuery = useGetCategoriesQuery();
  const categories: Array<Category> = categoriesQuery.data ? categoriesQuery.data.categories : [];

  const updateFilters = (filter: string) => {
    const filterId = parseInt(filter, 10);
    let filters = activeFilters;

    if (filters.includes(filterId)) {
      filters = filters.filter((id: number) => id !== filterId);
    } else {
      filters.push(filterId);
    }
    setFilters(filters);
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon fontSize="1.5rem" />}>
        Filters
      </MenuButton>
      <MenuList>
        {categories.map(category => (
          <MenuItem key={category.id}>
            <Checkbox
              value={category.id}
              onChange={e => updateFilters(e.target.value)}
            >
              {category.name}
            </Checkbox>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FiltersDropdown;
