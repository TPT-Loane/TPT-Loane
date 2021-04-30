import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
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

function ProductCard({ product } : { product: Product }) : JSX.Element {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      minW="18rem"
      maxW="24rem"
      borderWidth="1px"
      rounded="lg"
      position="relative"
    >
      <Tooltip
        label={product.description}
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
        label={product.isAvailable ? 'Available' : 'Unavailable'}
        bg="white"
        placement="top"
        color="gray.800"
        fontSize="1.2em"
      >
        <Icon
          as={product.isAvailable ? CheckIcon : CloseIcon}
          position="absolute"
          top={2}
          right={2}
          fontSize="2xl"
        />
      </Tooltip>

      <Image
        src={product.imageUrl}
        alt={`Picture of ${product.name}`}
        roundedTop="lg"
      />

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          {/* @todo - Update this href to do something more logical (bring to product page?). */}
          <chakra.a href={product.name}>
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Box>
          </chakra.a>
          <Tooltip
            display={product.isAvailable ? 'flex' : 'none'}
            label="Loan this product"
            bg="white"
            placement="top"
            color="gray.800"
            fontSize="1.2em"
          >
            {/* @todo - Update this href/link/button to do something more logical. */}
            <chakra.a
              href="#"
              display={product.isAvailable ? 'flex' : 'none'}
            >
              <Icon as={AddIcon} h={7} w={7} alignSelf="center" />
            </chakra.a>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductCard;
