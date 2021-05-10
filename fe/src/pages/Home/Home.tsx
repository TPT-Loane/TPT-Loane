import {
  Box,
  SimpleGrid,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ViewToggler from '../../components/ViewToggler';
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
      description: 'This is this product description..This is this product description..This is this product description..This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\nThis is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\nThis is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\nThis is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
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

function Home(): JSX.Element {
  const [viewType, setViewType] = useState(ViewType.List);

  return (
    <Box
      px={2}
      py={16}
    >
      <Box display="inline-block" p={2} w="100%">
        <ViewToggler view={viewType} setView={setViewType} />
      </Box>

      {(viewType === ViewType.List
        ? (
          <List>
            {PRODUCTS_CARD_ITEMS.map(productCardItem => (
              <ListItem
                m={2}
                key={productCardItem.product.id}
              >
                <ProductCard productCardItem={productCardItem} asListItem />
              </ListItem>
            ))}
          </List>
        )
        : (
          <SimpleGrid
            justifyItems="center"
            minChildWidth="19rem"
            spacing={1}
          >
            {PRODUCTS_CARD_ITEMS.map(productCardItem => (
              <Box
                m={2}
                key={productCardItem.product.id}
              >
                <ProductCard productCardItem={productCardItem} />
              </Box>
            ))}
          </SimpleGrid>
        ))}
    </Box>
  );
}

export default Home;
