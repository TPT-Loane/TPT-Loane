import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SidebarItem } from './SidebarItem';

export const SidebarContent: React.FC = () => (
  <Flex direction="column">
    {/* <SidebarItemButton icon={<IoHome size={22} />} title="Home" /> */}
    {/* <SidebarItemButton icon={<IoHome size={22} />} title="About" /> */}
    <SidebarItem>
      <Box boxSizing="border-box" my="1em" mx="1.5em">
        <Box>
          <Text color="gray.400" fontSize="xl">
            Hello i am sidebar. Can you make me look pretty please! UwU
            and also some content would be nice :)
          </Text>
        </Box>
      </Box>
    </SidebarItem>

  </Flex>
);
