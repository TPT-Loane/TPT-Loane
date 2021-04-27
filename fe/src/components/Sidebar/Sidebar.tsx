import { Box } from '@chakra-ui/react';
import React from 'react';
import { SidebarContent } from './SidebarContent';

const Sidebar: React.FC = () => (
  <>
    <Box
      display={{ base: 'none', xl: 'block' }}
      w="14.5em"
      minW="14.5em"
      maxH="94vh"
      top="3.5em"
      zIndex={1}
    >
      <SidebarContent />
    </Box>
  </>
);

export default Sidebar;
