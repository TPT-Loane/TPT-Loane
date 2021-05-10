import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons';
import {
  AspectRatio, Flex, Heading, Image, Text,
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
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
      boxSizing="border-box"
      marginX="2em"
      flexDirection={{ base: 'column', lg: 'row' }}
      textAlign="center"
    >
      <AspectRatio
        w={{
          base: '24em',
          sm: '29em',
          md: '23em',
          lg: '29em',
          xl: '45em',
        }}
        maxW="45em"
        ratio={4 / 3}
        mb={{ base: '1em', lg: 0 }}
        mr={{ lg: '1em' }}
      >
        <Image src={imageUrl} alt="Product Image Main" objectFit="cover" />
      </AspectRatio>
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
  );
};

export default ProductDetails;
