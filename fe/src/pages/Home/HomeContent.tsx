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
import { HomeContext } from '.';
import { ViewType } from '../../utils';

// @todo - Remove this interface after we have a type for Product as "single source of truth".
interface Product {
  id: number;
  name: string;
  description: string;
  isAvailable: boolean;
  imageUrl: string;
}

// @todo - Remove this interface after we have a type for ProductCardItem as "single source of truth".
interface ProductCardItem {
  product: Product;
  // These would be ProductCard specific props..
  quantity: number;
  // etc..
}

// @todo - Remove this fake data when its replaced with items from API.
const PRODUCTS_CARD_ITEMS: Array<ProductCardItem> = [
  {
    product: {
      id: 0,
      name: 'HP Pavilion 300H',
      description:
        'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: true,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 16,
  },
  {
    product: {
      id: 1,
      name: 'Laptop 150G',
      // eslint-disable-next-line
      description:
        '\nThis is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: true,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 8,
  },
  {
    product: {
      id: 2,
      name: 'MacBook Air 400T',
      description:
        'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: false,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 0,
  },
  {
    product: {
      id: 3,
      name: 'Teapot UltraBook',
      description:
        'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: false,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 0,
  },
  {
    product: {
      id: 4,
      name: 'Nikon 150G',
      description:
        'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: true,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 2,
  },
  {
    product: {
      id: 5,
      name: 'Mac 800 Keyboard',
      description:
        'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: true,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 5,
  },
  {
    product: {
      id: 6,
      name: 'Samsung 70000',
      description:
        'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: false,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 0,
  },
  {
    product: {
      id: 7,
      name: 'Nikon 600P',
      description:
        'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: true,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 4,
  },
];

function HomeContent(): JSX.Element {
  const { view, page } = React.useContext(HomeContext);
  const isViewSwitchable: boolean = useBreakpointValue({ base: false, lg: true }) || false;

  const ITEMS_COUNT_PER_PAGE = 21;
  const paginated = paginate(
    PRODUCTS_CARD_ITEMS,
    page,
    ITEMS_COUNT_PER_PAGE,
  );

  return (
    <Box maxW="75rem" px={useBreakpointValue({ base: 2, md: 12 })} py={16}>
      <Flex p={2}>
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
            <ListItem m={2} key={productCardItem.product.id}>
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
            <Box m={2} key={productCardItem.product.id}>
              <ProductCard productCardItem={productCardItem} />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default HomeContent;
