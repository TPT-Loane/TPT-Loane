import {
  Box, Flex, Heading, HStack, useColorModeValue,
} from '@chakra-ui/react';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Link as RouteLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils';
import { Drawerbar } from '../Sidebar';

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
          <Heading as={Link} size="md" to="/">
            TPT-Loane
          </Heading>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {NAV_ITEMS.map(navItem => {
              const { href, iconName } = navItem;
              const newIconName: IconName = iconName as IconName;
              return (
                <RouteLink key={href} to={href}>
                  <Box
                    px={2}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.200', 'gray.700'),
                    }}
                  >
                    <Box textAlign="center" minW="2em">
                      <FontAwesomeIcon icon={['fas', newIconName]} size="lg" />
                    </Box>
                  </Box>
                </RouteLink>
              );
            })}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
