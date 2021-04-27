import { Flex } from '@chakra-ui/react';
import React from 'react';

export const SidebarItem: React.FC = ({ children }) => (
  <Flex borderTopWidth="1px" flex={1} flexDirection="column">
    {children}
  </Flex>
);
