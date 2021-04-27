import { Box, Flex, Text } from '@chakra-ui/react';
// eslint-disable-next-line
import { IoHome } from 'react-icons/io5';
import React from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarItemButton } from './SidebarItemButton';

export const SidebarContent: React.FC = () => (
  <Flex direction="column">
    <SidebarItemButton icon={<IoHome size={22} />} active title="Home" />
    <SidebarItem>
      <Box
        position="absolute"
        bottom={0}
        boxSizing="border-box"
        my="1em"
        mx="1.5em"
      >
        <Box>
          <Text color="gray.400" fontSize="sm">
            © 2021 TPT Loane
          </Text>
        </Box>
      </Box>
    </SidebarItem>
  </Flex>
);
