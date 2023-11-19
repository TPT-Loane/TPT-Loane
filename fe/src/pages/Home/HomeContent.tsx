import { useEffect, useState } from 'react';
import * as React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Spacer,
  List,
  ListItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import Paginator, { paginate } from '../../components/Paginator';
import ProductCard from '../../components/ProductCard';
import ViewToggler from '../../components/ViewToggler';
import SearchFilters from '../../components/SearchFilters';
import { HomeContext } from '.';
import { ViewType } from '../../utils';

function HomeContent(): JSX.Element {
  const { view, page } = React.useContext(HomeContext);
  const isViewSwitchable: boolean = useBreakpointValue({ base: false, lg: true }) || false;
  const [products, setProducts] = useState([]);

  const ITEMS_COUNT_PER_PAGE = 21;
  const paginated = paginate(
    products,
    page,
    ITEMS_COUNT_PER_PAGE,
  );

  async function getProducts() {
    const res = await fetch('product');
    const json = JSON.parse(await res.text());
    console.log(json);
    setProducts(json);
  }
  // getProducts().then(data => console.log(data));

  useEffect(() => {
    getProducts();
  });

  return (
    <Box maxW="75rem" px={useBreakpointValue({ base: 2, md: 12 })} py={8}>
      <Flex p={2} w="100%">
        <SearchFilters />
      </Flex>

      <Flex p={2} w="100%">
        <Paginator
          currentPage={paginated.page}
          pageCount={paginated.totalPages}
        />
        <Spacer />
        <ViewToggler viewSwitchable={isViewSwitchable} />
      </Flex>

      {view === ViewType.List ? (
        <List>
          {paginated.items.map(productCardItem => (
            <ListItem m={2} key={productCardItem.id}>
              <ProductCard productCardItem={productCardItem} asListItem />
            </ListItem>
          ))}
        </List>
      ) : (
        <SimpleGrid
          justifyItems="center"
          minChildWidth="19rem"
          spacing={1}
        >
          {paginated.items.map(productCardItem => (
            // <li>{productCardItem.id}</li>
            <Box m={2} key={productCardItem.id}>
              <ProductCard productCardItem={productCardItem} />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default HomeContent;
