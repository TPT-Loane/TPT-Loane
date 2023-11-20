import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Flex,
  Heading,
  List, ListItem,
  Image, Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [items, setItems] = useState<any[]>([]);

  async function getItems() {
    const res = await fetch(window.location.origin + '/item/product/' + id);
    const json = JSON.parse(await res.text());
    console.log(json);
    setItems(json);
  }
  useEffect(() => {
    getItems();
  });

  return (
    <>
      <Flex flexDirection="row" justifyContent="flex-end" alignItems="center">
        <Text mr="0.5em">
          quantity:
          {items.length}
        </Text>
        {true ? (
          <CheckCircleIcon w={8} h={8} color="green.500" />
        ) : (
          <NotAllowedIcon w={8} h={8} color="red.500" />
        )}
      </Flex>
      <List>
        {items.map(item => (
          <ListItem m={2} key={item}>
            {/* <ProductCard productCardItem={productCardItem} asListItem /> */}
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
                <Image
                  src="https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg"
                  alt="Product Image Main"
                  objectFit="cover"
                />
              </AspectRatio>
              <Flex flexDirection="column">
                <Heading textAlign="center">
                  product name:
                  {item.product.name}
                </Heading>
                <Text whiteSpace="pre-wrap">
                  product description:
                  {item.product.description}
                </Text>
                <Text whiteSpace="pre-wrap">
                  product specs:
                  {item.product.specs}
                </Text>
                <Text whiteSpace="pre-wrap">
                  note:
                  {item.notes[0]?.content}
                </Text>
                <Text whiteSpace="pre-wrap">
                  regCode:
                  {item.regCode}
                </Text>
              </Flex>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ProductDetails;
