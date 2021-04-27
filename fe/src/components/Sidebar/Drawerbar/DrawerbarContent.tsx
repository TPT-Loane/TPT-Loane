import { Flex } from '@chakra-ui/react';
// eslint-disable-next-line
import { IoHome } from 'react-icons/io5';
import React from 'react';
import SidebarItem from '../SidebarElements/SidebarItem';
import SidebarItemLink from '../SidebarElements/SidebarItemLink';
import { NAV_ITEMS } from '../../../utils/nav';

export const DrawerbarContent: React.FC = () => (
  <Flex direction="column">
    {NAV_ITEMS.map(navItem => (
      <SidebarItem>
        <SidebarItemLink
          icon={<IoHome size={22} />}
          title={navItem.label}
          where={navItem.href}
        />
      </SidebarItem>
    ))}
  </Flex>
);
