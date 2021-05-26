import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorMode from '../ColorMode';
import { HeaderLeftSide } from './HeaderLeftSide';

export default function Header(): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      position="sticky"
      zIndex={3}
      top={0}
    >
      {/* @todo navbar layout should depend on whether the user is logged in or not */}
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HeaderLeftSide />
        {/* @todo move this to HeaderRightSide component */}
        <HStack spacing={12} ml="auto">
          <ColorMode />
          <Link to="login">
            <Box
              px={2}
              py={1}
              rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            >
              <Text fontSize="xl">Login</Text>
            </Box>
          </Link>
          <Link to="register">
            <Box
              px={2}
              py={1}
              rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            >
              <Text fontSize="xl">Register</Text>
            </Box>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
