import React from 'react';
import { Box } from '@chakra-ui/react';
import { HomeContext } from '../../pages/Home';
import SearchBar from './SearchBar';
import FiltersDropdown from './FiltersDropdown';

const SearchFilters = (): JSX.Element => {
  const { searchTerm, filters } = React.useContext(HomeContext);

  return (
    <>
      <SearchBar keyWord={searchTerm} />
      <Box ml={2}>
        <FiltersDropdown activeFilters={filters} />
      </Box>
    </>
  );
};

export default SearchFilters;
