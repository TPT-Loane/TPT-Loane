import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons';
import {
  Flex, Heading, Image, Spacer, Text,
} from '@chakra-ui/react';
import React from 'react';
// import { useParams } from 'react-router-dom';

// interface RouteParams {
//   id: string;
// }

const ProductDetails: React.FC = () => {
  // @todo - Remove mock data and make a graphql hook to get single item based on product id
  const data = {
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
  };
  // const { id } = useParams<RouteParams>();

  const { product, quantity } = data;
  const {
    description, isAvailable, name, imageUrl,
  } = product;
  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <Flex
        boxSizing="border-box"
        marginX="2em"
        flexDirection={{ base: 'column', lg: 'row' }}
        textAlign="center"
        justifyContent="center"
      >
        <Flex textAlign="center" justifyContent="center" mx="1em" mb="1em">
          <Image w="90%" src={imageUrl} alt="Product Image Main" />
        </Flex>
        <Spacer />
        <Flex flexDirection="column">
          <Heading textAlign="center">{name}</Heading>
          <Text whiteSpace="pre-wrap">{description}</Text>
          <Flex flexDirection="row" justifyContent="flex-end" alignItems="center">
            <Text mr="0.5em">{quantity}</Text>
            {isAvailable ? (
              <CheckCircleIcon w={8} h={8} color="green.500" />
            ) : (
              <NotAllowedIcon w={8} h={8} color="red.500" />
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDetails;
