import {
  Box,
  Flex,
  useColorModeValue,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
} from '@chakra-ui/react';
import { HeaderLeftSide } from './HeaderLeftSide';
=======
  Text,
=======
  Text, useColorMode,
>>>>>>> 8089ad7... Fe add possibility to switch between dark and light theme
=======
  Text,
<<<<<<< HEAD
>>>>>>> 7abd4b9... FE Add possibility to switch between "dark" and "light" theme fix
=======
  useColorMode,
<<<<<<< HEAD
>>>>>>> 4c3590b... Add possibility to switch between "dark" and "light" theme #69, but needs a little fix
=======
  IconButton,
>>>>>>> 60ae97d... Add possibility to switch between "dark" and "light" theme #69
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/all';
import { NAV_ITEMS } from '../../utils';
import { Drawerbar } from '../Sidebar';
<<<<<<< HEAD
>>>>>>> 2276a53... Add possibility to switch between "dark" and "light" theme #69
=======
import ColorMode from '../ColorMode';
>>>>>>> a08265d... Add possibility to switch between "dark" and "light" theme,

export default function Header(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
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
<<<<<<< HEAD
<<<<<<< HEAD
        <HStack spacing={12} ml="auto">
          <ColorMode />
        </HStack>
        <HStack />
>>>>>>> 2276a53... Add possibility to switch between "dark" and "light" theme #69
=======
        <HStack spacing={12}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={toggleColorMode}>
            Toggle
            {' '}
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </button>
=======
        <HStack spacing={12} ml="auto">
          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            aria-label="Switch color mode"
            variant="outline"
          />
>>>>>>> 60ae97d... Add possibility to switch between "dark" and "light" theme #69
        </HStack>
        <HStack />
>>>>>>> 4c3590b... Add possibility to switch between "dark" and "light" theme #69, but needs a little fix
      </Flex>
    </Box>
  );
}
