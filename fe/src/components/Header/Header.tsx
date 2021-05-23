import {
  Box,
  Flex,
  useColorModeValue,
<<<<<<< HEAD
<<<<<<< HEAD
} from '@chakra-ui/react';
import { HeaderLeftSide } from './HeaderLeftSide';
=======
  Text,
=======
  Text, useColorMode,
>>>>>>> 8089ad7... Fe add possibility to switch between dark and light theme
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils';
import { Drawerbar } from '../Sidebar';
<<<<<<< HEAD
>>>>>>> 2276a53... Add possibility to switch between "dark" and "light" theme #69
=======
import ColorMode from '../ColorMode';
>>>>>>> a08265d... Add possibility to switch between "dark" and "light" theme,

export default function Header(): JSX.Element {
  const { colorMode } = useColorMode();
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
        <HStack spacing={12} ml="auto" title={colorMode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}>
          <ColorMode />
        </HStack>
        <HStack />
>>>>>>> 2276a53... Add possibility to switch between "dark" and "light" theme #69
      </Flex>
    </Box>
  );
}
