import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Drawerbar from '../Drawerbar';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export default function Header(): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      position="sticky"
      zIndex={3}
      top={0}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Drawerbar />
          <Heading as="h4" size="md">
            TPT-Loane
          </Heading>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {NAV_ITEMS.map(navItem => (
              <Link
                key={navItem.href}
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href={navItem.href}
              >
                {navItem.label}
              </Link>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
