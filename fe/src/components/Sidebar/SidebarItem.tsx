import { Flex } from '@chakra-ui/react';
import React from 'react';

const SidebarItem: React.FC = ({ children }) => (
  <Flex flex={1} flexDirection="column">
    {children}
  </Flex>
);

export default SidebarItem;
