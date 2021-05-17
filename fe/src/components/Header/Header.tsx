import {
  Box,
  Flex,
  useColorModeValue,
<<<<<<< HEAD
} from '@chakra-ui/react';
import { HeaderLeftSide } from './HeaderLeftSide';
=======
  Text,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/all';
import { NAV_ITEMS } from '../../utils';
import { Drawerbar } from '../Sidebar';
>>>>>>> 2276a53... Add possibility to switch between "dark" and "light" theme #69

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
        <HeaderLeftSide />
=======
        <HStack spacing={8} alignItems="center">
          <Drawerbar />
          <Heading as="h4" size="md">
            TPT-Loane
          </Heading>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {NAV_ITEMS.map(navItem => (
              <RouteLink key={navItem.href} to={navItem.href}>
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
        <HStack spacing={12} ml="auto">
          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            aria-label="Switch color mode"
            variant="outline"
          />
        </HStack>
        <HStack />
>>>>>>> 2276a53... Add possibility to switch between "dark" and "light" theme #69
      </Flex>
    </Box>
  );
}
