import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { SidebarContent } from './SidebarContent';

const Sidebar: React.FC = () => (
  <>
    <Box
      display={{ base: 'none', xl: 'block' }}
      w="14.5em"
      minW="14.5em"
      maxH="80vh"
      top="4em"
      zIndex={1}
      position="sticky"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent />
    </Box>
  </>
);

export default Sidebar;
