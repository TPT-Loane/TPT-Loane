import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { SidebarContent } from './SidebarContent';

const Sidebar: React.FC = () => (
  <Box
    display={{ base: 'none', md: 'block' }}
    zIndex={2}
    position="sticky"
    overflowY="auto"
    bg={useColorModeValue('gray.100', 'gray.900')}
  >
    <SidebarContent />
  </Box>
);

export default Sidebar;
