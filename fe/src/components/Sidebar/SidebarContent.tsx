import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import SidebarItem from './SidebarItem';

export const SidebarContent: React.FC = () => (
  <Flex direction="column">
    <SidebarItem>
      <Box boxSizing="border-box" my="1em" mx="1.5em">
        <Text color="gray.400" fontSize="xl">
          Hello i am sidebar
        </Text>
      </Box>
    </SidebarItem>
  </Flex>
);
