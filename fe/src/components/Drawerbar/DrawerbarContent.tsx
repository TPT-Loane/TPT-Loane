import { Flex } from '@chakra-ui/react';
// eslint-disable-next-line
import { IoHome } from 'react-icons/io5';
import React from 'react';
import { SidebarItemLink } from '../custom/SidebarItemLink';
import { SidebarItem } from '../Sidebar/SidebarItem';

export const DrawerbarContent: React.FC = () => (
  <Flex direction="column">
    <SidebarItem>
      <SidebarItemLink icon={<IoHome size={22} />} title="Home" where="/" />
    </SidebarItem>
    <SidebarItem>
      <SidebarItemLink icon={<IoHome size={22} />} title="About" where="/about" />
    </SidebarItem>
    {/* <SidebarItem>
      <Box boxSizing="border-box" my="1em" mx="1.5em">
        <Box>
          <Text color="gray.400" fontSize="sm">
            © 2021 TPT Loane
          </Text>
        </Box>
      </Box>
    </SidebarItem> */}
  </Flex>
);
