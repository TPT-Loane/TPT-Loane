import {
  HStack, Heading, Box, useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils';
import { Drawerbar } from '../Sidebar';

export const HeaderLeftSide: React.FC = () => (
  <HStack spacing={8} alignItems="center">
    <Drawerbar />
    <Heading as={Link} size="md" to="/">
      TPT-Loane
    </Heading>
    <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
      {NAV_ITEMS.map(navItem => {
        const { href, iconName } = navItem;
        const newIconName = iconName;
        return (
          <Link key={href} to={href}>
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
          </Link>
        );
      })}
    </HStack>
  </HStack>
);
