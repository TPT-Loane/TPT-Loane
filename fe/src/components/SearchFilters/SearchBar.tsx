import React from 'react';
import { IconButton, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { HomeContext } from '../../pages/Home';

interface Props {
  keyWord: string
}

const SearchBar: React.FC<Props> = ({ keyWord }: Props): JSX.Element => {
  const { filters, setSearchTerm } = React.useContext(HomeContext);

  const handleSearch = (): void => {
    // @todo - Update this to query products via search string and filters.
    // eslint-disable-next-line
    console.log(keyWord, filters);
  };

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter") {
        handleSearch();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <InputGroup>
      <Input
        type="text"
        name="searchTerm"
        placeholder="Search by name"
        variant="filled"
        value={keyWord}
        onChange={e => setSearchTerm(e.target.value.toLowerCase())}
      />
      <InputRightAddon w="2.5rem" justifyContent="center">
        <IconButton
          aria-label="Search"
          roundedLeft="none"
          icon={<SearchIcon />}
          onClick={() => handleSearch()}
        />
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchBar;
