import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex, Box, Image, useColorModeValue, Icon, Tooltip, Text,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
} from '@chakra-ui/icons';

// @todo - Remove this interface after we have a type for ProductCardItem as "single source of truth".
interface ProductCardItem {
  name: string;
  description: string;
  id: number;
  quantity: number;
}

interface Props {
  productCardItem: ProductCardItem;
  asListItem?: boolean, // Whether we display product as a detailed list item or just as product card.
}

const ProductCard: React.FC<Props> = ({ productCardItem, asListItem }): JSX.Element => {
  const link = `product/${productCardItem.id.toString()}`;
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      minW={asListItem ? '30rem' : '18rem'}
      maxW={asListItem ? 'auto' : '24rem'}
      borderWidth="1px"
      rounded="lg"
      position="relative"
    >
      <Tooltip
        label={productCardItem.description}
        whiteSpace="pre-wrap"
        bg="white"
        placement="left-start"
        color="gray.800"
        fontSize="1em"
      >
        <Icon
          display={asListItem ? 'none' : 'block'}
          as={HamburgerIcon}
          position="absolute"
          top={2}
          right={2}
          fontSize="2xl"
        />
      </Tooltip>

      {/* <Tooltip
        label={productCardItem.product.isAvailable ? 'Available' : 'Unavailable'}
        bg="white"
        placement={asListItem ? 'right' : 'top'}
        color="gray.800"
        fontSize="1.2em"
      >
        <Icon
          as={productCardItem.product.isAvailable ? CheckIcon : CloseIcon}
          position="absolute"
          top={2}
          left={2}
          fontSize="2xl"
        />
      </Tooltip> */}

      <Flex>
        <Image
          w={asListItem ? '20rem' : 'auto'}
          h={asListItem ? '12rem' : 'auto'}
          src="https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg"
          alt={`Picture of ${productCardItem.name}`}
          roundedTopLeft="lg"
          roundedTopRight={asListItem ? 'none' : 'lg'}
          roundedBottomLeft={asListItem ? 'lg' : 'none'}
        />

        <Box
          display={asListItem ? 'block' : 'none'}
          p={2}
          w="100%"
          isTruncated
        >
          <Tooltip
            label={productCardItem.name}
            bg="white"
            placement="top-start"
            color="gray.800"
            fontSize="1em"
            maxW="max-content"
          >
            <Text
              as="h4"
              mr={8}
              fontSize="2xl"
              fontWeight="semibold"
              isTruncated
            >
              <RouterLink to={link}>
                {productCardItem.name}
              </RouterLink>
            </Text>
          </Tooltip>
          <Text
            as="p"
            mt={3}
            maxH="8rem"
            whiteSpace="pre-wrap"
            overflowY="auto"
            sx={{
              '&::-webkit-scrollbar': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(225, 225, 225, 0.25)',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
              },
            }}
          >
            {productCardItem.description}
          </Text>
          {/* @todo - Update this link/button to do something more logical. */}
          {/* <RouterLink to="#">
            <Icon
              as={AddIcon}
              display={productCardItem.product.isAvailable ? 'block' : 'none'}
              position="absolute"
              top={2}
              right={2}
              h={7}
              w={7}
            />
          </RouterLink> */}
        </Box>
      </Flex>

      <Box
        display={asListItem ? 'none' : 'block'}
        p={4}
      >
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Text
            pr={2}
            as="h4"
            fontSize="2xl"
            fontWeight="semibold"
            whiteSpace="pre-wrap"
          >
            <RouterLink to={link}>
              {productCardItem.name}
            </RouterLink>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
