import {
  HStack, Heading, Text, Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils';
import { Drawerbar } from '../Sidebar';

export const HeaderLeftSide: React.FC = () => (
  <HStack spacing={8} alignItems="center">
    <Drawerbar />
    <Heading as={Link} size="lg" to="/">
      TPT-Loane
    </Heading>
    <HStack as="nav" spacing={2} display={{ base: 'none', md: 'flex' }}>
      {NAV_ITEMS.map(navItem => {
        const { href, label } = navItem;
        return (
          <Link key={href} to={href}>
            <Button p={4} py={1} rounded="md">
              <Text fontSize="lg">{label}</Text>
            </Button>
          </Link>
        );
      })}
    </HStack>
  </HStack>
);
