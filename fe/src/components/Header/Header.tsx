import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
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
      <Flex h={16} alignItems="center" justifyContent="space-between">
<<<<<<< HEAD
        <HStack spacing={8} alignItems="center">
          <Drawerbar />
          <Heading as="h4" size="md">
            TPT-Loane
          </Heading>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {NAV_ITEMS.map(navItem => (
              <RouteLink
                key={navItem.href}
                to={navItem.href}
                aria-label="Navbar route"
              >
                <Box
                  px={2}
                  py={1}
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                >
                  <Text fontSize="xl">{navItem.label}</Text>
                </Box>
              </RouteLink>
            ))}
          </HStack>
        </HStack>
=======
        <HeaderLeftSide />
>>>>>>> main
      </Flex>
    </Box>
  );
}
