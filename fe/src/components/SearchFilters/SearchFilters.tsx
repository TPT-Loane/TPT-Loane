import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { HomeContext } from '../../pages/Home';
import SearchBar from './SearchBar';
import FiltersDropdown from './FiltersDropdown';

const SearchFilters = (): JSX.Element => {
  const { searchTerm, filters } = React.useContext(HomeContext);

  const handleSearch = (): void => {
    // @todo - Update this to query products via search string and filters.
    // eslint-disable-next-line
    console.log(searchTerm, filters);
  };

  return (
    <>
      <IconButton
        mr={2}
        aria-label="Search"
        icon={<SearchIcon />}
        onClick={() => handleSearch()}
      />
      <SearchBar keyWord={searchTerm} />
      <Box ml={2}>
        <FiltersDropdown activeFilters={filters} />
      </Box>
    </>
  );
};

export default SearchFilters;
