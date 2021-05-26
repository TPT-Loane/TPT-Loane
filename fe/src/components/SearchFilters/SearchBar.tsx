import React from 'react';
import { Input } from '@chakra-ui/react';
import { HomeContext } from '../../pages/Home';

interface Props {
  keyWord: string
}

const SearchBar: React.FC<Props> = ({ keyWord }: Props): JSX.Element => {
  const { setSearchTerm } = React.useContext(HomeContext);

  return (
    <Input
      type="text"
      name="searchTerm"
      placeholder="Search by name"
      variant="filled"
      value={keyWord}
      onChange={e => setSearchTerm(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
