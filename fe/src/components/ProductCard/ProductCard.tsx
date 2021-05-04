import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import {
  AddIcon,
  CheckIcon,
  CloseIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';

// @todo - Remove this interface after we have a type for Product as "single source of truth".
interface Product {
  id: number,
  name: string,
  description: string,
  isAvailable: boolean,
  imageUrl: string,
}

// @todo - Remove this interface after we have a type for ProductCardItem as "single source of truth".
interface ProductCardItem {
  product: Product,
  // These are ProductCard specific props.
  quantity: number,
  // etc..
}

interface Props {
  productCardItem: ProductCardItem;
}

const ProductCard: React.FC<Props> = ({ productCardItem } : Props): JSX.Element => (
  <Box
    bg={useColorModeValue('white', 'gray.800')}
    minW="18rem"
    maxW="24rem"
    borderWidth="1px"
    rounded="lg"
    position="relative"
  >
    <Tooltip
      label={productCardItem.product.description}
      whiteSpace="pre-wrap"
      bg="white"
      placement="right-start"
      color="gray.800"
      fontSize="1em"
    >
      <Icon
        as={HamburgerIcon}
        position="absolute"
        top={2}
        left={2}
        fontSize="2xl"
      />
    </Tooltip>

    <Tooltip
      label={productCardItem.product.isAvailable ? 'Available' : 'Unavailable'}
      bg="white"
      placement="top"
      color="gray.800"
      fontSize="1.2em"
    >
      <Icon
        as={productCardItem.product.isAvailable ? CheckIcon : CloseIcon}
        position="absolute"
        top={2}
        right={2}
        fontSize="2xl"
      />
    </Tooltip>

    <Image
      src={productCardItem.product.imageUrl}
      alt={`Picture of ${productCardItem.product.name}`}
      roundedTop="lg"
    />

    <Box p="6">
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        {/* @todo - Update this link to do something more logical (bring to product page?). */}
        <RouterLink to="#">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {productCardItem.product.name}
          </Box>
        </RouterLink>
        <Tooltip
          display={productCardItem.product.isAvailable ? 'flex' : 'none'}
          label="Loan this product"
          bg="white"
          placement="top"
          color="gray.800"
          fontSize="1.2em"
        >
          {/* @todo - Update this link/button to do something more logical. */}
          <RouterLink to="#">
            <Icon
              as={AddIcon}
              display={productCardItem.product.isAvailable ? 'block' : 'none'}
              alignSelf="center"
              h={7}
              w={7}
            />
          </RouterLink>
        </Tooltip>
      </Flex>
    </Box>
  </Box>
);

export default ProductCard;
