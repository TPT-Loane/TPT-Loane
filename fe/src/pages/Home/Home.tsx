import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import ProductCard from '../../components/ProductCard';

// @todo - Remove this interface after we have a type for Product as "single source of truth".
interface Product {
  id: number,
  name: string,
  description: string,
  isAvailable: boolean,
  imageUrl: string,
}

// @todo - Remove this fake data when its replaced with products from API.
const PRODUCTS_CARD_ITEMS: Array<Product> = [
  {
    id: 0,
    name: 'HP Pavilion 300H',
    description: 'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
    isAvailable: true,
    imageUrl: 'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
  },
  {
    id: 1,
    name: 'Laptop 150G',
    // eslint-disable-next-line
    description: 'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\nThis is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\nThis is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\nThis is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
    isAvailable: true,
    imageUrl: 'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
  },
  {
    id: 2,
    name: 'MacBook Air 400T',
    description: 'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
    isAvailable: false,
    imageUrl: 'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
  },
  {
    id: 3,
    name: 'Teapot UltraBook',
    description: 'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
    isAvailable: false,
    imageUrl: 'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
  },
  {
    id: 4,
    name: 'Nikon 150G',
    description: 'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
    isAvailable: true,
    imageUrl: 'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
  },
  {
    id: 5,
    name: 'Mac 800 Keyboard',
    description: 'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
    isAvailable: true,
    imageUrl: 'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
  },
  {
    id: 6,
    name: 'Samsung 70000',
    description: 'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
    isAvailable: false,
    imageUrl: 'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
  },
  {
    id: 7,
    name: 'Nikon 600P',
    description: 'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
    isAvailable: true,
    imageUrl: 'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
  },
];

function Home(): JSX.Element {
  return (
    <Box
      px={2}
      py={16}
    >
      <SimpleGrid
        justifyItems="center"
        minChildWidth="19rem"
        spacing={1}
      >
        {PRODUCTS_CARD_ITEMS.map(productCardItem => (
          <Box
            m={1}
            key={product.id}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
